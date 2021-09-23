function imgPreview() {
    document.addEventListener("DOMContentLoaded", () => {
        const recentImageDataUrl = localStorage.getItem("recent-image");
        if (recentImageDataUrl) {
            document
                .querySelector("#imgPreview")
                .setAttribute("src", recentImageDataUrl);
        }
    });
}
imgPreview();

// modal test _ show
function viewF() {
    let openLink = document.querySelector(".open-link");
    console.log(openLink);
    openLink.style.display = "inline-block";
}

//test_remove
function removeF() {
    let openLink = document.querySelector(".open-link");
    openLink.style.display = "none";
}

// getproUser
axios({
    method: "get",
    url: "https://ca6ec645-a4d6-4572-82a1-6768e39df010.mock.pstmn.io/getproUser",
    responseType: "json",
}).then(function (response) {
    console.log(response.data);
    console.log(response.data.Userdata[0].user_nickname);
});

