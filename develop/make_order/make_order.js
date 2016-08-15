<<<<<<< HEAD
$(document).ready(function() {
  $(".order.addresses").on("click", function() {
    $(".main.addresses").removeClass("hide").siblings().addClass("hide");
  })
  var click = document.querySelector(".order_show_wrapper");
  var order = document.querySelector(".order-show");
  click.onclick = function() {
      if (order.style.display == "none") {
        order.style.display = "block"
      } else {
        order.style.display = "none"
      }
    }
  // var params = JSON.parse(decodeURI(location.href).split("?")[1].split("=")[1]);
  var make_order_tml = gstep.templates.make_order;
  // console.log(params);
=======
$(document).ready(function() {
  $(".order.addresses").on("click", function() {
    $(".main.addresses").removeClass("hide").siblings().addClass("hide");
  })
  var click = document.querySelector(".order_show_wrapper");
  var order = document.querySelector(".order-show");
  click.onclick = function() {
      if (order.style.display == "none") {
        order.style.display = "block"
      } else {
        order.style.display = "none"
      }
    }
  // var params = JSON.parse(decodeURI(location.href).split("?")[1].split("=")[1]);
  var make_order_tml = gstep.templates.make_order;
  // console.log(params);
>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
})