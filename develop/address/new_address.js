$(document).ready(function() {
	var address_tml = gstep.templates.address;
	$("#distpicker_new").distpicker({
		province: "北京市",
		city: "北京市市辖区",
		district: "东城区"
	});
	var addresses = $(".main.addresses");
	var new_address = $(".main.new_addresses");
	$(".add_new_finish").on("click", function() {
		var name = new_address.find("input.name").val();
		var phone = new_address.find("input.phone").val();
		var address = new_address.find("input.detail").val();
		var country = "中国"
		var province = new_address.find(".province option:selected").val();
		var region = new_address.find(".district option:selected").val();
		var default_add = 0;
		var data = {
			name: name,
			country: country,
			region: region,
			phone: phone,
			ddl: 'insert',
			province: province,
			default: default_add,
			address: address
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
	})
})
