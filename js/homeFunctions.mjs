import createListingCard from "./utils/render/listingCard.mjs";
import { urlListings } from "./utils/url.mjs";

const getLatestListings = "?sort=created";

const latestListingsURL = urlListings + getLatestListings;

export function mapListings(listings) {
    const listingsWithLoadedImages = listings
        .filter((listing) => listing.media && listing.media.length > 0)
        .map((listing) => loadImage(listing)
            .then(() => listing)
            .catch(() => null));

    return Promise.all(listingsWithLoadedImages)
        .then((listings) => listings.filter((listing) => listing !== null));
}

function loadImage(listing) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = listing.media[0];
    });
}

async function fetchListings() {
    try {
        const response = await fetch(latestListingsURL);
        const listings = await response.json();
        const allListings = mapListings(listings);
        return allListings;

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}

const listingContainer = document.querySelector(".listings-container");

export async function displayListings() {
    try {
        listingContainer.innerHTML = "";

        const getListings = await fetchListings();

        const createHTML = getListings.map((listing) => {
            const listingCard = createListingCard(listing);
            return listingCard;
        });

        createHTML.forEach(listing => {
            listingContainer.appendChild(listing);
        });

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}
