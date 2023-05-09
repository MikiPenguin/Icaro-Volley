document.addEventListener("click", function(e) {
  var submenu = document.querySelector(".submenu");
  if (submenu.style.display === "block" && !submenu.contains(e.target)) {
    submenu.style.display = "none";
  }
});
