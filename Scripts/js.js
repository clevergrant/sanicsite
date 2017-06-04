$(function(){
	$("#aladdin").click(function(){
		moveTails();
		moveRight();
	});

	$("h1").click(function(){
		$(this).animate({ letterSpacing : "+=55px" }, 4000);
		$("#aladdin").click();
	});
});

function moveRight(callback)
{
	$("#jasmine").animate({ left : "+=1000px" }, 80);
	moveLeft();
	callback();
}

function moveLeft(callback)
{
	$("#jasmine").animate({ left : "-=1000px"}, 80);
	moveRight();
	callback();
}

function moveTails() {
	$("#aladdin").animate({ left : "+=4000px"  }, 8000, "linear");
	moveTailsBack();
}

function moveTailsBack() {
	$("#aladdin").animate({ left : "-300px"  }, 1);
	moveTails();
}