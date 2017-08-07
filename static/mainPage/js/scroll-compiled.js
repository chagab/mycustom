'use strict';

$(function () {
	function scrollToAnchor(idButton, idAnchor) {
		$(idButton).click(function () {
			if (idAnchor == '#haut') {
				$('html, body').animate({
					scrollTop: $(idAnchor).offset().top - 60
				}, 800, "swing");
			} else if (idAnchor == '#collection_ephemere') {
				$('html, body').animate({
					scrollTop: $(idAnchor).offset().top + 50
				}, 800, "swing");
			} else {
				$('html, body').animate({
					scrollTop: $(idAnchor).offset().top + 65
				}, 800, "swing");
			}
		});
	}
	scrollToAnchor('#logo-menu-contenair', '#haut');
	scrollToAnchor('#Accueil', '#haut');
	scrollToAnchor("#logo", "#collection_ephemere");
	scrollToAnchor("#downArrow", "#collection_ephemere");
	scrollToAnchor("#presentation", "#collection_ephemere");
	scrollToAnchor('#Collection', '#collection_ephemere');
	scrollToAnchor('#Vendre', '#vendre');
	scrollToAnchor('#Achetez', '#achat');
	scrollToAnchor('#Customizez', '#customize');
});
//# sourceMappingURL=scroll-compiled.js.map
