// Imports load to get token as a constant
import { load } from "../storage/index.mjs";

export function headers() {
  const token = load("token");

  return {
    // the header for all future API calls
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// The function to be used instead of just fetch to instantly do the authentication with token
export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
