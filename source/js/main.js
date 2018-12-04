$(function() {
	var ifClick = false;

	$('.feedback__rate').mouseover(function () { 
		$(this).addClass('feedback__rate--active').prevAll().addClass('feedback__rate--active');
	});

	$('.feedback__rate').mouseout(function () { 
		if(!ifClick) {
			$(this).removeClass('feedback__rate--active').prevAll().removeClass('feedback__rate--active');
		}
	});

	$('.feedback__rate').click(function () {
		ifClick = true;
		$(this).addClass('feedback__rate--active').prevAll().addClass('feedback__rate--active');
		if ( $(this).next() ) {
			$(this).nextAll().removeClass('feedback__rate--active');
		}
	});

	$('.feedbacks__reply').click(function(target) {
		$('.feedbacks__reply-content').not( $('.feedbacks__reply-content', target.currentTarget.offsetParent) ).css('display', 'none');
		$('.feedbacks__reply-content', target.currentTarget.offsetParent).toggle('.feedbacks__reply-content--show');
		$('html, body').animate({ scrollTop: $('.feedbacks__reply-content', target.currentTarget.offsetParent).offset().top }, 500);
	});

	$('.feedbacks__replies').mouseover(function() {
		if ( !$(this).hasClass('feedbacks__replies--full') ) {
			$(this).addClass('feedbacks__wrapper--hover');
		}
		
	});

	$('.feedbacks__replies').mouseout(function() {
		if ( !$(this).hasClass('feedbacks__replies--full') ) {
			$(this).removeClass('feedbacks__wrapper--hover');
		}
	});

	$('.feedbacks__replies').click(function() {
			$(this).addClass('feedbacks__replies--full');
			$(this).addClass('feedbacks__replies--full');
	});
});