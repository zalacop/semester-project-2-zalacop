export default function logOut() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if(confirmLogout) {
        window.localStorage.clear();
        window.location.replace('/index.html');
    } else {
        console.log("Canceled logout!");
    }
}