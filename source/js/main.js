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

	$('.feedbacks__reply').click(function() {
		$('.feedbacks__reply-content').toggle('feedbacks__reply-content--show');
	});
});