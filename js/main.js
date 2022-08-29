//=========== Active sidebar dashboard =============
const currentLocationDashboard = location.href;
const menuItemDashboard = document.querySelectorAll(
  ".sidebar .nav-item .nav-link"
);
const menuChildDashboard = document.querySelectorAll(
  ".sidebar .nav-pills .nav-item ul li .nav-link"
);
const menuLengthDashboard = menuItemDashboard.length;
for (let i = 0; i < menuLengthDashboard; i++) {
  if (menuItemDashboard[i].href === currentLocationDashboard) {
    menuItemDashboard[i].className = "nav-link active";
    // menuChildDashboard[i].parentElement.parentElement.className =
    //   "flex-column collapse show";
  }
}
//=========== Active sidebar dashboard =============

//=========== sidebar toggle =============
const sideBar = document.querySelector(".sidebar");
const toggler = document.querySelector(".menu");
const togglermobile = document.querySelector("#toggler");
togglermobile.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
toggler.addEventListener("click", function () {
  sideBar.classList.toggle("open");
});
//=========== sidebar toggle =============

//=========== Close inspect =============
// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
// };
//=========== Close inspect =============


$(document).ready(function () {
  $(".sidebar").hover(
    function () {
      $(".sidebar").addClass("opened");
    },
    function () {
      $(".sidebar").removeClass("opened");
    }
    );
  });
  
  $(document).ready(function () {
    $(".close").on("click", function () {
      $(".sidebar.open .nav-pills .nav-item ul").removeClass("show");
    });
  });
  
  
  // document.getElementById("menu").onclick = function() {myFunction()};
  
  // function myFunction() {
  //   document.getElementById('sidebar').style.display = "block";
  // }
  
  // window.addEventListener('click', function(e){
  //   if (document.getElementById('sidebar').contains(e.target)){
  //     console.log("ah")
  //   }
  //   else if (document.getElementById("menu").onclick) {
  //     document.getElementById('sidebar').style.display = "block";
  //   }
  //   else{
  //     document.getElementById('sidebar').style.display = "none";
  //   }
  // });
  
  // $(document).ready(function () {
  //   if ($("#menu").click()) {
  //     $("#sidebar").css("display", "block");
  //   }
  //   else if ($(".sidemobile").click()) {
  //     $("#sidebar").css("display", "none");
  //     console.log("test")
  //   }
  // });
  
  // if ($(".sidemobile").click()) {
  //   $("#sidebar").css("display", "none");
  //   console.log("test");
  // }
  // else if ($("#menu").click()) {
  //       $("#sidebar").css("display", "block");
  //     }
