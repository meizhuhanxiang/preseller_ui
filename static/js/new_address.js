$(document).ready(function() {
	$("#distpicker2").distpicker({
		province: "北京市",
		city: "北京市市辖区",
		district: "东城区"
	});
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
			url: "/api/ddl_addresses/",
			type: "POST",
			data: data
		}, function(data) {
			console.log("data");
		})
	})
})
