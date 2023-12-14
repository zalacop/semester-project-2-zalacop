import { postMethod } from "../utils/request-methods/post.mjs";
import { urlListings } from "../utils/url.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("listing");
const bid = "/bids";

const bidURL = urlListings + "/" + id + bid;

export default async function bidOnListing() {
    const input = document.querySelector(".bid-value").value;
    
    if (isNaN(Number(input))) {
        alert("Your bid must be a valid number!");
        return;
    }

    const bidData = {
        amount: Number(input)
    };

    try {
        const postRequest = await postMethod(bidData);
        const response = await fetch(bidURL, postRequest);

        if (response.ok) {
            location.reload();
        } else if (response.status === 401) {
            alert("You must log in to place a bid!");
        } else {
            alert("An error occurred while processing your bid!");
        }
    } catch (error) {
        console.log(error);
    }
}