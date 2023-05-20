$(document).ready(function () {
  $('.menuToggle').click(function () {
    $('.navigation').toggleClass('active');
  });

  $('.list').click(function () {
    $('.list').removeClass('active');
    $(this).addClass('active');
  });
});




/* let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("mainMenu");

barMenu.addEventListener("click", function () {
  if (main_Menu.classList.contains("main-menu")) {
    main_Menu.classList.add("main-menu-visible");
    main_Menu.classList.remove("main-menu");
  }
  else {
    main_Menu.classList.remove("main-menu-visible");
    main_Menu.classList.add("main-menu");
  }
}); */