'use strict';

$(function () {
	var input = "";
	$('a[href="#search"]').on('click', function (event) {
		event.preventDefault();
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus().on('click keyup', function (e) {
			input = $(this).val();
			console.log(input);
			if (e.keyCode == 13) {
				// Do something
				var __URL__ = 'achat/search/' + input + '/';
				$.get(__URL__, function (data) {
					console.log(data);
				});
			}
		});
	});
	$('#search, #search button.close').on('click keyup', function (event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});
});
//# sourceMappingURL=search-compiled.js.map
