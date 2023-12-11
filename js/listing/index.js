import displayHeader from "../utils/displayHeader.mjs";
import logOut from "../utils/logout.mjs";
import { urlListings } from "../utils/url.mjs";
import createListingDescription from "../utils/render/listingDescription.mjs";
import createBidInfoCard from "../utils/render/bidInfo.mjs";

displayHeader();  

const mobileLogoutButton = document.querySelector("#mobileLogout");
const desktopLogoutButton = document.querySelector("#desktopLogout");

if (mobileLogoutButton && desktopLogoutButton) {
    mobileLogoutButton.addEventListener('click', logOut);
    desktopLogoutButton.addEventListener('click', logOut);
}

const productContainer = document.querySelector(".product-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("listing");
const sellerInfo = "_seller=true";
const bidsInfo =  "_bids=true"

const listingURL = urlListings + "/" + id + "?" + sellerInfo + "&" + bidsInfo;

async function singleListingPost() {
    try {
        productContainer.innerHTML = "";
        const response = await fetch(listingURL);
        const listing = await response.json();
        const listingInfo = createListingDescription(listing);
        const biddingInfo = createBidInfoCard(listing);

        console.log(listing)

        productContainer.appendChild(listingInfo);
        productContainer.appendChild(biddingInfo);

        const mainImage = document.querySelector(".main-img");
        const previewContainer = document.querySelector(".preview");

        previewContainer.addEventListener("click", function (event) {
            const smallSrc = event.target.src;
            const bigSrc = smallSrc.replace("small", "big");
            mainImage.src = bigSrc;

            const previewImages = document.querySelectorAll(".preview img");
            previewImages.forEach((img) => img.classList.remove("active-img"));

            event.target.classList.add("active-img");
        });



    } catch (error) {
        console.log(error);
    }
}

singleListingPost();

