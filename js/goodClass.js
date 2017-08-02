// $("#add").on("click",function(){
// 	//alert(1);
// 	var val=$(".addClass").val();
// 	$(".secondClass").prepend("<option selected>"+val+"</option>");
// 	$(".changeCon").val(val);
// 	$(".addClass").val('');
// })
$(".secondClass").on("change",function(){
	
	var val=$(".secondClass option:selected").html();
	var oids = $(".secondClass").val();
	//console.log(oids)
	$(".changeCon").val(val);
	
	$.ajax({
		type:"post",
		url:"http://www.77farmers.com/index.php/Admin/Goods/secondimg",
		data:{"type_id":oids},
		success:function(data){
			//console.log(data)
			$("#imgs").attr("src",data.type_img.slice(1))
			$("#imgss").attr("value",data.type_img)
		},

	});
})
// $("#change").on("click",function(){
// 	$(".secondClass option:selected").remove();
// 	var val=$(".changeCon").val();
// 	$(".secondClass").prepend("<option selected>"+val+"</option>");
// })
// $("#del").on("click",function(){
// 	$(".secondClass option:selected").remove();
// 	$(".changeCon").val('');
// 	$(".changeCon").val($(".secondClass option:selected").html());
// })
$(".changeCon").val($(".secondClass option:selected").html());


$("#addbtn").on("click",function(){
	$(".addt").show();
})
$(".close").on("click",function(){
	$(".addt").hide();
})
