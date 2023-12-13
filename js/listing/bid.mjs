import { postMethod } from "../utils/request-methods/post.mjs";
import { urlListings } from "../utils/url.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("listing");
const bid = "/bids";

const bidURL = urlListings + "/" + id + bid;

export default async function bidOnListing() {
    const input = document.querySelector(".bid-value").value;
    const bidData = {
        amount: Number (input)
    }
    try {
        const postRequest = await postMethod(bidData);
        const response = await fetch(bidURL, postRequest);

        if (response.ok) {
            location.reload();
        } else {
            alert("You must login to place a bid!");
        }
    } catch (error) {
        console.log(error);
    }
}



