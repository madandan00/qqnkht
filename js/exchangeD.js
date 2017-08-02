$(".differences").html(parseFloat($(".AllPrice").html())-parseFloat($(".exchangeMoneys").html()));
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
			//换货商品名称
			$(".goodName").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".goodNames").html();
					$(".goodNames").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".goodNames").find("input").val();
					$(".goodNames").html(val);
				}
			})
			//数量
			$(".num").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".nums").html();
					$(".nums").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".nums").find("input").val();
					$(".nums").html(val);
				}
			})
			//换货金额	
			$(".exchangeMoney").on("click",function(){
				if($(this).hasClass("icon-zidingyi")) {
					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
					var val = $(".exchangeMoneys").html();
					$(".exchangeMoneys").html('<input type="text" value="' + val + '">');
				} else {
					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
					var val = $(".exchangeMoneys").find("input").val();
					$(".exchangeMoneys").html(val);
					$(".differences").html(parseFloat($(".AllPrice").html())-val);
				}
			})
			//差价
//			$(".difference").on("click",function(){
//				if($(this).hasClass("icon-zidingyi")) {
//					$(this).removeClass("icon-zidingyi").addClass("icon-queding")
//					var val = $(".differences").html();
//					$(".differences").html('<input type="text" value="' + val + '">');
//				} else {
//					$(this).removeClass("icon-queding").addClass("icon-zidingyi")
//					var val = $(".differences").find("input").val();
//					$(".differences").html(val);
//				}
//			})
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