//分页器设置
$("div.holder").jPages({
	containerID: "itemContainer",
	//		first: '首页',
	//		last: '尾页',
	previous: '上一页',
	next: '下一页',
	perPage: 5,
	startPage: 1,
	startRange: 2,
	midRange: 3,
	endRange: 2,
	animation: 'wobble',
	keyBrowse: true,
	callback: function(pages, items) {
		//			$("#page-panel").html("当前页面:" + pages.current);
		//$("#page-pane2").html("共" + pages.count + "页");
		//			$("#page-pane3").html("总数量:" + items.count);
		//			$("#page-pane4").html("每页数量:" + items.count / pages.count);

	}
});
//点击修改  
$(".change").on("click", function() {
		var val = $(this).html();
		if(val == "修改") {
			$(this).html("确定");
			$(this).parent("div").find(".cancel").show()
			//$(".cancel").show()
			$(this).css("background", "#ff8b00"); //改变当前状态
			//获取需要修改的内容



			var name = $(this).parents(".box").find(".nav5 .name").html();
			var where = $(this).parents(".box").find(".nav5 .address").html();
			var phone = $(this).parents(".box").find(".nav5 .phone").html();
			
			//添加input输入框
			$(this).parents(".box").find(".nav5 .name").html('<input type="text" value="' + name + '" />');
			$(this).parents(".box").find(".nav5 .address").html('<input type="text" value="' + where + '" />');
			$(this).parents(".box").find(".nav5 .phone").html('<input type="text" value="' + phone + '" />');
					
		} else if(val == "确定") {
			$(this).html("修改");
			$(this).css("background", "#b3da29");
			$(this).parent("div").find(".cancel").hide()
			//改变的数据	
            var orderNum=$(this).parents(".box").find(".orderNum .orderNumber").html();//订单号
			var name = $(this).parents(".box").find(".nav5 .name input").val(); //收货人
			var where = $(this).parents(".box").find(".nav5 .address input").val(); //收货地址
			var phone = $(this).parents(".box").find(".nav5 .phone input").val(); //收货人手机
			//赋予新内容
			$(this).parents(".box").find(".nav5 .name").html(name);
			$(this).parents(".box").find(".nav5 .address").html(where);
			$(this).parents(".box").find(".nav5 .phone").html(phone);
			//上传数据
			console.log(orderNum+":"+name+":"+where+":"+phone)
			$.ajax({
				type:"get",
				url:"",
				data:{"orderNum":orderNum,"name":name,"where":where,"phone":phone},
				success:function(data){
					//$("#failed").show().find(".tip").html("成功")
				}
			});
			

			

		}
	})
	//点击取消
$(".cancel").on("click", function() {
	
	
	//window.location.reload();
})
//关闭弹窗
$(".sure").on("click",function(){
	$("#failed").hide()
})
//确认发货
$(".fahuo").on("click",function(){
	var orderNum=$(this).parents(".box").find(".orderNum .orderNumber").html();
	console.log(orderNum)
	$.ajax({
		type:"get",
		url:"",
		data:{"orderNum":orderNum},
		success:function(){
			
		}
	});
})
$(".more").on("click",function(){
	if($(this).hasClass("xia")){
		$(this).find("i").removeClass("icon-xiajiantou").addClass("icon-toparrow")
		$(this).removeClass("xia").addClass("shang")
		$(this).css("bottom",0)
		$(this).parents(".box").css("height","auto")
	}else if($(this).hasClass("shang")){
		$(this).find("i").removeClass("icon-toparrow").addClass("icon-xiajiantou")
		$(this).removeClass("shang").addClass("xia")
		$(this).css("bottom",0)
		$(this).parents(".box").css("height","200px")
	}
	
})
