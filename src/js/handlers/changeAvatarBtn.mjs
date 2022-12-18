var changeAviButton = document.getElementById("changeAvatarBtn");
var changeAviForm = document.getElementById("changeAvatarForm");

changeAviButton.onclick = function () {
  changeAviForm.style.display =
    changeAviForm.style.display === "block" ? "none" : "block";
};
