$(document).ready(function() {
	var choose_cart_ids = [];
	var make_order_tml = gstep.templates.make_order;
	var main_purchase = $(".main.purchase");
	main_purchase.on('click', '.close_order', function() {
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


	// 选择购物车
	main_purchase.on("click", ".checkbox", function() {
		if ($(this).find("img").attr("src") === "") {
			$(this).find("img").attr("src", "/static/img/check.png");
			if ($(this).hasClass("checkall")) {
				$(".checksimple").find("img").attr("src", "/static/img/check.png");
				$(".checksimple").addClass("choose_checkobx");
			} else {
				$(this).addClass("choose_checkobx");
			}

		} else {
			$(this).find("img").attr("src", "");
			if ($(this).hasClass("checkall")) {
				$(".checksimple").find("img").attr("src", "");
				$(".checksimple").removeClass("choose_checkobx");
			} else {
				$(".checkall").find("img").attr("src", "");
				$(this).removeClass("choose_checkobx");
			}

		}
		var total = 0;
		choose_cart_ids = [];
		var number = $(".checkbox.choose_checkobx").length;
		$(".checkbox.choose_checkobx").each(function(index, ele) {
			var item = $(ele).parents(".order")
			var price = item.data("total");
			total = total + parseInt(price);
			choose_cart_ids.push(item.data("cart").toString());
		})
		console.log(number, total, choose_cart_ids);


		$(".final_choose_number").text(number);
		$(".total_price").text(total);

	});
	// 确认订单
	main_purchase.find(".final_purchase").on("click", function() {
		var number = $(".final_choose_number").text();
		var total = $(".total_price").text();
		var ids = JSON.stringify(choose_cart_ids);
		var data = {};
		ajax_func({
			url: '/api/cart/detail/',
			type: "POST",
			data: {
				cart_ids: ids
			}
		}, function(data) {
			$(".main.make_order .order-show").html(make_order_tml(data));
			console.log(number);
			$(".order_total_number").text(number);
			$(".order_total_price").text(total);
			$(".main.make_order").removeClass("hide").siblings().addClass("hide");
		});
	})
})