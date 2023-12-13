const registerEmail = document.querySelector("#register_email");
const emailError = document.querySelector("#emailError");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError")
const registerPassword = document.querySelector("#register_password");
const passwordError = document.querySelector("#passwordError");
const repeatPassword = document.querySelector("#repeat_password");
const repeatError = document.querySelector("#repeatError");
const avatarUrl = document.querySelector("#avatar_url");
const urlError = document.querySelector("#urlError");
const registerButton = document.querySelector("#register_button");

export function validateRegistration() {
    const isValidEmail = validateEmail(registerEmail.value);
    const isValidUsername = validateUsername(username.value);
    const isValidPassword = validatePassword(passwordError, registerPassword.value, 7, "Password much have at least 8 characters!");
    const isMatchingPassword = passwordMatches(repeatError, registerPassword.value, repeatPassword.value, "Repeat password must be the same as password!");
    const isMatchingUrl = validateURL(avatarUrl.value);

    return isValidEmail && isValidUsername && isValidPassword && isMatchingPassword && isMatchingUrl;
}

function validateEmail(email) {
    const regEx1 = /^([a-zA-Z0-9._]+)(@stud\.noroff\.no)$/gm;
    const regEx2 = /^([a-zA-Z0-9._]+)(@noroff\.no)$/gm;
    
    const patternMatches1 = regEx1.test(email);
    const patternMatches2 = regEx2.test(email);

    if(patternMatches1 || patternMatches2) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.innerHTML = `<p class="alert alert-danger">Email must be @noroff.no or @stud.noroff.no</p>`
        return false;
    }
}

function validateUsername(user) {
    const regExUsername = /^[a-z0-9_]{4,20}$/;

    const patternMatchesUsername = regExUsername.test(user);

    if(patternMatchesUsername) {
        usernameError.style.display = "none";
        return true;
    } else {
        usernameError.innerHTML = `<p class="alert alert-danger">Username must not contain punctuation symbols apart from underscore and must be between 4 and 20 characters!`;
        return false;
    }
}

function checkLength(value, len) {
    return value.trim().length > len;
}

function validatePassword(errorType, value, minLength, error) {
    if(checkLength(value, minLength) === true) {
        errorType.style.display = "none";
        return true;
    } else {
        errorType.innerHTML = `<p class="alert alert-danger">${error}</p>`;
        return false;
    }
}

function passwordMatches(errorType, password, confirm, error) {
    if(password === confirm) {
        errorType.style.display = "none";
        return true;
    } else {
        errorType.innerHTML = `<p class="alert alert-danger">${error}</p>`;
        return false;
    }
}

export function validateURL(url) {
    const regExURL = /^(https?):\/\/(www\.)?([a-zA-Z0-9]{2,20}(?:\.[a-zA-Z]{2,})+)(\/.*)?$/;

    const patternMatchesURL = regExURL.test(url);

    if(patternMatchesURL) {
        urlError.style.display = "none";
        return true;
    } else {
        urlError.innerHTML = `<p class="alert alert-danger">Please enter a valid URL link!</p>`;
        return false; 
    }
}