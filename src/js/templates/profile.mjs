// Template for profile
export function profileTemplate(postData) {
  const profile = document.createElement("div");
  profile.classList.add("profile", "mb-3", "text-bg-dark");
  profile.innerHTML = `
  <div>
  <img src="${postData.avatar}" class="img profilePicture mt-3" alt="${postData.name}'s avatar">
  <h2 class="card-title text-center mt-1">${postData.name}</h2>
  <p class="text-center">${postData.credits} credits</p>
  </div>
  <div class="text-center">
  <button class="btn btn-lg btn-primary mb-2" id="changeAvatarBtn">Edit Avatar</button>
  </div>
  <div>
  <form id="changeAvatarForm" class="text-center mt-2">
    <input class="form-control" type="url" placeholder="${postData.avatar}" name="avatar">
    <button class="btn btn-lg btn-primary mt-3" type="submit">Change Avatar</button>
    </form>
  </div>`;

  return profile;
}

export function renderProfileTemplate(postData, parent) {
  parent.append(profileTemplate(postData));
}
