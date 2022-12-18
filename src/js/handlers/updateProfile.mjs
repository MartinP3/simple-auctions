import { getProfile, updateAvatar } from "../api/profile/index.mjs";
// Loads profile info
import { load } from "../storage/index.mjs";

export async function setUpdateProfileListener() {
  const form = document.querySelector("#changeAvatarForm");

  if (form) {
    const { name } = load("profile");

    const profile = await getProfile(name);

    form.avatar.value = profile.avatar;

    // Listens for submit, then updates profile
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      // Send to API
      updateAvatar(profile);
      location.reload();
    });
  }
}
