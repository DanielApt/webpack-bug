// call our fancy fade out plug-in
require('./fancy-fade-out');

module.exports = function () {
	$('#component-1').click(function () {
		$(this).fancyFadeOut();
	});
}