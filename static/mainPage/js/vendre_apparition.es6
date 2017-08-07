$(function() {
	let icon_vendre = $('.icon_vendre').get();
	let j = 0;
	$('.icon_vendre').hide();
	console.log('debut');
	$('#Vendre').click(function() {
		console.log('click');
		icon_vendre[0].fadeIn('slow', function() {
			if (j <= icon_vendre.length) {
				console.log(j);
				icon_vendre[j + 1].fadeIn('slow');
				console.log('done');
			}
		});
	});
});
