$(".pass").on("click", function() {
	$("#infoDisplay").show()

	$('#mark', parent.document).show()
	$('#mark1').show()
	var val = $(this).attr("date-id");
	//alert(val)
	$.ajax({
		type: "post",
		url: "http://www.qqnkny.com/Admin/Goods/sureaudit",
		data: {
			"id": val
		},
		success: function(data) {
			console.log(data)
				//console.log(data.goods_fathername);
			$(".chose1 option").removeAttr("selected");
			$(".chose2 option").removeAttr("selected");
			$(".chose1 option").each(function(index, ele) {
				//console.log($(ele).html())
				if($(ele).html() == data.goods_parentsname) {
					$(ele).attr("selected", "true")
					$(".chose1").trigger("change");
					setTimeout(function() {
						$(".chose2 option").each(function(index, ele) {
							if($(ele).html() == data.goods_fathername) {
								$(ele).attr("selected", "true")
							}
						})
					}, 500)
				}
			})

			$("#infoDisplay .mdd0").val(data.goods_id);
			$("#infoDisplay .val1").val(data.goods_name);
			$("#infoDisplay .val2").val(data.goods_odd);
			$("#infoDisplay .val3").val(data.goods_price);
			$("#infoDisplay .val4").val(data.goods_spec);
			$("#infoDisplay .val5").val(data.goods_specs);
			$("#infoDisplay .val6").val(data.goods_stype);
			$("#infoDisplay .val7").val(data.goods_status);
			$("#infoDisplay .val8").val(data.goods_area);
			$("#infoDisplay .val9").val(data.goods_brand);
			$("#infoDisplay .val10").val(data.goods_formerprice);
			$("#infoDisplay .val11").val(data.goods_number);
			$("#infoDisplay .val12").val(data.goods_discount);
			$("#infoDisplay .Ttime").val(); //上架时间
			$("#infoDisplay .keyWord").val(); //关键字
			$("#infoDisplay .salePrice").val(); //促销价格
			$("#infoDisplay .saleNum").val(); //销量
			$("#infoDisplay .goodDescribe").val(); //商品描述
			$("#infoDisplay").show();

		}
	});

})
$(".qd").on("click", function() {
	var val1 = $("#infoDisplay .val1").val();
	var val2 = $("#infoDisplay .val2").val();
	var val3 = $("#infoDisplay .val3").val();
	var val4 = $("#infoDisplay .val4").val();
	var val5 = $("#infoDisplay .val5").val();
	var val6 = $("#infoDisplay .val6").val();
	var val7 = $("#infoDisplay .val7").val();
	var val8 = $("#infoDisplay .val8").val();
	var val9 = $("#infoDisplay .val9").val();
	var val10 = $("#infoDisplay .val10").val();
	var val11 = $("#infoDisplay .val11").val();
	var val12 = $("#infoDisplay .val12").val();
	var mdd = $("#infoDisplay .mdd0").val()
	var goods_parents = $("#infoDisplay .chose1 option:selected").attr("value");
	var goods_father = $("#infoDisplay .chose2 option:selected").attr("value");
	var Ttime = $("#infoDisplay .Ttime").val(); //上架时间
	var keyWord = $("#infoDisplay .keyWord").val(); //关键字
	var salePrice = $("#infoDisplay .salePrice").val(); //促销价格
	var saleNum = $("#infoDisplay .saleNum").val(); //销量
	var goodDescribe = $("#infoDisplay .goodDescribe").val(); //商品描述
	$.ajax({
		type: "post",
		url: "http://www.qqnkny.com/Admin/Goods/auditGood",
		data: {
			"goods_name": val1,
			"goods_odd": val2,
			"goods_price": val3,
			"goods_spec": val4,
			"goods_specs": val5,
			"goods_stype": val6,
			"goods_status": val7,
			"goods_area": val8,
			"goods_brand": val9,
			"goods_formerprice": val10,
			"goods_number": val11,
			"goods_discount": val12,
			"goods_id": mdd,
			"goods_parents": goods_parents,
			"goods_father": goods_father //加上上架时间等
		},
		success: function(data) {
			//console.log(data);
			if(data == 1) {
				$("#infoDisplay").hide()
				$('#mark', parent.document).hide()
				$('#mark1').hide()
				window.location.reload();

				alert('审核通过！！！')

			} else {
				window.location.reload();

				alert('审核失败，请重新审核')
			};
		}

	});

})
$(".qx").on("click", function() {
	$("#infoDisplay").hide()
	$('#mark', parent.document).hide()
	$('#mark1').hide()
})