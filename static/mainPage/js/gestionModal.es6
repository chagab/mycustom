/* gestion des modals de la partie customiser  */
$(function() {
	let produitImage = $('.produitImage');
	let produit = $('.produit');
	let gauche = $('.gauche');
	let droite = $('.droite');
	let logo = $(".logo");
	let fermer = $('.fermer');
	let fermerLogo = $(".fermerLogo");
	for (let i = 0; i < produitImage.length - 1; i++) {
		$(produitImage[i]).click(function() {
			produit.fadeOut(0);
			$(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400);
		});
	}
	for (let i = 0; i < fermer.length; i++) {
		$(fermer[i]).click(function() {
			$(this.parentElement).fadeOut(0);
			produit.fadeIn(400);
		});
	}
	for (let i = 0; i < gauche.length; i++) {
		$(gauche[i]).click(function() {
			let elt = $(this.parentElement.previousElementSibling.children)[0];
			$(elt).fadeTo(100, 0, () => {
				elt.src = this.src;
				$(elt).fadeTo(100, 1);
			});
		});
	}
	//proposition des textiles lors d'un appuit sur un logo
	for (let i = 0; i < logo.length; i++) {
		$(logo[i]).click(function() {
			let toFadeOut = $(this.parentElement.parentElement);
			let toFadeIn = $(this.parentElement.parentElement.nextElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);
		});
	}
	for (let i = 0; i < fermerLogo.length; i++) {
		$(fermerLogo[i]).click(function() {
			let toFadeOut = $(this.parentElement.parentElement.parentElement);
			let toFadeIn = $(this.parentElement.parentElement.parentElement.previousElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);

		});
	}
});
