$(function() {
	jQuery.fn.commonAncestor = function() {
		var parents = [];
		var minlen = Infinity;
	
		$(this).each(function() {
			var curparents = $(this).parents();
			parents.push(curparents);
			minlen = Math.min(minlen, curparents.length);
		});
	
		for (var i in parents) {
			parents[i] = parents[i].slice(parents[i].length - minlen);
		}
	
		// Iterate until equality is found
		for (var i = 0; i < parents[0].length; i++) {
			var equal = true;
			for (var j in parents) {
				if (parents[j][i] != parents[0][i]) {
					equal = false;
					break;
				}
			}
			if (equal) return $(parents[0][i]);
		}
		return $([]);
	}

	var ifClick = false;
	var replySingle = $('.feedback__item .feedbacks__reply');

	replySingle.click(function() {
		console.log('111');
	});

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
		$('.feedbacks__reply-content', target.currentTarget.offsetParent).toggle('.feedbacks__reply-content--show');
	});

	$('.feedbacks__replies').mouseover(function() {
		if ( !$(this).hasClass('feedbacks__replies--full') ) {
			$(this).addClass('feedbacks__replies--hover');
		}
		
	});

	$('.feedbacks__replies').mouseout(function() {
		if ( !$(this).hasClass('feedbacks__replies--full') ) {
			$(this).removeClass('feedbacks__replies--hover');
		}
	});
});