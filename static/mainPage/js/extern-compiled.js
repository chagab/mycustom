'use strict';

$(function () {
	/* vider les formulaires pour le rafraichissement */
	function resetForm($form) {
		$form.find('input:text, input:password, input:file, select, textarea').val('');
		$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
	}
	$(window).bind("beforeunload", function () {
		resetForm($('#inscription'));
	});
	/* ouvir les liens externs dans un nouvel onglet */
	$('a').attr('target', function () {
		if (this.host == location.host) return '_self';else return '_blank';
	});
});
//# sourceMappingURL=extern-compiled.js.map
