const btnTop = document.querySelector(".btn-top");

function btnTopClick() {
  $("body, html").stop().animate({
    scrollTop: 0	
  }, 1000);
}

function init() {
  // btn Top 클릭 이벤트
  btnTop.addEventListener("click", btnTopClick);
}

init()