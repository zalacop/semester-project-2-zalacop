import { mapListings } from "../homeFunctions.mjs";
import { createFilteredListingCard } from "./render/filteredListingCard.mjs";
import { urlListings } from "./url.mjs";

const latest = document.querySelector("#latest");
const viewListingContainer = document.querySelector("#view-listing");

async function filterListings(tag) {
    try {
        listingContainer.innerHTML = "";
        function buildUrl(tag) {
            if(tag === null && tag === "") {
                return urlListings;
            } else {
                return urlListings + `?_tag=${tag}`;
            }
        }
        const url = buildUrl(tag);

        const response = await fetch(url);
        const listings = await response.json();
        const allListings = mapListings(listings);
        return allListings;
    } catch(error) {
        throw new Error("Oops, something went wrong!");
    }
}

const listingContainer = document.querySelector(".listings-container");

export async function displayFilteredListings(tag) {
    try {
        if(latest) {
            latest.innerHTML = "";
        }
        if(viewListingContainer) {
            viewListingContainer.innerHTML = "";
        }
        listingContainer.innerHTML = "";

        const getFilteredListings = await filterListings(tag);

        const createHTML = getFilteredListings.map((listing) => {
            const listingCard = createFilteredListingCard(listing);
            return listingCard;
        });

        createHTML.forEach(listing => {
            return listingContainer.appendChild(listing);
        });

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}


