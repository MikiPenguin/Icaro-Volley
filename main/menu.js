document.addEventListener("mouseover", function(e) {
  var submenu = document.querySelector(".submenu");
  if (e.target.matches(".button-squ")) {
    submenu.style.display = "block";
  } else if (submenu.style.display === "block" && !submenu.contains(e.target)) {
    submenu.style.display = "none";
  }
});
