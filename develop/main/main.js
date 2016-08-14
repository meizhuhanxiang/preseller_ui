var SEED_ID = "324234242423";

$(document).ready(function() {
  var pre_index = $(".main.pre_index");
  var main_purchase = $(".main.purchase");
  var commodity_tml = gstep.templates.commodity;
  var purchase_tml = gstep.templates.purchase_detail;
  var purchasecart_tml = gstep.templates.purchase;
  
  pre_index.on("click", ".product_company", function() {
    window.location.href = "introduction.html"
  });
  pre_index.on("click", ".pre_rule", function() {
    window.location.href = "pre_rule.html"
  });
  pre_index.on("click", ".recomand", function() {
    window.location.href = "recomand.html"
  });

  ajax_func({
    url: '/api/commodity/324234242423'
  }, function(data) {
    pre_index.find(".main-body").html(commodity_tml(data.res));
    pre_index.find(".footer .haha .tip").text(data.res.cart_count);
    var sub_wrapper = $(".sub_wrapper");
    var sub_heading = sub_wrapper.find(".subheading");
    var in_left = sub_wrapper.find(".in.left");
    var in_left_bracket = in_left.find(".bracket");
    var in_left_line = in_left.find(".line");
    var in_right = sub_wrapper.find(".in.right");
    var in_right_bracket = in_right.find(".bracket");
    var in_right_line = in_right.find(".line");

    var calWidthForSubheading = (sub_wrapper[0].offsetWidth - sub_heading[0].offsetWidth) / 2;
    var calcLine = calWidthForSubheading - in_left_bracket[0].offsetWidth;
    in_left.width(calWidthForSubheading - 2 + "px");
    in_right.width(calWidthForSubheading - 2 + "px");
    in_left_line.width(calcLine - 3);
    in_right_line.width(calcLine - 3);
  })

  // 显示购物车详情
  var detail_loaded = false;
  var cart_id = [];
  // 添加关闭事件
  function product_detail_close(product_detail) {
    product_detail.on("click", ".close", function() {
      product_detail_slide(product_detail, "close")
      pre_index.find(".button_active").show();
    });
  }

  // 添加选择事件
  function product_detail_choose_item(product_detail) {
    product_detail.on("click", ".choose_item", function() {
      $(this).addClass("choose").siblings().removeClass("choose");
    })
  }

  // 添加加减事件
  function product_detail_spinner(product_detail) {
    product_detail.on("click", ".operation", function() {
      var number_show =  product_detail.find(".number_show");
      var text = parseInt(number_show.text())
      if ($(this).hasClass("minus")) {
        (text > 1) && (number_show.text(text - 1));
      } else {
        (text < 99) && (number_show.text(text + 1));
      }
    })
  }

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

  // purchase make_order ajax
  function product_detail_make(product_detail) {
    var order_detail_footer = product_detail.find(".order-detail-footer");
    order_detail_footer.on("click", function() {
      var $this = $(this);
      var data = {};
      data.properties = [];
      product_detail.find(".choose_property").each(function(index, ele) {
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
      if ($this.hasClass("purchase")) {
        ajax_func({
          "url": '/api/cart/add/' + SEED_ID,
          type: "POST",
          data: data
        }, function(data) {
          pre_index.find("div.haha .tip").text(data.res.cart_count);
          cart_id.push(data.res.cart_id);
          pre_index.find(".close").click();
        })
      } else {
        ajax_func({
          "url": '/api/purchase_confirm/324234242423',
          type: "POST",
          data: data
        }, function(data) {
          console.log(data);
        })
      }

    })
  }

  // 判断是加入购物车还是立即购买
  function product_detail_judge($this, product_detail) {
    var order_detail_footer = product_detail.find(".order-detail-footer");
    if ($this.hasClass("add_to_cart")) {
      order_detail_footer.addClass("purchase").removeClass("make_order");
    } else {
      order_detail_footer.addClass("make_order").removeClass("purchase");
    }
  }
  pre_index.on("click", ".show_detail", function() {
    var $this = $(this);
    
    $this.parents(".buttton_active").hide();
    var product_detail = pre_index.find(".product_detail");
    
    if (!detail_loaded) {
      detail_loaded = true;
      ajax_func({
        url: '/api/purchase/detail/324234242423'
      }, function(data) {
        console.log(data.res)
        product_detail.html(purchase_tml(data.res));
        product_detail_judge($this, product_detail);
        product_detail_make(product_detail);
        product_detail_slide(product_detail, "show");
        product_detail_choose_item(product_detail);
        product_detail_close(product_detail);
        product_detail_spinner(product_detail);
      });
    } else {
      product_detail_slide(product_detail, "show");
      product_detail_judge($this, product_detail);
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
})
