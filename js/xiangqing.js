
function checkPic(mark) {
	var picPath = document.getElementById(mark).value;
	var type = picPath.substring(picPath.lastIndexOf(".") + 1, picPath.length).toLowerCase();
	if(type == "jpg" || type == "bmp" || type == "gif" || type == "png") {
		return true;
		
	}else{
		//alert($("#"+mark).val())
		$("#"+mark).val("");
		alert("请上传正确的图片格式");
		//alert($("#"+mark).val())
		return false;
	}
}	
	
	
function prePic(mark) {
	
	if(checkPic(mark)){
		var url = window.URL.createObjectURL($("#"+mark)[0].files[0]);
		$("#"+mark).parents('.pic-box').find(".Preview img").attr('src',url);	
	}
	alert($("#"+mark).val())
	console.log($("#picPath21").val())
	console.log($("#picPath22").val())
	console.log($("#picPath23").val())
	console.log($("#picPath24").val())
	console.log($("#picPath25").val())
}