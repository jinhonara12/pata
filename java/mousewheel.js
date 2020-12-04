// 마우스 휠
		var wheel = $("#wheel");

		$(window).scroll(function () {
			var scrollValue = $(document).scrollTop(); 
			if(scrollValue <= 400){
				wheel.css("opacity","0.6")
			}else if(scrollValue <= 600){
				wheel.css("opacity","0.5")
			}else if(scrollValue <= 800){
				wheel.css("opacity","0.4")
			}else if(scrollValue <= 1000){
				wheel.css("opacity","0.3")
			}else if(scrollValue <= 1200){
				wheel.css("opacity","0.2")
			}else if(scrollValue <= 1400){
				wheel.css("opacity","0.1")
			}else{
				wheel.css("opacity","0")
			}
		});