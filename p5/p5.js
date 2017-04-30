! function(e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var t;
		t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.p5 = e()
	}
}(function() {
	var define, module, exports;
	return function e(t, r, n) {
		function o(a, s) {
			if (!r[a]) {
				if (!t[a]) {
					var h = "function" == typeof require && require;
					if (!s && h) return h(a, !0);
					if (i) return i(a, !0);
					var l = new Error("Cannot find module '" + a + "'");
					throw l.code = "MODULE_NOT_FOUND", l
				}
				var u = r[a] = {
					exports: {}
				};
				t[a][0].call(u.exports, function(e) {
					var r = t[a][1][e];
					return o(r ? r : e)
				}, u, u.exports, e, t, r, n)
			}
			return r[a].exports
		}
		for (var i = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
		return o
	}({
		1: [function(e, t, r) {}, {}],
		2: [function(e, t, r) {
			"use strict";
			r.argument = function(e, t) {
				if (!e) throw new Error(t)
			}, r.assert = r.argument
		}, {}],
		3: [function(e, t, r) {
			"use strict";

			function n(e, t, r, n, o) {
				e.beginPath(), e.moveTo(t, r), e.lineTo(n, o), e.stroke()
			}
			r.line = n
		}, {}],
		4: [function(e, t, r) {
			"use strict";

			function n(e) {
				this.font = e
			}

			function o(e) {
				this.cmap = e
			}

			function i(e, t) {
				this.encoding = e, this.charset = t
			}

			function a(e) {
				var t;
				switch (e.version) {
					case 1:
						this.names = r.standardNames.slice();
						break;
					case 2:
						for (this.names = new Array(e.numberOfGlyphs), t = 0; t < e.numberOfGlyphs; t++) e.glyphNameIndex[t] < r.standardNames.length ? this.names[t] = r.standardNames[e.glyphNameIndex[t]] : this.names[t] = e.names[e.glyphNameIndex[t] - r.standardNames.length];
						break;
					case 2.5:
						for (this.names = new Array(e.numberOfGlyphs), t = 0; t < e.numberOfGlyphs; t++) this.names[t] = r.standardNames[t + e.glyphNameIndex[t]];
						break;
					case 3:
						this.names = []
				}
			}

			function s(e) {
				for (var t, r = e.tables.cmap.glyphIndexMap, n = Object.keys(r), o = 0; o < n.length; o += 1) {
					var i = n[o],
						a = r[i];
					t = e.glyphs.get(a), t.addUnicode(parseInt(i))
				}
				for (o = 0; o < e.glyphs.length; o += 1) t = e.glyphs.get(o), e.cffEncoding ? t.name = e.cffEncoding.charset[o] : t.name = e.glyphNames.glyphIndexToName(o)
			}
			var h = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
				l = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
				u = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
				p = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];
			n.prototype.charToGlyphIndex = function(e) {
				var t = e.charCodeAt(0),
					r = this.font.glyphs;
				if (!r) return null;
				for (var n = 0; n < r.length; n += 1)
					for (var o = r.get(n), i = 0; i < o.unicodes.length; i += 1)
						if (o.unicodes[i] === t) return n
			}, o.prototype.charToGlyphIndex = function(e) {
				return this.cmap.glyphIndexMap[e.charCodeAt(0)] || 0
			}, i.prototype.charToGlyphIndex = function(e) {
				var t = e.charCodeAt(0),
					r = this.encoding[t];
				return this.charset.indexOf(r)
			}, a.prototype.nameToGlyphIndex = function(e) {
				return this.names.indexOf(e)
			}, a.prototype.glyphIndexToName = function(e) {
				return this.names[e]
			}, r.cffStandardStrings = h, r.cffStandardEncoding = l, r.cffExpertEncoding = u, r.standardNames = p, r.DefaultEncoding = n, r.CmapEncoding = o, r.CffEncoding = i, r.GlyphNames = a, r.addGlyphNames = s
		}, {}],
		5: [function(e, t, r) {
			"use strict";

			function n(e) {
				e = e || {}, this.familyName = e.familyName || " ", this.styleName = e.styleName || " ", this.designer = e.designer || " ", this.designerURL = e.designerURL || " ", this.manufacturer = e.manufacturer || " ", this.manufacturerURL = e.manufacturerURL || " ", this.license = e.license || " ", this.licenseURL = e.licenseURL || " ", this.version = e.version || "Version 0.1", this.description = e.description || " ", this.copyright = e.copyright || " ", this.trademark = e.trademark || " ", this.unitsPerEm = e.unitsPerEm || 1e3, this.ascender = e.ascender, this.descender = e.descender, this.supported = !0, this.glyphs = new s.GlyphSet(this, e.glyphs || []), this.encoding = new a.DefaultEncoding(this), this.tables = {}
			}
			var o = e("./path"),
				i = e("./tables/sfnt"),
				a = e("./encoding"),
				s = e("./glyphset");
			n.prototype.hasChar = function(e) {
				return null !== this.encoding.charToGlyphIndex(e)
			}, n.prototype.charToGlyphIndex = function(e) {
				return this.encoding.charToGlyphIndex(e)
			}, n.prototype.charToGlyph = function(e) {
				var t = this.charToGlyphIndex(e),
					r = this.glyphs.get(t);
				return r || (r = this.glyphs.get(0)), r
			}, n.prototype.stringToGlyphs = function(e) {
				for (var t = [], r = 0; r < e.length; r += 1) {
					var n = e[r];
					t.push(this.charToGlyph(n))
				}
				return t
			}, n.prototype.nameToGlyphIndex = function(e) {
				return this.glyphNames.nameToGlyphIndex(e)
			}, n.prototype.nameToGlyph = function(e) {
				var t = this.nametoGlyphIndex(e),
					r = this.glyphs.get(t);
				return r || (r = this.glyphs.get(0)), r
			}, n.prototype.glyphIndexToName = function(e) {
				return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e) : ""
			}, n.prototype.getKerningValue = function(e, t) {
				e = e.index || e, t = t.index || t;
				var r = this.getGposKerningValue;
				return r ? r(e, t) : this.kerningPairs[e + "," + t] || 0
			}, n.prototype.forEachGlyph = function(e, t, r, n, o, i) {
				if (this.supported) {
					t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 72, o = o || {};
					for (var a = void 0 === o.kerning || o.kerning, s = 1 / this.unitsPerEm * n, h = this.stringToGlyphs(e), l = 0; l < h.length; l += 1) {
						var u = h[l];
						if (i(u, t, r, n, o), u.advanceWidth && (t += u.advanceWidth * s), a && l < h.length - 1) {
							var p = this.getKerningValue(u, h[l + 1]);
							t += p * s
						}
					}
				}
			}, n.prototype.getPath = function(e, t, r, n, i) {
				var a = new o.Path;
				return this.forEachGlyph(e, t, r, n, i, function(e, t, r, n) {
					var o = e.getPath(t, r, n);
					a.extend(o)
				}), a
			}, n.prototype.draw = function(e, t, r, n, o, i) {
				this.getPath(t, r, n, o, i).draw(e)
			}, n.prototype.drawPoints = function(e, t, r, n, o, i) {
				this.forEachGlyph(t, r, n, o, i, function(t, r, n, o) {
					t.drawPoints(e, r, n, o)
				})
			}, n.prototype.drawMetrics = function(e, t, r, n, o, i) {
				this.forEachGlyph(t, r, n, o, i, function(t, r, n, o) {
					t.drawMetrics(e, r, n, o)
				})
			}, n.prototype.validate = function() {
				function e(e, t) {
					e || r.push(t)
				}

				function t(t) {
					e(n[t] && n[t].trim().length > 0, "No " + t + " specified.")
				}
				var r = [],
					n = this;
				t("familyName"), t("weightName"), t("manufacturer"), t("copyright"), t("version"), e(this.unitsPerEm > 0, "No unitsPerEm specified.")
			}, n.prototype.toTables = function() {
				return i.fontToTable(this)
			}, n.prototype.toBuffer = function() {
				for (var e = this.toTables(), t = e.encode(), r = new ArrayBuffer(t.length), n = new Uint8Array(r), o = 0; o < t.length; o++) n[o] = t[o];
				return r
			}, n.prototype.download = function() {
				var e = this.familyName.replace(/\s/g, "") + "-" + this.styleName + ".otf",
					t = this.toBuffer();
				window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.requestFileSystem(window.TEMPORARY, t.byteLength, function(r) {
					r.root.getFile(e, {
						create: !0
					}, function(e) {
						e.createWriter(function(r) {
							var n = new DataView(t),
								o = new Blob([n], {
									type: "font/opentype"
								});
							r.write(o), r.addEventListener("writeend", function() {
								location.href = e.toURL()
							}, !1)
						})
					})
				}, function(e) {
					throw e
				})
			}, r.Font = n
		}, {
			"./encoding": 4,
			"./glyphset": 7,
			"./path": 10,
			"./tables/sfnt": 25
		}],
		6: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = t || {
					commands: []
				};
				return {
					configurable: !0,
					get: function() {
						return "function" == typeof r && (r = r()), r
					},
					set: function(e) {
						r = e
					}
				}
			}

			function o(e) {
				this.bindConstructorValues(e)
			}
			var i = e("./check"),
				a = e("./draw"),
				s = e("./path");
			o.prototype.bindConstructorValues = function(e) {
				this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || void 0, this.unicodes = e.unicodes || void 0 !== e.unicode ? [e.unicode] : [], e.xMin && (this.xMin = e.xMin), e.yMin && (this.yMin = e.yMin), e.xMax && (this.xMax = e.xMax), e.yMax && (this.yMax = e.yMax), e.advanceWidth && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", n(this, e.path))
			}, o.prototype.addUnicode = function(e) {
				0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e)
			}, o.prototype.getPath = function(e, t, r) {
				e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 72;
				for (var n = 1 / this.path.unitsPerEm * r, o = new s.Path, i = this.path.commands, a = 0; a < i.length; a += 1) {
					var h = i[a];
					"M" === h.type ? o.moveTo(e + h.x * n, t + -h.y * n) : "L" === h.type ? o.lineTo(e + h.x * n, t + -h.y * n) : "Q" === h.type ? o.quadraticCurveTo(e + h.x1 * n, t + -h.y1 * n, e + h.x * n, t + -h.y * n) : "C" === h.type ? o.curveTo(e + h.x1 * n, t + -h.y1 * n, e + h.x2 * n, t + -h.y2 * n, e + h.x * n, t + -h.y * n) : "Z" === h.type && o.closePath()
				}
				return o
			}, o.prototype.getContours = function() {
				if (void 0 === this.points) return [];
				for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
					var n = this.points[r];
					t.push(n), n.lastPointOfContour && (e.push(t), t = [])
				}
				return i.argument(0 === t.length, "There are still points left in the current contour."), e
			}, o.prototype.getMetrics = function() {
				for (var e = this.path.commands, t = [], r = [], n = 0; n < e.length; n += 1) {
					var o = e[n];
					"Z" !== o.type && (t.push(o.x), r.push(o.y)), "Q" !== o.type && "C" !== o.type || (t.push(o.x1), r.push(o.y1)), "C" === o.type && (t.push(o.x2), r.push(o.y2))
				}
				var i = {
					xMin: Math.min.apply(null, t),
					yMin: Math.min.apply(null, r),
					xMax: Math.max.apply(null, t),
					yMax: Math.max.apply(null, r),
					leftSideBearing: 0
				};
				return i.rightSideBearing = this.advanceWidth - i.leftSideBearing - (i.xMax - i.xMin), i
			}, o.prototype.draw = function(e, t, r, n) {
				this.getPath(t, r, n).draw(e)
			}, o.prototype.drawPoints = function(e, t, r, n) {
				function o(t, r, n, o) {
					var i = 2 * Math.PI;
					e.beginPath();
					for (var a = 0; a < t.length; a += 1) e.moveTo(r + t[a].x * o, n + t[a].y * o), e.arc(r + t[a].x * o, n + t[a].y * o, 2, 0, i, !1);
					e.closePath(), e.fill()
				}
				t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 24;
				for (var i = 1 / this.path.unitsPerEm * n, a = [], s = [], h = this.path, l = 0; l < h.commands.length; l += 1) {
					var u = h.commands[l];
					void 0 !== u.x && a.push({
						x: u.x,
						y: -u.y
					}), void 0 !== u.x1 && s.push({
						x: u.x1,
						y: -u.y1
					}), void 0 !== u.x2 && s.push({
						x: u.x2,
						y: -u.y2
					})
				}
				e.fillStyle = "blue", o(a, t, r, i), e.fillStyle = "red", o(s, t, r, i)
			}, o.prototype.drawMetrics = function(e, t, r, n) {
				var o;
				t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 24, o = 1 / this.path.unitsPerEm * n, e.lineWidth = 1, e.strokeStyle = "black", a.line(e, t, -1e4, t, 1e4), a.line(e, -1e4, r, 1e4, r);
				var i = this.xMin || 0,
					s = this.yMin || 0,
					h = this.xMax || 0,
					l = this.yMax || 0,
					u = this.advanceWidth || 0;
				e.strokeStyle = "blue", a.line(e, t + i * o, -1e4, t + i * o, 1e4), a.line(e, t + h * o, -1e4, t + h * o, 1e4), a.line(e, -1e4, r + -s * o, 1e4, r + -s * o), a.line(e, -1e4, r + -l * o, 1e4, r + -l * o), e.strokeStyle = "green", a.line(e, t + u * o, -1e4, t + u * o, 1e4)
			}, r.Glyph = o
		}, {
			"./check": 2,
			"./draw": 3,
			"./path": 10
		}],
		7: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (this.font = e, this.glyphs = {}, Array.isArray(t))
					for (var r = 0; r < t.length; r++) this.glyphs[r] = t[r];
				this.length = t && t.length || 0
			}

			function o(e, t) {
				return new s.Glyph({
					index: t,
					font: e
				})
			}

			function i(e, t, r, n, o, i) {
				return function() {
					var a = new s.Glyph({
						index: t,
						font: e
					});
					return a.path = function() {
						r(a, n, o);
						var t = i(e.glyphs, a);
						return t.unitsPerEm = e.unitsPerEm, t
					}, a
				}
			}

			function a(e, t, r, n) {
				return function() {
					var o = new s.Glyph({
						index: t,
						font: e
					});
					return o.path = function() {
						var t = r(e, o, n);
						return t.unitsPerEm = e.unitsPerEm, t
					}, o
				}
			}
			var s = e("./glyph");
			n.prototype.get = function(e) {
				return "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]()), this.glyphs[e]
			}, n.prototype.push = function(e, t) {
				this.glyphs[e] = t, this.length++
			}, r.GlyphSet = n, r.glyphLoader = o, r.ttfGlyphLoader = i, r.cffGlyphLoader = a
		}, {
			"./glyph": 6
		}],
		8: [function(e, t, r) {
			"use strict";

			function n(e) {
				for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n < e.length; n += 1) r[n] = e[n];
				return t
			}

			function o(t, r) {
				var o = e("fs");
				o.readFile(t, function(e, t) {
					return e ? r(e.message) : void r(null, n(t))
				})
			}

			function i(e, t) {
				var r = new XMLHttpRequest;
				r.open("get", e, !0), r.responseType = "arraybuffer", r.onload = function() {
					return 200 !== r.status ? t("Font could not be loaded: " + r.statusText) : t(null, r.response)
				}, r.send()
			}

			function a(e) {
				var t, r, n, o, i, a, s, u = new l.Font,
					c = new DataView(e, 0),
					C = p.getFixed(c, 0);
				if (1 === C) u.outlinesFormat = "truetype";
				else {
					if (C = p.getTag(c, 0), "OTTO" !== C) throw new Error("Unsupported OpenType version " + C);
					u.outlinesFormat = "cff"
				}
				for (var R = p.getUShort(c, 4), E = 12, A = 0; A < R; A += 1) {
					var P = p.getTag(c, E),
						L = p.getULong(c, E + 8);
					switch (P) {
						case "cmap":
							u.tables.cmap = f.parse(c, L), u.encoding = new h.CmapEncoding(u.tables.cmap), u.encoding || (u.supported = !1);
							break;
						case "head":
							u.tables.head = y.parse(c, L), u.unitsPerEm = u.tables.head.unitsPerEm, t = u.tables.head.indexToLocFormat;
							break;
						case "hhea":
							u.tables.hhea = v.parse(c, L), u.ascender = u.tables.hhea.ascender, u.descender = u.tables.hhea.descender, u.numberOfHMetrics = u.tables.hhea.numberOfHMetrics;
							break;
						case "hmtx":
							r = L;
							break;
						case "maxp":
							u.tables.maxp = w.parse(c, L), u.numGlyphs = u.tables.maxp.numGlyphs;
							break;
						case "name":
							u.tables.name = S.parse(c, L), u.familyName = u.tables.name.fontFamily, u.styleName = u.tables.name.fontSubfamily;
							break;
						case "OS/2":
							u.tables.os2 = T.parse(c, L);
							break;
						case "post":
							u.tables.post = M.parse(c, L), u.glyphNames = new h.GlyphNames(u.tables.post);
							break;
						case "glyf":
							n = L;
							break;
						case "loca":
							o = L;
							break;
						case "CFF ":
							i = L;
							break;
						case "kern":
							a = L;
							break;
						case "GPOS":
							s = L
					}
					E += 16
				}
				if (n && o) {
					var I = 0 === t,
						D = b.parse(c, o, u.numGlyphs, I);
					u.glyphs = m.parse(c, n, D, u), x.parse(c, r, u.numberOfHMetrics, u.numGlyphs, u.glyphs), h.addGlyphNames(u)
				} else i ? (d.parse(c, i, u), h.addGlyphNames(u)) : u.supported = !1;
				return u.supported && (a ? u.kerningPairs = _.parse(c, a) : u.kerningPairs = {}, s && g.parse(c, s, u)), u
			}

			function s(e, t) {
				var r = "undefined" == typeof window,
					n = r ? o : i;
				n(e, function(e, r) {
					if (e) return t(e);
					var n = a(r);
					return n.supported ? t(null, n) : t("Font is not supported (is this a Postscript font?)")
				})
			}
			var h = e("./encoding"),
				l = e("./font"),
				u = e("./glyph"),
				p = e("./parse"),
				c = e("./path"),
				f = e("./tables/cmap"),
				d = e("./tables/cff"),
				m = e("./tables/glyf"),
				g = e("./tables/gpos"),
				y = e("./tables/head"),
				v = e("./tables/hhea"),
				x = e("./tables/hmtx"),
				_ = e("./tables/kern"),
				b = e("./tables/loca"),
				w = e("./tables/maxp"),
				S = e("./tables/name"),
				T = e("./tables/os2"),
				M = e("./tables/post");
			r._parse = p, r.Font = l.Font, r.Glyph = u.Glyph, r.Path = c.Path, r.parse = a, r.load = s
		}, {
			"./encoding": 4,
			"./font": 5,
			"./glyph": 6,
			"./parse": 9,
			"./path": 10,
			"./tables/cff": 12,
			"./tables/cmap": 13,
			"./tables/glyf": 14,
			"./tables/gpos": 15,
			"./tables/head": 16,
			"./tables/hhea": 17,
			"./tables/hmtx": 18,
			"./tables/kern": 19,
			"./tables/loca": 20,
			"./tables/maxp": 21,
			"./tables/name": 22,
			"./tables/os2": 23,
			"./tables/post": 24,
			fs: 1
		}],
		9: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				this.data = e, this.offset = t, this.relativeOffset = 0
			}
			r.getByte = function(e, t) {
				return e.getUint8(t)
			}, r.getCard8 = r.getByte, r.getUShort = function(e, t) {
				return e.getUint16(t, !1)
			}, r.getCard16 = r.getUShort, r.getShort = function(e, t) {
				return e.getInt16(t, !1)
			}, r.getULong = function(e, t) {
				return e.getUint32(t, !1)
			}, r.getFixed = function(e, t) {
				var r = e.getInt16(t, !1),
					n = e.getUint16(t + 2, !1);
				return r + n / 65535
			}, r.getTag = function(e, t) {
				for (var r = "", n = t; n < t + 4; n += 1) r += String.fromCharCode(e.getInt8(n));
				return r
			}, r.getOffset = function(e, t, r) {
				for (var n = 0, o = 0; o < r; o += 1) n <<= 8, n += e.getUint8(t + o);
				return n
			}, r.getBytes = function(e, t, r) {
				for (var n = [], o = t; o < r; o += 1) n.push(e.getUint8(o));
				return n
			}, r.bytesToString = function(e) {
				for (var t = "", r = 0; r < e.length; r += 1) t += String.fromCharCode(e[r]);
				return t
			};
			var o = {
				byte: 1,
				uShort: 2,
				short: 2,
				uLong: 4,
				fixed: 4,
				longDateTime: 8,
				tag: 4
			};
			n.prototype.parseByte = function() {
				var e = this.data.getUint8(this.offset + this.relativeOffset);
				return this.relativeOffset += 1, e
			}, n.prototype.parseChar = function() {
				var e = this.data.getInt8(this.offset + this.relativeOffset);
				return this.relativeOffset += 1, e
			}, n.prototype.parseCard8 = n.prototype.parseByte, n.prototype.parseUShort = function() {
				var e = this.data.getUint16(this.offset + this.relativeOffset);
				return this.relativeOffset += 2, e
			}, n.prototype.parseCard16 = n.prototype.parseUShort, n.prototype.parseSID = n.prototype.parseUShort, n.prototype.parseOffset16 = n.prototype.parseUShort, n.prototype.parseShort = function() {
				var e = this.data.getInt16(this.offset + this.relativeOffset);
				return this.relativeOffset += 2, e
			}, n.prototype.parseF2Dot14 = function() {
				var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
				return this.relativeOffset += 2, e
			}, n.prototype.parseULong = function() {
				var e = r.getULong(this.data, this.offset + this.relativeOffset);
				return this.relativeOffset += 4, e
			}, n.prototype.parseFixed = function() {
				var e = r.getFixed(this.data, this.offset + this.relativeOffset);
				return this.relativeOffset += 4, e
			}, n.prototype.parseOffset16List = n.prototype.parseUShortList = function(e) {
				for (var t = new Array(e), n = this.data, o = this.offset + this.relativeOffset, i = 0; i < e; i++) t[i] = r.getUShort(n, o), o += 2;
				return this.relativeOffset += 2 * e, t
			}, n.prototype.parseString = function(e) {
				var t = this.data,
					r = this.offset + this.relativeOffset,
					n = "";
				this.relativeOffset += e;
				for (var o = 0; o < e; o++) n += String.fromCharCode(t.getUint8(r + o));
				return n
			}, n.prototype.parseTag = function() {
				return this.parseString(4)
			}, n.prototype.parseLongDateTime = function() {
				var e = r.getULong(this.data, this.offset + this.relativeOffset + 4);
				return this.relativeOffset += 8, e
			}, n.prototype.parseFixed = function() {
				var e = r.getULong(this.data, this.offset + this.relativeOffset);
				return this.relativeOffset += 4, e / 65536
			}, n.prototype.parseVersion = function() {
				var e = r.getUShort(this.data, this.offset + this.relativeOffset),
					t = r.getUShort(this.data, this.offset + this.relativeOffset + 2);
				return this.relativeOffset += 4, e + t / 4096 / 10
			}, n.prototype.skip = function(e, t) {
				void 0 === t && (t = 1), this.relativeOffset += o[e] * t
			}, r.Parser = n
		}, {}],
		10: [function(e, t, r) {
			"use strict";

			function n() {
				this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1
			}
			n.prototype.moveTo = function(e, t) {
				this.commands.push({
					type: "M",
					x: e,
					y: t
				})
			}, n.prototype.lineTo = function(e, t) {
				this.commands.push({
					type: "L",
					x: e,
					y: t
				})
			}, n.prototype.curveTo = n.prototype.bezierCurveTo = function(e, t, r, n, o, i) {
				this.commands.push({
					type: "C",
					x1: e,
					y1: t,
					x2: r,
					y2: n,
					x: o,
					y: i
				})
			}, n.prototype.quadTo = n.prototype.quadraticCurveTo = function(e, t, r, n) {
				this.commands.push({
					type: "Q",
					x1: e,
					y1: t,
					x: r,
					y: n
				})
			}, n.prototype.close = n.prototype.closePath = function() {
				this.commands.push({
					type: "Z"
				})
			}, n.prototype.extend = function(e) {
				e.commands && (e = e.commands), Array.prototype.push.apply(this.commands, e)
			}, n.prototype.draw = function(e) {
				e.beginPath();
				for (var t = 0; t < this.commands.length; t += 1) {
					var r = this.commands[t];
					"M" === r.type ? e.moveTo(r.x, r.y) : "L" === r.type ? e.lineTo(r.x, r.y) : "C" === r.type ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y) : "Q" === r.type ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y) : "Z" === r.type && e.closePath()
				}
				this.fill && (e.fillStyle = this.fill, e.fill()), this.stroke && (e.strokeStyle = this.stroke, e.lineWidth = this.strokeWidth, e.stroke())
			}, n.prototype.toPathData = function(e) {
				function t(t) {
					return Math.round(t) === t ? "" + Math.round(t) : t.toFixed(e)
				}

				function r() {
					for (var e = "", r = 0; r < arguments.length; r += 1) {
						var n = arguments[r];
						n >= 0 && r > 0 && (e += " "), e += t(n)
					}
					return e
				}
				e = void 0 !== e ? e : 2;
				for (var n = "", o = 0; o < this.commands.length; o += 1) {
					var i = this.commands[o];
					"M" === i.type ? n += "M" + r(i.x, i.y) : "L" === i.type ? n += "L" + r(i.x, i.y) : "C" === i.type ? n += "C" + r(i.x1, i.y1, i.x2, i.y2, i.x, i.y) : "Q" === i.type ? n += "Q" + r(i.x1, i.y1, i.x, i.y) : "Z" === i.type && (n += "Z")
				}
				return n
			}, n.prototype.toSVG = function(e) {
				var t = '<path d="';
				return t += this.toPathData(e), t += '"', this.fill & "black" !== this.fill && (t += null === this.fill ? ' fill="none"' : ' fill="' + this.fill + '"'), this.stroke && (t += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), t += "/>"
			}, r.Path = n
		}, {}],
		11: [function(e, t, r) {
			"use strict";

			function n(e, t, r) {
				var n;
				for (n = 0; n < t.length; n += 1) {
					var o = t[n];
					this[o.name] = o.value
				}
				if (this.tableName = e, this.fields = t, r) {
					var i = Object.keys(r);
					for (n = 0; n < i.length; n += 1) {
						var a = i[n],
							s = r[a];
						void 0 !== this[a] && (this[a] = s)
					}
				}
			}
			var o = e("./check"),
				i = e("./types").encode,
				a = e("./types").sizeOf;
			n.prototype.sizeOf = function() {
				for (var e = 0, t = 0; t < this.fields.length; t += 1) {
					var r = this.fields[t],
						n = this[r.name];
					if (void 0 === n && (n = r.value), "function" == typeof n.sizeOf) e += n.sizeOf();
					else {
						var i = a[r.type];
						o.assert("function" == typeof i, "Could not find sizeOf function for field" + r.name), e += i(n)
					}
				}
				return e
			}, n.prototype.encode = function() {
				return i.TABLE(this)
			}, r.Table = n
		}, {
			"./check": 2,
			"./types": 26
		}],
		12: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e === t) return !0;
				if (Array.isArray(e) && Array.isArray(t)) {
					if (e.length !== t.length) return !1;
					for (var r = 0; r < e.length; r += 1)
						if (!n(e[r], t[r])) return !1;
					return !0
				}
				return !1
			}

			function o(e, t, r) {
				var n, o, i, a = [],
					s = [],
					h = O.getCard16(e, t);
				if (0 !== h) {
					var l = O.getByte(e, t + 2);
					o = t + (h + 1) * l + 2;
					var u = t + 3;
					for (n = 0; n < h + 1; n += 1) a.push(O.getOffset(e, u, l)), u += l;
					i = o + a[h]
				} else i = t + 2;
				for (n = 0; n < a.length - 1; n += 1) {
					var p = O.getBytes(e, o + a[n], o + a[n + 1]);
					r && (p = r(p)), s.push(p)
				}
				return {
					objects: s,
					startOffset: t,
					endOffset: i
				}
			}

			function i(e) {
				for (var t = "", r = 15, n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];;) {
					var o = e.parseByte(),
						i = o >> 4,
						a = 15 & o;
					if (i === r) break;
					if (t += n[i], a === r) break;
					t += n[a]
				}
				return parseFloat(t)
			}

			function a(e, t) {
				var r, n, o, a;
				if (28 === t) return r = e.parseByte(), n = e.parseByte(), r << 8 | n;
				if (29 === t) return r = e.parseByte(), n = e.parseByte(), o = e.parseByte(), a = e.parseByte(), r << 24 | n << 16 | o << 8 | a;
				if (30 === t) return i(e);
				if (t >= 32 && t <= 246) return t - 139;
				if (t >= 247 && t <= 250) return r = e.parseByte(), 256 * (t - 247) + r + 108;
				if (t >= 251 && t <= 254) return r = e.parseByte(), 256 * -(t - 251) - r - 108;
				throw new Error("Invalid b0 " + t)
			}

			function s(e) {
				for (var t = {}, r = 0; r < e.length; r += 1) {
					var n, o = e[r][0],
						i = e[r][1];
					if (n = 1 === i.length ? i[0] : i, t.hasOwnProperty(o)) throw new Error("Object " + t + " already has key " + o);
					t[o] = n
				}
				return t
			}

			function h(e, t, r) {
				t = void 0 !== t ? t : 0;
				var n = new O.Parser(e, t),
					o = [],
					i = [];
				for (r = void 0 !== r ? r : e.length; n.relativeOffset < r;) {
					var h = n.parseByte();
					h <= 21 ? (12 === h && (h = 1200 + n.parseByte()), o.push([h, i]), i = []) : i.push(a(n, h))
				}
				return s(o)
			}

			function l(e, t) {
				return t = t <= 390 ? D.cffStandardStrings[t] : e[t - 391]
			}

			function u(e, t, r) {
				for (var n = {}, o = 0; o < t.length; o += 1) {
					var i = t[o],
						a = e[i.op];
					void 0 === a && (a = void 0 !== i.value ? i.value : null), "SID" === i.type && (a = l(r, a)), n[i.name] = a
				}
				return n
			}

			function p(e, t) {
				var r = {};
				return r.formatMajor = O.getCard8(e, t), r.formatMinor = O.getCard8(e, t + 1), r.size = O.getCard8(e, t + 2), r.offsetSize = O.getCard8(e, t + 3), r.startOffset = t, r.endOffset = t + 4, r
			}

			function c(e, t) {
				var r = h(e, 0, e.byteLength);
				return u(r, F, t)
			}

			function f(e, t, r, n) {
				var o = h(e, t, r);
				return u(o, G, n)
			}

			function d(e, t, r, n) {
				var o, i, a, s = new O.Parser(e, t);
				r -= 1;
				var h = [".notdef"],
					u = s.parseCard8();
				if (0 === u)
					for (o = 0; o < r; o += 1) i = s.parseSID(), h.push(l(n, i));
				else if (1 === u)
					for (; h.length <= r;)
						for (i = s.parseSID(), a = s.parseCard8(), o = 0; o <= a; o += 1) h.push(l(n, i)), i += 1;
				else {
					if (2 !== u) throw new Error("Unknown charset format " + u);
					for (; h.length <= r;)
						for (i = s.parseSID(), a = s.parseCard16(), o = 0; o <= a; o += 1) h.push(l(n, i)), i += 1
				}
				return h
			}

			function m(e, t, r) {
				var n, o, i = {},
					a = new O.Parser(e, t),
					s = a.parseCard8();
				if (0 === s) {
					var h = a.parseCard8();
					for (n = 0; n < h; n += 1) o = a.parseCard8(), i[o] = n
				} else {
					if (1 !== s) throw new Error("Unknown encoding format " + s);
					var l = a.parseCard8();
					for (o = 1, n = 0; n < l; n += 1)
						for (var u = a.parseCard8(), p = a.parseCard8(), c = u; c <= u + p; c += 1) i[c] = o, o += 1
				}
				return new D.CffEncoding(i, r)
			}

			function g(e, t, r) {
				function n(e, t) {
					m && u.closePath(), u.moveTo(e, t), m = !0
				}

				function o() {
					var t;
					t = p.length % 2 !== 0, t && !f && (d = p.shift() + e.nominalWidthX), c += p.length >> 1, p.length = 0, f = !0
				}

				function i(r) {
					for (var v, x, _, b, w, S, T, M, C, R, E, A, P = 0; P < r.length;) {
						var L = r[P];
						switch (P += 1, L) {
							case 1:
								o();
								break;
							case 3:
								o();
								break;
							case 4:
								p.length > 1 && !f && (d = p.shift() + e.nominalWidthX, f = !0), y += p.pop(), n(g, y);
								break;
							case 5:
								for (; p.length > 0;) g += p.shift(), y += p.shift(), u.lineTo(g, y);
								break;
							case 6:
								for (; p.length > 0 && (g += p.shift(), u.lineTo(g, y), 0 !== p.length);) y += p.shift(), u.lineTo(g, y);
								break;
							case 7:
								for (; p.length > 0 && (y += p.shift(), u.lineTo(g, y), 0 !== p.length);) g += p.shift(), u.lineTo(g, y);
								break;
							case 8:
								for (; p.length > 0;) a = g + p.shift(), s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), g = h + p.shift(), y = l + p.shift(), u.curveTo(a, s, h, l, g, y);
								break;
							case 10:
								w = p.pop() + e.subrsBias, S = e.subrs[w], S && i(S);
								break;
							case 11:
								return;
							case 12:
								switch (L = r[P], P += 1, L) {
									case 35:
										a = g + p.shift(), s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), T = h + p.shift(), M = l + p.shift(), C = T + p.shift(), R = M + p.shift(), E = C + p.shift(), A = R + p.shift(), g = E + p.shift(), y = A + p.shift(), p.shift(), u.curveTo(a, s, h, l, T, M), u.curveTo(C, R, E, A, g, y);
										break;
									case 34:
										a = g + p.shift(), s = y, h = a + p.shift(), l = s + p.shift(), T = h + p.shift(), M = l, C = T + p.shift(), R = l, E = C + p.shift(), A = y, g = E + p.shift(), u.curveTo(a, s, h, l, T, M), u.curveTo(C, R, E, A, g, y);
										break;
									case 36:
										a = g + p.shift(), s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), T = h + p.shift(), M = l, C = T + p.shift(), R = l, E = C + p.shift(), A = R + p.shift(), g = E + p.shift(), u.curveTo(a, s, h, l, T, M), u.curveTo(C, R, E, A, g, y);
										break;
									case 37:
										a = g + p.shift(), s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), T = h + p.shift(), M = l + p.shift(), C = T + p.shift(), R = M + p.shift(), E = C + p.shift(), A = R + p.shift(), Math.abs(E - g) > Math.abs(A - y) ? g = E + p.shift() : y = A + p.shift(), u.curveTo(a, s, h, l, T, M), u.curveTo(C, R, E, A, g, y);
										break;
									default:
										console.log("Glyph " + t.index + ": unknown operator 1200" + L), p.length = 0
								}
								break;
							case 14:
								p.length > 0 && !f && (d = p.shift() + e.nominalWidthX, f = !0), m && (u.closePath(), m = !1);
								break;
							case 18:
								o();
								break;
							case 19:
							case 20:
								o(), P += c + 7 >> 3;
								break;
							case 21:
								p.length > 2 && !f && (d = p.shift() + e.nominalWidthX, f = !0), y += p.pop(), g += p.pop(), n(g, y);
								break;
							case 22:
								p.length > 1 && !f && (d = p.shift() + e.nominalWidthX, f = !0), g += p.pop(), n(g, y);
								break;
							case 23:
								o();
								break;
							case 24:
								for (; p.length > 2;) a = g + p.shift(), s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), g = h + p.shift(), y = l + p.shift(), u.curveTo(a, s, h, l, g, y);
								g += p.shift(), y += p.shift(), u.lineTo(g, y);
								break;
							case 25:
								for (; p.length > 6;) g += p.shift(), y += p.shift(), u.lineTo(g, y);
								a = g + p.shift(), s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), g = h + p.shift(), y = l + p.shift(), u.curveTo(a, s, h, l, g, y);
								break;
							case 26:
								for (p.length % 2 && (g += p.shift()); p.length > 0;) a = g, s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), g = h, y = l + p.shift(), u.curveTo(a, s, h, l, g, y);
								break;
							case 27:
								for (p.length % 2 && (y += p.shift()); p.length > 0;) a = g + p.shift(), s = y, h = a + p.shift(), l = s + p.shift(), g = h + p.shift(), y = l, u.curveTo(a, s, h, l, g, y);
								break;
							case 28:
								v = r[P], x = r[P + 1], p.push((v << 24 | x << 16) >> 16), P += 2;
								break;
							case 29:
								w = p.pop() + e.gsubrsBias, S = e.gsubrs[w], S && i(S);
								break;
							case 30:
								for (; p.length > 0 && (a = g, s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), g = h + p.shift(), y = l + (1 === p.length ? p.shift() : 0), u.curveTo(a, s, h, l, g, y), 0 !== p.length);) a = g + p.shift(), s = y, h = a + p.shift(), l = s + p.shift(), y = l + p.shift(), g = h + (1 === p.length ? p.shift() : 0), u.curveTo(a, s, h, l, g, y);
								break;
							case 31:
								for (; p.length > 0 && (a = g + p.shift(), s = y, h = a + p.shift(), l = s + p.shift(), y = l + p.shift(), g = h + (1 === p.length ? p.shift() : 0), u.curveTo(a, s, h, l, g, y), 0 !== p.length);) a = g, s = y + p.shift(), h = a + p.shift(), l = s + p.shift(), g = h + p.shift(), y = l + (1 === p.length ? p.shift() : 0), u.curveTo(a, s, h, l, g, y);
								break;
							default:
								L < 32 ? console.log("Glyph " + t.index + ": unknown operator " + L) : L < 247 ? p.push(L - 139) : L < 251 ? (v = r[P], P += 1, p.push(256 * (L - 247) + v + 108)) : L < 255 ? (v = r[P], P += 1, p.push(256 * -(L - 251) - v - 108)) : (v = r[P], x = r[P + 1], _ = r[P + 2], b = r[P + 3], P += 4, p.push((v << 24 | x << 16 | _ << 8 | b) / 65536))
						}
					}
				}
				var a, s, h, l, u = new k.Path,
					p = [],
					c = 0,
					f = !1,
					d = e.defaultWidthX,
					m = !1,
					g = 0,
					y = 0;
				return i(r), t.advanceWidth = d, u
			}

			function y(e) {
				var t;
				return t = e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768
			}

			function v(e, t, r) {
				r.tables.cff = {};
				var n = p(e, t),
					i = o(e, n.endOffset, O.bytesToString),
					a = o(e, i.endOffset),
					s = o(e, a.endOffset, O.bytesToString),
					h = o(e, s.endOffset);
				r.gsubrs = h.objects, r.gsubrsBias = y(r.gsubrs);
				var l = new DataView(new Uint8Array(a.objects[0]).buffer),
					u = c(l, s.objects);
				r.tables.cff.topDict = u;
				var v = t + u.private[1],
					x = f(e, v, u.private[0], s.objects);
				if (r.defaultWidthX = x.defaultWidthX, r.nominalWidthX = x.nominalWidthX, 0 !== x.subrs) {
					var _ = v + x.subrs,
						b = o(e, _);
					r.subrs = b.objects, r.subrsBias = y(r.subrs)
				} else r.subrs = [], r.subrsBias = 0;
				var w = o(e, t + u.charStrings);
				r.nGlyphs = w.objects.length;
				var S = d(e, t + u.charset, r.nGlyphs, s.objects);
				0 === u.encoding ? r.cffEncoding = new D.CffEncoding(D.cffStandardEncoding, S) : 1 === u.encoding ? r.cffEncoding = new D.CffEncoding(D.cffExpertEncoding, S) : r.cffEncoding = m(e, t + u.encoding, S), r.encoding = r.encoding || r.cffEncoding, r.glyphs = new N.GlyphSet(r);
				for (var T = 0; T < r.nGlyphs; T += 1) {
					var M = w.objects[T];
					r.glyphs.push(T, N.cffGlyphLoader(r, T, g, M))
				}
			}

			function x(e, t) {
				var r, n = D.cffStandardStrings.indexOf(e);
				return n >= 0 && (r = n), n = t.indexOf(e), n >= 0 ? r = n + D.cffStandardStrings.length : (r = D.cffStandardStrings.length + t.length, t.push(e)), r
			}

			function _() {
				return new U.Table("Header", [{
					name: "major",
					type: "Card8",
					value: 1
				}, {
					name: "minor",
					type: "Card8",
					value: 0
				}, {
					name: "hdrSize",
					type: "Card8",
					value: 4
				}, {
					name: "major",
					type: "Card8",
					value: 1
				}])
			}

			function b(e) {
				var t = new U.Table("Name INDEX", [{
					name: "names",
					type: "INDEX",
					value: []
				}]);
				t.names = [];
				for (var r = 0; r < e.length; r += 1) t.names.push({
					name: "name_" + r,
					type: "NAME",
					value: e[r]
				});
				return t
			}

			function w(e, t, r) {
				for (var o = {}, i = 0; i < e.length; i += 1) {
					var a = e[i],
						s = t[a.name];
					void 0 === s || n(s, a.value) || ("SID" === a.type && (s = x(s, r)), o[a.op] = {
						name: a.name,
						type: a.type,
						value: s
					})
				}
				return o
			}

			function S(e, t) {
				var r = new U.Table("Top DICT", [{
					name: "dict",
					type: "DICT",
					value: {}
				}]);
				return r.dict = w(F, e, t), r
			}

			function T(e) {
				var t = new U.Table("Top DICT INDEX", [{
					name: "topDicts",
					type: "INDEX",
					value: []
				}]);
				return t.topDicts = [{
					name: "topDict_0",
					type: "TABLE",
					value: e
				}], t
			}

			function M(e) {
				var t = new U.Table("String INDEX", [{
					name: "strings",
					type: "INDEX",
					value: []
				}]);
				t.strings = [];
				for (var r = 0; r < e.length; r += 1) t.strings.push({
					name: "string_" + r,
					type: "STRING",
					value: e[r]
				});
				return t
			}

			function C() {
				return new U.Table("Global Subr INDEX", [{
					name: "subrs",
					type: "INDEX",
					value: []
				}])
			}

			function R(e, t) {
				for (var r = new U.Table("Charsets", [{
						name: "format",
						type: "Card8",
						value: 0
					}]), n = 0; n < e.length; n += 1) {
					var o = e[n],
						i = x(o, t);
					r.fields.push({
						name: "glyph_" + n,
						type: "SID",
						value: i
					})
				}
				return r
			}

			function E(e) {
				var t = [],
					r = e.path;
				t.push({
					name: "width",
					type: "NUMBER",
					value: e.advanceWidth
				});
				for (var n = 0, o = 0, i = 0; i < r.commands.length; i += 1) {
					var a, s, h = r.commands[i];
					if ("Q" === h.type) {
						var l = 1 / 3,
							u = 2 / 3;
						h = {
							type: "C",
							x: h.x,
							y: h.y,
							x1: l * n + u * h.x1,
							y1: l * o + u * h.y1,
							x2: l * h.x + u * h.x1,
							y2: l * h.y + u * h.y1
						}
					}
					if ("M" === h.type) a = Math.round(h.x - n), s = Math.round(h.y - o), t.push({
						name: "dx",
						type: "NUMBER",
						value: a
					}), t.push({
						name: "dy",
						type: "NUMBER",
						value: s
					}), t.push({
						name: "rmoveto",
						type: "OP",
						value: 21
					}), n = Math.round(h.x), o = Math.round(h.y);
					else if ("L" === h.type) a = Math.round(h.x - n), s = Math.round(h.y - o), t.push({
						name: "dx",
						type: "NUMBER",
						value: a
					}), t.push({
						name: "dy",
						type: "NUMBER",
						value: s
					}), t.push({
						name: "rlineto",
						type: "OP",
						value: 5
					}), n = Math.round(h.x), o = Math.round(h.y);
					else if ("C" === h.type) {
						var p = Math.round(h.x1 - n),
							c = Math.round(h.y1 - o),
							f = Math.round(h.x2 - h.x1),
							d = Math.round(h.y2 - h.y1);
						a = Math.round(h.x - h.x2), s = Math.round(h.y - h.y2), t.push({
							name: "dx1",
							type: "NUMBER",
							value: p
						}), t.push({
							name: "dy1",
							type: "NUMBER",
							value: c
						}), t.push({
							name: "dx2",
							type: "NUMBER",
							value: f
						}), t.push({
							name: "dy2",
							type: "NUMBER",
							value: d
						}), t.push({
							name: "dx",
							type: "NUMBER",
							value: a
						}), t.push({
							name: "dy",
							type: "NUMBER",
							value: s
						}), t.push({
							name: "rrcurveto",
							type: "OP",
							value: 8
						}), n = Math.round(h.x), o = Math.round(h.y)
					}
				}
				return t.push({
					name: "endchar",
					type: "OP",
					value: 14
				}), t
			}

			function A(e) {
				for (var t = new U.Table("CharStrings INDEX", [{
						name: "charStrings",
						type: "INDEX",
						value: []
					}]), r = 0; r < e.length; r += 1) {
					var n = e.get(r),
						o = E(n);
					t.charStrings.push({
						name: n.name,
						type: "CHARSTRING",
						value: o
					})
				}
				return t
			}

			function P(e, t) {
				var r = new U.Table("Private DICT", [{
					name: "dict",
					type: "DICT",
					value: {}
				}]);
				return r.dict = w(G, e, t), r
			}

			function L(e) {
				var t = new U.Table("Private DICT INDEX", [{
					name: "privateDicts",
					type: "INDEX",
					value: []
				}]);
				return t.privateDicts = [{
					name: "privateDict_0",
					type: "TABLE",
					value: e
				}], t
			}

			function I(e, t) {
				for (var r, n = new U.Table("CFF ", [{
						name: "header",
						type: "TABLE"
					}, {
						name: "nameIndex",
						type: "TABLE"
					}, {
						name: "topDictIndex",
						type: "TABLE"
					}, {
						name: "stringIndex",
						type: "TABLE"
					}, {
						name: "globalSubrIndex",
						type: "TABLE"
					}, {
						name: "charsets",
						type: "TABLE"
					}, {
						name: "charStringsIndex",
						type: "TABLE"
					}, {
						name: "privateDictIndex",
						type: "TABLE"
					}]), o = 1 / t.unitsPerEm, i = {
						version: t.version,
						fullName: t.fullName,
						familyName: t.familyName,
						weight: t.weightName,
						fontMatrix: [o, 0, 0, o, 0, 0],
						charset: 999,
						encoding: 0,
						charStrings: 999,
						private: [0, 999]
					}, a = {}, s = [], h = 1; h < e.length; h += 1) r = e.get(h), s.push(r.name);
				var l = [];
				n.header = _(), n.nameIndex = b([t.postScriptName]);
				var u = S(i, l);
				n.topDictIndex = T(u), n.globalSubrIndex = C(), n.charsets = R(s, l), n.charStringsIndex = A(e);
				var p = P(a, l);
				n.privateDictIndex = L(p), n.stringIndex = M(l);
				var c = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf();
				return i.charset = c, i.encoding = 0, i.charStrings = i.charset + n.charsets.sizeOf(), i.private[1] = i.charStrings + n.charStringsIndex.sizeOf(), u = S(i, l), n.topDictIndex = T(u), n
			}
			var D = e("../encoding"),
				N = e("../glyphset"),
				O = e("../parse"),
				k = e("../path"),
				U = e("../table"),
				F = [{
					name: "version",
					op: 0,
					type: "SID"
				}, {
					name: "notice",
					op: 1,
					type: "SID"
				}, {
					name: "copyright",
					op: 1200,
					type: "SID"
				}, {
					name: "fullName",
					op: 2,
					type: "SID"
				}, {
					name: "familyName",
					op: 3,
					type: "SID"
				}, {
					name: "weight",
					op: 4,
					type: "SID"
				}, {
					name: "isFixedPitch",
					op: 1201,
					type: "number",
					value: 0
				}, {
					name: "italicAngle",
					op: 1202,
					type: "number",
					value: 0
				}, {
					name: "underlinePosition",
					op: 1203,
					type: "number",
					value: -100
				}, {
					name: "underlineThickness",
					op: 1204,
					type: "number",
					value: 50
				}, {
					name: "paintType",
					op: 1205,
					type: "number",
					value: 0
				}, {
					name: "charstringType",
					op: 1206,
					type: "number",
					value: 2
				}, {
					name: "fontMatrix",
					op: 1207,
					type: ["real", "real", "real", "real", "real", "real"],
					value: [.001, 0, 0, .001, 0, 0]
				}, {
					name: "uniqueId",
					op: 13,
					type: "number"
				}, {
					name: "fontBBox",
					op: 5,
					type: ["number", "number", "number", "number"],
					value: [0, 0, 0, 0]
				}, {
					name: "strokeWidth",
					op: 1208,
					type: "number",
					value: 0
				}, {
					name: "xuid",
					op: 14,
					type: [],
					value: null
				}, {
					name: "charset",
					op: 15,
					type: "offset",
					value: 0
				}, {
					name: "encoding",
					op: 16,
					type: "offset",
					value: 0
				}, {
					name: "charStrings",
					op: 17,
					type: "offset",
					value: 0
				}, {
					name: "private",
					op: 18,
					type: ["number", "offset"],
					value: [0, 0]
				}],
				G = [{
					name: "subrs",
					op: 19,
					type: "offset",
					value: 0
				}, {
					name: "defaultWidthX",
					op: 20,
					type: "number",
					value: 0
				}, {
					name: "nominalWidthX",
					op: 21,
					type: "number",
					value: 0
				}];
			r.parse = v, r.make = I
		}, {
			"../encoding": 4,
			"../glyphset": 7,
			"../parse": 9,
			"../path": 10,
			"../table": 11
		}],
		13: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r, n = {};
				n.version = h.getUShort(e, t), s.argument(0 === n.version, "cmap table version should be 0."), n.numTables = h.getUShort(e, t + 2);
				var o = -1;
				for (r = 0; r < n.numTables; r += 1) {
					var i = h.getUShort(e, t + 4 + 8 * r),
						a = h.getUShort(e, t + 4 + 8 * r + 2);
					if (3 === i && (1 === a || 0 === a)) {
						o = h.getULong(e, t + 4 + 8 * r + 4);
						break
					}
				}
				if (o === -1) return null;
				var l = new h.Parser(e, t + o);
				n.format = l.parseUShort(), s.argument(4 === n.format, "Only format 4 cmap tables are supported."), n.length = l.parseUShort(), n.language = l.parseUShort();
				var u;
				n.segCount = u = l.parseUShort() >> 1, l.skip("uShort", 3), n.glyphIndexMap = {};
				var p = new h.Parser(e, t + o + 14),
					c = new h.Parser(e, t + o + 16 + 2 * u),
					f = new h.Parser(e, t + o + 16 + 4 * u),
					d = new h.Parser(e, t + o + 16 + 6 * u),
					m = t + o + 16 + 8 * u;
				for (r = 0; r < u - 1; r += 1)
					for (var g, y = p.parseUShort(), v = c.parseUShort(), x = f.parseShort(), _ = d.parseUShort(), b = v; b <= y; b += 1) 0 !== _ ? (m = d.offset + d.relativeOffset - 2, m += _, m += 2 * (b - v), g = h.getUShort(e, m), 0 !== g && (g = g + x & 65535)) : g = b + x & 65535, n.glyphIndexMap[b] = g;
				return n
			}

			function o(e, t, r) {
				e.segments.push({
					end: t,
					start: t,
					delta: -(t - r),
					offset: 0
				})
			}

			function i(e) {
				e.segments.push({
					end: 65535,
					start: 65535,
					delta: 1,
					offset: 0
				})
			}

			function a(e) {
				var t, r = new l.Table("cmap", [{
					name: "version",
					type: "USHORT",
					value: 0
				}, {
					name: "numTables",
					type: "USHORT",
					value: 1
				}, {
					name: "platformID",
					type: "USHORT",
					value: 3
				}, {
					name: "encodingID",
					type: "USHORT",
					value: 1
				}, {
					name: "offset",
					type: "ULONG",
					value: 12
				}, {
					name: "format",
					type: "USHORT",
					value: 4
				}, {
					name: "length",
					type: "USHORT",
					value: 0
				}, {
					name: "language",
					type: "USHORT",
					value: 0
				}, {
					name: "segCountX2",
					type: "USHORT",
					value: 0
				}, {
					name: "searchRange",
					type: "USHORT",
					value: 0
				}, {
					name: "entrySelector",
					type: "USHORT",
					value: 0
				}, {
					name: "rangeShift",
					type: "USHORT",
					value: 0
				}]);
				for (r.segments = [], t = 0; t < e.length; t += 1) {
					for (var n = e.get(t), a = 0; a < n.unicodes.length; a += 1) o(r, n.unicodes[a], t);
					r.segments = r.segments.sort(function(e, t) {
						return e.start - t.start
					})
				}
				i(r);
				var s;
				s = r.segments.length, r.segCountX2 = 2 * s, r.searchRange = 2 * Math.pow(2, Math.floor(Math.log(s) / Math.log(2))), r.entrySelector = Math.log(r.searchRange / 2) / Math.log(2), r.rangeShift = r.segCountX2 - r.searchRange;
				var h = [],
					u = [],
					p = [],
					c = [],
					f = [];
				for (t = 0; t < s; t += 1) {
					var d = r.segments[t];
					h = h.concat({
						name: "end_" + t,
						type: "USHORT",
						value: d.end
					}), u = u.concat({
						name: "start_" + t,
						type: "USHORT",
						value: d.start
					}), p = p.concat({
						name: "idDelta_" + t,
						type: "SHORT",
						value: d.delta
					}), c = c.concat({
						name: "idRangeOffset_" + t,
						type: "USHORT",
						value: d.offset
					}), void 0 !== d.glyphId && (f = f.concat({
						name: "glyph_" + t,
						type: "USHORT",
						value: d.glyphId
					}))
				}
				return r.fields = r.fields.concat(h), r.fields.push({
					name: "reservedPad",
					type: "USHORT",
					value: 0
				}), r.fields = r.fields.concat(u), r.fields = r.fields.concat(p), r.fields = r.fields.concat(c), r.fields = r.fields.concat(f), r.length = 14 + 2 * h.length + 2 + 2 * u.length + 2 * p.length + 2 * c.length + 2 * f.length, r
			}
			var s = e("../check"),
				h = e("../parse"),
				l = e("../table");
			r.parse = n, r.make = a
		}, {
			"../check": 2,
			"../parse": 9,
			"../table": 11
		}],
		14: [function(e, t, r) {
			"use strict";

			function n(e, t, r, n, o) {
				var i;
				return (t & n) > 0 ? (i = e.parseByte(), 0 === (t & o) && (i = -i), i = r + i) : i = (t & o) > 0 ? r : r + e.parseShort(), i
			}

			function o(e, t, r) {
				var o = new c.Parser(t, r);
				e.numberOfContours = o.parseShort(), e.xMin = o.parseShort(), e.yMin = o.parseShort(), e.xMax = o.parseShort(), e.yMax = o.parseShort();
				var i, a;
				if (e.numberOfContours > 0) {
					var s, h = e.endPointIndices = [];
					for (s = 0; s < e.numberOfContours; s += 1) h.push(o.parseUShort());
					for (e.instructionLength = o.parseUShort(), e.instructions = [], s = 0; s < e.instructionLength; s += 1) e.instructions.push(o.parseByte());
					var l = h[h.length - 1] + 1;
					for (i = [], s = 0; s < l; s += 1)
						if (a = o.parseByte(), i.push(a), (8 & a) > 0)
							for (var p = o.parseByte(), f = 0; f < p; f += 1) i.push(a), s += 1;
					if (u.argument(i.length === l, "Bad flags."), h.length > 0) {
						var d, m = [];
						if (l > 0) {
							for (s = 0; s < l; s += 1) a = i[s], d = {}, d.onCurve = !!(1 & a), d.lastPointOfContour = h.indexOf(s) >= 0, m.push(d);
							var g = 0;
							for (s = 0; s < l; s += 1) a = i[s], d = m[s], d.x = n(o, a, g, 2, 16), g = d.x;
							var y = 0;
							for (s = 0; s < l; s += 1) a = i[s], d = m[s], d.y = n(o, a, y, 4, 32), y = d.y
						}
						e.points = m
					} else e.points = []
				} else if (0 === e.numberOfContours) e.points = [];
				else {
					e.isComposite = !0, e.points = [], e.components = [];
					for (var v = !0; v;) {
						i = o.parseUShort();
						var x = {
							glyphIndex: o.parseUShort(),
							xScale: 1,
							scale01: 0,
							scale10: 0,
							yScale: 1,
							dx: 0,
							dy: 0
						};
						(1 & i) > 0 ? (x.dx = o.parseShort(), x.dy = o.parseShort()) : (x.dx = o.parseChar(), x.dy = o.parseChar()), (8 & i) > 0 ? x.xScale = x.yScale = o.parseF2Dot14() : (64 & i) > 0 ? (x.xScale = o.parseF2Dot14(), x.yScale = o.parseF2Dot14()) : (128 & i) > 0 && (x.xScale = o.parseF2Dot14(), x.scale01 = o.parseF2Dot14(), x.scale10 = o.parseF2Dot14(), x.yScale = o.parseF2Dot14()), e.components.push(x), v = !!(32 & i)
					}
				}
			}

			function i(e, t) {
				for (var r = [], n = 0; n < e.length; n += 1) {
					var o = e[n],
						i = {
							x: t.xScale * o.x + t.scale01 * o.y + t.dx,
							y: t.scale10 * o.x + t.yScale * o.y + t.dy,
							onCurve: o.onCurve,
							lastPointOfContour: o.lastPointOfContour
						};
					r.push(i)
				}
				return r
			}

			function a(e) {
				for (var t = [], r = [], n = 0; n < e.length; n += 1) {
					var o = e[n];
					r.push(o), o.lastPointOfContour && (t.push(r), r = [])
				}
				return u.argument(0 === r.length, "There are still points left in the current contour."), t
			}

			function s(e) {
				var t = new f.Path;
				if (!e) return t;
				for (var r = a(e), n = 0; n < r.length; n += 1) {
					var o, i, s = r[n],
						h = s[0],
						l = s[s.length - 1];
					h.onCurve ? (o = null, i = !0) : (h = l.onCurve ? l : {
						x: (h.x + l.x) / 2,
						y: (h.y + l.y) / 2
					}, o = h, i = !1), t.moveTo(h.x, h.y);
					for (var u = i ? 1 : 0; u < s.length; u += 1) {
						var p = s[u],
							c = 0 === u ? h : s[u - 1];
						if (c.onCurve && p.onCurve) t.lineTo(p.x, p.y);
						else if (c.onCurve && !p.onCurve) o = p;
						else if (c.onCurve || p.onCurve) {
							if (c.onCurve || !p.onCurve) throw new Error("Invalid state.");
							t.quadraticCurveTo(o.x, o.y, p.x, p.y), o = null
						} else {
							var d = {
								x: (c.x + p.x) / 2,
								y: (c.y + p.y) / 2
							};
							t.quadraticCurveTo(c.x, c.y, d.x, d.y), o = p
						}
					}
					h !== l && (o ? t.quadraticCurveTo(o.x, o.y, h.x, h.y) : t.lineTo(h.x, h.y))
				}
				return t.closePath(), t
			}

			function h(e, t) {
				if (t.isComposite)
					for (var r = 0; r < t.components.length; r += 1) {
						var n = t.components[r],
							o = e.get(n.glyphIndex);
						if (o.points) {
							var a = i(o.points, n);
							t.points = t.points.concat(a)
						}
					}
				return s(t.points)
			}

			function l(e, t, r, n) {
				var i, a = new p.GlyphSet(n);
				for (i = 0; i < r.length - 1; i += 1) {
					var s = r[i],
						l = r[i + 1];
					s !== l ? a.push(i, p.ttfGlyphLoader(n, i, o, e, t + s, h)) : a.push(i, p.glyphLoader(n, i))
				}
				return a
			}
			var u = e("../check"),
				p = e("../glyphset"),
				c = e("../parse"),
				f = e("../path");
			r.parse = l
		}, {
			"../check": 2,
			"../glyphset": 7,
			"../parse": 9,
			"../path": 10
		}],
		15: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				for (var r = new u.Parser(e, t), n = r.parseUShort(), o = [], i = 0; i < n; i++) o[r.parseTag()] = {
					offset: r.parseUShort()
				};
				return o
			}

			function o(e, t) {
				var r = new u.Parser(e, t),
					n = r.parseUShort(),
					o = r.parseUShort();
				if (1 === n) return r.parseUShortList(o);
				if (2 === n) {
					for (var i = []; o--;)
						for (var a = r.parseUShort(), s = r.parseUShort(), h = r.parseUShort(), l = a; l <= s; l++) i[h++] = l;
					return i
				}
			}

			function i(e, t) {
				var r = new u.Parser(e, t),
					n = r.parseUShort();
				if (1 === n) {
					var o = r.parseUShort(),
						i = r.parseUShort(),
						a = r.parseUShortList(i);
					return function(e) {
						return a[e - o] || 0
					}
				}
				if (2 === n) {
					for (var s = r.parseUShort(), h = [], l = [], p = [], c = 0; c < s; c++) h[c] = r.parseUShort(), l[c] = r.parseUShort(), p[c] = r.parseUShort();
					return function(e) {
						for (var t = 0, r = h.length - 1; t < r;) {
							var n = t + r + 1 >> 1;
							e < h[n] ? r = n - 1 : t = n
						}
						return h[t] <= e && e <= l[t] ? p[t] || 0 : 0
					}
				}
			}

			function a(e, t) {
				var r, n, a = new u.Parser(e, t),
					s = a.parseUShort(),
					h = a.parseUShort(),
					l = o(e, t + h),
					p = a.parseUShort(),
					c = a.parseUShort();
				if (4 === p && 0 === c) {
					var f = {};
					if (1 === s) {
						for (var d = a.parseUShort(), m = [], g = a.parseOffset16List(d), y = 0; y < d; y++) {
							var v = g[y],
								x = f[v];
							if (!x) {
								x = {}, a.relativeOffset = v;
								for (var _ = a.parseUShort(); _--;) {
									var b = a.parseUShort();
									p && (r = a.parseShort()), c && (n = a.parseShort()), x[b] = r
								}
							}
							m[l[y]] = x
						}
						return function(e, t) {
							var r = m[e];
							if (r) return r[t]
						}
					}
					if (2 === s) {
						for (var w = a.parseUShort(), S = a.parseUShort(), T = a.parseUShort(), M = a.parseUShort(), C = i(e, t + w), R = i(e, t + S), E = [], A = 0; A < T; A++)
							for (var P = E[A] = [], L = 0; L < M; L++) p && (r = a.parseShort()), c && (n = a.parseShort()), P[L] = r;
						var I = {};
						for (A = 0; A < l.length; A++) I[l[A]] = 1;
						return function(e, t) {
							if (I[e]) {
								var r = C(e),
									n = R(t),
									o = E[r];
								return o ? o[n] : void 0
							}
						}
					}
				}
			}

			function s(e, t) {
				var r = new u.Parser(e, t),
					n = r.parseUShort(),
					o = r.parseUShort(),
					i = 16 & o,
					s = r.parseUShort(),
					h = r.parseOffset16List(s),
					l = {
						lookupType: n,
						lookupFlag: o,
						markFilteringSet: i ? r.parseUShort() : -1
					};
				if (2 === n) {
					for (var p = [], c = 0; c < s; c++) p.push(a(e, t + h[c]));
					l.getKerningValue = function(e, t) {
						for (var r = p.length; r--;) {
							var n = p[r](e, t);
							if (void 0 !== n) return n
						}
						return 0
					}
				}
				return l
			}

			function h(e, t, r) {
				var o = new u.Parser(e, t),
					i = o.parseFixed();
				l.argument(1 === i, "Unsupported GPOS table version."), n(e, t + o.parseUShort()), n(e, t + o.parseUShort());
				var a = o.parseUShort();
				o.relativeOffset = a;
				for (var h = o.parseUShort(), p = o.parseOffset16List(h), c = t + a, f = 0; f < h; f++) {
					var d = s(e, c + p[f]);
					2 !== d.lookupType || r.getGposKerningValue || (r.getGposKerningValue = d.getKerningValue)
				}
			}
			var l = e("../check"),
				u = e("../parse");
			r.parse = h
		}, {
			"../check": 2,
			"../parse": 9
		}],
		16: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = {},
					n = new a.Parser(e, t);
				return r.version = n.parseVersion(), r.fontRevision = Math.round(1e3 * n.parseFixed()) / 1e3, r.checkSumAdjustment = n.parseULong(), r.magicNumber = n.parseULong(), i.argument(1594834165 === r.magicNumber, "Font header has wrong magic number."), r.flags = n.parseUShort(), r.unitsPerEm = n.parseUShort(), r.created = n.parseLongDateTime(), r.modified = n.parseLongDateTime(), r.xMin = n.parseShort(), r.yMin = n.parseShort(), r.xMax = n.parseShort(), r.yMax = n.parseShort(), r.macStyle = n.parseUShort(), r.lowestRecPPEM = n.parseUShort(), r.fontDirectionHint = n.parseShort(), r.indexToLocFormat = n.parseShort(), r.glyphDataFormat = n.parseShort(), r
			}

			function o(e) {
				return new s.Table("head", [{
					name: "version",
					type: "FIXED",
					value: 65536
				}, {
					name: "fontRevision",
					type: "FIXED",
					value: 65536
				}, {
					name: "checkSumAdjustment",
					type: "ULONG",
					value: 0
				}, {
					name: "magicNumber",
					type: "ULONG",
					value: 1594834165
				}, {
					name: "flags",
					type: "USHORT",
					value: 0
				}, {
					name: "unitsPerEm",
					type: "USHORT",
					value: 1e3
				}, {
					name: "created",
					type: "LONGDATETIME",
					value: 0
				}, {
					name: "modified",
					type: "LONGDATETIME",
					value: 0
				}, {
					name: "xMin",
					type: "SHORT",
					value: 0
				}, {
					name: "yMin",
					type: "SHORT",
					value: 0
				}, {
					name: "xMax",
					type: "SHORT",
					value: 0
				}, {
					name: "yMax",
					type: "SHORT",
					value: 0
				}, {
					name: "macStyle",
					type: "USHORT",
					value: 0
				}, {
					name: "lowestRecPPEM",
					type: "USHORT",
					value: 0
				}, {
					name: "fontDirectionHint",
					type: "SHORT",
					value: 2
				}, {
					name: "indexToLocFormat",
					type: "SHORT",
					value: 0
				}, {
					name: "glyphDataFormat",
					type: "SHORT",
					value: 0
				}], e)
			}
			var i = e("../check"),
				a = e("../parse"),
				s = e("../table");
			r.parse = n, r.make = o
		}, {
			"../check": 2,
			"../parse": 9,
			"../table": 11
		}],
		17: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = {},
					n = new i.Parser(e, t);
				return r.version = n.parseVersion(), r.ascender = n.parseShort(), r.descender = n.parseShort(), r.lineGap = n.parseShort(), r.advanceWidthMax = n.parseUShort(), r.minLeftSideBearing = n.parseShort(), r.minRightSideBearing = n.parseShort(), r.xMaxExtent = n.parseShort(), r.caretSlopeRise = n.parseShort(), r.caretSlopeRun = n.parseShort(), r.caretOffset = n.parseShort(), n.relativeOffset += 8, r.metricDataFormat = n.parseShort(), r.numberOfHMetrics = n.parseUShort(), r
			}

			function o(e) {
				return new a.Table("hhea", [{
					name: "version",
					type: "FIXED",
					value: 65536
				}, {
					name: "ascender",
					type: "FWORD",
					value: 0
				}, {
					name: "descender",
					type: "FWORD",
					value: 0
				}, {
					name: "lineGap",
					type: "FWORD",
					value: 0
				}, {
					name: "advanceWidthMax",
					type: "UFWORD",
					value: 0
				}, {
					name: "minLeftSideBearing",
					type: "FWORD",
					value: 0
				}, {
					name: "minRightSideBearing",
					type: "FWORD",
					value: 0
				}, {
					name: "xMaxExtent",
					type: "FWORD",
					value: 0
				}, {
					name: "caretSlopeRise",
					type: "SHORT",
					value: 1
				}, {
					name: "caretSlopeRun",
					type: "SHORT",
					value: 0
				}, {
					name: "caretOffset",
					type: "SHORT",
					value: 0
				}, {
					name: "reserved1",
					type: "SHORT",
					value: 0
				}, {
					name: "reserved2",
					type: "SHORT",
					value: 0
				}, {
					name: "reserved3",
					type: "SHORT",
					value: 0
				}, {
					name: "reserved4",
					type: "SHORT",
					value: 0
				}, {
					name: "metricDataFormat",
					type: "SHORT",
					value: 0
				}, {
					name: "numberOfHMetrics",
					type: "USHORT",
					value: 0
				}], e)
			}
			var i = e("../parse"),
				a = e("../table");
			r.parse = n, r.make = o
		}, {
			"../parse": 9,
			"../table": 11
		}],
		18: [function(e, t, r) {
			"use strict";

			function n(e, t, r, n, o) {
				for (var a, s, h = new i.Parser(e, t), l = 0; l < n; l += 1) {
					l < r && (a = h.parseUShort(), s = h.parseShort());
					var u = o.get(l);
					u.advanceWidth = a, u.leftSideBearing = s
				}
			}

			function o(e) {
				for (var t = new a.Table("hmtx", []), r = 0; r < e.length; r += 1) {
					var n = e.get(r),
						o = n.advanceWidth || 0,
						i = n.leftSideBearing || 0;
					t.fields.push({
						name: "advanceWidth_" + r,
						type: "USHORT",
						value: o
					}), t.fields.push({
						name: "leftSideBearing_" + r,
						type: "SHORT",
						value: i
					})
				}
				return t
			}
			var i = e("../parse"),
				a = e("../table");
			r.parse = n, r.make = o
		}, {
			"../parse": 9,
			"../table": 11
		}],
		19: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = {},
					n = new i.Parser(e, t),
					a = n.parseUShort();
				o.argument(0 === a, "Unsupported kern table version."), n.skip("uShort", 1);
				var s = n.parseUShort();
				o.argument(0 === s, "Unsupported kern sub-table version."), n.skip("uShort", 2);
				var h = n.parseUShort();
				n.skip("uShort", 3);
				for (var l = 0; l < h; l += 1) {
					var u = n.parseUShort(),
						p = n.parseUShort(),
						c = n.parseShort();
					r[u + "," + p] = c
				}
				return r
			}
			var o = e("../check"),
				i = e("../parse");
			r.parse = n
		}, {
			"../check": 2,
			"../parse": 9
		}],
		20: [function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				for (var i = new o.Parser(e, t), a = n ? i.parseUShort : i.parseULong, s = [], h = 0; h < r + 1; h += 1) {
					var l = a.call(i);
					n && (l *= 2), s.push(l)
				}
				return s
			}
			var o = e("../parse");
			r.parse = n
		}, {
			"../parse": 9
		}],
		21: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = {},
					n = new i.Parser(e, t);
				return r.version = n.parseVersion(), r.numGlyphs = n.parseUShort(), 1 === r.version && (r.maxPoints = n.parseUShort(), r.maxContours = n.parseUShort(), r.maxCompositePoints = n.parseUShort(), r.maxCompositeContours = n.parseUShort(), r.maxZones = n.parseUShort(), r.maxTwilightPoints = n.parseUShort(), r.maxStorage = n.parseUShort(), r.maxFunctionDefs = n.parseUShort(), r.maxInstructionDefs = n.parseUShort(), r.maxStackElements = n.parseUShort(), r.maxSizeOfInstructions = n.parseUShort(), r.maxComponentElements = n.parseUShort(), r.maxComponentDepth = n.parseUShort()), r
			}

			function o(e) {
				return new a.Table("maxp", [{
					name: "version",
					type: "FIXED",
					value: 20480
				}, {
					name: "numGlyphs",
					type: "USHORT",
					value: e
				}])
			}
			var i = e("../parse"),
				a = e("../table");
			r.parse = n, r.make = o
		}, {
			"../parse": 9,
			"../table": 11
		}],
		22: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = {},
					n = new l.Parser(e, t);
				r.format = n.parseUShort();
				for (var o = n.parseUShort(), i = n.offset + n.parseUShort(), a = 0, s = 0; s < o; s++) {
					var h = n.parseUShort(),
						u = n.parseUShort(),
						c = n.parseUShort(),
						f = n.parseUShort(),
						d = p[f],
						m = n.parseUShort(),
						g = n.parseUShort();
					if (3 === h && 1 === u && 1033 === c) {
						for (var y = [], v = m / 2, x = 0; x < v; x++, g += 2) y[x] = l.getShort(e, i + g);
						var _ = String.fromCharCode.apply(null, y);
						d ? r[d] = _ : (a++, r["unknown" + a] = _)
					}
				}
				return 1 === r.format && (r.langTagCount = n.parseUShort()), r
			}

			function o(e, t, r, n, o, i) {
				return new u.Table("NameRecord", [{
					name: "platformID",
					type: "USHORT",
					value: e
				}, {
					name: "encodingID",
					type: "USHORT",
					value: t
				}, {
					name: "languageID",
					type: "USHORT",
					value: r
				}, {
					name: "nameID",
					type: "USHORT",
					value: n
				}, {
					name: "length",
					type: "USHORT",
					value: o
				}, {
					name: "offset",
					type: "USHORT",
					value: i
				}])
			}

			function i(e, t, r, n) {
				var i = h.STRING(r);
				return e.records.push(o(1, 0, 0, t, i.length, n)), e.strings.push(i), n += i.length
			}

			function a(e, t, r, n) {
				var i = h.UTF16(r);
				return e.records.push(o(3, 1, 1033, t, i.length, n)), e.strings.push(i), n += i.length
			}

			function s(e) {
				var t = new u.Table("name", [{
					name: "format",
					type: "USHORT",
					value: 0
				}, {
					name: "count",
					type: "USHORT",
					value: 0
				}, {
					name: "stringOffset",
					type: "USHORT",
					value: 0
				}]);
				t.records = [], t.strings = [];
				var r, n, o = 0;
				for (r = 0; r < p.length; r += 1) void 0 !== e[p[r]] && (n = e[p[r]], o = i(t, r, n, o));
				for (r = 0; r < p.length; r += 1) void 0 !== e[p[r]] && (n = e[p[r]], o = a(t, r, n, o));
				for (t.count = t.records.length, t.stringOffset = 6 + 12 * t.count, r = 0; r < t.records.length; r += 1) t.fields.push({
					name: "record_" + r,
					type: "TABLE",
					value: t.records[r]
				});
				for (r = 0; r < t.strings.length; r += 1) t.fields.push({
					name: "string_" + r,
					type: "LITERAL",
					value: t.strings[r]
				});
				return t
			}
			var h = e("../types").encode,
				l = e("../parse"),
				u = e("../table"),
				p = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "licence", "licenceURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"];
			r.parse = n, r.make = s
		}, {
			"../parse": 9,
			"../table": 11,
			"../types": 26
		}],
		23: [function(e, t, r) {
			"use strict";

			function n(e) {
				for (var t = 0; t < h.length; t += 1) {
					var r = h[t];
					if (e >= r.begin && e < r.end) return t
				}
				return -1
			}

			function o(e, t) {
				var r = {},
					n = new a.Parser(e, t);
				r.version = n.parseUShort(), r.xAvgCharWidth = n.parseShort(), r.usWeightClass = n.parseUShort(), r.usWidthClass = n.parseUShort(), r.fsType = n.parseUShort(), r.ySubscriptXSize = n.parseShort(), r.ySubscriptYSize = n.parseShort(), r.ySubscriptXOffset = n.parseShort(), r.ySubscriptYOffset = n.parseShort(), r.ySuperscriptXSize = n.parseShort(), r.ySuperscriptYSize = n.parseShort(), r.ySuperscriptXOffset = n.parseShort(), r.ySuperscriptYOffset = n.parseShort(), r.yStrikeoutSize = n.parseShort(), r.yStrikeoutPosition = n.parseShort(), r.sFamilyClass = n.parseShort(), r.panose = [];
				for (var o = 0; o < 10; o++) r.panose[o] = n.parseByte();
				return r.ulUnicodeRange1 = n.parseULong(), r.ulUnicodeRange2 = n.parseULong(), r.ulUnicodeRange3 = n.parseULong(), r.ulUnicodeRange4 = n.parseULong(), r.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte()), r.fsSelection = n.parseUShort(), r.usFirstCharIndex = n.parseUShort(), r.usLastCharIndex = n.parseUShort(), r.sTypoAscender = n.parseShort(), r.sTypoDescender = n.parseShort(), r.sTypoLineGap = n.parseShort(), r.usWinAscent = n.parseUShort(), r.usWinDescent = n.parseUShort(), r.version >= 1 && (r.ulCodePageRange1 = n.parseULong(), r.ulCodePageRange2 = n.parseULong()), r.version >= 2 && (r.sxHeight = n.parseShort(), r.sCapHeight = n.parseShort(), r.usDefaultChar = n.parseUShort(), r.usBreakChar = n.parseUShort(), r.usMaxContent = n.parseUShort()), r
			}

			function i(e) {
				return new s.Table("OS/2", [{
					name: "version",
					type: "USHORT",
					value: 3
				}, {
					name: "xAvgCharWidth",
					type: "SHORT",
					value: 0
				}, {
					name: "usWeightClass",
					type: "USHORT",
					value: 0
				}, {
					name: "usWidthClass",
					type: "USHORT",
					value: 0
				}, {
					name: "fsType",
					type: "USHORT",
					value: 0
				}, {
					name: "ySubscriptXSize",
					type: "SHORT",
					value: 650
				}, {
					name: "ySubscriptYSize",
					type: "SHORT",
					value: 699
				}, {
					name: "ySubscriptXOffset",
					type: "SHORT",
					value: 0
				}, {
					name: "ySubscriptYOffset",
					type: "SHORT",
					value: 140
				}, {
					name: "ySuperscriptXSize",
					type: "SHORT",
					value: 650
				}, {
					name: "ySuperscriptYSize",
					type: "SHORT",
					value: 699
				}, {
					name: "ySuperscriptXOffset",
					type: "SHORT",
					value: 0
				}, {
					name: "ySuperscriptYOffset",
					type: "SHORT",
					value: 479
				}, {
					name: "yStrikeoutSize",
					type: "SHORT",
					value: 49
				}, {
					name: "yStrikeoutPosition",
					type: "SHORT",
					value: 258
				}, {
					name: "sFamilyClass",
					type: "SHORT",
					value: 0
				}, {
					name: "bFamilyType",
					type: "BYTE",
					value: 0
				}, {
					name: "bSerifStyle",
					type: "BYTE",
					value: 0
				}, {
					name: "bWeight",
					type: "BYTE",
					value: 0
				}, {
					name: "bProportion",
					type: "BYTE",
					value: 0
				}, {
					name: "bContrast",
					type: "BYTE",
					value: 0
				}, {
					name: "bStrokeVariation",
					type: "BYTE",
					value: 0
				}, {
					name: "bArmStyle",
					type: "BYTE",
					value: 0
				}, {
					name: "bLetterform",
					type: "BYTE",
					value: 0
				}, {
					name: "bMidline",
					type: "BYTE",
					value: 0
				}, {
					name: "bXHeight",
					type: "BYTE",
					value: 0
				}, {
					name: "ulUnicodeRange1",
					type: "ULONG",
					value: 0
				}, {
					name: "ulUnicodeRange2",
					type: "ULONG",
					value: 0
				}, {
					name: "ulUnicodeRange3",
					type: "ULONG",
					value: 0
				}, {
					name: "ulUnicodeRange4",
					type: "ULONG",
					value: 0
				}, {
					name: "achVendID",
					type: "CHARARRAY",
					value: "XXXX"
				}, {
					name: "fsSelection",
					type: "USHORT",
					value: 0
				}, {
					name: "usFirstCharIndex",
					type: "USHORT",
					value: 0
				}, {
					name: "usLastCharIndex",
					type: "USHORT",
					value: 0
				}, {
					name: "sTypoAscender",
					type: "SHORT",
					value: 0
				}, {
					name: "sTypoDescender",
					type: "SHORT",
					value: 0
				}, {
					name: "sTypoLineGap",
					type: "SHORT",
					value: 0
				}, {
					name: "usWinAscent",
					type: "USHORT",
					value: 0
				}, {
					name: "usWinDescent",
					type: "USHORT",
					value: 0
				}, {
					name: "ulCodePageRange1",
					type: "ULONG",
					value: 0
				}, {
					name: "ulCodePageRange2",
					type: "ULONG",
					value: 0
				}, {
					name: "sxHeight",
					type: "SHORT",
					value: 0
				}, {
					name: "sCapHeight",
					type: "SHORT",
					value: 0
				}, {
					name: "usDefaultChar",
					type: "USHORT",
					value: 0
				}, {
					name: "usBreakChar",
					type: "USHORT",
					value: 0
				}, {
					name: "usMaxContext",
					type: "USHORT",
					value: 0
				}], e)
			}
			var a = e("../parse"),
				s = e("../table"),
				h = [{
					begin: 0,
					end: 127
				}, {
					begin: 128,
					end: 255
				}, {
					begin: 256,
					end: 383
				}, {
					begin: 384,
					end: 591
				}, {
					begin: 592,
					end: 687
				}, {
					begin: 688,
					end: 767
				}, {
					begin: 768,
					end: 879
				}, {
					begin: 880,
					end: 1023
				}, {
					begin: 11392,
					end: 11519
				}, {
					begin: 1024,
					end: 1279
				}, {
					begin: 1328,
					end: 1423
				}, {
					begin: 1424,
					end: 1535
				}, {
					begin: 42240,
					end: 42559
				}, {
					begin: 1536,
					end: 1791
				}, {
					begin: 1984,
					end: 2047
				}, {
					begin: 2304,
					end: 2431
				}, {
					begin: 2432,
					end: 2559
				}, {
					begin: 2560,
					end: 2687
				}, {
					begin: 2688,
					end: 2815
				}, {
					begin: 2816,
					end: 2943
				}, {
					begin: 2944,
					end: 3071
				}, {
					begin: 3072,
					end: 3199
				}, {
					begin: 3200,
					end: 3327
				}, {
					begin: 3328,
					end: 3455
				}, {
					begin: 3584,
					end: 3711
				}, {
					begin: 3712,
					end: 3839
				}, {
					begin: 4256,
					end: 4351
				}, {
					begin: 6912,
					end: 7039
				}, {
					begin: 4352,
					end: 4607
				}, {
					begin: 7680,
					end: 7935
				}, {
					begin: 7936,
					end: 8191
				}, {
					begin: 8192,
					end: 8303
				}, {
					begin: 8304,
					end: 8351
				}, {
					begin: 8352,
					end: 8399
				}, {
					begin: 8400,
					end: 8447
				}, {
					begin: 8448,
					end: 8527
				}, {
					begin: 8528,
					end: 8591
				}, {
					begin: 8592,
					end: 8703
				}, {
					begin: 8704,
					end: 8959
				}, {
					begin: 8960,
					end: 9215
				}, {
					begin: 9216,
					end: 9279
				}, {
					begin: 9280,
					end: 9311
				}, {
					begin: 9312,
					end: 9471
				}, {
					begin: 9472,
					end: 9599
				}, {
					begin: 9600,
					end: 9631
				}, {
					begin: 9632,
					end: 9727
				}, {
					begin: 9728,
					end: 9983
				}, {
					begin: 9984,
					end: 10175
				}, {
					begin: 12288,
					end: 12351
				}, {
					begin: 12352,
					end: 12447
				}, {
					begin: 12448,
					end: 12543
				}, {
					begin: 12544,
					end: 12591
				}, {
					begin: 12592,
					end: 12687
				}, {
					begin: 43072,
					end: 43135
				}, {
					begin: 12800,
					end: 13055
				}, {
					begin: 13056,
					end: 13311
				}, {
					begin: 44032,
					end: 55215
				}, {
					begin: 55296,
					end: 57343
				}, {
					begin: 67840,
					end: 67871
				}, {
					begin: 19968,
					end: 40959
				}, {
					begin: 57344,
					end: 63743
				}, {
					begin: 12736,
					end: 12783
				}, {
					begin: 64256,
					end: 64335
				}, {
					begin: 64336,
					end: 65023
				}, {
					begin: 65056,
					end: 65071
				}, {
					begin: 65040,
					end: 65055
				}, {
					begin: 65104,
					end: 65135
				}, {
					begin: 65136,
					end: 65279
				}, {
					begin: 65280,
					end: 65519
				}, {
					begin: 65520,
					end: 65535
				}, {
					begin: 3840,
					end: 4095
				}, {
					begin: 1792,
					end: 1871
				}, {
					begin: 1920,
					end: 1983
				}, {
					begin: 3456,
					end: 3583
				}, {
					begin: 4096,
					end: 4255
				}, {
					begin: 4608,
					end: 4991
				}, {
					begin: 5024,
					end: 5119
				}, {
					begin: 5120,
					end: 5759
				}, {
					begin: 5760,
					end: 5791
				}, {
					begin: 5792,
					end: 5887
				}, {
					begin: 6016,
					end: 6143
				}, {
					begin: 6144,
					end: 6319
				}, {
					begin: 10240,
					end: 10495
				}, {
					begin: 40960,
					end: 42127
				}, {
					begin: 5888,
					end: 5919
				}, {
					begin: 66304,
					end: 66351
				}, {
					begin: 66352,
					end: 66383
				}, {
					begin: 66560,
					end: 66639
				}, {
					begin: 118784,
					end: 119039
				}, {
					begin: 119808,
					end: 120831
				}, {
					begin: 1044480,
					end: 1048573
				}, {
					begin: 65024,
					end: 65039
				}, {
					begin: 917504,
					end: 917631
				}, {
					begin: 6400,
					end: 6479
				}, {
					begin: 6480,
					end: 6527
				}, {
					begin: 6528,
					end: 6623
				}, {
					begin: 6656,
					end: 6687
				}, {
					begin: 11264,
					end: 11359
				}, {
					begin: 11568,
					end: 11647
				}, {
					begin: 19904,
					end: 19967
				}, {
					begin: 43008,
					end: 43055
				}, {
					begin: 65536,
					end: 65663
				}, {
					begin: 65856,
					end: 65935
				}, {
					begin: 66432,
					end: 66463
				}, {
					begin: 66464,
					end: 66527
				}, {
					begin: 66640,
					end: 66687
				}, {
					begin: 66688,
					end: 66735
				}, {
					begin: 67584,
					end: 67647
				}, {
					begin: 68096,
					end: 68191
				}, {
					begin: 119552,
					end: 119647
				}, {
					begin: 73728,
					end: 74751
				}, {
					begin: 119648,
					end: 119679
				}, {
					begin: 7040,
					end: 7103
				}, {
					begin: 7168,
					end: 7247
				}, {
					begin: 7248,
					end: 7295
				}, {
					begin: 43136,
					end: 43231
				}, {
					begin: 43264,
					end: 43311
				}, {
					begin: 43312,
					end: 43359
				}, {
					begin: 43520,
					end: 43615
				}, {
					begin: 65936,
					end: 65999
				}, {
					begin: 66e3,
					end: 66047
				}, {
					begin: 66208,
					end: 66271
				}, {
					begin: 127024,
					end: 127135
				}];
			r.unicodeRanges = h, r.getUnicodeRange = n, r.parse = o, r.make = i
		}, {
			"../parse": 9,
			"../table": 11
		}],
		24: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r, n = {},
					o = new a.Parser(e, t);
				switch (n.version = o.parseVersion(), n.italicAngle = o.parseFixed(), n.underlinePosition = o.parseShort(), n.underlineThickness = o.parseShort(), n.isFixedPitch = o.parseULong(), n.minMemType42 = o.parseULong(), n.maxMemType42 = o.parseULong(), n.minMemType1 = o.parseULong(), n.maxMemType1 = o.parseULong(), n.version) {
					case 1:
						n.names = i.standardNames.slice();
						break;
					case 2:
						for (n.numberOfGlyphs = o.parseUShort(), n.glyphNameIndex = new Array(n.numberOfGlyphs), r = 0; r < n.numberOfGlyphs; r++) n.glyphNameIndex[r] = o.parseUShort();
						for (n.names = [], r = 0; r < n.numberOfGlyphs; r++)
							if (n.glyphNameIndex[r] >= i.standardNames.length) {
								var s = o.parseChar();
								n.names.push(o.parseString(s))
							}
						break;
					case 2.5:
						for (n.numberOfGlyphs = o.parseUShort(), n.offset = new Array(n.numberOfGlyphs), r = 0; r < n.numberOfGlyphs; r++) n.offset[r] = o.parseChar()
				}
				return n
			}

			function o() {
				return new s.Table("post", [{
					name: "version",
					type: "FIXED",
					value: 196608
				}, {
					name: "italicAngle",
					type: "FIXED",
					value: 0
				}, {
					name: "underlinePosition",
					type: "FWORD",
					value: 0
				}, {
					name: "underlineThickness",
					type: "FWORD",
					value: 0
				}, {
					name: "isFixedPitch",
					type: "ULONG",
					value: 0
				}, {
					name: "minMemType42",
					type: "ULONG",
					value: 0
				}, {
					name: "maxMemType42",
					type: "ULONG",
					value: 0
				}, {
					name: "minMemType1",
					type: "ULONG",
					value: 0
				}, {
					name: "maxMemType1",
					type: "ULONG",
					value: 0
				}])
			}
			var i = e("../encoding"),
				a = e("../parse"),
				s = e("../table");
			r.parse = n, r.make = o
		}, {
			"../encoding": 4,
			"../parse": 9,
			"../table": 11
		}],
		25: [function(e, t, r) {
			"use strict";

			function n(e) {
				return Math.log(e) / Math.log(2) | 0
			}

			function o(e) {
				for (; e.length % 4 !== 0;) e.push(0);
				for (var t = 0, r = 0; r < e.length; r += 4) t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];
				return t %= Math.pow(2, 32)
			}

			function i(e, t, r, n) {
				return new p.Table("Table Record", [{
					name: "tag",
					type: "TAG",
					value: void 0 !== e ? e : ""
				}, {
					name: "checkSum",
					type: "ULONG",
					value: void 0 !== t ? t : 0
				}, {
					name: "offset",
					type: "ULONG",
					value: void 0 !== r ? r : 0
				}, {
					name: "length",
					type: "ULONG",
					value: void 0 !== n ? n : 0
				}])
			}

			function a(e) {
				var t = new p.Table("sfnt", [{
					name: "version",
					type: "TAG",
					value: "OTTO"
				}, {
					name: "numTables",
					type: "USHORT",
					value: 0
				}, {
					name: "searchRange",
					type: "USHORT",
					value: 0
				}, {
					name: "entrySelector",
					type: "USHORT",
					value: 0
				}, {
					name: "rangeShift",
					type: "USHORT",
					value: 0
				}]);
				t.tables = e, t.numTables = e.length;
				var r = Math.pow(2, n(t.numTables));
				t.searchRange = 16 * r, t.entrySelector = n(r), t.rangeShift = 16 * t.numTables - t.searchRange;
				for (var a = [], s = [], h = t.sizeOf() + i().sizeOf() * t.numTables; h % 4 !== 0;) h += 1, s.push({
					name: "padding",
					type: "BYTE",
					value: 0
				});
				for (var l = 0; l < e.length; l += 1) {
					var c = e[l];
					u.argument(4 === c.tableName.length, "Table name" + c.tableName + " is invalid.");
					var f = c.sizeOf(),
						d = i(c.tableName, o(c.encode()), h, f);
					for (a.push({
							name: d.tag + " Table Record",
							type: "TABLE",
							value: d
						}), s.push({
							name: c.tableName + " table",
							type: "TABLE",
							value: c
						}), h += f, u.argument(!isNaN(h), "Something went wrong calculating the offset."); h % 4 !== 0;) h += 1, s.push({
						name: "padding",
						type: "BYTE",
						value: 0
					})
				}
				return a.sort(function(e, t) {
					return e.value.tag > t.value.tag ? 1 : -1
				}), t.fields = t.fields.concat(a), t.fields = t.fields.concat(s), t
			}

			function s(e, t, r) {
				for (var n = 0; n < t.length; n += 1) {
					var o = e.charToGlyphIndex(t[n]);
					if (o > 0) {
						var i = e.glyphs.get(o);
						return i.getMetrics()
					}
				}
				return r
			}

			function h(e) {
				for (var t = 0, r = 0; r < e.length; r += 1) t += e[r];
				return t / e.length
			}

			function l(e) {
				for (var t, r = [], n = [], i = [], l = [], u = [], p = [], b = [], w = 0, S = 0, T = 0, M = 0, C = 0, R = 0; R < e.glyphs.length; R += 1) {
					var E = e.glyphs.get(R),
						A = 0 | E.unicode;
					(t > A || null === t) && (t = A), w < A && (w = A);
					var P = x.getUnicodeRange(A);
					if (P < 32) S |= 1 << P;
					else if (P < 64) T |= 1 << P - 32;
					else if (P < 96) M |= 1 << P - 64;
					else {
						if (!(P < 123)) throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
						C |= 1 << P - 96
					}
					if (".notdef" !== E.name) {
						var L = E.getMetrics();
						r.push(L.xMin), n.push(L.yMin), i.push(L.xMax), l.push(L.yMax), p.push(L.leftSideBearing), b.push(L.rightSideBearing), u.push(E.advanceWidth)
					}
				}
				var I = {
					xMin: Math.min.apply(null, r),
					yMin: Math.min.apply(null, n),
					xMax: Math.max.apply(null, i),
					yMax: Math.max.apply(null, l),
					advanceWidthMax: Math.max.apply(null, u),
					advanceWidthAvg: h(u),
					minLeftSideBearing: Math.min.apply(null, p),
					maxLeftSideBearing: Math.max.apply(null, p),
					minRightSideBearing: Math.min.apply(null, b)
				};
				I.ascender = void 0 !== e.ascender ? e.ascender : I.yMax, I.descender = void 0 !== e.descender ? e.descender : I.yMin;
				var D = d.make({
						unitsPerEm: e.unitsPerEm,
						xMin: I.xMin,
						yMin: I.yMin,
						xMax: I.xMax,
						yMax: I.yMax
					}),
					N = m.make({
						ascender: I.ascender,
						descender: I.descender,
						advanceWidthMax: I.advanceWidthMax,
						minLeftSideBearing: I.minLeftSideBearing,
						minRightSideBearing: I.minRightSideBearing,
						xMaxExtent: I.maxLeftSideBearing + (I.xMax - I.xMin),
						numberOfHMetrics: e.glyphs.length
					}),
					O = y.make(e.glyphs.length),
					k = x.make({
						xAvgCharWidth: Math.round(I.advanceWidthAvg),
						usWeightClass: 500,
						usWidthClass: 5,
						usFirstCharIndex: t,
						usLastCharIndex: w,
						ulUnicodeRange1: S,
						ulUnicodeRange2: T,
						ulUnicodeRange3: M,
						ulUnicodeRange4: C,
						sTypoAscender: I.ascender,
						sTypoDescender: I.descender,
						sTypoLineGap: 0,
						usWinAscent: I.ascender,
						usWinDescent: -I.descender,
						sxHeight: s(e, "xyvw", {
							yMax: 0
						}).yMax,
						sCapHeight: s(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", I).yMax,
						usBreakChar: e.hasChar(" ") ? 32 : 0
					}),
					U = g.make(e.glyphs),
					F = c.make(e.glyphs),
					G = e.familyName + " " + e.styleName,
					B = e.familyName.replace(/\s/g, "") + "-" + e.styleName,
					H = v.make({
						copyright: e.copyright,
						fontFamily: e.familyName,
						fontSubfamily: e.styleName,
						uniqueID: e.manufacturer + ":" + G,
						fullName: G,
						version: e.version,
						postScriptName: B,
						trademark: e.trademark,
						manufacturer: e.manufacturer,
						designer: e.designer,
						description: e.description,
						manufacturerURL: e.manufacturerURL,
						designerURL: e.designerURL,
						license: e.license,
						licenseURL: e.licenseURL,
						preferredFamily: e.familyName,
						preferredSubfamily: e.styleName
					}),
					V = _.make(),
					X = f.make(e.glyphs, {
						version: e.version,
						fullName: G,
						familyName: e.familyName,
						weightName: e.styleName,
						postScriptName: B,
						unitsPerEm: e.unitsPerEm
					}),
					q = [D, N, O, k, H, F, V, X, U],
					z = a(q),
					W = z.encode(),
					j = o(W),
					Y = z.fields,
					Z = !1;
				for (R = 0; R < Y.length; R += 1)
					if ("head table" === Y[R].name) {
						Y[R].value.checkSumAdjustment = 2981146554 - j, Z = !0;
						break
					}
				if (!Z) throw new Error("Could not find head table with checkSum to adjust.");
				return z
			}
			var u = e("../check"),
				p = e("../table"),
				c = e("./cmap"),
				f = e("./cff"),
				d = e("./head"),
				m = e("./hhea"),
				g = e("./hmtx"),
				y = e("./maxp"),
				v = e("./name"),
				x = e("./os2"),
				_ = e("./post");
			r.computeCheckSum = o, r.make = a, r.fontToTable = l
		}, {
			"../check": 2,
			"../table": 11,
			"./cff": 12,
			"./cmap": 13,
			"./head": 16,
			"./hhea": 17,
			"./hmtx": 18,
			"./maxp": 21,
			"./name": 22,
			"./os2": 23,
			"./post": 24
		}],
		26: [function(e, t, r) {
			"use strict";

			function n(e) {
				return function() {
					return e
				}
			}
			var o = e("./check"),
				i = 32768,
				a = 2147483648,
				s = {},
				h = {},
				l = {};
			h.BYTE = function(e) {
				return o.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."), [e]
			}, l.BYTE = n(1), h.CHAR = function(e) {
				return [e.charCodeAt(0)]
			}, l.BYTE = n(1), h.CHARARRAY = function(e) {
				for (var t = [], r = 0; r < e.length; r += 1) t.push(e.charCodeAt(r));
				return t
			}, l.CHARARRAY = function(e) {
				return e.length
			}, h.USHORT = function(e) {
				return [e >> 8 & 255, 255 & e]
			}, l.USHORT = n(2), h.SHORT = function(e) {
				return e >= i && (e = -(2 * i - e)), [e >> 8 & 255, 255 & e]
			}, l.SHORT = n(2), h.UINT24 = function(e) {
				return [e >> 16 & 255, e >> 8 & 255, 255 & e]
			}, l.UINT24 = n(3), h.ULONG = function(e) {
				return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
			}, l.ULONG = n(4), h.LONG = function(e) {
				return e >= a && (e = -(2 * a - e)), [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
			}, l.LONG = n(4), h.FIXED = h.ULONG, l.FIXED = l.ULONG, h.FWORD = h.SHORT, l.FWORD = l.SHORT, h.UFWORD = h.USHORT, l.UFWORD = l.USHORT, h.LONGDATETIME = function() {
				return [0, 0, 0, 0, 0, 0, 0, 0]
			}, l.LONGDATETIME = n(8), h.TAG = function(e) {
				return o.argument(4 === e.length, "Tag should be exactly 4 ASCII characters."), [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]
			}, l.TAG = n(4), h.Card8 = h.BYTE, l.Card8 = l.BYTE, h.Card16 = h.USHORT, l.Card16 = l.USHORT, h.OffSize = h.BYTE, l.OffSize = l.BYTE, h.SID = h.USHORT, l.SID = l.USHORT, h.NUMBER = function(e) {
				return e >= -107 && e <= 107 ? [e + 139] : e >= 108 && e <= 1131 ? (e -= 108, [(e >> 8) + 247, 255 & e]) : e >= -1131 && e <= -108 ? (e = -e - 108, [(e >> 8) + 251, 255 & e]) : e >= -32768 && e <= 32767 ? h.NUMBER16(e) : h.NUMBER32(e)
			}, l.NUMBER = function(e) {
				return h.NUMBER(e).length
			}, h.NUMBER16 = function(e) {
				return [28, e >> 8 & 255, 255 & e]
			}, l.NUMBER16 = n(2), h.NUMBER32 = function(e) {
				return [29, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
			}, l.NUMBER32 = n(4), h.REAL = function(e) {
				var t = e.toString(),
					r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
				if (r) {
					var n = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
					t = (Math.round(e * n) / n).toString()
				}
				var o, i, a = "";
				for (o = 0, i = t.length; o < i; o += 1) {
					var s = t[o];
					a += "e" === s ? "-" === t[++o] ? "c" : "b" : "." === s ? "a" : "-" === s ? "e" : s
				}
				a += 1 & a.length ? "f" : "ff";
				var h = [30];
				for (o = 0, i = a.length; o < i; o += 2) h.push(parseInt(a.substr(o, 2), 16));
				return h
			}, l.REAL = function(e) {
				return h.REAL(e).length
			}, h.NAME = h.CHARARRAY, l.NAME = l.CHARARRAY, h.STRING = h.CHARARRAY, l.STRING = l.CHARARRAY, h.UTF16 = function(e) {
				for (var t = [], r = 0; r < e.length; r += 1) t.push(0), t.push(e.charCodeAt(r));
				return t
			}, l.UTF16 = function(e) {
				return 2 * e.length
			}, h.INDEX = function(e) {
				var t, r = 1,
					n = [r],
					o = [],
					i = 0;
				for (t = 0; t < e.length; t += 1) {
					var a = h.OBJECT(e[t]);
					Array.prototype.push.apply(o, a), i += a.length, r += a.length, n.push(r)
				}
				if (0 === o.length) return [0, 0];
				var s = [],
					l = 1 + Math.floor(Math.log(i) / Math.log(2)) / 8 | 0,
					u = [void 0, h.BYTE, h.USHORT, h.UINT24, h.ULONG][l];
				for (t = 0; t < n.length; t += 1) {
					var p = u(n[t]);
					Array.prototype.push.apply(s, p)
				}
				return Array.prototype.concat(h.Card16(e.length), h.OffSize(l), s, o)
			}, l.INDEX = function(e) {
				return h.INDEX(e).length
			}, h.DICT = function(e) {
				for (var t = [], r = Object.keys(e), n = r.length, o = 0; o < n; o += 1) {
					var i = parseInt(r[o], 0),
						a = e[i];
					t = t.concat(h.OPERAND(a.value, a.type)), t = t.concat(h.OPERATOR(i))
				}
				return t
			}, l.DICT = function(e) {
				return h.DICT(e).length
			}, h.OPERATOR = function(e) {
				return e < 1200 ? [e] : [12, e - 1200]
			}, h.OPERAND = function(e, t) {
				var r = [];
				if (Array.isArray(t))
					for (var n = 0; n < t.length; n += 1) o.argument(e.length === t.length, "Not enough arguments given for type" + t), r = r.concat(h.OPERAND(e[n], t[n]));
				else if ("SID" === t) r = r.concat(h.NUMBER(e));
				else if ("offset" === t) r = r.concat(h.NUMBER32(e));
				else if ("number" === t) r = r.concat(h.NUMBER(e));
				else {
					if ("real" !== t) throw new Error("Unknown operand type " + t);
					r = r.concat(h.REAL(e))
				}
				return r
			}, h.OP = h.BYTE, l.OP = l.BYTE;
			var u = "function" == typeof WeakMap && new WeakMap;
			h.CHARSTRING = function(e) {
				if (u && u.has(e)) return u.get(e);
				for (var t = [], r = e.length, n = 0; n < r; n += 1) {
					var o = e[n];
					t = t.concat(h[o.type](o.value))
				}
				return u && u.set(e, t), t
			}, l.CHARSTRING = function(e) {
				return h.CHARSTRING(e).length
			}, h.OBJECT = function(e) {
				var t = h[e.type];
				return o.argument(void 0 !== t, "No encoding function for type " + e.type), t(e.value)
			}, h.TABLE = function(e) {
				for (var t = [], r = e.fields.length, n = 0; n < r; n += 1) {
					var i = e.fields[n],
						a = h[i.type];
					o.argument(void 0 !== a, "No encoding function for field type " + i.type);
					var s = e[i.name];
					void 0 === s && (s = i.value);
					var l = a(s);
					t = t.concat(l)
				}
				return t
			}, h.LITERAL = function(e) {
				return e
			}, l.LITERAL = function(e) {
				return e.length
			}, r.decode = s, r.encode = h, r.sizeOf = l
		}, {
			"./check": 2
		}],
		27: [function(_dereq_, module, exports) {
			! function(e, t, r) {
				"undefined" != typeof module && module.exports ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : t[e] = r()
			}("reqwest", this, function() {
				function succeed(e) {
					var t = protocolRe.exec(e.url);
					return t = t && t[1] || window.location.protocol, httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
				}

				function handleReadyState(e, t, r) {
					return function() {
						return e._aborted ? r(e.request) : e._timedOut ? r(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : r(e.request)))
					}
				}

				function setHeaders(e, t) {
					var r, n = t.headers || {};
					n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
					var o = "function" == typeof FormData && t.data instanceof FormData;
					t.crossOrigin || n[requestedWith] || (n[requestedWith] = defaultHeaders.requestedWith), n[contentType] || o || (n[contentType] = t.contentType || defaultHeaders.contentType);
					for (r in n) n.hasOwnProperty(r) && "setRequestHeader" in e && e.setRequestHeader(r, n[r])
				}

				function setCredentials(e, t) {
					"undefined" != typeof t.withCredentials && "undefined" != typeof e.withCredentials && (e.withCredentials = !!t.withCredentials)
				}

				function generalCallback(e) {
					lastValue = e
				}

				function urlappend(e, t) {
					return e + (/\?/.test(e) ? "&" : "?") + t
				}

				function handleJsonp(e, t, r, n) {
					var o = uniqid++,
						i = e.jsonpCallback || "callback",
						a = e.jsonpCallbackName || reqwest.getcallbackPrefix(o),
						s = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
						h = n.match(s),
						l = doc.createElement("script"),
						u = 0,
						p = navigator.userAgent.indexOf("MSIE 10.0") !== -1;
					return h ? "?" === h[3] ? n = n.replace(s, "$1=" + a) : a = h[3] : n = urlappend(n, i + "=" + a), win[a] = generalCallback, l.type = "text/javascript", l.src = n, l.async = !0, "undefined" == typeof l.onreadystatechange || p || (l.htmlFor = l.id = "_reqwest_" + o), l.onload = l.onreadystatechange = function() {
						return !(l[readyState] && "complete" !== l[readyState] && "loaded" !== l[readyState] || u) && (l.onload = l.onreadystatechange = null, l.onclick && l.onclick(), t(lastValue), lastValue = void 0, head.removeChild(l), void(u = 1))
					}, head.appendChild(l), {
						abort: function() {
							l.onload = l.onreadystatechange = null, r({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(l), u = 1
						}
					}
				}

				function getRequest(e, t) {
					var r, n = this.o,
						o = (n.method || "GET").toUpperCase(),
						i = "string" == typeof n ? n : n.url,
						a = n.processData !== !1 && n.data && "string" != typeof n.data ? reqwest.toQueryString(n.data) : n.data || null,
						s = !1;
					return "jsonp" != n.type && "GET" != o || !a || (i = urlappend(i, a), a = null), "jsonp" == n.type ? handleJsonp(n, e, t, i) : (r = n.xhr && n.xhr(n) || xhr(n), r.open(o, i, n.async !== !1), setHeaders(r, n), setCredentials(r, n), win[xDomainRequest] && r instanceof win[xDomainRequest] ? (r.onload = e, r.onerror = t, r.onprogress = function() {}, s = !0) : r.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(r), s ? setTimeout(function() {
						r.send(a)
					}, 200) : r.send(a), r)
				}

				function Reqwest(e, t) {
					this.o = e, this.fn = t, init.apply(this, arguments)
				}

				function setType(e) {
					return e.match("json") ? "json" : e.match("javascript") ? "js" : e.match("text") ? "html" : e.match("xml") ? "xml" : void 0
				}

				function init(o, fn) {
					function complete(e) {
						for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
					}

					function success(resp) {
						var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
						resp = "jsonp" !== type ? self.request : resp;
						var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
							r = filteredResponse;
						try {
							resp.responseText = r
						} catch (e) {}
						if (r) switch (type) {
							case "json":
								try {
									resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
								} catch (e) {
									return error(resp, "Could not parse JSON in response", e)
								}
								break;
							case "js":
								resp = eval(r);
								break;
							case "html":
								resp = r;
								break;
							case "xml":
								resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
						}
						for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
						complete(resp)
					}

					function timedOut() {
						self._timedOut = !0, self.request.abort()
					}

					function error(e, t, r) {
						for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = r, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, r);
						complete(e)
					}
					this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
					var self = this;
					fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
						timedOut()
					}, o.timeout)), o.success && (this._successHandler = function() {
						o.success.apply(o, arguments)
					}), o.error && this._errorHandlers.push(function() {
						o.error.apply(o, arguments)
					}), o.complete && this._completeHandlers.push(function() {
						o.complete.apply(o, arguments)
					}), this.request = getRequest.call(this, success, error)
				}

				function reqwest(e, t) {
					return new Reqwest(e, t)
				}

				function normalize(e) {
					return e ? e.replace(/\r?\n/g, "\r\n") : ""
				}

				function serial(e, t) {
					var r, n, o, i, a = e.name,
						s = e.tagName.toLowerCase(),
						h = function(e) {
							e && !e.disabled && t(a, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
						};
					if (!e.disabled && a) switch (s) {
						case "input":
							/reset|button|image|file/i.test(e.type) || (r = /checkbox/i.test(e.type), n = /radio/i.test(e.type), o = e.value, (!(r || n) || e.checked) && t(a, normalize(r && "" === o ? "on" : o)));
							break;
						case "textarea":
							t(a, normalize(e.value));
							break;
						case "select":
							if ("select-one" === e.type.toLowerCase()) h(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
							else
								for (i = 0; e.length && i < e.length; i++) e.options[i].selected && h(e.options[i])
					}
				}

				function eachFormElement() {
					var e, t, r = this,
						n = function(e, t) {
							var n, o, i;
							for (n = 0; n < t.length; n++)
								for (i = e[byTag](t[n]), o = 0; o < i.length; o++) serial(i[o], r)
						};
					for (t = 0; t < arguments.length; t++) e = arguments[t], /input|select|textarea/i.test(e.tagName) && serial(e, r), n(e, ["input", "select", "textarea"])
				}

				function serializeQueryString() {
					return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
				}

				function serializeHash() {
					var e = {};
					return eachFormElement.apply(function(t, r) {
						t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(r)) : e[t] = r
					}, arguments), e
				}

				function buildParams(e, t, r, n) {
					var o, i, a, s = /\[\]$/;
					if (isArray(t))
						for (i = 0; t && i < t.length; i++) a = t[i], r || s.test(e) ? n(e, a) : buildParams(e + "[" + ("object" == typeof a ? i : "") + "]", a, r, n);
					else if (t && "[object Object]" === t.toString())
						for (o in t) buildParams(e + "[" + o + "]", t[o], r, n);
					else n(e, t)
				}
				var win = window,
					doc = document,
					httpsRe = /^http/,
					protocolRe = /(^\w+):\/\//,
					twoHundo = /^(20\d|1223)$/,
					byTag = "getElementsByTagName",
					readyState = "readyState",
					contentType = "Content-Type",
					requestedWith = "X-Requested-With",
					head = doc[byTag]("head")[0],
					uniqid = 0,
					callbackPrefix = "reqwest_" + +new Date,
					lastValue, xmlHttpRequest = "XMLHttpRequest",
					xDomainRequest = "XDomainRequest",
					noop = function() {},
					isArray = "function" == typeof Array.isArray ? Array.isArray : function(e) {
						return e instanceof Array
					},
					defaultHeaders = {
						contentType: "application/x-www-form-urlencoded",
						requestedWith: xmlHttpRequest,
						accept: {
							"*": "text/javascript, text/html, application/xml, text/xml, */*",
							xml: "application/xml, text/xml",
							html: "text/html",
							text: "text/plain",
							json: "application/json, text/javascript",
							js: "application/javascript, text/javascript"
						}
					},
					xhr = function(e) {
						if (e.crossOrigin === !0) {
							var t = win[xmlHttpRequest] ? new XMLHttpRequest : null;
							if (t && "withCredentials" in t) return t;
							if (win[xDomainRequest]) return new XDomainRequest;
							throw new Error("Browser does not support cross-origin requests")
						}
						return win[xmlHttpRequest] ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
					},
					globalSetupOptions = {
						dataFilter: function(e) {
							return e
						}
					};
				return Reqwest.prototype = {
					abort: function() {
						this._aborted = !0, this.request.abort()
					},
					retry: function() {
						init.call(this, this.o, this.fn)
					},
					then: function(e, t) {
						return e = e || function() {}, t = t || function() {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this
					},
					always: function(e) {
						return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this
					},
					fail: function(e) {
						return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this
					},
					catch: function(e) {
						return this.fail(e)
					}
				}, reqwest.serializeArray = function() {
					var e = [];
					return eachFormElement.apply(function(t, r) {
						e.push({
							name: t,
							value: r
						})
					}, arguments), e
				}, reqwest.serialize = function() {
					if (0 === arguments.length) return "";
					var e, t, r = Array.prototype.slice.call(arguments, 0);
					return e = r.pop(), e && e.nodeType && r.push(e) && (e = null), e && (e = e.type), t = "map" == e ? serializeHash : "array" == e ? reqwest.serializeArray : serializeQueryString, t.apply(null, r)
				}, reqwest.toQueryString = function(e, t) {
					var r, n, o = t || !1,
						i = [],
						a = encodeURIComponent,
						s = function(e, t) {
							t = "function" == typeof t ? t() : null == t ? "" : t, i[i.length] = a(e) + "=" + a(t)
						};
					if (isArray(e))
						for (n = 0; e && n < e.length; n++) s(e[n].name, e[n].value);
					else
						for (r in e) e.hasOwnProperty(r) && buildParams(r, e[r], o, s);
					return i.join("&").replace(/%20/g, "+")
				}, reqwest.getcallbackPrefix = function() {
					return callbackPrefix
				}, reqwest.compat = function(e, t) {
					return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t)
				}, reqwest.ajaxSetup = function(e) {
					e = e || {};
					for (var t in e) globalSetupOptions[t] = e[t]
				}, reqwest
			})
		}, {}],
		28: [function(e, t, r) {
			"use strict";
			var n = e("./core/core");
			e("./color/p5.Color"), e("./core/p5.Element"), e("./typography/p5.Font"), e("./core/p5.Graphics"), e("./core/p5.Renderer2D"), e("./image/p5.Image"), e("./math/p5.Vector"), e("./io/p5.TableRow"), e("./io/p5.Table"), e("./io/p5.XML"), e("./color/creating_reading"), e("./color/setting"), e("./core/constants"), e("./utilities/conversion"), e("./utilities/array_functions"), e("./utilities/string_functions"), e("./core/environment"), e("./image/image"), e("./image/loading_displaying"), e("./image/pixels"), e("./io/files"), e("./events/keyboard"), e("./events/acceleration"), e("./events/mouse"), e("./utilities/time_date"), e("./events/touch"), e("./math/math"), e("./math/calculation"), e("./math/random"), e("./math/noise"), e("./math/trigonometry"), e("./core/rendering"), e("./core/2d_primitives"), e("./core/attributes"), e("./core/curves"), e("./core/vertex"), e("./core/structure"), e("./core/transform"), e("./typography/attributes"), e("./typography/loading_displaying"), e("./webgl/p5.RendererGL"), e("./webgl/p5.Geometry"), e("./webgl/p5.RendererGL.Retained"), e("./webgl/p5.RendererGL.Immediate"), e("./webgl/primitives"), e("./webgl/loading"), e("./webgl/p5.Matrix"), e("./webgl/material"), e("./webgl/light"), e("./webgl/shader"), e("./webgl/camera"), e("./webgl/interaction");
			var o = function() {
				window.PHANTOMJS || window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !n.instance && new n
			};
			"complete" === document.readyState ? o() : window.addEventListener("load", o, !1), t.exports = n
		}, {
			"./color/creating_reading": 30,
			"./color/p5.Color": 31,
			"./color/setting": 32,
			"./core/2d_primitives": 33,
			"./core/attributes": 34,
			"./core/constants": 36,
			"./core/core": 37,
			"./core/curves": 38,
			"./core/environment": 39,
			"./core/p5.Element": 41,
			"./core/p5.Graphics": 42,
			"./core/p5.Renderer2D": 44,
			"./core/rendering": 45,
			"./core/structure": 47,
			"./core/transform": 48,
			"./core/vertex": 49,
			"./events/acceleration": 50,
			"./events/keyboard": 51,
			"./events/mouse": 52,
			"./events/touch": 53,
			"./image/image": 55,
			"./image/loading_displaying": 56,
			"./image/p5.Image": 57,
			"./image/pixels": 58,
			"./io/files": 59,
			"./io/p5.Table": 60,
			"./io/p5.TableRow": 61,
			"./io/p5.XML": 62,
			"./math/calculation": 63,
			"./math/math": 64,
			"./math/noise": 65,
			"./math/p5.Vector": 66,
			"./math/random": 68,
			"./math/trigonometry": 69,
			"./typography/attributes": 70,
			"./typography/loading_displaying": 71,
			"./typography/p5.Font": 72,
			"./utilities/array_functions": 73,
			"./utilities/conversion": 74,
			"./utilities/string_functions": 75,
			"./utilities/time_date": 76,
			"./webgl/camera": 77,
			"./webgl/interaction": 78,
			"./webgl/light": 79,
			"./webgl/loading": 80,
			"./webgl/material": 81,
			"./webgl/p5.Geometry": 82,
			"./webgl/p5.Matrix": 83,
			"./webgl/p5.RendererGL": 86,
			"./webgl/p5.RendererGL.Immediate": 84,
			"./webgl/p5.RendererGL.Retained": 85,
			"./webgl/primitives": 87,
			"./webgl/shader": 88
		}],
		29: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.ColorConversion = {}, n.ColorConversion._hsbaToHSLA = function(e) {
				var t = e[0],
					r = e[1],
					n = e[2],
					o = (2 - r) * n / 2;
				return 0 !== o && (1 === o ? r = 0 : o < .5 ? r /= 2 - r : r = r * n / (2 - 2 * o)), [t, r, o, e[3]]
			}, n.ColorConversion._hsbaToRGBA = function(e) {
				var t = 6 * e[0],
					r = e[1],
					n = e[2],
					o = [];
				if (0 === r) o = [n, n, n, e[3]];
				else {
					var i, a, s, h = Math.floor(t),
						l = n * (1 - r),
						u = n * (1 - r * (t - h)),
						p = n * (1 - r * (1 + h - t));
					1 === h ? (i = u, a = n, s = l) : 2 === h ? (i = l, a = n, s = p) : 3 === h ? (i = l, a = u, s = n) : 4 === h ? (i = p, a = l, s = n) : 5 === h ? (i = n, a = l, s = u) : (i = n, a = p, s = l), o = [i, a, s, e[3]]
				}
				return o
			}, n.ColorConversion._hslaToHSBA = function(e) {
				var t, r = e[0],
					n = e[1],
					o = e[2];
				return t = o < .5 ? (1 + n) * o : o + n - o * n, n = 2 * (t - o) / t, [r, n, t, e[3]]
			}, n.ColorConversion._hslaToRGBA = function(e) {
				var t = 6 * e[0],
					r = e[1],
					n = e[2],
					o = [];
				if (0 === r) o = [n, n, n, e[3]];
				else {
					var i;
					i = n < .5 ? (1 + r) * n : n + r - n * r;
					var a = 2 * n - i,
						s = function(e, t, r) {
							return e < 0 ? e += 6 : e >= 6 && (e -= 6), e < 1 ? t + (r - t) * e : e < 3 ? r : e < 4 ? t + (r - t) * (4 - e) : t
						};
					o = [s(t + 2, a, i), s(t, a, i), s(t - 2, a, i), e[3]]
				}
				return o
			}, n.ColorConversion._rgbaToHSBA = function(e) {
				var t, r, n = e[0],
					o = e[1],
					i = e[2],
					a = Math.max(n, o, i),
					s = a - Math.min(n, o, i);
				return 0 === s ? (t = 0, r = 0) : (r = s / a, n === a ? t = (o - i) / s : o === a ? t = 2 + (i - n) / s : i === a && (t = 4 + (n - o) / s), t < 0 ? t += 6 : t >= 6 && (t -= 6)), [t / 6, r, a, e[3]]
			}, n.ColorConversion._rgbaToHSLA = function(e) {
				var t, r, n = e[0],
					o = e[1],
					i = e[2],
					a = Math.max(n, o, i),
					s = Math.min(n, o, i),
					h = a + s,
					l = a - s;
				return 0 === l ? (t = 0, r = 0) : (r = h < 1 ? l / h : l / (2 - l), n === a ? t = (o - i) / l : o === a ? t = 2 + (i - n) / l : i === a && (t = 4 + (n - o) / l), t < 0 ? t += 6 : t >= 6 && (t -= 6)), [t / 6, r, h / 2, e[3]]
			}, t.exports = n.ColorConversion
		}, {
			"../core/core": 37
		}],
		30: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("../core/constants");
			e("./p5.Color"), n.prototype.alpha = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getAlpha();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.blue = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getBlue();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.brightness = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getBrightness();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.color = function() {
				return arguments[0] instanceof n.Color ? arguments[0] : arguments[0] instanceof Array ? this instanceof n.Renderer ? new n.Color(this, arguments[0]) : new n.Color(this._renderer, arguments[0]) : this instanceof n.Renderer ? new n.Color(this, arguments) : new n.Color(this._renderer, arguments)
			}, n.prototype.green = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getGreen();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.hue = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getHue();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.lerpColor = function(e, t, r) {
				var n, i, a, s, h, l, u = this._renderer._colorMode,
					p = this._renderer._colorMaxes;
				if (u === o.RGB) h = e.levels.map(function(e) {
					return e / 255
				}), l = t.levels.map(function(e) {
					return e / 255
				});
				else if (u === o.HSB) e._getBrightness(), t._getBrightness(), h = e.hsba, l = t.hsba;
				else {
					if (u !== o.HSL) throw new Error(u + "cannot be used for interpolation.");
					e._getLightness(), t._getLightness(), h = e.hsla, l = t.hsla
				}
				return r = Math.max(Math.min(r, 1), 0), n = this.lerp(h[0], l[0], r), i = this.lerp(h[1], l[1], r), a = this.lerp(h[2], l[2], r), s = this.lerp(h[3], l[3], r), n *= p[u][0], i *= p[u][1], a *= p[u][2], s *= p[u][3], this.color(n, i, a, s)
			}, n.prototype.lightness = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getLightness();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.red = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getRed();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, n.prototype.saturation = function(e) {
				if (e instanceof n.Color || e instanceof Array) return this.color(e)._getSaturation();
				throw new Error("Needs p5.Color or pixel array as argument.")
			}, t.exports = n
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"./p5.Color": 31
		}],
		31: [function(e, t, r) {
			var n = e("../core/core"),
				o = e("../core/constants"),
				i = e("./color_conversion");
			n.Color = function(e, t) {
				if (this.mode = e._colorMode, this.maxes = e._colorMaxes, this.mode !== o.RGB && this.mode !== o.HSL && this.mode !== o.HSB) throw new Error(this.mode + " is an invalid colorMode.");
				return this._array = n.Color._parseInputs.apply(e, t), this.levels = this._array.map(function(e) {
					return Math.round(255 * e)
				}), this
			}, n.Color.prototype.toString = function() {
				var e = this.levels,
					t = this._array[3];
				return "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + t + ")"
			}, n.Color.prototype._getAlpha = function() {
				return this._array[3] * this.maxes[this.mode][3]
			}, n.Color.prototype._getBlue = function() {
				return this._array[2] * this.maxes[o.RGB][2]
			}, n.Color.prototype._getBrightness = function() {
				return this.hsba || (this.hsba = i._rgbaToHSBA(this._array)), this.hsba[2] * this.maxes[o.HSB][2]
			}, n.Color.prototype._getGreen = function() {
				return this._array[1] * this.maxes[o.RGB][1]
			}, n.Color.prototype._getHue = function() {
				return this.mode === o.HSB ? (this.hsba || (this.hsba = i._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[o.HSB][0]) : (this.hsla || (this.hsla = i._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[o.HSL][0])
			}, n.Color.prototype._getLightness = function() {
				return this.hsla || (this.hsla = i._rgbaToHSLA(this._array)), this.hsla[2] * this.maxes[o.HSL][2]
			}, n.Color.prototype._getRed = function() {
				return this._array[0] * this.maxes[o.RGB][0]
			}, n.Color.prototype._getSaturation = function() {
				return this.mode === o.HSB ? (this.hsba || (this.hsba = i._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[o.HSB][1]) : (this.hsla || (this.hsla = i._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[o.HSL][1])
			};
			var a = {
					aliceblue: "#f0f8ff",
					antiquewhite: "#faebd7",
					aqua: "#00ffff",
					aquamarine: "#7fffd4",
					azure: "#f0ffff",
					beige: "#f5f5dc",
					bisque: "#ffe4c4",
					black: "#000000",
					blanchedalmond: "#ffebcd",
					blue: "#0000ff",
					blueviolet: "#8a2be2",
					brown: "#a52a2a",
					burlywood: "#deb887",
					cadetblue: "#5f9ea0",
					chartreuse: "#7fff00",
					chocolate: "#d2691e",
					coral: "#ff7f50",
					cornflowerblue: "#6495ed",
					cornsilk: "#fff8dc",
					crimson: "#dc143c",
					cyan: "#00ffff",
					darkblue: "#00008b",
					darkcyan: "#008b8b",
					darkgoldenrod: "#b8860b",
					darkgray: "#a9a9a9",
					darkgreen: "#006400",
					darkgrey: "#a9a9a9",
					darkkhaki: "#bdb76b",
					darkmagenta: "#8b008b",
					darkolivegreen: "#556b2f",
					darkorange: "#ff8c00",
					darkorchid: "#9932cc",
					darkred: "#8b0000",
					darksalmon: "#e9967a",
					darkseagreen: "#8fbc8f",
					darkslateblue: "#483d8b",
					darkslategray: "#2f4f4f",
					darkslategrey: "#2f4f4f",
					darkturquoise: "#00ced1",
					darkviolet: "#9400d3",
					deeppink: "#ff1493",
					deepskyblue: "#00bfff",
					dimgray: "#696969",
					dimgrey: "#696969",
					dodgerblue: "#1e90ff",
					firebrick: "#b22222",
					floralwhite: "#fffaf0",
					forestgreen: "#228b22",
					fuchsia: "#ff00ff",
					gainsboro: "#dcdcdc",
					ghostwhite: "#f8f8ff",
					gold: "#ffd700",
					goldenrod: "#daa520",
					gray: "#808080",
					green: "#008000",
					greenyellow: "#adff2f",
					grey: "#808080",
					honeydew: "#f0fff0",
					hotpink: "#ff69b4",
					indianred: "#cd5c5c",
					indigo: "#4b0082",
					ivory: "#fffff0",
					khaki: "#f0e68c",
					lavender: "#e6e6fa",
					lavenderblush: "#fff0f5",
					lawngreen: "#7cfc00",
					lemonchiffon: "#fffacd",
					lightblue: "#add8e6",
					lightcoral: "#f08080",
					lightcyan: "#e0ffff",
					lightgoldenrodyellow: "#fafad2",
					lightgray: "#d3d3d3",
					lightgreen: "#90ee90",
					lightgrey: "#d3d3d3",
					lightpink: "#ffb6c1",
					lightsalmon: "#ffa07a",
					lightseagreen: "#20b2aa",
					lightskyblue: "#87cefa",
					lightslategray: "#778899",
					lightslategrey: "#778899",
					lightsteelblue: "#b0c4de",
					lightyellow: "#ffffe0",
					lime: "#00ff00",
					limegreen: "#32cd32",
					linen: "#faf0e6",
					magenta: "#ff00ff",
					maroon: "#800000",
					mediumaquamarine: "#66cdaa",
					mediumblue: "#0000cd",
					mediumorchid: "#ba55d3",
					mediumpurple: "#9370db",
					mediumseagreen: "#3cb371",
					mediumslateblue: "#7b68ee",
					mediumspringgreen: "#00fa9a",
					mediumturquoise: "#48d1cc",
					mediumvioletred: "#c71585",
					midnightblue: "#191970",
					mintcream: "#f5fffa",
					mistyrose: "#ffe4e1",
					moccasin: "#ffe4b5",
					navajowhite: "#ffdead",
					navy: "#000080",
					oldlace: "#fdf5e6",
					olive: "#808000",
					olivedrab: "#6b8e23",
					orange: "#ffa500",
					orangered: "#ff4500",
					orchid: "#da70d6",
					palegoldenrod: "#eee8aa",
					palegreen: "#98fb98",
					paleturquoise: "#afeeee",
					palevioletred: "#db7093",
					papayawhip: "#ffefd5",
					peachpuff: "#ffdab9",
					peru: "#cd853f",
					pink: "#ffc0cb",
					plum: "#dda0dd",
					powderblue: "#b0e0e6",
					purple: "#800080",
					red: "#ff0000",
					rosybrown: "#bc8f8f",
					royalblue: "#4169e1",
					saddlebrown: "#8b4513",
					salmon: "#fa8072",
					sandybrown: "#f4a460",
					seagreen: "#2e8b57",
					seashell: "#fff5ee",
					sienna: "#a0522d",
					silver: "#c0c0c0",
					skyblue: "#87ceeb",
					slateblue: "#6a5acd",
					slategray: "#708090",
					slategrey: "#708090",
					snow: "#fffafa",
					springgreen: "#00ff7f",
					steelblue: "#4682b4",
					tan: "#d2b48c",
					teal: "#008080",
					thistle: "#d8bfd8",
					tomato: "#ff6347",
					turquoise: "#40e0d0",
					violet: "#ee82ee",
					wheat: "#f5deb3",
					white: "#ffffff",
					whitesmoke: "#f5f5f5",
					yellow: "#ffff00",
					yellowgreen: "#9acd32"
				},
				s = /\s*/,
				h = /(\d{1,3})/,
				l = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
				u = new RegExp(l.source + "%"),
				p = {
					HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
					HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
					RGB: new RegExp(["^rgb\\(", h.source, ",", h.source, ",", h.source, "\\)$"].join(s.source), "i"),
					RGB_PERCENT: new RegExp(["^rgb\\(", u.source, ",", u.source, ",", u.source, "\\)$"].join(s.source), "i"),
					RGBA: new RegExp(["^rgba\\(", h.source, ",", h.source, ",", h.source, ",", l.source, "\\)$"].join(s.source), "i"),
					RGBA_PERCENT: new RegExp(["^rgba\\(", u.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(s.source), "i"),
					HSL: new RegExp(["^hsl\\(", h.source, ",", u.source, ",", u.source, "\\)$"].join(s.source), "i"),
					HSLA: new RegExp(["^hsla\\(", h.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(s.source), "i"),
					HSB: new RegExp(["^hsb\\(", h.source, ",", u.source, ",", u.source, "\\)$"].join(s.source), "i"),
					HSBA: new RegExp(["^hsba\\(", h.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(s.source), "i")
				};
			n.Color._parseInputs = function() {
				var e = arguments.length,
					t = this._colorMode,
					r = this._colorMaxes,
					s = [];
				if (e >= 3) return s[0] = arguments[0] / r[t][0], s[1] = arguments[1] / r[t][1], s[2] = arguments[2] / r[t][2], "number" == typeof arguments[3] ? s[3] = arguments[3] / r[t][3] : s[3] = 1, s = s.map(function(e) {
					return Math.max(Math.min(e, 1), 0)
				}), t === o.HSL ? i._hslaToRGBA(s) : t === o.HSB ? i._hsbaToRGBA(s) : s;
				if (1 === e && "string" == typeof arguments[0]) {
					var h = arguments[0].trim().toLowerCase();
					if (a[h]) return n.Color._parseInputs.apply(this, [a[h]]);
					if (p.HEX3.test(h)) return s = p.HEX3.exec(h).slice(1).map(function(e) {
						return parseInt(e + e, 16) / 255
					}), s[3] = 1, s;
					if (p.HEX6.test(h)) return s = p.HEX6.exec(h).slice(1).map(function(e) {
						return parseInt(e, 16) / 255
					}), s[3] = 1, s;
					if (p.RGB.test(h)) return s = p.RGB.exec(h).slice(1).map(function(e) {
						return e / 255
					}), s[3] = 1, s;
					if (p.RGB_PERCENT.test(h)) return s = p.RGB_PERCENT.exec(h).slice(1).map(function(e) {
						return parseFloat(e) / 100
					}), s[3] = 1, s;
					if (p.RGBA.test(h)) return s = p.RGBA.exec(h).slice(1).map(function(e, t) {
						return 3 === t ? parseFloat(e) : e / 255
					});
					if (p.RGBA_PERCENT.test(h)) return s = p.RGBA_PERCENT.exec(h).slice(1).map(function(e, t) {
						return 3 === t ? parseFloat(e) : parseFloat(e) / 100
					});
					if (p.HSL.test(h) ? (s = p.HSL.exec(h).slice(1).map(function(e, t) {
							return 0 === t ? parseInt(e, 10) / 360 : parseInt(e, 10) / 100
						}), s[3] = 1) : p.HSLA.test(h) && (s = p.HSLA.exec(h).slice(1).map(function(e, t) {
							return 0 === t ? parseInt(e, 10) / 360 : 3 === t ? parseFloat(e) : parseInt(e, 10) / 100
						})), s.length) return i._hslaToRGBA(s);
					if (p.HSB.test(h) ? (s = p.HSB.exec(h).slice(1).map(function(e, t) {
							return 0 === t ? parseInt(e, 10) / 360 : parseInt(e, 10) / 100
						}), s[3] = 1) : p.HSBA.test(h) && (s = p.HSBA.exec(h).slice(1).map(function(e, t) {
							return 0 === t ? parseInt(e, 10) / 360 : 3 === t ? parseFloat(e) : parseInt(e, 10) / 100
						})), s.length) return i._hsbaToRGBA(s);
					s = [1, 1, 1, 1]
				} else {
					if (1 !== e && 2 !== e || "number" != typeof arguments[0]) throw new Error(arguments + "is not a valid color representation.");
					s[0] = arguments[0] / r[t][2], s[1] = arguments[0] / r[t][2], s[2] = arguments[0] / r[t][2], "number" == typeof arguments[1] ? s[3] = arguments[1] / r[t][3] : s[3] = 1, s = s.map(function(e) {
						return Math.max(Math.min(e, 1), 0)
					})
				}
				return s
			}, t.exports = n.Color
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"./color_conversion": 29
		}],
		32: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("../core/constants");
			e("./p5.Color"), n.prototype.background = function() {
				return arguments[0] instanceof n.Image ? this.image(arguments[0], 0, 0, this.width, this.height) : this._renderer.background.apply(this._renderer, arguments), this
			}, n.prototype.clear = function() {
				return this._renderer.clear(), this
			}, n.prototype.colorMode = function() {
				if (arguments[0] === o.RGB || arguments[0] === o.HSB || arguments[0] === o.HSL) {
					this._renderer._colorMode = arguments[0];
					var e = this._renderer._colorMaxes[this._renderer._colorMode];
					2 === arguments.length ? (e[0] = arguments[1], e[1] = arguments[1], e[2] = arguments[1], e[3] = arguments[1]) : 4 === arguments.length ? (e[0] = arguments[1], e[1] = arguments[2], e[2] = arguments[3]) : 5 === arguments.length && (e[0] = arguments[1], e[1] = arguments[2], e[2] = arguments[3], e[3] = arguments[4])
				}
				return this
			}, n.prototype.fill = function() {
				return this._renderer._setProperty("_fillSet", !0), this._renderer._setProperty("_doFill", !0), this._renderer.fill.apply(this._renderer, arguments), this
			}, n.prototype.noFill = function() {
				return this._renderer._setProperty("_doFill", !1), this
			}, n.prototype.noStroke = function() {
				return this._renderer._setProperty("_doStroke", !1), this
			}, n.prototype.stroke = function() {
				return this._renderer._setProperty("_strokeSet", !0), this._renderer._setProperty("_doStroke", !0), this._renderer.stroke.apply(this._renderer, arguments), this
			}, t.exports = n
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"./p5.Color": 31
		}],
		33: [function(e, t, r) {
			"use strict";
			var n = e("./core"),
				o = e("./constants"),
				i = e("./canvas");
			e("./error_helpers"), n.prototype.arc = function(e, t, r, n, i, a, s) {
				for (var h = new Array(arguments.length), l = 0; l < h.length; ++l) h[l] = arguments[l];
				if (!this._renderer._doStroke && !this._renderer._doFill) return this;
				for (this._angleMode === o.DEGREES && (i = this.radians(i), a = this.radians(a)); i < 0;) i += o.TWO_PI;
				for (; a < 0;) a += o.TWO_PI;
				return i %= o.TWO_PI, a %= o.TWO_PI, a === i && (a += o.TWO_PI), i = i <= o.HALF_PI ? Math.atan(r / n * Math.tan(i)) : i > o.HALF_PI && i <= 3 * o.HALF_PI ? Math.atan(r / n * Math.tan(i)) + o.PI : Math.atan(r / n * Math.tan(i)) + o.TWO_PI, a = a <= o.HALF_PI ? Math.atan(r / n * Math.tan(a)) : a > o.HALF_PI && a <= 3 * o.HALF_PI ? Math.atan(r / n * Math.tan(a)) + o.PI : Math.atan(r / n * Math.tan(a)) + o.TWO_PI, i > a && (a += o.TWO_PI), r = Math.abs(r), n = Math.abs(n), this._renderer.arc(e, t, r, n, i, a, s), this
			}, n.prototype.ellipse = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				if (3 === e.length && e.push(e[2]), e[2] < 0 && (e[2] = Math.abs(e[2])), e[3] < 0 && (e[3] = Math.abs(e[3])), !this._renderer._doStroke && !this._renderer._doFill) return this;
				var r = i.modeAdjust(e[0], e[1], e[2], e[3], this._renderer._ellipseMode);
				return e[0] = r.x, e[1] = r.y, e[2] = r.w, e[3] = r.h, this._renderer.ellipse(e), this
			}, n.prototype.line = function() {
				if (!this._renderer._doStroke) return this;
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return this._renderer.isP3D ? this._renderer.line(e[0], e[1], e[2], e[3], e[4], e[5]) : this._renderer.line(e[0], e[1], e[2], e[3]), this
			}, n.prototype.point = function() {
				if (!this._renderer._doStroke) return this;
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return this._renderer.isP3D ? this._renderer.point(e[0], e[1], e[2]) : this._renderer.point(e[0], e[1]), this
			}, n.prototype.quad = function() {
				if (!this._renderer._doStroke && !this._renderer._doFill) return this;
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return this._renderer.isP3D ? this._renderer.quad(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11]) : this._renderer.quad(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), this
			}, n.prototype.rect = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				if (this._renderer._doStroke || this._renderer._doFill) {
					var r = i.modeAdjust(e[0], e[1], e[2], e[3], this._renderer._rectMode);
					return e[0] = r.x, e[1] = r.y, e[2] = r.w, e[3] = r.h, this._renderer.rect(e), this
				}
			}, n.prototype.triangle = function() {
				if (!this._renderer._doStroke && !this._renderer._doFill) return this;
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return this._renderer.triangle(e), this
			}, t.exports = n
		}, {
			"./canvas": 35,
			"./constants": 36,
			"./core": 37,
			"./error_helpers": 40
		}],
		34: [function(e, t, r) {
			"use strict";
			var n = e("./core"),
				o = e("./constants");
			n.prototype.ellipseMode = function(e) {
				return e !== o.CORNER && e !== o.CORNERS && e !== o.RADIUS && e !== o.CENTER || (this._renderer._ellipseMode = e), this
			}, n.prototype.noSmooth = function() {
				return this._renderer.noSmooth(), this
			}, n.prototype.rectMode = function(e) {
				return e !== o.CORNER && e !== o.CORNERS && e !== o.RADIUS && e !== o.CENTER || (this._renderer._rectMode = e), this
			}, n.prototype.smooth = function() {
				return this._renderer.smooth(), this
			}, n.prototype.strokeCap = function(e) {
				return e !== o.ROUND && e !== o.SQUARE && e !== o.PROJECT || this._renderer.strokeCap(e), this
			}, n.prototype.strokeJoin = function(e) {
				return e !== o.ROUND && e !== o.BEVEL && e !== o.MITER || this._renderer.strokeJoin(e), this
			}, n.prototype.strokeWeight = function(e) {
				return this._renderer.strokeWeight(e), this
			}, t.exports = n
		}, {
			"./constants": 36,
			"./core": 37
		}],
		35: [function(e, t, r) {
			var n = e("./constants");
			t.exports = {
				modeAdjust: function(e, t, r, o, i) {
					return i === n.CORNER ? {
						x: e,
						y: t,
						w: r,
						h: o
					} : i === n.CORNERS ? {
						x: e,
						y: t,
						w: r - e,
						h: o - t
					} : i === n.RADIUS ? {
						x: e - r,
						y: t - o,
						w: 2 * r,
						h: 2 * o
					} : i === n.CENTER ? {
						x: e - .5 * r,
						y: t - .5 * o,
						w: r,
						h: o
					} : void 0
				},
				arcModeAdjust: function(e, t, r, o, i) {
					return i === n.CORNER ? {
						x: e + .5 * r,
						y: t + .5 * o,
						w: r,
						h: o
					} : i === n.CORNERS ? {
						x: e,
						y: t,
						w: r + e,
						h: o + t
					} : i === n.RADIUS ? {
						x: e,
						y: t,
						w: 2 * r,
						h: 2 * o
					} : i === n.CENTER ? {
						x: e,
						y: t,
						w: r,
						h: o
					} : void 0
				}
			}
		}, {
			"./constants": 36
		}],
		36: [function(e, t, r) {
			var n = Math.PI;
			t.exports = {
				P2D: "p2d",
				WEBGL: "webgl",
				ARROW: "default",
				CROSS: "crosshair",
				HAND: "pointer",
				MOVE: "move",
				TEXT: "text",
				WAIT: "wait",
				HALF_PI: n / 2,
				PI: n,
				QUARTER_PI: n / 4,
				TAU: 2 * n,
				TWO_PI: 2 * n,
				DEGREES: "degrees",
				RADIANS: "radians",
				CORNER: "corner",
				CORNERS: "corners",
				RADIUS: "radius",
				RIGHT: "right",
				LEFT: "left",
				CENTER: "center",
				TOP: "top",
				BOTTOM: "bottom",
				BASELINE: "alphabetic",
				POINTS: 0,
				LINES: 1,
				LINE_STRIP: 3,
				LINE_LOOP: 2,
				TRIANGLES: 4,
				TRIANGLE_FAN: 6,
				TRIANGLE_STRIP: 5,
				QUADS: "quads",
				QUAD_STRIP: "quad_strip",
				CLOSE: "close",
				OPEN: "open",
				CHORD: "chord",
				PIE: "pie",
				PROJECT: "square",
				SQUARE: "butt",
				ROUND: "round",
				BEVEL: "bevel",
				MITER: "miter",
				RGB: "rgb",
				HSB: "hsb",
				HSL: "hsl",
				AUTO: "auto",
				ALT: 18,
				BACKSPACE: 8,
				CONTROL: 17,
				DELETE: 46,
				DOWN_ARROW: 40,
				ENTER: 13,
				ESCAPE: 27,
				LEFT_ARROW: 37,
				OPTION: 18,
				RETURN: 13,
				RIGHT_ARROW: 39,
				SHIFT: 16,
				TAB: 9,
				UP_ARROW: 38,
				BLEND: "normal",
				ADD: "lighter",
				DARKEST: "darken",
				LIGHTEST: "lighten",
				DIFFERENCE: "difference",
				EXCLUSION: "exclusion",
				MULTIPLY: "multiply",
				SCREEN: "screen",
				REPLACE: "source-over",
				OVERLAY: "overlay",
				HARD_LIGHT: "hard-light",
				SOFT_LIGHT: "soft-light",
				DODGE: "color-dodge",
				BURN: "color-burn",
				THRESHOLD: "threshold",
				GRAY: "gray",
				OPAQUE: "opaque",
				INVERT: "invert",
				POSTERIZE: "posterize",
				DILATE: "dilate",
				ERODE: "erode",
				BLUR: "blur",
				NORMAL: "normal",
				ITALIC: "italic",
				BOLD: "bold",
				_DEFAULT_TEXT_FILL: "#000000",
				_DEFAULT_LEADMULT: 1.25,
				_CTX_MIDDLE: "middle",
				LINEAR: "linear",
				QUADRATIC: "quadratic",
				BEZIER: "bezier",
				CURVE: "curve",
				_DEFAULT_STROKE: "#000000",
				_DEFAULT_FILL: "#FFFFFF"
			}
		}, {}],
		37: [function(e, t, r) {
			"use strict";
			e("./shim");
			var n = e("./constants"),
				o = function(e, t, r) {
					2 === arguments.length && "boolean" == typeof t && (r = t, t = void 0), this._setupDone = !1, this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1, this._userNode = t, this._curElement = null, this._elements = [], this._requestAnimId = 0, this._preloadCount = 0, this._isGlobal = !1, this._loop = !0, this._styles = [], this._defaultCanvasSize = {
						width: 100,
						height: 100
					}, this._events = {
						mousemove: null,
						mousedown: null,
						mouseup: null,
						dragend: null,
						dragover: null,
						click: null,
						mouseover: null,
						mouseout: null,
						keydown: null,
						keyup: null,
						keypress: null,
						touchstart: null,
						touchmove: null,
						touchend: null,
						resize: null,
						blur: null
					}, this._events.wheel = null, this._loadingScreenId = "p5_loading", window.DeviceOrientationEvent && (this._events.deviceorientation = null), window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null), this._start = function() {
						this._userNode && "string" == typeof this._userNode && (this._userNode = document.getElementById(this._userNode)), this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, "p2d", !0);
						var e = this.preload || window.preload;
						if (e) {
							var t = document.getElementById(this._loadingScreenId);
							if (!t) {
								t = document.createElement("div"), t.innerHTML = "Loading...", t.style.position = "absolute", t.id = this._loadingScreenId;
								var r = this._userNode || document.body;
								r.appendChild(t)
							}
							for (var n in this._preloadMethods) {
								this._preloadMethods[n] = this._preloadMethods[n] || o;
								var i = this._preloadMethods[n];
								i !== o.prototype && i !== o || (i = this._isGlobal ? window : this), this._registeredPreloadMethods[n] = i[n], i[n] = this._wrapPreload(i, n)
							}
							e(), this._runIfPreloadsAreDone()
						} else this._setup(), this._runFrames(), this._draw()
					}.bind(this), this._runIfPreloadsAreDone = function() {
						var e = this._isGlobal ? window : this;
						if (0 === e._preloadCount) {
							var t = document.getElementById(e._loadingScreenId);
							t && t.parentNode.removeChild(t), e._setup(), e._runFrames(), e._draw()
						}
					}, this._decrementPreload = function() {
						var e = this._isGlobal ? window : this;
						e._setProperty("_preloadCount", e._preloadCount - 1), e._runIfPreloadsAreDone()
					}, this._wrapPreload = function(e, t) {
						return function() {
							this._incrementPreload();
							for (var r = new Array(arguments.length), n = 0; n < r.length; ++n) r[n] = arguments[n];
							return r.push(this._decrementPreload.bind(this)), this._registeredPreloadMethods[t].apply(e, r)
						}.bind(this)
					}, this._incrementPreload = function() {
						var e = this._isGlobal ? window : this;
						e._setProperty("_preloadCount", e._preloadCount + 1)
					}, this._setup = function() {
						var e = this._isGlobal ? window : this;
						if ("function" == typeof e.preload)
							for (var t in this._preloadMethods) e[t] = this._preloadMethods[t][t], e[t] && this && (e[t] = e[t].bind(this));
						"function" == typeof e.setup && e.setup();
						for (var r = document.getElementsByTagName("canvas"), n = 0; n < r.length; n++) {
							var o = r[n];
							"true" === o.dataset.hidden && (o.style.visibility = "", delete o.dataset.hidden)
						}
						this._setupDone = !0
					}.bind(this), this._draw = function() {
						var e = window.performance.now(),
							t = e - this._lastFrameTime,
							r = 1e3 / this._targetFrameRate,
							n = 5;
						(!this._loop || t >= r - n) && (this._setProperty("frameCount", this.frameCount + 1), this.redraw(), this._updateMouseCoords(), this._updateTouchCoords(), this._frameRate = 1e3 / (e - this._lastFrameTime), this._lastFrameTime = e), this._loop && (this._requestAnimId = window.requestAnimationFrame(this._draw))
					}.bind(this), this._runFrames = function() {
						this._updateInterval && clearInterval(this._updateInterval)
					}.bind(this), this._setProperty = function(e, t) {
						this[e] = t, this._isGlobal && (window[e] = t)
					}.bind(this), this.remove = function() {
						if (this._curElement) {
							this._loop = !1, this._requestAnimId && window.cancelAnimationFrame(this._requestAnimId);
							for (var e in this._events) window.removeEventListener(e, this._events[e]);
							for (var t = 0; t < this._elements.length; t++) {
								var r = this._elements[t];
								r.elt.parentNode && r.elt.parentNode.removeChild(r.elt);
								for (var n in r._events) r.elt.removeEventListener(n, r._events[n])
							}
							var i = this;
							if (this._registeredMethods.remove.forEach(function(e) {
									"undefined" != typeof e && e.call(i)
								}), this._isGlobal) {
								for (var a in o.prototype) try {
									delete window[a]
								} catch (e) {
									window[a] = void 0
								}
								for (var s in this)
									if (this.hasOwnProperty(s)) try {
										delete window[s]
									} catch (e) {
										window[s] = void 0
									}
							}
						}
					}.bind(this), this._registeredMethods.init.forEach(function(e) {
						"undefined" != typeof e && e.call(this)
					}, this);
					var n = this._createFriendlyGlobalFunctionBinder();
					if (e) e(this);
					else {
						this._isGlobal = !0, o.instance = this;
						for (var i in o.prototype)
							if ("function" == typeof o.prototype[i]) {
								var a = i.substring(2);
								this._events.hasOwnProperty(a) || (Math.hasOwnProperty(i) && Math[i] === o.prototype[i] ? n(i, o.prototype[i]) : n(i, o.prototype[i].bind(this)))
							} else n(i, o.prototype[i]);
						for (var s in this) this.hasOwnProperty(s) && n(s, this[s])
					}
					for (var h in this._events) {
						var l = this["_on" + h];
						if (l) {
							var u = l.bind(this);
							window.addEventListener(h, u), this._events[h] = u
						}
					}
					var p = function() {
							this._setProperty("focused", !0)
						}.bind(this),
						c = function() {
							this._setProperty("focused", !1)
						}.bind(this);
					window.addEventListener("focus", p), window.addEventListener("blur", c), this.registerMethod("remove", function() {
						window.removeEventListener("focus", p), window.removeEventListener("blur", c)
					}), r ? this._start() : "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1)
				};
			o.instance = null, o.disableFriendlyErrors = !1;
			for (var i in n) o.prototype[i] = n[i];
			o.prototype._preloadMethods = {
				loadJSON: o.prototype,
				loadImage: o.prototype,
				loadStrings: o.prototype,
				loadXML: o.prototype,
				loadShape: o.prototype,
				loadTable: o.prototype,
				loadFont: o.prototype,
				loadModel: o.prototype
			}, o.prototype._registeredMethods = {
				init: [],
				pre: [],
				post: [],
				remove: []
			}, o.prototype._registeredPreloadMethods = {}, o.prototype.registerPreloadMethod = function(e, t) {
				o.prototype._preloadMethods.hasOwnProperty(e) || (o.prototype._preloadMethods[e] = t)
			}, o.prototype.registerMethod = function(e, t) {
				o.prototype._registeredMethods.hasOwnProperty(e) || (o.prototype._registeredMethods[e] = []), o.prototype._registeredMethods[e].push(t)
			}, o.prototype._createFriendlyGlobalFunctionBinder = function(e) {
				e = e || {};
				var t = e.globalObject || window,
					r = e.log || console.log.bind(console),
					n = {
						print: !0
					};
				return function(e, i) {
					if (o.disableFriendlyErrors || "undefined" != typeof IS_MINIFIED || "function" != typeof i || e in o.prototype._preloadMethods) t[e] = i;
					else try {
						if (e in t && !(e in n)) throw new Error('global "' + e + '" already exists');
						Object.defineProperty(t, e, {
							configurable: !0,
							enumerable: !0,
							get: function() {
								return i
							},
							set: function(n) {
								Object.defineProperty(t, e, {
									configurable: !0,
									enumerable: !0,
									value: n,
									writable: !0
								}), r('You just changed the value of "' + e + "\", which was a p5 function. This could cause problems later if you're not careful.")
							}
						})
					} catch (n) {
						r('p5 had problems creating the global function "' + e + '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'), t[e] = i
					}
				}
			}, t.exports = o
		}, {
			"./constants": 36,
			"./shim": 46
		}],
		38: [function(e, t, r) {
			"use strict";
			var n = e("./core");
			e("./error_helpers");
			var o = 20,
				i = 20;
			n.prototype.bezier = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return this._renderer.isP3D ? this._validateParameters("bezier", e, ["Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number"]) : this._validateParameters("bezier", e, ["Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number"]), this._renderer._doStroke ? (this._renderer.isP3D ? (e.push(o), this._renderer.bezier(e)) : this._renderer.bezier(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), this) : this
			}, n.prototype.bezierDetail = function(e) {
				return o = e, this
			}, n.prototype.bezierPoint = function(e, t, r, n, o) {
				var i = 1 - o;
				return Math.pow(i, 3) * e + 3 * Math.pow(i, 2) * o * t + 3 * i * Math.pow(o, 2) * r + Math.pow(o, 3) * n
			}, n.prototype.bezierTangent = function(e, t, r, n, o) {
				var i = 1 - o;
				return 3 * n * Math.pow(o, 2) - 3 * r * Math.pow(o, 2) + 6 * r * i * o - 6 * t * i * o + 3 * t * Math.pow(i, 2) - 3 * e * Math.pow(i, 2)
			}, n.prototype.curve = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return this._renderer.isP3D ? this._validateParameters("curve", e, ["Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number"]) : this._validateParameters("curve", e, ["Number", "Number", "Number", "Number", "Number", "Number", "Number", "Number"]), this._renderer._doStroke ? (this._renderer.isP3D ? (e.push(i), this._renderer.curve(e)) : this._renderer.curve(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), this) : this
			}, n.prototype.curveDetail = function(e) {
				return i = e, this
			}, n.prototype.curveTightness = function(e) {
				this._renderer._curveTightness = e
			}, n.prototype.curvePoint = function(e, t, r, n, o) {
				var i = o * o * o,
					a = o * o,
					s = -.5 * i + a - .5 * o,
					h = 1.5 * i - 2.5 * a + 1,
					l = -1.5 * i + 2 * a + .5 * o,
					u = .5 * i - .5 * a;
				return e * s + t * h + r * l + n * u
			}, n.prototype.curveTangent = function(e, t, r, n, o) {
				var i = o * o,
					a = -3 * i / 2 + 2 * o - .5,
					s = 9 * i / 2 - 5 * o,
					h = -9 * i / 2 + 4 * o + .5,
					l = 3 * i / 2 - o;
				return e * a + t * s + r * h + n * l
			}, t.exports = n
		}, {
			"./core": 37,
			"./error_helpers": 40
		}],
		39: [function(e, t, r) {
			"use strict";

			function n() {
				return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0
			}

			function o() {
				return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0
			}

			function i(e) {
				var t = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
				if (!t) throw new Error("Fullscreen not enabled in this browser.");
				e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
			}

			function a() {
				document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
			}
			var s = e("./core"),
				h = e("./constants"),
				l = [h.ARROW, h.CROSS, h.HAND, h.MOVE, h.TEXT, h.WAIT];
			s.prototype._frameRate = 0, s.prototype._lastFrameTime = window.performance.now(), s.prototype._targetFrameRate = 60;
			var u = window.print;
			window.console && console.log ? s.prototype.print = function(e) {
				try {
					if (0 === arguments.length) u();
					else if (arguments.length > 1) console.log.apply(console, arguments);
					else {
						var t = JSON.parse(JSON.stringify(e));
						console.log(t)
					}
				} catch (t) {
					console.log(e)
				}
			} : s.prototype.print = function() {}, s.prototype.frameCount = 0, s.prototype.focused = document.hasFocus(), s.prototype.cursor = function(e, t, r) {
				var n = "auto",
					o = this._curElement.elt;
				if (l.indexOf(e) > -1) n = e;
				else if ("string" == typeof e) {
					var i = "";
					t && r && "number" == typeof t && "number" == typeof r && (i = t + " " + r), n = "http://" !== e.substring(0, 6) ? "url(" + e + ") " + i + ", auto" : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(e) ? "url(" + e + ") " + i + ", auto" : e
				}
				o.style.cursor = n
			}, s.prototype.frameRate = function(e) {
				return "number" != typeof e || e <= 0 ? this._frameRate : (this._setProperty("_targetFrameRate", e), this._runFrames(), this)
			}, s.prototype.getFrameRate = function() {
				return this.frameRate()
			}, s.prototype.setFrameRate = function(e) {
				return this.frameRate(e)
			}, s.prototype.noCursor = function() {
				this._curElement.elt.style.cursor = "none"
			}, s.prototype.displayWidth = screen.width, s.prototype.displayHeight = screen.height, s.prototype.windowWidth = n(), s.prototype.windowHeight = o(), s.prototype._onresize = function(e) {
				this._setProperty("windowWidth", n()), this._setProperty("windowHeight", o());
				var t, r = this._isGlobal ? window : this;
				"function" == typeof r.windowResized && (t = r.windowResized(e), void 0 === t || t || e.preventDefault())
			}, s.prototype.width = 0, s.prototype.height = 0, s.prototype.fullscreen = function(e) {
				return "undefined" == typeof e ? document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement : void(e ? i(document.documentElement) : a())
			}, s.prototype.pixelDensity = function(e) {
				return "number" != typeof e ? this._pixelDensity : (this._pixelDensity = e, void this.resizeCanvas(this.width, this.height, !0))
			}, s.prototype.displayDensity = function() {
				return window.devicePixelRatio
			}, s.prototype.getURL = function() {
				return location.href
			}, s.prototype.getURLPath = function() {
				return location.pathname.split("/").filter(function(e) {
					return "" !== e
				})
			}, s.prototype.getURLParams = function() {
				for (var e, t = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, r = {}; null != (e = t.exec(location.search));) e.index === t.lastIndex && t.lastIndex++, r[e[1]] = e[2];
				return r
			}, t.exports = s
		}, {
			"./constants": 36,
			"./core": 37
		}],
		40: [function(e, t, r) {
			"use strict";

			function n(e, t, r) {
				if (e.match(/^p5\./)) {
					var n = e.split(".");
					return r instanceof h[n[1]]
				}
				return "Boolean" === e || e.toLowerCase() === t || y.indexOf(e) > -1 && g(r)
			}

			function o(e, t, r) {
				l && (i(), l = !1), "undefined" === d(r) ? r = "#B40033" : "number" === d(r) && (r = w[r])
			}

			function i() {
				var e = "transparent",
					t = "#ED225D",
					r = "#ED225D",
					n = "white";
				console.log("%c    _ \n /\\| |/\\ \n \\ ` ' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.", "background-color:" + e + ";color:" + t + ";", "background-color:" + r + ";color:" + n + ";")
			}

			function a() {
				var t = {},
					r = function(e) {
						return Object.getOwnPropertyNames(e).filter(function(e) {
							return "_" !== e[0] && (!(e in t) && (t[e] = !0, !0))
						}).map(function(t) {
							var r;
							return r = "function" == typeof e[t] ? "function" : t === t.toUpperCase() ? "constant" : "variable", {
								name: t,
								type: r
							}
						})
					};
				T = [].concat(r(h.prototype), r(e("./constants"))), T.sort(function(e, t) {
					return t.name.length - e.name.length
				})
			}

			function s(e, t) {
				t || (t = console.log.bind(console)), T || a(), T.some(function(r) {
					if (e.message && e.message.indexOf(r.name) !== -1) return t("%cDid you just try to use p5.js's " + r.name + ("function" === r.type ? "() " : " ") + r.type + "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: " + M, "color: #B40033"), !0
				})
			}
			for (var h = e("./core"), l = !1, u = {}, p = u.toString, c = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], f = 0; f < c.length; f++) u["[object " + c[f] + "]"] = c[f].toLowerCase();
			var d = function(e) {
					return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
				},
				m = Array.isArray || function(e) {
					return "array" === d(e)
				},
				g = function(e) {
					return !m(e) && e - parseFloat(e) + 1 >= 0
				},
				y = ["Number", "Integer", "Number/Constant"],
				v = 0,
				x = 1,
				_ = 2,
				b = 3,
				w = ["#2D7BB6", "#EE9900", "#4DB200", "#C83C00"];
			h.prototype._validateParameters = function(e, t, r) {
				m(r[0]) || (r = [r]);
				for (var i, a = Math.abs(t.length - r[0].length), s = 0, h = 1, l = r.length; h < l; h++) {
					var u = Math.abs(t.length - r[h].length);
					u <= a && (s = h, a = u)
				}
				var p = "X";
				a > 0 && (i = "You wrote " + e + "(", t.length > 0 && (i += p + Array(t.length).join("," + p)), i += "). " + e + " was expecting " + r[s].length + " parameters. Try " + e + "(", r[s].length > 0 && (i += p + Array(r[s].length).join("," + p)), i += ").", r.length > 1 && (i += " " + e + " takes different numbers of parameters depending on what you want to do. Click this link to learn more: "), o(i, e, v));
				for (var c = 0; c < r.length; c++)
					for (var f = 0; f < r[c].length && f < t.length; f++) {
						var g = r[c][f],
							y = d(t[f]);
						"undefined" === y || null === y ? o("It looks like " + e + " received an empty variable in spot #" + (f + 1) + ". If not intentional, this is often a problem with scope: [link to scope].", e, x) : "*" === g || n(g, y, t[f]) || (i = e + " was expecting a " + g.toLowerCase() + " for parameter #" + (f + 1) + ", received ", i += "string" === y ? '"' + t[f] + '"' : t[f], i += " instead.", r.length > 1 && (i += " " + e + " takes different numbers of parameters depending on what you want to do. Click this link to learn more:"), o(i, e, _))
					}
			}, h.prototype._validateParameters = function() {
				return !0
			};
			var S = {
				0: {
					fileType: "image",
					method: "loadImage",
					message: " hosting the image online,"
				},
				1: {
					fileType: "XML file",
					method: "loadXML"
				},
				2: {
					fileType: "table file",
					method: "loadTable"
				},
				3: {
					fileType: "text file",
					method: "loadStrings"
				},
				4: {
					fileType: "font",
					method: "loadFont",
					message: " hosting the font online,"
				}
			};
			h._friendlyFileLoadError = function(e, t) {
				var r = S[e],
					n = "It looks like there was a problem loading your " + r.fileType + ". Try checking if the file path%c [" + t + "] %cis correct," + (r.message || "") + " or running a local server.";
				o(n, r.method, b)
			};
			var T = null,
				M = "https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";
			h.prototype._helpForMisusedAtTopLevelCode = s, "complete" !== document.readyState && (window.addEventListener("error", s, !1), window.addEventListener("load", function() {
				window.removeEventListener("error", s, !1)
			})), t.exports = h
		}, {
			"./constants": 36,
			"./core": 37
		}],
		41: [function(e, t, r) {
			function n(e, t, r) {
				var n = t.bind(r);
				r.elt.addEventListener(e, n, !1), r._events[e] = n
			}
			var o = e("./core");
			o.Element = function(e, t) {
				this.elt = e, this._pInst = t, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight
			}, o.Element.prototype.parent = function(e) {
				return 0 === arguments.length ? this.elt.parentNode : ("string" == typeof e ? ("#" === e[0] && (e = e.substring(1)), e = document.getElementById(e)) : e instanceof o.Element && (e = e.elt), e.appendChild(this.elt), this)
			}, o.Element.prototype.id = function(e) {
				return 0 === arguments.length ? this.elt.id : (this.elt.id = e, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this)
			}, o.Element.prototype.class = function(e) {
				return 0 === arguments.length ? this.elt.className : (this.elt.className = e, this)
			}, o.Element.prototype.mousePressed = function(e) {
				return n("mousedown", e, this), n("touchstart", e, this), this
			}, o.Element.prototype.mouseWheel = function(e) {
				return n("wheel", e, this), this
			}, o.Element.prototype.mouseReleased = function(e) {
				return n("mouseup", e, this), n("touchend", e, this), this
			}, o.Element.prototype.mouseClicked = function(e) {
				return n("click", e, this), this
			}, o.Element.prototype.mouseMoved = function(e) {
				return n("mousemove", e, this), n("touchmove", e, this), this
			}, o.Element.prototype.mouseOver = function(e) {
				return n("mouseover", e, this), this
			}, o.Element.prototype.changed = function(e) {
				return n("change", e, this), this
			}, o.Element.prototype.input = function(e) {
				return n("input", e, this), this
			}, o.Element.prototype.mouseOut = function(e) {
				return n("mouseout", e, this), this
			}, o.Element.prototype.touchStarted = function(e) {
				return n("touchstart", e, this), n("mousedown", e, this), this
			}, o.Element.prototype.touchMoved = function(e) {
				return n("touchmove", e, this), n("mousemove", e, this), this
			}, o.Element.prototype.touchEnded = function(e) {
				return n("touchend", e, this), n("mouseup", e, this), this
			}, o.Element.prototype.dragOver = function(e) {
				return n("dragover", e, this), this
			}, o.Element.prototype.dragLeave = function(e) {
				return n("dragleave", e, this), this
			}, o.Element.prototype.drop = function(e, t) {
				function r(t) {
					var r = new o.File(t);
					return function(t) {
						r.data = t.target.result, e(r)
					}
				}
				return window.File && window.FileReader && window.FileList && window.Blob ? (n("dragover", function(e) {
					e.stopPropagation(), e.preventDefault()
				}, this), n("dragleave", function(e) {
					e.stopPropagation(), e.preventDefault()
				}, this), arguments.length > 1 && n("drop", t, this), n("drop", function(e) {
					e.stopPropagation(), e.preventDefault();
					for (var t = e.dataTransfer.files, n = 0; n < t.length; n++) {
						var o = t[n],
							i = new FileReader;
						i.onload = r(o), o.type.indexOf("text") > -1 ? i.readAsText(o) : i.readAsDataURL(o)
					}
				}, this)) : console.log("The File APIs are not fully supported in this browser."), this
			}, o.Element.prototype._setProperty = function(e, t) {
				this[e] = t
			}, t.exports = o.Element
		}, {
			"./core": 37
		}],
		42: [function(e, t, r) {
			var n = e("./core"),
				o = e("./constants");
			n.Graphics = function(e, t, r, i) {
				var a = r || o.P2D,
					s = document.createElement("canvas"),
					h = this._userNode || document.body;
				h.appendChild(s), n.Element.call(this, s, i, !1), this._styles = [], this.width = e, this.height = t, this._pixelDensity = i._pixelDensity, a === o.WEBGL ? this._renderer = new n.RendererGL(s, this, !1) : this._renderer = new n.Renderer2D(s, this, !1), this._renderer.resize(e, t), this._renderer._applyDefaults(), i._elements.push(this);
				for (var l in n.prototype) this[l] || ("function" == typeof n.prototype[l] ? this[l] = n.prototype[l].bind(this) : this[l] = n.prototype[l]);
				return this
			}, n.Graphics.prototype = Object.create(n.Element.prototype), t.exports = n.Graphics
		}, {
			"./constants": 36,
			"./core": 37
		}],
		43: [function(e, t, r) {
			function n(e) {
				var t = 0,
					r = 0;
				if (e.offsetParent) {
					do t += e.offsetLeft, r += e.offsetTop; while (e = e.offsetParent)
				} else t += e.offsetLeft, r += e.offsetTop;
				return [t, r]
			}
			var o = e("./core"),
				i = e("../core/constants");
			o.Renderer = function(e, t, r) {
				o.Element.call(this, e, t), this.canvas = e, this._pInst = t, r ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = []), this._textSize = 12, this._textLeading = 15, this._textFont = "sans-serif", this._textStyle = i.NORMAL, this._textAscent = null, this._textDescent = null, this._rectMode = i.CORNER, this._ellipseMode = i.CENTER, this._curveTightness = 0, this._imageMode = i.CORNER, this._tint = null, this._doStroke = !0, this._doFill = !0, this._strokeSet = !1, this._fillSet = !1, this._colorMode = i.RGB, this._colorMaxes = {
					rgb: [255, 255, 255, 255],
					hsb: [360, 100, 100, 1],
					hsl: [360, 100, 100, 1]
				}
			}, o.Renderer.prototype = Object.create(o.Element.prototype), o.Renderer.prototype.resize = function(e, t) {
				this.width = e, this.height = t, this.elt.width = e * this._pInst._pixelDensity, this.elt.height = t * this._pInst._pixelDensity, this.elt.style.width = e + "px", this.elt.style.height = t + "px", this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height))
			}, o.Renderer.prototype.textLeading = function(e) {
				return arguments.length && arguments[0] ? (this._setProperty("_textLeading", e), this) : this._textLeading
			}, o.Renderer.prototype.textSize = function(e) {
				return arguments.length && arguments[0] ? (this._setProperty("_textSize", e), this._setProperty("_textLeading", e * i._DEFAULT_LEADMULT), this._applyTextProperties()) : this._textSize
			}, o.Renderer.prototype.textStyle = function(e) {
				return arguments.length && arguments[0] ? (e !== i.NORMAL && e !== i.ITALIC && e !== i.BOLD || this._setProperty("_textStyle", e), this._applyTextProperties()) : this._textStyle
			}, o.Renderer.prototype.textAscent = function() {
				return null === this._textAscent && this._updateTextMetrics(), this._textAscent
			}, o.Renderer.prototype.textDescent = function() {
				return null === this._textDescent && this._updateTextMetrics(), this._textDescent
			}, o.Renderer.prototype._applyDefaults = function() {
				return this
			}, o.Renderer.prototype._isOpenType = function(e) {
				return e = e || this._textFont, "object" == typeof e && e.font && e.font.supported
			}, o.Renderer.prototype._updateTextMetrics = function() {
				if (this._isOpenType()) return this._setProperty("_textAscent", this._textFont._textAscent()), this._setProperty("_textDescent", this._textFont._textDescent()), this;
				var e = document.createElement("span");
				e.style.fontFamily = this._textFont, e.style.fontSize = this._textSize + "px", e.innerHTML = "ABCjgq|";
				var t = document.createElement("div");
				t.style.display = "inline-block", t.style.width = "1px", t.style.height = "0px";
				var r = document.createElement("div");
				r.appendChild(e), r.appendChild(t), r.style.height = "0px", r.style.overflow = "hidden", document.body.appendChild(r), t.style.verticalAlign = "baseline";
				var o = n(t),
					i = n(e),
					a = o[1] - i[1];
				t.style.verticalAlign = "bottom", o = n(t), i = n(e);
				var s = o[1] - i[1],
					h = s - a;
				return document.body.removeChild(r), this._setProperty("_textAscent", a), this._setProperty("_textDescent", h), this
			}, t.exports = o.Renderer
		}, {
			"../core/constants": 36,
			"./core": 37
		}],
		44: [function(e, t, r) {
			var n = e("./core"),
				o = e("./canvas"),
				i = e("./constants"),
				a = e("../image/filters");
			e("./p5.Renderer");
			var s = "rgba(0,0,0,0)";
			n.Renderer2D = function(e, t, r) {
				return n.Renderer.call(this, e, t, r), this.drawingContext = this.canvas.getContext("2d"), this._pInst._setProperty("drawingContext", this.drawingContext), this
			}, n.Renderer2D.prototype = Object.create(n.Renderer.prototype), n.Renderer2D.prototype._applyDefaults = function() {
				this.drawingContext.fillStyle = i._DEFAULT_FILL, this.drawingContext.strokeStyle = i._DEFAULT_STROKE, this.drawingContext.lineCap = i.ROUND, this.drawingContext.font = "normal 12px sans-serif"
			}, n.Renderer2D.prototype.resize = function(e, t) {
				n.Renderer.prototype.resize.call(this, e, t), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity)
			}, n.Renderer2D.prototype.background = function() {
				if (this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), arguments[0] instanceof n.Image) this._pInst.image(arguments[0], 0, 0, this.width, this.height);
				else {
					var e = this.drawingContext.fillStyle,
						t = this._pInst.color.apply(this, arguments),
						r = t.toString();
					this.drawingContext.fillStyle = r, this.drawingContext.fillRect(0, 0, this.width, this.height), this.drawingContext.fillStyle = e
				}
				this.drawingContext.restore()
			}, n.Renderer2D.prototype.clear = function() {
				this.drawingContext.clearRect(0, 0, this.width, this.height)
			}, n.Renderer2D.prototype.fill = function() {
				var e = this.drawingContext,
					t = this._pInst.color.apply(this, arguments);
				e.fillStyle = t.toString()
			}, n.Renderer2D.prototype.stroke = function() {
				var e = this.drawingContext,
					t = this._pInst.color.apply(this, arguments);
				e.strokeStyle = t.toString()
			}, n.Renderer2D.prototype.image = function(e, t, r, o, i, a, s, h, l) {
				var u;
				try {
					this._tint && (n.MediaElement && e instanceof n.MediaElement && e.loadPixels(), e.canvas && (u = this._getTintedImageCanvas(e))), u || (u = e.canvas || e.elt), this.drawingContext.drawImage(u, t, r, o, i, a, s, h, l)
				} catch (e) {
					if ("NS_ERROR_NOT_AVAILABLE" !== e.name) throw e
				}
			}, n.Renderer2D.prototype._getTintedImageCanvas = function(e) {
				if (!e.canvas) return e;
				var t = a._toPixels(e.canvas),
					r = document.createElement("canvas");
				r.width = e.canvas.width, r.height = e.canvas.height;
				for (var n = r.getContext("2d"), o = n.createImageData(e.canvas.width, e.canvas.height), i = o.data, s = 0; s < t.length; s += 4) {
					var h = t[s],
						l = t[s + 1],
						u = t[s + 2],
						p = t[s + 3];
					i[s] = h * this._tint[0] / 255, i[s + 1] = l * this._tint[1] / 255, i[s + 2] = u * this._tint[2] / 255, i[s + 3] = p * this._tint[3] / 255
				}
				return n.putImageData(o, 0, 0), r
			}, n.Renderer2D.prototype.blendMode = function(e) {
				this.drawingContext.globalCompositeOperation = e
			}, n.Renderer2D.prototype.blend = function() {
				var e = this.drawingContext.globalCompositeOperation,
					t = arguments[arguments.length - 1],
					r = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
				this.drawingContext.globalCompositeOperation = t, this._pInst ? this._pInst.copy.apply(this._pInst, r) : this.copy.apply(this, r), this.drawingContext.globalCompositeOperation = e
			}, n.Renderer2D.prototype.copy = function() {
				var e, t, r, o, i, a, s, h, l;
				if (9 === arguments.length) e = arguments[0], t = arguments[1], r = arguments[2], o = arguments[3], i = arguments[4], a = arguments[5], s = arguments[6], h = arguments[7], l = arguments[8];
				else {
					if (8 !== arguments.length) throw new Error("Signature not supported");
					e = this._pInst, t = arguments[0], r = arguments[1], o = arguments[2], i = arguments[3], a = arguments[4], s = arguments[5], h = arguments[6], l = arguments[7]
				}
				n.Renderer2D._copyHelper(e, t, r, o, i, a, s, h, l)
			}, n.Renderer2D._copyHelper = function(e, t, r, n, o, i, a, s, h) {
				e.canvas || e.loadPixels();
				var l = e.canvas.width / e.width;
				this.drawingContext.drawImage(e.canvas, l * t, l * r, l * n, l * o, i, a, s, h)
			}, n.Renderer2D.prototype.get = function(e, t, r, o) {
				if (void 0 === e && void 0 === t && void 0 === r && void 0 === o ? (e = 0, t = 0, r = this.width, o = this.height) : void 0 === r && void 0 === o && (r = 1, o = 1), e + r < 0 || t + o < 0 || e > this.width || t > this.height) return [0, 0, 0, 255];
				var i = this._pInst || this,
					a = i._pixelDensity;
				e = Math.floor(e), t = Math.floor(t);
				var s = e * a,
					h = t * a;
				if (1 === r && 1 === o) {
					var l = this.drawingContext.getImageData(s, h, 1, 1).data;
					return [l[0], l[1], l[2], l[3]]
				}
				var u = Math.min(r, i.width),
					p = Math.min(o, i.height),
					c = u * a,
					f = p * a,
					d = new n.Image(u, p);
				return d.canvas.getContext("2d").drawImage(this.canvas, s, h, c, f, 0, 0, u, p), d
			}, n.Renderer2D.prototype.loadPixels = function() {
				var e = this._pixelDensity || this._pInst._pixelDensity,
					t = this.width * e,
					r = this.height * e,
					n = this.drawingContext.getImageData(0, 0, t, r);
				this._pInst ? (this._pInst._setProperty("imageData", n), this._pInst._setProperty("pixels", n.data)) : (this._setProperty("imageData", n), this._setProperty("pixels", n.data))
			}, n.Renderer2D.prototype.set = function(e, t, r) {
				if (e = Math.floor(e), t = Math.floor(t), r instanceof n.Image) this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this.drawingContext.drawImage(r.canvas, e, t), this.loadPixels.call(this._pInst), this.drawingContext.restore();
				else {
					var o = this._pInst || this,
						i = 0,
						a = 0,
						s = 0,
						h = 0,
						l = 4 * (t * o._pixelDensity * (this.width * o._pixelDensity) + e * o._pixelDensity);
					if (o.imageData || o.loadPixels.call(o), "number" == typeof r) l < o.pixels.length && (i = r, a = r, s = r, h = 255);
					else if (r instanceof Array) {
						if (r.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");
						l < o.pixels.length && (i = r[0], a = r[1], s = r[2], h = r[3])
					} else r instanceof n.Color && l < o.pixels.length && (i = r.levels[0], a = r.levels[1], s = r.levels[2], h = r.levels[3]);
					for (var u = 0; u < o._pixelDensity; u++)
						for (var p = 0; p < o._pixelDensity; p++) l = 4 * ((t * o._pixelDensity + p) * this.width * o._pixelDensity + (e * o._pixelDensity + u)), o.pixels[l] = i, o.pixels[l + 1] = a, o.pixels[l + 2] = s, o.pixels[l + 3] = h
				}
			}, n.Renderer2D.prototype.updatePixels = function(e, t, r, n) {
				var o = this._pixelDensity || this._pInst._pixelDensity;
				void 0 === e && void 0 === t && void 0 === r && void 0 === n && (e = 0, t = 0, r = this.width, n = this.height), r *= o, n *= o, this._pInst ? this.drawingContext.putImageData(this._pInst.imageData, e, t, 0, 0, r, n) : this.drawingContext.putImageData(this.imageData, e, t, 0, 0, r, n)
			}, n.Renderer2D.prototype._acuteArcToBezier = function(e, t) {
				var r = t / 2,
					n = Math.cos(r),
					o = Math.sin(r),
					i = 1 / Math.tan(r),
					a = e + r,
					s = Math.cos(a),
					h = Math.sin(a),
					l = (4 - n) / 3,
					u = o + (n - l) * i;
				return {
					ax: Math.cos(e),
					ay: Math.sin(e),
					bx: l * s + u * h,
					by: l * h - u * s,
					cx: l * s - u * h,
					cy: l * h + u * s,
					dx: Math.cos(e + t),
					dy: Math.sin(e + t)
				}
			}, n.Renderer2D.prototype.arc = function(e, t, r, n, a, s, h) {
				for (var l = this.drawingContext, u = o.arcModeAdjust(e, t, r, n, this._ellipseMode), p = u.w / 2, c = u.h / 2, f = 1e-5, d = 0, m = []; s - a > f;) d = Math.min(s - a, i.HALF_PI), m.push(this._acuteArcToBezier(a, d)), a += d;
				return this._doFill && (l.beginPath(), m.forEach(function(e, t) {
					0 === t && l.moveTo(u.x + e.ax * p, u.y + e.ay * c), l.bezierCurveTo(u.x + e.bx * p, u.y + e.by * c, u.x + e.cx * p, u.y + e.cy * c, u.x + e.dx * p, u.y + e.dy * c)
				}), h !== i.PIE && null != h || l.lineTo(u.x, u.y), l.closePath(), l.fill()), this._doStroke && (l.beginPath(), m.forEach(function(e, t) {
					0 === t && l.moveTo(u.x + e.ax * p, u.y + e.ay * c), l.bezierCurveTo(u.x + e.bx * p, u.y + e.by * c, u.x + e.cx * p, u.y + e.cy * c, u.x + e.dx * p, u.y + e.dy * c)
				}), h === i.PIE ? (l.lineTo(u.x, u.y), l.closePath()) : h === i.CHORD && l.closePath(), l.stroke()), this
			}, n.Renderer2D.prototype.ellipse = function(e) {
				var t = this.drawingContext,
					r = this._doFill,
					n = this._doStroke,
					o = e[0],
					i = e[1],
					a = e[2],
					h = e[3];
				if (r && !n) {
					if (t.fillStyle === s) return this
				} else if (!r && n && t.strokeStyle === s) return this;
				var l = .5522847498,
					u = a / 2 * l,
					p = h / 2 * l,
					c = o + a,
					f = i + h,
					d = o + a / 2,
					m = i + h / 2;
				t.beginPath(), t.moveTo(o, m), t.bezierCurveTo(o, m - p, d - u, i, d, i), t.bezierCurveTo(d + u, i, c, m - p, c, m), t.bezierCurveTo(c, m + p, d + u, f, d, f), t.bezierCurveTo(d - u, f, o, m + p, o, m), t.closePath(), r && t.fill(), n && t.stroke()
			}, n.Renderer2D.prototype.line = function(e, t, r, n) {
				var o = this.drawingContext;
				return this._doStroke ? o.strokeStyle === s ? this : (o.lineWidth % 2 === 1 && o.translate(.5, .5), o.beginPath(), o.moveTo(e, t), o.lineTo(r, n), o.stroke(), o.lineWidth % 2 === 1 && o.translate(-.5, -.5), this) : this
			}, n.Renderer2D.prototype.point = function(e, t) {
				var r = this.drawingContext,
					n = r.strokeStyle,
					o = r.fillStyle;
				return this._doStroke ? r.strokeStyle === s ? this : (e = Math.round(e), t = Math.round(t), r.fillStyle = n, r.lineWidth > 1 ? (r.beginPath(), r.arc(e, t, r.lineWidth / 2, 0, i.TWO_PI, !1), r.fill()) : r.fillRect(e, t, 1, 1), void(r.fillStyle = o)) : this
			}, n.Renderer2D.prototype.quad = function(e, t, r, n, o, i, a, h) {
				var l = this.drawingContext,
					u = this._doFill,
					p = this._doStroke;
				if (u && !p) {
					if (l.fillStyle === s) return this
				} else if (!u && p && l.strokeStyle === s) return this;
				return l.beginPath(), l.moveTo(e, t), l.lineTo(r, n), l.lineTo(o, i), l.lineTo(a, h), l.closePath(), u && l.fill(), p && l.stroke(), this
			}, n.Renderer2D.prototype.rect = function(e) {
				var t = e[0],
					r = e[1],
					n = e[2],
					o = e[3],
					i = e[4],
					a = e[5],
					h = e[6],
					l = e[7],
					u = this.drawingContext,
					p = this._doFill,
					c = this._doStroke;
				if (p && !c) {
					if (u.fillStyle === s) return this
				} else if (!p && c && u.strokeStyle === s) return this;
				if (this._doStroke && u.lineWidth % 2 === 1 && u.translate(.5, .5), u.beginPath(), "undefined" == typeof i) u.rect(t, r, n, o);
				else {
					"undefined" == typeof a && (a = i), "undefined" == typeof h && (h = a), "undefined" == typeof l && (l = h);
					var f = n / 2,
						d = o / 2;
					n < 2 * i && (i = f), o < 2 * i && (i = d), n < 2 * a && (a = f), o < 2 * a && (a = d), n < 2 * h && (h = f), o < 2 * h && (h = d), n < 2 * l && (l = f), o < 2 * l && (l = d), u.beginPath(), u.moveTo(t + i, r), u.arcTo(t + n, r, t + n, r + o, a), u.arcTo(t + n, r + o, t, r + o, h), u.arcTo(t, r + o, t, r, l), u.arcTo(t, r, t + n, r, i), u.closePath()
				}
				return this._doFill && u.fill(), this._doStroke && u.stroke(), this._doStroke && u.lineWidth % 2 === 1 && u.translate(-.5, -.5), this
			}, n.Renderer2D.prototype.triangle = function(e) {
				var t = this.drawingContext,
					r = this._doFill,
					n = this._doStroke,
					o = e[0],
					i = e[1],
					a = e[2],
					h = e[3],
					l = e[4],
					u = e[5];
				if (r && !n) {
					if (t.fillStyle === s) return this
				} else if (!r && n && t.strokeStyle === s) return this;
				t.beginPath(), t.moveTo(o, i), t.lineTo(a, h), t.lineTo(l, u), t.closePath(), r && t.fill(), n && t.stroke()
			}, n.Renderer2D.prototype.endShape = function(e, t, r, n, o, a, s) {
				if (0 === t.length) return this;
				if (!this._doStroke && !this._doFill) return this;
				var h, l = e === i.CLOSE;
				l && !a && t.push(t[0]);
				var u, p, c = t.length;
				if (!r || s !== i.POLYGON && null !== s)
					if (!n || s !== i.POLYGON && null !== s)
						if (!o || s !== i.POLYGON && null !== s)
							if (s === i.POINTS)
								for (u = 0; u < c; u++) h = t[u], this._doStroke && this._pInst.stroke(h[6]), this._pInst.point(h[0], h[1]);
							else if (s === i.LINES)
					for (u = 0; u + 1 < c; u += 2) h = t[u], this._doStroke && this._pInst.stroke(t[u + 1][6]), this._pInst.line(h[0], h[1], t[u + 1][0], t[u + 1][1]);
				else if (s === i.TRIANGLES)
					for (u = 0; u + 2 < c; u += 3) h = t[u], this.drawingContext.beginPath(), this.drawingContext.moveTo(h[0], h[1]), this.drawingContext.lineTo(t[u + 1][0], t[u + 1][1]), this.drawingContext.lineTo(t[u + 2][0], t[u + 2][1]), this.drawingContext.lineTo(h[0], h[1]), this._doFill && (this._pInst.fill(t[u + 2][5]), this.drawingContext.fill()), this._doStroke && (this._pInst.stroke(t[u + 2][6]), this.drawingContext.stroke()), this.drawingContext.closePath();
				else if (s === i.TRIANGLE_STRIP)
					for (u = 0; u + 1 < c; u++) h = t[u], this.drawingContext.beginPath(), this.drawingContext.moveTo(t[u + 1][0], t[u + 1][1]), this.drawingContext.lineTo(h[0], h[1]), this._doStroke && this._pInst.stroke(t[u + 1][6]), this._doFill && this._pInst.fill(t[u + 1][5]), u + 2 < c && (this.drawingContext.lineTo(t[u + 2][0], t[u + 2][1]), this._doStroke && this._pInst.stroke(t[u + 2][6]), this._doFill && this._pInst.fill(t[u + 2][5])), this._doFillStrokeClose();
				else if (s === i.TRIANGLE_FAN) {
					if (c > 2)
						for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[0][0], t[0][1]), this.drawingContext.lineTo(t[1][0], t[1][1]), this.drawingContext.lineTo(t[2][0], t[2][1]), this._doFill && this._pInst.fill(t[2][5]), this._doStroke && this._pInst.stroke(t[2][6]), this._doFillStrokeClose(), u = 3; u < c; u++) h = t[u], this.drawingContext.beginPath(), this.drawingContext.moveTo(t[0][0], t[0][1]), this.drawingContext.lineTo(t[u - 1][0], t[u - 1][1]), this.drawingContext.lineTo(h[0], h[1]), this._doFill && this._pInst.fill(h[5]), this._doStroke && this._pInst.stroke(h[6]), this._doFillStrokeClose()
				} else if (s === i.QUADS)
					for (u = 0; u + 3 < c; u += 4) {
						for (h = t[u], this.drawingContext.beginPath(), this.drawingContext.moveTo(h[0], h[1]), p = 1; p < 4; p++) this.drawingContext.lineTo(t[u + p][0], t[u + p][1]);
						this.drawingContext.lineTo(h[0], h[1]), this._doFill && this._pInst.fill(t[u + 3][5]), this._doStroke && this._pInst.stroke(t[u + 3][6]), this._doFillStrokeClose()
					} else if (s === i.QUAD_STRIP) {
						if (c > 3)
							for (u = 0; u + 1 < c; u += 2) h = t[u], this.drawingContext.beginPath(), u + 3 < c ? (this.drawingContext.moveTo(t[u + 2][0], t[u + 2][1]), this.drawingContext.lineTo(h[0], h[1]), this.drawingContext.lineTo(t[u + 1][0], t[u + 1][1]), this.drawingContext.lineTo(t[u + 3][0], t[u + 3][1]), this._doFill && this._pInst.fill(t[u + 3][5]), this._doStroke && this._pInst.stroke(t[u + 3][6])) : (this.drawingContext.moveTo(h[0], h[1]), this.drawingContext.lineTo(t[u + 1][0], t[u + 1][1])), this._doFillStrokeClose()
					} else {
						for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[0][0], t[0][1]), u = 1; u < c; u++) h = t[u], h.isVert && (h.moveTo ? this.drawingContext.moveTo(h[0], h[1]) : this.drawingContext.lineTo(h[0], h[1]));
						this._doFillStrokeClose()
					}
				else {
					for (this.drawingContext.beginPath(), u = 0; u < c; u++) t[u].isVert ? t[u].moveTo ? this.drawingContext.moveTo([0], t[u][1]) : this.drawingContext.lineTo(t[u][0], t[u][1]) : this.drawingContext.quadraticCurveTo(t[u][0], t[u][1], t[u][2], t[u][3]);
					this._doFillStrokeClose()
				} else {
					for (this.drawingContext.beginPath(), u = 0; u < c; u++) t[u].isVert ? t[u].moveTo ? this.drawingContext.moveTo(t[u][0], t[u][1]) : this.drawingContext.lineTo(t[u][0], t[u][1]) : this.drawingContext.bezierCurveTo(t[u][0], t[u][1], t[u][2], t[u][3], t[u][4], t[u][5]);
					this._doFillStrokeClose()
				} else if (c > 3) {
					var f = [],
						d = 1 - this._curveTightness;
					for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[1][0], t[1][1]), u = 1; u + 2 < c; u++) h = t[u], f[0] = [h[0], h[1]], f[1] = [h[0] + (d * t[u + 1][0] - d * t[u - 1][0]) / 6, h[1] + (d * t[u + 1][1] - d * t[u - 1][1]) / 6], f[2] = [t[u + 1][0] + (d * t[u][0] - d * t[u + 2][0]) / 6, t[u + 1][1] + (d * t[u][1] - d * t[u + 2][1]) / 6], f[3] = [t[u + 1][0], t[u + 1][1]], this.drawingContext.bezierCurveTo(f[1][0], f[1][1], f[2][0], f[2][1], f[3][0], f[3][1]);
					l && this.drawingContext.lineTo(t[u + 1][0], t[u + 1][1]), this._doFillStrokeClose()
				}
				return r = !1, n = !1, o = !1, a = !1, l && t.pop(), this
			}, n.Renderer2D.prototype.noSmooth = function() {
				return "imageSmoothingEnabled" in this.drawingContext ? this.drawingContext.imageSmoothingEnabled = !1 : "mozImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.mozImageSmoothingEnabled = !1 : "webkitImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.webkitImageSmoothingEnabled = !1 : "msImageSmoothingEnabled" in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !1), this
			}, n.Renderer2D.prototype.smooth = function() {
				return "imageSmoothingEnabled" in this.drawingContext ? this.drawingContext.imageSmoothingEnabled = !0 : "mozImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.mozImageSmoothingEnabled = !0 : "webkitImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.webkitImageSmoothingEnabled = !0 : "msImageSmoothingEnabled" in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !0), this
			}, n.Renderer2D.prototype.strokeCap = function(e) {
				return e !== i.ROUND && e !== i.SQUARE && e !== i.PROJECT || (this.drawingContext.lineCap = e), this
			}, n.Renderer2D.prototype.strokeJoin = function(e) {
				return e !== i.ROUND && e !== i.BEVEL && e !== i.MITER || (this.drawingContext.lineJoin = e), this
			}, n.Renderer2D.prototype.strokeWeight = function(e) {
				return "undefined" == typeof e || 0 === e ? this.drawingContext.lineWidth = 1e-4 : this.drawingContext.lineWidth = e, this
			}, n.Renderer2D.prototype._getFill = function() {
				return this.drawingContext.fillStyle
			}, n.Renderer2D.prototype._getStroke = function() {
				return this.drawingContext.strokeStyle
			}, n.Renderer2D.prototype.bezier = function(e, t, r, n, o, i, a, s) {
				return this._pInst.beginShape(), this._pInst.vertex(e, t), this._pInst.bezierVertex(r, n, o, i, a, s), this._pInst.endShape(), this
			}, n.Renderer2D.prototype.curve = function(e, t, r, n, o, i, a, s) {
				return this._pInst.beginShape(), this._pInst.curveVertex(e, t), this._pInst.curveVertex(r, n), this._pInst.curveVertex(o, i), this._pInst.curveVertex(a, s), this._pInst.endShape(), this
			}, n.Renderer2D.prototype._doFillStrokeClose = function() {
				this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke(), this.drawingContext.closePath()
			}, n.Renderer2D.prototype.applyMatrix = function(e, t, r, n, o, i) {
				this.drawingContext.transform(e, t, r, n, o, i)
			}, n.Renderer2D.prototype.resetMatrix = function() {
				return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this
			}, n.Renderer2D.prototype.rotate = function(e) {
				this.drawingContext.rotate(e)
			}, n.Renderer2D.prototype.scale = function(e, t) {
				return this.drawingContext.scale(e, t), this
			}, n.Renderer2D.prototype.shearX = function(e) {
				return this._pInst._angleMode === i.DEGREES && (e = this._pInst.degrees(e)), this.drawingContext.transform(1, 0, this._pInst.tan(e), 1, 0, 0), this
			}, n.Renderer2D.prototype.shearY = function(e) {
				return this._pInst._angleMode === i.DEGREES && (e = this._pInst.degrees(e)), this.drawingContext.transform(1, this._pInst.tan(e), 0, 1, 0, 0), this
			}, n.Renderer2D.prototype.translate = function(e, t) {
				return this.drawingContext.translate(e, t), this
			}, n.Renderer2D.prototype.text = function(e, t, r, n, o) {
				var a, s, h, l, u, p, c, f, d, m, g = this._pInst,
					y = Number.MAX_VALUE;
				if (this._doFill || this._doStroke) {
					if ("string" != typeof e && (e = e.toString()), e = e.replace(/(\t)/g, "  "), a = e.split("\n"), "undefined" != typeof n) {
						for (d = 0, h = 0; h < a.length; h++)
							for (u = "", f = a[h].split(" "), s = 0; s < f.length; s++) p = u + f[s] + " ", c = this.textWidth(p), c > n ? (u = f[s] + " ", d += g.textLeading()) : u = p;
						switch (this._rectMode === i.CENTER && (t -= n / 2, r -= o / 2), this.drawingContext.textAlign) {
							case i.CENTER:
								t += n / 2;
								break;
							case i.RIGHT:
								t += n
						}
						if ("undefined" != typeof o) {
							switch (this.drawingContext.textBaseline) {
								case i.BOTTOM:
									r += o - d;
									break;
								case i._CTX_MIDDLE:
									r += (o - d) / 2;
									break;
								case i.BASELINE:
									m = !0, this.drawingContext.textBaseline = i.TOP
							}
							y = r + o - g.textAscent()
						}
						for (h = 0; h < a.length; h++) {
							for (u = "", f = a[h].split(" "), s = 0; s < f.length; s++) p = u + f[s] + " ", c = this.textWidth(p), c > n && u.length > 0 ? (this._renderText(g, u, t, r, y), u = f[s] + " ", r += g.textLeading()) : u = p;
							this._renderText(g, u, t, r, y), r += g.textLeading()
						}
					} else {
						var v = 0,
							x = g.textAlign().vertical;
						for (x === i.CENTER ? v = (a.length - 1) * g.textLeading() / 2 : x === i.BOTTOM && (v = (a.length - 1) * g.textLeading()), l = 0; l < a.length; l++) this._renderText(g, a[l], t, r - v, y), r += g.textLeading()
					}
					return m && (this.drawingContext.textBaseline = i.BASELINE), g
				}
			}, n.Renderer2D.prototype._renderText = function(e, t, r, n, o) {
				if (!(n >= o)) return e.push(), this._isOpenType() ? this._textFont._renderPath(t, r, n, {
					renderer: this
				}) : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(t, r, n), this._doFill && (this.drawingContext.fillStyle = this._fillSet ? this.drawingContext.fillStyle : i._DEFAULT_TEXT_FILL, this.drawingContext.fillText(t, r, n))), e.pop(), e
			}, n.Renderer2D.prototype.textWidth = function(e) {
				return this._isOpenType() ? this._textFont._textWidth(e, this._textSize) : this.drawingContext.measureText(e).width
			}, n.Renderer2D.prototype.textAlign = function(e, t) {
				if (arguments.length) return e !== i.LEFT && e !== i.RIGHT && e !== i.CENTER || (this.drawingContext.textAlign = e), t !== i.TOP && t !== i.BOTTOM && t !== i.CENTER && t !== i.BASELINE || (t === i.CENTER ? this.drawingContext.textBaseline = i._CTX_MIDDLE : this.drawingContext.textBaseline = t), this._pInst;
				var r = this.drawingContext.textBaseline;
				return r === i._CTX_MIDDLE && (r = i.CENTER), {
					horizontal: this.drawingContext.textAlign,
					vertical: r
				}
			}, n.Renderer2D.prototype._applyTextProperties = function() {
				var e, t = this._pInst;
				return this._setProperty("_textAscent", null), this._setProperty("_textDescent", null), e = this._textFont, this._isOpenType() && (e = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)), this.drawingContext.font = this._textStyle + " " + this._textSize + "px " + e, t
			}, n.Renderer2D.prototype.push = function() {
				this.drawingContext.save()
			}, n.Renderer2D.prototype.pop = function() {
				this.drawingContext.restore()
			}, t.exports = n.Renderer2D
		}, {
			"../image/filters": 54,
			"./canvas": 35,
			"./constants": 36,
			"./core": 37,
			"./p5.Renderer": 43
		}],
		45: [function(e, t, r) {
			var n = e("./core"),
				o = e("./constants");
			e("./p5.Graphics"), e("./p5.Renderer2D"), e("../webgl/p5.RendererGL");
			var i = "defaultCanvas0";
			n.prototype.createCanvas = function(e, t, r) {
				var a, s, h = r || o.P2D;
				if (arguments[3] && (a = "boolean" == typeof arguments[3] && arguments[3]), h === o.WEBGL) s = document.getElementById(i), s && s.parentNode.removeChild(s), s = document.createElement("canvas"), s.id = i;
				else if (a) {
					s = document.createElement("canvas");
					for (var l = 0; document.getElementById("defaultCanvas" + l);) l++;
					i = "defaultCanvas" + l, s.id = i
				} else s = this.canvas;
				return this._setupDone || (s.dataset.hidden = !0, s.style.visibility = "hidden"), this._userNode ? this._userNode.appendChild(s) : document.body.appendChild(s), h === o.WEBGL ? (this._setProperty("_renderer", new n.RendererGL(s, this, !0)), this._isdefaultGraphics = !0) : this._isdefaultGraphics || (this._setProperty("_renderer", new n.Renderer2D(s, this, !0)), this._isdefaultGraphics = !0), this._renderer.resize(e, t), this._renderer._applyDefaults(), a && this._elements.push(this._renderer), this._renderer
			}, n.prototype.resizeCanvas = function(e, t, r) {
				if (this._renderer) {
					var n = {};
					for (var o in this.drawingContext) {
						var i = this.drawingContext[o];
						"object" != typeof i && "function" != typeof i && (n[o] = i)
					}
					this._renderer.resize(e, t);
					for (var a in n) this.drawingContext[a] = n[a];
					r || this.redraw()
				}
			}, n.prototype.noCanvas = function() {
				this.canvas && this.canvas.parentNode.removeChild(this.canvas)
			}, n.prototype.createGraphics = function(e, t, r) {
				return new n.Graphics(e, t, r, this)
			}, n.prototype.blendMode = function(e) {
				if (e !== o.BLEND && e !== o.DARKEST && e !== o.LIGHTEST && e !== o.DIFFERENCE && e !== o.MULTIPLY && e !== o.EXCLUSION && e !== o.SCREEN && e !== o.REPLACE && e !== o.OVERLAY && e !== o.HARD_LIGHT && e !== o.SOFT_LIGHT && e !== o.DODGE && e !== o.BURN && e !== o.ADD && e !== o.NORMAL) throw new Error("Mode " + e + " not recognized.");
				this._renderer.blendMode(e)
			}, t.exports = n
		}, {
			"../webgl/p5.RendererGL": 86,
			"./constants": 36,
			"./core": 37,
			"./p5.Graphics": 42,
			"./p5.Renderer2D": 44
		}],
		46: [function(e, t, r) {
			window.requestAnimationFrame = function() {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
						window.setTimeout(e, 1e3 / 60)
					}
				}(), window.performance = window.performance || {}, window.performance.now = function() {
					var e = Date.now();
					return window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow || function() {
						return Date.now() - e
					}
				}(),
				function() {
					"use strict";
					"undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", {
						value: Array.prototype.slice,
						writable: !0,
						configurable: !0,
						enumerable: !1
					})
				}()
		}, {}],
		47: [function(e, t, r) {
			"use strict";
			var n = e("./core");
			n.prototype.exit = function() {
				throw "exit() not implemented, see remove()"
			}, n.prototype.noLoop = function() {
				this._loop = !1
			}, n.prototype.loop = function() {
				this._loop = !0, this._draw()
			}, n.prototype.push = function() {
				this._renderer.push(), this._styles.push({
					_doStroke: this._renderer._doStroke,
					_strokeSet: this._renderer._strokeSet,
					_doFill: this._renderer._doFill,
					_fillSet: this._renderer._fillSet,
					_tint: this._renderer._tint,
					_imageMode: this._renderer._imageMode,
					_rectMode: this._renderer._rectMode,
					_ellipseMode: this._renderer._ellipseMode,
					_colorMode: this._renderer._colorMode,
					_textFont: this._renderer._textFont,
					_textLeading: this._renderer._textLeading,
					_textSize: this._renderer._textSize,
					_textStyle: this._renderer._textStyle
				})
			}, n.prototype.pop = function() {
				this._renderer.pop();
				var e = this._styles.pop();
				for (var t in e) this._renderer[t] = e[t]
			}, n.prototype.pushStyle = function() {
				throw new Error("pushStyle() not used, see push()")
			}, n.prototype.popStyle = function() {
				throw new Error("popStyle() not used, see pop()")
			}, n.prototype.redraw = function() {
				this.resetMatrix(), this._renderer.isP3D && this._renderer._update();
				var e = 1;
				if (1 === arguments.length) try {
					parseInt(arguments[0]) > 1 && (e = parseInt(arguments[0]))
				} catch (e) {}
				var t = this.setup || window.setup,
					r = this.draw || window.draw;
				if ("function" == typeof r) {
					"undefined" == typeof t && this.scale(this._pixelDensity, this._pixelDensity);
					for (var n = this, o = function(e) {
							e.call(n)
						}, i = 0; i < e; i++) this._registeredMethods.pre.forEach(o), r(), this._registeredMethods.post.forEach(o)
				}
			}, n.prototype.size = function() {
				var e = "size() is not a valid p5 function, to set the size of the ";
				throw e += "drawing canvas, please use createCanvas() instead"
			}, t.exports = n
		}, {
			"./core": 37
		}],
		48: [function(e, t, r) {
			"use strict";
			var n = e("./core"),
				o = e("./constants");
			n.prototype.applyMatrix = function(e, t, r, n, o, i) {
				return this._renderer.applyMatrix(e, t, r, n, o, i), this
			}, n.prototype.popMatrix = function() {
				throw new Error("popMatrix() not used, see pop()")
			}, n.prototype.printMatrix = function() {
				throw new Error("printMatrix() not implemented")
			}, n.prototype.pushMatrix = function() {
				throw new Error("pushMatrix() not used, see push()")
			}, n.prototype.resetMatrix = function() {
				return this._renderer.resetMatrix(), this
			}, n.prototype.rotate = function() {
				for (var e, t = new Array(arguments.length), r = 0; r < t.length; ++r) t[r] = arguments[r];
				return this._angleMode === o.DEGREES ? e = this.radians(t[0]) : this._angleMode === o.RADIANS && (e = t[0]), t.length > 1 ? this._renderer.rotate(e, t[1]) : this._renderer.rotate(e), this
			}, n.prototype.rotateX = function(e) {
				for (var t = new Array(arguments.length), r = 0; r < t.length; ++r) t[r] = arguments[r];
				if (!this._renderer.isP3D) throw "not supported in p2d. Please use webgl mode";
				return this._validateParameters("rotateX", t, [
					["Number"]
				]), this._renderer.rotateX(e), this
			}, n.prototype.rotateY = function(e) {
				if (!this._renderer.isP3D) throw "not supported in p2d. Please use webgl mode";
				for (var t = new Array(arguments.length), r = 0; r < t.length; ++r) t[r] = arguments[r];
				return this._validateParameters("rotateY", t, [
					["Number"]
				]), this._renderer.rotateY(e), this
			}, n.prototype.rotateZ = function(e) {
				if (!this._renderer.isP3D) throw "not supported in p2d. Please use webgl mode";
				for (var t = new Array(arguments.length), r = 0; r < t.length; ++r) t[r] = arguments[r];
				return this._validateParameters("rotateZ", t, [
					["Number"]
				]), this._renderer.rotateZ(e), this
			}, n.prototype.scale = function() {
				for (var e, t, r, o = new Array(arguments.length), i = 0; i < o.length; i++) o[i] = arguments[i];
				return o[0] instanceof n.Vector ? (e = o[0].x, t = o[0].y, r = o[0].z) : o[0] instanceof Array ? (e = o[0][0], t = o[0][1], r = o[0][2] || 1) : 1 === o.length ? e = t = r = o[0] : (e = o[0], t = o[1], r = o[2] || 1), this._renderer.isP3D ? this._renderer.scale.call(this._renderer, e, t, r) : this._renderer.scale.call(this._renderer, e, t), this
			}, n.prototype.shearX = function(e) {
				return this._angleMode === o.DEGREES && (e = this.radians(e)), this._renderer.shearX(e), this
			}, n.prototype.shearY = function(e) {
				return this._angleMode === o.DEGREES && (e = this.radians(e)), this._renderer.shearY(e), this
			}, n.prototype.translate = function(e, t, r) {
				for (var n = new Array(arguments.length), o = 0; o < n.length; ++o) n[o] = arguments[o];
				return this._renderer.isP3D ? (this._validateParameters("translate", n, [
					["Number", "Number", "Number"]
				]), this._renderer.translate(e, t, r)) : (this._validateParameters("translate", n, [
					["Number", "Number"]
				]), this._renderer.translate(e, t)), this
			}, t.exports = n
		}, {
			"./constants": 36,
			"./core": 37
		}],
		49: [function(e, t, r) {
			"use strict";
			var n = e("./core"),
				o = e("./constants"),
				i = null,
				a = [],
				s = [],
				h = !1,
				l = !1,
				u = !1,
				p = !1,
				c = !0;
			n.prototype.beginContour = function() {
				return s = [], p = !0, this
			}, n.prototype.beginShape = function(e) {
				return i = e === o.POINTS || e === o.LINES || e === o.TRIANGLES || e === o.TRIANGLE_FAN || e === o.TRIANGLE_STRIP || e === o.QUADS || e === o.QUAD_STRIP ? e : null, this._renderer.isP3D ? this._renderer.beginShape(e) : (a = [], s = []), this
			}, n.prototype.bezierVertex = function(e, t, r, n, o, i) {
				if (0 === a.length) throw "vertex() must be used once before calling bezierVertex()";
				h = !0;
				for (var l = [], u = 0; u < arguments.length; u++) l[u] = arguments[u];
				return l.isVert = !1, p ? s.push(l) : a.push(l), this
			}, n.prototype.curveVertex = function(e, t) {
				return l = !0, this.vertex(e, t), this
			}, n.prototype.endContour = function() {
				var e = s[0].slice();
				e.isVert = s[0].isVert, e.moveTo = !1, s.push(e), c && (a.push(a[0]), c = !1);
				for (var t = 0; t < s.length; t++) a.push(s[t]);
				return this
			}, n.prototype.endShape = function(e) {
				if (this._renderer.isP3D) this._renderer.endShape(e, l, h, u, p, i);
				else {
					if (0 === a.length) return this;
					if (!this._renderer._doStroke && !this._renderer._doFill) return this;
					var t = e === o.CLOSE;
					t && !p && a.push(a[0]), this._renderer.endShape(e, a, l, h, u, p, i), l = !1, h = !1, u = !1, p = !1, c = !0, t && a.pop()
				}
				return this
			}, n.prototype.quadraticVertex = function(e, t, r, n) {
				if (this._contourInited) {
					var i = {};
					return i.x = e, i.y = t, i.x3 = r, i.y3 = n, i.type = o.QUADRATIC, this._contourVertices.push(i), this
				}
				if (!(a.length > 0)) throw "vertex() must be used once before calling quadraticVertex()";
				u = !0;
				for (var h = [], l = 0; l < arguments.length; l++) h[l] = arguments[l];
				return h.isVert = !1, p ? s.push(h) : a.push(h), this
			}, n.prototype.vertex = function(e, t, r) {
				for (var n = new Array(arguments.length), o = 0; o < n.length; ++o) n[o] = arguments[o];
				if (this._renderer.isP3D) this._validateParameters("vertex", n, [
					["Number", "Number", "Number"]
				]), this._renderer.vertex(arguments[0], arguments[1], arguments[2]);
				else {
					this._validateParameters("vertex", n, [
						["Number", "Number"],
						["Number", "Number", "Number"]
					]);
					var i = [];
					i.isVert = !0, i[0] = e, i[1] = t, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = this._renderer._getFill(), i[6] = this._renderer._getStroke(), r && (i.moveTo = r), p ? (0 === s.length && (i.moveTo = !0), s.push(i)) : a.push(i)
				}
				return this
			}, t.exports = n
		}, {
			"./constants": 36,
			"./core": 37
		}],
		50: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.deviceOrientation = void 0, n.prototype.accelerationX = 0, n.prototype.accelerationY = 0, n.prototype.accelerationZ = 0, n.prototype.pAccelerationX = 0, n.prototype.pAccelerationY = 0, n.prototype.pAccelerationZ = 0, n.prototype._updatePAccelerations = function() {
				this._setProperty("pAccelerationX", this.accelerationX), this._setProperty("pAccelerationY", this.accelerationY), this._setProperty("pAccelerationZ", this.accelerationZ)
			}, n.prototype.rotationX = 0, n.prototype.rotationY = 0, n.prototype.rotationZ = 0, n.prototype.pRotationX = 0, n.prototype.pRotationY = 0, n.prototype.pRotationZ = 0;
			var o, i, a, s = 0,
				h = 0,
				l = 0,
				u = "clockwise",
				p = "clockwise",
				c = "clockwise";
			n.prototype._updatePRotations = function() {
				this._setProperty("pRotationX", this.rotationX), this._setProperty("pRotationY", this.rotationY), this._setProperty("pRotationZ", this.rotationZ)
			}, n.prototype.turnAxis = void 0;
			var f = .5,
				d = 30;
			n.prototype.setMoveThreshold = function(e) {
				"number" == typeof e && (f = e)
			}, n.prototype.setShakeThreshold = function(e) {
				"number" == typeof e && (d = e)
			}, n.prototype._ondeviceorientation = function(e) {
				this._updatePRotations(), this._setProperty("rotationX", e.beta), this._setProperty("rotationY", e.gamma), this._setProperty("rotationZ", e.alpha), this._handleMotion()
			}, n.prototype._ondevicemotion = function(e) {
				this._updatePAccelerations(), this._setProperty("accelerationX", 2 * e.acceleration.x), this._setProperty("accelerationY", 2 * e.acceleration.y), this._setProperty("accelerationZ", 2 * e.acceleration.z), this._handleMotion()
			}, n.prototype._handleMotion = function() {
				90 === window.orientation || window.orientation === -90 ? this._setProperty("deviceOrientation", "landscape") : 0 === window.orientation ? this._setProperty("deviceOrientation", "portrait") : void 0 === window.orientation && this._setProperty("deviceOrientation", "undefined");
				var e = this.deviceMoved || window.deviceMoved;
				"function" == typeof e && (Math.abs(this.accelerationX - this.pAccelerationX) > f || Math.abs(this.accelerationY - this.pAccelerationY) > f || Math.abs(this.accelerationZ - this.pAccelerationZ) > f) && e();
				var t = this.deviceTurned || window.deviceTurned;
				if ("function" == typeof t) {
					var r = this.rotationX + 180,
						n = this.pRotationX + 180,
						m = s + 180;
					r - n > 0 && r - n < 270 || r - n < -270 ? u = "clockwise" : (r - n < 0 || r - n > 270) && (u = "counter-clockwise"), u !== o && (m = r), Math.abs(r - m) > 90 && Math.abs(r - m) < 270 && (m = r, this._setProperty("turnAxis", "X"), t()), o = u, s = m - 180;
					var g = this.rotationY + 180,
						y = this.pRotationY + 180,
						v = h + 180;
					g - y > 0 && g - y < 270 || g - y < -270 ? p = "clockwise" : (g - y < 0 || g - this.pRotationY > 270) && (p = "counter-clockwise"), p !== i && (v = g), Math.abs(g - v) > 90 && Math.abs(g - v) < 270 && (v = g, this._setProperty("turnAxis", "Y"), t()), i = p, h = v - 180, this.rotationZ - this.pRotationZ > 0 && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < -270 ? c = "clockwise" : (this.rotationZ - this.pRotationZ < 0 || this.rotationZ - this.pRotationZ > 270) && (c = "counter-clockwise"), c !== a && (l = this.rotationZ), Math.abs(this.rotationZ - l) > 90 && Math.abs(this.rotationZ - l) < 270 && (l = this.rotationZ, this._setProperty("turnAxis", "Z"), t()), a = c, this._setProperty("turnAxis", void 0)
				}
				var x = this.deviceShaken || window.deviceShaken;
				if ("function" == typeof x) {
					var _, b;
					null !== this.pAccelerationX && (_ = Math.abs(this.accelerationX - this.pAccelerationX), b = Math.abs(this.accelerationY - this.pAccelerationY)), _ + b > d && x()
				}
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		51: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = {};
			n.prototype.isKeyPressed = !1, n.prototype.keyIsPressed = !1, n.prototype.key = "", n.prototype.keyCode = 0, n.prototype._onkeydown = function(e) {
				if (!o[e.which]) {
					this._setProperty("isKeyPressed", !0), this._setProperty("keyIsPressed", !0), this._setProperty("keyCode", e.which), o[e.which] = !0;
					var t = String.fromCharCode(e.which);
					t || (t = e.which), this._setProperty("key", t);
					var r = this.keyPressed || window.keyPressed;
					if ("function" == typeof r && !e.charCode) {
						var n = r(e);
						n === !1 && e.preventDefault()
					}
				}
			}, n.prototype._onkeyup = function(e) {
				var t = this.keyReleased || window.keyReleased;
				this._setProperty("isKeyPressed", !1), this._setProperty("keyIsPressed", !1), this._setProperty("_lastKeyCodeTyped", null), o[e.which] = !1;
				var r = String.fromCharCode(e.which);
				if (r || (r = e.which), this._setProperty("key", r), this._setProperty("keyCode", e.which), "function" == typeof t) {
					var n = t(e);
					n === !1 && e.preventDefault()
				}
			}, n.prototype._onkeypress = function(e) {
				if (e.which !== this._lastKeyCodeTyped) {
					this._setProperty("keyCode", e.which), this._setProperty("_lastKeyCodeTyped", e.which), this._setProperty("key", String.fromCharCode(e.which));
					var t = this.keyTyped || window.keyTyped;
					if ("function" == typeof t) {
						var r = t(e);
						r === !1 && e.preventDefault()
					}
				}
			}, n.prototype._onblur = function(e) {
				o = {}
			}, n.prototype.keyIsDown = function(e) {
				return o[e]
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		52: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = e.getBoundingClientRect();
				return {
					x: t.clientX - r.left,
					y: t.clientY - r.top,
					winX: t.clientX,
					winY: t.clientY
				}
			}
			var o = e("../core/core"),
				i = e("../core/constants");
			o.prototype._hasMouseInteracted = !1, o.prototype.mouseX = 0, o.prototype.mouseY = 0, o.prototype.pmouseX = 0, o.prototype.pmouseY = 0, o.prototype.winMouseX = 0, o.prototype.winMouseY = 0, o.prototype.pwinMouseX = 0, o.prototype.pwinMouseY = 0, o.prototype.mouseButton = 0, o.prototype.mouseIsPressed = !1, o.prototype.isMousePressed = !1, o.prototype._updateNextMouseCoords = function(e) {
				var t = this.mouseX,
					r = this.mouseY,
					o = this.winMouseX,
					i = this.winMouseY;
				if ("touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || e.touches) t = this.touchX, r = this.touchY, o = this.winTouchX, i = this.winTouchY;
				else if (null !== this._curElement) {
					var a = n(this._curElement.elt, e);
					t = a.x, r = a.y, o = a.winX, i = a.winY
				}
				this._setProperty("mouseX", t), this._setProperty("mouseY", r), this._setProperty("winMouseX", o), this._setProperty("winMouseY", i), this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0))
			}, o.prototype._updateMouseCoords = function() {
				this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY)
			}, o.prototype._setMouseButton = function(e) {
				1 === e.button ? this._setProperty("mouseButton", i.CENTER) : 2 === e.button ? this._setProperty("mouseButton", i.RIGHT) : this._setProperty("mouseButton", i.LEFT)
			}, o.prototype._onmousemove = function(e) {
				var t, r = this._isGlobal ? window : this;
				this._updateNextMouseCoords(e), this._updateNextTouchCoords(e), this.isMousePressed ? "function" == typeof r.mouseDragged ? (t = r.mouseDragged(e), t === !1 && e.preventDefault()) : "function" == typeof r.touchMoved && (t = r.touchMoved(e), t === !1 && e.preventDefault()) : "function" == typeof r.mouseMoved && (t = r.mouseMoved(e), t === !1 && e.preventDefault())
			}, o.prototype._onmousedown = function(e) {
				var t, r = this._isGlobal ? window : this;
				this._setProperty("isMousePressed", !0), this._setProperty("mouseIsPressed", !0), this._setMouseButton(e), this._updateNextMouseCoords(e), this._updateNextTouchCoords(e), "function" == typeof r.mousePressed ? (t = r.mousePressed(e), t === !1 && e.preventDefault()) : "function" == typeof r.touchStarted && (t = r.touchStarted(e), t === !1 && e.preventDefault())
			}, o.prototype._onmouseup = function(e) {
				var t, r = this._isGlobal ? window : this;
				this._setProperty("isMousePressed", !1), this._setProperty("mouseIsPressed", !1), "function" == typeof r.mouseReleased ? (t = r.mouseReleased(e), t === !1 && e.preventDefault()) : "function" == typeof r.touchEnded && (t = r.touchEnded(e), t === !1 && e.preventDefault())
			}, o.prototype._ondragend = o.prototype._onmouseup, o.prototype._ondragover = o.prototype._onmousemove, o.prototype._onclick = function(e) {
				var t = this._isGlobal ? window : this;
				if ("function" == typeof t.mouseClicked) {
					var r = t.mouseClicked(e);
					r === !1 && e.preventDefault()
				}
			}, o.prototype._onwheel = function(e) {
				var t = this._isGlobal ? window : this;
				if ("function" == typeof t.mouseWheel) {
					e.delta = e.deltaY;
					var r = t.mouseWheel(e);
					r === !1 && e.preventDefault()
				}
			}, t.exports = o
		}, {
			"../core/constants": 36,
			"../core/core": 37
		}],
		53: [function(e, t, r) {
			"use strict";

			function n(e, t, r) {
				r = r || 0;
				var n = e.getBoundingClientRect(),
					o = t.touches[r] || t.changedTouches[r];
				return {
					x: o.clientX - n.left,
					y: o.clientY - n.top,
					winX: o.clientX,
					winY: o.clientY,
					id: o.identifier
				}
			}
			var o = e("../core/core");
			o.prototype._hasTouchInteracted = !1, o.prototype.touchX = 0, o.prototype.touchY = 0, o.prototype.ptouchX = 0, o.prototype.ptouchY = 0, o.prototype.winTouchX = 0, o.prototype.winTouchY = 0, o.prototype.pwinTouchX = 0, o.prototype.pwinTouchY = 0, o.prototype.touches = [], o.prototype.touchIsDown = !1, o.prototype._updateNextTouchCoords = function(e) {
				var t = this.touchX,
					r = this.touchY,
					o = this.winTouchX,
					i = this.winTouchY;
				if ("mousedown" !== e.type && "mousemove" !== e.type && "mouseup" !== e.type && e.touches) {
					if (null !== this._curElement) {
						var a = n(this._curElement.elt, e, 0);
						t = a.x, r = a.y, o = a.winX, i = a.winY;
						for (var s = [], h = 0; h < e.touches.length; h++) s[h] = n(this._curElement.elt, e, h);
						this._setProperty("touches", s)
					}
				} else t = this.mouseX, r = this.mouseY, o = this.winMouseX, i = this.winMouseY;
				this._setProperty("touchX", t), this._setProperty("touchY", r), this._setProperty("winTouchX", o), this._setProperty("winTouchY", i), this._hasTouchInteracted || (this._updateTouchCoords(), this._setProperty("_hasTouchInteracted", !0))
			}, o.prototype._updateTouchCoords = function() {
				this._setProperty("ptouchX", this.touchX), this._setProperty("ptouchY", this.touchY), this._setProperty("pwinTouchX", this.winTouchX), this._setProperty("pwinTouchY", this.winTouchY)
			}, o.prototype._ontouchstart = function(e) {
				var t, r = this._isGlobal ? window : this;
				this._updateNextTouchCoords(e), this._updateNextMouseCoords(e), this._setProperty("touchIsDown", !0), "function" == typeof r.touchStarted ? (t = r.touchStarted(e), t === !1 && e.preventDefault()) : "function" == typeof r.mousePressed && (t = r.mousePressed(e), t === !1 && e.preventDefault())
			}, o.prototype._ontouchmove = function(e) {
				var t, r = this._isGlobal ? window : this;
				this._updateNextTouchCoords(e), this._updateNextMouseCoords(e), "function" == typeof r.touchMoved ? (t = r.touchMoved(e), t === !1 && e.preventDefault()) : "function" == typeof r.mouseDragged && (t = r.mouseDragged(e), t === !1 && e.preventDefault())
			}, o.prototype._ontouchend = function(e) {
				this._updateNextTouchCoords(e), this._updateNextMouseCoords(e), 0 === this.touches.length && this._setProperty("touchIsDown", !1);
				var t, r = this._isGlobal ? window : this;
				"function" == typeof r.touchEnded ? (t = r.touchEnded(e), t === !1 && e.preventDefault()) : "function" == typeof r.mouseReleased && (t = r.mouseReleased(e), t === !1 && e.preventDefault())
			}, t.exports = o
		}, {
			"../core/core": 37
		}],
		54: [function(e, t, r) {
			"use strict";

			function n(e) {
				var t = 3.5 * e | 0;
				if (t = t < 1 ? 1 : t < 248 ? t : 248, a !== t) {
					a = t, s = 1 + a << 1, h = new Int32Array(s), l = new Array(s);
					for (var r = 0; r < s; r++) l[r] = new Int32Array(256);
					for (var n, o, i, u, p = 1, c = t - 1; p < t; p++) {
						h[t + p] = h[c] = o = c * c, i = l[t + p], u = l[c--];
						for (var f = 0; f < 256; f++) i[f] = u[f] = o * f
					}
					n = h[t] = t * t, i = l[t];
					for (var d = 0; d < 256; d++) i[d] = n * d
				}
			}

			function o(e, t) {
				for (var r = i._toPixels(e), o = e.width, u = e.height, p = o * u, c = new Int32Array(p), f = 0; f < p; f++) c[f] = i._getARGB(r, f);
				var d, m, g, y, v, x, _, b, w, S, T = new Int32Array(p),
					M = new Int32Array(p),
					C = new Int32Array(p),
					R = new Int32Array(p),
					E = 0;
				n(t);
				var A, P, L, I;
				for (P = 0; P < u; P++) {
					for (A = 0; A < o; A++) {
						if (y = g = m = v = d = 0, x = A - a, x < 0) S = -x, x = 0;
						else {
							if (x >= o) break;
							S = 0
						}
						for (L = S; L < s && !(x >= o); L++) {
							var D = c[x + E];
							I = l[L], v += I[(D & -16777216) >>> 24], m += I[(16711680 & D) >> 16], g += I[(65280 & D) >> 8], y += I[255 & D], d += h[L], x++
						}
						_ = E + A, T[_] = v / d, M[_] = m / d, C[_] = g / d, R[_] = y / d
					}
					E += o
				}
				for (E = 0, b = -a, w = b * o, P = 0; P < u; P++) {
					for (A = 0; A < o; A++) {
						if (y = g = m = v = d = 0, b < 0) S = _ = -b, x = A;
						else {
							if (b >= u) break;
							S = 0, _ = b, x = A + w
						}
						for (L = S; L < s && !(_ >= u); L++) I = l[L], v += I[T[x]], m += I[M[x]], g += I[C[x]], y += I[R[x]], d += h[L], _++, x += o;
						c[A + E] = v / d << 24 | m / d << 16 | g / d << 8 | y / d
					}
					E += o, w += o, b++
				}
				i._setPixels(r, c)
			}
			var i = {};
			i._toPixels = function(e) {
				return e instanceof ImageData ? e.data : e.getContext("2d").getImageData(0, 0, e.width, e.height).data
			}, i._getARGB = function(e, t) {
				var r = 4 * t;
				return e[r + 3] << 24 & 4278190080 | e[r] << 16 & 16711680 | e[r + 1] << 8 & 65280 | 255 & e[r + 2]
			}, i._setPixels = function(e, t) {
				for (var r = 0, n = 0, o = e.length; n < o; n++) r = 4 * n, e[r + 0] = (16711680 & t[n]) >>> 16, e[r + 1] = (65280 & t[n]) >>> 8, e[r + 2] = 255 & t[n], e[r + 3] = (4278190080 & t[n]) >>> 24
			}, i._toImageData = function(e) {
				return e instanceof ImageData ? e : e.getContext("2d").getImageData(0, 0, e.width, e.height)
			}, i._createImageData = function(e, t) {
				return i._tmpCanvas = document.createElement("canvas"), i._tmpCtx = i._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(e, t)
			}, i.apply = function(e, t, r) {
				var n = e.getContext("2d"),
					o = n.getImageData(0, 0, e.width, e.height),
					i = t(o, r);
				i instanceof ImageData ? n.putImageData(i, 0, 0, 0, 0, e.width, e.height) : n.putImageData(o, 0, 0, 0, 0, e.width, e.height)
			}, i.threshold = function(e, t) {
				var r = i._toPixels(e);
				void 0 === t && (t = .5);
				for (var n = Math.floor(255 * t), o = 0; o < r.length; o += 4) {
					var a, s = r[o],
						h = r[o + 1],
						l = r[o + 2],
						u = .2126 * s + .7152 * h + .0722 * l;
					a = u >= n ? 255 : 0, r[o] = r[o + 1] = r[o + 2] = a
				}
			}, i.gray = function(e) {
				for (var t = i._toPixels(e), r = 0; r < t.length; r += 4) {
					var n = t[r],
						o = t[r + 1],
						a = t[r + 2],
						s = .2126 * n + .7152 * o + .0722 * a;
					t[r] = t[r + 1] = t[r + 2] = s
				}
			}, i.opaque = function(e) {
				for (var t = i._toPixels(e), r = 0; r < t.length; r += 4) t[r + 3] = 255;
				return t
			}, i.invert = function(e) {
				for (var t = i._toPixels(e), r = 0; r < t.length; r += 4) t[r] = 255 - t[r], t[r + 1] = 255 - t[r + 1], t[r + 2] = 255 - t[r + 2]
			}, i.posterize = function(e, t) {
				var r = i._toPixels(e);
				if (t < 2 || t > 255) throw new Error("Level must be greater than 2 and less than 255 for posterize");
				for (var n = t - 1, o = 0; o < r.length; o += 4) {
					var a = r[o],
						s = r[o + 1],
						h = r[o + 2];
					r[o] = 255 * (a * t >> 8) / n, r[o + 1] = 255 * (s * t >> 8) / n, r[o + 2] = 255 * (h * t >> 8) / n
				}
			}, i.dilate = function(e) {
				for (var t, r, n, o, a, s, h, l, u, p, c, f, d, m, g, y, v, x = i._toPixels(e), _ = 0, b = x.length ? x.length / 4 : 0, w = new Int32Array(b); _ < b;)
					for (t = _, r = _ + e.width; _ < r;) n = o = i._getARGB(x, _), h = _ - 1, s = _ + 1, l = _ - e.width, u = _ + e.width, h < t && (h = _), s >= r && (s = _), l < 0 && (l = 0), u >= b && (u = _), f = i._getARGB(x, l), c = i._getARGB(x, h), d = i._getARGB(x, u), p = i._getARGB(x, s), a = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), g = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c), m = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p), y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f), v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), g > a && (o = c, a = g), m > a && (o = p, a = m), y > a && (o = f, a = y), v > a && (o = d, a = v), w[_++] = o;
				i._setPixels(x, w)
			}, i.erode = function(e) {
				for (var t, r, n, o, a, s, h, l, u, p, c, f, d, m, g, y, v, x = i._toPixels(e), _ = 0, b = x.length ? x.length / 4 : 0, w = new Int32Array(b); _ < b;)
					for (t = _, r = _ + e.width; _ < r;) n = o = i._getARGB(x, _), h = _ - 1, s = _ + 1, l = _ - e.width, u = _ + e.width, h < t && (h = _), s >= r && (s = _), l < 0 && (l = 0), u >= b && (u = _), f = i._getARGB(x, l), c = i._getARGB(x, h), d = i._getARGB(x, u), p = i._getARGB(x, s), a = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), g = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c), m = 77 * (p >> 16 & 255) + 151 * (p >> 8 & 255) + 28 * (255 & p), y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f), v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), g < a && (o = c, a = g), m < a && (o = p, a = m), y < a && (o = f, a = y), v < a && (o = d, a = v), w[_++] = o;
				i._setPixels(x, w)
			};
			var a, s, h, l;
			i.blur = function(e, t) {
				o(e, t)
			}, t.exports = i
		}, {}],
		55: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = [];
			n.prototype.createImage = function(e, t) {
				return new n.Image(e, t)
			}, n.prototype.saveCanvas = function() {
				var e, t, r;
				if (3 === arguments.length ? (e = arguments[0], t = arguments[1], r = arguments[2]) : 2 === arguments.length ? "object" == typeof arguments[0] ? (e = arguments[0], t = arguments[1]) : (t = arguments[0], r = arguments[1]) : 1 === arguments.length && ("object" == typeof arguments[0] ? e = arguments[0] : t = arguments[0]), e instanceof n.Element && (e = e.elt), e instanceof HTMLCanvasElement || (e = null), r || (r = n.prototype._checkFileExtension(t, r)[1], "" === r && (r = "png")), e || this._curElement && this._curElement.elt && (e = this._curElement.elt), n.prototype._isSafari()) {
					var o = "Hello, Safari user!\n";
					o += "Now capturing a screenshot...\n", o += "To save this image,\n", o += "go to File --> Save As.\n", alert(o), window.location.href = e.toDataURL()
				} else {
					var i;
					if ("undefined" == typeof r) r = "png", i = "image/png";
					else switch (r) {
						case "png":
							i = "image/png";
							break;
						case "jpeg":
							i = "image/jpeg";
							break;
						case "jpg":
							i = "image/jpeg";
							break;
						default:
							i = "image/png"
					}
					var a = "image/octet-stream",
						s = e.toDataURL(i);
					s = s.replace(i, a), n.prototype.downloadFile(s, t, r)
				}
			}, n.prototype.saveFrames = function(e, t, r, i, a) {
				var s = r || 3;
				s = n.prototype.constrain(s, 0, 15), s = 1e3 * s;
				var h = i || 15;
				h = n.prototype.constrain(h, 0, 22);
				var l = 0,
					u = n.prototype._makeFrame,
					p = this._curElement.elt,
					c = setInterval(function() {
						u(e + l, t, p), l++
					}, 1e3 / h);
				setTimeout(function() {
					if (clearInterval(c), a) a(o);
					else
						for (var e = 0; e < o.length; e++) {
							var t = o[e];
							n.prototype.downloadFile(t.imageData, t.filename, t.ext)
						}
					o = []
				}, s + .01)
			}, n.prototype._makeFrame = function(e, t, r) {
				var n;
				n = this ? this._curElement.elt : r;
				var i;
				if (t) switch (t.toLowerCase()) {
					case "png":
						i = "image/png";
						break;
					case "jpeg":
						i = "image/jpeg";
						break;
					case "jpg":
						i = "image/jpeg";
						break;
					default:
						i = "image/png"
				} else t = "png", i = "image/png";
				var a = "image/octet-stream",
					s = n.toDataURL(i);
				s = s.replace(i, a);
				var h = {};
				h.imageData = s, h.filename = e, h.ext = t, o.push(h)
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		56: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				return e > 0 && e < t ? e : t
			}
			var o = e("../core/core"),
				i = e("./filters"),
				a = e("../core/canvas"),
				s = e("../core/constants");
			e("../core/error_helpers"), o.prototype.loadImage = function(e, t, r) {
				var n = new Image,
					i = new o.Image(1, 1, this),
					a = o._getDecrementPreload.apply(this, arguments);
				return n.onload = function() {
					i.width = i.canvas.width = n.width, i.height = i.canvas.height = n.height, i.drawingContext.drawImage(n, 0, 0), "function" == typeof t && t(i), a && t !== a && a()
				}, n.onerror = function(e) {
					o._friendlyFileLoadError(0, n.src), "function" == typeof r && r !== a && r(e)
				}, 0 !== e.indexOf("data:image/") && (n.crossOrigin = "Anonymous"), n.src = e, i
			}, o.prototype.image = function(e, t, r, o, i, s, h, l, u) {
				if (arguments.length <= 5)
					if (s = t || 0, h = r || 0, t = 0, r = 0, e.elt && e.elt.videoWidth && !e.canvas) {
						var p = e.elt.videoWidth,
							c = e.elt.videoHeight;
						l = o || e.elt.width, u = i || e.elt.width * c / p, o = p, i = c
					} else l = o || e.width, u = i || e.height, o = e.width, i = e.height;
				else {
					if (9 !== arguments.length) throw "Wrong number of arguments to image()";
					t = t || 0, r = r || 0, o = n(o, e.width), i = n(i, e.height), s = s || 0, h = h || 0, l = l || e.width, u = u || e.height
				}
				var f = a.modeAdjust(s, h, l, u, this._renderer._imageMode);
				this._renderer.image(e, t, r, o, i, f.x, f.y, f.w, f.h)
			}, o.prototype.tint = function() {
				var e = this.color.apply(this, arguments);
				this._renderer._tint = e.levels
			}, o.prototype.noTint = function() {
				this._renderer._tint = null
			}, o.prototype._getTintedImageCanvas = function(e) {
				if (!e.canvas) return e;
				var t = i._toPixels(e.canvas),
					r = document.createElement("canvas");
				r.width = e.canvas.width, r.height = e.canvas.height;
				for (var n = r.getContext("2d"), o = n.createImageData(e.canvas.width, e.canvas.height), a = o.data, s = 0; s < t.length; s += 4) {
					var h = t[s],
						l = t[s + 1],
						u = t[s + 2],
						p = t[s + 3];
					a[s] = h * this._renderer._tint[0] / 255, a[s + 1] = l * this._renderer._tint[1] / 255, a[s + 2] = u * this._renderer._tint[2] / 255, a[s + 3] = p * this._renderer._tint[3] / 255
				}
				return n.putImageData(o, 0, 0), r
			}, o.prototype.imageMode = function(e) {
				e !== s.CORNER && e !== s.CORNERS && e !== s.CENTER || (this._renderer._imageMode = e)
			}, t.exports = o
		}, {
			"../core/canvas": 35,
			"../core/constants": 36,
			"../core/core": 37,
			"../core/error_helpers": 40,
			"./filters": 54
		}],
		57: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("./filters");
			n.Image = function(e, t) {
				this.width = e, this.height = t, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), this._pixelDensity = 1, this.isTexture = !1, this.pixels = []
			}, n.Image.prototype._setProperty = function(e, t) {
				this[e] = t
			}, n.Image.prototype.loadPixels = function() {
				n.Renderer2D.prototype.loadPixels.call(this)
			}, n.Image.prototype.updatePixels = function(e, t, r, o) {
				n.Renderer2D.prototype.updatePixels.call(this, e, t, r, o)
			}, n.Image.prototype.get = function(e, t, r, o) {
				return n.Renderer2D.prototype.get.call(this, e, t, r, o)
			}, n.Image.prototype.set = function(e, t, r) {
				n.Renderer2D.prototype.set.call(this, e, t, r)
			}, n.Image.prototype.resize = function(e, t) {
				0 === e && 0 === t ? (e = this.canvas.width, t = this.canvas.height) : 0 === e ? e = this.canvas.width * t / this.canvas.height : 0 === t && (t = this.canvas.height * e / this.canvas.width), e = Math.floor(e), t = Math.floor(t);
				var r = document.createElement("canvas");
				r.width = e, r.height = t, r.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, r.width, r.height), this.canvas.width = this.width = e, this.canvas.height = this.height = t, this.drawingContext.drawImage(r, 0, 0, e, t, 0, 0, e, t), this.pixels.length > 0 && this.loadPixels()
			}, n.Image.prototype.copy = function() {
				n.prototype.copy.apply(this, arguments)
			}, n.Image.prototype.mask = function(e) {
				void 0 === e && (e = this);
				var t = this.drawingContext.globalCompositeOperation,
					r = 1;
				e instanceof n.Renderer && (r = e._pInst._pixelDensity);
				var o = [e, 0, 0, r * e.width, r * e.height, 0, 0, this.width, this.height];
				this.drawingContext.globalCompositeOperation = "destination-in", n.Image.prototype.copy.apply(this, o), this.drawingContext.globalCompositeOperation = t
			}, n.Image.prototype.filter = function(e, t) {
				o.apply(this.canvas, o[e.toLowerCase()], t)
			}, n.Image.prototype.blend = function() {
				n.prototype.blend.apply(this, arguments)
			}, n.Image.prototype.save = function(e, t) {
				var r;
				if (t) switch (t.toLowerCase()) {
					case "png":
						r = "image/png";
						break;
					case "jpeg":
						r = "image/jpeg";
						break;
					case "jpg":
						r = "image/jpeg";
						break;
					default:
						r = "image/png"
				} else t = "png", r = "image/png";
				var o = "image/octet-stream",
					i = this.canvas.toDataURL(r);
				i = i.replace(r, o), n.prototype.downloadFile(i, e, t)
			}, t.exports = n.Image
		}, {
			"../core/core": 37,
			"./filters": 54
		}],
		58: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("./filters");
			e("../color/p5.Color"), n.prototype.pixels = [], n.prototype.blend = function() {
				this._renderer ? this._renderer.blend.apply(this._renderer, arguments) : n.Renderer2D.prototype.blend.apply(this, arguments)
			}, n.prototype.copy = function() {
				n.Renderer2D._copyHelper.apply(this, arguments)
			}, n.prototype.filter = function(e, t) {
				o.apply(this.canvas, o[e.toLowerCase()], t)
			}, n.prototype.get = function(e, t, r, n) {
				return this._renderer.get(e, t, r, n)
			}, n.prototype.loadPixels = function() {
				this._renderer.loadPixels()
			}, n.prototype.set = function(e, t, r) {
				this._renderer.set(e, t, r)
			}, n.prototype.updatePixels = function(e, t, r, n) {
				0 !== this.pixels.length && this._renderer.updatePixels(e, t, r, n)
			}, t.exports = n
		}, {
			"../color/p5.Color": 31,
			"../core/core": 37,
			"./filters": 54
		}],
		59: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				var r = {};
				if (t = t || [], "undefined" == typeof t)
					for (var n = 0; n < e.length; n++) t[n.toString()] = n;
				for (var o = 0; o < t.length; o++) {
					var i = t[o],
						a = e[o];
					r[i] = a
				}
				return r
			}

			function o(e) {
				return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
			}

			function i(e, t) {
				t && t !== !0 && "true" !== t || (t = ""), e || (e = "untitled");
				var r = "";
				return e && e.indexOf(".") > -1 && (r = e.split(".").pop()), t && r !== t && (r = t, e = e + "." + r), [e, r]
			}

			function a(e) {
				document.body.removeChild(e.target)
			}
			var s = e("../core/core"),
				h = e("reqwest"),
				l = e("opentype.js");
			e("../core/error_helpers"), s._getDecrementPreload = function() {
				var e = arguments[arguments.length - 1];
				return (window.preload || this && this.preload) && "function" == typeof e ? e : null
			}, s.prototype.loadFont = function(e, t, r) {
				var n = new s.Font(this),
					o = s._getDecrementPreload.apply(this, arguments);
				return l.load(e, function(i, a) {
					if (i) return "undefined" != typeof r && r !== o ? r(i) : (s._friendlyFileLoadError(4, e), void console.error(i, e));
					n.font = a, "undefined" != typeof t && t(n), o && t !== o && o();
					var h, l, u = ["ttf", "otf", "woff", "woff2"],
						p = e.split("\\").pop().split("/").pop(),
						c = p.lastIndexOf("."),
						f = c < 1 ? null : p.substr(c + 1);
					u.indexOf(f) > -1 && (h = p.substr(0, c), l = document.createElement("style"), l.appendChild(document.createTextNode("\n@font-face {\nfont-family: " + h + ";\nsrc: url(" + e + ");\n}\n")), document.head.appendChild(l))
				}), n
			}, s.prototype.createInput = function() {
				throw "not yet implemented"
			}, s.prototype.createReader = function() {
				throw "not yet implemented"
			}, s.prototype.loadBytes = function() {
				throw "not yet implemented"
			}, s.prototype.loadJSON = function() {
				for (var e, t = arguments[0], r = arguments[1], n = s._getDecrementPreload.apply(this, arguments), o = {}, i = "json", a = 2; a < arguments.length; a++) {
					var l = arguments[a];
					"string" == typeof l ? "jsonp" !== l && "json" !== l || (i = l) : "function" == typeof l && (e = l)
				}
				return h({
					url: t,
					type: i,
					crossOrigin: !0,
					error: function(t) {
						e ? e(t) : console.log(t.statusText)
					},
					success: function(e) {
						for (var t in e) o[t] = e[t];
						"undefined" != typeof r && r(e), n && r !== n && n()
					}
				}), o
			}, s.prototype.loadStrings = function(e, t, r) {
				var n = [],
					o = new XMLHttpRequest,
					i = s._getDecrementPreload.apply(this, arguments);
				return o.addEventListener("error", function(e) {
					r ? r(e) : console.log(e.responseText)
				}), o.open("GET", e, !0), o.onreadystatechange = function() {
					if (4 === o.readyState)
						if (200 === o.status) {
							var e = o.responseText.match(/[^\r\n]+/g);
							for (var a in e) n[a] = e[a];
							"undefined" != typeof t && t(n), i && t !== i && i()
						} else r ? r(o) : console.log(o.statusText)
				}, o.send(null), n
			}, s.prototype.loadTable = function(e) {
				for (var t = null, r = [], o = !1, i = ",", a = !1, l = s._getDecrementPreload.apply(this, arguments), u = 1; u < arguments.length; u++)
					if ("function" == typeof arguments[u] && arguments[u] !== l) t = arguments[u];
					else if ("string" == typeof arguments[u])
					if (r.push(arguments[u]), "header" === arguments[u] && (o = !0), "csv" === arguments[u]) {
						if (a) throw new Error("Cannot set multiple separator types.");
						i = ",", a = !0
					} else if ("tsv" === arguments[u]) {
					if (a) throw new Error("Cannot set multiple separator types.");
					i = "\t", a = !0
				}
				var p = new s.Table;
				return h({
					url: e,
					crossOrigin: !0,
					type: "csv"
				}).then(function(e) {
					e = e.responseText;
					for (var r, a = {}, h = 0, c = 1, f = 2, d = 4, m = '"', g = "\r", y = "\n", v = [], x = 0, _ = null, b = function() {
							a.escaped = !1, _ = [], S()
						}, w = function() {
							a.currentState = d, v.push(_), _ = null
						}, S = function() {
							a.currentState = h, a.token = ""
						}, T = function() {
							_.push(a.token), S()
						};;) {
						if (r = e[x++], null == r) {
							if (a.escaped) throw new Error("Unclosed quote in file.");
							if (_) {
								T(), w();
								break
							}
						}
						if (null === _ && b(), a.currentState === h) {
							if (r === m) {
								a.escaped = !0, a.currentState = c;
								continue
							}
							a.currentState = c
						}
						a.currentState === c && a.escaped ? r === m ? e[x] === m ? (a.token += m, x++) : (a.escaped = !1, a.currentState = f) : a.token += r : r === g ? (e[x] === y && x++, T(), w()) : r === y ? (T(), w()) : r === i ? T() : a.currentState === c && (a.token += r)
					}
					if (o) p.columns = v.shift();
					else
						for (u = 0; u < v[0].length; u++) p.columns[u] = "null";
					var M;
					for (u = 0; u < v.length && (u !== v.length - 1 || 1 !== v[u].length || "undefined" !== v[u][0]); u++) M = new s.TableRow, M.arr = v[u], M.obj = n(v[u], p.columns), p.addRow(M);
					null !== t && t(p), l && t !== l && l()
				}).fail(function(r, n) {
					s._friendlyFileLoadError(2, e), "function" == typeof t && t !== l && t(!1)
				}), p
			}, s.prototype.parseXML = function(e) {
				var t, r = new s.XML;
				if (e.children.length) {
					for (t = 0; t < e.children.length; t++) {
						var n = parseXML(e.children[t]);
						r.addChild(n)
					}
					r.setName(e.nodeName), r._setCont(e.textContent), r._setAttributes(e);
					for (var o = 0; o < r.children.length; o++) r.children[o].parent = r;
					return r
				}
				return r.setName(e.nodeName), r._setCont(e.textContent), r._setAttributes(e), r
			}, s.prototype.loadXML = function(e, t, r) {
				var n = {},
					o = s._getDecrementPreload.apply(this, arguments);
				return h({
					url: e,
					type: "xml",
					crossOrigin: !0,
					error: function(e) {
						r ? r(e) : console.log(e.statusText)
					}
				}).then(function(e) {
					var r = parseXML(e.documentElement);
					for (var i in r) n[i] = r[i];
					"undefined" != typeof t && t(n), o && t !== o && o()
				}), n
			}, s.prototype.selectFolder = function() {
				throw "not yet implemented"
			}, s.prototype.selectInput = function() {
				throw "not yet implemented"
			}, s.prototype.httpGet = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				e.push("GET"), s.prototype.httpDo.apply(this, e)
			}, s.prototype.httpPost = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				e.push("POST"), s.prototype.httpDo.apply(this, e)
			}, s.prototype.httpDo = function() {
				if ("object" == typeof arguments[0]) h(arguments[0]);
				else {
					for (var e, t, r = "GET", n = arguments[0], o = {}, i = "", a = 1; a < arguments.length; a++) {
						var s = arguments[a];
						"string" == typeof s ? "GET" === s || "POST" === s || "PUT" === s ? r = s : i = s : "object" == typeof s ? o = s : "function" == typeof s && (e ? t = s : e = s)
					}
					"" === i && (i = n.indexOf("json") !== -1 ? "json" : n.indexOf("xml") !== -1 ? "xml" : "text"), h({
						url: n,
						method: r,
						data: o,
						type: i,
						crossOrigin: !0,
						success: function(t) {
							"undefined" != typeof e && e("text" === i ? t.response : t)
						},
						error: function(e) {
							t ? t(e) : console.log(e.statusText)
						}
					})
				}
			}, window.URL = window.URL || window.webkitURL, s.prototype._pWriters = [], s.prototype.beginRaw = function() {
				throw "not yet implemented"
			}, s.prototype.beginRecord = function() {
				throw "not yet implemented"
			}, s.prototype.createOutput = function() {
				throw "not yet implemented"
			}, s.prototype.createWriter = function(e, t) {
				var r;
				for (var n in s.prototype._pWriters)
					if (s.prototype._pWriters[n].name === e) return r = new s.PrintWriter(e + window.millis(), t), s.prototype._pWriters.push(r), r;
				return r = new s.PrintWriter(e, t), s.prototype._pWriters.push(r), r
			}, s.prototype.endRaw = function() {
				throw "not yet implemented"
			}, s.prototype.endRecord = function() {
				throw "not yet implemented"
			}, s.PrintWriter = function(e, t) {
				var r = this;
				this.name = e, this.content = "", this.print = function(e) {
					this.content += e
				}, this.print = function(e) {
					this.content += e + "\n"
				}, this.flush = function() {
					this.content = ""
				}, this.close = function() {
					var n = [];
					n.push(this.content), s.prototype.writeFile(n, e, t);
					for (var o in s.prototype._pWriters) s.prototype._pWriters[o].name === this.name && s.prototype._pWriters.splice(o, 1);
					r.flush(), r = {}
				}
			}, s.prototype.saveBytes = function() {
				throw "not yet implemented"
			}, s.prototype.save = function(e, t, r) {
				var n = arguments,
					o = this._curElement.elt;
				if (0 === n.length) return void s.prototype.saveCanvas(o);
				if (n[0] instanceof s.Renderer || n[0] instanceof s.Graphics) return void s.prototype.saveCanvas(n[0].elt, n[1], n[2]);
				if (1 === n.length && "string" == typeof n[0]) s.prototype.saveCanvas(o, n[0]);
				else {
					var a = i(n[1], n[2])[1];
					switch (a) {
						case "json":
							return void s.prototype.saveJSON(n[0], n[1], n[2]);
						case "txt":
							return void s.prototype.saveStrings(n[0], n[1], n[2]);
						default:
							n[0] instanceof Array ? s.prototype.saveStrings(n[0], n[1], n[2]) : n[0] instanceof s.Table ? s.prototype.saveTable(n[0], n[1], n[2], n[3]) : n[0] instanceof s.Image ? s.prototype.saveCanvas(n[0].canvas, n[1]) : n[0] instanceof s.SoundFile && s.prototype.saveSound(n[0], n[1], n[2], n[3])
					}
				}
			}, s.prototype.saveJSON = function(e, t, r) {
				var n;
				n = r ? JSON.stringify(e) : JSON.stringify(e, void 0, 2), console.log(n), this.saveStrings(n.split("\n"), t, "json")
			}, s.prototype.saveJSONObject = s.prototype.saveJSON, s.prototype.saveJSONArray = s.prototype.saveJSON, s.prototype.saveStream = function() {
				throw "not yet implemented"
			}, s.prototype.saveStrings = function(e, t, r) {
				for (var n = r || "txt", o = this.createWriter(t, n), i = 0; i < e.length; i++) i < e.length - 1 ? o.print(e[i]) : o.print(e[i]);
				o.close(), o.flush()
			}, s.prototype.saveXML = function() {
				throw "not yet implemented"
			}, s.prototype.selectOutput = function() {
				throw "not yet implemented"
			}, s.prototype.saveTable = function(e, t, r) {
				var n = this.createWriter(t, r),
					i = e.columns,
					a = ",";
				if ("tsv" === r && (a = "\t"), "html" !== r) {
					if ("0" !== i[0])
						for (var s = 0; s < i.length; s++) s < i.length - 1 ? n.print(i[s] + a) : n.print(i[s]);
					for (var h = 0; h < e.rows.length; h++) {
						var l;
						for (l = 0; l < e.rows[h].arr.length; l++) l < e.rows[h].arr.length - 1 ? n.print(e.rows[h].arr[l] + a) : h < e.rows.length - 1 ? n.print(e.rows[h].arr[l]) : n.print(e.rows[h].arr[l])
					}
				} else {
					n.print("<html>"), n.print("<head>");
					var u = '  <meta http-equiv="content-type" content';
					if (u += '="text/html;charset=utf-8" />', n.print(u), n.print("</head>"), n.print("<body>"), n.print("  <table>"), "0" !== i[0]) {
						n.print("    <tr>");
						for (var p = 0; p < i.length; p++) {
							var c = o(i[p]);
							n.print("      <td>" + c), n.print("      </td>")
						}
						n.print("    </tr>")
					}
					for (var f = 0; f < e.rows.length; f++) {
						n.print("    <tr>");
						for (var d = 0; d < e.columns.length; d++) {
							var m = e.rows[f].getString(d),
								g = o(m);
							n.print("      <td>" + g), n.print("      </td>")
						}
						n.print("    </tr>")
					}
					n.print("  </table>"), n.print("</body>"), n.print("</html>")
				}
				n.close(), n.flush()
			}, s.prototype.writeFile = function(e, t, r) {
				var n = "application/octet-stream";
				s.prototype._isSafari() && (n = "text/plain");
				var o = new Blob(e, {
						type: n
					}),
					i = window.URL.createObjectURL(o);
				s.prototype.downloadFile(i, t, r)
			}, s.prototype.downloadFile = function(e, t, r) {
				var n = i(t, r),
					o = n[0],
					h = n[1],
					l = document.createElement("a");
				if (l.href = e, l.download = o, l.onclick = a, l.style.display = "none", document.body.appendChild(l), s.prototype._isSafari()) {
					var u = "Hello, Safari user! To download this file...\n";
					u += "1. Go to File --> Save As.\n", u += '2. Choose "Page Source" as the Format.\n', u += '3. Name it with this extension: ."' + h + '"', alert(u)
				}
				l.click(), e = null
			}, s.prototype._checkFileExtension = i, s.prototype._isSafari = function() {
				var e = Object.prototype.toString.call(window.HTMLElement);
				return e.indexOf("Constructor") > 0
			}, t.exports = s
		}, {
			"../core/core": 37,
			"../core/error_helpers": 40,
			"opentype.js": 8,
			reqwest: 27
		}],
		60: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.Table = function(e) {
				this.columns = [], this.rows = []
			}, n.Table.prototype.addRow = function(e) {
				var t = e || new n.TableRow;
				if ("undefined" == typeof t.arr || "undefined" == typeof t.obj) throw "invalid TableRow: " + t;
				return t.table = this, this.rows.push(t), t
			}, n.Table.prototype.removeRow = function(e) {
				this.rows[e].table = null;
				var t = this.rows.splice(e + 1, this.rows.length);
				this.rows.pop(), this.rows = this.rows.concat(t)
			}, n.Table.prototype.getRow = function(e) {
				return this.rows[e]
			}, n.Table.prototype.getRows = function() {
				return this.rows
			}, n.Table.prototype.findRow = function(e, t) {
				if ("string" == typeof t) {
					for (var r = 0; r < this.rows.length; r++)
						if (this.rows[r].obj[t] === e) return this.rows[r]
				} else
					for (var n = 0; n < this.rows.length; n++)
						if (this.rows[n].arr[t] === e) return this.rows[n];
				return null
			}, n.Table.prototype.findRows = function(e, t) {
				var r = [];
				if ("string" == typeof t)
					for (var n = 0; n < this.rows.length; n++) this.rows[n].obj[t] === e && r.push(this.rows[n]);
				else
					for (var o = 0; o < this.rows.length; o++) this.rows[o].arr[t] === e && r.push(this.rows[o]);
				return r
			}, n.Table.prototype.matchRow = function(e, t) {
				if ("number" == typeof t) {
					for (var r = 0; r < this.rows.length; r++)
						if (this.rows[r].arr[t].match(e)) return this.rows[r]
				} else
					for (var n = 0; n < this.rows.length; n++)
						if (this.rows[n].obj[t].match(e)) return this.rows[n];
				return null
			}, n.Table.prototype.matchRows = function(e, t) {
				var r = [];
				if ("number" == typeof t)
					for (var n = 0; n < this.rows.length; n++) this.rows[n].arr[t].match(e) && r.push(this.rows[n]);
				else
					for (var o = 0; o < this.rows.length; o++) this.rows[o].obj[t].match(e) && r.push(this.rows[o]);
				return r
			}, n.Table.prototype.getColumn = function(e) {
				var t = [];
				if ("string" == typeof e)
					for (var r = 0; r < this.rows.length; r++) t.push(this.rows[r].obj[e]);
				else
					for (var n = 0; n < this.rows.length; n++) t.push(this.rows[n].arr[e]);
				return t
			}, n.Table.prototype.clearRows = function() {
				delete this.rows, this.rows = []
			}, n.Table.prototype.addColumn = function(e) {
				var t = e || null;
				this.columns.push(t)
			}, n.Table.prototype.getColumnCount = function() {
				return this.columns.length
			}, n.Table.prototype.getRowCount = function() {
				return this.rows.length
			}, n.Table.prototype.removeTokens = function(e, t) {
				for (var r = function(e) {
						return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
					}, n = [], o = 0; o < e.length; o++) n.push(r(e.charAt(o)));
				var i = new RegExp(n.join("|"), "g");
				if ("undefined" == typeof t)
					for (var a = 0; a < this.columns.length; a++)
						for (var s = 0; s < this.rows.length; s++) {
							var h = this.rows[s].arr[a];
							h = h.replace(i, ""), this.rows[s].arr[a] = h, this.rows[s].obj[this.columns[a]] = h
						} else if ("string" == typeof t)
							for (var l = 0; l < this.rows.length; l++) {
								var u = this.rows[l].obj[t];
								u = u.replace(i, ""), this.rows[l].obj[t] = u;
								var p = this.columns.indexOf(t);
								this.rows[l].arr[p] = u
							} else
								for (var c = 0; c < this.rows.length; c++) {
									var f = this.rows[c].arr[t];
									f = f.replace(i, ""), this.rows[c].arr[t] = f, this.rows[c].obj[this.columns[t]] = f
								}
			}, n.Table.prototype.trim = function(e) {
				var t = new RegExp(" ", "g");
				if ("undefined" == typeof e)
					for (var r = 0; r < this.columns.length; r++)
						for (var n = 0; n < this.rows.length; n++) {
							var o = this.rows[n].arr[r];
							o = o.replace(t, ""), this.rows[n].arr[r] = o, this.rows[n].obj[this.columns[r]] = o
						} else if ("string" == typeof e)
							for (var i = 0; i < this.rows.length; i++) {
								var a = this.rows[i].obj[e];
								a = a.replace(t, ""), this.rows[i].obj[e] = a;
								var s = this.columns.indexOf(e);
								this.rows[i].arr[s] = a
							} else
								for (var h = 0; h < this.rows.length; h++) {
									var l = this.rows[h].arr[e];
									l = l.replace(t, ""), this.rows[h].arr[e] = l, this.rows[h].obj[this.columns[e]] = l
								}
			}, n.Table.prototype.removeColumn = function(e) {
				var t, r;
				"string" == typeof e ? (t = e, r = this.columns.indexOf(e), console.log("string")) : (r = e, t = this.columns[e]);
				var n = this.columns.splice(r + 1, this.columns.length);
				this.columns.pop(), this.columns = this.columns.concat(n);
				for (var o = 0; o < this.rows.length; o++) {
					var i = this.rows[o].arr,
						a = i.splice(r + 1, i.length);
					i.pop(), this.rows[o].arr = i.concat(a), delete this.rows[o].obj[t]
				}
			}, n.Table.prototype.set = function(e, t, r) {
				this.rows[e].set(t, r)
			}, n.Table.prototype.setNum = function(e, t, r) {
				this.rows[e].setNum(t, r)
			}, n.Table.prototype.setString = function(e, t, r) {
				this.rows[e].setString(t, r)
			}, n.Table.prototype.get = function(e, t) {
				return this.rows[e].get(t)
			}, n.Table.prototype.getNum = function(e, t) {
				return this.rows[e].getNum(t)
			}, n.Table.prototype.getString = function(e, t) {
				return this.rows[e].getString(t)
			}, n.Table.prototype.getObject = function(e) {
				for (var t, r, n, o = {}, i = 0; i < this.rows.length; i++)
					if (t = this.rows[i].obj, "string" == typeof e) {
						if (r = this.columns.indexOf(e), !(r >= 0)) throw 'This table has no column named "' + e + '"';
						n = t[e], o[n] = t
					} else o[i] = this.rows[i].obj;
				return o
			}, n.Table.prototype.getArray = function() {
				for (var e = [], t = 0; t < this.rows.length; t++) e.push(this.rows[t].arr);
				return e
			}, t.exports = n.Table
		}, {
			"../core/core": 37
		}],
		61: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.TableRow = function(e, t) {
				var r = [],
					n = {};
				e && (t = t || ",", r = e.split(t));
				for (var o = 0; o < r.length; o++) {
					var i = o,
						a = r[o];
					n[i] = a
				}
				this.arr = r, this.obj = n, this.table = null
			}, n.TableRow.prototype.set = function(e, t) {
				if ("string" == typeof e) {
					var r = this.table.columns.indexOf(e);
					if (!(r >= 0)) throw 'This table has no column named "' + e + '"';
					this.obj[e] = t, this.arr[r] = t
				} else {
					if (!(e < this.table.columns.length)) throw "Column #" + e + " is out of the range of this table";
					this.arr[e] = t;
					var n = this.table.columns[e];
					this.obj[n] = t
				}
			}, n.TableRow.prototype.setNum = function(e, t) {
				var r = parseFloat(t, 10);
				this.set(e, r)
			}, n.TableRow.prototype.setString = function(e, t) {
				var r = t.toString();
				this.set(e, r)
			}, n.TableRow.prototype.get = function(e) {
				return "string" == typeof e ? this.obj[e] : this.arr[e]
			}, n.TableRow.prototype.getNum = function(e) {
				var t;
				if (t = "string" == typeof e ? parseFloat(this.obj[e], 10) : parseFloat(this.arr[e], 10), "NaN" === t.toString()) throw "Error: " + this.obj[e] + " is NaN (Not a Number)";
				return t
			}, n.TableRow.prototype.getString = function(e) {
				return "string" == typeof e ? this.obj[e].toString() : this.arr[e].toString()
			}, t.exports = n.TableRow
		}, {
			"../core/core": 37
		}],
		62: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.XML = function() {
				this.name = null, this.attributes = {}, this.children = [], this.parent = null, this.content = null
			}, n.XML.prototype.getParent = function() {
				return this.parent
			}, n.XML.prototype.getName = function() {
				return this.name
			}, n.XML.prototype.setName = function(e) {
				this.name = e
			}, n.XML.prototype.hasChildren = function() {
				return this.children.length > 0
			}, n.XML.prototype.listChildren = function() {
				return this.children.map(function(e) {
					return e.name
				})
			}, n.XML.prototype.getChildren = function(e) {
				return e ? this.children.filter(function(t) {
					return t.name === e
				}) : this.children
			}, n.XML.prototype.getChild = function(e) {
				return "string" == typeof e ? this.children.find(function(t) {
					return t.name === e
				}) : this.children[e]
			}, n.XML.prototype.addChild = function(e) {
				e instanceof n.XML && this.children.push(e)
			}, n.XML.prototype.removeChild = function(e) {
				var t = -1;
				if ("string" == typeof e) {
					for (var r = 0; r < this.children.length; r++)
						if (this.children[r].name === e) {
							t = r;
							break
						}
				} else t = e;
				t !== -1 && this.children.splice(t, 1)
			}, n.XML.prototype.getAttributeCount = function() {
				return Object.keys(this.attributes).length
			}, n.XML.prototype.listAttributes = function() {
				return Object.keys(this.attributes)
			}, n.XML.prototype.hasAttribute = function(e) {
				return !!this.attributes[e]
			}, n.XML.prototype.getNumber = function(e, t) {
				return Number(this.attributes[e]) || t || 0
			}, n.XML.prototype.getString = function(e, t) {
				return String(this.attributes[e]) || t || null
			}, n.XML.prototype.setAttribute = function(e, t) {
				this.attributes[e] && (this.attributes[e] = t)
			}, n.XML.prototype.getContent = function(e) {
				return this.content || e || null
			}, n.XML.prototype.setContent = function(e) {
				this.children.length || (this.content = e)
			}, n.XML.prototype._setCont = function(e) {
				var t;
				t = e, t = t.replace(/\s\s+/g, ","), this.content = t
			}, n.XML.prototype._setAttributes = function(e) {
				var t, r = {};
				for (t = 0; t < e.attributes.length; t++) r[e.attributes[t].nodeName] = e.attributes[t].nodeValue;
				this.attributes = r
			}, t.exports = n.XML
		}, {
			"../core/core": 37
		}],
		63: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.abs = Math.abs, n.prototype.ceil = Math.ceil, n.prototype.constrain = function(e, t, r) {
				return Math.max(Math.min(e, r), t)
			}, n.prototype.dist = function(e, t, r, n, o, i) {
				return 4 === arguments.length ? Math.sqrt((r - e) * (r - e) + (n - t) * (n - t)) : 6 === arguments.length ? Math.sqrt((n - e) * (n - e) + (o - t) * (o - t) + (i - r) * (i - r)) : void 0
			}, n.prototype.exp = Math.exp, n.prototype.floor = Math.floor, n.prototype.lerp = function(e, t, r) {
				return r * (t - e) + e
			}, n.prototype.log = Math.log, n.prototype.mag = function(e, t) {
				return Math.sqrt(e * e + t * t)
			}, n.prototype.map = function(e, t, r, n, o) {
				return (e - t) / (r - t) * (o - n) + n
			}, n.prototype.max = function() {
				return arguments[0] instanceof Array ? Math.max.apply(null, arguments[0]) : Math.max.apply(null, arguments)
			}, n.prototype.min = function() {
				return arguments[0] instanceof Array ? Math.min.apply(null, arguments[0]) : Math.min.apply(null, arguments)
			}, n.prototype.norm = function(e, t, r) {
				return this.map(e, t, r, 0, 1)
			}, n.prototype.pow = Math.pow, n.prototype.round = Math.round, n.prototype.sq = function(e) {
				return e * e
			}, n.prototype.sqrt = Math.sqrt, t.exports = n
		}, {
			"../core/core": 37
		}],
		64: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.createVector = function(e, t, r) {
				return this instanceof n ? new n.Vector(this, arguments) : new n.Vector(e, t, r)
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		65: [function(e, t, r) {
			"use strict";
			var n, o = e("../core/core"),
				i = 4,
				a = 1 << i,
				s = 8,
				h = 1 << s,
				l = 4095,
				u = 4,
				p = .5,
				c = function(e) {
					return .5 * (1 - Math.cos(e * Math.PI))
				};
			o.prototype.noise = function(e, t, r) {
				if (t = t || 0, r = r || 0, null == n) {
					n = new Array(l + 1);
					for (var o = 0; o < l + 1; o++) n[o] = Math.random()
				}
				e < 0 && (e = -e), t < 0 && (t = -t), r < 0 && (r = -r);
				for (var f, d, m, g, y, v = Math.floor(e), x = Math.floor(t), _ = Math.floor(r), b = e - v, w = t - x, S = r - _, T = 0, M = .5, C = 0; C < u; C++) {
					var R = v + (x << i) + (_ << s);
					f = c(b), d = c(w), m = n[R & l], m += f * (n[R + 1 & l] - m), g = n[R + a & l], g += f * (n[R + a + 1 & l] - g), m += d * (g - m), R += h, g = n[R & l], g += f * (n[R + 1 & l] - g), y = n[R + a & l], y += f * (n[R + a + 1 & l] - y), g += d * (y - g), m += c(S) * (g - m), T += m * M, M *= p, v <<= 1, b *= 2, x <<= 1, w *= 2, _ <<= 1, S *= 2, b >= 1 && (v++, b--), w >= 1 && (x++, w--), S >= 1 && (_++, S--)
				}
				return T
			}, o.prototype.noiseDetail = function(e, t) {
				e > 0 && (u = e), t > 0 && (p = t)
			}, o.prototype.noiseSeed = function(e) {
				var t = function() {
					var e, t, r = 4294967296,
						n = 1664525,
						o = 1013904223;
					return {
						setSeed: function(n) {
							t = e = (null == n ? Math.random() * r : n) >>> 0
						},
						getSeed: function() {
							return e
						},
						rand: function() {
							return t = (n * t + o) % r, t / r
						}
					}
				}();
				t.setSeed(e), n = new Array(l + 1);
				for (var r = 0; r < l + 1; r++) n[r] = t.rand()
			}, t.exports = o
		}, {
			"../core/core": 37
		}],
		66: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("./polargeometry"),
				i = e("../core/constants");
			n.Vector = function() {
				var e, t, r;
				arguments[0] instanceof n ? (this.p5 = arguments[0], e = arguments[1][0] || 0, t = arguments[1][1] || 0, r = arguments[1][2] || 0) : (e = arguments[0] || 0, t = arguments[1] || 0, r = arguments[2] || 0), this.x = e, this.y = t, this.z = r
			}, n.Vector.prototype.toString = function() {
				return "p5.Vector Object : [" + this.x + ", " + this.y + ", " + this.z + "]"
			}, n.Vector.prototype.set = function(e, t, r) {
				return e instanceof n.Vector ? (this.x = e.x || 0, this.y = e.y || 0, this.z = e.z || 0, this) : e instanceof Array ? (this.x = e[0] || 0, this.y = e[1] || 0, this.z = e[2] || 0, this) : (this.x = e || 0, this.y = t || 0, this.z = r || 0, this)
			}, n.Vector.prototype.copy = function() {
				return this.p5 ? new n.Vector(this.p5, [this.x, this.y, this.z]) : new n.Vector(this.x, this.y, this.z)
			}, n.Vector.prototype.add = function(e, t, r) {
				return e instanceof n.Vector ? (this.x += e.x || 0, this.y += e.y || 0, this.z += e.z || 0, this) : e instanceof Array ? (this.x += e[0] || 0, this.y += e[1] || 0, this.z += e[2] || 0, this) : (this.x += e || 0, this.y += t || 0, this.z += r || 0, this)
			}, n.Vector.prototype.sub = function(e, t, r) {
				return e instanceof n.Vector ? (this.x -= e.x || 0, this.y -= e.y || 0, this.z -= e.z || 0, this) : e instanceof Array ? (this.x -= e[0] || 0, this.y -= e[1] || 0, this.z -= e[2] || 0, this) : (this.x -= e || 0, this.y -= t || 0, this.z -= r || 0, this)
			}, n.Vector.prototype.mult = function(e) {
				return this.x *= e || 0, this.y *= e || 0, this.z *= e || 0, this
			}, n.Vector.prototype.div = function(e) {
				return this.x /= e, this.y /= e, this.z /= e, this
			}, n.Vector.prototype.mag = function() {
				return Math.sqrt(this.magSq())
			}, n.Vector.prototype.magSq = function() {
				var e = this.x,
					t = this.y,
					r = this.z;
				return e * e + t * t + r * r
			}, n.Vector.prototype.dot = function(e, t, r) {
				return e instanceof n.Vector ? this.dot(e.x, e.y, e.z) : this.x * (e || 0) + this.y * (t || 0) + this.z * (r || 0)
			}, n.Vector.prototype.cross = function(e) {
				var t = this.y * e.z - this.z * e.y,
					r = this.z * e.x - this.x * e.z,
					o = this.x * e.y - this.y * e.x;
				return this.p5 ? new n.Vector(this.p5, [t, r, o]) : new n.Vector(t, r, o)
			}, n.Vector.prototype.dist = function(e) {
				var t = e.copy().sub(this);
				return t.mag()
			}, n.Vector.prototype.normalize = function() {
				return 0 === this.mag() ? this : this.div(this.mag())
			}, n.Vector.prototype.limit = function(e) {
				var t = this.magSq();
				return t > e * e && (this.div(Math.sqrt(t)), this.mult(e)), this
			}, n.Vector.prototype.setMag = function(e) {
				return this.normalize().mult(e)
			}, n.Vector.prototype.heading = function() {
				var e = Math.atan2(this.y, this.x);
				return this.p5 ? this.p5._angleMode === i.RADIANS ? e : o.radiansToDegrees(e) : e
			}, n.Vector.prototype.rotate = function(e) {
				this.p5 && this.p5._angleMode === i.DEGREES && (e = o.degreesToRadians(e));
				var t = this.heading() + e,
					r = this.mag();
				return this.x = Math.cos(t) * r, this.y = Math.sin(t) * r, this
			}, n.Vector.prototype.lerp = function(e, t, r, o) {
				return e instanceof n.Vector ? this.lerp(e.x, e.y, e.z, t) : (this.x += (e - this.x) * o || 0, this.y += (t - this.y) * o || 0, this.z += (r - this.z) * o || 0, this)
			}, n.Vector.prototype.array = function() {
				return [this.x || 0, this.y || 0, this.z || 0]
			}, n.Vector.prototype.equals = function(e, t, r) {
				var o, i, a;
				return e instanceof n.Vector ? (o = e.x || 0, i = e.y || 0, a = e.z || 0) : e instanceof Array ? (o = e[0] || 0, i = e[1] || 0, a = e[2] || 0) : (o = e || 0, i = t || 0, a = r || 0), this.x === o && this.y === i && this.z === a
			}, n.Vector.fromAngle = function(e) {
				return this.p5 && this.p5._angleMode === i.DEGREES && (e = o.degreesToRadians(e)), this.p5 ? new n.Vector(this.p5, [Math.cos(e), Math.sin(e), 0]) : new n.Vector(Math.cos(e), Math.sin(e), 0)
			}, n.Vector.random2D = function() {
				var e;
				return e = this.p5 ? this.p5._angleMode === i.DEGREES ? this.p5.random(360) : this.p5.random(i.TWO_PI) : Math.random() * Math.PI * 2, this.fromAngle(e)
			}, n.Vector.random3D = function() {
				var e, t;
				this.p5 ? (e = this.p5.random(0, i.TWO_PI), t = this.p5.random(-1, 1)) : (e = Math.random() * Math.PI * 2, t = 2 * Math.random() - 1);
				var r = Math.sqrt(1 - t * t) * Math.cos(e),
					o = Math.sqrt(1 - t * t) * Math.sin(e);
				return this.p5 ? new n.Vector(this.p5, [r, o, t]) : new n.Vector(r, o, t)
			}, n.Vector.add = function(e, t, r) {
				return r ? r.set(e) : r = e.copy(), r.add(t), r
			}, n.Vector.sub = function(e, t, r) {
				return r ? r.set(e) : r = e.copy(), r.sub(t), r
			}, n.Vector.mult = function(e, t, r) {
				return r ? r.set(e) : r = e.copy(), r.mult(t), r
			}, n.Vector.div = function(e, t, r) {
				return r ? r.set(e) : r = e.copy(), r.div(t), r
			}, n.Vector.dot = function(e, t) {
				return e.dot(t)
			}, n.Vector.cross = function(e, t) {
				return e.cross(t)
			}, n.Vector.dist = function(e, t) {
				return e.dist(t)
			}, n.Vector.lerp = function(e, t, r, n) {
				return n ? n.set(e) : n = e.copy(), n.lerp(t, r), n
			}, n.Vector.angleBetween = function(e, t) {
				var r = Math.acos(e.dot(t) / (e.mag() * t.mag()));
				return this.p5 && this.p5._angleMode === i.DEGREES && (r = o.radiansToDegrees(r)), r
			}, n.Vector.mag = function(e) {
				var t = e.x,
					r = e.y,
					n = e.z,
					o = t * t + r * r + n * n;
				return Math.sqrt(o)
			}, t.exports = n.Vector
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"./polargeometry": 67
		}],
		67: [function(e, t, r) {
			t.exports = {
				degreesToRadians: function(e) {
					return 2 * Math.PI * e / 360
				},
				radiansToDegrees: function(e) {
					return 360 * e / (2 * Math.PI)
				}
			}
		}, {}],
		68: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = !1,
				i = function() {
					var e, t, r = 4294967296,
						n = 1664525,
						o = 1013904223;
					return {
						setSeed: function(n) {
							t = e = (null == n ? Math.random() * r : n) >>> 0
						},
						getSeed: function() {
							return e
						},
						rand: function() {
							return t = (n * t + o) % r, t / r
						}
					}
				}();
			n.prototype.randomSeed = function(e) {
				i.setSeed(e), o = !0
			}, n.prototype.random = function(e, t) {
				var r;
				if (r = o ? i.rand() : Math.random(), "undefined" == typeof e) return r;
				if ("undefined" == typeof t) return e instanceof Array ? e[Math.floor(r * e.length)] : r * e;
				if (e > t) {
					var n = e;
					e = t, t = n
				}
				return r * (t - e) + e
			};
			var a, s = !1;
			n.prototype.randomGaussian = function(e, t) {
				var r, n, o, i;
				if (s) r = a, s = !1;
				else {
					do n = this.random(2) - 1, o = this.random(2) - 1, i = n * n + o * o; while (i >= 1);
					i = Math.sqrt(-2 * Math.log(i) / i), r = n * i, a = o * i, s = !0
				}
				var h = e || 0,
					l = t || 1;
				return r * l + h
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		69: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("./polargeometry"),
				i = e("../core/constants");
			n.prototype._angleMode = i.RADIANS, n.prototype.acos = function(e) {
				return this._angleMode === i.RADIANS ? Math.acos(e) : o.radiansToDegrees(Math.acos(e))
			}, n.prototype.asin = function(e) {
				return this._angleMode === i.RADIANS ? Math.asin(e) : o.radiansToDegrees(Math.asin(e))
			}, n.prototype.atan = function(e) {
				return this._angleMode === i.RADIANS ? Math.atan(e) : o.radiansToDegrees(Math.atan(e))
			}, n.prototype.atan2 = function(e, t) {
				return this._angleMode === i.RADIANS ? Math.atan2(e, t) : o.radiansToDegrees(Math.atan2(e, t))
			}, n.prototype.cos = function(e) {
				return this._angleMode === i.RADIANS ? Math.cos(e) : Math.cos(this.radians(e))
			}, n.prototype.sin = function(e) {
				return this._angleMode === i.RADIANS ? Math.sin(e) : Math.sin(this.radians(e))
			}, n.prototype.tan = function(e) {
				return this._angleMode === i.RADIANS ? Math.tan(e) : Math.tan(this.radians(e))
			}, n.prototype.degrees = function(e) {
				return o.radiansToDegrees(e)
			}, n.prototype.radians = function(e) {
				return o.degreesToRadians(e)
			}, n.prototype.angleMode = function(e) {
				e !== i.DEGREES && e !== i.RADIANS || (this._angleMode = e)
			}, t.exports = n
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"./polargeometry": 67
		}],
		70: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.textAlign = function(e, t) {
				return this._renderer.textAlign.apply(this._renderer, arguments)
			}, n.prototype.textLeading = function(e) {
				return this._renderer.textLeading.apply(this._renderer, arguments)
			}, n.prototype.textSize = function(e) {
				return this._renderer.textSize.apply(this._renderer, arguments)
			}, n.prototype.textStyle = function(e) {
				return this._renderer.textStyle.apply(this._renderer, arguments)
			}, n.prototype.textWidth = function(e) {
				return 0 === e.length ? 0 : this._renderer.textWidth.apply(this._renderer, arguments)
			}, n.prototype.textAscent = function() {
				return this._renderer.textAscent()
			}, n.prototype.textDescent = function() {
				return this._renderer.textDescent()
			}, n.prototype._updateTextMetrics = function() {
				return this._renderer._updateTextMetrics()
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		71: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("../core/constants");
			e("../core/error_helpers"), n.prototype.text = function(e, t, r, n, o) {
				for (var i = new Array(arguments.length), a = 0; a < i.length; ++a) i[a] = arguments[a];
				return this._validateParameters("text", i, [
					["*", "Number", "Number"],
					["*", "Number", "Number", "Number", "Number"]
				]), this._renderer._doFill || this._renderer._doStroke ? this._renderer.text.apply(this._renderer, arguments) : this
			}, n.prototype.textFont = function(e, t) {
				if (arguments.length) {
					if (!e) throw Error("null font passed to textFont");
					return this._renderer._setProperty("_textFont", e), t && (this._renderer._setProperty("_textSize", t), this._renderer._setProperty("_textLeading", t * o._DEFAULT_LEADMULT)), this._renderer._applyTextProperties()
				}
				return this
			}, t.exports = n
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"../core/error_helpers": 40
		}],
		72: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				for (var r = s(t, {
						sampleFactor: .1,
						simplifyThreshold: 0
					}), n = f(e, 0, 1), i = n / (n * r.sampleFactor), a = [], h = 0; h < n; h += i) a.push(f(e, h));
				return r.simplifyThreshold && o(a, r.simplifyThreshold), a
			}

			function o(e, t) {
				t = "undefined" == typeof t ? 0 : t;
				for (var r = 0, n = e.length - 1; e.length > 3 && n >= 0; --n) l(h(e, n - 1), h(e, n), h(e, n + 1), t) && (e.splice(n % e.length, 1), r++);
				return r
			}

			function i(e) {
				for (var t, r = [], n = 0; n < e.length; n++) "M" === e[n].type && (t && r.push(t), t = []), t.push(a(e[n]));
				return r.push(t), r
			}

			function a(e) {
				var t = [e.type];
				return "M" === e.type || "L" === e.type ? t.push(e.x, e.y) : "C" === e.type ? t.push(e.x1, e.y1, e.x2, e.y2, e.x, e.y) : "Q" === e.type && t.push(e.x1, e.y1, e.x, e.y), t
			}

			function s(e, t) {
				if ("object" != typeof e) e = t;
				else
					for (var r in t) "undefined" == typeof e[r] && (e[r] = t[r]);
				return e
			}

			function h(e, t) {
				var r = e.length;
				return e[t < 0 ? t % r + r : t % r]
			}

			function l(e, t, r, n) {
				if (!n) return 0 === u(e, t, r);
				"undefined" == typeof l.tmpPoint1 && (l.tmpPoint1 = [], l.tmpPoint2 = []);
				var o = l.tmpPoint1,
					i = l.tmpPoint2;
				o.x = t.x - e.x, o.y = t.y - e.y, i.x = r.x - t.x, i.y = r.y - t.y;
				var a = o.x * i.x + o.y * i.y,
					s = Math.sqrt(o.x * o.x + o.y * o.y),
					h = Math.sqrt(i.x * i.x + i.y * i.y),
					p = Math.acos(a / (s * h));
				return p < n
			}

			function u(e, t, r) {
				return (t[0] - e[0]) * (r[1] - e[1]) - (r[0] - e[0]) * (t[1] - e[1])
			}

			function p(e, t, r, n, o, i, a, s, h) {
				var l = 1 - h,
					u = Math.pow(l, 3),
					p = Math.pow(l, 2),
					c = h * h,
					f = c * h,
					d = u * e + 3 * p * h * r + 3 * l * h * h * o + f * a,
					m = u * t + 3 * p * h * n + 3 * l * h * h * i + f * s,
					g = e + 2 * h * (r - e) + c * (o - 2 * r + e),
					y = t + 2 * h * (n - t) + c * (i - 2 * n + t),
					v = r + 2 * h * (o - r) + c * (a - 2 * o + r),
					x = n + 2 * h * (i - n) + c * (s - 2 * i + n),
					_ = l * e + h * r,
					b = l * t + h * n,
					w = l * o + h * a,
					S = l * i + h * s,
					T = 90 - 180 * Math.atan2(g - v, y - x) / Math.PI;
				return (g > v || y < x) && (T += 180), {
					x: d,
					y: m,
					m: {
						x: g,
						y: y
					},
					n: {
						x: v,
						y: x
					},
					start: {
						x: _,
						y: b
					},
					end: {
						x: w,
						y: S
					},
					alpha: T
				}
			}

			function c(e, t, r, n, o, i, a, s, h) {
				return null == h ? _(e, t, r, n, o, i, a, s) : p(e, t, r, n, o, i, a, s, b(e, t, r, n, o, i, a, s, h))
			}

			function f(e, t, r) {
				e = m(e);
				for (var n, o, i, a, s, h = "", l = {}, u = 0, f = 0, d = e.length; f < d; f++) {
					if (i = e[f], "M" === i[0]) n = +i[1], o = +i[2];
					else {
						if (a = c(n, o, i[1], i[2], i[3], i[4], i[5], i[6]), u + a > t && !r) return s = c(n, o, i[1], i[2], i[3], i[4], i[5], i[6], t - u), {
							x: s.x,
							y: s.y,
							alpha: s.alpha
						};
						u += a, n = +i[5], o = +i[6]
					}
					h += i.shift() + i
				}
				return l.end = h, s = r ? u : p(n, o, i[0], i[1], i[2], i[3], i[4], i[5], 1), s.alpha && (s = {
					x: s.x,
					y: s.y,
					alpha: s.alpha
				}), s
			}

			function d(e) {
				var t = [],
					r = 0,
					n = 0,
					o = 0,
					i = 0,
					a = 0;
				"M" === e[0][0] && (r = +e[0][1], n = +e[0][2], o = r, i = n, a++, t[0] = ["M", r, n]);
				for (var s, h, l, u = 3 === e.length && "M" === e[0][0] && "R" === e[1][0].toUpperCase() && "Z" === e[2][0].toUpperCase(), p = a, c = e.length; p < c; p++) {
					if (t.push(h = []), l = e[p], l[0] !== String.prototype.toUpperCase.call(l[0])) switch (h[0] = String.prototype.toUpperCase.call(l[0]), h[0]) {
							case "A":
								h[1] = l[1], h[2] = l[2], h[3] = l[3], h[4] = l[4], h[5] = l[5], h[6] = +(l[6] + r), h[7] = +(l[7] + n);
								break;
							case "V":
								h[1] = +l[1] + n;
								break;
							case "H":
								h[1] = +l[1] + r;
								break;
							case "R":
								s = [r, n].concat(l.slice(1));
								for (var f = 2, d = s.length; f < d; f++) s[f] = +s[f] + r, s[++f] = +s[f] + n;
								t.pop(), t = t.concat(y(s, u));
								break;
							case "M":
								o = +l[1] + r, i = +l[2] + n;
								break;
							default:
								for (f = 1, d = l.length; f < d; f++) h[f] = +l[f] + (f % 2 ? r : n)
						} else if ("R" === l[0]) s = [r, n].concat(l.slice(1)), t.pop(), t = t.concat(y(s, u)), h = ["R"].concat(l.slice(-2));
						else
							for (var m = 0, g = l.length; m < g; m++) h[m] = l[m];
					switch (h[0]) {
						case "Z":
							r = o, n = i;
							break;
						case "H":
							r = h[1];
							break;
						case "V":
							n = h[1];
							break;
						case "M":
							o = h[h.length - 2], i = h[h.length - 1];
							break;
						default:
							r = h[h.length - 2], n = h[h.length - 1]
					}
				}
				return t
			}

			function m(e, t) {
				for (var r = d(e), n = t && d(t), o = {
						x: 0,
						y: 0,
						bx: 0,
						by: 0,
						X: 0,
						Y: 0,
						qx: null,
						qy: null
					}, i = {
						x: 0,
						y: 0,
						bx: 0,
						by: 0,
						X: 0,
						Y: 0,
						qx: null,
						qy: null
					}, a = (function(e, t, r) {
						var n, o, i = {
							T: 1,
							Q: 1
						};
						if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
						switch (e[0] in i || (t.qx = t.qy = null), e[0]) {
							case "M":
								t.X = e[1], t.Y = e[2];
								break;
							case "A":
								e = ["C"].concat(g.apply(0, [t.x, t.y].concat(e.slice(1))));
								break;
							case "S":
								"C" === r || "S" === r ? (n = 2 * t.x - t.bx, o = 2 * t.y - t.by) : (n = t.x, o = t.y), e = ["C", n, o].concat(e.slice(1));
								break;
							case "T":
								"Q" === r || "T" === r ? (t.qx = 2 * t.x - t.qx, t.qy = 2 * t.y - t.qy) : (t.qx = t.x, t.qy = t.y), e = ["C"].concat(x(t.x, t.y, t.qx, t.qy, e[1], e[2]));
								break;
							case "Q":
								t.qx = e[1], t.qy = e[2], e = ["C"].concat(x(t.x, t.y, e[1], e[2], e[3], e[4]));
								break;
							case "L":
								e = ["C"].concat(v(t.x, t.y, e[1], e[2]));
								break;
							case "H":
								e = ["C"].concat(v(t.x, t.y, e[1], t.y));
								break;
							case "V":
								e = ["C"].concat(v(t.x, t.y, t.x, e[1]));
								break;
							case "Z":
								e = ["C"].concat(v(t.x, t.y, t.X, t.Y))
						}
						return e
					}), s = function(e, t) {
						if (e[t].length > 7) {
							e[t].shift();
							for (var o = e[t]; o.length;) l[t] = "A", n && (u[t] = "A"), e.splice(t++, 0, ["C"].concat(o.splice(0, 6)));
							e.splice(t, 1), m = Math.max(r.length, n && n.length || 0)
						}
					}, h = function(e, t, o, i, a) {
						e && t && "M" === e[a][0] && "M" !== t[a][0] && (t.splice(a, 0, ["M", i.x, i.y]), o.bx = 0, o.by = 0, o.x = e[a][1], o.y = e[a][2], m = Math.max(r.length, n && n.length || 0))
					}, l = [], u = [], p = "", c = "", f = 0, m = Math.max(r.length, n && n.length || 0); f < m; f++) {
					r[f] && (p = r[f][0]), "C" !== p && (l[f] = p, f && (c = l[f - 1])), r[f] = a(r[f], o, c), "A" !== l[f] && "C" === p && (l[f] = "C"), s(r, f), n && (n[f] && (p = n[f][0]), "C" !== p && (u[f] = p, f && (c = u[f - 1])), n[f] = a(n[f], i, c), "A" !== u[f] && "C" === p && (u[f] = "C"), s(n, f)), h(r, n, o, i, f), h(n, r, i, o, f);
					var y = r[f],
						_ = n && n[f],
						b = y.length,
						w = n && _.length;
					o.x = y[b - 2], o.y = y[b - 1], o.bx = parseFloat(y[b - 4]) || o.x, o.by = parseFloat(y[b - 3]) || o.y, i.bx = n && (parseFloat(_[w - 4]) || i.x), i.by = n && (parseFloat(_[w - 3]) || i.y), i.x = n && _[w - 2], i.y = n && _[w - 1]
				}
				return n ? [r, n] : r
			}

			function g(e, t, r, n, o, i, a, s, h, l) {
				var u, p, c, f, d, m = Math.PI,
					y = 120 * m / 180,
					v = m / 180 * (+o || 0),
					x = [],
					_ = function(e, t, r) {
						var n = e * Math.cos(r) - t * Math.sin(r),
							o = e * Math.sin(r) + t * Math.cos(r);
						return {
							x: n,
							y: o
						}
					};
				if (l) u = l[0], p = l[1], c = l[2], f = l[3];
				else {
					d = _(e, t, -v), e = d.x, t = d.y, d = _(s, h, -v), s = d.x, h = d.y;
					var b = (e - s) / 2,
						w = (t - h) / 2,
						S = b * b / (r * r) + w * w / (n * n);
					S > 1 && (S = Math.sqrt(S), r = S * r, n = S * n);
					var T = r * r,
						M = n * n,
						C = (i === a ? -1 : 1) * Math.sqrt(Math.abs((T * M - T * w * w - M * b * b) / (T * w * w + M * b * b)));
					c = C * r * w / n + (e + s) / 2, f = C * -n * b / r + (t + h) / 2, u = Math.asin(((t - f) / n).toFixed(9)), p = Math.asin(((h - f) / n).toFixed(9)), u = e < c ? m - u : u, p = s < c ? m - p : p, u < 0 && (u = 2 * m + u), p < 0 && (p = 2 * m + p), a && u > p && (u -= 2 * m), !a && p > u && (p -= 2 * m)
				}
				var R = p - u;
				if (Math.abs(R) > y) {
					var E = p,
						A = s,
						P = h;
					p = u + y * (a && p > u ? 1 : -1), s = c + r * Math.cos(p), h = f + n * Math.sin(p), x = g(s, h, r, n, o, 0, a, A, P, [p, E, c, f])
				}
				R = p - u;
				var L = Math.cos(u),
					I = Math.sin(u),
					D = Math.cos(p),
					N = Math.sin(p),
					O = Math.tan(R / 4),
					k = 4 / 3 * r * O,
					U = 4 / 3 * n * O,
					F = [e, t],
					G = [e + k * I, t - U * L],
					B = [s + k * N, h - U * D],
					H = [s, h];
				if (G[0] = 2 * F[0] - G[0], G[1] = 2 * F[1] - G[1], l) return [G, B, H].concat(x);
				x = [G, B, H].concat(x).join().split(",");
				for (var V = [], X = 0, q = x.length; X < q; X++) V[X] = X % 2 ? _(x[X - 1], x[X], v).y : _(x[X], x[X + 1], v).x;
				return V
			}

			function y(e, t) {
				for (var r = [], n = 0, o = e.length; o - 2 * !t > n; n += 2) {
					var i = [{
						x: +e[n - 2],
						y: +e[n - 1]
					}, {
						x: +e[n],
						y: +e[n + 1]
					}, {
						x: +e[n + 2],
						y: +e[n + 3]
					}, {
						x: +e[n + 4],
						y: +e[n + 5]
					}];
					t ? n ? o - 4 === n ? i[3] = {
						x: +e[0],
						y: +e[1]
					} : o - 2 === n && (i[2] = {
						x: +e[0],
						y: +e[1]
					}, i[3] = {
						x: +e[2],
						y: +e[3]
					}) : i[0] = {
						x: +e[o - 2],
						y: +e[o - 1]
					} : o - 4 === n ? i[3] = i[2] : n || (i[0] = {
						x: +e[n],
						y: +e[n + 1]
					}), r.push(["C", (-i[0].x + 6 * i[1].x + i[2].x) / 6, (-i[0].y + 6 * i[1].y + i[2].y) / 6, (i[1].x + 6 * i[2].x - i[3].x) / 6, (i[1].y + 6 * i[2].y - i[3].y) / 6, i[2].x, i[2].y])
				}
				return r
			}

			function v(e, t, r, n) {
				return [e, t, r, n, r, n]
			}

			function x(e, t, r, n, o, i) {
				var a = 1 / 3,
					s = 2 / 3;
				return [a * e + s * r, a * t + s * n, a * o + s * r, a * i + s * n, o, i]
			}

			function _(e, t, r, n, o, i, a, s, h) {
				null == h && (h = 1), h = h > 1 ? 1 : h < 0 ? 0 : h;
				for (var l = h / 2, u = 12, p = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = 0, f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0; d < u; d++) {
					var m = l * p[d] + l,
						g = w(m, e, r, o, a),
						y = w(m, t, n, i, s),
						v = g * g + y * y;
					c += f[d] * Math.sqrt(v)
				}
				return l * c
			}

			function b(e, t, r, n, o, i, a, s, h) {
				if (!(h < 0 || _(e, t, r, n, o, i, a, s) < h)) {
					var l, u = 1,
						p = u / 2,
						c = u - p,
						f = .01;
					for (l = _(e, t, r, n, o, i, a, s, c); Math.abs(l - h) > f;) p /= 2, c += (l < h ? 1 : -1) * p, l = _(e, t, r, n, o, i, a, s, c);
					return c
				}
			}

			function w(e, t, r, n, o) {
				var i = -3 * t + 9 * r - 9 * n + 3 * o,
					a = e * i + 6 * t - 12 * r + 6 * n;
				return e * a - 3 * t + 3 * r
			}

			function S() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				t = e.length;
				for (var r = ""; t--;) r += e[t] === Object(e[t]) ? JSON.stringify(e[t]) : e[t];
				return r
			}
			var T = e("../core/core"),
				M = e("../core/constants");
			T.Font = function(e) {
				this.parent = e, this.cache = {}, this.font = void 0
			}, T.Font.prototype.list = function() {
				throw "not yet implemented"
			}, T.Font.prototype.textBounds = function(e, t, r, n, o) {
				t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, n = n || this.parent._renderer._textSize;
				var i = o && o.renderer && o.renderer._pInst || this.parent,
					a = i._renderer.drawingContext,
					s = a.textAlign || M.LEFT,
					h = a.textBaseline || M.BASELINE,
					l = this.cache[S("textBounds", e, t, r, n, s, h)];
				if (!l) {
					var u, p, c, f, d = [],
						m = [],
						g = this,
						y = this._scale(n);
					this.font.forEachGlyph(e, t, r, n, o, function(e, t, r, o) {
						d.push(t), m.push(r);
						var i = e.getMetrics();
						"space" !== e.name ? (d.push(t + i.xMax * y), m.push(r + -i.yMin * y), m.push(r + -i.yMax * y)) : d.push(t + g.font.charToGlyph(" ").advanceWidth * g._scale(n))
					}), u = Math.min.apply(null, d), p = Math.min.apply(null, m), c = Math.max.apply(null, d), f = Math.max.apply(null, m), l = {
						x: u,
						y: p,
						h: f - p,
						w: c - u,
						advance: u - t
					};
					var v = l.w + l.advance,
						x = this._handleAlignment(i, a, e, l.x, l.y, v);
					l.x = x.x, l.y = x.y, this.cache[S("textBounds", e, t, r, n, s, h)] = l
				}
				return l
			}, T.Font.prototype.textToPoints = function(e, t, r, o, a) {
				var s = 0,
					h = [],
					l = this._getGlyphs(e);
				o = o || this.parent._renderer._textSize;
				for (var u = 0; u < l.length; u++) {
					for (var p = l[u].getPath(t, r, o), c = i(p.commands), f = 0; f < c.length; f++)
						for (var d = n(c[f], a), m = 0; m < d.length; m++) d[m].x += s, h.push(d[m]);
					s += l[u].advanceWidth * this._scale(o)
				}
				return h
			}, T.Font.prototype._getGlyphs = function(e) {
				return this.font.stringToGlyphs(e)
			}, T.Font.prototype._getPath = function(e, t, r, n) {
				var o = n && n.renderer && n.renderer._pInst || this.parent,
					i = o._renderer.drawingContext,
					a = this._handleAlignment(o, i, e, t, r);
				return this.font.getPath(e, a.x, a.y, o._renderer._textSize, n)
			}, T.Font.prototype._getPathData = function(e, t, r, n) {
				var o = 3;
				return "string" == typeof e && arguments.length > 2 ? e = this._getPath(e, t, r, n) : "object" == typeof t && (n = t), n && "number" == typeof n.decimals && (o = n.decimals), e.toPathData(o)
			}, T.Font.prototype._getSVG = function(e, t, r, n) {
				var o = 3;
				return "string" == typeof e && arguments.length > 2 ? e = this._getPath(e, t, r, n) : "object" == typeof t && (n = t), n && ("number" == typeof n.decimals && (o = n.decimals), "number" == typeof n.strokeWidth && (e.strokeWidth = n.strokeWidth), "undefined" != typeof n.fill && (e.fill = n.fill), "undefined" != typeof n.stroke && (e.stroke = n.stroke)), e.toSVG(o)
			}, T.Font.prototype._renderPath = function(e, t, r, n) {
				var o, i = n && n.renderer || this.parent._renderer,
					a = i.drawingContext;
				o = "object" == typeof e && e.commands ? e.commands : this._getPath(e, t, r, n).commands, a.beginPath();
				for (var s = 0; s < o.length; s += 1) {
					var h = o[s];
					"M" === h.type ? a.moveTo(h.x, h.y) : "L" === h.type ? a.lineTo(h.x, h.y) : "C" === h.type ? a.bezierCurveTo(h.x1, h.y1, h.x2, h.y2, h.x, h.y) : "Q" === h.type ? a.quadraticCurveTo(h.x1, h.y1, h.x, h.y) : "Z" === h.type && a.closePath()
				}
				return i._doStroke && i._strokeSet && a.stroke(), i._doFill && (a.fillStyle = i._fillSet ? a.fillStyle : M._DEFAULT_TEXT_FILL, a.fill()), this
			}, T.Font.prototype._textWidth = function(e, t) {
				if (" " === e) return this.font.charToGlyph(" ").advanceWidth * this._scale(t);
				var r = this.textBounds(e, 0, 0, t);
				return r.w + r.advance
			}, T.Font.prototype._textAscent = function(e) {
				return this.font.ascender * this._scale(e)
			}, T.Font.prototype._textDescent = function(e) {
				return -this.font.descender * this._scale(e)
			}, T.Font.prototype._scale = function(e) {
				return 1 / this.font.unitsPerEm * (e || this.parent._renderer._textSize)
			}, T.Font.prototype._handleAlignment = function(e, t, r, n, o, i) {
				var a = e._renderer._textSize,
					s = this._textAscent(a),
					h = this._textDescent(a);
				return i = void 0 !== i ? i : this._textWidth(r, a), t.textAlign === M.CENTER ? n -= i / 2 : t.textAlign === M.RIGHT && (n -= i), t.textBaseline === M.TOP ? o += s : t.textBaseline === M._CTX_MIDDLE ? o += s / 2 : t.textBaseline === M.BOTTOM && (o -= h), {
					x: n,
					y: o
				}
			}, t.exports = T.Font
		}, {
			"../core/constants": 36,
			"../core/core": 37
		}],
		73: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.append = function(e, t) {
				return e.push(t), e
			}, n.prototype.arrayCopy = function(e, t, r, n, o) {
				var i, a;
				"undefined" != typeof o ? (a = Math.min(o, e.length), i = n, e = e.slice(t, a + t)) : ("undefined" != typeof r ? (a = r, a = Math.min(a, e.length)) : a = e.length, i = 0, r = t, e = e.slice(0, a)), Array.prototype.splice.apply(r, [i, a].concat(e))
			}, n.prototype.concat = function(e, t) {
				return e.concat(t)
			}, n.prototype.reverse = function(e) {
				return e.reverse()
			}, n.prototype.shorten = function(e) {
				return e.pop(), e
			}, n.prototype.shuffle = function(e, t) {
				var r = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e);
				e = t || r ? e : e.slice();
				for (var n, o, i = e.length; i > 1;) n = Math.random() * i | 0, o = e[--i], e[i] = e[n], e[n] = o;
				return e
			}, n.prototype.sort = function(e, t) {
				var r = t ? e.slice(0, Math.min(t, e.length)) : e,
					n = t ? e.slice(Math.min(t, e.length)) : [];
				return r = "string" == typeof r[0] ? r.sort() : r.sort(function(e, t) {
					return e - t
				}), r.concat(n)
			}, n.prototype.splice = function(e, t, r) {
				return Array.prototype.splice.apply(e, [r, 0].concat(t)), e
			}, n.prototype.subset = function(e, t, r) {
				return "undefined" != typeof r ? e.slice(t, t + r) : e.slice(t, e.length)
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		74: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.float = function(e) {
				return parseFloat(e)
			}, n.prototype.int = function(e, t) {
				return "string" == typeof e ? (t = t || 10, parseInt(e, t)) : "number" == typeof e ? 0 | e : "boolean" == typeof e ? e ? 1 : 0 : e instanceof Array ? e.map(function(e) {
					return n.prototype.int(e, t)
				}) : void 0
			}, n.prototype.str = function(e) {
				return e instanceof Array ? e.map(n.prototype.str) : String(e)
			}, n.prototype.boolean = function(e) {
				return "number" == typeof e ? 0 !== e : "string" == typeof e ? "true" === e.toLowerCase() : "boolean" == typeof e ? e : e instanceof Array ? e.map(n.prototype.boolean) : void 0
			}, n.prototype.byte = function(e) {
				var t = n.prototype.int(e, 10);
				return "number" == typeof t ? (t + 128) % 256 - 128 : t instanceof Array ? t.map(n.prototype.byte) : void 0
			}, n.prototype.char = function(e) {
				return "number" != typeof e || isNaN(e) ? e instanceof Array ? e.map(n.prototype.char) : "string" == typeof e ? n.prototype.char(parseInt(e, 10)) : void 0 : String.fromCharCode(e)
			}, n.prototype.unchar = function(e) {
				return "string" == typeof e && 1 === e.length ? e.charCodeAt(0) : e instanceof Array ? e.map(n.prototype.unchar) : void 0
			}, n.prototype.hex = function(e, t) {
				if (t = void 0 === t || null === t ? t = 8 : t, e instanceof Array) return e.map(function(e) {
					return n.prototype.hex(e, t)
				});
				if ("number" == typeof e) {
					e < 0 && (e = 4294967295 + e + 1);
					for (var r = Number(e).toString(16).toUpperCase(); r.length < t;) r = "0" + r;
					return r.length >= t && (r = r.substring(r.length - t, r.length)), r
				}
			}, n.prototype.unhex = function(e) {
				return e instanceof Array ? e.map(n.prototype.unhex) : parseInt("0x" + e, 16)
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		75: [function(e, t, r) {
			"use strict";

			function n() {
				var e = arguments[0],
					t = e < 0,
					r = t ? e.toString().substring(1) : e.toString(),
					n = r.indexOf("."),
					o = n !== -1 ? r.substring(0, n) : r,
					i = n !== -1 ? r.substring(n + 1) : "",
					a = t ? "-" : "";
				if (3 === arguments.length) {
					var s = "";
					(n !== -1 || arguments[2] - i.length > 0) && (s = "."), i.length > arguments[2] && (i = i.substring(0, arguments[2]));
					for (var h = 0; h < arguments[1] - o.length; h++) a += "0";
					a += o, a += s, a += i;
					for (var l = 0; l < arguments[2] - i.length; l++) a += "0";
					return a
				}
				for (var u = 0; u < Math.max(arguments[1] - o.length, 0); u++) a += "0";
				return a += r
			}

			function o() {
				var e = arguments[0].toString(),
					t = e.indexOf("."),
					r = t !== -1 ? e.substring(t) : "",
					n = t !== -1 ? e.substring(0, t) : e;
				if (n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === arguments[1]) r = "";
				else if (void 0 !== arguments[1])
					if (arguments[1] > r.length) {
						r += t === -1 ? "." : "";
						for (var o = arguments[1] - r.length + 1, i = 0; i < o; i++) r += "0"
					} else r = r.substring(0, arguments[1] + 1);
				return n + r
			}

			function i() {
				return parseFloat(arguments[0]) > 0 ? "+" + arguments[0].toString() : arguments[0].toString()
			}

			function a() {
				return parseFloat(arguments[0]) > 0 ? " " + arguments[0].toString() : arguments[0].toString()
			}
			var s = e("../core/core");
			s.prototype.join = function(e, t) {
				return e.join(t)
			}, s.prototype.match = function(e, t) {
				return e.match(t)
			}, s.prototype.matchAll = function(e, t) {
				for (var r = new RegExp(t, "g"), n = r.exec(e), o = []; null !== n;) o.push(n), n = r.exec(e);
				return o
			}, s.prototype.nf = function() {
				if (arguments[0] instanceof Array) {
					var e = arguments[1],
						t = arguments[2];
					return arguments[0].map(function(r) {
						return n(r, e, t)
					})
				}
				var r = Object.prototype.toString.call(arguments[0]);
				return "[object Arguments]" === r ? 3 === arguments[0].length ? this.nf(arguments[0][0], arguments[0][1], arguments[0][2]) : 2 === arguments[0].length ? this.nf(arguments[0][0], arguments[0][1]) : this.nf(arguments[0][0]) : n.apply(this, arguments)
			}, s.prototype.nfc = function() {
				if (arguments[0] instanceof Array) {
					var e = arguments[1];
					return arguments[0].map(function(t) {
						return o(t, e)
					})
				}
				return o.apply(this, arguments)
			}, s.prototype.nfp = function() {
				var e = this.nf.apply(this, arguments);
				return e instanceof Array ? e.map(i) : i(e)
			}, s.prototype.nfs = function() {
				var e = this.nf.apply(this, arguments);
				return e instanceof Array ? e.map(a) : a(e)
			}, s.prototype.split = function(e, t) {
				return e.split(t)
			}, s.prototype.splitTokens = function() {
				var e, t, r, n;
				return n = arguments[1], arguments.length > 1 ? (r = /\]/g.exec(n), t = /\[/g.exec(n), t && r ? (n = n.slice(0, r.index) + n.slice(r.index + 1), t = /\[/g.exec(n), n = n.slice(0, t.index) + n.slice(t.index + 1), e = new RegExp("[\\[" + n + "\\]]", "g")) : r ? (n = n.slice(0, r.index) + n.slice(r.index + 1), e = new RegExp("[" + n + "\\]]", "g")) : t ? (n = n.slice(0, t.index) + n.slice(t.index + 1), e = new RegExp("[" + n + "\\[]", "g")) : e = new RegExp("[" + n + "]", "g")) : e = /\s/g, arguments[0].split(e).filter(function(e) {
					return e
				})
			}, s.prototype.trim = function(e) {
				return e instanceof Array ? e.map(this.trim) : e.trim()
			}, t.exports = s
		}, {
			"../core/core": 37
		}],
		76: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.day = function() {
				return (new Date).getDate()
			}, n.prototype.hour = function() {
				return (new Date).getHours()
			}, n.prototype.minute = function() {
				return (new Date).getMinutes()
			}, n.prototype.millis = function() {
				return window.performance.now()
			}, n.prototype.month = function() {
				return (new Date).getMonth() + 1
			}, n.prototype.second = function() {
				return (new Date).getSeconds()
			}, n.prototype.year = function() {
				return (new Date).getFullYear()
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		77: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.camera = function(e, t, r) {
				for (var n = new Array(arguments.length), o = 0; o < n.length; ++o) n[o] = arguments[o];
				this._validateParameters("camera", n, ["Number", "Number", "Number"]), this._renderer.translate(-e, -t, -r)
			}, n.prototype.perspective = function(e, t, r, o) {
				for (var i = new Array(arguments.length), a = 0; a < i.length; ++a) i[a] = arguments[a];
				this._validateParameters("perspective", i, ["Number", "Number", "Number", "Number"]), this._renderer.uPMatrix = n.Matrix.identity(),
					this._renderer.uPMatrix.perspective(e, t, r, o), this._renderer._curCamera = "custom"
			}, n.prototype.ortho = function(e, t, r, o, i, a) {
				for (var s = new Array(arguments.length), h = 0; h < s.length; ++h) s[h] = arguments[h];
				this._validateParameters("ortho", s, ["Number", "Number", "Number", "Number", "Number", "Number"]), e /= this.width, t /= this.width, o /= this.height, r /= this.height, this._renderer.uPMatrix = n.Matrix.identity(), this._renderer.uPMatrix.ortho(e, t, r, o, i, a), this._renderer._curCamera = "custom"
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		78: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.orbitControl = function() {
				return this.mouseIsPressed && (this.rotateY((this.mouseX - this.width / 2) / (this.width / 2)), this.rotateX((this.mouseY - this.height / 2) / (this.width / 2))), this
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		79: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.ambientLight = function(e, t, r, n) {
				var o = this._renderer.GL,
					i = this._renderer._getShader("lightVert", "lightTextureFrag");
				o.useProgram(i), i.uAmbientColor = o.getUniformLocation(i, "uAmbientColor[" + this._renderer.ambientLightCount + "]");
				var a = this._renderer._pInst.color.apply(this._renderer._pInst, arguments),
					s = a._array;
				return o.uniform3f(i.uAmbientColor, s[0], s[1], s[2]), i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor"), o.uniform4f(i.uMaterialColor, 1, 1, 1, 1), this._renderer.ambientLightCount++, i.uAmbientLightCount = o.getUniformLocation(i, "uAmbientLightCount"), o.uniform1i(i.uAmbientLightCount, this._renderer.ambientLightCount), this
			}, n.prototype.directionalLight = function(e, t, r, n, o, i, a) {
				var s = this._renderer.GL,
					h = this._renderer._getShader("lightVert", "lightTextureFrag");
				s.useProgram(h), h.uDirectionalColor = s.getUniformLocation(h, "uDirectionalColor[" + this._renderer.directionalLightCount + "]");
				var l = this._renderer._pInst.color.apply(this._renderer._pInst, [e, t, r]),
					u = l._array;
				s.uniform3f(h.uDirectionalColor, u[0], u[1], u[2]);
				for (var p, c, f, d = new Array(arguments.length), m = 0; m < d.length; ++m) d[m] = arguments[m];
				if ("number" == typeof d[d.length - 1]) p = d[d.length - 3], c = d[d.length - 2], f = d[d.length - 1];
				else try {
					p = d[d.length - 1].x, c = d[d.length - 1].y, f = d[d.length - 1].z
				} catch (e) {
					throw e
				}
				return h.uLightingDirection = s.getUniformLocation(h, "uLightingDirection[" + this._renderer.directionalLightCount + "]"), s.uniform3f(h.uLightingDirection, p, c, f), h.uMaterialColor = s.getUniformLocation(h, "uMaterialColor"), s.uniform4f(h.uMaterialColor, 1, 1, 1, 1), this._renderer.directionalLightCount++, h.uDirectionalLightCount = s.getUniformLocation(h, "uDirectionalLightCount"), s.uniform1i(h.uDirectionalLightCount, this._renderer.directionalLightCount), this
			}, n.prototype.pointLight = function(e, t, r, n, o, i, a) {
				var s = this._renderer.GL,
					h = this._renderer._getShader("lightVert", "lightTextureFrag");
				s.useProgram(h), h.uPointLightColor = s.getUniformLocation(h, "uPointLightColor[" + this._renderer.pointLightCount + "]");
				var l = this._renderer._pInst.color.apply(this._renderer._pInst, [e, t, r]),
					u = l._array;
				s.uniform3f(h.uPointLightColor, u[0], u[1], u[2]);
				for (var p, c, f, d = new Array(arguments.length), m = 0; m < d.length; ++m) d[m] = arguments[m];
				if ("number" == typeof d[d.length - 1]) p = d[d.length - 3], c = d[d.length - 2], f = d[d.length - 1];
				else try {
					p = d[d.length - 1].x, c = d[d.length - 1].y, f = d[d.length - 1].z
				} catch (e) {
					throw e
				}
				return h.uPointLightLocation = s.getUniformLocation(h, "uPointLightLocation[" + this._renderer.pointLightCount + "]"), s.uniform3f(h.uPointLightLocation, p, c, f), h.uMaterialColor = s.getUniformLocation(h, "uMaterialColor"), s.uniform4f(h.uMaterialColor, 1, 1, 1, 1), this._renderer.pointLightCount++, h.uPointLightCount = s.getUniformLocation(h, "uPointLightCount"), s.uniform1i(h.uPointLightCount, this._renderer.pointLightCount), this
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		80: [function(e, t, r) {
			"use strict";

			function n(e, t) {
				for (var r = {
						v: [],
						vt: [],
						vn: []
					}, n = {}, i = 0; i < t.length; ++i) {
					var a = t[i].trim().split(/\b\s+/);
					if (a.length > 0)
						if ("v" === a[0] || "vn" === a[0]) {
							var s = new o.Vector(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]));
							r[a[0]].push(s)
						} else if ("vt" === a[0]) {
						var h = [parseFloat(a[1]), parseFloat(a[2])];
						r[a[0]].push(h)
					} else if ("f" === a[0])
						for (var l = 3; l < a.length; ++l) {
							for (var u = [], p = [1, l - 1, l], c = 0; c < p.length; ++c) {
								var f = a[p[c]],
									d = 0;
								if (void 0 !== n[f]) d = n[f];
								else {
									for (var m = f.split("/"), g = 0; g < m.length; g++) m[g] = parseInt(m[g]) - 1;
									d = n[f] = e.vertices.length, e.vertices.push(r.v[m[0]].copy()), r.vt[m[1]] ? e.uvs.push(r.vt[m[1]].slice()) : e.uvs.push([0, 0]), r.vn[m[2]] && e.vertexNormals.push(r.vn[m[2]].copy())
								}
								u.push(d)
							}
							e.faces.push(u)
						}
				}
				return 0 === e.vertexNormals.length && e.computeNormals(), e
			}
			var o = e("../core/core");
			e("./p5.Geometry"), o.prototype.loadModel = function() {
				var e, t, r, i = arguments[0];
				"boolean" == typeof arguments[1] ? (e = arguments[1], t = arguments[2], r = arguments[3]) : (e = !1, t = arguments[1], r = arguments[2]);
				var a = new o.Geometry;
				return a.gid = i + "|" + e, this.loadStrings(i, function(r) {
					n(a, r), e && a.normalize(), "function" == typeof t && t(a)
				}.bind(this), r), a
			}, o.prototype.model = function(e) {
				e.vertices.length > 0 && (this._renderer.geometryInHash(e.gid) || this._renderer.createBuffers(e.gid, e), this._renderer.drawBuffers(e.gid))
			}, t.exports = o
		}, {
			"../core/core": 37,
			"./p5.Geometry": 82
		}],
		81: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.prototype.normalMaterial = function() {
				return this._renderer._getShader("normalVert", "normalFrag"), this
			}, n.prototype.texture = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = this._renderer.GL,
					o = this._renderer._getShader("lightVert", "lightTextureFrag");
				r.useProgram(o);
				var i;
				if (e[0].isTexture) e[0] instanceof n.Graphics || "undefined" != typeof n.MediaElement && e[0] instanceof n.MediaElement ? i = e[0].elt : e[0] instanceof n.Image && (i = e[0].canvas), this._renderer._bind.call(this, e[0].tex, i);
				else {
					if (e[0] instanceof n.Image) i = e[0].canvas;
					else if ("undefined" != typeof n.MediaElement && e[0] instanceof n.MediaElement) {
						if (!e[0].loadedmetadata) return;
						i = e[0].elt
					} else e[0] instanceof n.Graphics && (i = e[0].elt);
					var a = r.createTexture();
					e[0]._setProperty("tex", a), e[0]._setProperty("isTexture", !0), this._renderer._bind.call(this, a, i)
				}
				return r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, e[0].tex), r.uniform1i(r.getUniformLocation(o, "isTexture"), !0), r.uniform1i(r.getUniformLocation(o, "uSampler"), 0), this
			}, n.RendererGL.prototype._bind = function(e, t) {
				var r = this._renderer.GL;
				r.bindTexture(r.TEXTURE_2D, e), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.bindTexture(r.TEXTURE_2D, null)
			}, n.prototype.ambientMaterial = function(e, t, r, n) {
				var o = this._renderer.GL,
					i = this._renderer._getShader("lightVert", "lightTextureFrag");
				o.useProgram(i), i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor");
				var a = this._renderer._applyColorBlend.apply(this._renderer, arguments);
				return o.uniform4f(i.uMaterialColor, a[0], a[1], a[2], a[3]), i.uSpecular = o.getUniformLocation(i, "uSpecular"), o.uniform1i(i.uSpecular, !1), o.uniform1i(o.getUniformLocation(i, "isTexture"), !1), this
			}, n.prototype.specularMaterial = function(e, t, r, n) {
				var o = this._renderer.GL,
					i = this._renderer._getShader("lightVert", "lightTextureFrag");
				o.useProgram(i), o.uniform1i(o.getUniformLocation(i, "isTexture"), !1), i.uMaterialColor = o.getUniformLocation(i, "uMaterialColor");
				var a = this._renderer._applyColorBlend.apply(this._renderer, arguments);
				return o.uniform4f(i.uMaterialColor, a[0], a[1], a[2], a[3]), i.uSpecular = o.getUniformLocation(i, "uSpecular"), o.uniform1i(i.uSpecular, !0), this
			}, n.RendererGL.prototype._applyColorBlend = function(e, t, r, n) {
				var o = this.GL,
					i = this._pInst.color.apply(this._pInst, arguments),
					a = i._array;
				return a[a.length - 1] < 1 ? (o.depthMask(!1), o.enable(o.BLEND), o.blendEquation(o.FUNC_ADD), o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA)) : (o.depthMask(!0), o.disable(o.BLEND)), a
			}, t.exports = n
		}, {
			"../core/core": 37
		}],
		82: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			n.Geometry = function(e, t, r) {
				return this.vertices = [], this.vertexNormals = [], this.faces = [], this.uvs = [], this.detailX = void 0 !== e ? e : 1, this.detailY = void 0 !== t ? t : 1, r instanceof Function && r.call(this), this
			}, n.Geometry.prototype.computeFaces = function() {
				for (var e, t, r, n, o = this.detailX + 1, i = 0; i < this.detailY; i++)
					for (var a = 0; a < this.detailX; a++) e = i * o + a, t = i * o + a + 1, r = (i + 1) * o + a + 1, n = (i + 1) * o + a, this.faces.push([e, t, n]), this.faces.push([n, t, r]);
				return this
			}, n.Geometry.prototype._getFaceNormal = function(e, t) {
				var r = this.faces[e],
					o = this.vertices[r[t % 3]],
					i = this.vertices[r[(t + 1) % 3]],
					a = this.vertices[r[(t + 2) % 3]],
					s = n.Vector.cross(n.Vector.sub(i, o), n.Vector.sub(a, o)),
					h = n.Vector.mag(s) / (n.Vector.mag(n.Vector.sub(i, o)) * n.Vector.mag(n.Vector.sub(a, o)));
				return s = s.normalize(), s.mult(Math.asin(h))
			}, n.Geometry.prototype.computeNormals = function() {
				for (var e = 0; e < this.vertices.length; e++) {
					for (var t = new n.Vector, r = 0; r < this.faces.length; r++) this.faces[r][0] !== e && this.faces[r][1] !== e && this.faces[r][2] !== e || (t = t.add(this._getFaceNormal(r, e)));
					t = t.normalize(), this.vertexNormals.push(t)
				}
				return this
			}, n.Geometry.prototype.averageNormals = function() {
				for (var e = 0; e <= this.detailY; e++) {
					var t = this.detailX + 1,
						r = n.Vector.add(this.vertexNormals[e * t], this.vertexNormals[e * t + this.detailX]);
					r = n.Vector.div(r, 2), this.vertexNormals[e * t] = r, this.vertexNormals[e * t + this.detailX] = r
				}
				return this
			}, n.Geometry.prototype.averagePoleNormals = function() {
				for (var e = new n.Vector(0, 0, 0), t = 0; t < this.detailX; t++) e.add(this.vertexNormals[t]);
				for (e = n.Vector.div(e, this.detailX), t = 0; t < this.detailX; t++) this.vertexNormals[t] = e;
				for (e = new n.Vector(0, 0, 0), t = this.vertices.length - 1; t > this.vertices.length - 1 - this.detailX; t--) e.add(this.vertexNormals[t]);
				for (e = n.Vector.div(e, this.detailX), t = this.vertices.length - 1; t > this.vertices.length - 1 - this.detailX; t--) this.vertexNormals[t] = e;
				return this
			}, n.Geometry.prototype.normalize = function() {
				if (this.vertices.length > 0) {
					for (var e = this.vertices[0].copy(), t = this.vertices[0].copy(), r = 0; r < this.vertices.length; r++) e.x = Math.max(e.x, this.vertices[r].x), t.x = Math.min(t.x, this.vertices[r].x), e.y = Math.max(e.y, this.vertices[r].y), t.y = Math.min(t.y, this.vertices[r].y), e.z = Math.max(e.z, this.vertices[r].z), t.z = Math.min(t.z, this.vertices[r].z);
					var o = n.Vector.lerp(e, t, .5),
						i = n.Vector.sub(e, t),
						a = Math.max(Math.max(i.x, i.y), i.z),
						s = 200 / a;
					for (r = 0; r < this.vertices.length; r++) this.vertices[r].sub(o), this.vertices[r].mult(s)
				}
				return this
			}, t.exports = n.Geometry
		}, {
			"../core/core": 37
		}],
		83: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("../math/polargeometry"),
				i = e("../core/constants"),
				a = "undefined" != typeof Float32Array ? Float32Array : Array;
			n.Matrix = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				return e[0] instanceof n ? (this.p5 = e[0], "mat3" === e[1] ? this.mat3 = e[2] || new a([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = e[1] || new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) : "mat3" === e[0] ? this.mat3 = e[1] || new a([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = e[0] || new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this
			}, n.Matrix.prototype.set = function(e) {
				return e instanceof n.Matrix ? (this.mat4 = e.mat4, this) : e instanceof a ? (this.mat4 = e, this) : this
			}, n.Matrix.prototype.get = function() {
				return new n.Matrix(this.mat4)
			}, n.Matrix.prototype.copy = function() {
				var e = new n.Matrix;
				return e.mat4[0] = this.mat4[0], e.mat4[1] = this.mat4[1], e.mat4[2] = this.mat4[2], e.mat4[3] = this.mat4[3], e.mat4[4] = this.mat4[4], e.mat4[5] = this.mat4[5], e.mat4[6] = this.mat4[6], e.mat4[7] = this.mat4[7], e.mat4[8] = this.mat4[8], e.mat4[9] = this.mat4[9], e.mat4[10] = this.mat4[10], e.mat4[11] = this.mat4[11], e.mat4[12] = this.mat4[12], e.mat4[13] = this.mat4[13], e.mat4[14] = this.mat4[14], e.mat4[15] = this.mat4[15], e
			}, n.Matrix.identity = function() {
				return new n.Matrix
			}, n.Matrix.prototype.transpose = function(e) {
				var t, r, o, i, s, h;
				return e instanceof n.Matrix ? (t = e.mat4[1], r = e.mat4[2], o = e.mat4[3], i = e.mat4[6], s = e.mat4[7], h = e.mat4[11], this.mat4[0] = e.mat4[0], this.mat4[1] = e.mat4[4], this.mat4[2] = e.mat4[8], this.mat4[3] = e.mat4[12], this.mat4[4] = t, this.mat4[5] = e.mat4[5], this.mat4[6] = e.mat4[9], this.mat4[7] = e.mat4[13], this.mat4[8] = r, this.mat4[9] = i, this.mat4[10] = e.mat4[10], this.mat4[11] = e.mat4[14], this.mat4[12] = o, this.mat4[13] = s, this.mat4[14] = h, this.mat4[15] = e.mat4[15]) : e instanceof a && (t = e[1], r = e[2], o = e[3], i = e[6], s = e[7], h = e[11], this.mat4[0] = e[0], this.mat4[1] = e[4], this.mat4[2] = e[8], this.mat4[3] = e[12], this.mat4[4] = t, this.mat4[5] = e[5], this.mat4[6] = e[9], this.mat4[7] = e[13], this.mat4[8] = r, this.mat4[9] = i, this.mat4[10] = e[10], this.mat4[11] = e[14], this.mat4[12] = o, this.mat4[13] = s, this.mat4[14] = h, this.mat4[15] = e[15]), this
			}, n.Matrix.prototype.invert = function(e) {
				var t, r, o, i, s, h, l, u, p, c, f, d, m, g, y, v;
				e instanceof n.Matrix ? (t = e.mat4[0], r = e.mat4[1], o = e.mat4[2], i = e.mat4[3], s = e.mat4[4], h = e.mat4[5], l = e.mat4[6], u = e.mat4[7], p = e.mat4[8], c = e.mat4[9], f = e.mat4[10], d = e.mat4[11], m = e.mat4[12], g = e.mat4[13], y = e.mat4[14], v = e.mat4[15]) : e instanceof a && (t = e[0], r = e[1], o = e[2], i = e[3], s = e[4], h = e[5], l = e[6], u = e[7], p = e[8], c = e[9], f = e[10], d = e[11], m = e[12], g = e[13], y = e[14], v = e[15]);
				var x = t * h - r * s,
					_ = t * l - o * s,
					b = t * u - i * s,
					w = r * l - o * h,
					S = r * u - i * h,
					T = o * u - i * l,
					M = p * g - c * m,
					C = p * y - f * m,
					R = p * v - d * m,
					E = c * y - f * g,
					A = c * v - d * g,
					P = f * v - d * y,
					L = x * P - _ * A + b * E + w * R - S * C + T * M;
				return L ? (L = 1 / L, this.mat4[0] = (h * P - l * A + u * E) * L, this.mat4[1] = (o * A - r * P - i * E) * L, this.mat4[2] = (g * T - y * S + v * w) * L, this.mat4[3] = (f * S - c * T - d * w) * L, this.mat4[4] = (l * R - s * P - u * C) * L, this.mat4[5] = (t * P - o * R + i * C) * L, this.mat4[6] = (y * b - m * T - v * _) * L, this.mat4[7] = (p * T - f * b + d * _) * L, this.mat4[8] = (s * A - h * R + u * M) * L, this.mat4[9] = (r * R - t * A - i * M) * L, this.mat4[10] = (m * S - g * b + v * x) * L, this.mat4[11] = (c * b - p * S - d * x) * L, this.mat4[12] = (h * C - s * E - l * M) * L, this.mat4[13] = (t * E - r * C + o * M) * L, this.mat4[14] = (g * _ - m * w - y * x) * L, this.mat4[15] = (p * w - c * _ + f * x) * L, this) : null
			}, n.Matrix.prototype.invert3x3 = function() {
				var e = this.mat3[0],
					t = this.mat3[1],
					r = this.mat3[2],
					n = this.mat3[3],
					o = this.mat3[4],
					i = this.mat3[5],
					a = this.mat3[6],
					s = this.mat3[7],
					h = this.mat3[8],
					l = h * o - i * s,
					u = -h * n + i * a,
					p = s * n - o * a,
					c = e * l + t * u + r * p;
				return c ? (c = 1 / c, this.mat3[0] = l * c, this.mat3[1] = (-h * t + r * s) * c, this.mat3[2] = (i * t - r * o) * c, this.mat3[3] = u * c, this.mat3[4] = (h * e - r * a) * c, this.mat3[5] = (-i * e + r * n) * c, this.mat3[6] = p * c, this.mat3[7] = (-s * e + t * a) * c, this.mat3[8] = (o * e - t * n) * c, this) : null
			}, n.Matrix.prototype.transpose3x3 = function(e) {
				var t = e[1],
					r = e[2],
					n = e[5];
				return this.mat3[1] = e[3], this.mat3[2] = e[6], this.mat3[3] = t, this.mat3[5] = e[7], this.mat3[6] = r, this.mat3[7] = n, this
			}, n.Matrix.prototype.inverseTranspose = function(e) {
				return void 0 === this.mat3 ? console.error("sorry, this function only works with mat3") : (this.mat3[0] = e.mat4[0], this.mat3[1] = e.mat4[1], this.mat3[2] = e.mat4[2], this.mat3[3] = e.mat4[4], this.mat3[4] = e.mat4[5], this.mat3[5] = e.mat4[6], this.mat3[6] = e.mat4[8], this.mat3[7] = e.mat4[9], this.mat3[8] = e.mat4[10]), this.invert3x3().transpose3x3(this.mat3), this
			}, n.Matrix.prototype.determinant = function() {
				var e = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
					t = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
					r = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
					n = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
					o = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
					i = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
					a = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
					s = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
					h = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
					l = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
					u = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13],
					p = this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14];
				return e * p - t * u + r * l + n * h - o * s + i * a
			}, n.Matrix.prototype.mult = function(e) {
				var t = new a(16),
					r = new a(16);
				e instanceof n.Matrix ? r = e.mat4 : e instanceof a && (r = e);
				var o = this.mat4[0],
					i = this.mat4[1],
					s = this.mat4[2],
					h = this.mat4[3];
				return t[0] = o * r[0] + i * r[4] + s * r[8] + h * r[12], t[1] = o * r[1] + i * r[5] + s * r[9] + h * r[13], t[2] = o * r[2] + i * r[6] + s * r[10] + h * r[14], t[3] = o * r[3] + i * r[7] + s * r[11] + h * r[15], o = this.mat4[4], i = this.mat4[5], s = this.mat4[6], h = this.mat4[7], t[4] = o * r[0] + i * r[4] + s * r[8] + h * r[12], t[5] = o * r[1] + i * r[5] + s * r[9] + h * r[13], t[6] = o * r[2] + i * r[6] + s * r[10] + h * r[14], t[7] = o * r[3] + i * r[7] + s * r[11] + h * r[15], o = this.mat4[8], i = this.mat4[9], s = this.mat4[10], h = this.mat4[11], t[8] = o * r[0] + i * r[4] + s * r[8] + h * r[12], t[9] = o * r[1] + i * r[5] + s * r[9] + h * r[13], t[10] = o * r[2] + i * r[6] + s * r[10] + h * r[14], t[11] = o * r[3] + i * r[7] + s * r[11] + h * r[15], o = this.mat4[12], i = this.mat4[13], s = this.mat4[14], h = this.mat4[15], t[12] = o * r[0] + i * r[4] + s * r[8] + h * r[12], t[13] = o * r[1] + i * r[5] + s * r[9] + h * r[13], t[14] = o * r[2] + i * r[6] + s * r[10] + h * r[14], t[15] = o * r[3] + i * r[7] + s * r[11] + h * r[15], this.mat4 = t, this
			}, n.Matrix.prototype.scale = function() {
				for (var e, t, r, o = new Array(arguments.length), i = 0; i < o.length; ++i) o[i] = arguments[i];
				o[0] instanceof n.Vector ? (e = o[0].x, t = o[0].y, r = o[0].z) : o[0] instanceof Array && (e = o[0][0], t = o[0][1], r = o[0][2]);
				var s = new a(16);
				return s[0] = this.mat4[0] * e, s[1] = this.mat4[1] * e, s[2] = this.mat4[2] * e, s[3] = this.mat4[3] * e, s[4] = this.mat4[4] * t, s[5] = this.mat4[5] * t, s[6] = this.mat4[6] * t, s[7] = this.mat4[7] * t, s[8] = this.mat4[8] * r, s[9] = this.mat4[9] * r, s[10] = this.mat4[10] * r, s[11] = this.mat4[11] * r, s[12] = this.mat4[12], s[13] = this.mat4[13], s[14] = this.mat4[14], s[15] = this.mat4[15], this.mat4 = s, this
			}, n.Matrix.prototype.rotate = function(e, t) {
				var r, a, s, h, l;
				this.p5 ? this.p5._angleMode === i.DEGREES && (h = o.degreesToRadians(e)) : h = e, t instanceof n.Vector ? (r = t.x, a = t.y, s = t.z) : t instanceof Array && (r = t[0], a = t[1], s = t[2]), l = Math.sqrt(r * r + a * a + s * s), r *= 1 / l, a *= 1 / l, s *= 1 / l;
				var u = this.mat4[0],
					p = this.mat4[1],
					c = this.mat4[2],
					f = this.mat4[3],
					d = this.mat4[4],
					m = this.mat4[5],
					g = this.mat4[6],
					y = this.mat4[7],
					v = this.mat4[8],
					x = this.mat4[9],
					_ = this.mat4[10],
					b = this.mat4[11],
					w = Math.sin(h),
					S = Math.cos(h),
					T = 1 - S,
					M = r * r * T + S,
					C = a * r * T + s * w,
					R = s * r * T - a * w,
					E = r * a * T - s * w,
					A = a * a * T + S,
					P = s * a * T + r * w,
					L = r * s * T + a * w,
					I = a * s * T - r * w,
					D = s * s * T + S;
				return this.mat4[0] = u * M + d * C + v * R, this.mat4[1] = p * M + m * C + x * R, this.mat4[2] = c * M + g * C + _ * R, this.mat4[3] = f * M + y * C + b * R, this.mat4[4] = u * E + d * A + v * P, this.mat4[5] = p * E + m * A + x * P, this.mat4[6] = c * E + g * A + _ * P, this.mat4[7] = f * E + y * A + b * P, this.mat4[8] = u * L + d * I + v * D, this.mat4[9] = p * L + m * I + x * D, this.mat4[10] = c * L + g * I + _ * D, this.mat4[11] = f * L + y * I + b * D, this
			}, n.Matrix.prototype.translate = function(e) {
				var t = e[0],
					r = e[1],
					n = e[2] || 0;
				this.mat4[12] = this.mat4[0] * t + this.mat4[4] * r + this.mat4[8] * n + this.mat4[12], this.mat4[13] = this.mat4[1] * t + this.mat4[5] * r + this.mat4[9] * n + this.mat4[13], this.mat4[14] = this.mat4[2] * t + this.mat4[6] * r + this.mat4[10] * n + this.mat4[14], this.mat4[15] = this.mat4[3] * t + this.mat4[7] * r + this.mat4[11] * n + this.mat4[15]
			}, n.Matrix.prototype.rotateX = function(e) {
				this.rotate(e, [1, 0, 0])
			}, n.Matrix.prototype.rotateY = function(e) {
				this.rotate(e, [0, 1, 0])
			}, n.Matrix.prototype.rotateZ = function(e) {
				this.rotate(e, [0, 0, 1])
			}, n.Matrix.prototype.perspective = function(e, t, r, n) {
				var o = 1 / Math.tan(e / 2),
					i = 1 / (r - n);
				return this.mat4[0] = o / t, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = o, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = (n + r) * i, this.mat4[11] = -1, this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 2 * n * r * i, this.mat4[15] = 0, this
			}, n.Matrix.prototype.ortho = function(e, t, r, n, o, i) {
				var a = 1 / (e - t),
					s = 1 / (r - n),
					h = 1 / (o - i);
				return this.mat4[0] = -2 * a, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = -2 * s, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 2 * h, this.mat4[11] = 0, this.mat4[12] = (e + t) * a, this.mat4[13] = (n + r) * s, this.mat4[14] = (i + o) * h, this.mat4[15] = 1, this
			}, t.exports = n.Matrix
		}, {
			"../core/constants": 36,
			"../core/core": 37,
			"../math/polargeometry": 67
		}],
		84: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("../core/constants");
			n.RendererGL.prototype.beginShape = function(e) {
				return this.immediateMode.shapeMode = void 0 !== e ? e : o.LINE_STRIP, void 0 === this.immediateMode.vertexPositions ? (this.immediateMode.vertexPositions = [], this.immediateMode.vertexColors = [], this.immediateMode.vertexBuffer = this.GL.createBuffer(), this.immediateMode.colorBuffer = this.GL.createBuffer()) : (this.immediateMode.vertexPositions.length = 0, this.immediateMode.vertexColors.length = 0), this.isImmediateDrawing = !0, this
			}, n.RendererGL.prototype.vertex = function(e, t, r) {
				this.immediateMode.vertexPositions.push(e, t, r);
				var n = this.curFillColor || [.5, .5, .5, 1];
				return this.immediateMode.vertexColors.push(n[0], n[1], n[2], n[3]), this
			}, n.RendererGL.prototype.endShape = function(e, t, r, n, i, a) {
				var s = this.GL;
				if (this._bindImmediateBuffers(this.immediateMode.vertexPositions, this.immediateMode.vertexColors), e)
					if ("fill" === this.drawMode) switch (this.immediateMode.shapeMode) {
						case o.LINE_STRIP:
							this.immediateMode.shapeMode = o.TRIANGLE_FAN;
							break;
						case o.LINES:
							this.immediateMode.shapeMode = o.TRIANGLE_FAN;
							break;
						case o.TRIANGLES:
							this.immediateMode.shapeMode = o.TRIANGLE_FAN
					} else switch (this.immediateMode.shapeMode) {
						case o.LINE_STRIP:
							this.immediateMode.shapeMode = o.LINE_LOOP;
							break;
						case o.LINES:
							this.immediateMode.shapeMode = o.LINE_LOOP
					}
				if (this.immediateMode.shapeMode === o.QUADS || this.immediateMode.shapeMode === o.QUAD_STRIP) throw new Error("sorry, " + this.immediateMode.shapeMode + " not yet implemented in webgl mode.");
				return s.enable(s.BLEND), s.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.vertexPositions.length / 3), this.immediateMode.vertexPositions.length = 0, this.immediateMode.vertexColors.length = 0, this.isImmediateDrawing = !1, this
			}, n.RendererGL.prototype._bindImmediateBuffers = function(e, t) {
				this._setDefaultCamera();
				var r = this.GL,
					n = this._getCurShaderId(),
					o = this.mHash[n];
				return o.vertexPositionAttribute = r.getAttribLocation(o, "aPosition"), r.enableVertexAttribArray(o.vertexPositionAttribute), r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.vertexBuffer), r.bufferData(r.ARRAY_BUFFER, new Float32Array(e), r.DYNAMIC_DRAW), r.vertexAttribPointer(o.vertexPositionAttribute, 3, r.FLOAT, !1, 0, 0), o.vertexColorAttribute = r.getAttribLocation(o, "aVertexColor"), r.enableVertexAttribArray(o.vertexColorAttribute), r.bindBuffer(r.ARRAY_BUFFER, this.immediateMode.colorBuffer), r.bufferData(r.ARRAY_BUFFER, new Float32Array(t), r.DYNAMIC_DRAW), r.vertexAttribPointer(o.vertexColorAttribute, 4, r.FLOAT, !1, 0, 0), this._setMatrixUniforms(n), this
			}, n.RendererGL.prototype._getColorVertexShader = function() {
				var e, t = this.GL,
					r = "immediateVert|vertexColorFrag";
				return this.materialInHash(r) ? e = this.mHash[r] : (e = this._initShaders("immediateVert", "vertexColorFrag", !0), this.mHash[r] = e, e.vertexColorAttribute = t.getAttribLocation(e, "aVertexColor"), t.enableVertexAttribArray(e.vertexColorAttribute)), e
			}, t.exports = n.RendererGL
		}, {
			"../core/constants": 36,
			"../core/core": 37
		}],
		85: [function(e, t, r) {
			"use strict";

			function n(e) {
				return e.length > 0 ? e.reduce(function(e, t) {
					return e.concat(t)
				}) : []
			}

			function o(e) {
				return n(e.map(function(e) {
					return [e.x, e.y, e.z]
				}))
			}
			var i = e("../core/core"),
				a = 0;
			i.RendererGL.prototype._initBufferDefaults = function(e) {
				if (a++, a > 1e3) {
					var t = Object.keys(this.gHash)[0];
					delete this.gHash[t], a--
				}
				var r = this.GL;
				this.gHash[e] = {}, this.gHash[e].vertexBuffer = r.createBuffer(), this.gHash[e].normalBuffer = r.createBuffer(), this.gHash[e].uvBuffer = r.createBuffer(), this.gHash[e].indexBuffer = r.createBuffer()
			}, i.RendererGL.prototype.createBuffers = function(e, t) {
				var r = this.GL;
				this._setDefaultCamera(), this._initBufferDefaults(e);
				var i = this.mHash[this._getCurShaderId()];
				this.gHash[e].numberOfItems = 3 * t.faces.length, r.bindBuffer(r.ARRAY_BUFFER, this.gHash[e].vertexBuffer), r.bufferData(r.ARRAY_BUFFER, new Float32Array(o(t.vertices)), r.STATIC_DRAW), i.vertexPositionAttribute = r.getAttribLocation(i, "aPosition"), r.enableVertexAttribArray(i.vertexPositionAttribute), r.vertexAttribPointer(i.vertexPositionAttribute, 3, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this.gHash[e].normalBuffer), r.bufferData(r.ARRAY_BUFFER, new Float32Array(o(t.vertexNormals)), r.STATIC_DRAW), i.vertexNormalAttribute = r.getAttribLocation(i, "aNormal"), r.enableVertexAttribArray(i.vertexNormalAttribute), r.vertexAttribPointer(i.vertexNormalAttribute, 3, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this.gHash[e].uvBuffer), r.bufferData(r.ARRAY_BUFFER, new Float32Array(n(t.uvs)), r.STATIC_DRAW), i.textureCoordAttribute = r.getAttribLocation(i, "aTexCoord"), r.enableVertexAttribArray(i.textureCoordAttribute), r.vertexAttribPointer(i.textureCoordAttribute, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.gHash[e].indexBuffer), r.bufferData(r.ELEMENT_ARRAY_BUFFER, new Uint16Array(n(t.faces)), r.STATIC_DRAW)
			}, i.RendererGL.prototype.drawBuffers = function(e) {
				this._setDefaultCamera();
				var t = this.GL,
					r = this._getCurShaderId(),
					n = this.mHash[r];
				return t.bindBuffer(t.ARRAY_BUFFER, this.gHash[e].vertexBuffer), t.vertexAttribPointer(n.vertexPositionAttribute, 3, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.gHash[e].normalBuffer), t.vertexAttribPointer(n.vertexNormalAttribute, 3, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.gHash[e].uvBuffer), t.vertexAttribPointer(n.textureCoordAttribute, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.gHash[e].indexBuffer), this._setMatrixUniforms(r), t.drawElements(t.TRIANGLES, this.gHash[e].numberOfItems, t.UNSIGNED_SHORT, 0), this
			}, t.exports = i.RendererGL
		}, {
			"../core/core": 37
		}],
		86: [function(e, t, r) {
			"use strict";
			var n = e("../core/core"),
				o = e("./shader");
			e("../core/p5.Renderer"), e("./p5.Matrix");
			var i = [],
				a = 1e3,
				s = {
					alpha: !0,
					depth: !0,
					stencil: !0,
					antialias: !1,
					premultipliedAlpha: !1,
					preserveDrawingBuffer: !1
				};
			n.RendererGL = function(e, t, r) {
				return n.Renderer.call(this, e, t, r), this._initContext(), this.isP3D = !0, this.GL = this.drawingContext, this.ambientLightCount = 0, this.directionalLightCount = 0, this.pointLightCount = 0, this._curCamera = null, this.uMVMatrix = new n.Matrix, this.uPMatrix = new n.Matrix, this.uNMatrix = new n.Matrix("mat3"), this.gHash = {}, this.mHash = {}, this.isImmediateDrawing = !1, this.immediateMode = {}, this.curFillColor = [.5, .5, .5, 1], this.curStrokeColor = [.5, .5, .5, 1], this.pointSize = 5, this
			}, n.RendererGL.prototype = Object.create(n.Renderer.prototype), n.RendererGL.prototype._initContext = function() {
				try {
					if (this.drawingContext = this.canvas.getContext("webgl", s) || this.canvas.getContext("experimental-webgl", s), null === this.drawingContext) throw new Error("Error creating webgl context");
					console.log("p5.RendererGL: enabled webgl context");
					var e = this.drawingContext;
					e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight)
				} catch (e) {
					throw new Error(e)
				}
			}, n.RendererGL.prototype._setDefaultCamera = function() {
				if (null === this._curCamera) {
					var e = this.width,
						t = this.height;
					this.uPMatrix = n.Matrix.identity(), this.uPMatrix.perspective(60 / 180 * Math.PI, e / t, .1, 100), this._curCamera = "default"
				}
			}, n.RendererGL.prototype._update = function() {
				this.uMVMatrix = n.Matrix.identity(), this.translate(0, 0, -(this.height / 2) / Math.tan(30 * Math.PI / 180)), this.ambientLightCount = 0, this.directionalLightCount = 0, this.pointLightCount = 0
			}, n.RendererGL.prototype.background = function() {
				var e = this.GL,
					t = this._pInst.color.apply(this._pInst, arguments),
					r = t.levels[0] / 255,
					n = t.levels[1] / 255,
					o = t.levels[2] / 255,
					i = t.levels[3] / 255;
				e.clearColor(r, n, o, i), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
			}, n.RendererGL.prototype._initShaders = function(e, t, r) {
				var n = this.GL,
					i = n.createShader(n.VERTEX_SHADER);
				if (n.shaderSource(i, o[e]), n.compileShader(i), !n.getShaderParameter(i, n.COMPILE_STATUS)) return alert("Yikes! An error occurred compiling the shaders:" + n.getShaderInfoLog(i)), null;
				var a = n.createShader(n.FRAGMENT_SHADER);
				if (n.shaderSource(a, o[t]), n.compileShader(a), !n.getShaderParameter(a, n.COMPILE_STATUS)) return alert("Darn! An error occurred compiling the shaders:" + n.getShaderInfoLog(a)), null;
				var s = n.createProgram();
				return n.attachShader(s, i), n.attachShader(s, a), n.linkProgram(s), n.getProgramParameter(s, n.LINK_STATUS) || alert("Snap! Error linking shader program"), this._getLocation(s, r), s
			}, n.RendererGL.prototype._getLocation = function(e, t) {
				var r = this.GL;
				r.useProgram(e), e.uResolution = r.getUniformLocation(e, "uResolution"), r.uniform1f(e.uResolution, a), e.uPMatrixUniform = r.getUniformLocation(e, "uProjectionMatrix"), e.uMVMatrixUniform = r.getUniformLocation(e, "uModelViewMatrix"), void 0 === t && (e.uNMatrixUniform = r.getUniformLocation(e, "uNormalMatrix"), e.samplerUniform = r.getUniformLocation(e, "uSampler"))
			}, n.RendererGL.prototype._setUniform1f = function(e, t, r) {
				var n = this.GL,
					o = this.mHash[e];
				return n.useProgram(o), o[t] = n.getUniformLocation(o, t), n.uniform1f(o[t], r), this
			}, n.RendererGL.prototype._setMatrixUniforms = function(e) {
				var t = this.GL,
					r = this.mHash[e];
				t.useProgram(r), t.uniformMatrix4fv(r.uPMatrixUniform, !1, this.uPMatrix.mat4), t.uniformMatrix4fv(r.uMVMatrixUniform, !1, this.uMVMatrix.mat4), this.uNMatrix.inverseTranspose(this.uMVMatrix), t.uniformMatrix3fv(r.uNMatrixUniform, !1, this.uNMatrix.mat3)
			}, n.RendererGL.prototype._getShader = function(e, t, r) {
				var n = e + "|" + t;
				if (!this.materialInHash(n)) {
					var o = this._initShaders(e, t, r);
					this.mHash[n] = o
				}
				return this.curShaderId = n, this.mHash[this.curShaderId]
			}, n.RendererGL.prototype._getCurShaderId = function() {
				var e, t;
				return "fill" !== this.drawMode && void 0 === this.curShaderId ? (e = "normalVert|normalFrag", t = this._initShaders("normalVert", "normalFrag"), this.mHash[e] = t, this.curShaderId = e) : this.isImmediateDrawing && "fill" === this.drawMode && (e = "immediateVert|vertexColorFrag", t = this._initShaders("immediateVert", "vertexColorFrag"), this.mHash[e] = t, this.curShaderId = e), this.curShaderId
			}, n.RendererGL.prototype.fill = function(e, t, r, n) {
				var o, i = this.GL,
					a = this._applyColorBlend.apply(this, arguments);
				return this.curFillColor = a, this.drawMode = "fill", this.isImmediateDrawing ? (o = this._getShader("immediateVert", "vertexColorFrag"), i.useProgram(o)) : (o = this._getShader("normalVert", "basicFrag"), i.useProgram(o), o.uMaterialColor = i.getUniformLocation(o, "uMaterialColor"), i.uniform4f(o.uMaterialColor, a[0], a[1], a[2], a[3])), this
			}, n.RendererGL.prototype.stroke = function(e, t, r, n) {
				var o = this._pInst.color.apply(this._pInst, arguments),
					i = o._array;
				return this.curStrokeColor = i, this.drawMode = "stroke", this
			}, n.RendererGL.prototype._strokeCheck = function() {
				if ("stroke" === this.drawMode) throw new Error("stroke for shapes in 3D not yet implemented, use fill for now :(")
			}, n.RendererGL.prototype.strokeWeight = function(e) {
				return this.pointSize = e, this
			}, n.RendererGL.prototype.geometryInHash = function(e) {
				return void 0 !== this.gHash[e]
			}, n.RendererGL.prototype.materialInHash = function(e) {
				return void 0 !== this.mHash[e]
			}, n.RendererGL.prototype.resize = function(e, t) {
				var r = this.GL;
				n.Renderer.prototype.resize.call(this, e, t), r.viewport(0, 0, r.drawingBufferWidth, r.drawingBufferHeight), "default" === this._curCamera && (this._curCamera = null, this._setDefaultCamera())
			}, n.RendererGL.prototype.clear = function() {
				var e = this.GL;
				e.clearColor(arguments[0], arguments[1], arguments[2], arguments[3]), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
			}, n.RendererGL.prototype.translate = function(e, t, r) {
				return e /= a, t = -t / a, r /= a, this.uMVMatrix.translate([e, t, r]), this
			}, n.RendererGL.prototype.scale = function(e, t, r) {
				return this.uMVMatrix.scale([e, t, r]), this
			}, n.RendererGL.prototype.rotate = function(e, t) {
				return this.uMVMatrix.rotate(e, t), this
			}, n.RendererGL.prototype.rotateX = function(e) {
				return this.rotate(e, [1, 0, 0]), this
			}, n.RendererGL.prototype.rotateY = function(e) {
				return this.rotate(e, [0, 1, 0]), this
			}, n.RendererGL.prototype.rotateZ = function(e) {
				return this.rotate(e, [0, 0, 1]), this
			}, n.RendererGL.prototype.push = function() {
				i.push(this.uMVMatrix.copy())
			}, n.RendererGL.prototype.pop = function() {
				if (0 === i.length) throw new Error("Invalid popMatrix!");
				this.uMVMatrix = i.pop()
			}, n.RendererGL.prototype.resetMatrix = function() {
				return this.uMVMatrix = n.Matrix.identity(), this.translate(0, 0, -800), this
			}, n.RendererGL.prototype._applyTextProperties = function() {
				console.error("text commands not yet implemented in webgl")
			}, t.exports = n.RendererGL
		}, {
			"../core/core": 37,
			"../core/p5.Renderer": 43,
			"./p5.Matrix": 83,
			"./shader": 88
		}],
		87: [function(e, t, r) {
			"use strict";
			var n = e("../core/core");
			e("./p5.Geometry"), n.prototype.plane = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = e[0] || 50,
					o = e[1] || r,
					i = "number" == typeof e[2] ? e[2] : 1,
					a = "number" == typeof e[3] ? e[3] : 1,
					s = "plane|" + r + "|" + o + "|" + i + "|" + a;
				if (!this._renderer.geometryInHash(s)) {
					var h = function() {
							for (var e, t, i, a = 0; a <= this.detailY; a++) {
								t = a / this.detailY;
								for (var s = 0; s <= this.detailX; s++) e = s / this.detailX, i = new n.Vector(r * e - r / 2, o * t - o / 2, 0), this.vertices.push(i), this.uvs.push([e, t])
							}
						},
						l = new n.Geometry(i, a, h);
					l.computeFaces().computeNormals(), this._renderer.createBuffers(s, l)
				}
				this._renderer.drawBuffers(s)
			}, n.prototype.box = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = e[0] || 50,
					o = e[1] || r,
					i = e[2] || r,
					a = "number" == typeof e[3] ? e[3] : 4,
					s = "number" == typeof e[4] ? e[4] : 4,
					h = "box|" + r + "|" + o + "|" + i + "|" + a + "|" + s;
				if (!this._renderer.geometryInHash(h)) {
					var l = function() {
							for (var e = [
									[0, 4, 2, 6],
									[1, 3, 5, 7],
									[0, 1, 4, 5],
									[2, 6, 3, 7],
									[0, 2, 1, 3],
									[4, 5, 6, 7]
								], t = 0, a = 0; a < e.length; a++) {
								for (var s = e[a], h = 4 * a, l = 0; l < 4; l++) {
									var u = s[l],
										p = new n.Vector((2 * (1 & u) - 1) * r / 2, ((2 & u) - 1) * o / 2, ((4 & u) / 2 - 1) * i / 2);
									this.vertices.push(p), this.uvs.push([1 & l, (2 & l) / 2]), t++
								}
								this.faces.push([h, h + 1, h + 2]), this.faces.push([h + 2, h + 1, h + 3])
							}
						},
						u = new n.Geometry(a, s, l);
					u.computeNormals(), this._renderer.createBuffers(h, u)
				}
				return this._renderer.drawBuffers(h), this
			}, n.prototype.sphere = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = e[0] || 50,
					o = "number" == typeof e[1] ? e[1] : 24,
					i = "number" == typeof e[2] ? e[2] : 16,
					a = "sphere|" + r + "|" + o + "|" + i;
				if (!this._renderer.geometryInHash(a)) {
					var s = function() {
							for (var e, t, o, i = 0; i <= this.detailY; i++) {
								t = i / this.detailY;
								for (var a = 0; a <= this.detailX; a++) {
									e = a / this.detailX;
									var s = 2 * Math.PI * e,
										h = Math.PI * t - Math.PI / 2;
									o = new n.Vector(r * Math.cos(h) * Math.sin(s), r * Math.sin(h), r * Math.cos(h) * Math.cos(s)), this.vertices.push(o), this.uvs.push([e, t])
								}
							}
						},
						h = new n.Geometry(o, i, s);
					h.computeFaces().computeNormals().averageNormals().averagePoleNormals(), this._renderer.createBuffers(a, h)
				}
				return this._renderer.drawBuffers(a), this
			};
			var o = function(e, t, r, o, i, a, s) {
				o = o < 3 ? 3 : o, i = i < 1 ? 1 : i, a = void 0 === a || a, s = void 0 === s || s;
				var h, l, u = (a ? 2 : 0) + (s ? 2 : 0),
					p = o + 1,
					c = Math.atan2(e - t, r),
					f = a ? -2 : 0,
					d = i + (s ? 2 : 0);
				for (h = f; h <= d; ++h) {
					var m, g = h / i,
						y = r * g;
					for (h < 0 ? (y = 0, g = 1, m = e) : h > i ? (y = r, g = 1, m = t) : m = e + (t - e) * (h / i), h !== -2 && h !== i + 2 || (m = 0, g = 0), y -= r / 2, l = 0; l < p; ++l) this.vertices.push(new n.Vector(Math.sin(l * Math.PI * 2 / o) * m, y, Math.cos(l * Math.PI * 2 / o) * m)), this.vertexNormals.push(new n.Vector(h < 0 || h > i ? 0 : Math.sin(l * Math.PI * 2 / o) * Math.cos(c), h < 0 ? -1 : h > i ? 1 : Math.sin(c), h < 0 || h > i ? 0 : Math.cos(l * Math.PI * 2 / o) * Math.cos(c))), this.uvs.push([l / o, g])
				}
				for (h = 0; h < i + u; ++h)
					for (l = 0; l < o; ++l) this.faces.push([p * (h + 0) + 0 + l, p * (h + 0) + 1 + l, p * (h + 1) + 1 + l]), this.faces.push([p * (h + 0) + 0 + l, p * (h + 1) + 1 + l, p * (h + 1) + 0 + l])
			};
			n.prototype.cylinder = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = e[0] || 50,
					i = e[1] || r,
					a = "number" == typeof e[2] ? e[2] : 24,
					s = "number" == typeof e[3] ? e[3] : 16,
					h = "cylinder|" + r + "|" + i + "|" + a + "|" + s;
				if (!this._renderer.geometryInHash(h)) {
					var l = new n.Geometry(a, s);
					o.call(l, r, r, i, a, s, !0, !0), l.computeNormals(), this._renderer.createBuffers(h, l)
				}
				return this._renderer.drawBuffers(h), this
			}, n.prototype.cone = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = e[0] || 50,
					i = e[1] || r,
					a = "number" == typeof e[2] ? e[2] : 24,
					s = "number" == typeof e[3] ? e[3] : 16,
					h = "cone|" + r + "|" + i + "|" + a + "|" + s;
				if (!this._renderer.geometryInHash(h)) {
					var l = new n.Geometry(a, s);
					o.call(l, r, 0, i, a, s, !0, !0), l.computeNormals(), this._renderer.createBuffers(h, l)
				}
				return this._renderer.drawBuffers(h), this
			}, n.prototype.ellipsoid = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = "number" == typeof e[3] ? e[3] : 24,
					o = "number" == typeof e[4] ? e[4] : 24,
					i = e[0] || 50,
					a = e[1] || i,
					s = e[2] || i,
					h = "ellipsoid|" + i + "|" + a + "|" + s + "|" + r + "|" + o;
				if (!this._renderer.geometryInHash(h)) {
					var l = function() {
							for (var e, t, r, o = 0; o <= this.detailY; o++) {
								t = o / this.detailY;
								for (var h = 0; h <= this.detailX; h++) {
									e = h / this.detailX;
									var l = 2 * Math.PI * e,
										u = Math.PI * t - Math.PI / 2;
									r = new n.Vector(i * Math.cos(u) * Math.sin(l), a * Math.sin(u), s * Math.cos(u) * Math.cos(l)), this.vertices.push(r), this.uvs.push([e, t])
								}
							}
						},
						u = new n.Geometry(r, o, l);
					u.computeFaces().computeNormals(), this._renderer.createBuffers(h, u)
				}
				return this._renderer.drawBuffers(h), this
			}, n.prototype.torus = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = "number" == typeof e[2] ? e[2] : 24,
					o = "number" == typeof e[3] ? e[3] : 16,
					i = e[0] || 50,
					a = e[1] || 10,
					s = "torus|" + i + "|" + a + "|" + r + "|" + o;
				if (!this._renderer.geometryInHash(s)) {
					var h = function() {
							for (var e, t, r, o = 0; o <= this.detailY; o++) {
								t = o / this.detailY;
								for (var s = 0; s <= this.detailX; s++) {
									e = s / this.detailX;
									var h = 2 * Math.PI * e,
										l = 2 * Math.PI * t;
									r = new n.Vector((i + a * Math.cos(l)) * Math.cos(h), (i + a * Math.cos(l)) * Math.sin(h), a * Math.sin(l)), this.vertices.push(r), this.uvs.push([e, t])
								}
							}
						},
						l = new n.Geometry(r, o, h);
					l.computeFaces().computeNormals().averageNormals(), this._renderer.createBuffers(s, l)
				}
				return this._renderer.drawBuffers(s), this
			}, n.RendererGL.prototype.point = function(e, t, r) {
				return console.log("point not yet implemented in webgl"), this
			}, n.RendererGL.prototype.triangle = function(e) {
				var t = e[0],
					r = e[1],
					o = e[2],
					i = e[3],
					a = e[4],
					s = e[5],
					h = "tri|" + t + "|" + r + "|" + o + "|" + i + "|" + a + "|" + s;
				if (!this.geometryInHash(h)) {
					var l = function() {
							var e = [];
							e.push(new n.Vector(t, r, 0)), e.push(new n.Vector(o, i, 0)), e.push(new n.Vector(a, s, 0)), this.vertices = e, this.faces = [
								[0, 1, 2]
							], this.uvs = [
								[0, 0],
								[0, 1],
								[1, 1]
							]
						},
						u = new n.Geometry(1, 1, l);
					u.computeNormals(), this.createBuffers(h, u)
				}
				return this.drawBuffers(h), this
			}, n.RendererGL.prototype.ellipse = function(e) {
				var t = e[0],
					r = e[1],
					o = e[2],
					i = e[3],
					a = e[4] || 24,
					s = e[5] || 16,
					h = "ellipse|" + e[0] + "|" + e[1] + "|" + e[2] + "|" + e[3];
				if (!this.geometryInHash(h)) {
					var l = function() {
							for (var e, a, s, h = t + .5 * o, l = r + .5 * i, u = 0; u <= this.detailY; u++) {
								a = u / this.detailY;
								for (var p = 0; p <= this.detailX; p++) {
									e = p / this.detailX;
									var c = 2 * Math.PI * e;
									if (0 === a) s = new n.Vector(h, l, 0);
									else {
										var f = h + .5 * o * Math.cos(c),
											d = l + .5 * i * Math.sin(c);
										s = new n.Vector(f, d, 0)
									}
									this.vertices.push(s), this.uvs.push([e, a])
								}
							}
						},
						u = new n.Geometry(a, s, l);
					u.computeFaces().computeNormals(), this.createBuffers(h, u)
				}
				return this.drawBuffers(h), this
			}, n.RendererGL.prototype.rect = function(e) {
				var t = "rect|" + e[0] + "|" + e[1] + "|" + e[2] + "|" + e[3],
					r = e[0],
					o = e[1],
					i = e[2],
					a = e[3],
					s = e[4] || 24,
					h = e[5] || 16;
				if (!this.geometryInHash(t)) {
					var l = function() {
							for (var e, t, s, h = 0; h <= this.detailY; h++) {
								t = h / this.detailY;
								for (var l = 0; l <= this.detailX; l++) e = l / this.detailX, s = new n.Vector(r + i * e, o + a * t, 0), this.vertices.push(s), this.uvs.push([e, t])
							}
						},
						u = new n.Geometry(s, h, l);
					u.computeFaces().computeNormals(), this.createBuffers(t, u)
				}
				return this.drawBuffers(t), this
			}, n.RendererGL.prototype.quad = function() {
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				var r = e[0],
					o = e[1],
					i = e[2],
					a = e[3],
					s = e[4],
					h = e[5],
					l = e[6],
					u = e[7],
					p = "quad|" + r + "|" + o + "|" + i + "|" + a + "|" + s + "|" + h + "|" + l + "|" + u;
				if (!this.geometryInHash(p)) {
					var c = function() {
							this.vertices.push(new n.Vector(r, o, 0)), this.vertices.push(new n.Vector(i, a, 0)), this.vertices.push(new n.Vector(s, h, 0)), this.vertices.push(new n.Vector(l, u, 0)), this.uvs.push([0, 0], [1, 0], [1, 1], [0, 1])
						},
						f = new n.Geometry(2, 2, c);
					f.computeNormals(), f.faces = [
						[0, 1, 2],
						[2, 3, 0]
					], this.createBuffers(p, f)
				}
				return this.drawBuffers(p), this
			}, n.RendererGL.prototype.bezier = function(e) {
				var t = e[12] || 20;
				this.beginShape();
				for (var r = [0, 0, 0, 0], n = [0, 0, 0], o = 0; o <= t; o++) r[0] = Math.pow(1 - o / t, 3), r[1] = 3 * (o / t) * Math.pow(1 - o / t, 2), r[2] = 3 * Math.pow(o / t, 2) * (1 - o / t), r[3] = Math.pow(o / t, 3), n[0] = e[0] * r[0] + e[3] * r[1] + e[6] * r[2] + e[9] * r[3], n[1] = e[1] * r[0] + e[4] * r[1] + e[7] * r[2] + e[10] * r[3], n[2] = e[2] * r[0] + e[5] * r[1] + e[8] * r[2] + e[11] * r[3], this.vertex(n[0], n[1], n[2]);
				return this.endShape(), this
			}, n.RendererGL.prototype.curve = function(e) {
				var t = e[12];
				this.beginShape();
				for (var r = [0, 0, 0, 0], n = [0, 0, 0], o = 0; o <= t; o++) r[0] = .5 * Math.pow(o / t, 3), r[1] = .5 * Math.pow(o / t, 2), r[2] = o / t * .5, r[3] = .5, n[0] = r[0] * (-e[0] + 3 * e[3] - 3 * e[6] + e[9]) + r[1] * (2 * e[0] - 5 * e[3] + 4 * e[6] - e[9]) + r[2] * (-e[0] + e[6]) + r[3] * (2 * e[3]), n[1] = r[0] * (-e[1] + 3 * e[4] - 3 * e[7] + e[10]) + r[1] * (2 * e[1] - 5 * e[4] + 4 * e[7] - e[10]) + r[2] * (-e[1] + e[7]) + r[3] * (2 * e[4]), n[2] = r[0] * (-e[2] + 3 * e[5] - 3 * e[8] + e[11]) + r[1] * (2 * e[2] - 5 * e[5] + 4 * e[8] - e[11]) + r[2] * (-e[2] + e[8]) + r[3] * (2 * e[5]), this.vertex(n[0], n[1], n[2]);
				return this.endShape(), this
			}, t.exports = n
		}, {
			"../core/core": 37,
			"./p5.Geometry": 82
		}],
		88: [function(e, t, r) {
			t.exports = {
				immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution *vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",
				vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",
				vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",
				normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition / uResolution * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertTexCoord = aTexCoord;\n}\n",
				normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",
				basicFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",
				lightVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform float uResolution;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition / uResolution, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition / uResolution, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    //loc = loc / uResolution;\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n\n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}\n",
				lightTextureFrag: "precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a);\n    }\n  }\n}"
			}
		}, {}]
	}, {}, [28])(28)
});