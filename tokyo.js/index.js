$(function(){

  //グローバルナビゲーション
  $(".btn-gnavi").on("click", function(){
      var rightVal = 0;
      if($(this).hasClass("open")) {
          rightVal = -300;
          $(this).removeClass("open");
      }
      else {
          $(this).addClass("open");
      }
      $(".menu-gnavi").stop().animate({
          right: rightVal
      }, 300);
  });


// スライダー
var imgList = [
  "tokyo.images/slider/img01.jpg",
  "tokyo.images/slider/img02.jpg",
  "tokyo.images/slider/img03.jpg",
  "tokyo.images/slider/img04.jpg",
  "tokyo.images/slider/img05.jpg"
];

for(var i = 0; i < imgList.length; i++) {
  var slide = document.createElement("li");
  slide.innerHTML = "<img src='" + imgList[i] + "'>";
  document.getElementsByClassName("slider-inner")[0].appendChild(slide);
  var nav = document.createElement("li");
  nav.setAttribute("data-nav-index", i);
  nav.style.backgroundImage = "url(" + imgList[i] + ")";
  nav.style.width = 100 / imgList.length + "%";
  document.getElementsByClassName("nav")[0].appendChild(nav);
}
var length = imgList.length - 1;
var slider = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
var nav = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
var nowIndex = 0;
var isChanging = false;
var slideTimer;
slider[nowIndex].classList.add("show");
nav[nowIndex].classList.add("current");

function sliderSlide(val) {
  if(isChanging) return false;
  isChanging = true;
  slider[nowIndex].classList.remove("show");
  nav[nowIndex].classList.remove("current");
  nowIndex = val;
  slider[nowIndex].classList.add("show");
  nav[nowIndex].classList.add("current");
  slideTimer = setTimeout(function(){
    isChanging = false;
  }, 600);
}
document.getElementById("arrow-prev").addEventListener("click", function(){
  var index = nowIndex - 1;
  if(index < 0) index = length;
  sliderSlide(index);
}, false);
document.getElementById("arrow-next").addEventListener("click", function(){
  var index = nowIndex + 1;
  if(index > length) index = 0;
  sliderSlide(index);
}, false);

for(var i = 0; i < nav.length; i++) {
  nav[i].onclick = function(){
    var index = Number(this.getAttribute("data-nav-index"));
    sliderSlide(index);
  };
}

  //ポップアップ用colorbox
  $(".popup").colorbox({
      fixed: true,
      iframe: true,
      //innerWidth: 640,
     //innerHeight: 359
      maxWidth: "90%",
  });
  
  
  //bigVideo
  var BV = new $.BigVideo();
  BV.init();
  BV.show('tOKYO/tokyo.images/tokyowan.asx',{ambient:true});
  
  //テキストアニメ
$("h1").textillate({
  loop: true,
  in: {
    effect: 'fadeInDown',
    delay: 50,
    shuffle: true
  },

  out: {
    effect: 'flash',
    delayScale: 1.5,
    delay: 50
  }
});

//フェイドイン　ふわっと出てくる １（これも必要）
$('.area').fadeInElements();

});
//２　fadeIn※jQuery。
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

// titleを1文字ずつ出す
const CLASSNAME = "-visible";
const TIMEOUT = 7000;
const $target = $(".title");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT* 2);

// 読み込み画面
var bar=$('#progress_bar');
var percentage=parseInt($('#progress_percentage').html());

function stopProgress(){
  clearInterval(progress);
}

var progress= setInterval(function(){
  percentage++;
  if (percentage<=100){
    $('#progress_percentage').html(percentage+'%');
    if (percentage>10) {
      bar.css('width',percentage+'%');
      console.log(percentage);
    }
  }
  else {
    stopProgress()
  }
},250);

setTimeout(function(){
  document.getElementById("loader_container").classList.remove("active")
},5000)


//23秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',23000);
});
  
function stopload(){
  // $('#wrap').css('display','block');
  $('#loader_container').delay(1000).fadeOut(800);
  $('#bar_container').delay(600).fadeOut(300);
}







