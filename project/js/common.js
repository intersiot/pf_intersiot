const btnTop = document.querySelector(".btn-top");

$(document).ready(function () {
  $("header").load("header.html")
  $("footer").load("footer.html")
});

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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