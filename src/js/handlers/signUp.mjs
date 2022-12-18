import { signUp } from "../api/auth/signUp.mjs";

export function setSignUpFormListener() {
  const form = document.querySelector("#signUpForm");

  if (form) {
    localStorage.clear();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // If no avatar url, insert placeholder one
      if (profile.avatar === "") {
        profile.avatar = "https://dummyimage.com/400x400/000/fff";
      }

      // Send to API upon submit
      signUp(profile);
    });
  }
}
