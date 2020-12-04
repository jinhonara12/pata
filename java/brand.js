// 패러랠 효과 시작
		let parallax_1 = document.getElementById("parallax_1");
		let parallax_2 = document.getElementById("parallax_2");
		let parallax_3 = document.getElementById("parallax_3");
		let parallax_4 = document.getElementById("parallax_4");
		let parallax_5 = document.getElementById("parallax_5");
		let parallax_6 = document.getElementById("parallax_6");
		let parallax_7 = document.getElementById("parallax_7");
		let parallax_8 = document.getElementById("parallax_8");
		let parallax_9 = document.getElementById("parallax_9");


		window.addEventListener('scroll', function(){
			var value = window.scrollY;

			parallax_9.style.top = value * 0.5 + 'px';
			parallax_8.style.top = value * 0.6 + 'px';
			parallax_7.style.top = value * 0.5 + 'px';
			parallax_6.style.top = value * 0.4 + 'px';
			parallax_5.style.top = value * 0.3 + 'px';
			parallax_4.style.top = value * 0.2 + 'px';
			// parallax_3.style.top = value * 0.2 + 'px';
			// parallax_2.style.top = value * 0.2 + 'px';
			// parallax_1.style.top = value * 0.2 + 'px';
		});
		// 패러랠 효과 종료


	$(function(){
 		var back = $(".back");
		var cha1 = $(".brand_cha1");
		var cha2 = $(".brand_cha2");
		var cha3 = $(".brand_cha3");
		var model1 = $(".modal1");
		var model2 = $(".modal2");
		var model3 = $(".modal3");
		var close = $(".close");

		var talkBox = $(".talk_box");
		var talkTitle = $(".talk h3");
		var talkSubTitle = $(".talk h4");
		var talkDetail = $(".talk span");

		var nextPage = $(".arrow_1");

		
		back.hide();
		model1.hide();
		model2.hide();
		model3.hide();
		talkBox.hide();


		//모달창 닫기
		close.click(function(){
			back.hide();
			model1.hide();
			model2.hide();
			model3.hide();
			talkBox.hide();
			$(".modal").css({"z-index":"-1"});
			$('body').css("overflow", "auto");
		})
	
		//캐릭터1 모달창
		cha1.click(function(){
			$('body').css("overflow", "hidden");
			$(".modal").css({"z-index":"99999999"});
			
			back.show();
			talkBox.show();
			model1.show();
			
			talkTitle.text("(파타고니아의 역사1/3)");
			talkSubTitle.text("대장장이 등반가");
			talkDetail.html("파타고니아 창립자 이본 쉬나드는 1953년, 사냥을 위해 독수리와 팔콘을 훈련시키는 남부 캘리포티나 팔콘 클럽에서 활동하던 14살 때 클라이밍을 처음 시작했습니다.이본과 친구들은 샌 페르나도 계곡 서쪽 끝으로 향하는 열차에 뛰어 올라 스토니 포인트의 사암 절벽으로 갔습니다. <br><br>쉬나드는 매년 겨울 주말마다 스토니 포인트에 있는 절벽에 매달려 지냈습니다. 봄부터 가을까지는 팜 스프링 윗쪽의 타키츠 바위에서 지냈습니다. 쉬나드와 그의 동료는  거벽 등반을 훈련하기 위해 타키츠에서 요세미티로 향했습니다. <br><br> 당시 구할 수 있는 유일한 피톤은 연철로 만들었고, 한 번 쓰면 바위에 버려두고 와야 했습니다. 여러 날 동안 등반해야 하는 요세미티에서는 피톤이 수 백 개 필요했습니다. 이본은 강철 피톤을 만든 적 있던 존 살라테와 만난 뒤 스스로 장비를 만들어 보기로 했습니다. <br><br>	쉬나드는 곡식을 자르는 기계의 날로 첫 피톤을 만들었고, 요세미티 센티넬 락 북벽을 등반하면서 시험했습니다. 쉬나드가 만든 피톤에 대한 소문이 퍼졌고 사람들은 쉬나드의 크롬-몰리브덴 철 피톤을 찾기 시작했습니다. 쉬나드는 쇠를 달궈 한 시간에 피톤 두 개를 만들었고, 한 개 당 1.5 달러에 팔았습니다. <br><br>이후 몇 년 동안 쉬나드는 겨울에만 피톤을 만들었습니다. 쉬나드는 차 뒷 칸에서 장비를 팔았습니다. 하지만 이윤은 매우 적었습니다. 하루에 50센트~1달러만 쓰면서 일주일을 지냈습니다. ");
		})
		
		//캐릭터2 모달창
		cha2.click(function(){
			$('body').css("overflow", "hidden");
			$(".modal").css({"z-index":"99999999"});
			
			back.show();
			talkBox.show();
			model2.show();

			talkTitle.text("(파타고니아의 역사2/3)");
			talkSubTitle.text("쉬나드 장비회사");
			talkDetail.html("쉬나드가 만든 장비에 대한 수요가 늘어나서 더 이상 손으로 만들 수 없었습니다. 쉬나드는 기계를 사용해야만 했습니다. 쉬나드는 등반가이자 항공 엔지니어였던 톰 프로스트와 장비 디자인을 날카롭고 아름답게 다듬었습니다. 프로스트와 쉬나드는 9년 동안 함께 일하며 거의 모든 등반 장비를 새로 디자인하고, 더욱 튼튼하고 가볍고 단순하고, 기능을 뛰어나게 만들었습니다. 이들은 등반을 하면서 장비 개선에 대한 아이디어를 얻었습니다.<br><br> 1970년에 쉬나드 장비 회사는 미국에서 가장 큰 등반 장비 회사가 되었습니다. 하지만 이들이 만든 장비가 바위를 망가뜨렸기 때문에 자연을 파괴하는 악당이 되고 말았습니다. 등반을 하는 사람들이 늘어나면서 같은 바위에 피톤을 박고 빼는 일이 되풀이 되었고, 바위는 흉하게 망가졌습니다. 엘 캐피탄 봉우리의 아주 깨끗했던 노즈 루트가 형편없이 망가진 걸 본 후 쉬나드와 프로스트는 피톤 제작 사업을 접기로 결정했습니다. 이 일은 자연을 보호하기 위한 파타고니아의 첫번째 걸음이었습니다.<br><br> “’깨끗함’이라는 말이 있습니다. 너트와 런너(등반에 사용하는 질긴 끈)만 사용하는 등반은 깨끗한 클라이밍입니다. 깨끗하게 올라야 합니다. 왜냐하면 이 바위를 우리 다음에 오를 등반가들이 있기 때문입니다. 깨끗하게 올라야 합니다. 바위에 망치로 피톤을 박고 빼는 일은 바위에 상처를 입힙니다. 우리 다음에 오를 등반가들의 자연스러운 경험을 망가뜨립니다. 깨끗하게 올라야 합니다. 등반하는 동안 등반가는 바위에 흔적을 거의 남겨서는 안됩니다. 깨끗하게 올라야 합니다. 깨끗한 등반은 바위를 보존하는 등반입니다. 자연에 더욱 가까워지는 등반입니다.”<br><br> 카달로그를 우편 발송한지 몇 달 지나지 않아 피톤 판매는 점점 줄어들었습니다. 대신 쵸크가 만드는 속도보다 빨리 팔려나갔습니다. 쉬나드 장비 회사의 얇은 함석판 작업장에서는 망치질과 드릴로 구멍 뚫는 소리가 끊이지 않았습니다.");
		});

		//캐릭터3 모달창
		cha3.click(function(){
			$('body').css("overflow", "hidden");
			$(".modal").css({"z-index":"99999999"});
			
			back.show();
			talkBox.show();
			model3.show();

			talkTitle.text("(파타고니아의 역사3/3)");
			talkSubTitle.text("등반가를 위한 옷");
			talkDetail.html("1960년대 후반 사람들은 야외 활동에서 밝고 색깔 있는 옷을 입지 않았습니다. 회색 티와 바지를 “활동복”으로 주로 입었습니다. 요세미티를 등반하는 사람들은 발목 부분을 잘라낸 면 바지와 중고 가게에서 산 흰색 셔츠를 입었습니다. 스코트랜드로 등반 여행을 떠난 쉬나드는 등반할 때 입으려고 럭비 셔츠를 사왔습니다. 럭비 셔츠는 질기고 튼튼해서 바위에 비벼도 괜찮았고, 목 부분 칼라는 장비를 매단 슬링 때문에 목이 쓸리는 것을 막아 주었습니다. <br><br> 영국 엄브로에서 주문한 럭비 셔츠들은 날개 돋힌듯 팔려 나갔습니다. 재고가 다 떨어져서 뉴질랜드와 아르헨티나에도 주문을 시작했습니다. 우리는 옷 사업이 마진이 적은 장비 사업을 도울 방안이라고 생각했습니다. 그래서 1972년에 스코트랜드에서 수입한 폴리우레탄 비옷과 비박용 커버, 오스트리아에서 주문한 울 장갑과 벙어리 장갑, 볼더에서 손으로 짠 모자를 팔았습니다. <br><br>  옷 사업이 번창하면서 의류 부분에 붙일 새 이름이 필요했습니다. “쉬나드”를 사용하지 않은 이유는 무엇일까요? 쉬나드는 이미 좋은 이미지를 얻고 있었습니다. 하지만 두 가지 이유 때문에 “쉬나드”라는 이름을 반대했습니다. 첫째, 옷 때문에 쉬나드라는 브랜드가 가진 장비 회사의 이미지를 흩어지게 하고 싶지 않았습니다. 두 번째, 우리 옷을 등반에 한정짓고 싶지 않았습니다.<br><br>  그 당시 사람들은 파타고니아를 팀부쿠나 샹그릴라처럼 지도에 없는 멀고 아름다운 곳이라고 생각했습니다. 파타고니아를 “빙하가 지나가며 남긴 아름다운 풍경, 봉우리마다 바람이 울부짖는 곳, 카우초와 콘돌이 사는 곳”이라고 카달로그에 소개한 적이 있었습니다. 파타고니아는 우리에게 어울리는 이름이었고, 전 세계 언어로 모두 발음할 수 있었습니다.");
		});

	});