import { loginUser } from "../utils/request-methods/authClient.mjs";

const loginForm = document.querySelector("#login_form");
const loginEmail = document.querySelector("#login_email");
const loginPassword = document.querySelector("#login_password");

async function processLoginUser(event) {
    event.preventDefault();

    const loggedInUser = await loginUser(loginEmail.value, loginPassword.value);

    if(loggedInUser) {
        const userName = localStorage.getItem('name');
       window.location.replace(`/profile/index.html?profile=${userName}`); 
    } else {
        console.log("Login failed");
        alert("Email or password is incorrect!");
    }
}

loginForm.addEventListener("submit", processLoginUser);