$(document).ready(function() {
	var address_tml = compile_tml("#address-template");
	ajax_func({
		url: '/api/addresses/'
	}, function(data) {
		$(".main-body").html(address_tml(data));
	});
	$(".add_new_address").on("click", function() {
		window.location.href = "new_address.html"
	})
})