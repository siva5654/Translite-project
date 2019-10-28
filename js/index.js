$(document).ready(function(){
	$('.navmenu >ul > li').hover(function(){
		$(this).toggleClass('open');
	});
		});

			$(window).scroll(function(){
			 if($(window).scrollTop() >300) { 
       			 $(".scrollbar").show();
  				3	  } 
  					  	else {
       				 $(".scrollbar").hide();
	  				  }
					})
  
	$('.scrollbar').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 500);
	    return false;
	});

	$('.go-menu').click(function(){
		$('.navmenu').addClass('ham-show');
		$('#overlay').addClass('openn');
	});

	$('.icon-cross11 ,#overlay').click(function(){
		$('.navmenu').removeClass('ham-show');
		$('#overlay').removeClass('openn');
	});


$('.navmenu >ul >li').click(function(){
		$('.download-drp' ,this).slideToggle("5000");
	});


	$('.icon-player').click(function(){
		$('.tl-video').addClass('video-active');
			$('#overlay').addClass('openn');
	});

	$('#overlay').click(function(){
		$('.tl-video').removeClass('video-active');
		$('#overlay').removeClass('openn');
	});






$(window).scroll(function() {
if ($(this).scrollTop() >200){  
    $('.tl-header').addClass("sticky");
    $('body').addClass("bdy-stky");
  }
  else{
    $('.tl-header').removeClass("sticky tl-smooth");
    $('body').removeClass("bdy-stky  tl-smooth"	);
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() >200){  
    $('.header').addClass("sticky");
    $('.headcount').addClass("bdy-stky1");
  }
  else{
    $('.header').removeClass("sticky");
    $('.headcount').removeClass("bdy-stky1");
  }
});