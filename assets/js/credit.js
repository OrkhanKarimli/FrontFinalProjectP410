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
    const forms = document.querySelectorAll('.customvalidate');
    let btnvalid=document.querySelector(".teslabtn")
    Array.prototype.slice.call(forms).forEach((form) => {
        btnvalid.addEventListener('click', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });

  });