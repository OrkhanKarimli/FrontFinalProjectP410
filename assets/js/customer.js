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
});
