	$(function(){
		$("#wrapper>nav").hide();
		$("#wrapper .gnb_icon").click(function(){
			$("#wrapper>nav").stop().fadeToggle();
		});
		
		$("#gnb").click(function(){
			$("#wrapper>nav").hide();
		});
		
	})