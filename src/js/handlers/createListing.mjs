import { createListing } from "../api/posts/create.mjs";

export function setCreateListingListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createListing(post);
    });
  }
}
