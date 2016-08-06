var SEED_ID = "324234242423";
var cart_id = [];
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
    // console.log(v1, v2);
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
    url:'/api/purchase/detail/324234242423'
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






  $(".footer .purchase, .footer .buttonArea a").on("click", function() {
    $(this).parents(".footer").hide();
    $(".product_detail").removeClass("hide").animate({"bottom":0}, 500);
    if ($(this).hasClass("purchase")) {
      $(".order-detail-footer").removeClass("purchase").addClass("make_order").attr("href", "javascript:;");
    } else {
      $(".order-detail-footer").removeClass("make_order").addClass("purchase").attr("href", "javascript:;");
      
    }
  });

  $(".footer").on("click", ".order-detail-footer.purchase", function() {
    var $this = $(this);
    var data = {};
    data.properties = [];
    $(".choose_property").each(function(index, ele) {
      console.log(ele);
      var choose_items = $(ele).find(".choose_items");
      var name = choose_items.data("name");
      var type = choose_items.find(".choose").text();
      var count = parseInt($(".number_show").text());
      data.count = count;
      data.seed_id = SEED_ID;
      data.properties.push({
        name: name,
        type: type
      })

    })
    ajax_func({
      "url": '/api/cart/add/' + SEED_ID,
      type: "POST",
      data: data
    }, function(data) {
      $("div.haha .tip").text(data.res.cart_count);
      cart_id.push(data.res.cart_id);
      $(".close").click();
    })
  })

  $(".footer").on("click", ".order-detail-footer.make_order", function() {
    var $this = $(this);
    var data = {};
    data.properties = [];
    $(".choose_property").each(function(index, ele) {
      console.log(ele);
      var choose_items = $(ele).find(".choose_items");
      var name = choose_items.data("name");
      var type = choose_items.find(".choose").text();
      var count = parseInt($(".number_show").text());
      data.properties.push({
        name: name,
        type: type
      })

    })
    ajax_func({
      "url": '/api/purchase_confirm/324234242423',
      type: "POST",
      data: data
    }, function(data) {
      console.log(data);
      console.log("make_order.html?order=" + data.res.code);
      window.location.href = encodeURI("make_order.html?order=" + data.res.code);
    })
  })

  $(".footer").on("click", ".haha", function() {
    var param = JSON.stringify(cart_id);
    window.location.href = "purchase.html?cart_id=" + param
  })
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
