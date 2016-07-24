
function refreshRem(){
  var docEl = window.document.documentElement;
  var width = docEl.getBoundingClientRect().width;
  var rootSize = width/720*100;
  docEl.style.fontSize = rootSize + 'px';
}
$(document).ready(function() {
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
  var introduction_tml = Handlebars.compile($("#introduction-template").html());
  ajax_func({
    url:'http://www.preseller.cn:9888/publisher/324234242423'
  }, function(data) {
    $(".main-body").html(introduction_tml(data.res));
  })
})
