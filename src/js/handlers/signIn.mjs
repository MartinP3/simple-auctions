import { signIn } from "../api/auth/signIn.mjs";

export function setSignInFormListener() {
  const form = document.querySelector("#signInForm");

  // If the form is correctly filled, sign into your account
  if (form) {
    localStorage.clear();
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send to API upon submit
      signIn(profile);
    });
  }
}
