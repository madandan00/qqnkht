$(function() {
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	$(".team span").html(GetQueryString("id"))
})

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

$(".s i").on("click", function() {
	var index = $(this).index()
	$(this).addClass("active").siblings().removeClass("active")
	$(".z .groupRight").eq(index).show().siblings().hide();
})