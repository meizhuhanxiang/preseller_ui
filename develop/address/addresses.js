$(document).ready(function() {
	var address_tml = gstep.templates.address;
	ajax_func({
		url: '/api/addresses/'
	}, function(data) {
		$(".main.addresses .main-body").html(address_tml(data));
	});
	var new_address = $(".main.new_addresses");
	$(".add_new_address").on("click", function() {
		new_address.removeClass("hide").siblings().addClass("hide");
	});
	var make_order = $(".main.make_order");
	var addresses = $(".main.addresses");
	addresses.on("click", ".order-detail", function() {
		console.log("sss");
		make_order.find(".order.addresses .order-detail").html($(this).html());
		make_order.removeClass("hide").siblings().addClass("hide");
	})
	var edit_address = $(".main.address_edit");
	addresses.on("click", ".address_edit", function() {
		var address_id = $(this).parent().siblings(".order-detail").data("id");
		ajax_func({
			data: {
				address_id: [address_id]
			},
			type: "POST",
			url: '/api/address/get'
		}, function(data) {
			console.log(data.res)
			data.res.forEach(function(ele) {
				console.log(ele.address_id, address_id)
				if (ele.address_id == address_id) {

					edit_address.find("input.name").val(ele.name);
					edit_address.find("input.name").data("id", address_id);
					edit_address.find("input.phone").val(ele.phone);
					edit_address.find("input.detail").val(ele.address);
					$("#distpicker_edit").distpicker({
						province: "北京市",
						city: "北京市市辖区",
						district: "东城区"
					});
					edit_address.removeClass("hide").siblings().addClass("hide");
				}
			})
		});
	});

	$(".edit_address_finish").on("click", function() {
		var name = edit_address.find("input.name").val();
		var phone = edit_address.find("input.phone").val();
		var address = edit_address.find("input.detail").val();
		var country = "中国"
		var province = edit_address.find(".province option:selected").val();
		var region = edit_address.find(".district option:selected").val();
		var default_add = 0;
		var address_id = edit_address.find("input.name").data("id");
		var data = {
			name: name,
			country: country,
			region: region,
			phone: phone,
			ddl: 'change',
			province: province,
			default: default_add,
			address: address,
			address_id: address_id
		}
		ajax_func({
			url: "/api/address/ddl",
			type: "POST",
			data: data
		}, function(data) {
			console.log("data");
			// 获取最新的地址列表
			ajax_func({
				url: '/api/addresses/'
			}, function(data) {
				console.log("sadasda")
				$(".main.addresses .main-body").html(address_tml(data));
				addresses.removeClass("hide").siblings().addClass("hide");
			});

		})
	});


	edit_address.on('click', '.function', function() {
		console.log("aaaa")
		var $this = $(this);
		$('#dialog_address').show().on('click', '.weui_btn_dialog.default', function() {
			$('#dialog_address').off('click').hide();
		});

		$('#dialog_address').show().on('click', '.weui_btn_dialog.address_item.delete', function() {
			var address_id = edit_address.find("input.name").data("id");
			ajax_func({
				url: '/api/address/ddl',
				type: "POST",
				data: {
					ddl: "delete",
					address_id: address_id
				}
			}, function(data) {
				ajax_func({
					url: '/api/addresses/'
				}, function(data) {
					console.log("sadasda")
					$(".main.addresses .main-body").html(address_tml(data));
					addresses.removeClass("hide").siblings().addClass("hide");
				});
			});
			$('#dialog_address').off('click').hide();
		});
	})
})