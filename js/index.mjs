import displayHeader from "./utils/displayHeader.mjs";
import logOut from "./utils/logout.mjs";
import { displayListings } from "./homeFunctions.mjs";
import displayCredits from "./utils/displayCredits.mjs";
import { displayActiveListings, displayFilteredListings } from "./utils/search.mjs";

displayHeader();

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

displayCredits();

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

const activeMobileListings = document.querySelector("#active-mobile");
const watchMobileListings = document.querySelector("#watch-mobile");
const foodMobileListings = document.querySelector("#food-mobile");
const alcoholMobileListings = document.querySelector("#alcohol-mobile");
const animalMobileListings = document.querySelector("#animal-mobile");

if(activeMobileListings && watchMobileListings && foodMobileListings && alcoholMobileListings && animalMobileListings) {
    activeMobileListings.addEventListener('click', () => displayActiveListings());
    watchMobileListings.addEventListener('click', () => displayFilteredListings("watch"));
    foodMobileListings.addEventListener('click', () => displayFilteredListings("food"));
    alcoholMobileListings.addEventListener('click', () => displayFilteredListings("alcohol"));
    animalMobileListings.addEventListener('click', () => displayFilteredListings("animal"));
}

const activeDesktopListings = document.querySelector("#active-desktop");
const watchDesktopListings = document.querySelector("#watch-desktop");
const foodDesktopListings = document.querySelector("#food-desktop");
const alcoholDesktopListings = document.querySelector("#alcohol-desktop");
const animalDesktopListings = document.querySelector("#animal-desktop");

if(activeDesktopListings && watchDesktopListings && foodDesktopListings && alcoholDesktopListings && animalDesktopListings) {
    activeDesktopListings.addEventListener('click', () => displayActiveListings());
    watchDesktopListings.addEventListener('click', () => displayFilteredListings("watch"));
    foodDesktopListings.addEventListener('click', () => displayFilteredListings("food"));
    alcoholDesktopListings.addEventListener('click', () => displayFilteredListings("alcohol"));
    animalDesktopListings.addEventListener('click', () => displayFilteredListings("animal"));
}