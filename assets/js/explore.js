let gelen = document.querySelector("gelen");

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

  getCars();
});
async function getCars() {
  let url = await fetch("https://json-fake-api.herokuapp.com/cars");
  let result = await url.json();
  let final = result.map(
    (item) =>
      (item = `<div class="col-md-12 mb-4">
      <div class="row">
       <div class="col-md-4">
           <div class="teslaimg">
               <img src=assets/images/${item.img_src} alt="">
           </div>

          </div>
          <div class="col-md-8">
         <h6 id="marka">
         ${item.marka}
         </h6>
         <h3>
         ${item.model}
             <span>
                 (New=${item.new})
             </span>
         </h3>
         <div class="pcontent d-flex p1ch">
             <p>Engine</p>
             <p>Type of fuel</p>
             <p>Transmission</p>
         </div>
         <div class="pcontent d-flex mb-4">
          <p>${item.engine}</p>
          <p>${item.fuel}</p>
          <p>${item.transmission}</p>
      </div>
      <div class="combo d-flex">
         <h1 class="pricechoose">
         ${item.price}€
      </h1>
         <div class="details">
              <button>Details</button>
          </div>  
      </div>
     
          </div>
          

      </div>
  </div>`)
  );

  $(".gelen").append(final.join(""));
}
