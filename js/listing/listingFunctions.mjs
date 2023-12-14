import { postMethod } from "../utils/request-methods/post.mjs";
import { urlListings } from "../utils/url.mjs";

let inputCount = 0;
let tagCount = 0;

export function addImage() {
    if (inputCount < 7) {
        const imageContainer = document.querySelector("#add-image");
        const imageButton = document.querySelector("#add-image-btn");
        const firstInput = document.querySelector("#image");
        const imageParagraph = document.querySelector("#image-paragraph");
        const input = document.createElement("input");
        input.name = "media";
        input.type = "url";
        input.classList.add("form-control", "mx-auto", "my-3");

        imageContainer.appendChild(input);
        imageContainer.appendChild(firstInput);

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
        const input = document.createElement("input");
        input.type = "text";
        input.name = "tag";

        input.classList.add("form-control", "mx-auto", "my-3");

        tagContainer.appendChild(input);

        tagContainer.appendChild(firstInput);

        tagCount++; 

        if (tagCount === 2) {
            tagButton.style.display = "none";
        }
    } else {
        console.log("You cannot add more than 3 tags!");
    }
}

const title = document.querySelector("#title").value;
const ends = document.querySelector("#end-date").value;
const description = document.querySelector("#description").value;
const tags = Array.from(document.querySelectorAll('input[name="tag"]'))
                .map(tags => tags.value);
const media = Array.from(document.querySelectorAll('input[name="media"]'))
                .map(media => media.value);

async function newListing() {
    const listingData = {
        title: title,
        endsAt: ends,
        description: description,
        tags: tags,
        media: media
    }
    console.log(listingData)

    try {
        const postRequest = await postMethod(listingData);
        const response = await fetch(urlListings, postRequest);
        const json = await response.json();
        console.log(json);
        return json;
    } catch(error) {
        console.log(error);
    }

}

export async function addNewListing(event) {
    event.preventDefault();
    const response = await newListing();
    const id = response.id;
    console.log(id);

    const newListingData = {
        title: title.value = '',
        endsAt: ends.value = '',
        description: description.value = '',
        tags: tags.value = [],
        media: media.value = []
    }

    window.location.replace(`/listing/index.html?listing=${id}`)
}