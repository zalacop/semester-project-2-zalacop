import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import createListingCard from "../utils/render/listingCard.mjs";
import { setPageTitle, getUserInfoAndDisplayIt } from "../utils/changeTitle.mjs";
import { getProfileInfo } from "../utils/request-methods/get.mjs";

displayHeader();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const username = params.get("profile");

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const userInfo = await getUserInfoAndDisplayIt(username);
setPageTitle(userInfo.name);

const listingsContainer = document.querySelector("#listings_container");
const userListings = document.querySelector(".listings-container");

async function displayListing(name) {
    const listingInfo = await getProfileInfo(username);
    const listings = listingInfo.listings;

    if(listings) {
        const yourListings = document.querySelector("#your-listings");
        yourListings.style.display = "block";
        const createHTML = listings.map((listing) => {
            const listingCard = createListingCard(listing);
            return listingCard;
        });

        createHTML.forEach(listing => {
            return userListings.appendChild(listing);
        });
    } else {
        const yourListings = document.querySelector("#your-listings");
        yourListings.style.display = "none";
    }
}

displayListing(username);

const editButton = document.querySelector("button");
const editButtonHref = `/profile/edit.html?profile=${username}`;

editButton.addEventListener("click", function() {
    window.location.href = editButtonHref;
});
