//订单状态
			$(".orderState").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".orderStates").html();
					$(".orderStates").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".orderStates").find("input").val();
					$(".orderStates").html(val);
				}
			})
			//返回现金
			$(".backCash").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".backCashs").html();
					$(".backCashs").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".backCashs").find("input").val();
					$(".backCashs").html(val);
				}
			})
			//申请状态
			$(".applyState").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".applyStates").html();
					$(".applyStates").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".applyStates").find("input").val();
					$(".applyStates").html(val);
				}
			})
			//快递
			$(".express").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".Express").html();
					$(".Express").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".Express").find("input").val();
					$(".Express").html(val);
				}
			})
			//快递单号
			$(".kddh").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".kddhc").html();
					$(".kddhc").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".kddhc").find("input").val();
					$(".kddhc").html(val);
				}
			})