import { validateRegistration } from "./validation.mjs";
import { registerUser } from "../utils/request-methods/authClient.mjs";

const registerForm = document.querySelector("#register_form");
const registerEmail = document.querySelector("#register_email");
const username = document.querySelector("#username");
const registerPassword = document.querySelector("#register_password");
const avatar = document.querySelector("#avatar_url");

async function validateAndRegisterUser(event) {
    event.preventDefault();

    if(validateRegistration()) {
        const user = {
            name: username.value,
            email: registerEmail.value,
            password: registerPassword.value,
            avatar: avatar.value
        }

        const registeredUser = await registerUser(user);
        alert("Registration was successful, you can now Log in!");
        window.location.replace("/sign-in/index.html");
    } else {
        alert("Registration was unsuccessful!");
    }
}

registerForm.addEventListener("submit", validateAndRegisterUser);