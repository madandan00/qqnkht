$(".custer").on("click", function() {
	if($(this).hasClass("icon-zidingyi")) {
		$(this).removeClass("icon-zidingyi").addClass("icon-queding")
		var val = $(".user").html();
		$(".user").html('<input type="text" value="' + val + '">');
	} else {
		$(this).removeClass("icon-queding").addClass("icon-zidingyi")
		var val = $(".user").find("input").val();
		$(".user").html(val);
	}
})
$(".tel").on("click", function() {
	if($(this).hasClass("icon-zidingyi")) {
		$(this).removeClass("icon-zidingyi").addClass("icon-queding")
		var val = $(".telephone").html();
		$(".telephone").html('<input type="text" value="' + val + '">');
	} else {
		$(this).removeClass("icon-queding").addClass("icon-zidingyi")
		var val = $(".telephone").find("input").val();
		$(".telephone").html(val);
	}
})
$(".addressIcon").on("click", function() {
	if($(this).hasClass("icon-zidingyi")) {
		$(this).removeClass("icon-zidingyi").addClass("icon-queding")
		var val = $(".address").html();
		$(".address").html('<input type="text" value="' + val + '">');
	} else {
		$(this).removeClass("icon-queding").addClass("icon-zidingyi")
		var val = $(".address").find("input").val();
		$(".address").html(val);
	}
})
$(".priceIcon").on("click", function() {
	if($(this).hasClass("icon-zidingyi")) {
		$(this).removeClass("icon-zidingyi").addClass("icon-queding")
		var val1 = $(".price1").html();
		$(".price1").html('<input type="text" value="' + val1 + '">')
		var val2 = $(".price2").html();
		$(".price2").html('<input type="text" value="' + val2 + '">')
		var num = $(".num").html();
		$(".num").html('<input type="text" value="' + num + '">');
	} else {
		$(this).removeClass("icon-queding").addClass("icon-zidingyi")
		var num=parseInt($(".num").find("input").val());
		$(".num").html(num);
		var val1 = $(".price1").find("input").val();
		$(".price1").html(val1);
		var val2 = $(".price2").find("input").val();
		$(".price2").html(val2);
		var val3 = parseFloat(val1)*num+parseFloat(val2);
		$(".price3").html(val3);
	}
})


//返回
$("#sub").on("click",function(){
	if($(".custer").hasClass("icon-queding")||$(".tel").hasClass("icon-queding")||$(".addressIcon").hasClass("icon-queding")||$(".priceIcon").hasClass("icon-queding")){
		return false;
	}
})
$(".back").on("click",function(){
	window.history.back();
})
//发货选项出现
$(
	function(){
		if($("#state").html()=="已完成交易"){
			$("#sends").show();
		}else{
			$("#sends").hide()
		}
	}
)
$(".send").bind("change",function(){
	if($(".send")[0].checked){
		alert(2)
	}
})
