import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const path = "/listings";
const sortNewest = "?sort=created&sortOrder=desc";
const getAllListings = API_AUCTION_URL + path + sortNewest;

const sellerAndbids = "?_seller=true&_bids=true&_active=true";

export async function getListings() {
  const response = await authFetch(getAllListings);

  return await response.json();
}

export async function getListing(thisID) {
  const url = new URL(location.href);
  thisID = url.searchParams.get("id");
  if (!thisID) {
    throw new Error("Get requires a postID");
  }

  const getListingURL = `${API_AUCTION_URL}${path}/${thisID}${sellerAndbids}`;
  console.log(getListingURL);
  const response = await authFetch(getListingURL);

  return await response.json();
}
