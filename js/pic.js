function checkPic() {
	var picPath = document.getElementById("picPath").value;
	var type = picPath.substring(picPath.lastIndexOf(".") + 1, picPath.length).toLowerCase();
	if(type == "jpg" || type == "bmp" || type == "gif" || type == "png") {
		return true;
		
	}else{
		alert("请上传正确的图片格式1");
		return false;
	}
}
//图片预览
//function PreviewImage(divImage, upload, width, height) {
//	if(checkPic()) {
//		try {
//			var imgPath; //图片路径
//
//			var Browser_Agent = navigator.userAgent;
//			//判断浏览器的类型
//			if(Browser_Agent.indexOf("Firefox") != -1) {
//				//火狐浏览器
//
//				//getAsDataURL在Firefox7.0 无法预览本地图片，这里需要修改
//				imgPath = upload.files[0].getAsDataURL();
//				document.getElementById(divImage).innerHTML = "<img id='imgPreview' src='" + imgPath + "' width='" + width + "' height='" + height + "'/>";
//			} else {
//				//IE浏览器 ie9 必须在兼容模式下才能显示预览图片
//				var Preview = document.getElementById(divImage);
//				Preview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = upload.value;
//				Preview.style.width = width;
//				Preview.style.height = height;
//			}
//		} catch(e) {
//			alert("请上传正确的图片格式2");
//		}
//	}
//}
//function showImage()
//{
//	if(checkPic()){
//		// 获取文件路径
//	    var path = document.getElementById('picPath').value;
//	    // 显示文件路径
//	    //document.getElementById('imgName').innerHTML = path;
//	    // 创建 img
//	    var img = document.createElement('img');
//	    // 载入图像
//	    img.src = path.replace(/fakepath/,'');
//	    alert(path.replace(/fakepath/,''))
//	    // 插入图像到页面中
//	    document.getElementById('Preview').appendChild(img);
//		
//	}
//  
//}