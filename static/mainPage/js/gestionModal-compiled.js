'use strict';

/* gestion des modals de la partie customiser  */
$(function () {
	var produitImage = $('.produitImage');
	var produit = $('.produit');
	var gauche = $('.gauche');
	var droite = $('.droite');
	var logo = $(".logo");
	var fermer = $('.fermer');
	var fermerLogo = $(".fermerLogo");
	for (var i = 0; i < produitImage.length - 1; i++) {
		$(produitImage[i]).click(function () {
			produit.fadeOut(0);
			$(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400);
		});
	}
	for (var _i = 0; _i < fermer.length; _i++) {
		$(fermer[_i]).click(function () {
			$(this.parentElement).fadeOut(0);
			produit.fadeIn(400);
		});
	}
	for (var _i2 = 0; _i2 < gauche.length; _i2++) {
		$(gauche[_i2]).click(function () {
			var _this = this;

			var elt = $(this.parentElement.previousElementSibling.children)[0];
			$(elt).fadeTo(100, 0, function () {
				elt.src = _this.src;
				$(elt).fadeTo(100, 1);
			});
		});
	}
	//proposition des textiles lors d'un appuit sur un logo
	for (var _i3 = 0; _i3 < logo.length; _i3++) {
		$(logo[_i3]).click(function () {
			var toFadeOut = $(this.parentElement.parentElement);
			var toFadeIn = $(this.parentElement.parentElement.nextElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);
		});
	}
	for (var _i4 = 0; _i4 < fermerLogo.length; _i4++) {
		$(fermerLogo[_i4]).click(function () {
			var toFadeOut = $(this.parentElement.parentElement.parentElement);
			var toFadeIn = $(this.parentElement.parentElement.parentElement.previousElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);
		});
	}
});
//# sourceMappingURL=gestionModal-compiled.js.map
