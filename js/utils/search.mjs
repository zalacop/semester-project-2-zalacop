import { fetchListings, mapListings } from "../homeFunctions.mjs";
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
            listingContainer.appendChild(listing);
        });

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}

export async function searchByTitle(title) {
    try {
        if (latest) {
            latest.innerHTML = "";
        }
        if (viewListingContainer) {
            viewListingContainer.innerHTML = "";
        }
        listingContainer.innerHTML = "";

        const allListings = await fetchListings();

        const filteredListings = allListings.filter(listing => {
            return listing.title.toLowerCase().includes(title.toLowerCase());
        });

        const createHTML = filteredListings.map(listing => {
            const listingCard = createFilteredListingCard(listing);
            return listingCard;
        });

        createHTML.forEach(listing => {
            listingContainer.appendChild(listing);
        });

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}


const getActiveListings = "?_active=true"
const activeListingsURL = urlListings + getActiveListings;
const productContainer = document.querySelector(".product-container");

async function fetchActiveListings() {
    try {
        const response = await fetch(activeListingsURL);
        const listings = await response.json();
        const activeListings = mapListings(listings);
        return activeListings;

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}

export async function displayActiveListings() {
    try {
        if(productContainer) {
            productContainer.innerHTML = "";
;        }

        listingContainer.innerHTML = "";

        const getListings = await fetchActiveListings();

        const createHTML = getListings.map((listing) => {
            const listingCard = createFilteredListingCard(listing);
            return listingCard;
        });

        createHTML.forEach(listing => {
            listingContainer.appendChild(listing);
        });

    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}