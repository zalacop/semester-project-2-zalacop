import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import { setPageTitle } from "../utils/changeTitle.mjs";
import { displayFilteredListings } from "../utils/search.mjs";
import { displaySingleListing, singleListingPost } from "./functions.mjs";

displayHeader();  

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("listing");

displaySingleListing();

const listingInfo = await singleListingPost(id);
setPageTitle(listingInfo.title);

const search = document.querySelector("#search");

search.addEventListener("keypress", () => displayFilteredListings(search.value));
