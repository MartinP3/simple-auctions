var changeAviButton = document.getElementById("changeAvatarBtn");
var changeAviForm = document.getElementById("changeAvatarForm");

// Shows and hide the content with the change avatar button
changeAviButton.onclick = function () {
  changeAviForm.style.display =
    changeAviForm.style.display === "block" ? "none" : "block";
};
