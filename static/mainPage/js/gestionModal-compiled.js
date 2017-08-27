"use strict";

/* gestion des modals de la partie customiser  */
$(function () {
	//path to the needed images
	var staticBackURL = "/static/mainPage/image/icons8-Back-26.png";
	var staticLogoURL = "/static/mainPage/image/logo%20my%20custom%20by%20NF%20blanc.png";
	var staticPlayLogoURL = "/static/mainPage/image/icons8-Circled Play Filled-50.png";
	var errorMessage = "<p>Sorry, something went wrong...</p>";
	var csrftoken = getCookie('csrftoken');
	var __DATA__ = {
		'csrfmiddlewaretoken': csrftoken,
		type: "POST"
	};
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
		// Allow absolute or scheme relative URLs to same origin or any other URL that isn't scheme relative or absolute i.e relative.
		return url == origin || url.slice(0, origin.length + 1) == origin + '/' || url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/' || !/^(\/\/|http:|https:).*/.test(url);
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
			var modalBody = $(this.nextElementSibling.children[0].children[0].children[0].nextElementSibling.children[0].children[0]);
			var categorie = $(this).attr('name');
			var __URL__ = "achat/addLogo/" + categorie + "/";
			$.get(__URL__, __DATA__, function (data) {
				JSON.parse(data).filter(function (elt) {
					return elt.fields.confirm;
				}).forEach(function (elt) {
					var e = elt.fields;
					modalBody.append("\n\t\t\t\t\t<div class=\"col-" + e.taille + "-" + e.nombre_colonnes + " col-" + e.taille + "-offset-" + e.nombre_offset + " logo animation_ease-slow\" style=\"height: 250px; vertical-align:middle; line-height: 250px;\">\n\t\t\t\t\t\t<img src=\"/media/" + e.logo + "\" id=\"logo_" + elt.pk + "\" style=\"max-width: 100%; max-height: 100%;\">\n\t\t\t\t\t</div>\n\t\t\t\t\t");
					$("#logo_" + elt.pk).one("click", function () {
						console.log('click');
						$(this.parentElement.parentElement).fadeOut(0);
						var __URL2__ = "achat/addTextil/";
						var type = "logo";
						$.get(__URL2__, __DATA__, function (data) {
							JSON.parse(data).filter(function (elt) {
								return elt.fields.confirm;
							}).forEach(function (elt) {
								presentationTextil(modalBody, elt, type);
							});
						}).fail(function () {
							modalBody.append(errorMessage);
						});
					});
				});
			}).fail(function () {
				modalBody.append(errorMessage);
			});
		});
	});

	$('.categorie').each(function () {
		//when the user click on a textile, we request the database the infos about all the matching textile
		//and append some html to the modal body. Hence, we want to do this only once !
		$(this).one("click", function () {
			var modalBody = $(this.nextElementSibling.children[0].children[0].children[0].nextElementSibling);
			var attr = $(this).attr('id');
			var type = attr.split("_")[0];
			var id = attr.split("_")[1];
			//redirect to the corresponding url to match ether categorie or produit textile
			var __URL__ = function (type) {
				if (type == "categorie") return "achat/addTextilCategorie/" + id + "/";else if (type == "produit") return "achat/addTextilProduit/" + id + "/";
			}(type);
			$.get(__URL__, __DATA__, function (data) {
				//on succes, show every element that we requested
				JSON.parse(data).filter(function (elt) {
					return elt.fields.confirm;
				}).forEach(function (elt) {
					presentationTextil(modalBody, elt, type);
				});
			}).fail(function () {
				//on fail, append a message error
				modalBody.append(errorMessage);
			});
		});
	});

	function presentationTextil(location, elt, type) {
		var e = elt.fields;
		//function that show up all the textil matching the user request (=> click on a categorie or produit)
		location.append("\n\t\t\t<div class=\"produit animation_ease col-" + e.taille + "-offset-" + e.nombre_offset + " col-" + e.taille + "-" + e.nombre_colonnes + "\" style=\"display:block;border:" + e.type_contour + " " + e.epaisseur_contour + "px " + e.couleur_contour + ";border-radius:" + e.contour_arrondi + "px;color:" + e.couleur_text + ";background-color:" + e.couleur_fond + "\">\n\t\t\t\t<center>\n\t\t\t\t\t<h3 class=\"myfont\">" + e.nom + "</h3>\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<a type=\"button\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t<img class=\"resize_width adjust_height produitImage\" id=\"produitImage_" + elt.pk + "_" + type + "\" style=\"background-color:" + e.couleur_fond_image + "; border-radius:" + e.contour_arrondi_image + "px;height:400px;width:auto;cursor:pointer;\" src=\"media/" + e.face_style + "\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br><br>\n\t\t\t\t\t<p class=\"myfont\">" + e.prix + "\u20AC</p>\n\t\t\t\t\t<p class=\"myfont\">" + e.text_description_short + "</p>\n\t\t\t\t</center>\n\t\t\t</div>\n\t\t");
		$("#produitImage_" + elt.pk + "_" + type).one("click", function (event) {
			//if this is the first titme the user click on a textil : we append the detail to the modal body
			//and hide all the other textiles
			presentationTextilDetail(elt, location, type);
			location.children('.produit').fadeOut(0);
			//then we attach an event for the next time the user might want to see any detail of this specific
			//textile
			$(this).click(function () {
				$('.produit').fadeOut(0);
				$("#produitDetail_" + elt.pk + "_" + type).fadeIn(0);
			});
		});
	}

	function presentationTextilDetail(elt, location, type) {
		var e = elt.fields;
		//function that show all the detail of one specific textile
		location.append("\n\t\t\t<div class=\"produitDetail\" id=\"produitDetail_" + elt.pk + "_" + type + "\">\n\t\t\t\t<p class=\"myfont-lg\">" + e.text_description_short + " : " + e.prix + "\u20AC</p>\n\t\t\t\t<div class=\"col-xs-10\" style=\"border: solid 1px gray; border-radius: 10px 0 0 10px;\">\n\t\t\t\t\t<img id=\"image_" + elt.pk + "_" + type + "\" class=\"produitImage droite\" style=\"height :600px; width: auto;background-color: " + e.couleur_fond_image + ";\" src=\"media/" + e.face_style + "\">\n\t\t\t\t\t<div style=\"padding : 100px 0 100px 0; display : none;overflow: scroll;\">\n\t\t\t\t\t\t<video controls poster=\"media/" + e.face_style + "\" height=\"395\" width=\"auto\">\n\t\t\t\t\t\t\t<source src=\"media/" + e.video_mp4 + "\">\n\t\t\t\t\t\t\t<source src=\"media/" + e.video_webm + "\">\n\t\t\t\t\t\t\tCette video n'est pas support\xE9e sur votre navigateur...\n\t\t\t\t\t\t</video>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-2\" style=\"border: solid 1px gray; border-radius:0 10px 10px 0;\">\n\t\t\t\t\t<div id=\"first_" + elt.pk + "_" + type + "\" class=\"produitImage droite\" style=\"background-color: " + e.couleur_fond_image + "; background-image: url('media/" + e.face_style + "')\" src=\"media/" + e.face_style + "\"></div>\n\t\t\t\t\t<div class=\"produitImage droite\" style=\"background-color: " + e.couleur_fond_image + "; background-image: url('media/" + e.dos_style + "')\" src=\"media/" + e.dos_style + "\"></div>\n\t\t\t\t\t<div class=\"produitImage droite\" style=\"background-color: " + e.couleur_fond_image + "; background-image: url('media/" + e.gauche_style + "')\" src=\"media/" + e.gauche_style + "\"></div>\n\t\t\t\t\t<div class=\"produitImage droite\" style=\"background-color: " + e.couleur_fond_image + "; background-image: url('media/" + e.droite_style + "')\" src=\"media/" + e.droite_style + "\"></div>\n\t\t\t\t\t<div class=\"produitImage droite video\" style=\"background-color: " + e.couleur_fond_image + "; background-image: url('media/" + e.face_style + "')\" src=\"media/" + e.face_style + "\"><img src=\"" + staticPlayLogoURL + "\" style=\"padding-top: 25px;\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<button class=\"fermer\" style=\"margin-top: 10px;\"><img style=\"height: 40px; width: auto;\" src=" + staticBackURL + "></button>\n\t\t\t\t\t<a href=\"TshirtDesigner/designer/" + e.num + "\" style=\"margin-top: 10px;\"><button>Customiser ! <img style=\"height: 40px; width: auto;\" src=" + staticLogoURL + "></button></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
		//we then attach some event to manage the user's click to go back to the proposition, change the cureent dislayed 
		//image, display the video
		$('.droite').each(function () {
			$(this).click(function () {
				var _this = this;

				var elt = $(this.parentElement.previousElementSibling.children)[0];
				var video = $(this.parentElement.previousElementSibling.children)[1];
				if ($(this).hasClass('video')) {
					$(elt).fadeOut(0);
					$(video).fadeIn(400);
				} else {
					$(elt).fadeTo(100, 0, function () {
						$(video).fadeOut(0);
						elt.src = _this.attributes.src.nodeValue;
						$(elt).fadeTo(100, 1);
					});
				}
			});
		});
		$('.fermer').each(function () {
			$(this).click(function () {
				var produitDetail = $(this.parentElement.parentElement);
				produitDetail.find('video').each(function () {
					this.pause();
					this.currentTime = 0;
					this.load();
					$(this.parentElement).fadeOut(0);
				});
				produitDetail.fadeOut(0);
				$('.produit').fadeIn(400);
				$("#image_" + elt.pk + "_" + type).fadeIn(0);
				$("#image_" + elt.pk + "_" + type)[0].src = $("#first_" + elt.pk + "_" + type)[0].attributes.src.value;
			});
		});
		$('.modal').each(function () {
			$(this).on('hidden.bs.modal', function () {
				$(this).find('video').each(function () {
					this.pause();
					this.currentTime = 0;
					this.load();
					$(this.parentElement).fadeOut(0);
				});
				$('.produitDetail').each(function () {
					$(this).fadeOut(0);
				});
				$('.produit').fadeIn(0);
				$("#image_" + elt.pk + "_" + type).fadeIn(0);
				$("#image_" + elt.pk + "_" + type)[0].src = $("#first_" + elt.pk + "_" + type)[0].attributes.src.value;
			});
		});
	}
});
//# sourceMappingURL=gestionModal-compiled.js.map
