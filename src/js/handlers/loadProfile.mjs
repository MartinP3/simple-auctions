import { load } from "../storage/index.mjs";
import * as templates from "../templates/index.mjs";

// Adds profile content
export async function addProfile() {
  const userProfile = load("profile");

  if (userProfile.name) {
    const container = document.querySelector("#profile");

    container.innerHTML = "";

    templates.renderProfileTemplate(userProfile, container);
    console.log(userProfile);
  }
}
