$(function(){
    var surveyPage = $(".survey_page");
    var start = $(".start_button");
    var close_btn = $(".close");
    var next = $(".next");
    var next_image = $(".community_main");
    var cha_box = $(".cha_box");
    var txtTitle = $(".cha_box>ul>li:nth-of-type(2) h3");
    var txtSub = $(".cha_box>ul>li:nth-of-type(2) span");
    var img = $(".cha_box>ul>li:nth-of-type(1)");
    // 변수 정리 끝
    


    surveyPage.hide();
    cha_box.hide();

    // 기본 설정 끝

    var line = $("h3");

    // var line = $(".check_box li")
    var box1 = $("#check1")
    var box2 = $("#check2")
    var box3 = $("#check3")
    var box4 = $("#check4")
    var box5 = $("#check5")

    // line.click(function(){
    // 	var chk = box1.is(":checked");
        
        
    // 	if(true){
    // 		box1.prop("checked", true);
    // 		box2.prop("checked", true);
    // 		box3.prop("checked", true);
    // 		box4.prop("checked", true);
    // 		box5.prop("checked", true);
    // 	}else{
    // 		box1.prop("checked", false);
    // 	}
    // })

    function findTextNum(){
        line.click(function(){
            var lineId = ($(this).attr("id"));

            if(lineId === "num1"){
                box1.prop("checked", true);
            }else if(lineId === "num2"){
                box2.prop("checked", true)
            }else if(lineId === "num3"){
                box3.prop("checked", true)
            }else if(lineId === "num4"){
                box4.prop("checked", true)
            }else if(lineId === "num5"){
                box5.prop("checked", true)
            }
        })
    }
    findTextNum();

    start.click(function(){
        
        surveyPage.show().css({"z-index":"999999"});
    });

    close_btn.click(function(){
        surveyPage.hide();
        cha_box.hide();
        location.reload();
    });

    next.click(function(){
        next_image.css({"background":"url(background/community/community_main2.png) center bottom/cover no-repeat"});
        cha_box.css("z-index","9999999");
        surveyPage.hide();
        
        var i = $("input[type=checkbox]:checked").length
        if(i<3){
            // alert(i)
            img.css({"background":"url(contents/community/cha1_ani.png) left center/cover no-repeat"});	
            txtTitle.html("환경꼬꼬마<br>");
            txtSub.html("우리의 지구를 지키는 일은 생각보다 쉬워요! <br>				우리가 살아가는 지구에 좀 더 관심을 가지고, 하나 하나 			찬찬히 실천에 옮겨 보세요!");
            cha_box.show();
        }else if(i===3){
            // alert(i)
            img.css({"background":"url(contents/community/cha4_ani.png) left bottom/cover no-repeat"});	
            txtTitle.html("환경어린이<br>");
            txtSub.html("환경 문제에 누구보다 더 관심이 많은 당신! <br>이젠 실천으로 옮겨볼까요?");
            cha_box.show();	
        }
        else if(i===4){
            // alert(i)
            img.css({"background":"url(contents/community/cha3_ani.png) left bottom/cover no-repeat"});	
            txtTitle.html("환경운동가<br>");
            txtSub.html("실천은 최고인 당신! <br>우리가 살아가는 아름다운 지구와 환경 문제에도 조금 더 관심 갖고, 진정한 환경지킴이로 거듭나는 건 어떨까요?");
            cha_box.show();	
        }else if(i===5){
            // alert(i)
            img.css({"background":"url(contents/community/cha2_ani.png) left bottom/cover no-repeat"});	
            txtTitle.html("완벽한 환경수호자<br>");
            txtSub.html("환경에 대한 관심도, 실천도 완벽한 당신! <br>					지금처럼 지구를 쭉~ 사랑해주세요!");
            cha_box.show();	
        }
    })
})