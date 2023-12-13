import { getProfileInfo } from "./request-methods/get.mjs";

export async function setPageTitle(title) {
    function removeOuterTags(inputString) {
        const parser = new DOMParser();
        const profileTitle = parser.parseFromString(inputString, "text/html");
        return profileTitle.body.innerText;
    }

    const inputString = `<p>${title}</p>`;
    const newTitle = removeOuterTags(inputString);

    document.title = newTitle;
}

export async function getUserInfoAndDisplayIt(id) {
    const userAvatar = document.querySelector("#user_avatar");
    const username = document.querySelector(".name");

    const info = await getProfileInfo(id);

    userAvatar.src = info.avatar;
    username.innerText = info.name;

    return info;
}