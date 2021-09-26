//initialize the plugins
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
    imageResizeTargetWidth: 256,
    imageResizeMode: "contain",

    //callback when the image is added
    onaddfile: (err, fileItem) => {
        console.log(err, fileItem.getMetadata("resize"));
    },
    imageTransformVariants: {
        thumb_medium_: (transforms) => {
            transforms.resize.size.width = 512;
            return transforms;
        },
        thumb_small_: (transforms) => {
            transforms.resize.size.width = 64;
            return transforms;
        },
    },
});

function submit() {
    // agreeBtn();
    //작품명
    let fileInfo = document.querySelector(".filepond--label-action");
    let inputGroup = document.getElementById("inputGroup").value;
    let eth = document.getElementById("eth-v").value;
    let des = document.getElementById("des").value;
    let chek1 = document.getElementsByName("heckbox1").checked;
    // let chek2 = document.getElementsByName("heckbox2").value;

    // if (!userId.value) return alert("Please enter account ID.");
    // if (userPs.value !== userConfirmPs.value)
    //     return alert("Incorrect password.");

    var req = {
        inputGroup: inputGroup,
        des: des,
    };

    fetch("/registerArt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                // location.href = "/login";
                alert(res.success);
            } else {
                if (res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("Error occurs on register");
        });
}

function agreeBtn() {
    var chkbox = document.getElementsByName("agree");
    var chk = false;

    for (var i = 0; i < chkbox.length; i++) {
        if (chkbox[i].checked) {
            chk = true;
        } else {
            chk = false;
        }
    }

    if (chk) {
        alert("발행이 완료됐습니다");
        return false;
    } else {
        alert("모든 약관에 동의해 주세요.");
        return;
    }
}
