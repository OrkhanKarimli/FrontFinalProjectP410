$(document).ready(function () {
  $(".loader1").load("_loading.html");
    $("header").addClass("container,headmenu");
  $(".nice-select").niceSelect();
  
  $("header").load("_header.html");
  $("footer").load("_footer.html");
  
  setTimeout(function(){ 
     
    $("body").removeClass("overflow-y");
    $(".loader1").addClass("none");
  }, 2000);

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000
        },
        600:{
            items:1,
            nav:false,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000
        },
        1000:{
            items:1,
            nav:false,
            loop:true,
            dots:true,
            autoplay:true,
            autoplayTimeout:2000
        }
    }
})
});


