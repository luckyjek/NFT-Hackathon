//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/4.x/erc721)
// SPDX-License-Identifier: MIT
// 0xd755f813354dacda4119ffc40f035a29ac433d9e
pragma solidity ^0.8.0;

// ERC standards
import "@openzeppelin/contracts/utils/introspection/ERC165.sol"; // for supportsInterface()
import "@openzeppelin/contracts/token/ERC721/IERC721.sol"; // for interface
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol"; // for _checkOnERC721Received()
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol"; // for name(), symbol()

// utils 
// import "@openzeppelin/contract/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";


contract ArtIPFSToken is ERC165, IERC721, IERC721Metadata{
    using SafeMath for uint256;
    using Address for address;
    
    // Token name
    string private _name;

    // Token symbol
    string private _symbol;
    
    // Token base URI
    string private _baseURI;
    
    // Mapping from token ID to owner address
    mapping (uint256 => address) private _tokenOwners;
    
    // Mapping owner address to token count
    mapping (address => uint256) private _balances;
    
    // Mapping from token ID to approved address, allowancer
    mapping (uint256 => address) private _tokenApprovals;
    
    // Mapping from owner to operator approvals, middleware
    mapping (address => mapping (address => bool)) private _operatorApprovals;
    
    // Mapping from token ID to token's IFPS URIs
    mapping(uint256 => string) tokenURIs;


    struct asset {
        string ipfsHash;
    }
    
    asset[] public allTokens;
    
    constructor(string memory name_, string memory symbol_, string memory baseURI_) {
        // owner = msg.sender; => _msgSender() in Context.sol
        _name = name_;
        _symbol = symbol_;
        _baseURI = baseURI_;
    }

    // IERC165-supportsInterface
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }
    
    // ERC721 functions
    function balanceOf(address owner) public view virtual override returns (uint256) {
        require(owner != address(0), "ERC721: balance query for the zero address");
        return _balances[owner];
    }

    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _tokenOwners[tokenId];
        require(owner != address(0), "Invalid Token");
        return owner;
    }
    
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");

        _transfer(from, to, tokenId);
    }
    
     // _msgSender() at Context.sol
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }
    
    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {
        require(_exists(tokenId), "ERC721: operator query for nonexistent token");
        address owner = ArtIPFSToken.ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }
    
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _tokenOwners[tokenId] != address(0);
    }
    
    function getApproved(uint256 tokenId) public view virtual override returns (address) {
        require(_exists(tokenId), "ERC721: approved query for nonexistent token");
        return _tokenApprovals[tokenId];
    }
    
    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {
        return _operatorApprovals[owner][operator];
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual {
        require(ArtIPFSToken.ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");
        require(to != address(0), "ERC721: transfer to the zero address");



        // reset approved address : Clear approvals from the previous owner
        _approve(address(0), tokenId);

        _balances[from] = _balances[from].sub(1);
        _balances[to] = _balances[to].add(1);

        //transfer : change the owner of the token
        _tokenOwners[tokenId] = to;
 
        emit Transfer(from, to, tokenId);
    }
    
    // 세이프 영역
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        safeTransferFrom(from, to, tokenId, "");
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public virtual override {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        _safeTransfer(from, to, tokenId, _data);
    }

    function _safeTransfer(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) internal virtual {
        _transfer(from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");
    }

    function _checkOnERC721Received(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {
                return retval == IERC721Receiver.onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721: transfer to non ERC721Receiver implementer, receipt of token is NOT completed");
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }
    
    // approve
    function approve(address to, uint256 tokenId) public virtual override {
        address owner = ownerOf(tokenId);
        require(to != owner, "ERC721: approval to current owner");

        require(
            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),
            "ERC721: approve caller is not owner nor approved for all"
        );

        _approve(to, tokenId);
    }

    function _approve(address to, uint256 tokenId) internal virtual {
        _tokenApprovals[tokenId] = to;
        emit Approval(ArtIPFSToken.ownerOf(tokenId), to, tokenId);
    }

    function setApprovalForAll(address operator, bool approved) public virtual override {
        require(operator != _msgSender(), "ERC721: approve to caller");

        _operatorApprovals[_msgSender()][operator] = approved;
        emit ApprovalForAll(_msgSender(), operator, approved);
    }

    // mint
    function mint(address to, string calldata ipfsHash) external payable {
        require(to != address(0), "ERC721: mint to the zero address");
        
        asset memory newAsset = asset(ipfsHash);
        allTokens.push(newAsset);
        uint tokenId = allTokens.length - 1;
        // arts.push(Art(_name, _createdBy, _inspiredBy, block.timestamp));
        // uint id = arts.length - 1;
        
        //token id starts from 0, index of assets array
        _tokenOwners[tokenId] = to;
        _balances[to] = _balances[to].add(1);

        //Token Metadata
        tokenURIs[tokenId] =  string(abi.encodePacked(baseURI(), ipfsHash));
        emit Transfer(address(0), msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return tokenURIs[tokenId];
    }
    
    //ERC721Enumerable
    function totalSupply() public view returns (uint) {
        return allTokens.length;
    }
    
    // ERC721Metadata functions
    function name() public view virtual override returns (string memory) {
        return _name;
    }
    
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }
    
    function baseURI() internal view virtual returns (string memory) {
        return _baseURI;
    }
}