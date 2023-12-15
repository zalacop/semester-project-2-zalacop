import { urlProfile } from "../url.mjs";

export async function getMethod() {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const getData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        }
        return getData;
    } catch (error) {
        console.log(error);
    }
}

export async function getProfileInfo(name,) {
    try {
        const userProfileURL = urlProfile + "/" + name + "?_listings=true";
        const getRequest = await getMethod();
        const response = await fetch(userProfileURL, getRequest);
        const profile = await response.json();

        return {
            "name": profile.name,
            "email": profile.email,
            "avatar": profile.avatar,
            "listings": profile.listings,
            "credits": profile.credits
        };
    } catch (error) {
        console.log(error);
    }
}