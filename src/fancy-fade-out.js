(function ($) {
	$.fn.fancyFadeOut = function () {
		this.animate({marginLeft: '200'}, 2000)
			.fadeOut();
	}
}(jQuery));