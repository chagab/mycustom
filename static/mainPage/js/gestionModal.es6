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
});
//fonction pour la proposition des textiles lors d'un appuit sur un logo
function propositionTextile(logo){
	$(logo.parentElement.parentElement.parentElement).fadeOut(0);
	$(logo.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400);
}
//fonction pour revenir de la proposition des textiles
function revenir(button){
	$(button.parentElement.parentElement.parentElement).fadeOut(0);
	$(button.parentElement.parentElement.parentElement.previousElementSibling).fadeIn(400);
}

function loadingLogo(elt){
	console.log('done');
}

function montrerProduit(produit){
	$(produit).closest('.produit').fadeOut(0);
	$(produit).closest('.produitDetail').fadeIn(400);
	console.log($(produit).closest('.produitDetail'));
	console.log($(produit).closest('.produit'));
	//$(produit.parentElement.parentElement.parentElement.parentElement).fadeOut(0);
	//$(produit.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling).fadeIn(400);
}
