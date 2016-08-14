$(document).ready(function() {
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
    url:'/api/publisher/324234242423'
  }, function(data) {
    $(".main-body").html(introduction_tml(data.res));
  })
})
