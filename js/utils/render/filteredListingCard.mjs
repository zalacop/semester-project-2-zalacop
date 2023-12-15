export function createFilteredListingCard(filteredListing) {
const div = document.createElement("div");
div.classList.add("mb-5");

const cardDiv = document.createElement("div");
cardDiv.classList.add("card", "filter", "w-75", "mx-auto");

const listingLink = document.createElement("a");
listingLink.href = `/listing/index.html?listing=${filteredListing.id}`;

const rowDiv = document.createElement("div");
rowDiv.classList.add("row", "align-items-center");

const imageDiv = document.createElement("div");
imageDiv.classList.add("col-md-6", "d-flex", "align-items-center");

const image = document.createElement("img");
image.src = filteredListing.media;
image.classList.add("img-fluid", "m-2");

imageDiv.appendChild(image);

const bodyDiv = document.createElement("div");
bodyDiv.classList.add("col-md-6");

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const title = document.createElement("h3");
title.classList.add("card-title", "fs-4");
title.textContent = filteredListing.title;

const description = document.createElement("p");
description.classList.add("card-text");
description.textContent = filteredListing.description;

let date = new Date(filteredListing.endsAt);
    const dateFormat = {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    };

const endDate = document.createElement("p");
endDate.classList.add("card-text", "text-body-secondary");
endDate.textContent = `Ends on: ${date.toLocaleDateString("en-GB", dateFormat)}`;

cardBody.appendChild(title);
cardBody.appendChild(description);
cardBody.appendChild(endDate);

bodyDiv.appendChild(cardBody);

rowDiv.appendChild(imageDiv);
rowDiv.appendChild(bodyDiv);

listingLink.appendChild(rowDiv);
cardDiv.appendChild(listingLink);
div.appendChild(cardDiv);

return div;
}