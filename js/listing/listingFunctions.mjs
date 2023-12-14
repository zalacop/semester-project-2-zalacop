let inputCount = 0;
let tagCount = 0;

export function addImage() {
    if (inputCount < 7) {
        const imageContainer = document.querySelector("#add-image");
        const imageButton = document.querySelector("#add-image-btn");
        const imageParagraph = document.querySelector("#image-paragraph");
        const div = document.createElement("div");
        const input = document.createElement("input");
        input.name = "media";
        input.type = "url";
        input.classList.add("form-control", "mx-auto", "my-3");

        div.appendChild(input);

        imageContainer.insertBefore(div, imageParagraph.nextSibling);

        inputCount++;

        if (inputCount === 7) {
            imageButton.style.display = "none";
        }
    } else {
        console.log("You cannot add more than 8 images!");
    }
}

const tagContainer = document.querySelector("#add-tag");

export function addTag() {
    if (tagCount < 2) {
        const tagParagraph = document.querySelector("#tag-paragraph");
        const tagButton = document.querySelector("#add-tag-btn");
        const firstInput = document.querySelector("#tag");
        const div = document.createElement("div");
        const input = document.createElement("input");
        input.type = "text";
        input.name = "tag";
        input.classList.add("form-control", "mx-auto", "my-3");

        div.appendChild(input);

        tagContainer.appendChild(firstInput);
        tagContainer.appendChild(div);

        tagCount++; 

        if (tagCount === 2) {
            tagButton.style.display = "none";
        }
    } else {
        console.log("You cannot add more than 3 tags!");
    }
}