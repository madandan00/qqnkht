//修改数据
$(".change").on("click", function() {
		var val = $(this).html();
		if(val == "修改") {
			$(this).html("确定");
			$(this).parent(".nav15").find(".cancel1").show()
			$(this).css("background", "#ff8b00");
			//$(this).addClass("icon-queding").removeClass("icon-xiugaimima")
			var price = $(this).parents("ul").find(".nav5").html();
			var discount = $(this).parents("ul").find(".nav6").html();
			var has = $(this).parents("ul").find(".nav8").html();
			var time = $(this).parents("ul").find(".nav9").html();
			var sell = $(this).parents("ul").find(".nav14").html();
			console.log(price + ":" + discount + ":" + has + ":" + time + ":" + sell)
			$(this).parents("ul").find(".nav5").html('<input type="text" value="' + price + '" />')
			$(this).parents("ul").find(".nav6").html("<input value='" + discount + "'/>")
			$(this).parents("ul").find(".nav8").html("<input value='" + has + "'/>")
			$(this).parents("ul").find(".nav9").html("<input onclick='laydate()' value='" + time + "'/>")
			$(this).parents("ul").find(".nav14").html("<input value='" + sell + "'/>")
		} else {
			$(this).html("修改");
			$(this).parent(".nav15").find(".cancel1").hide()
			$(this).css("background", "#b3da29");
			//$(this).addClass("icon-xiugaimima").removeClass("icon-queding");
			var price = $(this).parents("ul").find(".nav5 input").val();
			var discount = $(this).parents("ul").find(".nav6 input").val();
			var has = $(this).parents("ul").find(".nav8 input").val();
			var time = $(this).parents("ul").find(".nav9 input").val();
			var sell = $(this).parents("ul").find(".nav14 input").val();
			$(this).parents("ul").find(".nav5").html(price)
			$(this).parents("ul").find(".nav6").html(discount)
			$(this).parents("ul").find(".nav8").html(has)
			$(this).parents("ul").find(".nav9").html(time)
			$(this).parents("ul").find(".nav14").html(sell)
			$.ajax({
				type: "get",
				url: "",
				async: true
			});
		}
	})
	//删除商品
$(".Cancel2").on("click", function() {
		$(this).parents("ul").remove();
	})
	//置顶
$(".nav15 .top").on("click", function() {

	})
	//取消
$(".cancel1").on("click", function() {
		$(this).parents(".nav15").find(".change").html("修改").css("background", "#b3da29");
		$(this).hide()
	})
	//上下架
$(".jia").on("click", function() {
	if($(this).hasClass("shangjia")) { //上架
		$(this).removeClass("shangjia").addClass("xiajia")
		$(this).find("img").attr("src", "img/xiajia.png")
	} else if($(this).hasClass("xiajia")) { //下架
		$(this).removeClass("xiajia").addClass("shangjia")
		$(this).find("img").attr("src", "img/shangjia.png")
	}
})

//关闭自定义的模态框
$(".jsClose").on("click", function() {
	$(".jx").css("display", "none")
})
$(".no").on("click", function() {
		$(".jx-dx div input").each(function(index, ele) {
			if($(ele).attr("disabled") != "disabled") {
				$(ele).removeAttr("checked");
			}

		})
		$(".check").html('');
		$(".jx-jg").css("display", "none")
		$(".jx").css("display", "none");

	})
	//打开自定义模态框
$(".zidingyi").on("click", function() {
		$(".jx").css("display", "block")
	})
	//多选
$(".jx-dx div input").on("click", function() {
	if($(this).attr("checked") == "checked") {
		$(this).removeAttr("checked")
	} else {
		$(this).attr("checked", "true")
	}
	var i = 0;
	$(".check").html('');
	$(".jx-dx div").each(function(index, ele) {
		if($(ele).find("input").attr("checked") == "checked") {
			$("nav" + index).css("display", "block").siblings().css("display", "none");
			var xx = $(ele).find("i").html();
			//console.log($(ele).index()+1)
			var mark = $(ele).index() + 1;
			var xin = '<div><input type="checkbox" checked data-id="' + mark + '"/><i>' + xx + '</i></div>'
			$(".check").append(xin)
		}
	})
	$(".check div").each(function(index, ele) {
		if($(ele).find("input").attr("checked") == "checked") {
			i++;
		}
	})
	if(i != 0) {
		$(".jx-jg").css("display", "block")
	} else {
		$(".jx-jg").css("display", "none")
	}
	if(i >= 9) {
		$(".jx-dx div input").each(function(index, ele) {
			if($(ele).attr("checked") != "checked") {
				$(ele).attr("disabled", "disabled")
			}
		})
	} else {
		$(".jx-dx div input").each(function(index, ele) {
			if($(ele).attr("checked") != "checked") {
				$(ele).removeAttr("disabled")
			}
		})
	}
})
$(".yes").on("click", function() {
		var i = 0;
			$(".check div").each(function(index,ele){
				
				if($(ele).find("input").attr("checked")=="checked"){
					++i;
					
				}
			})

//		$(".jx-dx div input").each(function(index, ele) {
//			//		if($(ele).attr("disabled")!="disabled"){
//			//			$(ele).removeAttr("checked");
//			//		}
//			if($(ele).attr("checked") == "checked") {
//				++i;
//				console.log(i)
//			}
//
//		})
		if(i != 0) {
			$(".nav").css("display", "none");
			$(".check div").each(function(index, ele) {
				//console.log($(ele).find("input").attr("data-id"))
				var list = $(ele).find("input").attr("data-id");
				$(".nav" + list).css("display", "block");
			})
			$(".jx").css("display", "none")

		} else {
			if(!window.confirm("请选择")) {
				$(".jx").css("display", "none")
			}
		}

	})
	//清空已选项
$(".qingkong").on("click", function() {
		$(".jx-dx div input").each(function(index, ele) {

			if($(ele).attr("disabled") != "disabled") {
				$(ele).removeAttr("checked");
			}

		})
		$(".check").html('');
		$(".jx-jg").css("display", "none")
	})
	//获得一级分类下拉菜单的值
	//$("#first-class").on("change",function(){
	//	var firstVal=$("#first-class option:selected").val();
	//	return firstVal;
	//})