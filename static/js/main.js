function refreshRem(){
  var docEl = window.document.documentElement;
  var width = docEl.getBoundingClientRect().width;
  var rootSize = width/720*100;
  docEl.style.fontSize = rootSize + 'px';
}
function calWidthForSubheading() {
  var sub_wrapper = document.querySelector(".sub_wrapper").offsetWidth;
  var sub_heading = document.querySelector(".subheading").offsetWidth;
  return (sub_wrapper - sub_heading) / 2
}
function calcLine() {
  var inl = document.querySelector(".in.left").offsetWidth;
  var bracket = document.querySelector(".in.left .bracket").offsetWidth;
  return (inl - bracket);
}
// window.onload = function()
$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready
  refreshRem();
  Handlebars.registerHelper("compare", function(v1, v2, options) {
    console.log(v1, v2);
    if (v1 == v2) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  })
  var commodity_tml = Handlebars.compile($("#commodity-template").html());
  var purchase_tml = Handlebars.compile($("#purchase-detail-template").html());
  var purchase_car_tml = Handlebars.compile($("#purchase-car-template").html());
  var ajax_func = function(obj, success) {
    var default_obj = {
      dataType: "json",
      type: "GET",
      data: {}
    }
    var obj = $.extend({}, default_obj, obj);
    obj.success = success
    $.ajax(obj)
  }


  ajax_func({
    url:'/api/commodity/324234242423'
  }, function(data) {
    console.log(data);
    $(".main-body").html(commodity_tml(data.res));
    $(purchase_car_tml({car_count:data.res.cart_count})).prependTo($(".footer"));
    document.querySelector(".in.left").style.width = calWidthForSubheading()-2 + "px";
    document.querySelector(".in.right").style.width = calWidthForSubheading()-2 + "px";
    document.querySelector(".in.left .line").style.width = calcLine()-1 + "px";
    document.querySelector(".in.right .line").style.width = calcLine()-1 + "px";
    document.querySelector(".product_company.area").onclick = function() {
      window.location.href = "introduction.html"
    }
    document.querySelector(".pre_rule.area").onclick = function() {
      window.location.href = "pre_rule.html"
    }
    document.querySelector(".recomand.area").onclick = function() {
      window.location.href = "recomand.html"
    }

  })


  ajax_func({
    url:'/api/purchase_detail/324234242423'
  }, function(data) {
    $(".footer.product_detail").html(purchase_tml(data.res));
  })
  // var priceres = {
  //   'navigation_img': 'img/navigation.jpg',
  //   'thumbnails': 'img/thumbnails.jpg',
  //   'name': 'G-STEP冬季卫衣',
  //   'price': '456',
  //   'unit': '1',
  //   'properties': [
  //     {
  //       'name': '颜色',
  //       'type': ['黑色', '白色', '草青色', '红色', '蓝色']
  //     },
  //     {
  //       'name': '大小',
  //       'type': ['S', 'M', 'L', 'XL', 'XXL']
  //     },
  //     {
  //       'name': '其他',
  //       'type': ['t1', 't2', 't3', 't4', 't5']
  //     }
  //   ]
  // }




  // $(".footer.product_detail").html()(priceres));






  $(".footer .purchase, .footer .buttonArea .add").on("click", function() {
    $(this).parents(".footer").hide();
    $(".product_detail").removeClass("hide").animate({"bottom":0}, 500);
    if ($(this).hasClass("purchase")) {
      $(".order-detail-footer").attr("href", "make_order.html");
    } else {
      $(".order-detail-footer").attr("href", "purchase.html");
    }
  });
  $(".footer.product_detail").on("click", ".close", function() {
    $(this).parents(".product_detail").addClass("hide").animate({"bottom":"-100%"}, 500);
    $(".footer").show();
  });
  $(".footer.product_detail").on("click", ".choose_items .choose_item", function() {
    $(this).addClass("choose").siblings().removeClass("choose");
  })
  $(".footer.product_detail").on("click", ".operation.minus", function() {
    var text = parseInt($(".number_show").text())
    if (text > 1) {
      $(".number_show").text(text - 1);
    }
  })
  $(".footer.product_detail").on("click", ".operation.add", function() {
    var text = parseInt($(".number_show").text())
    if (text < 99) {
      $(".number_show").text(text + 1);
    }
  })
});
