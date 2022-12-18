import { API_AUCTION_URL } from "../constants.mjs";

const path = "/auth/register";
const API_SIGN_UP_URL = API_AUCTION_URL + path;

// Sign up function
export async function signUp(profile) {
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(API_SIGN_UP_URL, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    location.href = "/profile/sign-in/";
  } catch (error) {
    console.log(error);
  }
}
