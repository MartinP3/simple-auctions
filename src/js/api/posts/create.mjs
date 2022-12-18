import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const path = "/listings";
const createListingURL = API_AUCTION_URL + path;
const method = "post";

export async function createListing(postData) {
  if (postData.media === "") {
    postData.media = ["https://dummyimage.com/400x400/aeaeae/000"];
  }
  if (postData.tags === "") {
    postData.tags = ["Untagged"];
  }
  if (postData.description === "") {
    postData.description = `No description of ${postData.title}`;
  }

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(postData),
  });
  return await response.json();
}
