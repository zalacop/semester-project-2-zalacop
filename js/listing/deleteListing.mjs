import { deleteMethod } from "../utils/request-methods/delete.mjs";
import { urlListings } from "../utils/url.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("listing");
const deleteURL = urlListings + "/" + id;

const deleteButton = document.querySelector(".delete");

export async function deleteListing() {
    try {
        const userConfirmed = window.confirm("Are you sure you want to delete this listing?");
        
        if (userConfirmed) {
            const deleteRequest = await deleteMethod();
            const response = await fetch(deleteURL, deleteRequest);

            if (response.ok) {
                alert("You have successfully deleted this listing!");
                window.location.replace("/index.html");
            } else {
                alert("You can't delete this post!");
            }
        } else {
            alert("You did not delete this listing!");
        
        }
    } catch (error) {
        throw new Error("Oops, something went wrong!");
    }
}
