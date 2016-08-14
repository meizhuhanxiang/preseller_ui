$(document).ready(function() {
	var $main_purchase = $(".main.purchase");
	var $pre_index = $(".main.pre_index");
	var $make_order = $(".main.make_order");
	var $addresses = $(".main.addresses");
	var $new_addresses = $(".main.new_addresses");
	var $address_edit = $(".main.address_edit");
	$main_purchase.find(".back").on("click", function() {
		$pre_index.removeClass("hide").siblings().addClass("hide");
	})
	$make_order.find(".back").on("click", function() {
		$main_purchase.removeClass("hide").siblings().addClass("hide");
	})
	$addresses.find(".back").on("click", function() {
		$make_order.removeClass("hide").siblings().addClass("hide");
	})
	$new_addresses.find(".back").on("click", function() {
		$addresses.removeClass("hide").siblings().addClass("hide");
	})
	$address_edit.find(".back").on("click", function() {
		$addresses.removeClass("hide").siblings().addClass("hide");
	})
})