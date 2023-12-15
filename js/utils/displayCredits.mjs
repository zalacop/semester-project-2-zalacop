const showCredits = document.querySelector("#total-credits");

export default function displayCredits() {
    const isThereToken = localStorage.getItem('accessToken');

    if(isThereToken) {
        const getCredits = localStorage.getItem('credits');
        showCredits.innerText = getCredits;
        return showCredits;

    } else {
        return showCredits.innerHTML = "";
    }
}
