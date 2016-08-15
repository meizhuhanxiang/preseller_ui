<<<<<<< HEAD
var SEED_ID = "324234242423";
<<<<<<< HEAD

$(document).ready(function() {
  var pre_index = $(".main.pre_index");
  var main_purchase = $(".main.purchase");
  var commodity_tml = gstep.templates.commodity;
  var purchase_tml = gstep.templates.purchase_detail;
  var purchasecart_tml = gstep.templates.purchase;
=======
var cart_id = [];
$(document).ready(function() {
  var pre_index = $(".main.pre_index");
  var main_purchase = $(".main.purchase");

  var commodity_tml = compile_tml("#commodity-template")
  var purchase_tml = compile_tml("#purchase-detail-template")
  var purchase_car_tml = compile_tml("#purchase-car-template");
  var purchasecart_tml = compile_tml("#purchase-template");
>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
  
  pre_index.on("click", ".product_company", function() {
    window.location.href = "introduction.html"
  });
  pre_index.on("click", ".pre_rule", function() {
    window.location.href = "pre_rule.html"
  });
  pre_index.on("click", ".recomand", function() {
    window.location.href = "recomand.html"
  });
=======
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

>>>>>>> parent of 6e628d4... push code

  ajax_func({
    url:'/api/commodity/324234242423'
  }, function(data) {
    console.log(data);
    $(".main-body").html(commodity_tml(data.res));
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


<<<<<<< HEAD
    var calWidthForSubheading = (sub_wrapper[0].offsetWidth - sub_heading[0].offsetWidth) / 2;
    var calcLine = calWidthForSubheading - in_left_bracket[0].offsetWidth;
<<<<<<< HEAD
=======
    console.log(calcLine)
>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
    in_left.width(calWidthForSubheading - 2 + "px");
    in_right.width(calWidthForSubheading - 2 + "px");
    in_left_line.width(calcLine - 3);
    in_right_line.width(calcLine - 3);
=======
  ajax_func({
    url:'/api/purchase_detail/324234242423'
  }, function(data) {
    $(".footer.product_detail").html(purchase_tml(data.res));
>>>>>>> parent of 6e628d4... push code
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

<<<<<<< HEAD
  // 显示购物车详情
  var detail_loaded = false;
<<<<<<< HEAD
  var cart_id = [];
=======

>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
  // 添加关闭事件
  function product_detail_close(product_detail) {
    product_detail.on("click", ".close", function() {
      product_detail_slide(product_detail, "close")
      pre_index.find(".button_active").show();
    });
  }
=======
>>>>>>> parent of 6e628d4... push code



<<<<<<< HEAD
  // detail slide
  function product_detail_slide(product_detail, active) {
    if (active == "show") {
      product_detail.removeClass("hide").animate({
        "bottom": 0
      }, 500);
    } else {
      product_detail.animate({
        "bottom": "-100%"
      }, 500);
    }
  }
<<<<<<< HEAD
=======

  pre_index.on("click", ".show_detail", function() {
    var $this = $(this);
    $this.parents(".buttton_active").hide();
    var product_detail = pre_index.find(".product_detail");
    
    if (!detail_loaded) {
      detail_loaded = true;
      ajax_func({
        url: '/api/purchase/detail/324234242423'
      }, function(data) {
        product_detail.html(purchase_tml(data.res));
        product_detail_slide(product_detail, "show");
        product_detail_choose_item(product_detail);
        product_detail_close(product_detail);
        product_detail_spinner(product_detail);
        if ($this.hasClass("add_to_cart")) {
          $(".order-detail-footer").addClass("purchase").removeClass("make_order");
        } else {
          $(".order-detail-footer").addClass("make_order").removeClass("purchase");
        }
      });
    } else {
      product_detail_slide(product_detail, "show");
    }

  })

  // 进入购物车
  pre_index.find(".footer").on("click", ".haha", function() {
    ajax_func({
      url: '/api/cart/detail/',
      type: "POST",
      data: {
        cart_ids: cart_id
      }
    }, function(data) {
      main_purchase.find(".main-body").html(purchasecart_tml(data));
      main_purchase.removeClass("hide").siblings().addClass("hide");
    });
  })
>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
=======
  // $(".footer.product_detail").html()(priceres));


>>>>>>> parent of 6e628d4... push code


<<<<<<< HEAD
<<<<<<< HEAD
    })
  }
=======
>>>>>>> parent of 6e628d4... push code


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
<<<<<<< HEAD
  // 进入购物车
  pre_index.find(".footer").on("click", ".haha", function() {
    ajax_func({
      url: '/api/cart/detail/',
      type: "POST",
      data: {
        cart_ids: cart_id
      }
    }, function(data) {
      main_purchase.find(".main-body").html(purchasecart_tml(data));
      main_purchase.removeClass("hide").siblings().addClass("hide");
    });
=======
  $(".footer").on("click", ".order-detail-footer.purchase", function() {
    var $this = $(this);
    var data = {};
    data.properties = [];
    pre_index.find(".choose_property").each(function(index, ele) {
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
      pre_index.find("div.haha .tip").text(data.res.cart_count);
      cart_id.push(data.res.cart_id);
      pre_index.find(".close").click();
    })
  })

  pre_index.find(".footer").on("click", ".order-detail-footer.make_order", function() {
    var $this = $(this);
    var data = {};
    data.properties = [];
    pre_index.find(".choose_property").each(function(index, ele) {
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

    console.log("sss")
    ajax_func({
      "url": '/api/purchase_confirm/324234242423',
      type: "POST",
      data: data
    }, function(data) {
      console.log(data);
      console.log("make_order.html?order=" + data.res.code);
      window.location.href = encodeURI("make_order.html?order=" + data.res.code);
    })
>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
=======
  $(".footer.product_detail").on("click", ".operation.add", function() {
    var text = parseInt($(".number_show").text())
    if (text < 99) {
      $(".number_show").text(text + 1);
    }
>>>>>>> parent of 6e628d4... push code
  })
});
