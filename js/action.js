$("#xianshi").on("click",function(){
	$(this).parents("ul").find(".nav6").html("限时购")
})
$("#newGoods").on("click",function(){
	$(this).parents("ul").find(".nav6").html("上新品")
})
function add(a){
	function(b){
		return a+b;
	}
}
