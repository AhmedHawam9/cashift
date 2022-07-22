//=========== Active sidebar dashboard =============
const currentLocationDashboard = location.href;
const menuItemDashboard = document.querySelectorAll(".sidebar .nav-item .nav-link");
const menuLengthDashboard = menuItemDashboard.length;
for (let i = 0; i < menuLengthDashboard; i++) {
  if (menuItemDashboard[i].href === currentLocationDashboard) {
    menuItemDashboard[i].className = "nav-link active";
  }
}
//=========== Active sidebar dashboard =============

//=========== sidebar toggle =============
const sideBar = document.querySelector(".sidebar");
const toggler = document.querySelector(".menu");
toggler.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
//=========== sidebar toggle =============