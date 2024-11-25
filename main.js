$(document).ready(function () {
  // open menu
  $(".open").click(function () {
    $(".close").show();
    $(".open").hide();
    $("header .header-cont .navs .mobile").css("transform", "translateY(0)");
  });
  // close menu
  $(".close").click(function () {
    $(".open").show();
    $(".close").hide();
    $("header .header-cont .navs .mobile").css("transform", "translateX(110%)");
  });
});
