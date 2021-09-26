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

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
      },
      600: {
        items: 1,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
      },
    },
  });
  $(".homefirst").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
      },
      600: {
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
      },
    },
  });
  let left = document.querySelector(".icon-left");
  let right = document.querySelector(".icon-right");
  let owlLeft = document.querySelector(".homefirst .owl-prev");
  let owlRight = document.querySelector(".homefirst .owl-next");
  $(left).on("click", function () {
    $(owlLeft).click();
  });
  $(right).on("click", function () {
    $(owlRight).click();
  });
});
