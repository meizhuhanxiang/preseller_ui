$(document).ready(function() {
	$('.main.purchase').on('click', '.close_order', function() {
		var $this = $(this);
		$('#dialog1').show().on('click', '.weui_btn_dialog.default', function() {
			$('#dialog1').off('click').hide();
		});

		$('#dialog1').show().on('click', '.weui_btn_dialog.cart.delete', function() {
			var cart_id = $this.parents(".order").data("cart");
			console.log(cart_id);
			ajax_func({
				url: '/api/cart/delete/',
				type: "POST",
				data: {
					cart_ids: [cart_id]
				}
			}, function(data) {
				// $(".main.purchase .main-body").html(purchase_tml(data));
				$this.parents(".order").remove();
				console.log(data);
			});
			$('#dialog1').off('click').hide();
		});

	})
	$(".main.purchase").on("click", ".checkbox", function() {
		if ($(this).find("img").attr("src") === "") {
			$(this).find("img").attr("src", "/static/img/check.png");
			if ($(this).hasClass("checkall")) {
				$(".checksimple").find("img").attr("src", "/static/img/check.png");
			} else {}
		} else {
			$(this).find("img").attr("src", "");
			if ($(this).hasClass("checkall")) {
				$(".checksimple").find("img").attr("src", "");
			} else {
				$(".checkall").find("img").attr("src", "");
			}
		}
	});
	var url_string = decodeURI(location.href);
	var cart_ids = JSON.parse(url_string.split("?")[1].split("=")[1]);
	var purchase_tml = compile_tml("#purchase-template");
	ajax_func({
		url: '/api/cart/detail/',
		type: "POST",
		data: {
			cart_ids: cart_ids
		}
	}, function(data) {
		$(".main.purchase .main-body").html(purchase_tml(data));
	});
})