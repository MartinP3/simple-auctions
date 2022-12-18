import { API_AUCTION_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";
import { renderPostTemplates } from "../templates/listings.mjs";

// Search posts function

const action = "/listings?sort=created&sortOrder=desc";

const url = `${API_AUCTION_URL}${action}`;

const response = await authFetch(url);
const listingsJSON = await response.json();

if (location.pathname === "/auction/") {
  const searchPosts = document.getElementById("searchPosts");

  searchPosts.addEventListener("keyup", handleSearchPostsInput);
}

export async function handleSearchPostsInput(event) {
  try {
    const container = document.querySelector("#cardContainer");
    container.innerHTML = "";

    // Lowers your capitalisation to reduce error when searching
    const inputValue = event.currentTarget.value.toLowerCase();

    const result = listingsJSON.filter((searchResult) => {
      if (
        // Checks both body and title for input similarities in starting words
        searchResult.title.toLowerCase().startsWith(inputValue)
      ) {
        return true;
      }
    });
    // Renders the searched content on screen
    renderPostTemplates(result, container);
  } catch (error) {
    console.log(error);
  }
}
