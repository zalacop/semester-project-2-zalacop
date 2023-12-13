import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import { urlProfile } from "../utils/url.mjs";
import putMethod from "../utils/request-methods/put.mjs";
import { getUserInfoAndDisplayIt, setPageTitle } from "../utils/changeTitle.mjs";

displayHeader();  

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("profile");

const userInfo = await getUserInfoAndDisplayIt(id);
setPageTitle(userInfo.name);

const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const href = `/profile/index.html?profile=${id}`;

const updateEndpoint = "/media";
const updateURL = urlProfile + "/" + id + updateEndpoint;

