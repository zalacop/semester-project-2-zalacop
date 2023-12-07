import logOut from "../utils/logout.mjs";

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

mobileLogoutButton.addEventListener('click', logOut);
desktopLogoutButton.addEventListener('click', logOut);