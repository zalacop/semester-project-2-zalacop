export default function createUnregisteredHeader() {
    const header = document.querySelector('header');
    header.classList.add("d-flex", "justify-content-between", "align-items-center", "px-md-5", "px-xs-2", "w-100");

    const logoDiv = document.createElement('div');
    logoDiv.classList.add("m-3", "mt-4", "logo_div");

    const homeLink = document.createElement('a');
    homeLink.href = '/index.html';

    const logo = document.createElement('img');
    logo.src = '/images/mad bids(1).svg';
    logo.alt = 'Mad Bids logo';
    logo.classList.add("logo", "w-sm-50");

    const h1 = document.createElement('h1');
    h1.innerText = "Madness Unleashed, Hatter's Style, Your Smile!";

    homeLink.appendChild(logo);
    logoDiv.appendChild(homeLink);
    logoDiv.appendChild(h1);

    const mobileNav = document.createElement('div');
    mobileNav.classList.add("d-flex", "align-items-center");

    const dropdown = document.createElement('div');
    dropdown.classList.add("dropdown", "d-md-none");

    const userIcon = document.createElement('i');
    userIcon.classList.add("fa-regular", "fa-user", "fs-2", "dropdown-toggle");
    userIcon.setAttribute('role', 'button');
    userIcon.setAttribute('data-bs-toggle', 'dropdown');

    const ul = document.createElement('ul');
    ul.classList.add("dropdown-menu", "align-items-center");

    const mobileListings = document.createElement("li");
    const listingsLinkMobile = document.createElement("a");
    listingsLinkMobile.href = "/index.html";
    listingsLinkMobile.classList.add("dropdown-item");
    listingsLinkMobile.innerText = "Listings";
    mobileListings.appendChild(listingsLinkMobile);

    const mobileLogin = document.createElement('li');
    const loginLinkMobile = document.createElement("a");
    loginLinkMobile.href = "/sign-in/index.html";
    loginLinkMobile.classList.add("dropdown-item");
    loginLinkMobile.innerText = "Log In";
    mobileLogin.appendChild(loginLinkMobile);

    ul.appendChild(mobileListings);
    ul.appendChild(mobileLogin);

    dropdown.appendChild(userIcon);
    dropdown.appendChild(ul);

    mobileNav.appendChild(dropdown);

    const desktopNav = document.createElement('nav');
    desktopNav.classList.add("navbar", "navbar-expand-md", "text-center", "align-items-center");

    const desktopDiv = document.createElement('div');
    desktopDiv.classList.add("collapse", "navbar-collapse");

    const desktopUl = document.createElement('ul');
    desktopUl.classList.add("navbar-nav", "gap-3", "align-items-center");

    const desktopListings = document.createElement("li");
    desktopListings.classList.add("nav-item", "fs-5", "text-transform");
    const listingsLinkDesktop = document.createElement("a");
    listingsLinkDesktop.href = "/index.html";
    listingsLinkDesktop.classList.add("text-decoration-none");
    listingsLinkDesktop.innerText = "Listings";
    desktopListings.appendChild(listingsLinkDesktop);

    const desktopLogin = document.createElement('li');
    desktopLogin.classList.add("nav-item", "fs-5", "text-transform");
    const desktopLoginLink = document.createElement("a");
    desktopLoginLink.href = "/sign-in/index.html";
    desktopLoginLink.classList.add("text-decoration-none");
    desktopLoginLink.innerText = "Log In";
    desktopLogin.appendChild(desktopLoginLink);

    const liUser = document.createElement('li');
    const desktopUserIcon = document.createElement('i');
    desktopUserIcon.classList.add("fa-regular", "fa-user", "fs-3");
    liUser.appendChild(desktopUserIcon);


    desktopUl.appendChild(desktopListings);
    desktopUl.appendChild(desktopLogin);
    desktopUl.appendChild(liUser);

    desktopDiv.appendChild(desktopUl);

    desktopNav.appendChild(desktopDiv);

    header.appendChild(logoDiv);
    header.appendChild(mobileNav);
    header.appendChild(desktopNav);

    return header;
}