function refreshRem(){
  var docEl = window.document.documentElement;
  var width = docEl.getBoundingClientRect().width;
  var rootSize = width/720*100;
  docEl.style.fontSize = rootSize + 'px';
}
$(document).ready(function() {
  Handlebars.registerHelper("compare", function(v1, v2, options) {
    if (v1 == v2) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  })
  Handlebars.registerHelper("percent", function(sold_count, presell_count) {
    return ((sold_count / presell_count) * 100).toFixed(2) + "%";
  })
  refreshRem();
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
  var order_tml = Handlebars.compile($("#order-template").html());

  ajax_func({
    url:'http://www.preseller.cn:9888/my_orders/all'
  }, function(data) {
    $(".tab-content.all").html(order_tml(data));
  })
  $(".tab").on("click", function() {
    var $this = $(this);
    var index = $this.index();
    // console.log(index);
    $this.find(".tab_bottom").addClass("choose");
    $this.siblings().find(".tab_bottom").removeClass("choose");
    $(".tab-content").eq(index).show().siblings().hide();
    if ($this.hasClass("all")) {
      ajax_func({
        url:'http://www.preseller.cn:9888/my_orders/all'
      }, function(data) {
        $(".tab-content.all").html(orde_tml(data));
      })
    } else if ($this.hasClass("wait_pay")) {
      ajax_func({
        url:'http://www.preseller.cn:9888/my_orders/wait_pay'
      }, function(data) {
        $(".tab-content.wait_pay").html(order_tml(data));
      })
    } else if ($this.hasClass("wait_send")) {
      ajax_func({
        url:'http://www.preseller.cn:9888/my_orders/wait_send'
      }, function(data) {
        $(".tab-content.wait_send").html(order_tml(data));
      })
    } else if ($this.hasClass("wait_receive")) {
      ajax_func({
        url:'http://www.preseller.cn:9888/my_orders/wait_receive'
      }, function(data) {
        $(".tab-content.wait_receive").html(order_tml(data));
      })
    }
  })
})
