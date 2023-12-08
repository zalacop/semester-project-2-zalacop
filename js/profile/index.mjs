import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import { getProfileInfo } from "../utils/request-methods/get.mjs";
import createListingCard from "../utils/render/listingCard.mjs";

displayHeader();

const userAvatar = document.querySelector("#user_avatar");
const username = document.querySelector(".name");
const listingsContainer = document.querySelector("#listings_container");
const userListings = document.querySelector(".listings-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("profile");

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}
async function userInfo() {
    const info = await getProfileInfo(id);

    userAvatar.src = info.avatar;
    username.innerText = info.name;
    const listings = info.listings

    if (listings !== undefined && listings !== null && listings !== "") {
        userListings.innerHTML = "";

        listings.forEach(listing => {
            createListingCard(listing[0]);
        });
    } else {
        listingsContainer.innerHTML = "";
    }
}
 
userInfo();

