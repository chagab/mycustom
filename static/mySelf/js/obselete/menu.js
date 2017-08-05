$(function() {
	var Window = $(window);
	var navbar = $('.navbar');
	var lien_menu = $('.navbar-default .navbar-nav > li > a');
	var alignement = $('.navbar .navbar-collapse ');
	var logo = $('#logo-menu-contenair');
	var top = Number(Window.height());
	/* toutes les couleurs nécéssaires */
	var backColor = '#E1E1E1';
	var buttonsColor = '#808080';
	var Color = 'rgba(255, 0, 0, 0.25)';
	var fontColor = 'white';
	var buttons = [
		$('#Collection'),
		$('#Customizez'),
		$('#Achetez'),
		$('#Vendre'),
		$('#Professionel'),
	];

	function init() {
		logo.hide();
		alignement.css({
			'text-align': 'right',
		});
	}

	function changeColor(objet, fontColor, backColor) {
		objet.css("color", fontColor);
		objet.css("background-color", backColor);
	}
	init();
	Window.scroll(function() {
		if (getPageScroll() > top - 51) {
			navbar.css({
				"background-color": '#E1E1E1',
			});
			lien_menu.css({
				"color": "grey",
			});
			alignement.css({
				'text-align': 'center',
			});
			logo.fadeIn();
			$('li > a.onglet.myfont').removeClass('animated-slow fadeInRight');
		} else {
			navbar.css({
				"background-color": 'transparent',
			});
			lien_menu.css({
				"color": "white",
			});
			alignement.css({
				'text-align': 'right',
			});
			logo.hide();
		}
		if (getPageScroll() < Window.height()) {
			changeColor(buttons[0], 'white', 'transparent');
			changeColor(buttons[1], 'white', 'transparent');
			changeColor(buttons[2], 'white', 'transparent');
			changeColor(buttons[3], 'white', 'transparent');
			changeColor(buttons[4], 'white', 'transparent');
		}
		if ((getPageScroll() > $('#collection_ephemere').offset().top - 200) && (getPageScroll() < $('#customize').offset().top)) {
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
});