const creditContainer = document.querySelector(".credits");
const showCredits = document.querySelector("#total-credits");

export default function displayCredits() {
    const isThereToken = localStorage.getItem('accessToken');

    if(!isThereToken) {
        return creditContainer.innerHTML = "";
    } else {
        const getCredits = localStorage.getItem('credits');
        showCredits.innerText = getCredits;
        return showCredits;
    }
}
