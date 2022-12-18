// Imports the handlers that do things on the various pages depending on URL
import * as listeners from "./handlers/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case "/profile/sign-up/":
      listeners.setSignUpFormListener();
      break;
    case "/profile/sign-in/":
      listeners.setSignInFormListener();
      break;
    case "/auction/":
      listeners.addListings();
      break;
    case "/auction/page/index.html":
      listeners.addListing();
      break;
    case "/auction/create/":
      listeners.setCreateListingListener();
      break;
    case "/profile/":
      listeners.addProfile(), listeners.setUpdateProfileListener();
      break;
  }
}
