$(function() {
	///////////////////////////////////////////////////
	//on déclare toues les variables dont on a besoin//
	///////////////////////////////////////////////////
	var yScroll;
	var collection_ephemere = $('#collection_ephemere');
	var customize = $('#customize');
	var achat = $('#achat');
	var vendre = $('#vendre');
	var photos = $('.zoom');
	var max = 8;
	var min = 0;
	var done = [true, true, true, true];
	var Window = $(window);
	var navbar = $('.navbar');
	var lien_menu = $('.navbar-default .navbar-nav > li > a');
	var alignement = $('.navbar .navbar-collapse ');
	var logo = $('#logo-menu-contenair');
	var top = Number(Window.height());
	var backColor = '#E1E1E1';
	var buttonsColor = '#808080';
	var Color = 'rgba(76, 76, 76, 1)'; //'rgba(255, 0, 0, 0.25)';
	var fontColor = 'white';
	var buttons = [$('#Collection'), $('#Customizez'), $('#Achetez'), $('#Vendre'), $('#Professionel'), ];
	var icon_vendre = $('.icon_vendre').get();
	var j = 0;
	var fermer = $('.fermer');
	var produitImage = $('.produitImage');
	var produitDetail = $('.produitDetail');
	var produit = $('.produit');
	var gauche = $('.gauche');
	var droite = $('.droite');
	var logo2 = $(".logo");
	var fermerLogo = $(".fermerLogo");
	//////////////////////////////////////////////////
	//on écrit toutes les fonctions dont on a besoin//
	//////////////////////////////////////////////////
	/* getPageScroll */
	function getPageScroll() {
		if (self.pageYOffset) {
			yScroll = self.pageYOffset;
		} else if (document.documentElement && document.documentElement.scrollTop) {
			yScroll = document.documentElement.scrollTop;
		} else if (document.body) {
			yScroll = document.body.scrollTop;
		}
		return yScroll;
	}
	/* vider les formulaires pour le rafraichissement */
	function resetForm($form) {
		$form.find('input:text, input:password, input:file, select, textarea').val('');
		$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
	}
	/* toutes les fonctions nécéssaires pour les animations */
	function init() {
		$('.icon_vendre').hide();
		/* onglet du menu d'accueil */
		$('li > a.onglet.myfont').addClass('animated-slow fadeInDown');
		$('#logo-menu-contenair').addClass('animated-slow fadeInUp')
		$('#logo').addClass('animated-slow fadeIn');
		$('#presentation').addClass('animated-slow flipInX');
		/* effet pour la collection éphèmère  */
		for (var i = 0; i < photos.length; i++) {
			var effet = Math.floor(Math.random() * (max - min)) + min;
			var randomColor = Math.floor(Math.random() * 16777215).toString(16);
			$('.zoom:eq(' + i + ')').css("background-color", '#' + randomColor);
			if (effet == 0) {
				zoomIn(photos[i]);
			}
			if (effet == 1) {
				balayageGauche(photos[i]);
			}
			if (effet == 2) {
				up(photos[i]);
			}
			if (effet == 3) {
				down(photos[i]);
			}
			if (effet == 4) {
				balayageDroite(photos[i]);
			}
			if (effet == 5) {
				zoomOut(photos[i]);
			}
			if (effet == 6) {
				flipY(photos[i]);
			}
			if (effet == 7) {
				flipX(photos[i]);
			}
		}
		photos.hover(function() {
			$(this).find('.cache > b > p.myfont-llg').addClass('animated fadeInLeft');
			$(this).find(".cache").fadeIn(800).css({
				"z-index": "2",
				"position": "absolute",
				"top": "0",
				"left": "0",
				"bottom": "0",
				"right": "0",
				"margin": "auto",
				"width": "200px",
				"height": "100px",
				//"padding": "30px"
			})
		}, function() {
			$(this).find(".cache").hide();
		});
	}

	function zoomIn(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').fadeTo(200, 0.5).css({
				'transform': 'scale(0.95, 0.95)',
				'-moz-transform': 'scale(0.95, 0.95)',
				'-webkit-transform': 'scale(0.95, 0.95)',
			});
		}, function() {
			$(this).find('.zoom-in').fadeTo(200, 1).css({
				'transform': 'scale(1, 1)',
				'-moz-transform': 'scale(1, 1)',
				'-webkit-transform': 'scale(1, 1)',
			});
		});
	}

	function zoomOut(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').fadeTo(200, 0.5).css({
				'transform': 'scale(1.05, 1.05)',
				'-moz-transform': 'scale(1.05, 1.05)',
				'-webkit-transform': 'scale(1.05, 1.05)',
			});
		}, function() {
			$(this).find('.zoom-in').fadeTo(200, 1).css({
				'transform': 'scale(1, 1)',
				'-moz-transform': 'scale(1, 1)',
				'-webkit-transform': 'scale(1, 1)',
			});
		});
	}

	function balayageGauche(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').addClass('animated fadeOutLeft');
		}, function() {
			$(this).find('.zoom-in').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
		});
	}

	function balayageDroite(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').addClass('animated fadeOutRight');
		}, function() {
			$(this).find('.zoom-in').removeClass('animated fadeOutRight').addClass('animated fadeInRight');
		});
	}

	function up(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').addClass('animated slideOutDown');
		}, function() {
			$(this).find('.zoom-in').removeClass('animated slideOutDown').addClass('animated slideInUp');
		});
	}

	function down(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').addClass('animated slideOutUp');
		}, function() {
			$(this).find('.zoom-in').removeClass('animated slideOutUp').addClass('animated slideInDown');
		});
	}

	function flipY(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').addClass('animated flipOutY');
		}, function() {
			$(this).find('.zoom-in').removeClass('animated flipOutY').addClass('animated flipInY');
		});
	}

	function flipX(element) {
		$(element).hover(function() {
			$(this).find('.zoom-in').addClass('animated flipOutX');
		}, function() {
			$(this).find('.zoom-in').removeClass('animated flipOutX').addClass('animated flipInX');
		});
	}
	/* compte */
	$(document).ready(function() {});

	function scrollToAnchor(idButton, idAnchor) {
		$(idButton).click(function() {
			if (idAnchor == '#haut') {
				$('html, body').animate({
					scrollTop: $(idAnchor).offset().top - 60
				}, 800, "swing");
			} else if (idAnchor == '#collection_ephemere') {
				$('html, body').animate({
					scrollTop: $(idAnchor).offset().top + 50
				}, 800, "swing");
			} else {
				$('html, body').animate({
					scrollTop: $(idAnchor).offset().top + 65
				}, 800, "swing");
			}
		});
	}

	function initMenu() {
		alignement.css({
			'text-align': 'center',
		});
	}

	function changeColor(objet, fontColor, backColor) {
		objet.css("color", fontColor);
		objet.css("background-color", backColor);
	}
	/////////////////////////////////
	//on lance toutes les fonctions//
	/////////////////////////////////
	init();
	initMenu();
	scrollToAnchor('#logo-menu-contenair', '#haut');
	scrollToAnchor('#Accueil', '#haut');
	scrollToAnchor("#logo", "#collection_ephemere");
	scrollToAnchor("#downArrow", "#collection_ephemere");
	scrollToAnchor("#presentation", "#collection_ephemere");
	scrollToAnchor('#Collection', '#collection_ephemere');
	scrollToAnchor('#Vendre', '#vendre');
	scrollToAnchor('#Achetez', '#achat');
	scrollToAnchor('#Customizez', '#customize');
	///////////////////////////////////
	//on attribue tous les évenements//
	///////////////////////////////////
	/* extern */
	Window.bind("beforeunload", function() {
		resetForm($('#inscription'));
	});
	/* ouvir les liens externs dans un nouvel onglet */
	$('a').attr('target', function() {
		if (this.host == location.host) return '_self'
		else return '_blank'
	});
	Window.scroll(function() {
		if ((getPageScroll() > collection_ephemere.offset().top) && done[0]) {
			collection_ephemere.find('center > div > div > h2').addClass('animated tada');
			done[0] = false;
		}
		if ((getPageScroll() > customize.offset().top) && done[1]) {
			customize.find('center > div > div > h2').addClass('animated tada');
			done[1] = false;
		}
		if ((getPageScroll() > achat.offset().top) && done[3]) {
			achat.find('center > div > div > h2').addClass('animated tada');
			done[3] = false;
		}
		if ((getPageScroll() > vendre.offset().top) && done[2]) {
			vendre.find('center > div > div > h2').addClass('animated tada');
			done[2] = false;
		}
		if (getPageScroll() > vendre.offset().top - ($(window).height() - 700)) {
			$('.icon_vendre:eq(0)').addClass('animated flipInY').fadeIn(function() {
				$('.icon_vendre:eq(1)').addClass('animated flipInY').fadeIn(function() {
					$('.icon_vendre:eq(2)').addClass('animated flipInY').fadeIn();
				});
			});
		}
		if (getPageScroll() > top) {
			navbar.css({
				"background-color": '#E1E1E1',
			});
			lien_menu.css({
				"color": "grey",
			});
			alignement.css({
				'text-align': 'center',
			});
			logo.css({
				'filter': 'invert(70%)'
			});
			//$('li > a.onglet.myfont').removeClass('animated-slow fadeInDown');
		} else {
			navbar.css({
				"background-color": 'transparent',
			});
			lien_menu.css({
				"color": "white",
			});
			alignement.css({
				'text-align': 'center',
			});
			logo.css({
				'filter': 'invert(0%)'
			});
		}
		if (getPageScroll() < top) {
			changeColor(buttons[0], 'white', 'transparent');
			changeColor(buttons[1], 'white', 'transparent');
			changeColor(buttons[2], 'white', 'transparent');
			changeColor(buttons[3], 'white', 'transparent');
			changeColor(buttons[4], 'white', 'transparent');
		}
		if ((getPageScroll() > top) && (getPageScroll() < $('#customize').offset().top)) {
			changeColor(buttons[0], fontColor, Color);
			changeColor(buttons[1], buttonsColor, backColor);
			changeColor(buttons[2], buttonsColor, backColor);
			changeColor(buttons[3], buttonsColor, backColor);
			changeColor(buttons[4], buttonsColor, backColor);
		}
		if ((getPageScroll() > $('#customize').offset().top - 200) && (getPageScroll() < $('#achat').offset().top)) {
			changeColor(buttons[0], buttonsColor, backColor);
			changeColor(buttons[1], fontColor, Color);
			changeColor(buttons[2], buttonsColor, backColor);
			changeColor(buttons[3], buttonsColor, backColor);
			changeColor(buttons[4], buttonsColor, backColor);
		}
		if ((getPageScroll() > $('#achat').offset().top - 200) && (getPageScroll() < $('#vendre').offset().top)) {
			changeColor(buttons[0], buttonsColor, backColor);
			changeColor(buttons[1], buttonsColor, backColor);
			changeColor(buttons[2], fontColor, Color);
			changeColor(buttons[3], buttonsColor, backColor);
			changeColor(buttons[4], buttonsColor, backColor);
		}
		if ((getPageScroll() > $('#vendre').offset().top - 200) && (getPageScroll() < $('footer').offset().top)) {
			changeColor(buttons[0], buttonsColor, backColor);
			changeColor(buttons[1], buttonsColor, backColor);
			changeColor(buttons[2], buttonsColor, backColor);
			changeColor(buttons[3], fontColor, Color);
			changeColor(buttons[4], buttonsColor, backColor);
		}
		if (getPageScroll() > $('footer').offset().top - 200) {
			changeColor(buttons[0], buttonsColor, backColor);
			changeColor(buttons[1], buttonsColor, backColor);
			changeColor(buttons[2], buttonsColor, backColor);
			changeColor(buttons[3], buttonsColor, backColor);
			changeColor(buttons[4], fontColor, Color);
		}
	});
	$(".btn-pref .btn").click(function() {
		$(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
		$(this).removeClass("btn-default").addClass("btn-primary");
	});
	/* search */
	$('a[href="#search"]').on('click', function(event) {
		event.preventDefault();
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});
	/* vendre_apparition */
	$('.icon_vendre').hide();
	$('#Vendre').click(function() {
		icon_vendre[0].fadeIn('slow', function() {
			if (j <= icon_vendre.length) {
				icon_vendre[j + 1].fadeIn('slow');
			}
		});
	});
	/* gestion des modals de la partie customiser  */
	for (var i = 0; i < produitImage.length - 1; i++) {
		$(produitImage[i]).click(function() {
			produit.fadeOut(0);
			$(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400);
		});
	}
	for (var i = 0; i < fermer.length; i++) {
		$(fermer[i]).click(function() {
			$(this.parentElement).fadeOut(0);
			produit.fadeIn(400);
		});
	}
	for (var i = 0; i < gauche.length; i++) {
		$(gauche[i]).click(function() {
			var elt = $(this.parentElement.previousElementSibling.children)[0];
			$(elt).fadeTo(100, 0, () => {
				elt.src = this.src;
				$(elt).fadeTo(100, 1);
			});
		});
	}
	//proposition des textiles lors d'un appuit sur un logo
	for (var i = 0; i < logo2.length; i++) {
		$(logo2[i]).click(function() {
			var toFadeOut = $(this.parentElement.parentElement.parentElement.parentElement);
			var toFadeIn = $(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);
		});
	}
	for (var i = 0; i < fermerLogo.length; i++) {
		$(fermerLogo[i]).click(function() {
			var toFadeOut = $(this.parentElement.parentElement.parentElement);
			var toFadeIn = $(this.parentElement.parentElement.parentElement.previousElementSibling);
			toFadeOut.fadeOut(0);
			toFadeIn.fadeIn(400);

		});
	}
});
