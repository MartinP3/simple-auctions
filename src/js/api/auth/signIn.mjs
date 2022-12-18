import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const path = "/auth/login";
const signInURL = API_AUCTION_URL + path;

// Sign in function
export async function signIn(profile) {
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(signInURL, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { accessToken, ...user } = await response.json();

    console.log({ accessToken, ...user });

    // Saves token for authorization usage (to view content from API)
    storage.save("token", accessToken);

    // Saves profile to use name for loading profile i.e
    storage.save("profile", user);

    alert("You are now logged in!");
    location.href = "/";
  } catch (error) {
    console.log(error);
  }
}
