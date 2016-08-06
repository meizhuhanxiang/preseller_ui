$(document).ready(function() {
	var address_tml = compile_tml("#address-template");
	ajax_func({
		url: '/api/addresses/'
	}, function(data) {
		$(".main.addresses .main-body").html(address_tml(data));
	});
	var new_address = $(".main.new_addresses");
	$(".add_new_address").on("click", function(	) {
		new_address.removeClass("hide").siblings().addClass("hide");
	});
	var make_order = $(".main.make_order")
	$(".main.addresses").on("click", ".order-detail", function() {
		console.log("sss");
		make_order.find(".order.addresses .order-detail").html($(this).html());
		make_order.removeClass("hide").siblings().addClass("hide");
	})
})