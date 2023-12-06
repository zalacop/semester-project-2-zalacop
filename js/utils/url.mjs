const base = "https://api.noroff.dev/api/v1";
const auctionEndpoints = "/auction";
const authentication = "/auth";
const register = "/register";
const login = "/login";


export const urlRegister = base + auctionEndpoints + authentication + register;
export const urlLogin = base + auctionEndpoints + authentication + login;

// https://api.noroff.dev/api/v1/auction/auth/register