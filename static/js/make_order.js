$(document).ready(function() {
  $(".order.addresses").on("click", function() {
    $(".main.addresses").removeClass("hide").siblings().addClass("hide");
  })
  var click = document.querySelector(".product_company");
  var order = document.querySelector(".order.order-show");
  click.onclick = function() {
      if (order.style.display == "none") {
        order.style.display = "block"
      } else {
        order.style.display = "none"
      }
    }
    // var ajax_func = function(obj, success) {
    //   var default_obj = {
    //     dataType: "json",
    //     type: "GET",
    //     data: {}
    //   }
    //   var obj = $.extend({}, default_obj, obj);
    //   obj.success = success
    //   $.ajax(obj)
    // }
    // var recommand_tml = Handlebars.compile($("#recommand-template").html());
    // ajax_func({
    //   url:'/api/recomends/324234242423'
    // }, function(data) {
    //   $(".main-body").html(recommand_tml(data));
    // })
})