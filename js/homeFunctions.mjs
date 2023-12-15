import createListingCard from "./utils/render/listingCard.mjs";
import { urlListings } from "./utils/url.mjs";

const getLatestListings = "?sort=created";

const activeListingsURL = urlListings + getLatestListings;

export function mapListings(listings) {
    return listings
        .filter((listing) => listing.media && listing.media.length > 0)
        .map((listing) => {
            const imageSrc = listing.media[0];

            const image = new Image();
            image.src = imageSrc;

            if(image.complete) {
                return{
                    "id": listing.id,
                    "media": imageSrc,
                    "title": listing.title,
                    "description": listing.description,
                    "endsAt": listing.endsAt,
                    "tags": listing.tags
            }} else {
                return null;
            }
        })
        .filter((listing) => listing !== null);
}

async function fetchListings() {
    try {
        const response = await fetch(activeListingsURL);
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
            return listingContainer.appendChild(listing);
        });

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}