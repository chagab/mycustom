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
});
//fonction pour la proposition des textiles lors d'un appuit sur un logo
function propositionTextile(logo) {
	$(logo.parentElement.parentElement.parentElement).fadeOut(0);
	$(logo.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400);
}
//fonction pour revenir de la proposition des textiles
function revenir(button) {
	$(button.parentElement.parentElement.parentElement).fadeOut(0);
	$(button.parentElement.parentElement.parentElement.previousElementSibling).fadeIn(400);
}

function loadingLogo(elt) {
	console.log('done');
}

function montrerProduit(produit) {
	$(produit).closest('.produit').fadeOut(0);
	$(produit).closest('.produitDetail').fadeIn(400);
	console.log($(produit).closest('.produitDetail'));
	console.log($(produit).closest('.produit'));
	//$(produit.parentElement.parentElement.parentElement.parentElement).fadeOut(0);
	//$(produit.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling).fadeIn(400);
}
//# sourceMappingURL=gestionModal-compiled.js.map
