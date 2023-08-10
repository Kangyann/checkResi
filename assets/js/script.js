document.addEventListener("DOMContentLoaded", function () {
  $(".modal").addClass("d-block").css({
    animation: "popUp .2s ease-in-out",
    opacity: 1,
  });
  $("#close").click((x) => {
    $(".modal").addClass("d-none").removeClass("d-block");
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    $(".navbar").addClass("shadow-lg");
  } else {
    $(".navbar").removeClass("shadow-lg");
  }
});
const awbResi = document.getElementById("resiAwb"),
  cekResi = document.getElementById("cekResi"),
  response = document.createElement("span"),
  clear = document.createElement("div"),
  grupCourier = document.getElementById("grup");

$("#cekResi").click((x) => {
  if (!awbResi.value) {
    response.classList.add("text-danger");
    grupCourier.innerHTML = ``;
    response.textContent = "Fill in the input first, It cannot be empty !";
    awbResi.parentNode.insertBefore(response, awbResi);
    setTimeout(() => {
      response.textContent = "";
    }, 1500);
  } else {
    clear.innerHTML = `
            <a class="btn btn-danger text-decoration-none mt-2 col-12" id="clear" href="">Clear</a>
            <span id="x">Track Number -> <span class="text-success" style="font-weight:bold;">${awbResi.value.toUpperCase()}
            <div class="mt-2">
            <span id="x">Choose One Courier : </span>
            </div>
            `;
    grupCourier.parentNode.insertBefore(clear, grupCourier);
    $("#grup").removeClass("d-none").addClass("d-block").css({
      animation: "popUp 2s ease-in-out",
      opacity: 1,
    });
  }
});

const listCourier = document.querySelectorAll("#courier");
$(document).ready(function () {
  listCourier.forEach((x) => {
    x.addEventListener("click", (e) => {
      e.preventDefault();
      display(x);
    });
  });
});
const display = (x) => {
  const y = document.querySelectorAll("#x");
  y.forEach((x) => {
    x.style.display = "none";
  });
  $("#response").text("Wait For Server Respond . . .");

  $(".ressultPackage").removeClass("d-none").addClass("d-block").css({
    animation: "popUp 1s ease-in-out",
    opacity: 1,
  });
  grupCourier.innerHTML = ``;
  let inputResi = $("#resiAwb").val();
  $("#share").val(`https://yourdomain/?noresi=${inputResi}`);
  const object = {
    inputResi: inputResi,
    codeCourier: x.name,
  };
  $(document).ready(function () {
    $.ajax({
      type: "POST",
      url: "assets/server/getRequest.php",
      dataType: "json",
      data: object,
      success: function (response) {
        if (response.status === 200) {
          $("#response").addClass("text-success");
        } else {
          $("#response").addClass("text-danger");
        }
        $("#response").html(
          `${response.message} -> ${response.data.summary.awb}`
        );
        showDetailPaket(response.data);
        showTripPackage(response.data.history);
        
      },
      error: function (error) {
        console.error("Error fetching data:", error);
      },
    });
  });
};
const showTripPackage = (data) => {
  const tripPackage = document.getElementById("trip");
  data.forEach((x) => {
    tripPackage.innerHTML += `
    <tr style="font-size:.9rem;">
    <td>${x.desc} <br>Location -> <span class="text-success" style="font-weight:bold;">${x.location}</span></td>
    <td>${x.date}</td>
    </tr>

       `;
  });
};
const showDetailPaket = (data) => {
  $("#detailPaket").html(`
<table class="text-start">
    <tr>
        <td class="pt-2">Receiver</td>
        <td class="px-2 pt-2">-></td>
        <td class="pt-2">${data.detail.receiver}</td>
    </tr>
    <tr>
        <td class="pt-2">Resi</td>
        <td class="px-2 pt-2">-></td>
        <td class="pt-2">${data.summary.awb}</td>
    </tr>
    <tr>
        <td class="pt-2">Courier</td>
        <td class="px-2 pt-2">-></td>
        <td class="pt-2">${data.summary.courier}</td>
    </tr>
    <tr>
        <td class="pt-2">Service</td>
        <td class="px-2 pt-2">-></td>
        <td class="pt-2">${data.summary.service}</td>
    </tr>
    <tr>
        <td class="pt-2">Date</td>
        <td class="px-2 pt-2">-></td>
        <td class="pt-2">${data.summary.date}</td>
    </tr>
    <tr>
        <td class="pt-2">Status</td>
        <td class="px-2 pt-2">-></td>
        <td class="pt-2 text-success" style="font-weight: bold;">${data.summary.status}
        </td>
    </tr>
</table>`);
};
