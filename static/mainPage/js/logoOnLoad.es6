$(function() {
	let logo = [];
	let produit = [];
  logoData = logoData.split('\n');
	produitData = produitData.split('\n');
	//create an array of object containing the info for the logo
   logoData.forEach(function(e){
    const logoContent = e.split(':');
    const logoObject = {
      categorie : logoContent[0],
      url : logoContent[1],
			ok : logoContent[2],
			taille : logoContent[3],
			colonnes : logoContent[4],
			offset : logoContent[5],
    };
    logo.push(logoObject);
  });
	//create an array of object containing the info for the produit
	produitData.forEach(function(e){
		const produitContent = e.split(':');
		const produitObject = {
			nom : produitContent[0],
			categorie : produitContent[1],
			ok : produitContent[2],
			taille : produitContent[3],
			colonnes : produitContent[4],
			offset :  produitContent[5],
			type_contour :produitContent[6],
			epaisseur_contour :produitContent[7],
			couleur_contour :produitContent[8],
			contour_arrondi :produitContent[9],
			couleur_text :produitContent[10],
			couleur_fond :produitContent[11],
			couleur_fond_image :produitContent[12],
			contour_arrondi_image :produitContent[13],
			prix :produitContent[14],
			text_description_short : produitContent[15],
			face_styleURL : produitContent[16],
		}
		produit.push(produitObject);
	});

	$('.categorie_achat').each(function(){
		var thisLogo = [];
		logo.forEach(e => { if(e.categorie == $(this).attr('name')) thisLogo.push(e)});
		$(this).one("click",function(){
			thisLogo.forEach(e =>{
				const propositionLogo = this.nextElementSibling.children[0].children[0].children[0].nextElementSibling.children[0].children[0];
				$(propositionLogo).append(`
					<div class="gal-item col-${e.taille}-${e.colonnes} col-${e.taille}-offset-${e.offset} logo animation_ease-slow" style="height: 250px;">
						<img src="${e.url}" style="width: 100% ;height: auto; cursor: pointer;" onclick="propositionTextile(this)" onload="loadingLogo(this)">
					</div>
				`);
			});
		});
	});

	$('.categorie').each(function(){
		var thisProduit = [];
		produit.forEach(e => {if (e.categorie == $(this).attr('name')) thisProduit.push(e)});
		$(this).one("click",function(){
			thisProduit.forEach(e =>{
				const proposition = this.nextElementSibling.children[0].children[0].children[0].nextElementSibling;
				$(proposition).append(`
					<div
						class="produit animation_ease col-${e.taille}-offset-${e.offset} col-${e.taille}-${e.colonnes}"
						style="display:block;border:${e.type_contour} ${e.epaisseur_contour}px ${e.couleur_contour};border-radius:${e.contour_arrondi}px;color:${e.couleur_text};background-color:${e.couleur_fond}">
							<center>
								<h3 class="myfont">${e.nom}</h3>
								<div class="text-center">
									<a type="button" style="cursor: pointer;">
										<img
											class="resize_width adjust_height produitImage"
											style="background-color: ${e.couleur_fond_image};border-radius:${e.contour_arrondi_image}px;"
											src="${e.face_styleURL}"
											onclick="montrerProduit(this)">
									</a>
							</div>
							<br>
							<br>
							<p class="myfont">${e.prix}€</p>
							<p class="myfont">${e.text_description_short}</p>
						</center>
					</div>
					<div class="produitDetail" style="display: none;">
						<p class="myfont-lg">{{ element.text_description_short }}
							:
							{{ element.prix}}€</p>
						<div id="produitDroite" class="col-xs-10" style="border: solid 1px gray; border-radius: 10px 0 0 10px;">
							<img class="produitImage droite" style="height :400px; width: auto;
						background-color: {{ element.couleur_fond_image }};" src="{{ element.face_style.url }}">
						</div>
						<div class="col-xs-2" style="border: solid 1px gray; border-radius:0 10px 10px 0;">
							<img class="produitImage gauche" style=" height: 100px; width: auto;
						background-color: {{ element.couleur_fond_image }};" src="{{ element.face_style.url }}"><br>
							<img class="produitImage gauche" style=" height: 100px; width: auto;
						background-color: {{ element.couleur_fond_image }};" src="{{ element.dos_style.url }}"><br>
							<img class="produitImage gauche" style=" height: 100px; width: auto;
						background-color: {{ element.couleur_fond_image }};" src="{{ element.gauche_style.url }}"><br>
							<img class="produitImage gauche" style=" height: 100px; width: auto;
						background-color: {{ element.couleur_fond_image }};" src="{{ element.droite_style.url }}"><br>
						</div>
						<button class="fermer" style="margin-top: 10px;"><img style="height: 40px; width: auto;" src="{% static 'mainPage/image/icons8-Back-26.png' %}"></button>
						<a href="TshirtDesigner/designer/{{ element.num }}" style="margin-top: 10px;">
							<button>Customier !
								<img style="height: 40px; width: auto;" src="{% static 'mainPage/image/logo my custom by NF blanc.png' %}"></button>
						</a>
					</div>
				`);
			});
		});
	});
});
