import { urlRegister, urlLogin } from "../url.mjs";

export async function registerUser(userRegisterData) {
    try {
        const registerData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRegisterData),
        }
        const response = await fetch(urlRegister, registerData);
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}

export async function loginUser(email, password) {
    try {
        const loginInfo = {
            email: email,
            password: password
        }

        const loginData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
        }

        const response = await fetch(urlLogin, loginData);
     
        if(response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            localStorage.setItem('avatar', data.avatar);
            localStorage.setItem('credits', data.credits)

            return data;

        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}