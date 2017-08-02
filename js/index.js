$(function(){


//右侧导航效果
    $("#nav .nav .nav_m em").on("click",function(){		
		$(this).parents(".nav_m").find(".znav").toggle(500);
		if($(this).find("span").hasClass("icon-arrowright")){
			$(this).find("span").addClass("icon-xiajiantou").removeClass("icon-arrowright");
		}else{
			$(this).find("span").addClass("icon-arrowright").removeClass("icon-xiajiantou");
		}
	})
	$("#nav .nav .nav_m .znav .zLi ").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".nav_m").siblings().find(".zLi").removeClass("active");
		$("#goodClass2 li").removeClass("active");
		$("#actions li").removeClass("active");
	})
	$(".goodClass ").on("click",function(){
		if($(this).find("span").hasClass("icon-arrowright")){
			$(this).find("span").addClass("icon-xiajiantou").removeClass("icon-arrowright");
		}else{
			$(this).find("span").addClass("icon-arrowright").removeClass("icon-xiajiantou");
		}
		$(".zLi").removeClass("active");
		$("#actions li").removeClass("active");
		$("#goodClass2 li").eq(0).addClass("active");
    	$("#goodClass2").toggle(300);
    	
    })
	$("#goodClass2 li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$("#actions li").removeClass("active");
		$(".zLi").removeClass("active");
	})
    $(".action").on("click",function(){
    	if($(this).find("span").hasClass("icon-arrowright")){
			$(this).find("span").addClass("icon-xiajiantou").removeClass("icon-arrowright");
		}else{
			$(this).find("span").addClass("icon-arrowright").removeClass("icon-xiajiantou");
		}
    	$(".zLi").removeClass("active");
    	$("#goodClass2 li").removeClass("active");
    	$("#actions li").eq(0).addClass("active");
    	$("#actions").toggle(300);
    	//$(".goodClass2").css("display","block")
    })
    $("#actions li").on("click",function(){
    	$(this).addClass("active").siblings().removeClass("active");
    	$("#goodClass2 li").removeClass("active");
    	$(".zLi").removeClass("active");
		$(".zLi").removeClass("active");
    })
 //导航跳转
//商品列表
//	$(".orderlist").click(function(){
////		console.log($(this).parents().find(".active"))  修改当前菜单样式
//		$(this).parents().find(".active").removeClass("active")
//		$(this).addClass("active")
//		$("iframe").attr({
//			"src":"goodClass.html"
//		})
//	})
	$(".goodslist").click(function(){
		$(this).parents().find(".active").removeClass("active")
		$(this).addClass("active")
		$("iframe").attr({
			"src":"goodCheck.html"
		})	
	})
})
//iframe 高度自适应
$("#iframeId").load(function () {
	//alert(1)
	
	
    var mainheight = $(this).contents().find("body").height() + 30;
   $(this).height(mainheight);
    
 
});

$(".znav .zli").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(this).find("ul").toggle();
	$(".znav .zli ul li").removeClass("active");
})
$(".znav .zli ul li").on("click",function(){
	$(".znav .zli").removeClass("active");
	$(this).addClass("active").siblings().removeClass("active");
})




//$(function() {
//	$("#nav .nav .nav_m em").on("click", function() {
//		$(this).parents(".nav_m").find(".znav").toggle(500);
//		if($(this).find("span").hasClass("icon-arrowright")) {
//			$(this).find("span").addClass("icon-xiajiantou").removeClass("icon-arrowright");
//		} else {
//			$(this).find("span").addClass("icon-arrowright").removeClass("icon-xiajiantou");
//		}
//	})
//})