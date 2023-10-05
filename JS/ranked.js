function AccordionEvent(click){
  var ContentArea = document.querySelectorAll('.content_area');
  // 컨텐츠 아레아
  var AccordionBtn = document.querySelectorAll('.btn_accordion');
  // 아코디언 버튼
  var ArrowImg = document.querySelectorAll('.ArrowImg');
  // 아코디언 화살표 사진
  var i = 0;
      // 전체 통계
    if (click.attributes[1].value == AccordionBtn[0].attributes[1].value){
      if ($(ContentArea[0]).hasClass('act') === false){
        $(ContentArea[0]).css('height','50px').addClass('act');
        $(ArrowImg[0]).addClass('rotation');
        }else{
        $(ContentArea[0]).css('height','-50px').removeClass('act');
        $(ArrowImg[0]).removeClass('rotation');
        }
      }
      // 서버별 통계
    if (click.attributes[1].value == AccordionBtn[1].attributes[1].value){
      if ($(ContentArea[1]).hasClass('act') === false){
        $(ContentArea[1]).css('height','250px').addClass('act');
        $(ArrowImg[1]).addClass('rotation');
        }else{
        $(ContentArea[1]).css('height','-250px').removeClass('act');
        $(ArrowImg[1]).removeClass('rotation');
        }
      }
      // 직업별 통계
    if (click.attributes[1].value == AccordionBtn[2].attributes[1].value){
      if ($(ContentArea[2]).hasClass('act') === false){
        $(ContentArea[2]).css('height','800px').addClass('act');
        $(ArrowImg[2]).addClass('rotation');
        }else{
        $(ContentArea[2]).css('height','-50px').removeClass('act');
        $(ArrowImg[2]).removeClass('rotation');
        }
      }
      // else{
      //   $(click).parent(".accordion").children(".content_area").slideUp(500);
      //   $(ContentArea[i]).removeClass('act');
      //   ArrowImg[i].src='../Icon/downArrow.png'
      // }
    };