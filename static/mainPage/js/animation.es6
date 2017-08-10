/* animation 1 */
$(function() {
	/* variables nécéssaires pour les animations  */
	let collection_ephemere = $('#collection_ephemere');
	let customize = $('#customize');
	let achat = $('#achat');
	let vendre = $('#vendre');
	let photos = $('.zoom');
	let max = 8;
	let min = 0;
	let done = [true, true, true, true];
	/* toutes les fonctions nécéssaires pour les animations */
	function init() {
		$('.icon_vendre').hide();
		/* onglet du menu d'accueil */
		//$('li > a.onglet.myfont').addClass('animated-slow fadeInRight');
		$('#logo').addClass('animated-slow rotateInDownLeft');
		$('#presentation').addClass('animated-slow flipInX');
		/* effet pour la collection éphèmère  */
		for (let i = 0; i < photos.length; i++) {
			let effet = Math.floor(Math.random() * (max - min)) + min;
			let randomColor = Math.floor(Math.random() * 16777215).toString(16);
			$(`.zoom:eq(${i})`).css("background-color", `#${randomColor}`);
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
	/* initialisation des animations */
	init();
	/* effet sur le défilement */
	$(window).scroll(function() {
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
			$('.icon_vendre:eq(0)').addClass('animated flipInY').fadeIn(() => {
				$('.icon_vendre:eq(1)').addClass('animated flipInY').fadeIn(() => {
					$('.icon_vendre:eq(2)').addClass('animated flipInY').fadeIn();
				});
			});
		}
	});
});;
