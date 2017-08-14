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

$(function() {
	//path to the needed images
	const staticBackURL = "/static/mainPage/image/icons8-Back-26.png";
	const staticLogoURL = "/static/mainPage/image/logo%20my%20custom%20by%20NF%20blanc.png";
	const errorMessage = "<p>Sorry, something went wrong...</p>";
	const csrftoken = getCookie('csrftoken');
	//function to generate the crsf
	function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie != '') {
			let cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				const cookie = jQuery.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
						break;
				}
			}
		}
		return cookieValue;
	}

	function csrfSafeMethod(method) {
	    // these HTTP methods do not require CSRF protection
	    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}

	function sameOrigin(url) {
	    // test that a given url is a same-origin URL
	    // url could be relative or scheme relative or absolute
	    const host = document.location.host; // host + port
	    const protocol = document.location.protocol;
	    const sr_origin = '//' + host;
	    const origin = protocol + sr_origin;
	    // Allow absolute or scheme relative URLs to same origin
	    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
	        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
	        // or any other URL that isn't scheme relative or absolute i.e relative.
	        !(/^(\/\/|http:|https:).*/.test(url));
	}

	function presentationTextil(location, e){
		location.append(`<div class="produit animation_ease col-${e.taille}-offset-${e.nombre_offset} col-${e.taille}-${e.nombre_colonnes}"
					 style="display:block;border:${e.type_contour} ${e.epaisseur_contour}px ${e.couleur_contour};border-radius:${e.contour_arrondi}px;color:${e.couleur_text};background-color:${e.couleur_fond}">
					 <center>
							<h3 class="myfont">${e.nom}</h3>
							<div class="text-center">
								<a type="button" style="cursor: pointer;">
									<img class="resize_width adjust_height produitImage" id="${e.nom}" style="background-color: ${e.couleur_fond_image};border-radius:${e.contour_arrondi_image}px;" src="media/${e.face_style}">
								</a>
							</div>
							<br>
							<br>
							<p class="myfont">${e.prix}€</p>
							<p class="myfont">${e.text_description_short}</p>
						</center>
				</div>
				<div class="produitDetail" style="display: none;">
						<p class="myfont-lg">${e.text_description_short} : ${e.prix}€</p>
						<div class="col-xs-10" style="border: solid 1px gray; border-radius: 10px 0 0 10px;">
							<img class="produitImage droite" style="height :400px; width: auto;background-color: ${e.couleur_fond_image};" src="media/${e.face_style}">
						</div>
						<div class="col-xs-2" style="border: solid 1px gray; border-radius:0 10px 10px 0;">
							<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ${e.couleur_fond_image};" src="media/${e.face_style}"><br>
							<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ${e.couleur_fond_image};" src="media/${e.dos_style}"><br>
							<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ${e.couleur_fond_image};" src="media/${e.gauche_style}"><br>
							<img class="produitImage droite" style=" height: 100px; width: auto;background-color: ${e.couleur_fond_image};" src="media/${e.droite_style}"><br>
						</div>
						<button class="fermer" style="margin-top: 10px;"><img style="height: 40px; width: auto;" src=${staticBackURL}></button>
						<a href="TshirtDesigner/designer/${e.num}" style="margin-top: 10px;">
							<button>Customier !
								<img style="height: 40px; width: auto;" src=${staticLogoURL}></button>
						</a>
					</div>`
				);
				$('.droite').each(function(){
					$(this).click(function(){
						let elt = $(this.parentElement.previousElementSibling.children)[0];
						$(elt).fadeTo(100, 0, () => {
							elt.src = this.src;
							$(elt).fadeTo(100, 1);
						});
					});
				});
				$('.fermer').each(function(){
					$(this).click(function() {
						$(this.parentElement).fadeOut(0);
						$('.produit').fadeIn(400);
					});
				});
				$(`#${e.nom}`).click(function(){
					$('.produit').fadeOut(0);
					$(this).closest('.produit').next().fadeIn(400);
				});
			}



	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
				// Send the token to same-origin, relative URLs only.
				// Send the token only if the method warrants CSRF protection
				// Using the CSRFToken value acquired earlier
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});

$('.categorie_achat').each(function(){
	$(this).one("click",function(){
		const categorie = $(this).attr('name');
		const __URL__ = `achat/addLogo/${categorie}/`;
		const modalBody = this.nextElementSibling.children[0].children[0].children[0].nextElementSibling.children[0].children[0];
		$.get(__URL__, {'csrfmiddlewaretoken' : csrftoken, type : "POST" }, data => {
			JSON.parse(data).forEach(elt => {
				const e = elt.fields;
				const __HTML__ = `
						<div class="gal-item col-${e.taille}-${e.nombre_colonnes} col-${e.taille}-offset-${e.nombre_offset} logo animation_ease-slow" style="height: 250px;">
							<img src="media/${e.logo}" style="width: 100% ;height: auto; cursor: pointer;" onclick="propositionTextile(this)">
						</div>
					`;
				$(modalBody).append(__HTML__);
			});
		})
		.fail(() => {
			modalBody.append(errorMessage);
		});
	});
});

	$('.categorie').each(function() {
		$(this).one("click", function() {
			const modalBody = $(this.nextElementSibling.children[0].children[0].children[0].nextElementSibling);
			const attr = $(this).attr('id');
			const type = attr.split("_")[0];
			const id = attr.split("_")[1];
			const __URL__ = (type => {
				if(type == "categorie") return `achat/addTextilCategorie/${id}/`;
				else if(type == "produit") return `achat/addTextilProduit/${id}/`;
			})(type);

			$.get(__URL__, {'csrfmiddlewaretoken' : csrftoken, type : "POST" }, data => {
				JSON.parse(data).forEach(elt => {
					const e = elt.fields;
					presentationTextil(modalBody, e);
				});
			})
			.fail(() => {
				modalBody.append(errorMessage);
			});
		});
	});
});
