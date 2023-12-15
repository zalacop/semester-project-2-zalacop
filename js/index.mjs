import displayHeader from "./utils/displayHeader.mjs";
import logOut from "./utils/logout.mjs";
import { displayListings } from "./homeFunctions.mjs";
import { displayFilteredListings } from "./utils/search.mjs";
import displayCredits from "./utils/displayCredits.mjs";

displayHeader();

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const newListing = document.querySelector("#new_listing");

function displayButton() {
    const isThereToken = localStorage.getItem('accessToken');
    
    if (isThereToken) {
        newListing.style.display = "block";
    } else {
        newListing.style.display = "none";
    }
}

displayButton();

displayListings();

const search = document.querySelector("#search");

search.addEventListener("keypress", () => displayFilteredListings(search.value));

displayCredits();
