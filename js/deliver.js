$(".icon-xiugai").on("click",function(){
	if($(this).hasClass("icon-xiugai")) {
		$(this).removeClass("icon-xiugai").addClass("icon-queding")
		var custer = $(this).parents("ul").find(".custer").html();
		var address=$(this).parents("ul").find(".address").html();
		var tel=$(this).parents("ul").find(".tel").html();
		$(this).parents("ul").find(".custer").html('<input type="text" value="' + custer + '">');
		$(this).parents("ul").find(".address").html('<input type="text" value="' + address + '">');
		$(this).parents("ul").find(".tel").html('<input type="text" value="' +tel + '">');
	} else {
		$(this).removeClass("icon-queding").addClass("icon-xiugai")
		var custer = $(this).parents("ul").find(".custer").find("input").val();
		var address=$(this).parents("ul").find(".address").find("input").val();
		var tel=$(this).parents("ul").find(".tel").find("input").val();
		$(this).parents("ul").find(".custer").html( custer );
		$(this).parents("ul").find(".address").html( address );
		$(this).parents("ul").find(".tel").html( tel );
	}
})
