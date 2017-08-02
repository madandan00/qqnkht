$("#add").on("click",function(){
	//alert(1);
	var val=$(".addClass").val();
	$(".secondClass").prepend("<option selected>"+val+"</option>");
	$(".changeCon").val(val);
	$(".addClass").val('');
})
$(".secondClass").on("change",function(){
	var val=$(".secondClass option:selected").html();
	$(".changeCon").val(val);
	//var checkIndex=$(".secondClass").get(0).selectedIndex;
})
$("#change").on("click",function(){
	$(".secondClass option:selected").remove();
	var val=$(".changeCon").val();
	$(".secondClass").prepend("<option selected>"+val+"</option>");
})
$("#del").on("click",function(){
	$(".secondClass option:selected").remove();
	$(".changeCon").val('');
	$(".changeCon").val($(".secondClass option:selected").html());
})
$(".changeCon").val($(".secondClass option:selected").html());
