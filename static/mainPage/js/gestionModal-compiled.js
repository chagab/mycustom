'use strict';

/* gestion des modals de la partie customiser  */

/*$(function() {
	let produitImage = $('.produitImage');
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
});*/

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

function montrerProduit(produit) {
	$('.produit').fadeOut(0);
	$(produit).closest('.produit').next().fadeIn(400);
}

$(function () {
	//path to the needed images
	var staticBackURL = "/static/mainPage/image/icons8-Back-26.png";
	var staticLogoURL = "/static/mainPage/image/logo%20my%20custom%20by%20NF%20blanc.png";
	var errorMessage = "<p>Sorry, something went wrong...</p>";
	var csrftoken = getCookie('csrftoken');
	//function to generate the crsf
	function getCookie(name) {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == name + '=') {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}

	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
		);
	}

	function sameOrigin(url) {
		// test that a given url is a same-origin URL
		// url could be relative or scheme relative or absolute
		var host = document.location.host; // host + port
		var protocol = document.location.protocol;
		var sr_origin = '//' + host;
		var origin = protocol + sr_origin;
		// Allow absolute or scheme relative URLs to same origin
		return url == origin || url.slice(0, origin.length + 1) == origin + '/' || url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/' ||
		// or any other URL that isn't scheme relative or absolute i.e relative.
		!/^(\/\/|http:|https:).*/.test(url);
	}

	function presentationTextil(location, e) {
		location.append('<div class="produit animation_ease col-' + e.taille + '-offset-' + e.nombre_offset + ' col-' + e.taille + '-' + e.nombre_colonnes + '"\n\t\t\t\t\t style="display:block;border:' + e.type_contour + ' ' + e.epaisseur_contour + 'px ' + e.couleur_contour + ';border-radius:' + e.contour_arrondi + 'px;color:' + e.couleur_text + ';background-color:' + e.couleur_fond + '">\n\t\t\t\t\t <center>\n\t\t\t\t\t\t\t<h3 class="myfont">' + e.nom + '</h3>\n\t\t\t\t\t\t\t<div class="text-center">\n\t\t\t\t\t\t\t\t<a type="button" style="cursor: pointer;">\n\t\t\t\t\t\t\t\t\t<img class="resize_width adjust_height produitImage" id="' + e.nom + '" style="background-color: ' + e.couleur_fond_image + ';border-radius:' + e.contour_arrondi_image + 'px;" src="media/' + e.face_style + '">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<p class="myfont">' + e.prix + '\u20AC</p>\n\t\t\t\t\t\t\t<p class="myfont">' + e.text_description_short + '</p>\n\t\t\t\t\t\t</center>\n\t\t\t\t</div>\n\t\t\t\t<div class="produitDetail" style="display: none;">\n\t\t\t\t\t\t<p class="myfont-lg">' + e.text_description_short + ' : ' + e.prix + '\u20AC</p>\n\t\t\t\t\t\t<div class="col-xs-10" style="border: solid 1px gray; border-radius: 10px 0 0 10px;">\n\t\t\t\t\t\t\t<img class="produitImage droite" style="height :400px; width: auto;background-color: ' + e.couleur_fond_image + ';" src="media/' + e.face_style + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-2" style="border: solid 1px gray; border-radius:0 10px 10px 0;">\n\t\t\t\t\t\t\t<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ' + e.couleur_fond_image + ';" src="media/' + e.face_style + '"><br>\n\t\t\t\t\t\t\t<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ' + e.couleur_fond_image + ';" src="media/' + e.dos_style + '"><br>\n\t\t\t\t\t\t\t<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ' + e.couleur_fond_image + ';" src="media/' + e.gauche_style + '"><br>\n\t\t\t\t\t\t\t<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ' + e.couleur_fond_image + ';" src="media/' + e.droite_style + '"><br>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class="fermer" style="margin-top: 10px;"><img style="height: 40px; width: auto;" src=' + staticBackURL + '></button>\n\t\t\t\t\t\t<a href="TshirtDesigner/designer/' + e.num + '" style="margin-top: 10px;">\n\t\t\t\t\t\t\t<button>Customier !\n\t\t\t\t\t\t\t\t<img style="height: 40px; width: auto;" src=' + staticLogoURL + '></button>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>');
		$('.droite').each(function () {
			$(this).click(function () {
				var _this = this;

				var elt = $(this.parentElement.previousElementSibling.children)[0];
				$(elt).fadeTo(100, 0, function () {
					elt.src = _this.src;
					$(elt).fadeTo(100, 1);
				});
			});
		});
		$('.fermer').each(function () {
			$(this).click(function () {
				$(this.parentElement).fadeOut(0);
				$('.produit').fadeIn(400);
			});
		});
		$('#' + e.nom).click(function () {
			$('.produit').fadeOut(0);
			$(this).closest('.produit').next().fadeIn(400);
		});
	}

	$.ajaxSetup({
		beforeSend: function beforeSend(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
				// Send the token to same-origin, relative URLs only.
				// Send the token only if the method warrants CSRF protection
				// Using the CSRFToken value acquired earlier
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});

	$('.categorie_achat').each(function () {
		$(this).one("click", function () {
			var categorie = $(this).attr('name');
			var __URL__ = 'achat/addLogo/' + categorie + '/';
			var modalBody = this.nextElementSibling.children[0].children[0].children[0].nextElementSibling.children[0].children[0];
			$.get(__URL__, { 'csrfmiddlewaretoken': csrftoken, type: "POST" }, function (data) {
				JSON.parse(data).forEach(function (elt) {
					var e = elt.fields;
					var __HTML__ = '\n\t\t\t\t\t\t<div class="gal-item col-' + e.taille + '-' + e.nombre_colonnes + ' col-' + e.taille + '-offset-' + e.nombre_offset + ' logo animation_ease-slow" style="height: 250px;">\n\t\t\t\t\t\t\t<img src="media/' + e.logo + '" style="width: 100% ;height: auto; cursor: pointer;" onclick="propositionTextile(this)">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
					$(modalBody).append(__HTML__);
				});
			}).fail(function () {
				modalBody.append(errorMessage);
			});
		});
	});

	$('.categorie').each(function () {
		$(this).one("click", function () {
			var modalBody = $(this.nextElementSibling.children[0].children[0].children[0].nextElementSibling);
			var attr = $(this).attr('id');
			var type = attr.split("_")[0];
			var id = attr.split("_")[1];
			var __URL__ = function (type) {
				if (type == "categorie") return 'achat/addTextilCategorie/' + id + '/';else if (type == "produit") return 'achat/addTextilProduit/' + id + '/';
			}(type);

			$.get(__URL__, { 'csrfmiddlewaretoken': csrftoken, type: "POST" }, function (data) {
				JSON.parse(data).forEach(function (elt) {
					var e = elt.fields;
					presentationTextil(modalBody, e);
				});
			}).fail(function () {
				modalBody.append(errorMessage);
			});
		});
	});
});
//# sourceMappingURL=gestionModal-compiled.js.map
