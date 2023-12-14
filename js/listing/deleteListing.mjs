import { deleteMethod } from "../utils/request-methods/delete.mjs";
import { urlListings } from "../utils/url.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("listing");
const deleteURL = urlListings + "/" + id;

const deleteButton = document.querySelector(".delete");

export async function deleteListing() {
    try {
        const deleteRequest = await deleteMethod();
        const response = await fetch(deleteURL, deleteRequest);

        if(response.ok) {
            alert("You have successfully deleted this listing!");
            window.location.replace("/index.html");
        } else {
            console.log("You can't delete this post!");
            alert("You can't delete this post!");
        }
    } catch (error) {
        console.log(error);
    }
}