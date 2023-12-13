import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import createListingCard from "../utils/render/listingCard.mjs";
import { setPageTitle, getUserInfoAndDisplayIt } from "../utils/changeTitle.mjs";

displayHeader();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("profile");

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const userInfo = await getUserInfoAndDisplayIt(id);
setPageTitle(userInfo.name);

const listingsContainer = document.querySelector("#listings_container");
const userListings = document.querySelector(".listings-container");

async function displayListing(info) {
    const listings = info.listings;

    if (listings !== undefined && listings !== null && listings !== "") {
        userListings.innerHTML = "";

        listings.forEach(listing => {
            createListingCard(listing[0]);
        });
    } else {
        listingsContainer.innerHTML = "";
    }
}

displayListing(userInfo);

const editButton = document.querySelector("button");
const editButtonHref = `/profile/edit.html?profile=${id}`;

editButton.addEventListener("click", function() {
    window.location.href = editButtonHref;
});
