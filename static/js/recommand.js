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
  var recommand_tml = Handlebars.compile($("#recommand-template").html());
  ajax_func({
    url:'/api/recomends/324234242423'
  }, function(data) {
    $(".main-body").html(recommand_tml(data));
  })
})
