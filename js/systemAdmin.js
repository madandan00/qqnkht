$(".change").on("click", function() {
	if($(this).hasClass("icon-xiugai")) {
		$(this).removeClass("icon-xiugai").addClass("icon-queding")
		var val = $(this).parents("ul").find(".nav8").html();
		$(this).parents("ul").find(".nav8").html('<input type="text" value="' + val + '">');
	} else {
		$(this).removeClass("icon-queding").addClass("icon-xiugai")
		var val = $(this).parents("ul").find(".nav8 input").val();
		$(this).parents("ul").find(".nav8").html(val);
	}
})