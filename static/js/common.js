<<<<<<< HEAD
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
var Handlebars = Handlebars || "";
if (Handlebars) {
	Handlebars.registerHelper("compare", function(v1, v2, options) {
		// console.log(v1, v2);
		if (v1 == v2) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	})
}
=======
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
var Handlebars = Handlebars || "";
if (Handlebars) {
	Handlebars.registerHelper("compare", function(v1, v2, options) {
		// console.log(v1, v2);
		if (v1 == v2) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	})
	var compile_tml = function(tml_name) {
		return Handlebars.compile($(tml_name).html());
	}
}
>>>>>>> ee385445ab427312aa351d9f369c26eccfba2f5a
