import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";

export async function addListings() {
  const posts = await postMethods.getListings();
  const container = document.querySelector("#cardContainer");

  console.log(posts);
  templates.renderPostTemplates(posts, container);
}

// Single listing on a specific page added
export async function addListing() {
  const post = await postMethods.getListing();
  const container = document.querySelector("#singleListing");

  console.log(post);
  templates.renderPostTemplate(post, container);
}
