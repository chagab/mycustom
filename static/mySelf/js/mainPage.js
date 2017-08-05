"use strict";

function getPageScroll() {
	var a;
	return self.pageYOffset ? a = self.pageYOffset : document.documentElement && document.documentElement.scrollTop ? a = document.documentElement.scrollTop : document.body && (a = document.body.scrollTop), a
}
$(function() {
	function a() {
		$(".icon_vendre").hide(), $("#logo").addClass("animated-slow rotateInDownLeft"), $("#presentation").addClass("animated-slow flipInX");
		for (var a = 0; a < n.length; a++) {
			var j = Math.floor(Math.random() * (o - p)) + p,
				k = Math.floor(16777215 * Math.random()).toString(16);
			$(".zoom:eq(" + a + ")").css("background-color", "#" + k), 0 == j && b(n[a]), 1 == j && d(n[a]), 2 == j && f(n[a]), 3 == j && g(n[a]), 4 == j && e(n[a]), 5 == j && c(n[a]), 6 == j && h(n[a]), 7 == j && i(n[a])
		}
		n.hover(function() {
			$(this).find(".cache > b > p.myfont-llg").addClass("animated fadeInLeft"), $(this).find(".cache").fadeIn(800).css({
				"z-index": "2",
				position: "absolute",
				top: "0",
				left: "0",
				bottom: "0",
				right: "0",
				margin: "auto",
				width: "200px",
				height: "100px"
			})
		}, function() {
			$(this).find(".cache").hide()
		})
	}

	function b(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").fadeTo(200, .5).css({
				transform: "scale(0.95, 0.95)",
				"-moz-transform": "scale(0.95, 0.95)",
				"-webkit-transform": "scale(0.95, 0.95)"
			})
		}, function() {
			$(this).find(".zoom-in").fadeTo(200, 1).css({
				transform: "scale(1, 1)",
				"-moz-transform": "scale(1, 1)",
				"-webkit-transform": "scale(1, 1)"
			})
		})
	}

	function c(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").fadeTo(200, .5).css({
				transform: "scale(1.05, 1.05)",
				"-moz-transform": "scale(1.05, 1.05)",
				"-webkit-transform": "scale(1.05, 1.05)"
			})
		}, function() {
			$(this).find(".zoom-in").fadeTo(200, 1).css({
				transform: "scale(1, 1)",
				"-moz-transform": "scale(1, 1)",
				"-webkit-transform": "scale(1, 1)"
			})
		})
	}

	function d(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").addClass("animated fadeOutLeft")
		}, function() {
			$(this).find(".zoom-in").removeClass("animated fadeOutLeft").addClass("animated fadeInLeft")
		})
	}

	function e(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").addClass("animated fadeOutRight")
		}, function() {
			$(this).find(".zoom-in").removeClass("animated fadeOutRight").addClass("animated fadeInRight")
		})
	}

	function f(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").addClass("animated slideOutDown")
		}, function() {
			$(this).find(".zoom-in").removeClass("animated slideOutDown").addClass("animated slideInUp")
		})
	}

	function g(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").addClass("animated slideOutUp")
		}, function() {
			$(this).find(".zoom-in").removeClass("animated slideOutUp").addClass("animated slideInDown")
		})
	}

	function h(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").addClass("animated flipOutY")
		}, function() {
			$(this).find(".zoom-in").removeClass("animated flipOutY").addClass("animated flipInY")
		})
	}

	function i(a) {
		$(a).hover(function() {
			$(this).find(".zoom-in").addClass("animated flipOutX")
		}, function() {
			$(this).find(".zoom-in").removeClass("animated flipOutX").addClass("animated flipInX")
		})
	}
	var j = $("#collection_ephemere"),
		k = $("#customize"),
		l = $("#achat"),
		m = $("#vendre"),
		n = $(".zoom"),
		o = 8,
		p = 0,
		q = [!0, !0, !0, !0];
	a(), $(window).scroll(function() {
		getPageScroll() > j.offset().top && q[0] && (j.find("center > div > div > h2").addClass("animated tada"), q[0] = !1), getPageScroll() > k.offset().top && q[1] && (k.find("center > div > div > h2").addClass("animated tada"), q[1] = !1), getPageScroll() > l.offset().top && q[3] && (l.find("center > div > div > h2").addClass("animated tada"), q[3] = !1), getPageScroll() > m.offset().top && q[2] && (m.find("center > div > div > h2").addClass("animated tada"), q[2] = !1), getPageScroll() > m.offset().top - ($(window).height() - 700) && $(".icon_vendre:eq(0)").addClass("animated flipInY").fadeIn(function() {
			$(".icon_vendre:eq(1)").addClass("animated flipInY").fadeIn(function() {
				$(".icon_vendre:eq(2)").addClass("animated flipInY").fadeIn()
			})
		})
	})
}), $(document).ready(function() {
	$(".btn-pref .btn").click(function() {
		$(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default"), $(this).removeClass("btn-default").addClass("btn-primary")
	})
}), $(function() {
	function a(a) {
		a.find("input:text, input:password, input:file, select, textarea").val(""), a.find("input:radio, input:checkbox").removeAttr("checked").removeAttr("selected")
	}
	$(window).bind("beforeunload", function() {
		a($("#inscription"))
	}), $("a").attr("target", function() {
		return this.host == location.host ? "_self" : "_blank"
	})
}), $(function() {
	for (var a = $(".produitImage"), b = $(".produit"), c = $(".gauche"), d = ($(".droite"), $(".logo")), e = $(".fermer"), f = $(".fermerLogo"), g = 0; g < a.length - 1; g++) $(a[g]).click(function() {
		b.fadeOut(0), $(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling).fadeIn(400)
	});
	for (var g = 0; g < e.length; g++) $(e[g]).click(function() {
		$(this.parentElement).fadeOut(0), b.fadeIn(400)
	});
	for (var g = 0; g < c.length; g++) $(c[g]).click(function() {
		var a = this,
			b = $(this.parentElement.previousElementSibling.children)[0];
		$(b).fadeTo(100, 0, function() {
			b.src = a.src, $(b).fadeTo(100, 1)
		})
	});
	for (var g = 0; g < d.length; g++) $(d[g]).click(function() {
		var a = $(this.parentElement.parentElement.parentElement.parentElement),
			b = $(this.parentElement.parentElement.parentElement.parentElement.nextElementSibling);
		a.fadeOut(0), b.fadeIn(400)
	});
	for (var g = 0; g < f.length; g++) $(f[g]).click(function() {
		var a = $(this.parentElement.parentElement.parentElement),
			b = $(this.parentElement.parentElement.parentElement.previousElementSibling);
		a.fadeOut(0), b.fadeIn(400)
	})
}), $(function() {
	function a() {
		f.css({
			"text-align": "center"
		})
	}

	function b(a, b, c) {
		a.css("color", b), a.css("background-color", c)
	}
	var c = $(window),
		d = $(".navbar"),
		e = $(".navbar-default .navbar-nav > li > a"),
		f = $(".navbar .navbar-collapse "),
		g = $("#logo-menu-contenair"),
		h = Number(c.height()),
		i = "#E1E1E1",
		j = "#808080",
		k = "rgba(76, 76, 76, 1)",
		l = "white",
		m = [$("#Collection"), $("#Customizez"), $("#Achetez"), $("#Vendre"), $("#Professionel")];
	a(), c.scroll(function() {
		getPageScroll() > h ? (d.css({
			"background-color": "#E1E1E1"
		}), e.css({
			color: "grey"
		}), f.css({
			"text-align": "center"
		}), g.css({
			filter: "invert(70%)"
		})) : (d.css({
			"background-color": "transparent"
		}), e.css({
			color: "white"
		}), f.css({
			"text-align": "center"
		}), g.css({
			filter: "invert(0%)"
		})), getPageScroll() < c.height() && (b(m[0], "white", "transparent"), b(m[1], "white", "transparent"), b(m[2], "white", "transparent"), b(m[3], "white", "transparent"), b(m[4], "white", "transparent")), getPageScroll() > $("#collection_ephemere").offset().top - 200 && getPageScroll() < $("#customize").offset().top && (b(m[0], l, k), b(m[1], j, i), b(m[2], j, i), b(m[3], j, i), b(m[4], j, i)), getPageScroll() > $("#customize").offset().top - 200 && getPageScroll() < $("#achat").offset().top && (b(m[0], j, i), b(m[1], l, k), b(m[2], j, i), b(m[3], j, i), b(m[4], j, i)), getPageScroll() > $("#achat").offset().top - 200 && getPageScroll() < $("#vendre").offset().top && (b(m[0], j, i), b(m[1], j, i), b(m[2], l, k), b(m[3], j, i), b(m[4], j, i)), getPageScroll() > $("#vendre").offset().top - 200 && getPageScroll() < $("footer").offset().top && (b(m[0], j, i), b(m[1], j, i), b(m[2], j, i), b(m[3], l, k), b(m[4], j, i)), getPageScroll() > $("footer").offset().top - 200 && (b(m[0], j, i), b(m[1], j, i), b(m[2], j, i), b(m[3], j, i), b(m[4], l, k))
	})
}), $(function() {
	function a(a, b) {
		$(a).click(function() {
			"#haut" == b ? $("html, body").animate({
				scrollTop: $(b).offset().top - 60
			}, 800, "swing") : "#collection_ephemere" == b ? $("html, body").animate({
				scrollTop: $(b).offset().top + 50
			}, 800, "swing") : $("html, body").animate({
				scrollTop: $(b).offset().top + 65
			}, 800, "swing")
		})
	}
	a("#logo-menu-contenair", "#haut"), a("#Accueil", "#haut"), a("#logo", "#collection_ephemere"), a("#downArrow", "#collection_ephemere"), a("#presentation", "#collection_ephemere"), a("#Collection", "#collection_ephemere"), a("#Vendre", "#vendre"), a("#Achetez", "#achat"), a("#Customizez", "#customize")
}), $(function() {
	$('a[href="#search"]').on("click", function(a) {
		a.preventDefault(), console.log("click"), $("#search").addClass("open"), $('#search > form > input[type="search"]').focus()
	}), $("#search, #search button.close").on("click keyup", function(a) {
		a.target != this && "close" != a.target.className && 27 != a.keyCode || $(this).removeClass("open")
	})
}), $(function() {
	var a = $(".icon_vendre").get(),
		b = 0;
	$(".icon_vendre").hide(), console.log("debut"), $("#Vendre").click(function() {
		console.log("click"), a[0].fadeIn("slow", function() {
			b <= a.length && (console.log(b), a[b + 1].fadeIn("slow"), console.log("done"))
		})
	})
});
