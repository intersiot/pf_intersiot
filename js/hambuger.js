const hambuger = document.querySelector(".hambuger");
const visualPosition = $(".visual").position();
const aboutPosition = $(".about").position();
const workPosition = $(".work").position();
const contactPosition = $("footer").position();
// offset()의 경우 스크롤의 위치에 따라 절대값이 변하기 때문에
// 상대좌표인 position()을 사용하는게 더 나은 거 같다.

$(document).ready(function() {
  // drawer menu click: auto scroll
  $(".dmenu:first-child").click(function() {
      $("body, html").stop().animate({
          scrollTop: visualPosition.top
      }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });

  $(".dmenu:nth-child(2)").click(function() {
        $("body, html").stop().animate({
            scrollTop: aboutPosition.top
        }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });

  $(".dmenu:nth-child(3)").click(function() {
        $("body, html").stop().animate({
            scrollTop: workPosition.top
        }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });

  $(".dmenu:nth-child(4)").click(function() {
        $("body, html").stop().animate({
            scrollTop: contactPosition.top
        }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });
});

// hambuger bar animation
function hambugerAni(){
  $(".hambuger .bar").eq(0).toggleClass("slash");
  $(".hambuger .bar").eq(1).toggleClass("hidden");
  $(".hambuger .bar").eq(2).toggleClass("backslash");
}

// hambuger click event
function huambugerClick() {
  if ($(".hambuger .bar").eq(0).hasClass("slash")) {
    $(".bg-wrap").fadeOut(500);
  } else {
    $(".bg-wrap").fadeIn(500);
  }
  $(".drawer").toggleClass("drawer-on");
  hambugerAni();
}

function init() {
  // 햄버거 메뉴 클릭 이벤트
  hambuger.addEventListener("click", huambugerClick);
}

init()