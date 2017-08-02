$(function(){
	//验证用户名输入基本要求
function checkName(){ 		
	var name = $("#name").val();
	var reg1 =/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
	    if(!reg1.test(name)){ 	        
	        //提示框
	        //alert("用户名输入错误")
	        $("#nts").show()
	        setTimeout(function(){
	        	$("#nts").hide()
	        },1000)
	        return false; 
	}else{
	    checkPassword()
	    return true
	}	    
}
//验证密码输入基本要强求
function checkPassword(){
	    var pword = $("#password").val();
	    var reg2 = /^(\w){6,20}$/; 
	    if(!reg2.test(pword)){         
	        //提示框
	        //alert("密码输入错误")
	        $("#pts").show()
	        setTimeout(function(){
	        	$("#pts").hide()
	        },1000)
	        return false; 
	    }else{
	    	//checkCode()
	    	return true
	    }	    
	}
//验证码判断，验证码val与#hide.val（）作比较，暂定不加入。
//function checkCode(){
//	var hide = $("#hide").val()
//	var Code = $("#code").val()
//	if(Code == hide){
//		return true
//		//alert()
//	}else{
//		//alert("验证码错误")
//		 $("#cts").show()
//	        setTimeout(function(){
//	        	$("#cts").hide()
//	        },1000)
//	        return false; 		
//	}
//}

$(".login").on("click",function(){
//从用户名开始验证
console.log(checkName())
if	(checkName()){
	//alert(1)
	
}
	
	
})
})