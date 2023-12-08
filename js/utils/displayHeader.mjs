import createLoggedInUserHeader from "./render/loggedHeaderHTML.mjs";
import createUnregisteredHeader from "./render/notLoggedHeaderHTML.mjs";

const header = document.querySelector("header");

export default function displayHeader() {
    header.innerHTML = " ";

    const isThereToken = localStorage.getItem('accessToken');

    if(isThereToken) {
        const headerInfo = {
            "name": localStorage.getItem('name'),
            "avatar": localStorage.getItem('avatar')
        }
        return createLoggedInUserHeader(headerInfo);

    } else {
        return createUnregisteredHeader();
    }
}