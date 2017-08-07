$(function() {
	var logo = $('.logo');
	console.log(logo);
	var loaded = false;
	$('.logo')
	for (var i = 0; i < logo.length; i++) {
		logo[i].onload = function() {}
	}
});