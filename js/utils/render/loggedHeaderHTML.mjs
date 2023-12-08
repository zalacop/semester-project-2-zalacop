export default function createLoggedInUserHeader(userInfo) {

    const header = document.querySelector("header");
    header.classList.add("container", "d-flex", "justify-content-between", "align-items-center", "px-5", "w-100");

    const logoDiv = document.createElement("div");
    logoDiv.classList.add("m-3", "mt-4");

    const homeLink = document.createElement("a");
    homeLink.href = "/index.html";

    const logo = document.createElement("img");
    logo.src = "/images/mad bids(1).svg";
    logo.alt = "Mad Bids logo";
    logo.classList.add("logo", "w-sm-50");

    const h1 = document.createElement("h1");
    h1.classList.add("fs-5");
    h1.innerText = "Madness Unleashed, Hatter's Style, Your Smile!";

    homeLink.appendChild(logo);
    logoDiv.appendChild(homeLink);
    logoDiv.appendChild(h1);

    header.appendChild(logoDiv);

    const navDiv = document.createElement("div");
    navDiv.classList.add("d-flex", "align-items-center");

    const totalIcon = document.createElement("img");
    totalIcon.src = "/images/klobuk s kovanci.svg";
    totalIcon.alt = "Icon for showing you the total";
    totalIcon.classList.add("total", "d-md-none");

    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown", "d-md-none");

    const avatarHeader = document.createElement("img");
    avatarHeader.src = localStorage.getItem('avatar');
    avatarHeader.alt = "Profile avatar";
    avatarHeader.classList.add("dropdown-toggle", "m-3", "me-5", "avatar");
    avatarHeader.setAttribute("role", "button");
    avatarHeader.setAttribute("data-bs-toggle", "dropdown");

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");

    const mobileListings = document.createElement("li");
    const listingsLinkMobile = document.createElement("a");
    listingsLinkMobile.href = "/index.html";
    listingsLinkMobile.classList.add("dropdown-item");
    listingsLinkMobile.innerText = "Listings";
    mobileListings.appendChild(listingsLinkMobile);

    const mobileProfile = document.createElement("li");
    const profileLinkMobile = document.createElement("a");
    profileLinkMobile.href = `/profile/index.html?profile=${userInfo.name}`;
    profileLinkMobile.classList.add("dropdown-item");
    profileLinkMobile.innerText = "Profile";
    mobileProfile.appendChild(profileLinkMobile);

    const mobileLogout = document.createElement("li");
    const logoutLinkMobile = document.createElement("a");
    logoutLinkMobile.id = "mobileLogout";
    logoutLinkMobile.href = "/index.html";
    logoutLinkMobile.classList.add("dropdown-item");
    logoutLinkMobile.innerText = "Log Out";
    mobileLogout.appendChild(logoutLinkMobile);

    ul.appendChild(mobileListings);
    ul.appendChild(mobileProfile);
    ul.appendChild(mobileLogout);

    dropdown.appendChild(avatarHeader);
    dropdown.appendChild(ul);

    navDiv.appendChild(totalIcon);
    navDiv.appendChild(dropdown);

    header.appendChild(navDiv);

    const desktopNav = document.createElement("nav");
    desktopNav.classList.add("navbar", "navbar-expand-md", "text-center", "align-items-center");

    const desktopDiv = document.createElement("div");
    desktopDiv.classList.add("collapse", "navbar-collapse");

    const desktopUl = document.createElement("ul");
    desktopUl.classList.add("navbar-nav", "gap-3", "align-items-center");

    const desktopListings = document.createElement("li");
    desktopListings.classList.add("nav-item", "fs-5", "text-transform");
    const listingsLinkDesktop = document.createElement("a");
    listingsLinkDesktop.href = "/index.html";
    listingsLinkDesktop.classList.add("text-decoration-none");
    listingsLinkDesktop.innerText = "Listings";
    desktopListings.appendChild(listingsLinkDesktop);

    const desktopProfile = document.createElement("li");
    desktopProfile.classList.add("nav-item", "fs-5", "text-transform");
    const profileLinkDesktop = document.createElement("a");
    profileLinkDesktop.href = `/profile/index.html?profile=${userInfo.name}`;
    profileLinkDesktop.classList.add("text-decoration-none");
    profileLinkDesktop.innerText = "Profile";
    desktopProfile.appendChild(profileLinkDesktop);

    const desktopLogout = document.createElement("li");
    desktopLogout.classList.add("nav-item", "fs-5", "text-transform");
    const logoutLinkDesktop = document.createElement("a");
    logoutLinkDesktop.id = "desktopLogout";
    logoutLinkDesktop.href = "/index.html";
    logoutLinkDesktop.classList.add("text-decoration-none");
    logoutLinkDesktop.innerText = "Log Out";
    desktopLogout.appendChild(logoutLinkDesktop);

    const desktopTotal = document.createElement("li");
    desktopTotal.classList.add("nav-item", "fs-5", "text-transform");
    const desktopTotalIcon = document.createElement("img");
    desktopTotalIcon.src = "/images/klobuk s kovanci.svg";
    desktopTotalIcon.alt = "Icon for showing you the total";
    desktopTotalIcon.classList.add("total");
    desktopTotal.appendChild(desktopTotalIcon);

    const desktopAvatar = document.createElement("li");
    desktopAvatar.classList.add("nav-item");
    const avatarImg = document.createElement("img");
    avatarImg.src = userInfo.avatar;
    avatarImg.alt = "Profile avatar";
    avatarImg.classList.add("avatar");
    desktopAvatar.appendChild(avatarImg);

    desktopUl.appendChild(desktopListings);
    desktopUl.appendChild(desktopProfile);
    desktopUl.appendChild(desktopLogout);
    desktopUl.appendChild(desktopTotal);
    desktopUl.appendChild(desktopAvatar);

    desktopDiv.appendChild(desktopUl);

    desktopNav.appendChild(desktopDiv);

    header.appendChild(desktopNav);

    return header;
}