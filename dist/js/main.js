$(function(){
	$('.slider__inner').slick({
		nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
		slidesToShow: 1,
		dots: true,
	});
	$('.slick__btn').removeAttr("style"),
	$(".about__drop-tittle").click(function(){
		if($('.about__drop-text').css('display')=='none') {
			$('.about__drop-tittle').addClass("drop__tittle-active")
		}
		else{
			$('.about__drop-tittle').removeClass("drop__tittle-active")
		}
        $(".about__drop-text").slideToggle("slow");
        return false;
    });
    $(".about__drop-tittle1").click(function(){
    	if($('.about__drop-text1').css('display')=='none') {
			$('.about__drop-tittle1').addClass("drop__tittle-active")
		}
		else{
			$('.about__drop-tittle1').removeClass("drop__tittle-active")
		}
        $(".about__drop-text1").slideToggle("slow");
        return false;
    });
    $(".about__drop-tittle2").click(function(){
    	if($('.about__drop-text2').css('display')=='none') {
			$('.about__drop-tittle2').addClass("drop__tittle-active")
		}
		else{
			$('.about__drop-tittle2').removeClass("drop__tittle-active")
		}
        $(".about__drop-text2").slideToggle("slow");
        return false;
    });
});
$(function() {
    $("div.about__img").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
    });
});
$(function() {
	$('.clients__slider').slick({
		nextArrow: false,
		prevArrow: false,
		dots: true
	});
});
$('.team__items').hover(function(){ 
		$(this).css('cursor', 'pointer')	
	    $(this).find('.hover__social').css({
	    	'display':'flex'
	    }) 
	    $(this).css({
			'border':'1px solid #000'
		})
		$(this).find('.team__name').css({
			'color':'#ff0033'
		})
	}, function(){
	    	$('.hover__social').css({
	    	'display':'none'
	    })
	    $(this).css({
			'border':'1px solid #e7e7e7'
		})
		$(this).find('.team__name').css({
			'color':'#262626'
		})
});
$('.service').hover(function() {
		$(this).find('.hover_hex').css('background', '#ff0036')
		$(this).find('.service__text').css({
			'background':'#3d2329',
			'color':'#fff'
		})
		// $(this).css('color','#fff')
	},   function () {
		$(this).find('.hover_hex').css('background', '#a4a4a4')
		$(this).find('.service__text').css({
			'background':'#343434',
			'color':'#a4a4a4'
		})
});
