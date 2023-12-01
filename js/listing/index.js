const mainImage = document.querySelector(".main-img");
const previewImages = document.querySelectorAll(".preview img");

function imageGallery() {
    previewImages.forEach(preview => {
        preview.addEventListener("click", function() {
            const smallSrc = preview.src;
            const bigSrc = smallSrc.replace("small", "big");
            mainImage.src = bigSrc;
            previewImages.forEach(preview => preview.classList.remove("active-img"));
            preview.classList.add("active-img")
        })
    })
}

imageGallery();