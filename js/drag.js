function drag(obj,obj2){
	obj.onmousedown = function(evt){
		var e = evt || window.event;
		var disX = e.offsetX;
		var disY = e.offsetY;
		document.onmousemove = function(evt){
			var e = evt || window.event;
			var L = e.clientX - disX;
			var T = e.clientY - disY;
			if(L < 0){
				L = 0;
			}else if (L > document.documentElement.clientWidth - obj.offsetWidth){
				L = document.documentElement.clientWidth - obj.offsetWidth;
			}
			if(T < 0){
				T = 0;
			}else if(T > document.documentElement.clientHeight - obj.offsetHeight){
				T = document.documentElement.clientHeight - obj.offsetHeight;
			}
			if(obj2){
				obj2.style.left = L + 'px';
				obj2.style.top = T + 'px';
			}else{
				obj.style.left = L + 'px';
				obj.style.top = T + 'px';
			}
			
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
}
