
function checkPic(mark) {
	var picPath = document.getElementById(mark).value;
	var type = picPath.substring(picPath.lastIndexOf(".") + 1, picPath.length).toLowerCase();
	if(type == "jpg" || type == "bmp" || type == "gif" || type == "png") {
		return true;
		
	}else{
		alert("请上传正确的图片格式1");
		return false;
	}
}	
	
	
function prePic(mark) {
	if(checkPic(mark)){
		var url = window.URL.createObjectURL($("#"+mark)[0].files[0]);
		$(".Preview ").attr('src',url);	
	}
	
}