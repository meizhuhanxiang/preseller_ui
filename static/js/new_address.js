$(document).ready(function() {
	var address_tml = compile_tml("#address-template");
	$("#distpicker2").distpicker({
		province: "北京市",
		city: "北京市市辖区",
		district: "东城区"
	});
	var addresses = $(".main.addresses");
	$(".add_new_finish").on("click", function() {
		var name = $("input.name").val();
		var phone = $("input.phone").val();
		var address = $("input.detail").val();
		var country = "中国"
		var province = $(".province option:selected").val();
		var region = $(".district option:selected").val();
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
