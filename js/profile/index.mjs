import logOut from "../utils/logout.mjs";
import { getProfileInfo } from "../utils/request-methods/get.mjs";
import createListingCard from "../utils/render/listingCard.mjs";
// import createLoggedInUserHeader from "../utils/render/loggedHeaderHTML.mjs";

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

mobileLogoutButton.addEventListener('click', logOut);
desktopLogoutButton.addEventListener('click', logOut);

const header = document.querySelector("header");

const userAvatar = document.querySelector("#user_avatar");
const username = document.querySelector(".name");
const listingsContainer = document.querySelector("#listings_container");
const userListings = document.querySelector(".listings-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("profile");

async function userInfo() {
    const info = await getProfileInfo(id);

    userAvatar.src = info.avatar;
    username.innerText = info.name;
    const listings = info.listings

    if (listings !== undefined && listings !== null && listings !== "") {
        userListings.innerHTML = "";

        listings.forEach(listing => {
            createListingCard(listing);
        });
    } else {
        listingsContainer.innerHTML = "";
    }
}
userInfo()

