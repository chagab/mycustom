! function(t, e) {
	"function" == typeof define && define.amd ? define("p5.dom", ["p5"], function(t) {
		e(t)
	}) : e("object" == typeof exports ? require("../p5") : t.p5)
}(this, function(t) {
	function e(e) {
		var i = document;
		return "string" == typeof e && "#" === e[0] ? (e = e.slice(1), i = document.getElementById(e) || document) : e instanceof t.Element ? i = e.elt : e instanceof HTMLElement && (i = e), i
	}

	function i(e) {
		if ("INPUT" === e.tagName && "checkbox" === e.type) {
			var i = new t.Element(e);
			return i.checked = function() {
				return 0 === arguments.length ? this.elt.checked : (arguments[0] ? this.elt.checked = !0 : this.elt.checked = !1, this)
			}, i
		}
		return "VIDEO" === e.tagName || "AUDIO" === e.tagName ? new t.MediaElement(e) : new t.Element(e)
	}

	function n(e, i, n) {
		var o = i._userNode ? i._userNode : document.body;
		o.appendChild(e);
		var s = n ? new t.MediaElement(e) : new t.Element(e);
		return i._elements.push(s), s
	}

	function o(t, e, i, o) {
		var s = document.createElement(e),
			i = i || "";
		"string" == typeof i && (i = [i]);
		for (var r = 0; r < i.length; r++) {
			var l = document.createElement("source");
			l.src = i[r], s.appendChild(l)
		}
		if ("undefined" != typeof o) {
			var a = function() {
				o(), s.removeEventListener("canplaythrough", a)
			};
			s.addEventListener("canplaythrough", a)
		}
		var h = n(s, t, !0);
		return h.loadedmetadata = !1, s.addEventListener("loadedmetadata", function() {
			h.width = s.videoWidth, h.height = s.videoHeight, 0 === h.elt.width && (h.elt.width = s.videoWidth), 0 === h.elt.height && (h.elt.height = s.videoHeight), h.loadedmetadata = !0
		}), h
	}
	t.prototype.select = function(t, n) {
		var o = null,
			s = e(n);
		return "." === t[0] ? (t = t.slice(1), o = s.getElementsByClassName(t), o = o.length ? o[0] : null) : "#" === t[0] ? (t = t.slice(1), o = s.getElementById(t)) : (o = s.getElementsByTagName(t), o = o.length ? o[0] : null), o ? i(o) : null
	}, t.prototype.selectAll = function(t, n) {
		var o, s = [],
			r = e(n);
		if ("." === t[0] ? (t = t.slice(1), o = r.getElementsByClassName(t)) : o = r.getElementsByTagName(t), o)
			for (var l = 0; l < o.length; l++) {
				var a = i(o[l]);
				s.push(a)
			}
		return s
	}, t.prototype.removeElements = function(t) {
		for (var e = 0; e < this._elements.length; e++) this._elements[e].elt instanceof HTMLCanvasElement || this._elements[e].remove()
	};
	var s = ["div", "p", "span"];
	s.forEach(function(e) {
		var i = "create" + e.charAt(0).toUpperCase() + e.slice(1);
		t.prototype[i] = function(t) {
			var i = document.createElement(e);
			return i.innerHTML = void 0 === typeof t ? "" : t, n(i, this)
		}
	}), t.prototype.createImg = function() {
		var t, e = document.createElement("img"),
			i = arguments,
			o = function() {
				t.width = e.offsetWidth, t.height = e.offsetHeight, i.length > 1 && "function" == typeof i[1] ? (t.fn = i[1], t.fn()) : i.length > 1 && "function" == typeof i[2] && (t.fn = i[2], t.fn())
			};
		return e.src = i[0], i.length > 1 && "string" == typeof i[1] && (e.alt = i[1]), e.onload = function() {
			o()
		}, t = n(e, this)
	}, t.prototype.createA = function(t, e, i) {
		var o = document.createElement("a");
		return o.href = t, o.innerHTML = e, i && (o.target = i), n(o, this)
	}, t.prototype.createSlider = function(t, e, i, o) {
		var s = document.createElement("input");
		return s.type = "range", s.min = t, s.max = e, 0 === o ? s.step = 1e-18 : o && (s.step = o), "number" == typeof i && (s.value = i), n(s, this)
	}, t.prototype.createButton = function(t, e) {
		var i = document.createElement("button");
		return i.innerHTML = t, i.value = e, e && (i.value = e), n(i, this)
	}, t.prototype.createCheckbox = function() {
		var t = document.createElement("div"),
			e = document.createElement("input");
		e.type = "checkbox", t.appendChild(e);
		var i = n(t, this);
		if (i.checked = function() {
				var t = i.elt.getElementsByTagName("input")[0];
				if (t) {
					if (0 === arguments.length) return t.checked;
					arguments[0] ? t.checked = !0 : t.checked = !1
				}
				return i
			}, this.value = function(t) {
				return i.value = t, this
			}, arguments[0]) {
			var o = Math.random().toString(36).slice(2),
				s = document.createElement("label");
			e.setAttribute("id", o), s.htmlFor = o, i.value(arguments[0]), s.appendChild(document.createTextNode(arguments[0])), t.appendChild(s)
		}
		return arguments[1] && (e.checked = !0), i
	}, t.prototype.createSelect = function(t) {
		var e = document.createElement("select");
		t && e.setAttribute("multiple", "true");
		var i = n(e, this);
		return i.option = function(t, i) {
			var n = document.createElement("option");
			n.innerHTML = t, arguments.length > 1 ? n.value = i : n.value = t, e.appendChild(n)
		}, i.selected = function(e) {
			var i = [];
			if (arguments.length > 0) {
				for (var n = 0; n < this.elt.length; n++) e.toString() === this.elt[n].value && (this.elt.selectedIndex = n);
				return this
			}
			if (t) {
				for (var n = 0; n < this.elt.selectedOptions.length; n++) i.push(this.elt.selectedOptions[n].value);
				return i
			}
			return this.elt.value
		}, i
	}, t.prototype.createRadio = function() {
		var t = document.querySelectorAll("input[type=radio]"),
			e = 0;
		if (t.length > 1) {
			var i = t.length,
				o = t[0].name,
				s = t[1].name;
			e = 1;
			for (var r = 1; r < i; r++) s = t[r].name, o != s && e++, o = s
		} else 1 == t.length && (e = 1);
		var l = document.createElement("div"),
			a = n(l, this),
			h = -1;
		return a.option = function(t, i) {
			var n = document.createElement("input");
			if (n.type = "radio", n.innerHTML = t, arguments.length > 1 ? n.value = i : n.value = t, n.setAttribute("name", "defaultradio" + e), l.appendChild(n), t) {
				h++;
				var o = (Math.random().toString(36).slice(2), document.createElement("label"));
				n.setAttribute("id", "defaultradio" + e + "-" + h), o.htmlFor = "defaultradio" + e + "-" + h, o.appendChild(document.createTextNode(t)), l.appendChild(o)
			}
			return n
		}, a.selected = function() {
			var t = this.elt.childNodes.length;
			if (1 == arguments.length) {
				for (var e = 0; e < t; e += 2) this.elt.childNodes[e].value == arguments[0] && (this.elt.childNodes[e].checked = !0);
				return this
			}
			for (var e = 0; e < t; e += 2)
				if (1 == this.elt.childNodes[e].checked) return this.elt.childNodes[e].value
		}, a.value = function() {
			var t = this.elt.childNodes.length;
			if (1 == arguments.length) {
				for (var e = 0; e < t; e += 2) this.elt.childNodes[e].value == arguments[0] && (this.elt.childNodes[e].checked = !0);
				return this
			}
			for (var e = 0; e < t; e += 2)
				if (1 == this.elt.childNodes[e].checked) return this.elt.childNodes[e].value;
			return ""
		}, a
	}, t.prototype.createInput = function(t) {
		var e = document.createElement("input");
		return e.type = "text", t && (e.value = t), n(e, this)
	}, t.prototype.createFileInput = function(e, i) {
		function o(i) {
			function n(i) {
				var n = new t.File(i);
				return function(t) {
					n.data = t.target.result, e(n)
				}
			}
			for (var o = i.target.files, s = 0; s < o.length; s++) {
				var r = o[s],
					l = new FileReader;
				l.onload = n(r), r.type.indexOf("text") > -1 ? l.readAsText(r) : l.readAsDataURL(r)
			}
		}
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var s = document.createElement("input");
			return s.type = "file", i && (s.multiple = "multiple"), s.addEventListener("change", o, !1), n(s, this)
		}
		console.log("The File APIs are not fully supported in this browser. Cannot create element.")
	}, t.prototype.createVideo = function(t, e) {
		return o(this, "video", t, e)
	}, t.prototype.createAudio = function(t, e) {
		return o(this, "audio", t, e)
	}, t.prototype.VIDEO = "video", t.prototype.AUDIO = "audio", navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, t.prototype.createCapture = function() {
		for (var e, i, o = !0, s = !0, r = 0; r < arguments.length; r++) arguments[r] === t.prototype.VIDEO ? s = !1 : arguments[r] === t.prototype.AUDIO ? o = !1 : "object" == typeof arguments[r] ? e = arguments[r] : "function" == typeof arguments[r] && (i = arguments[r]);
		if (!navigator.getUserMedia) throw "getUserMedia not supported in this browser";
		var l = document.createElement("video");
		e || (e = {
			video: o,
			audio: s
		}), navigator.getUserMedia(e, function(t) {
			l.src = window.URL.createObjectURL(t), i && i(t)
		}, function(t) {
			console.log(t)
		});
		var a = n(l, this, !0);
		return a.loadedmetadata = !1, l.addEventListener("loadedmetadata", function() {
			l.play(), a.width = a.elt.width = l.videoWidth, a.height = a.elt.height = l.videoHeight, a.loadedmetadata = !0
		}), a
	}, t.prototype.createElement = function(t, e) {
		var i = document.createElement(t);
		return "undefined" != typeof e && (i.innerHTML = e), n(i, this)
	}, t.Element.prototype.addClass = function(t) {
		return this.elt.className ? this.elt.className = this.elt.className + " " + t : this.elt.className = t, this
	}, t.Element.prototype.removeClass = function(t) {
		var e = new RegExp("(?:^|\\s)" + t + "(?!\\S)");
		return this.elt.className = this.elt.className.replace(e, ""), this.elt.className = this.elt.className.replace(/^\s+|\s+$/g, ""), this
	}, t.Element.prototype.child = function(e) {
		return null === e ? this.elt.childNodes : ("string" == typeof e ? ("#" === e[0] && (e = e.substring(1)), e = document.getElementById(e)) : e instanceof t.Element && (e = e.elt), this.elt.appendChild(e), this)
	}, t.Element.prototype.center = function(t) {
		var e = this.elt.style.display,
			i = "none" === this.elt.style.display,
			n = "none" === this.parent().style.display,
			o = {
				x: this.elt.offsetLeft,
				y: this.elt.offsetTop
			};
		i && this.show(), this.elt.style.display = "block", this.position(0, 0), n && (this.parent().style.display = "block");
		var s = Math.abs(this.parent().offsetWidth - this.elt.offsetWidth),
			r = Math.abs(this.parent().offsetHeight - this.elt.offsetHeight),
			l = o.y,
			a = o.x;
		return "both" === t || void 0 === t ? this.position(s / 2, r / 2) : "horizontal" === t ? this.position(s / 2, l) : "vertical" === t && this.position(a, r / 2), this.style("display", e), i && this.hide(), n && (this.parent().style.display = "none"), this
	}, t.Element.prototype.html = function(t) {
		return "undefined" != typeof t ? (this.elt.innerHTML = t, this) : this.elt.innerHTML
	}, t.Element.prototype.position = function() {
		return 0 === arguments.length ? {
			x: this.elt.offsetLeft,
			y: this.elt.offsetTop
		} : (this.elt.style.position = "absolute", this.elt.style.left = arguments[0] + "px", this.elt.style.top = arguments[1] + "px", this.x = arguments[0], this.y = arguments[1], this)
	}, t.Element.prototype._translate = function() {
		this.elt.style.position = "absolute";
		var t = "";
		return this.elt.style.transform && (t = this.elt.style.transform.replace(/translate3d\(.*\)/g, ""), t = t.replace(/translate[X-Z]?\(.*\)/g, "")), 2 === arguments.length ? this.elt.style.transform = "translate(" + arguments[0] + "px, " + arguments[1] + "px)" : arguments.length > 2 && (this.elt.style.transform = "translate3d(" + arguments[0] + "px," + arguments[1] + "px," + arguments[2] + "px)", 3 === arguments.length ? this.elt.parentElement.style.perspective = "1000px" : this.elt.parentElement.style.perspective = arguments[3] + "px"), this.elt.style.transform += t, this
	}, t.Element.prototype._rotate = function() {
		var t = "";
		if (this.elt.style.transform) {
			var t = this.elt.style.transform.replace(/rotate3d\(.*\)/g, "");
			t = t.replace(/rotate[X-Z]?\(.*\)/g, "")
		}
		return 1 === arguments.length ? this.elt.style.transform = "rotate(" + arguments[0] + "deg)" : 2 === arguments.length ? this.elt.style.transform = "rotate(" + arguments[0] + "deg, " + arguments[1] + "deg)" : 3 === arguments.length && (this.elt.style.transform = "rotateX(" + arguments[0] + "deg)", this.elt.style.transform += "rotateY(" + arguments[1] + "deg)", this.elt.style.transform += "rotateZ(" + arguments[2] + "deg)"), this.elt.style.transform += t, this
	}, t.Element.prototype.style = function(e, i) {
		var n = this;
		if (i instanceof t.Color && (i = "rgba(" + i.levels[0] + "," + i.levels[1] + "," + i.levels[2] + "," + i.levels[3] / 255 + ")"), "undefined" == typeof i) {
			if (e.indexOf(":") === -1) {
				var o = window.getComputedStyle(n.elt),
					s = o.getPropertyValue(e);
				return s
			}
			for (var r = e.split(";"), l = 0; l < r.length; l++) {
				var a = r[l].split(":");
				a[0] && a[1] && (this.elt.style[a[0].trim()] = a[1].trim())
			}
		} else if ("rotate" === e || "translate" === e || "position" === e) {
			var h = Array.prototype.shift.apply(arguments),
				d = this[h] || this["_" + h];
			d.apply(this, arguments)
		} else if (this.elt.style[e] = i, "width" === e || "height" === e || "left" === e || "top" === e) {
			var p = i.replace(/\D+/g, "");
			this[e] = parseInt(p, 10)
		}
		return this
	}, t.Element.prototype.attribute = function(t, e) {
		return "undefined" == typeof e ? this.elt.getAttribute(t) : (this.elt.setAttribute(t, e), this)
	}, t.Element.prototype.removeAttribute = function(t) {
		return this.elt.removeAttribute(t), this
	}, t.Element.prototype.value = function() {
		return arguments.length > 0 ? (this.elt.value = arguments[0], this) : "range" === this.elt.type ? parseFloat(this.elt.value) : this.elt.value
	}, t.Element.prototype.show = function() {
		return this.elt.style.display = "block", this
	}, t.Element.prototype.hide = function() {
		return this.elt.style.display = "none", this
	}, t.Element.prototype.size = function(e, i) {
		if (0 === arguments.length) return {
			width: this.elt.offsetWidth,
			height: this.elt.offsetHeight
		};
		var n = e,
			o = i,
			s = t.prototype.AUTO;
		if (n !== s || o !== s) {
			if (n === s ? n = i * this.width / this.height : o === s && (o = e * this.height / this.width), this.elt instanceof HTMLCanvasElement) {
				var r = {},
					l = this.elt.getContext("2d");
				for (var a in l) r[a] = l[a];
				this.elt.setAttribute("width", n * this._pInst._pixelDensity), this.elt.setAttribute("height", o * this._pInst._pixelDensity), this.elt.setAttribute("style", "width:" + n + "px; height:" + o + "px"), this._pInst.scale(this._pInst._pixelDensity, this._pInst._pixelDensity);
				for (var a in r) this.elt.getContext("2d")[a] = r[a]
			} else this.elt.style.width = n + "px", this.elt.style.height = o + "px", this.elt.width = n, this.elt.height = o, this.width = n, this.height = o;
			this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this._pInst && this._pInst._curElement.elt === this.elt && (this._pInst._setProperty("width", this.elt.offsetWidth), this._pInst._setProperty("height", this.elt.offsetHeight))
		}
		return this
	}, t.Element.prototype.remove = function() {
		for (var t in this._events) this.elt.removeEventListener(t, this._events[t]);
		this.elt.parentNode && this.elt.parentNode.removeChild(this.elt), delete this
	}, t.MediaElement = function(e, i) {
		t.Element.call(this, e, i);
		var n = this;
		this.elt.crossOrigin = "anonymous", this._prevTime = 0, this._cueIDCounter = 0, this._cues = [], this._pixelDensity = 1, Object.defineProperty(n, "src", {
			get: function() {
				var t = n.elt.children[0].src,
					e = n.elt.src === window.location.href ? "" : n.elt.src,
					i = t === window.location.href ? e : t;
				return i
			},
			set: function(t) {
				for (var i = 0; i < n.elt.children.length; i++) n.elt.removeChild(n.elt.children[i]);
				var o = document.createElement("source");
				o.src = t, e.appendChild(o), n.elt.src = t
			}
		}), n._onended = function() {}, n.elt.onended = function() {
			n._onended(n)
		}
	}, t.MediaElement.prototype = Object.create(t.Element.prototype), t.MediaElement.prototype.play = function() {
		return this.elt.currentTime === this.elt.duration && (this.elt.currentTime = 0), this.elt.readyState > 1 ? this.elt.play() : (this.elt.load(), this.elt.play()), this
	}, t.MediaElement.prototype.stop = function() {
		return this.elt.pause(), this.elt.currentTime = 0, this
	}, t.MediaElement.prototype.pause = function() {
		return this.elt.pause(), this
	}, t.MediaElement.prototype.loop = function() {
		return this.elt.setAttribute("loop", !0), this.play(), this
	}, t.MediaElement.prototype.noLoop = function() {
		return this.elt.setAttribute("loop", !1), this
	}, t.MediaElement.prototype.autoplay = function(t) {
		return this.elt.setAttribute("autoplay", t), this
	}, t.MediaElement.prototype.volume = function(t) {
		return "undefined" == typeof t ? this.elt.volume : void(this.elt.volume = t)
	}, t.MediaElement.prototype.speed = function(t) {
		return "undefined" == typeof t ? this.elt.playbackRate : void(this.elt.playbackRate = t)
	}, t.MediaElement.prototype.time = function(t) {
		return "undefined" == typeof t ? this.elt.currentTime : void(this.elt.currentTime = t)
	}, t.MediaElement.prototype.duration = function() {
		return this.elt.duration
	}, t.MediaElement.prototype.pixels = [], t.MediaElement.prototype.loadPixels = function() {
		return this.canvas || (this.canvas = document.createElement("canvas"), this.drawingContext = this.canvas.getContext("2d")), this.loadedmetadata && (this.canvas.width !== this.elt.width && (this.canvas.width = this.elt.width, this.canvas.height = this.elt.height, this.width = this.canvas.width, this.height = this.canvas.height), this.drawingContext.drawImage(this.elt, 0, 0, this.canvas.width, this.canvas.height), t.Renderer2D.prototype.loadPixels.call(this)), this
	}, t.MediaElement.prototype.updatePixels = function(e, i, n, o) {
		return this.loadedmetadata && t.Renderer2D.prototype.updatePixels.call(this, e, i, n, o), this
	}, t.MediaElement.prototype.get = function(e, i, n, o) {
		return this.loadedmetadata ? t.Renderer2D.prototype.get.call(this, e, i, n, o) : e ? [0, 0, 0, 255] : new t.Image(1, 1)
	}, t.MediaElement.prototype.set = function(e, i, n) {
		this.loadedmetadata && t.Renderer2D.prototype.set.call(this, e, i, n)
	}, t.MediaElement.prototype.copy = function() {
		t.Renderer2D.prototype.copy.apply(this, arguments)
	}, t.MediaElement.prototype.mask = function() {
		this.loadPixels(), t.Image.prototype.mask.apply(this, arguments)
	}, t.MediaElement.prototype.onended = function(t) {
		return this._onended = t, this
	}, t.MediaElement.prototype.connect = function(e) {
		var i, n;
		if ("function" == typeof t.prototype.getAudioContext) i = t.prototype.getAudioContext(), n = t.soundOut.input;
		else try {
			i = e.context, n = i.destination
		} catch (t) {
			throw "connect() is meant to be used with Web Audio API or p5.sound.js"
		}
		this.audioSourceNode || (this.audioSourceNode = i.createMediaElementSource(this.elt), this.audioSourceNode.connect(n)), e ? e.input ? this.audioSourceNode.connect(e.input) : this.audioSourceNode.connect(e) : this.audioSourceNode.connect(n)
	}, t.MediaElement.prototype.disconnect = function() {
		if (!this.audioSourceNode) throw "nothing to disconnect";
		this.audioSourceNode.disconnect()
	}, t.MediaElement.prototype.showControls = function() {
		this.elt.style["text-align"] = "inherit", this.elt.controls = !0
	}, t.MediaElement.prototype.hideControls = function() {
		this.elt.controls = !1
	}, t.MediaElement.prototype.addCue = function(t, e, i) {
		var n = this._cueIDCounter++,
			o = new r(e, t, n, i);
		return this._cues.push(o), this.elt.ontimeupdate || (this.elt.ontimeupdate = this._onTimeUpdate.bind(this)), n
	}, t.MediaElement.prototype.removeCue = function(t) {
		for (var e = 0; e < this._cues.length; e++) {
			var i = this._cues[e];
			i.id === t && this.cues.splice(e, 1)
		}
		0 === this._cues.length && (this.elt.ontimeupdate = null)
	}, t.MediaElement.prototype.clearCues = function() {
		this._cues = [], this.elt.ontimeupdate = null
	}, t.MediaElement.prototype._onTimeUpdate = function() {
		for (var t = this.time(), e = 0; e < this._cues.length; e++) {
			var i = this._cues[e].time,
				n = this._cues[e].val;
			this._prevTime < i && i <= t && this._cues[e].callback(n)
		}
		this._prevTime = t
	};
	var r = function(t, e, i, n) {
		this.callback = t, this.time = e, this.id = i, this.val = n
	};
	t.File = function(t, e) {
		this.file = t, this._pInst = e;
		var i = t.type.split("/");
		this.type = i[0], this.subtype = i[1], this.name = t.name, this.size = t.size, this.data = void 0
	}
});