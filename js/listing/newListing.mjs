import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import { addImage, addTag } from "./listingFunctions.mjs";

displayHeader();  

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const imageButton = document.querySelector("#add-image-btn");
const tagButton = document.querySelector("#add-tag-btn");

imageButton.addEventListener('click', addImage);
tagButton.addEventListener('click', addTag);




