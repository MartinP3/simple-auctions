import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function getProfiles() {
  const getProfileURL = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(getProfileURL);
  return await response.json();
}

// Gets profile info from API to be used in
export async function getProfile(name) {
  if (!name) {
    throw new Error("GET requires a name");
  }

  const getProfileURL = `${API_AUCTION_URL}${action}/${name}?_listings=true`;

  const response = await authFetch(getProfileURL);

  return await response.json();
}
