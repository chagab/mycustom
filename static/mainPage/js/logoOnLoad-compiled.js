'use strict';

$(function () {
	var logo = [];
	var produit = [];
	logoData = logoData.split('\n');
	produitData = produitData.split('\n');
	//create an array of object containing the info for the logo
	logoData.forEach(function (e) {
		var logoContent = e.split(':');
		var logoObject = {
			categorie: logoContent[0],
			url: logoContent[1],
			ok: logoContent[2],
			taille: logoContent[3],
			colonnes: logoContent[4],
			offset: logoContent[5]
		};
		logo.push(logoObject);
	});
	//create an array of object containing the info for the produit
	produitData.forEach(function (e) {
		var produitContent = e.split(':');
		var produitObject = {
			nom: produitContent[0],
			categorie: produitContent[1],
			ok: produitContent[2],
			taille: produitContent[3],
			colonnes: produitContent[4],
			offset: produitContent[5],
			type_contour: produitContent[6],
			epaisseur_contour: produitContent[7],
			couleur_contour: produitContent[8],
			contour_arrondi: produitContent[9],
			couleur_text: produitContent[10],
			couleur_fond: produitContent[11],
			couleur_fond_image: produitContent[12],
			contour_arrondi_image: produitContent[13],
			prix: produitContent[14],
			text_description_short: produitContent[15],
			face_styleURL: produitContent[16]
		};
		produit.push(produitObject);
	});

	$('.categorie_achat').each(function () {
		var _this = this;

		var thisLogo = [];
		logo.forEach(function (e) {
			if (e.categorie == $(_this).attr('name')) thisLogo.push(e);
		});
		$(this).one("click", function () {
			var _this2 = this;

			thisLogo.forEach(function (e) {
				var propositionLogo = _this2.nextElementSibling.children[0].children[0].children[0].nextElementSibling.children[0].children[0];
				$(propositionLogo).append('\n\t\t\t\t\t<div class="gal-item col-' + e.taille + '-' + e.colonnes + ' col-' + e.taille + '-offset-' + e.offset + ' logo animation_ease-slow" style="height: 250px;">\n\t\t\t\t\t\t<img src="' + e.url + '" style="width: 100% ;height: auto; cursor: pointer;" onclick="propositionTextile(this)" onload="loadingLogo(this)">\n\t\t\t\t\t</div>\n\t\t\t\t');
			});
		});
	});

	$('.categorie').each(function () {
		var _this3 = this;

		var thisProduit = [];
		produit.forEach(function (e) {
			if (e.categorie == $(_this3).attr('name')) thisProduit.push(e);
		});
		$(this).one("click", function () {
			var _this4 = this;

			thisProduit.forEach(function (e) {
				var proposition = _this4.nextElementSibling.children[0].children[0].children[0].nextElementSibling;
				$(proposition).append('\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass="produit animation_ease col-' + e.taille + '-offset-' + e.offset + ' col-' + e.taille + '-' + e.colonnes + '"\n\t\t\t\t\t\tstyle="display:block;border:' + e.type_contour + ' ' + e.epaisseur_contour + 'px ' + e.couleur_contour + ';border-radius:' + e.contour_arrondi + 'px;color:' + e.couleur_text + ';background-color:' + e.couleur_fond + '">\n\t\t\t\t\t\t\t<center>\n\t\t\t\t\t\t\t\t<h3 class="myfont">' + e.nom + '</h3>\n\t\t\t\t\t\t\t\t<div class="text-center">\n\t\t\t\t\t\t\t\t\t<a type="button" style="cursor: pointer;">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\tclass="resize_width adjust_height produitImage"\n\t\t\t\t\t\t\t\t\t\t\tstyle="background-color: ' + e.couleur_fond_image + ';border-radius:' + e.contour_arrondi_image + 'px;"\n\t\t\t\t\t\t\t\t\t\t\tsrc="' + e.face_styleURL + '"\n\t\t\t\t\t\t\t\t\t\t\tonclick="montrerProduit(this)">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<p class="myfont">' + e.prix + '\u20AC</p>\n\t\t\t\t\t\t\t<p class="myfont">' + e.text_description_short + '</p>\n\t\t\t\t\t\t</center>\n\t\t\t\t\t</div>\n\t\t\t\t');
			});
		});
	});
});
//# sourceMappingURL=logoOnLoad-compiled.js.map
