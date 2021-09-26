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
  const forms = document.querySelectorAll(".customvalidate1");
  let btnvalid = document.querySelector(".btncalcmain");
  Array.prototype.slice.call(forms).forEach((form) => {
    btnvalid.addEventListener(
      "click",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
  let tbody = document.querySelector("tbody");
  btnvalid.addEventListener("click", function (e) {
    e.preventDefault();
    
    clear();
    
    if (
      $(".inpcheck").val() == "" ||
      $(".inpcheck1").val() == "" ||
      $(".inpcheck2").val() == "" ||
      $(".inpcheck3").val() == ""
    ) {
      return;
    } else {
      console.log("sa");
      let formcalc = document.querySelector(".calcresultform");
      let month = document.querySelector(".inpcheck2");
      let rate = document.querySelector(".inpcheck");
      let price = document.querySelector(".inpcheck1");
      let down = document.querySelector(".inpcheck3");

      let month_value = parseFloat(month.value);
      let rate_value = parseFloat(rate.value);
      let price_value = parseFloat(price.value);
      let down_value=parseFloat(down.value);
      if (isNaN(month_value) || isNaN(rate_value) || isNaN(price_value) ||isNaN(month_value)) {
        alert("Xahiş edirik məlumatları düzgün daxil edin");
        month.value="";
        rate.value="";
        price.value="";
        down.value="";
        return;
      }
      let downresult=down_value*0.5;
      let total = price_value + (price_value * rate_value * month_value) / 100;
      let monthly_payment = total / month_value;
      if(monthly_payment>downresult){
        alert("Sizin aylıq gəliriniz kredit üçün əl çatan deyil");
        down.value="";
        return;
      }

      let currentDate = new Date();

      for (let i = 0; i < month_value; i++) {
        let newTr = document.createElement("tr");
        currentDate.setMonth(currentDate.getMonth() + 1);

        newTr.innerHTML = `
              <td>${i + 1}</td>
              <td>${formatDate(currentDate)}</td>
              <td>${monthly_payment.toFixed(2) + " AZN"}</td>
              <td>${(total - monthly_payment * (i + 1)).toFixed(2)}</td>
              `;

        document.querySelector("tbody").append(newTr);
      }

      console.log(month_value);
    }
  });
  function formatDate(date) {
    let result = "";

    result +=
      (date.getDate() >= 9 ? date.getDate() : "0" + date.getDate()) + "/";

    result +=
      (date.getMonth() + 1 > 9
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) + "/";

    result += date.getFullYear();

    return result;
  }
  function clear() {
    if (tbody.children.length > 0) {
      Array.from(tbody.children).forEach((item) => {
        item.remove();
      });
    }
  }
  const forms1 = document.querySelectorAll(".customvalidate");
  let btnvalid1 = document.querySelector(".teslabtn");
  Array.prototype.slice.call(forms1).forEach((form) => {
    btnvalid1.addEventListener(
      "click",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
});
