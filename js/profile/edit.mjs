import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import { urlProfile } from "../utils/url.mjs";
import putMethod from "../utils/request-methods/put.mjs";
import { getUserInfoAndDisplayIt, setPageTitle } from "../utils/changeTitle.mjs";
import { validateURL } from "../sign-in/validation.mjs";

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

async function updateAvatar(url) { 
    try {
        const body = {avatar: url};
        const putRequest = await putMethod(body);
        const response = await fetch(updateURL, putRequest);

        if(response.ok) {   
            localStorage.removeItem('avatar');
            localStorage.setItem('avatar', url);
            
            alert("You successfully updated your avatar!");
            window.location.href = href;
        } else {
            alert("You did not update your avatar!");
        }
    } catch (error) {
        console.log(error);
    }
}

save.addEventListener('click', function(event) {
    event.preventDefault();
    const input = document.querySelector("#new_avatar").value;
    if(validateURL(input)) {
        updateAvatar(input);
    }
});

cancel.addEventListener('click', () => {
    window.location.href = href;
})
