$(function(){
    var model1 = $(".product1_model");
    var model2 = $(".product2_model");
    var model3 = $(".product3_model");
    var model4 = $(".product4_model");
    var model5 = $(".product5_model");

    var modal1 = $(".first");
    var modal2 = $(".second");
    var modal3 = $(".third");
    var modal4 = $(".four");
    var modal5 = $(".five");
    
    var total_model = $(".index");
    var total_modal = $(".modal_box");
    var total_contents = $(".modal_contents");


    var productName1 = $(".name>ul>li:nth-child(1)");
    var productName2 = $(".name>ul>li:nth-child(2)");
    var productName3 = $(".name>ul>li:nth-child(3)");
    
    var productImg1 = $(".img>ul>li:nth-child(1)");
    var productImg2 = $(".img>ul>li:nth-child(2)");
    var productImg3 = $(".img>ul>li:nth-child(3)");

    var productDetail1 = $(".detail>ul>li:nth-child(1)");
    var productDetail2 = $(".detail>ul>li:nth-child(2)");
    var productDetail3 = $(".detail>ul>li:nth-child(3)");

    var closeBtn = $(".close");
    var modal_side = $("a[href]");
    var side_nav = $(".side_nav li")

    $(".main_modal_1after").hide();
    

    $(".main_modal_1 p").click(function(){
        $(".main_modal_1after").fadeToggle();
    })

    
    // 캐릭터별 모달창 작성
            

    total_modal.hide();
    total_contents.hide();

    

    side_nav.click(function(){
        var num = $(this).index();
        if(num == 1){
            modal1.show(model1.click());
        }else if(num == 2){
            modal2.show(model2.click());
        }else if(num == 3){
            modal3.show(model3.click());
        }else if(num == 4){
            modal4.show(model4.click());
        }else if(num == 5){
            modal5.show(model5.click());
        }else{

        }

    })
    
    closeBtn.click(function(){
        total_modal.hide();
        total_contents.hide();	
    })
    
    
    var m1 = model1.click(function(){
        total_modal.hide();
        total_contents.hide();
        modal1.show();

        productName1.text("스탠드 업 벨트 백");
        productName2.text("멘즈 롱-슬리브드 얼리 라이즈 스냅 셔츠");
        productName3.text("멘즈 트윌 트래블러 팬츠");

        productImg1.css({"background":"url(contents/product/grassland/grassland1.jpg) center/contain no-repeat"});
        productImg2.css({"background":"url(contents/product/grassland/grassland2.jpg) center/contain no-repeat"});
        productImg3.css({"background":"url(contents/product/grassland/grassland3.jpg) center/contain no-repeat"});

        productDetail1.html("&#8361 129,000<br><br> 내구성이 뛰어난 유기농 순면 원단에 TPU 필름 코팅 처리를 했습니다. 지퍼로 여닫으며 작은 물건들을 보관하기 좋습니다. 어깨에 멜 수도 있습니다.");
        productDetail2.html("&#8361 179,000<br><br>다양한 활동에서 입기 좋은 따뜻한 셔츠로 스냅 단추로 여닫습니다. 매우 부드러우며, 빨리 마릅니다. 100% 리사이클 폴리에스터 마이크로 플리스 원단을 사용했습니다. 건조한 날씨에는 단독으로 입고, 습한 날씨에는 아우터로 입기 좋습니다.");
        productDetail3.html("&#8361 199,000<br><br>편안하고 활동성이 뛰어난 팬츠로 다양한 활동에서 입기 좋습니다.")
    })

    model2.click(function(){
        total_modal.hide();
        total_contents.hide();
        modal2.show();

        productName1.text("멘즈 토렌트쉘 3L 재킷");
        productName2.text("멘즈 토렌트쉘 3L 팬츠 - 숏");
        productName3.text("메쉬 마스터 II 베스트");

        productImg1.css({"background":"url(contents/product/riverside/riverside1.jpg) center/contain no-repeat"});
        productImg2.css({"background":"url(contents/product/riverside/riverside2.jpg) center/contain no-repeat"});
        productImg3.css({"background":"url(contents/product/riverside/riverside4.jpg) center/contain no-repeat"});

        productDetail1.html("&#8361 259,000<br><br> 간단하면서 필요한 기능을 지니고 있는 토렌트쉘 3L 재킷은 3레이어 H2No® 퍼포먼스 스탠더드 기술을 적용하여 뛰어난 방수/투습 기능, 하루 종일 편안하고 오래 지속되는 성능을 보여 줍니다. 공정 무역(Fair Trade Certified™) 봉제 제품입니다.");
        productDetail2.html("&#8361 199,000<br><br>디자인은 심플하면서도 필요한 기능을 모두 지니고 있는 토렌트쉘 3L 팬츠는 3레이어 H2No® 퍼포먼스 스탠더드 기술을 적용하여 뛰어난 방수/투습 기능이 뛰어나며 쾌적합니다. 3레이어로 방수 기능이 오래도록 유지됩니다.");
        productDetail3.html("&#8361 249,000<br><br>땀을 매우 잘 배출하는 메쉬 피싱 베스트입니다. 낮게 위치한 세로 주머니는 장비를 넣고 빼기 쉽습니다. 다양한 날씨에 입기 좋게 디자인 하였습니다.")
    })

    model3.click(function(){
        total_modal.hide();
        total_contents.hide();
        modal3.show();

        productName1.text("울트라라이트 블랙 홀 미니 힙 팩");
        productName2.text("멘즈 스트레치 테르 플래닝 후디");
        productName3.text("멘즈 오가닉 코튼 라이트웨이트 기 팬츠");

        productImg1.css({"background":"url(contents/product/desert/desert1.jpg) center/contain no-repeat"});
        productImg2.css({"background":"url(contents/product/desert/desert2.jpg) center/contain no-repeat"});
        productImg3.css({"background":"url(contents/product/desert/desert3.jpg) center/contain no-repeat"});

        productDetail1.html("&#8361 49,000<br><br> 튼튼하고 가벼운 힙팩으로 작은 물건을 보관하기 좋습니다. 사용하지 않을 때는 속주머니에 넣어 휴대할 수 있습니다. 주 원단, 안감, 웨빙은 100% 리사이클 소재입니다.");
        productDetail2.html("&#8361 179,000<br><br>물 속과 물 밖에서 모두 입기 좋은 후디로 100% 리사이클 폴리에스터 원단이며 50+ UPF의 자외선 차단 기능이 있습니다.");
        productDetail3.html("&#8361 159,000<br><br>가벼운 유기농 코튼 트윌 원단으로 일상 생활을 포함한 다양한 활동에서 입기 좋습니다. 공정 무역(Fair Trade Certified™) 봉제 제품입니다.")
    })

    model4.click(function(){
        total_modal.hide();
        total_contents.hide();
        modal4.show();

        productName1.text("블랙 홀 팩 25L");
        productName2.text("멘즈 후디니 재킷");
        productName3.text("멘즈 더트 로머 스톰 팬츠");

        productImg1.css({"background":"url(contents/product/mountain/mountain1.jpg) center/contain no-repeat"});
        productImg2.css({"background":"url(contents/product/mountain/mountain2.jpg) center/contain no-repeat"});
        productImg3.css({"background":"url(contents/product/mountain/mountain3.jpg) center/contain no-repeat"});

        productDetail1.html("&#8361 185,000<br><br>튼튼하고 발수 기능이 뛰어난 블랙홀 원단으로 만든 적당한 사이즈의 백팩입니다. 주 원단, 안감, 웨빙 소재는 모두 100% 리사이클 원단입니다.");
        productDetail2.html("&#8361 159,000<br><br>어디서든 입을 수 있고 깃털처럼 가벼운 바람막이 재킷입니다. 100% 리사이클 나일론 소재입니다. 공정 무역(Fair Trade Certified™) 봉제 제품입니다.");
        productDetail3.html("&#8361 399,000<br><br>가볍고, 압축력과 방수 기능이 뛰어난 MTB 전용 라이딩 팬츠로 비, 눈, 젖은 덤불 그리고 추운 날씨로부터 몸을 지켜줍니다. 바람이 잘 통하고 신축성이 뛰어납니다. 폭풍우 속에서 패달링 할 때도 뛰어난 착용감을 자랑합니다.")
    })

    model5.click(function(){
        total_modal.hide();
        total_contents.hide();
        modal5.show();

        productName1.text("크랙스미스 32L");
        productName2.text("멘즈 R1 테크페이스 후디");
        productName3.text("멘즈 트리올렛 팬츠");

        productImg1.css({"background":"url(contents/product/rockclimbing/rockclimbing2.jpg) center/contain no-repeat"});
        productImg2.css({"background":"url(contents/product/rockclimbing/rockclimbing1.jpg) center/contain no-repeat"});
        productImg3.css({"background":"url(contents/product/rockclimbing/rockclimbing3.jpg) center/contain no-repeat"});

        productDetail1.html("&#8361 259,000<br><br> 장비와 물건을 넣고 빼기 간편한 가방입니다. 클라이밍에 유용하며 등판이 활짝 열립니다.");
        productDetail2.html("&#8361 289,000<br><br>파타고니아 레귤레이터 플리스와 같이 따뜻하고 신축성과 통풍성이 뛰어나면서도 마찰 저항성을 강화했습니다. 추운 날씨에 크로스레이어로 입기 편하며 변화하는 날씨 속에서 다양한 활동에 입기 좋습니다. 공정 무역(Fair Trade Certified™) 봉제 제품입니다.");
        productDetail3.html("&#8361 579,000<br><br>춥고, 눈이 많이 내리는 환경에도 잘 어울리는 알파인 팬츠입니다. 100% 리사이클 방수/투습 3레이어 고어텍스(GORE-TEX®)원단을 사용하였습니다. 측면 부분은 허리부터 발 끝까지 지퍼로 여닫을 수 있습니다.")
    })



    // 캐러셀 시작

    var carousel = $(".carousel");
    var img = $(".carousel ul li");
    var prev = $(".prev");
    var next = $(".next");
    var current = 0;
    
    var myCarousel = setInterval(setCarousel, 5000);
    
    function setCarousel() {
        var currentImg = img.eq(current);
        var nextImg = img.eq(current=current+1);

        currentImg.stop().css({"left":"0"}).animate({"left":"-100%"});
        nextImg.stop().css({"left":"+100%"}).animate({"left":"0"});

        if(current==5){
            current=-1;
        }
    }

    carousel.mouseenter(function(){
        clearInterval(myCarousel);
    })

    carousel.mouseleave(function(){
        myCarousel = setInterval(setCarousel, 5000);
    })

    prev.click(function(){
        var currentImg = img.eq(current);
        var nextImg = img.eq(current=current-1);

        currentImg.stop().css({"left":"0"}).animate({"left":"100%"});
        nextImg.stop().css({"left":"-100%"}).animate({"left":"0"});

        if(current==-6){
            current=0;
        }
    })

    next.click(function(){
        var currentImg = img.eq(current);
        var nextImg = img.eq(current=current+1);

        currentImg.stop().css({"left":"0"}).animate({"left":"-100%"});
        nextImg.stop().css({"left":"+100%"}).animate({"left":"0"});

        if(current==5){
            current=-1;
        }
    })
    // 캐러셀 끝

    //제품 상세설명

    var memo = $(".memo");
    var memoDetail = $(".memo_detail");

    memoDetail.hide();

    memo.mouseenter(function(){
        memoDetail.show();
    })
    memo.mouseleave(function(){
        memoDetail.hide();
    })
})