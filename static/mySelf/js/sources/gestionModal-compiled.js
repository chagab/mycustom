'use strict';

/* gestion des modals de la partie customiser  */
$(function () {
	var produitImage = $('.produitImage');
	var produit = $('.produit');
	var gauche = $('.gauche');
	var droite = $('.droite');
	var logo2 = $(".logo");
	var fermer = $('.fermer');
	var fermerLogo = $(".fermerLogo");
	for (var i = 0; i < produitImage.length - 1; i++) {
		$(produitImage[i]).click(function () {
			produit.fadeOut(0);
			$(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400);
		});
	}
	for (var i = 0; i < fermer.length; i++) {
		$(fermer[i]).click(function () {
			$(this.parentElement).fadeOut(0);
			produit.fadeIn(400);
		});
	}
	for (var i = 0; i < gauche.length; i++) {
		$(gauche[i]).click(function () {
			var _this = this;

			var elt = $(this.parentElement.previousElementSibling.children)[0];
			$(elt).fadeTo(100, 0, function () {
				elt.src = _this.src;
				$(elt).fadeTo(100, 1);
			});
		});
	}
	//proposition des textiles lors d'un appuit sur un logo
	for (var i = 0; i < logo2.length; i++) {
		$(logo2[i]).click(function () {
			var toFadeOut = $(this.parentElement.parentElement.parentElement.parentElement);
			var toFadeIn = $(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);
		});
	}
	for (var i = 0; i < fermerLogo.length; i++) {
		$(fermerLogo[i]).click(function () {
			var toFadeOut = $(this.parentElement.parentElement.parentElement);
			var toFadeIn = $(this.parentElement.parentElement.parentElement.previousElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);
		});
	}
});
//# sourceMappingURL=gestionModal-compiled.js.map
