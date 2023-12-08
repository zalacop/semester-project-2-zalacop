export default function createListingCard(singleListing) {
    const div = document.createElement("div");
    div.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "col-12", "mb-5");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "h-100");

    const listingLink = document.createElement("a");
    listingLink.href = `/listing/index.html?listing=${singleListing.id}`;

    const image = document.createElement("img");
    image.src = singleListing.media;
    image.classList.add("card-img-top", "m-2", "d-xs-flex", "align-items-center", "xs-height");

    const h3 = document.createElement("h3");
    h3.classList.add("card-title", "fs-5", "m-3");
    h3.innerText = singleListing.title;

    const endDate = document.createElement("p");
    endDate.classList.add("text-body-secondary", "mx-3");
    endDate.innerText = `Ends on: ${singleListing.endsAt}`;

    listingLink.appendChild(image);
    listingLink.appendChild(h3);
    listingLink.appendChild(endDate);

    cardDiv.appendChild(listingLink);

    div.appendChild(cardDiv);

    document.body.appendChild(div);
}