function mapItem(array) {
    return array.map(item => item);
}

function createImage(src) {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("col-6", "col-md-4", "col-lg-3", "mb-2", "mx-0");

    const imageElement = document.createElement("img");
    imageElement.src = src;

    imageDiv.appendChild(imageElement);

    return imageDiv;
}


export default function createListingDescription(listingInfo) {
    const imageGallery = document.createElement("div");
    imageGallery.classList.add("images-gallery", "mx-auto", "gallery-card");

    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-center");

    const mainImage = document.createElement("img");
    mainImage.src = listingInfo.media[0];
    mainImage.classList.add("main-img", "m-3");

    div.appendChild(mainImage);

    imageGallery.appendChild(div);

    const preview = document.createElement("div");
    preview.classList.add("preview", "mx-auto", "mb-5", "text-center");

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "justify-content-center", "preview_images");

    const images = mapItem(listingInfo.media);

    images.forEach(image => {
        if (image) {
            const imageElement = createImage(image);
            rowDiv.appendChild(imageElement);
        } else {
            console.error("Undefined image:", image);
        }
    });

    preview.appendChild(rowDiv);

    imageGallery.appendChild(preview);

    const textDiv = document.createElement("div");
    textDiv.classList.add("mt-5", "mx-4");

    const headingElement = document.createElement("h3");
    headingElement.classList.add("fs-4");
    headingElement.innerText = listingInfo.title;

    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = listingInfo.description;

    const username = localStorage.getItem('name');
    const sellerName = listingInfo.seller.name;

    if (username == sellerName) {
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "px-4", "py-1", "my-5", "mx-auto", "d-flex", "cancel", "delete");
        deleteButton.innerText = "Delete";

        textDiv.appendChild(headingElement);
        textDiv.appendChild(paragraphElement);
        textDiv.append(deleteButton);
    } else {
        textDiv.appendChild(headingElement);
        textDiv.appendChild(paragraphElement);
    }

    imageGallery.appendChild(textDiv);

    return imageGallery;
}
