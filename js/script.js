window.addEventListener("resize", function() {
	// scaleChange();
	// featuredRes();
})

function scaleChange() {
	var hp = 914
	var wp = 1370
	var h = document.documentElement.clientHeight
	var w = document.documentElement.clientWidth
	wp = w
	hp = (wp/1370)*914
	if (h > hp) {
		hp = h
		wp = (hp/914)*1370
	}
	else {
		hp = h
	}
	head.width = w
	head.height = h
}

function featuredRes() {
	var w = document.documentElement.clientWidth;
	if (w > 1350) {
		w = 1350
	} else if (w < 992) {
		w = 900
	}
	var h = w/4;
	if (w < 992) {
		w /= 2;
		h /= 2;
		mainWork.style.width = w+"px";
		secWork.style.width = (w/2)+"px";
		secWork.style.left = "0";
		trdWork.style.width = (w/2)+"px";
		mainWork.style.height = h*2+"px";
		secWork.style.height = h*2+"px";
		trdWork.style.height = h*2+"px";
		fe.style.height = h*4+"px";
		worksId.style.height = h*4+"px";
		worksId.style.width = w+"px";
		worksId.style.position = "relative"
	}
	else {
		mainWork.style.width = (w/2)+"px";
		secWork.style.width = (w/4)+"px";
		secWork.style.left = "50%";
		trdWork.style.width = (w/4)+"px";
		mainWork.style.height = h+"px";
		secWork.style.height = h+"px";
		trdWork.style.height = h+"px";
		fe.style.height = h+"px";
		worksId.style.height = h+"px";
		worksId.style.width = w+"px";
		worksId.style.position = "absolute"
	}
	var ff = document.getElementsByClassName("fold-footer")[0]
	ff.style.width = w+"px"
}

// scaleChange();
// featuredRes();

//переключение featured
function featuredProjectsPicts() {
	mainWorkRoll.style.left = "0%"
	secWorkRoll.style.left = "0%"
	trdWorkRoll.style.left = "0%"
	function moveMain() {
		var a = mainWorkRoll.style.left;	
		if (a == "0%") {
			mainWorkRoll.style.left = "-100%"
		} else if (a == "-100%") {
			mainWorkRoll.style.left = "-200%"
		} else {
			mainWorkRoll.style.left = "0%"
		}
	}
	function moveSec() {
		var b = secWorkRoll.style.left;
		if (b == "0%") {
			secWorkRoll.style.left = "-100%"
		} else {
			secWorkRoll.style.left = "0%"
		}
	}
	function moveTrd() {
		var c = trdWorkRoll.style.left;
		if (c == "0%") {
			trdWorkRoll.style.left = "-100%"
		} else {
			trdWorkRoll.style.left = "0%"
		}
	}
	moveMain();
	setInterval(function() {
		moveMain();
	},6000)
	setTimeout(function(){
		moveSec();
		setInterval(function(){
			moveSec();
		},6000)
	}, 2000)
	setTimeout(function(){
		moveTrd();
		setInterval(function(){
			moveTrd();
		},6000)
	}, 4000)
}

var target = $('#worksId');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if (!parseInt(target.attr("working"))) {
    	target.attr("working", "1")
    	featuredProjectsPicts();
    }
  }
});



//анимация процентов
// setTimeout(function() {
// 	var i = 628,
// 	t = 500,
// 	proc = 80,
// 	j = ((i/100)*(100-proc)).toFixed(0),
// 	x = t/(i-j);

// 	var timerId = setInterval(function() {
// 		go()
// 		if (i < j) {
// 			clearTimeout(timerId);
// 		}
// 	}, x)

// 	function go() {
// 		i-=2.5
// 		cOne.setAttribute("stroke-dashoffset", "-"+i)
// 	}
// }, 200)


//dau-icons
// $(document).ready(function(){
// 	$('.dau-icons .icons .icon:not(.active)').click(function(){

// 		alert(this.className)
// 	});
// });


//плавный скроллинг по якорям
$(document).ready(function(){
	$(".scrolling").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
});

// var target = $('.elem');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//     //сработает когда пользователь доскроллит к элементу с классом .elem
//   }
// });

alert(window.innerWidth);