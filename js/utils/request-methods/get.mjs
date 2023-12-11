import { urlProfile, urlListings } from "../url.mjs";

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

export async function getProfileInfo(name) {
    try {
        const userProfileURL = urlProfile + "/" + name + "?_listings";
        const getRequest = await getMethod();
        const response = await fetch(userProfileURL, getRequest);
        const profile = await response.json();

        let getListings = profile._count.listings;

        if (Array.isArray(getListings)) {
            return getListings.map(item => ({
                "id": item.id,
                "title": item.title,
                "media": item.media,
                "endsAt": item.endsAt
            }))
        } else {
            getListings = [];
        }

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