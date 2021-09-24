$(document).ready(function () {
  $(".loader1").load("_loading.html");
  // $("header").addClass("container headmenu");
  $(".nice-select").niceSelect();

  $("nav").load("_header.html");
  $("footer").load("_footer.html");

  setTimeout(function () {
    $("body").removeClass("overflow-y");
    $(".loader1").addClass("none");
  }, 2000);

  $(".playiconak").magnificPopup({
    type: "iframe",
  });
  $("#ac1").click(function(){
    $(".baglanan1").slideToggle();
  });
  $("#ac2").click(function(){
    $(".baglanan2").slideToggle();
  });
});
