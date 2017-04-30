! function(t, e) {
	"function" == typeof define && define.amd ? define("p5.sound", ["p5"], function(t) {
		e(t)
	}) : e("object" == typeof exports ? require("../p5") : t.p5)
}(this, function(p5) {
	var sndcore;
	sndcore = function() {
		"use strict";
		! function(t, e, i) {
			function o(t) {
				t && (t.setTargetAtTime || (t.setTargetAtTime = t.setTargetValueAtTime))
			}
			return e = e || {}, window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext") && (window.AudioContext = webkitAudioContext, AudioContext.prototype.hasOwnProperty("createGain") || (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), AudioContext.prototype.hasOwnProperty("createDelay") || (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode), AudioContext.prototype.hasOwnProperty("createScriptProcessor") || (AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode), AudioContext.prototype.hasOwnProperty("createPeriodicWave") || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable), AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain, AudioContext.prototype.createGain = function() {
				var t = this.internal_createGain();
				return o(t.gain), t
			}, AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay, AudioContext.prototype.createDelay = function(t) {
				var e = t ? this.internal_createDelay(t) : this.internal_createDelay();
				return o(e.delayTime), e
			}, AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource, AudioContext.prototype.createBufferSource = function() {
				var t = this.internal_createBufferSource();
				return t.start ? (t.internal_start = t.start, t.start = function(e, i, o) {
					"undefined" != typeof o ? t.internal_start(e || 0, i, o) : t.internal_start(e || 0, i || 0)
				}) : t.start = function(t, e, i) {
					e || i ? this.noteGrainOn(t || 0, e, i) : this.noteOn(t || 0)
				}, t.stop ? (t.internal_stop = t.stop, t.stop = function(e) {
					t.internal_stop(e || 0)
				}) : t.stop = function(t) {
					this.noteOff(t || 0)
				}, o(t.playbackRate), t
			}, AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor, AudioContext.prototype.createDynamicsCompressor = function() {
				var t = this.internal_createDynamicsCompressor();
				return o(t.threshold), o(t.knee), o(t.ratio), o(t.reduction), o(t.attack), o(t.release), t
			}, AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter, AudioContext.prototype.createBiquadFilter = function() {
				var t = this.internal_createBiquadFilter();
				return o(t.frequency), o(t.detune), o(t.Q), o(t.gain), t
			}, AudioContext.prototype.hasOwnProperty("createOscillator") && (AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator, AudioContext.prototype.createOscillator = function() {
				var t = this.internal_createOscillator();
				return t.start ? (t.internal_start = t.start, t.start = function(e) {
					t.internal_start(e || 0)
				}) : t.start = function(t) {
					this.noteOn(t || 0)
				}, t.stop ? (t.internal_stop = t.stop, t.stop = function(e) {
					t.internal_stop(e || 0)
				}) : t.stop = function(t) {
					this.noteOff(t || 0)
				}, t.setPeriodicWave || (t.setPeriodicWave = t.setWaveTable), o(t.frequency), o(t.detune), t
			})), window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext") && (window.OfflineAudioContext = webkitOfflineAudioContext), e
		}(window);
		var t = new window.AudioContext;
		p5.prototype.getAudioContext = function() {
			return t
		}, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		var e = document.createElement("audio");
		p5.prototype.isSupported = function() {
			return !!e.canPlayType
		};
		var i = function() {
				return !!e.canPlayType && e.canPlayType('audio/ogg; codecs="vorbis"')
			},
			o = function() {
				return !!e.canPlayType && e.canPlayType("audio/mpeg;")
			},
			n = function() {
				return !!e.canPlayType && e.canPlayType('audio/wav; codecs="1"')
			},
			r = function() {
				return !!e.canPlayType && (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;"))
			},
			s = function() {
				return !!e.canPlayType && e.canPlayType("audio/x-aiff;")
			};
		p5.prototype.isFileSupported = function(t) {
			switch (t.toLowerCase()) {
				case "mp3":
					return o();
				case "wav":
					return n();
				case "ogg":
					return i();
				case "mp4":
					return r();
				case "aiff":
					return s();
				default:
					return !1
			}
		};
		var a = !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
		if (a) {
			var u = !1,
				c = function() {
					if (!u) {
						var e = t.createBuffer(1, 1, 22050),
							i = t.createBufferSource();
						i.buffer = e, i.connect(t.destination), i.start(0), console.log("start ios!"), "running" === t.state && (u = !0)
					}
				};
			document.addEventListener("touchend", c, !1), document.addEventListener("touchstart", c, !1)
		}
	}();
	var master;
	master = function() {
		"use strict";
		var t = function() {
				var t = p5.prototype.getAudioContext();
				this.input = t.createGain(), this.output = t.createGain(), this.limiter = t.createDynamicsCompressor(), this.limiter.threshold.value = 0, this.limiter.ratio.value = 20, this.audiocontext = t, this.output.disconnect(), this.inputSources = [], this.input.connect(this.limiter), this.limiter.connect(this.output), this.meter = t.createGain(), this.fftMeter = t.createGain(), this.output.connect(this.meter), this.output.connect(this.fftMeter), this.output.connect(this.audiocontext.destination), this.soundArray = [], this.parts = [], this.extensions = []
			},
			e = new t;
		return p5.prototype.getMasterVolume = function() {
			return e.output.gain.value
		}, p5.prototype.masterVolume = function(t, i, o) {
			if ("number" == typeof t) {
				var i = i || 0,
					o = o || 0,
					n = e.audiocontext.currentTime,
					r = e.output.gain.value;
				e.output.gain.cancelScheduledValues(n + o), e.output.gain.linearRampToValueAtTime(r, n + o), e.output.gain.linearRampToValueAtTime(t, n + o + i)
			} else {
				if (!t) return e.output.gain;
				t.connect(e.output.gain)
			}
		}, p5.prototype.soundOut = p5.soundOut = e, p5.soundOut._silentNode = e.audiocontext.createGain(), p5.soundOut._silentNode.gain.value = 0, p5.soundOut._silentNode.connect(e.audiocontext.destination), e
	}(sndcore);
	var helpers;
	helpers = function() {
		"use strict";
		var t = master;
		p5.prototype.sampleRate = function() {
			return t.audiocontext.sampleRate
		}, p5.prototype.freqToMidi = function(t) {
			var e = Math.log(t / 440) / Math.log(2),
				i = Math.round(12 * e) + 57;
			return i
		}, p5.prototype.midiToFreq = function(t) {
			return 440 * Math.pow(2, (t - 69) / 12)
		}, p5.prototype.soundFormats = function() {
			t.extensions = [];
			for (var e = 0; e < arguments.length; e++) {
				if (arguments[e] = arguments[e].toLowerCase(), !(["mp3", "wav", "ogg", "m4a", "aac"].indexOf(arguments[e]) > -1)) throw arguments[e] + " is not a valid sound format!";
				t.extensions.push(arguments[e])
			}
		}, p5.prototype.disposeSound = function() {
			for (var e = 0; e < t.soundArray.length; e++) t.soundArray[e].dispose()
		}, p5.prototype.registerMethod("remove", p5.prototype.disposeSound), p5.prototype._checkFileFormats = function(e) {
			var i;
			if ("string" == typeof e) {
				i = e;
				var o = i.split(".").pop();
				if (["mp3", "wav", "ogg", "m4a", "aac"].indexOf(o) > -1) {
					var n = p5.prototype.isFileSupported(o);
					if (n) i = i;
					else
						for (var r = i.split("."), s = r[r.length - 1], a = 0; a < t.extensions.length; a++) {
							var u = t.extensions[a],
								n = p5.prototype.isFileSupported(u);
							if (n) {
								s = "", 2 === r.length && (s += r[0]);
								for (var a = 1; a <= r.length - 2; a++) {
									var c = r[a];
									s += "." + c
								}
								i = s += ".", i = i += u;
								break
							}
						}
				} else
					for (var a = 0; a < t.extensions.length; a++) {
						var u = t.extensions[a],
							n = p5.prototype.isFileSupported(u);
						if (n) {
							i = i + "." + u;
							break
						}
					}
			} else if ("object" == typeof e)
				for (var a = 0; a < e.length; a++) {
					var u = e[a].split(".").pop(),
						n = p5.prototype.isFileSupported(u);
					if (n) {
						i = e[a];
						break
					}
				}
			return i
		}, p5.prototype._mathChain = function(t, e, i, o, n) {
			for (var r in t.mathOps) t.mathOps[r] instanceof n && (t.mathOps[r].dispose(), i = r, i < t.mathOps.length - 1 && (o = t.mathOps[r + 1]));
			return t.mathOps[i - 1].disconnect(), t.mathOps[i - 1].connect(e), e.connect(o), t.mathOps[i] = e, t
		}
	}(master);
	var errorHandler;
	errorHandler = function() {
		"use strict";
		var t = function(t, e, i) {
			var o, n, r = new Error;
			r.name = t, r.originalStack = r.stack + e, o = r.stack + e, r.failedPath = i;
			var n = o.split("\n");
			return n = n.filter(function(t) {
				return !t.match(/(p5.|native code|globalInit)/g)
			}), r.stack = n.join("\n"), r
		};
		return t
	}();
	var panner;
	panner = function() {
		"use strict";
		var t = master,
			e = t.audiocontext;
		"undefined" != typeof e.createStereoPanner ? (p5.Panner = function(t, i, o) {
			this.stereoPanner = this.input = e.createStereoPanner(), t.connect(this.stereoPanner), this.stereoPanner.connect(i)
		}, p5.Panner.prototype.pan = function(t, i) {
			var o = i || 0,
				n = e.currentTime + o;
			this.stereoPanner.pan.linearRampToValueAtTime(t, n)
		}, p5.Panner.prototype.inputChannels = function(t) {}, p5.Panner.prototype.connect = function(t) {
			this.stereoPanner.connect(t)
		}, p5.Panner.prototype.disconnect = function(t) {
			this.stereoPanner.disconnect()
		}) : (p5.Panner = function(t, i, o) {
			this.input = e.createGain(), t.connect(this.input), this.left = e.createGain(), this.right = e.createGain(), this.left.channelInterpretation = "discrete", this.right.channelInterpretation = "discrete", o > 1 ? (this.splitter = e.createChannelSplitter(2), this.input.connect(this.splitter), this.splitter.connect(this.left, 1), this.splitter.connect(this.right, 0)) : (this.input.connect(this.left), this.input.connect(this.right)), this.output = e.createChannelMerger(2), this.left.connect(this.output, 0, 1), this.right.connect(this.output, 0, 0), this.output.connect(i)
		}, p5.Panner.prototype.pan = function(t, i) {
			var o = i || 0,
				n = e.currentTime + o,
				r = (t + 1) / 2,
				s = Math.cos(r * Math.PI / 2),
				a = Math.sin(r * Math.PI / 2);
			this.left.gain.linearRampToValueAtTime(a, n), this.right.gain.linearRampToValueAtTime(s, n)
		}, p5.Panner.prototype.inputChannels = function(t) {
			1 === t ? (this.input.disconnect(), this.input.connect(this.left), this.input.connect(this.right)) : 2 === t && (this.splitter = e.createChannelSplitter(2), this.input.disconnect(), this.input.connect(this.splitter), this.splitter.connect(this.left, 1), this.splitter.connect(this.right, 0))
		}, p5.Panner.prototype.connect = function(t) {
			this.output.connect(t)
		}, p5.Panner.prototype.disconnect = function(t) {
			this.output.disconnect()
		}), p5.Panner3D = function(t, i) {
			var o = e.createPanner();
			return o.panningModel = "HRTF", o.distanceModel = "linear", o.setPosition(0, 0, 0), t.connect(o), o.connect(i), o.pan = function(t, e, i) {
				o.setPosition(t, e, i)
			}, o
		}
	}(master);
	var soundfile;
	soundfile = function() {
		"use strict";

		function t(t, e) {
			for (var i = {}, o = t.length, n = 0; n < o; n++) {
				if (t[n] > e) {
					var r = t[n],
						s = new c(r, n);
					i[n] = s, n += 6e3
				}
				n++
			}
			return i
		}

		function e(t) {
			for (var e = [], i = Object.keys(t).sort(), o = 0; o < i.length; o++)
				for (var n = 0; n < 10; n++) {
					var r = t[i[o]],
						s = t[i[o + n]];
					if (r && s) {
						var a = r.sampleIndex,
							u = s.sampleIndex,
							c = u - a;
						c > 0 && r.intervals.push(c);
						var p = e.some(function(t, e) {
							if (t.interval === c) return t.count++, t
						});
						p || e.push({
							interval: c,
							count: 1
						})
					}
				}
			return e
		}

		function i(t, e) {
			var i = [];
			return t.forEach(function(t, o) {
				try {
					var r = Math.abs(60 / (t.interval / e));
					r = n(r);
					var s = i.some(function(e) {
						if (e.tempo === r) return e.count += t.count
					});
					if (!s) {
						if (isNaN(r)) return;
						i.push({
							tempo: Math.round(r),
							count: t.count
						})
					}
				} catch (t) {
					throw t
				}
			}), i
		}

		function o(t, e, i, o) {
			for (var r = [], s = Object.keys(t).sort(), a = 0; a < s.length; a++)
				for (var u = s[a], c = t[u], p = 0; p < c.intervals.length; p++) {
					var h = Math.round(Math.abs(60 / (c.intervals[p] / i)));
					h = n(h);
					Math.abs(h - e) < o && r.push(c.sampleIndex / 44100)
				}
			return r = r.filter(function(t, e, i) {
				var o = i[e + 1] - t;
				if (o > .01) return !0
			})
		}

		function n(t) {
			if (isFinite(t) && 0 != t) {
				for (; t < 90;) t *= 2;
				for (; t > 180 && t > 90;) t /= 2;
				return t
			}
		}
		var r = errorHandler,
			s = master,
			a = s.audiocontext;
		p5.SoundFile = function(t, e, i, o) {
			if ("undefined" != typeof t) {
				if ("string" == typeof t || "string" == typeof t[0]) {
					var n = p5.prototype._checkFileFormats(t);
					this.url = n
				} else if ("object" == typeof t && !(window.File && window.FileReader && window.FileList && window.Blob)) throw "Unable to load file because the File API is not supported";
				t.file && (t = t.file), this.file = t
			}
			this._onended = function() {}, this._looping = !1, this._playing = !1, this._paused = !1, this._pauseTime = 0, this._cues = [], this._lastPos = 0, this._counterNode, this._scopeNode, this.bufferSourceNodes = [], this.bufferSourceNode = null, this.buffer = null, this.playbackRate = 1, this.gain = 1, this.input = s.audiocontext.createGain(), this.output = s.audiocontext.createGain(), this.reversed = !1, this.startTime = 0, this.endTime = null, this.pauseTime = 0, this.mode = "sustain", this.startMillis = null, this.panPosition = 0, this.panner = new p5.Panner(this.output, s.input, 2), (this.url || this.file) && this.load(e, i), s.soundArray.push(this), "function" == typeof o ? this._whileLoading = o : this._whileLoading = function() {}
		}, p5.prototype.registerPreloadMethod("loadSound", p5.prototype), p5.prototype.loadSound = function(t, e, i, o) {
			window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova && alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS");
			var n = new p5.SoundFile(t, e, i, o);
			return n
		}, p5.SoundFile.prototype.load = function(t, e) {
			var i = this,
				o = (new Error).stack;
			if (void 0 != this.url && "" != this.url) {
				var n = new XMLHttpRequest;
				n.addEventListener("progress", function(t) {
					i._updateProgress(t)
				}, !1), n.open("GET", this.url, !0), n.responseType = "arraybuffer", n.onload = function() {
					if (200 == n.status) a.decodeAudioData(n.response, function(e) {
						i.buffer = e, i.panner.inputChannels(e.numberOfChannels), t && t(i)
					}, function(t) {
						var n = new r("decodeAudioData", o, i.url),
							s = "AudioContext error at decodeAudioData for " + i.url;
						e ? (n.msg = s, e(n)) : console.error(s + "\n The error stack trace includes: \n" + n.stack)
					});
					else {
						var s = new r("loadSound", o, i.url),
							u = "Unable to load " + i.url + ". The request status was: " + n.status + " (" + n.statusText + ")";
						e ? (s.message = u, e(s)) : console.error(u + "\n The error stack trace includes: \n" + s.stack)
					}
				}, n.onerror = function(t) {
					var n = new r("loadSound", o, i.url),
						s = "There was no response from the server at " + i.url + ". Check the url and internet connectivity.";
					e ? (n.message = s, e(n)) : console.error(s + "\n The error stack trace includes: \n" + n.stack)
				}, n.send()
			} else if (void 0 != this.file) {
				var s = new FileReader,
					i = this;
				s.onload = function() {
					a.decodeAudioData(s.result, function(e) {
						i.buffer = e, i.panner.inputChannels(e.numberOfChannels), t && t(i)
					})
				}, s.onerror = function(t) {
					onerror && onerror(t)
				}, s.readAsArrayBuffer(this.file)
			}
		}, p5.SoundFile.prototype._updateProgress = function(t) {
			if (t.lengthComputable) {
				var e = t.loaded / t.total * .99;
				this._whileLoading(e, t)
			} else this._whileLoading("size unknown")
		}, p5.SoundFile.prototype.isLoaded = function() {
			return !!this.buffer
		}, p5.SoundFile.prototype.play = function(t, e, i, o, n) {
			var r, a, u = this,
				c = s.audiocontext.currentTime,
				t = t || 0;
			if (t < 0 && (t = 0), t += c, !this.buffer) throw "not ready to play file, buffer has yet to load. Try preload()";
			if (this._pauseTime = 0, "restart" === this.mode && this.buffer && this.bufferSourceNode) {
				var c = s.audiocontext.currentTime;
				this.bufferSourceNode.stop(t), this._counterNode.stop(t)
			}
			if (e && (this.playbackRate = e), this.bufferSourceNode = this._initSourceNode(), this._counterNode && (this._counterNode = void 0), this._counterNode = this._initCounterNode(), o) {
				if (!(o >= 0 && o < this.buffer.duration)) throw "start time out of range";
				r = o
			} else r = 0;
			n = n ? n <= this.buffer.duration - r ? n : this.buffer.duration : this.buffer.duration - r;
			var p = i || 1;
			this.bufferSourceNode.connect(this.output), this.output.gain.value = p, this._paused ? (this.bufferSourceNode.start(t, this.pauseTime, n), this._counterNode.start(t, this.pauseTime, n)) : (this.bufferSourceNode.start(t, r, n), this._counterNode.start(t, r, n)), this._playing = !0, this._paused = !1, this.bufferSourceNodes.push(this.bufferSourceNode), this.bufferSourceNode._arrayIndex = this.bufferSourceNodes.length - 1;
			var h = function(t) {
				this._playing = !1, this.removeEventListener("ended", h, !1), u._onended(u), u.bufferSourceNodes.forEach(function(t, e) {
					t._playing === !1 && u.bufferSourceNodes.splice(e)
				}), 0 === u.bufferSourceNodes.length && (u._playing = !1)
			};
			if (this.bufferSourceNode.onended = h, this.bufferSourceNode.loop = this._looping, this._counterNode.loop = this._looping, this._looping === !0) {
				var a = r + n;
				this.bufferSourceNode.loopStart = r, this.bufferSourceNode.loopEnd = a, this._counterNode.loopStart = r, this._counterNode.loopEnd = a
			}
		}, p5.SoundFile.prototype.playMode = function(t) {
			var e = t.toLowerCase();
			if ("restart" === e && this.buffer && this.bufferSourceNode)
				for (var i = 0; i < this.bufferSourceNodes.length - 1; i++) {
					var o = s.audiocontext.currentTime;
					this.bufferSourceNodes[i].stop(o)
				}
			if ("restart" !== e && "sustain" !== e) throw 'Invalid play mode. Must be either "restart" or "sustain"';
			this.mode = e
		}, p5.SoundFile.prototype.pause = function(t) {
			var e = s.audiocontext.currentTime,
				t = t || 0,
				i = t + e;
			this.isPlaying() && this.buffer && this.bufferSourceNode ? (this.pauseTime = this.currentTime(), this.bufferSourceNode.stop(i), this._counterNode.stop(i), this._paused = !0, this._playing = !1, this._pauseTime = this.currentTime()) : this._pauseTime = 0
		}, p5.SoundFile.prototype.loop = function(t, e, i, o, n) {
			this._looping = !0, this.play(t, e, i, o, n)
		}, p5.SoundFile.prototype.setLoop = function(t) {
			if (t === !0) this._looping = !0;
			else {
				if (t !== !1) throw "Error: setLoop accepts either true or false";
				this._looping = !1
			}
			this.bufferSourceNode && (this.bufferSourceNode.loop = this._looping, this._counterNode.loop = this._looping)
		}, p5.SoundFile.prototype.isLooping = function() {
			return !!this.bufferSourceNode && (this._looping === !0 && this.isPlaying() === !0)
		}, p5.SoundFile.prototype.isPlaying = function() {
			return this._playing
		}, p5.SoundFile.prototype.isPaused = function() {
			return this._paused
		}, p5.SoundFile.prototype.stop = function(t) {
			var e = t || 0;
			if ("sustain" == this.mode) this.stopAll(e), this._playing = !1, this.pauseTime = 0, this._paused = !1;
			else if (this.buffer && this.bufferSourceNode) {
				var i = s.audiocontext.currentTime,
					o = e || 0;
				this.pauseTime = 0, this.bufferSourceNode.stop(i + o), this._counterNode.stop(i + o), this._playing = !1, this._paused = !1
			}
		}, p5.SoundFile.prototype.stopAll = function(t) {
			var e = s.audiocontext.currentTime,
				i = t || 0;
			if (this.buffer && this.bufferSourceNode) {
				for (var o = 0; o < this.bufferSourceNodes.length; o++)
					if (void 0 != typeof this.bufferSourceNodes[o]) try {
						this.bufferSourceNodes[o].onended = function() {}, this.bufferSourceNodes[o].stop(e + i)
					} catch (t) {}
				this._counterNode.stop(e + i), this._onended(this)
			}
		}, p5.SoundFile.prototype.setVolume = function(t, e, i) {
			if ("number" == typeof t) {
				var e = e || 0,
					i = i || 0,
					o = s.audiocontext.currentTime,
					n = this.output.gain.value;
				this.output.gain.cancelScheduledValues(o + i), this.output.gain.linearRampToValueAtTime(n, o + i), this.output.gain.linearRampToValueAtTime(t, o + i + e)
			} else {
				if (!t) return this.output.gain;
				t.connect(this.output.gain)
			}
		}, p5.SoundFile.prototype.amp = p5.SoundFile.prototype.setVolume, p5.SoundFile.prototype.fade = p5.SoundFile.prototype.setVolume, p5.SoundFile.prototype.getVolume = function() {
			return this.output.gain.value
		}, p5.SoundFile.prototype.pan = function(t, e) {
			this.panPosition = t, this.panner.pan(t, e)
		}, p5.SoundFile.prototype.getPan = function() {
			return this.panPosition
		}, p5.SoundFile.prototype.rate = function(t) {
			if (this.playbackRate !== t || !this.bufferSourceNode || this.bufferSourceNode.playbackRate.value !== t) {
				this.playbackRate = t;
				var e = t;
				if (0 === this.playbackRate && this._playing && this.pause(), this.playbackRate < 0 && !this.reversed) {
					var i = this.currentTime();
					this.bufferSourceNode.playbackRate.value;
					this.reverseBuffer(), e = Math.abs(t);
					var o = (i - this.duration()) / e;
					this.pauseTime = o
				} else this.playbackRate > 0 && this.reversed && this.reverseBuffer();
				if (this.bufferSourceNode) {
					var n = s.audiocontext.currentTime;
					this.bufferSourceNode.playbackRate.cancelScheduledValues(n), this.bufferSourceNode.playbackRate.linearRampToValueAtTime(Math.abs(e), n), this._counterNode.playbackRate.cancelScheduledValues(n), this._counterNode.playbackRate.linearRampToValueAtTime(Math.abs(e), n)
				}
			}
		}, p5.SoundFile.prototype.setPitch = function(t) {
			var e = midiToFreq(t) / midiToFreq(60);
			this.rate(e)
		}, p5.SoundFile.prototype.getPlaybackRate = function() {
			return this.playbackRate
		}, p5.SoundFile.prototype.duration = function() {
			return this.buffer ? this.buffer.duration : 0
		}, p5.SoundFile.prototype.currentTime = function() {
			return this._pauseTime > 0 ? this._pauseTime : this._lastPos / a.sampleRate
		}, p5.SoundFile.prototype.jump = function(t, e) {
			if (t < 0 || t > this.buffer.duration) throw "jump time out of range";
			if (e > this.buffer.duration - t) throw "end time out of range";
			var i = t || 0,
				o = e || this.buffer.duration - t;
			this.isPlaying() && this.stop(), this.play(0, this.playbackRate, this.output.gain.value, i, o)
		}, p5.SoundFile.prototype.channels = function() {
			return this.buffer.numberOfChannels
		}, p5.SoundFile.prototype.sampleRate = function() {
			return this.buffer.sampleRate
		}, p5.SoundFile.prototype.frames = function() {
			return this.buffer.length
		}, p5.SoundFile.prototype.getPeaks = function(t) {
			if (!this.buffer) throw "Cannot load peaks yet, buffer is not loaded";
			if (t || (t = 5 * window.width), this.buffer) {
				for (var e = this.buffer, i = e.length / t, o = ~~(i / 10) || 1, n = e.numberOfChannels, r = new Float32Array(Math.round(t)), s = 0; s < n; s++)
					for (var a = e.getChannelData(s), u = 0; u < t; u++) {
						for (var c = ~~(u * i), p = ~~(c + i), h = 0, l = c; l < p; l += o) {
							var d = a[l];
							d > h ? h = d : -d > h && (h = d)
						}(0 === s || Math.abs(h) > r[u]) && (r[u] = h)
					}
				return r
			}
		}, p5.SoundFile.prototype.reverseBuffer = function() {
			var t = this.getVolume();
			if (this.setVolume(0, .01, 0), this.pause(), !this.buffer) throw "SoundFile is not done loading";
			for (var e = 0; e < this.buffer.numberOfChannels; e++) Array.prototype.reverse.call(this.buffer.getChannelData(e));
			this.reversed = !this.reversed, this.setVolume(t, .01, .0101), this.play()
		}, p5.SoundFile.prototype.onended = function(t) {
			return this._onended = t, this
		}, p5.SoundFile.prototype.add = function() {}, p5.SoundFile.prototype.dispose = function() {
			var t = s.audiocontext.currentTime,
				e = s.soundArray.indexOf(this);
			if (s.soundArray.splice(e, 1), this.stop(t), this.buffer && this.bufferSourceNode) {
				for (var i = 0; i < this.bufferSourceNodes.length - 1; i++)
					if (null !== this.bufferSourceNodes[i]) {
						this.bufferSourceNodes[i].disconnect();
						try {
							this.bufferSourceNodes[i].stop(t)
						} catch (t) {}
						this.bufferSourceNodes[i] = null
					}
				if (this.isPlaying()) {
					try {
						this._counterNode.stop(t)
					} catch (t) {
						console.log(t)
					}
					this._counterNode = null
				}
			}
			this.output && (this.output.disconnect(), this.output = null), this.panner && (this.panner.disconnect(), this.panner = null)
		}, p5.SoundFile.prototype.connect = function(t) {
			t ? t.hasOwnProperty("input") ? this.panner.connect(t.input) : this.panner.connect(t) : this.panner.connect(s.input)
		}, p5.SoundFile.prototype.disconnect = function() {
			this.panner.disconnect()
		}, p5.SoundFile.prototype.getLevel = function(t) {
			console.warn("p5.SoundFile.getLevel has been removed from the library. Use p5.Amplitude instead")
		}, p5.SoundFile.prototype.setPath = function(t, e) {
			var i = p5.prototype._checkFileFormats(t);
			this.url = i, this.load(e)
		}, p5.SoundFile.prototype.setBuffer = function(t) {
			var e = t.length,
				i = t[0].length,
				o = a.createBuffer(e, i, a.sampleRate);
			!t[0] instanceof Float32Array && (t[0] = new Float32Array(t[0]));
			for (var n = 0; n < e; n++) {
				var r = o.getChannelData(n);
				r.set(t[n])
			}
			this.buffer = o, this.panner.inputChannels(e)
		}, p5.SoundFile.prototype._initCounterNode = function() {
			var t = this,
				e = a.currentTime,
				i = a.createBufferSource();
			return t._scopeNode && (t._scopeNode.disconnect(), t._scopeNode.onaudioprocess = void 0, t._scopeNode = null), t._scopeNode = a.createScriptProcessor(256, 1, 1), i.buffer = u(t.buffer), i.playbackRate.setValueAtTime(t.playbackRate, e), i.connect(t._scopeNode), t._scopeNode.connect(p5.soundOut._silentNode), t._scopeNode.onaudioprocess = function(e) {
				var i = e.inputBuffer.getChannelData(0);
				t._lastPos = i[i.length - 1] || 0, t._onTimeUpdate(t._lastPos)
			}, i
		}, p5.SoundFile.prototype._initSourceNode = function() {
			var t = this,
				e = (a.currentTime, a.createBufferSource());
			return e.buffer = t.buffer, e.playbackRate.value = t.playbackRate, e
		};
		var u = function(t) {
			for (var e = new Float32Array(t.length), i = a.createBuffer(1, t.length, 44100), o = 0; o < t.length; o++) e[o] = o;
			return i.getChannelData(0).set(e), i
		};
		p5.SoundFile.prototype.processPeaks = function(n, r, s, a) {
			var u = this.buffer.length,
				c = this.buffer.sampleRate,
				h = this.buffer,
				l = r || .9,
				d = l,
				f = s || .22,
				m = a || 200,
				y = new OfflineAudioContext(1, u, c),
				v = y.createBufferSource();
			v.buffer = h;
			var g = y.createBiquadFilter();
			g.type = "lowpass", v.connect(g), g.connect(y.destination), v.start(0), y.startRendering(), y.oncomplete = function(r) {
				var s = r.renderedBuffer,
					a = s.getChannelData(0);
				do p = t(a, d), d -= .005; while (Object.keys(p).length < m && d >= f);
				var u = e(p),
					c = i(u, s.sampleRate),
					h = c.sort(function(t, e) {
						return e.count - t.count
					}).splice(0, 5);
				this.tempo = h[0].tempo;
				var l = 5,
					y = o(p, h[0].tempo, s.sampleRate, l);
				n(y)
			}
		};
		var c = function(t, e) {
				this.sampleIndex = e, this.amplitude = t, this.tempos = [], this.intervals = []
			},
			p = [];
		p5.SoundFile.prototype.addCue = function(t, e, i) {
			var o = this._cueIDCounter++,
				n = new h(e, t, o, i);
			return this._cues.push(n), o
		}, p5.SoundFile.prototype.removeCue = function(t) {
			for (var e = this._cues.length, i = 0; i < e; i++) {
				var o = this._cues[i];
				o.id === t && this.cues.splice(i, 1)
			}
			0 === this._cues.length
		}, p5.SoundFile.prototype.clearCues = function() {
			this._cues = []
		}, p5.SoundFile.prototype._onTimeUpdate = function(t) {
			for (var e = t / this.buffer.sampleRate, i = this._cues.length, o = 0; o < i; o++) {
				var n = this._cues[o],
					r = n.time,
					s = n.val;
				this._prevTime < r && r <= e && n.callback(s)
			}
			this._prevTime = e
		};
		var h = function(t, e, i, o) {
			this.callback = t, this.time = e, this.id = i, this.val = o
		}
	}(sndcore, errorHandler, master);
	var amplitude;
	amplitude = function() {
		"use strict";
		var t = master;
		p5.Amplitude = function(e) {
			this.bufferSize = 2048, this.audiocontext = t.audiocontext, this.processor = this.audiocontext.createScriptProcessor(this.bufferSize, 2, 1), this.input = this.processor, this.output = this.audiocontext.createGain(), this.smoothing = e || 0, this.volume = 0, this.average = 0, this.stereoVol = [0, 0], this.stereoAvg = [0, 0], this.stereoVolNorm = [0, 0], this.volMax = .001, this.normalize = !1, this.processor.onaudioprocess = this._audioProcess.bind(this), this.processor.connect(this.output), this.output.gain.value = 0, this.output.connect(this.audiocontext.destination), t.meter.connect(this.processor), t.soundArray.push(this)
		}, p5.Amplitude.prototype.setInput = function(e, i) {
			t.meter.disconnect(), i && (this.smoothing = i), null == e ? (console.log("Amplitude input source is not ready! Connecting to master output instead"), t.meter.connect(this.processor)) : e instanceof p5.Signal ? e.output.connect(this.processor) : e ? (e.connect(this.processor), this.processor.disconnect(), this.processor.connect(this.output)) : t.meter.connect(this.processor)
		}, p5.Amplitude.prototype.connect = function(e) {
			e ? e.hasOwnProperty("input") ? this.output.connect(e.input) : this.output.connect(e) : this.output.connect(this.panner.connect(t.input))
		}, p5.Amplitude.prototype.disconnect = function(t) {
			this.output.disconnect()
		}, p5.Amplitude.prototype._audioProcess = function(t) {
			for (var e = 0; e < t.inputBuffer.numberOfChannels; e++) {
				for (var i, o = t.inputBuffer.getChannelData(e), n = o.length, r = 0, s = 0, a = 0; a < n; a++) i = o[a], this.normalize ? (r += Math.max(Math.min(i / this.volMax, 1), -1), s += Math.max(Math.min(i / this.volMax, 1), -1) * Math.max(Math.min(i / this.volMax, 1), -1)) : (r += i, s += i * i);
				var u = r / n,
					c = Math.sqrt(s / n);
				this.stereoVol[e] = Math.max(c, this.stereoVol[e] * this.smoothing), this.stereoAvg[e] = Math.max(u, this.stereoVol[e] * this.smoothing), this.volMax = Math.max(this.stereoVol[e], this.volMax)
			}
			var p = this,
				h = this.stereoVol.reduce(function(t, e, i) {
					return p.stereoVolNorm[i - 1] = Math.max(Math.min(p.stereoVol[i - 1] / p.volMax, 1), 0), p.stereoVolNorm[i] = Math.max(Math.min(p.stereoVol[i] / p.volMax, 1), 0), t + e
				});
			this.volume = h / this.stereoVol.length, this.volNorm = Math.max(Math.min(this.volume / this.volMax, 1), 0)
		}, p5.Amplitude.prototype.getLevel = function(t) {
			return "undefined" != typeof t ? this.normalize ? this.stereoVolNorm[t] : this.stereoVol[t] : this.normalize ? this.volNorm : this.volume
		}, p5.Amplitude.prototype.toggleNormalize = function(t) {
			"boolean" == typeof t ? this.normalize = t : this.normalize = !this.normalize
		}, p5.Amplitude.prototype.smooth = function(t) {
			t >= 0 && t < 1 ? this.smoothing = t : console.log("Error: smoothing must be between 0 and 1")
		}, p5.Amplitude.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.input.disconnect(), this.output.disconnect(), this.input = this.processor = void 0, this.output = void 0
		}
	}(master);
	var fft;
	fft = function() {
		"use strict";
		var t = master;
		p5.FFT = function(e, i) {
			this.smoothing = e || .8, this.bins = i || 1024;
			var o = 2 * i || 2048;
			this.input = this.analyser = t.audiocontext.createAnalyser(), t.fftMeter.connect(this.analyser), this.analyser.smoothingTimeConstant = this.smoothing, this.analyser.fftSize = o, this.freqDomain = new Uint8Array(this.analyser.frequencyBinCount), this.timeDomain = new Uint8Array(this.analyser.frequencyBinCount), this.bass = [20, 140], this.lowMid = [140, 400], this.mid = [400, 2600], this.highMid = [2600, 5200], this.treble = [5200, 14e3], t.soundArray.push(this)
		}, p5.FFT.prototype.setInput = function(e) {
			e ? (e.output ? e.output.connect(this.analyser) : e.connect && e.connect(this.analyser), t.fftMeter.disconnect()) : t.fftMeter.connect(this.analyser)
		}, p5.FFT.prototype.waveform = function() {
			for (var t, e, i, r = 0; r < arguments.length; r++) "number" == typeof arguments[r] && (t = arguments[r], this.analyser.fftSize = 2 * t), "string" == typeof arguments[r] && (e = arguments[r]);
			if (e && !p5.prototype._isSafari()) return o(this, this.timeDomain), this.analyser.getFloatTimeDomainData(this.timeDomain), this.timeDomain;
			n(this, this.timeDomain), this.analyser.getByteTimeDomainData(this.timeDomain);
			for (var i = new Array, r = 0; r < this.timeDomain.length; r++) {
				var s = p5.prototype.map(this.timeDomain[r], 0, 255, -1, 1);
				i.push(s)
			}
			return i
		}, p5.FFT.prototype.analyze = function() {
			for (var t, o, n = 0; n < arguments.length; n++) "number" == typeof arguments[n] && (t = this.bins = arguments[n], this.analyser.fftSize = 2 * this.bins), "string" == typeof arguments[n] && (o = arguments[n]);
			if (o && "db" === o.toLowerCase()) return e(this), this.analyser.getFloatFrequencyData(this.freqDomain), this.freqDomain;
			i(this, this.freqDomain), this.analyser.getByteFrequencyData(this.freqDomain);
			var r = Array.apply([], this.freqDomain);
			return r.length === this.analyser.fftSize, r.constructor === Array, r
		}, p5.FFT.prototype.getEnergy = function(e, i) {
			var o = t.audiocontext.sampleRate / 2;
			if ("bass" === e ? (e = this.bass[0], i = this.bass[1]) : "lowMid" === e ? (e = this.lowMid[0], i = this.lowMid[1]) : "mid" === e ? (e = this.mid[0], i = this.mid[1]) : "highMid" === e ? (e = this.highMid[0], i = this.highMid[1]) : "treble" === e && (e = this.treble[0], i = this.treble[1]), "number" != typeof e) throw "invalid input for getEnergy()";
			if (i) {
				if (e && i) {
					if (e > i) {
						var n = i;
						i = e, e = n
					}
					for (var r = Math.round(e / o * this.freqDomain.length), s = Math.round(i / o * this.freqDomain.length), a = 0, u = 0, c = r; c <= s; c++) a += this.freqDomain[c], u += 1;
					var p = a / u;
					return p
				}
				throw "invalid input for getEnergy()"
			}
			var h = Math.round(e / o * this.freqDomain.length);
			return this.freqDomain[h]
		}, p5.FFT.prototype.getFreq = function(t, e) {
			console.log("getFreq() is deprecated. Please use getEnergy() instead.");
			var i = this.getEnergy(t, e);
			return i
		}, p5.FFT.prototype.getCentroid = function() {
			for (var e = t.audiocontext.sampleRate / 2, i = 0, o = 0, n = 0; n < this.freqDomain.length; n++) i += n * this.freqDomain[n], o += this.freqDomain[n];
			var r = 0;
			0 != o && (r = i / o);
			var s = r * (e / this.freqDomain.length);
			return s
		}, p5.FFT.prototype.smooth = function(t) {
			t && (this.smoothing = t), this.analyser.smoothingTimeConstant = t
		}, p5.FFT.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.analyser.disconnect(), this.analyser = void 0
		};
		var e = function(t) {
				t.freqDomain instanceof Float32Array == !1 && (t.freqDomain = new Float32Array(t.analyser.frequencyBinCount))
			},
			i = function(t) {
				t.freqDomain instanceof Uint8Array == !1 && (t.freqDomain = new Uint8Array(t.analyser.frequencyBinCount))
			},
			o = function(t) {
				t.timeDomain instanceof Float32Array == !1 && (t.timeDomain = new Float32Array(t.analyser.frequencyBinCount))
			},
			n = function(t) {
				t.timeDomain instanceof Uint8Array == !1 && (t.timeDomain = new Uint8Array(t.analyser.frequencyBinCount))
			}
	}(master);
	var Tone_core_Tone;
	Tone_core_Tone = function() {
		"use strict";

		function t(t) {
			return void 0 === t
		}

		function e(t) {
			return "function" == typeof t
		}
		var i;
		if (t(window.AudioContext) && (window.AudioContext = window.webkitAudioContext), t(window.OfflineAudioContext) && (window.OfflineAudioContext = window.webkitOfflineAudioContext), t(AudioContext)) throw new Error("Web Audio is not supported in this browser");
		i = new AudioContext, e(AudioContext.prototype.createGain) || (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), e(AudioContext.prototype.createDelay) || (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode), e(AudioContext.prototype.createPeriodicWave) || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable), e(AudioBufferSourceNode.prototype.start) || (AudioBufferSourceNode.prototype.start = AudioBufferSourceNode.prototype.noteGrainOn), e(AudioBufferSourceNode.prototype.stop) || (AudioBufferSourceNode.prototype.stop = AudioBufferSourceNode.prototype.noteOff), e(OscillatorNode.prototype.start) || (OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn), e(OscillatorNode.prototype.stop) || (OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff), e(OscillatorNode.prototype.setPeriodicWave) || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioNode.prototype._nativeConnect = AudioNode.prototype.connect, AudioNode.prototype.connect = function(e, i, o) {
			if (e.input) Array.isArray(e.input) ? (t(o) && (o = 0), this.connect(e.input[o])) : this.connect(e.input, i, o);
			else try {
				e instanceof AudioNode ? this._nativeConnect(e, i, o) : this._nativeConnect(e, i)
			} catch (t) {
				throw new Error("error connecting to node: " + e);
			}
		};
		var o = function(e, i) {
			t(e) || 1 === e ? this.input = this.context.createGain() : e > 1 && (this.input = new Array(e)), t(i) || 1 === i ? this.output = this.context.createGain() : i > 1 && (this.output = new Array(e))
		};
		o.prototype.set = function(e, i, n) {
			if (this.isObject(e)) n = i;
			else if (this.isString(e)) {
				var r = {};
				r[e] = i, e = r
			}
			for (var s in e) {
				i = e[s];
				var a = this;
				if (s.indexOf(".") !== -1) {
					for (var u = s.split("."), c = 0; c < u.length - 1; c++) a = a[u[c]];
					s = u[u.length - 1]
				}
				var p = a[s];
				t(p) || (o.Signal && p instanceof o.Signal || o.Param && p instanceof o.Param ? p.value !== i && (t(n) ? p.value = i : p.rampTo(i, n)) : p instanceof AudioParam ? p.value !== i && (p.value = i) : p instanceof o ? p.set(i) : p !== i && (a[s] = i))
			}
			return this
		}, o.prototype.get = function(i) {
			t(i) ? i = this._collectDefaults(this.constructor) : this.isString(i) && (i = [i]);
			for (var n = {}, r = 0; r < i.length; r++) {
				var s = i[r],
					a = this,
					u = n;
				if (s.indexOf(".") !== -1) {
					for (var c = s.split("."), p = 0; p < c.length - 1; p++) {
						var h = c[p];
						u[h] = u[h] || {}, u = u[h], a = a[h]
					}
					s = c[c.length - 1]
				}
				var l = a[s];
				this.isObject(i[s]) ? u[s] = l.get() : o.Signal && l instanceof o.Signal ? u[s] = l.value : o.Param && l instanceof o.Param ? u[s] = l.value : l instanceof AudioParam ? u[s] = l.value : l instanceof o ? u[s] = l.get() : e(l) || t(l) || (u[s] = l)
			}
			return n
		}, o.prototype._collectDefaults = function(e) {
			var i = [];
			if (t(e.defaults) || (i = Object.keys(e.defaults)), !t(e._super))
				for (var o = this._collectDefaults(e._super), n = 0; n < o.length; n++) i.indexOf(o[n]) === -1 && i.push(o[n]);
			return i
		}, o.prototype.toString = function() {
			for (var t in o) {
				var i = t[0].match(/^[A-Z]$/),
					n = o[t] === this.constructor;
				if (e(o[t]) && i && n) return t
			}
			return "Tone"
		}, o.context = i, o.prototype.context = o.context, o.prototype.bufferSize = 2048, o.prototype.blockTime = 128 / o.context.sampleRate, o.prototype.dispose = function() {
			return this.isUndef(this.input) || (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), this.isUndef(this.output) || (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this
		};
		var n = null;
		o.prototype.noGC = function() {
			return this.output.connect(n), this
		}, AudioNode.prototype.noGC = function() {
			return this.connect(n), this
		}, o.prototype.connect = function(t, e, i) {
			return Array.isArray(this.output) ? (e = this.defaultArg(e, 0), this.output[e].connect(t, 0, i)) : this.output.connect(t, e, i), this
		}, o.prototype.disconnect = function(t) {
			return Array.isArray(this.output) ? (t = this.defaultArg(t, 0), this.output[t].disconnect()) : this.output.disconnect(), this
		}, o.prototype.connectSeries = function() {
			if (arguments.length > 1)
				for (var t = arguments[0], e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					t.connect(i), t = i
				}
			return this
		}, o.prototype.connectParallel = function() {
			var t = arguments[0];
			if (arguments.length > 1)
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					t.connect(i)
				}
			return this
		}, o.prototype.chain = function() {
			if (arguments.length > 0)
				for (var t = this, e = 0; e < arguments.length; e++) {
					var i = arguments[e];
					t.connect(i), t = i
				}
			return this
		}, o.prototype.fan = function() {
			if (arguments.length > 0)
				for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
			return this
		}, AudioNode.prototype.chain = o.prototype.chain, AudioNode.prototype.fan = o.prototype.fan, o.prototype.defaultArg = function(e, i) {
			if (this.isObject(e) && this.isObject(i)) {
				var o = {};
				for (var n in e) o[n] = this.defaultArg(i[n], e[n]);
				for (var r in i) o[r] = this.defaultArg(e[r], i[r]);
				return o
			}
			return t(e) ? i : e
		}, o.prototype.optionsObject = function(t, e, i) {
			var o = {};
			if (1 === t.length && this.isObject(t[0])) o = t[0];
			else
				for (var n = 0; n < e.length; n++) o[e[n]] = t[n];
			return this.isUndef(i) ? o : this.defaultArg(o, i)
		}, o.prototype.isUndef = t, o.prototype.isFunction = e, o.prototype.isNumber = function(t) {
			return "number" == typeof t
		}, o.prototype.isObject = function(t) {
			return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
		}, o.prototype.isBoolean = function(t) {
			return "boolean" == typeof t
		}, o.prototype.isArray = function(t) {
			return Array.isArray(t)
		}, o.prototype.isString = function(t) {
			return "string" == typeof t
		}, o.noOp = function() {}, o.prototype._readOnly = function(t) {
			if (Array.isArray(t))
				for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
			else Object.defineProperty(this, t, {
				writable: !1,
				enumerable: !0
			})
		}, o.prototype._writable = function(t) {
			if (Array.isArray(t))
				for (var e = 0; e < t.length; e++) this._writable(t[e]);
			else Object.defineProperty(this, t, {
				writable: !0
			})
		}, o.State = {
			Started: "started",
			Stopped: "stopped",
			Paused: "paused"
		}, o.prototype.equalPowerScale = function(t) {
			var e = .5 * Math.PI;
			return Math.sin(t * e)
		}, o.prototype.dbToGain = function(t) {
			return Math.pow(2, t / 6)
		}, o.prototype.gainToDb = function(t) {
			return 20 * (Math.log(t) / Math.LN10)
		}, o.prototype.now = function() {
			return this.context.currentTime
		}, o.extend = function(e, i) {
			function n() {}
			t(i) && (i = o), n.prototype = i.prototype, e.prototype = new n, e.prototype.constructor = e, e._super = i
		};
		var r = [];
		return o._initAudioContext = function(t) {
			t(o.context), r.push(t)
		}, o.setContext = function(t) {
			o.prototype.context = t, o.context = t;
			for (var e = 0; e < r.length; e++) r[e](t)
		}, o.startMobile = function() {
			var t = o.context.createOscillator(),
				e = o.context.createGain();
			e.gain.value = 0, t.connect(e), e.connect(o.context.destination);
			var i = o.context.currentTime;
			t.start(i), t.stop(i + 1)
		}, o._initAudioContext(function(t) {
			o.prototype.blockTime = 128 / t.sampleRate, n = t.createGain(), n.gain.value = 0, n.connect(t.destination)
		}), o.version = "r7-dev", o
	}();
	var Tone_signal_SignalBase;
	Tone_signal_SignalBase = function(t) {
		"use strict";
		return t.SignalBase = function() {}, t.extend(t.SignalBase), t.SignalBase.prototype.connect = function(e, i, o) {
			return t.Signal && t.Signal === e.constructor || t.Param && t.Param === e.constructor || t.TimelineSignal && t.TimelineSignal === e.constructor ? (e._param.cancelScheduledValues(0), e._param.value = 0, e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0), e.value = 0), t.prototype.connect.call(this, e, i, o), this
		}, t.SignalBase
	}(Tone_core_Tone);
	var Tone_signal_WaveShaper;
	Tone_signal_WaveShaper = function(t) {
		"use strict";
		return t.WaveShaper = function(t, e) {
			this._shaper = this.input = this.output = this.context.createWaveShaper(), this._curve = null, Array.isArray(t) ? this.curve = t : isFinite(t) || this.isUndef(t) ? this._curve = new Float32Array(this.defaultArg(t, 1024)) : this.isFunction(t) && (this._curve = new Float32Array(this.defaultArg(e, 1024)), this.setMap(t))
		}, t.extend(t.WaveShaper, t.SignalBase), t.WaveShaper.prototype.setMap = function(t) {
			for (var e = 0, i = this._curve.length; e < i; e++) {
				var o = e / i * 2 - 1;
				this._curve[e] = t(o, e)
			}
			return this._shaper.curve = this._curve, this
		}, Object.defineProperty(t.WaveShaper.prototype, "curve", {
			get: function() {
				return this._shaper.curve
			},
			set: function(t) {
				this._curve = new Float32Array(t), this._shaper.curve = this._curve
			}
		}), Object.defineProperty(t.WaveShaper.prototype, "oversample", {
			get: function() {
				return this._shaper.oversample
			},
			set: function(t) {
				if (["none", "2x", "4x"].indexOf(t) === -1) throw new Error("invalid oversampling: " + t);
				this._shaper.oversample = t
			}
		}), t.WaveShaper.prototype.dispose = function() {
			return t.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this
		}, t.WaveShaper
	}(Tone_core_Tone);
	var Tone_core_Type;
	Tone_core_Type = function(Tone) {
		"use strict";

		function getTransportBpm() {
			return Tone.Transport && Tone.Transport.bpm ? Tone.Transport.bpm.value : 120
		}

		function getTransportTimeSignature() {
			return Tone.Transport && Tone.Transport.timeSignature ? Tone.Transport.timeSignature : 4
		}

		function toNotationHelper(t, e, i, o) {
			for (var n = this.toSeconds(t), r = this.notationToSeconds(o[o.length - 1], e, i), s = "", a = 0; a < o.length; a++) {
				var u = this.notationToSeconds(o[a], e, i),
					c = n / u,
					p = 1e-6;
				if (1 - c % 1 < p && (c += p), c = Math.floor(c), c > 0) {
					if (s += 1 === c ? o[a] : c.toString() + "*" + o[a], n -= c * u, n < r) break;
					s += " + "
				}
			}
			return "" === s && (s = "0"), s
		}
		Tone.Type = {
			Default: "number",
			Time: "time",
			Frequency: "frequency",
			NormalRange: "normalRange",
			AudioRange: "audioRange",
			Decibels: "db",
			Interval: "interval",
			BPM: "bpm",
			Positive: "positive",
			Cents: "cents",
			Degrees: "degrees",
			MIDI: "midi",
			TransportTime: "transportTime",
			Ticks: "tick",
			Note: "note",
			Milliseconds: "milliseconds",
			Notation: "notation"
		}, Tone.prototype.isNowRelative = function() {
			var t = new RegExp(/^\s*\+(.)+/i);
			return function(e) {
				return t.test(e)
			}
		}(), Tone.prototype.isTicks = function() {
			var t = new RegExp(/^\d+i$/i);
			return function(e) {
				return t.test(e)
			}
		}(), Tone.prototype.isNotation = function() {
			var t = new RegExp(/^[0-9]+[mnt]$/i);
			return function(e) {
				return t.test(e)
			}
		}(), Tone.prototype.isTransportTime = function() {
			var t = new RegExp(/^(\d+(\.\d+)?\:){1,2}(\d+(\.\d+)?)?$/i);
			return function(e) {
				return t.test(e)
			}
		}(), Tone.prototype.isNote = function() {
			var t = new RegExp(/^[a-g]{1}(b|#|x|bb)?-?[0-9]+$/i);
			return function(e) {
				return t.test(e)
			}
		}(), Tone.prototype.isFrequency = function() {
			var t = new RegExp(/^\d*\.?\d+hz$/i);
			return function(e) {
				return t.test(e)
			}
		}(), Tone.prototype.notationToSeconds = function(t, e, i) {
			e = this.defaultArg(e, getTransportBpm()), i = this.defaultArg(i, getTransportTimeSignature());
			var o = 60 / e;
			"1n" === t && (t = "1m");
			var n = parseInt(t, 10),
				r = 0;
			0 === n && (r = 0);
			var s = t.slice(-1);
			return r = "t" === s ? 4 / n * 2 / 3 : "n" === s ? 4 / n : "m" === s ? n * i : 0, o * r
		}, Tone.prototype.transportTimeToSeconds = function(t, e, i) {
			e = this.defaultArg(e, getTransportBpm()), i = this.defaultArg(i, getTransportTimeSignature());
			var o = 0,
				n = 0,
				r = 0,
				s = t.split(":");
			2 === s.length ? (o = parseFloat(s[0]), n = parseFloat(s[1])) : 1 === s.length ? n = parseFloat(s[0]) : 3 === s.length && (o = parseFloat(s[0]), n = parseFloat(s[1]), r = parseFloat(s[2]));
			var a = o * i + n + r / 4;
			return a * (60 / e)
		}, Tone.prototype.ticksToSeconds = function(t, e) {
			if (this.isUndef(Tone.Transport)) return 0;
			t = parseFloat(t), e = this.defaultArg(e, getTransportBpm());
			var i = 60 / e / Tone.Transport.PPQ;
			return i * t
		}, Tone.prototype.frequencyToSeconds = function(t) {
			return 1 / parseFloat(t)
		}, Tone.prototype.samplesToSeconds = function(t) {
			return t / this.context.sampleRate
		}, Tone.prototype.secondsToSamples = function(t) {
			return t * this.context.sampleRate
		}, Tone.prototype.secondsToTransportTime = function(t, e, i) {
			e = this.defaultArg(e, getTransportBpm()), i = this.defaultArg(i, getTransportTimeSignature());
			var o = 60 / e,
				n = t / o,
				r = Math.floor(n / i),
				s = n % 1 * 4;
			n = Math.floor(n) % i;
			var a = [r, n, s];
			return a.join(":")
		}, Tone.prototype.secondsToFrequency = function(t) {
			return 1 / t
		}, Tone.prototype.toTransportTime = function(t, e, i) {
			var o = this.toSeconds(t);
			return this.secondsToTransportTime(o, e, i)
		}, Tone.prototype.toFrequency = function(t, e) {
			return this.isFrequency(t) ? parseFloat(t) : this.isNotation(t) || this.isTransportTime(t) ? this.secondsToFrequency(this.toSeconds(t, e)) : this.isNote(t) ? this.noteToFrequency(t) : t
		}, Tone.prototype.toTicks = function(t) {
			if (this.isUndef(Tone.Transport)) return 0;
			var e = Tone.Transport.bpm.value,
				i = 0;
			if (this.isNowRelative(t)) t = t.replace("+", ""), i = Tone.Transport.ticks;
			else if (this.isUndef(t)) return Tone.Transport.ticks;
			var o = this.toSeconds(t),
				n = 60 / e,
				r = o / n,
				s = r * Tone.Transport.PPQ;
			return Math.round(s + i)
		}, Tone.prototype.toSamples = function(t) {
			var e = this.toSeconds(t);
			return Math.round(e * this.context.sampleRate)
		}, Tone.prototype.toSeconds = function(time, now) {
			if (now = this.defaultArg(now, this.now()), this.isNumber(time)) return time;
			if (this.isString(time)) {
				var plusTime = 0;
				this.isNowRelative(time) && (time = time.replace("+", ""), plusTime = now);
				var betweenParens = time.match(/\(([^)(]+)\)/g);
				if (betweenParens)
					for (var j = 0; j < betweenParens.length; j++) {
						var symbol = betweenParens[j].replace(/[\(\)]/g, ""),
							symbolVal = this.toSeconds(symbol);
						time = time.replace(betweenParens[j], symbolVal)
					}
				if (time.indexOf("@") !== -1) {
					var quantizationSplit = time.split("@");
					if (this.isUndef(Tone.Transport)) throw new Error("quantization requires Tone.Transport");
					var toQuantize = quantizationSplit[0].trim();
					"" === toQuantize && (toQuantize = void 0), plusTime > 0 && (toQuantize = "+" + toQuantize, plusTime = 0);
					var subdivision = quantizationSplit[1].trim();
					time = Tone.Transport.quantize(toQuantize, subdivision)
				} else {
					var components = time.split(/[\(\)\-\+\/\*]/);
					if (components.length > 1) {
						for (var originalTime = time, i = 0; i < components.length; i++) {
							var symb = components[i].trim();
							if ("" !== symb) {
								var val = this.toSeconds(symb);
								time = time.replace(symb, val)
							}
						}
						try {
							time = eval(time)
						} catch (t) {
							throw new EvalError("cannot evaluate Time: " + originalTime)
						}
					} else time = this.isNotation(time) ? this.notationToSeconds(time) : this.isTransportTime(time) ? this.transportTimeToSeconds(time) : this.isFrequency(time) ? this.frequencyToSeconds(time) : this.isTicks(time) ? this.ticksToSeconds(time) : parseFloat(time)
				}
				return time + plusTime
			}
			return now
		}, Tone.prototype.toNotation = function(t, e, i) {
			var o = ["1m", "2n", "4n", "8n", "16n", "32n", "64n", "128n"],
				n = toNotationHelper.call(this, t, e, i, o),
				r = ["1m", "2n", "2t", "4n", "4t", "8n", "8t", "16n", "16t", "32n", "32t", "64n", "64t", "128n"],
				s = toNotationHelper.call(this, t, e, i, r);
			return s.split("+").length < n.split("+").length ? s : n
		}, Tone.prototype.fromUnits = function(t, e) {
			if (!this.convert && !this.isUndef(this.convert)) return t;
			switch (e) {
				case Tone.Type.Time:
					return this.toSeconds(t);
				case Tone.Type.Frequency:
					return this.toFrequency(t);
				case Tone.Type.Decibels:
					return this.dbToGain(t);
				case Tone.Type.NormalRange:
					return Math.min(Math.max(t, 0), 1);
				case Tone.Type.AudioRange:
					return Math.min(Math.max(t, -1), 1);
				case Tone.Type.Positive:
					return Math.max(t, 0);
				default:
					return t
			}
		}, Tone.prototype.toUnits = function(t, e) {
			if (!this.convert && !this.isUndef(this.convert)) return t;
			switch (e) {
				case Tone.Type.Decibels:
					return this.gainToDb(t);
				default:
					return t
			}
		};
		var noteToScaleIndex = {
				cbb: -2,
				cb: -1,
				c: 0,
				"c#": 1,
				cx: 2,
				dbb: 0,
				db: 1,
				d: 2,
				"d#": 3,
				dx: 4,
				ebb: 2,
				eb: 3,
				e: 4,
				"e#": 5,
				ex: 6,
				fbb: 3,
				fb: 4,
				f: 5,
				"f#": 6,
				fx: 7,
				gbb: 5,
				gb: 6,
				g: 7,
				"g#": 8,
				gx: 9,
				abb: 7,
				ab: 8,
				a: 9,
				"a#": 10,
				ax: 11,
				bbb: 9,
				bb: 10,
				b: 11,
				"b#": 12,
				bx: 13
			},
			scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
		return Tone.A4 = 440, Tone.prototype.noteToFrequency = function(t) {
			var e = t.split(/(-?\d+)/);
			if (3 === e.length) {
				var i = noteToScaleIndex[e[0].toLowerCase()],
					o = e[1],
					n = i + 12 * (parseInt(o, 10) + 1);
				return this.midiToFrequency(n)
			}
			return 0
		}, Tone.prototype.frequencyToNote = function(t) {
			var e = Math.log(t / Tone.A4) / Math.LN2,
				i = Math.round(12 * e) + 57,
				o = Math.floor(i / 12);
			o < 0 && (i += -12 * o);
			var n = scaleIndexToNote[i % 12];
			return n + o.toString()
		}, Tone.prototype.intervalToFrequencyRatio = function(t) {
			return Math.pow(2, t / 12)
		}, Tone.prototype.midiToNote = function(t) {
			var e = Math.floor(t / 12) - 1,
				i = t % 12;
			return scaleIndexToNote[i] + e
		}, Tone.prototype.noteToMidi = function(t) {
			var e = t.split(/(\d+)/);
			if (3 === e.length) {
				var i = noteToScaleIndex[e[0].toLowerCase()],
					o = e[1];
				return i + 12 * (parseInt(o, 10) + 1)
			}
			return 0
		}, Tone.prototype.midiToFrequency = function(t) {
			return Tone.A4 * Math.pow(2, (t - 69) / 12)
		}, Tone
	}(Tone_core_Tone);
	var Tone_core_Param;
	Tone_core_Param = function(t) {
		"use strict";
		return t.Param = function() {
			var e = this.optionsObject(arguments, ["param", "units", "convert"], t.Param.defaults);
			this._param = this.input = e.param, this.units = e.units, this.convert = e.convert, this.overridden = !1, this.isUndef(e.value) || (this.value = e.value)
		}, t.extend(t.Param), t.Param.defaults = {
			units: t.Type.Default,
			convert: !0,
			param: void 0
		}, Object.defineProperty(t.Param.prototype, "value", {
			get: function() {
				return this._toUnits(this._param.value)
			},
			set: function(t) {
				var e = this._fromUnits(t);
				this._param.value = e
			}
		}), t.Param.prototype._fromUnits = function(e) {
			if (!this.convert && !this.isUndef(this.convert)) return e;
			switch (this.units) {
				case t.Type.Time:
					return this.toSeconds(e);
				case t.Type.Frequency:
					return this.toFrequency(e);
				case t.Type.Decibels:
					return this.dbToGain(e);
				case t.Type.NormalRange:
					return Math.min(Math.max(e, 0), 1);
				case t.Type.AudioRange:
					return Math.min(Math.max(e, -1), 1);
				case t.Type.Positive:
					return Math.max(e, 0);
				default:
					return e
			}
		}, t.Param.prototype._toUnits = function(e) {
			if (!this.convert && !this.isUndef(this.convert)) return e;
			switch (this.units) {
				case t.Type.Decibels:
					return this.gainToDb(e);
				default:
					return e
			}
		}, t.Param.prototype._minOutput = 1e-5, t.Param.prototype.setValueAtTime = function(t, e) {
			return t = this._fromUnits(t), this._param.setValueAtTime(t, this.toSeconds(e)), this
		}, t.Param.prototype.setRampPoint = function(t) {
			t = this.defaultArg(t, this.now());
			var e = this._param.value;
			return this._param.setValueAtTime(e, t), this
		}, t.Param.prototype.linearRampToValueAtTime = function(t, e) {
			return t = this._fromUnits(t), this._param.linearRampToValueAtTime(t, this.toSeconds(e)), this
		}, t.Param.prototype.exponentialRampToValueAtTime = function(t, e) {
			return t = this._fromUnits(t), t = Math.max(this._minOutput, t), this._param.exponentialRampToValueAtTime(t, this.toSeconds(e)), this
		}, t.Param.prototype.exponentialRampToValue = function(t, e) {
			var i = this.now(),
				o = this.value;
			return this.setValueAtTime(Math.max(o, this._minOutput), i), this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)), this
		}, t.Param.prototype.linearRampToValue = function(t, e) {
			var i = this.now();
			return this.setRampPoint(i), this.linearRampToValueAtTime(t, i + this.toSeconds(e)), this
		}, t.Param.prototype.setTargetAtTime = function(t, e, i) {
			return t = this._fromUnits(t), t = Math.max(this._minOutput, t), i = Math.max(this._minOutput, i), this._param.setTargetAtTime(t, this.toSeconds(e), i), this
		}, t.Param.prototype.setValueCurveAtTime = function(t, e, i) {
			for (var o = 0; o < t.length; o++) t[o] = this._fromUnits(t[o]);
			return this._param.setValueCurveAtTime(t, this.toSeconds(e), this.toSeconds(i)), this
		}, t.Param.prototype.cancelScheduledValues = function(t) {
			return this._param.cancelScheduledValues(this.toSeconds(t)), this
		}, t.Param.prototype.rampTo = function(e, i) {
			return i = this.defaultArg(i, 0), this.units === t.Type.Frequency || this.units === t.Type.BPM ? this.exponentialRampToValue(e, i) : this.linearRampToValue(e, i), this
		}, t.Param.prototype.dispose = function() {
			return t.prototype.dispose.call(this), this._param = null, this
		}, t.Param
	}(Tone_core_Tone);
	var Tone_core_Gain;
	Tone_core_Gain = function(t) {
		"use strict";
		return t.Gain = function() {
			var e = this.optionsObject(arguments, ["gain", "units"], t.Gain.defaults);
			this.input = this.output = this._gainNode = this.context.createGain(), this.gain = new t.Param({
				param: this._gainNode.gain,
				units: e.units,
				value: e.gain,
				convert: e.convert
			}), this._readOnly("gain")
		}, t.extend(t.Gain), t.Gain.defaults = {
			gain: 1,
			convert: !0
		}, t.Gain.prototype.dispose = function() {
			t.Param.prototype.dispose.call(this), this._gainNode.disconnect(), this._gainNode = null, this._writable("gain"), this.gain.dispose(), this.gain = null
		}, t.Gain
	}(Tone_core_Tone, Tone_core_Param);
	var Tone_signal_Signal;
	Tone_signal_Signal = function(t) {
		"use strict";
		return t.Signal = function() {
			var e = this.optionsObject(arguments, ["value", "units"], t.Signal.defaults);
			this.output = this._gain = this.context.createGain(), e.param = this._gain.gain, t.Param.call(this, e), this.input = this._param = this._gain.gain, t.Signal._constant.chain(this._gain)
		}, t.extend(t.Signal, t.Param), t.Signal.defaults = {
			value: 0,
			units: t.Type.Default,
			convert: !0
		}, t.Signal.prototype.connect = t.SignalBase.prototype.connect, t.Signal.prototype.dispose = function() {
			return t.Param.prototype.dispose.call(this), this._param = null, this._gain.disconnect(), this._gain = null, this
		}, t.Signal._constant = null, t._initAudioContext(function(e) {
			for (var i = e.createBuffer(1, 128, e.sampleRate), o = i.getChannelData(0), n = 0; n < o.length; n++) o[n] = 1;
			t.Signal._constant = e.createBufferSource(), t.Signal._constant.channelCount = 1, t.Signal._constant.channelCountMode = "explicit", t.Signal._constant.buffer = i, t.Signal._constant.loop = !0, t.Signal._constant.start(0), t.Signal._constant.noGC()
		}), t.Signal
	}(Tone_core_Tone, Tone_signal_WaveShaper, Tone_core_Type, Tone_core_Param);
	var Tone_signal_Add;
	Tone_signal_Add = function(t) {
		"use strict";
		return t.Add = function(e) {
			t.call(this, 2, 0), this._sum = this.input[0] = this.input[1] = this.output = this.context.createGain(), this._param = this.input[1] = new t.Signal(e), this._param.connect(this._sum)
		}, t.extend(t.Add, t.Signal), t.Add.prototype.dispose = function() {
			return t.prototype.dispose.call(this), this._sum.disconnect(), this._sum = null, this._param.dispose(), this._param = null, this
		}, t.Add
	}(Tone_core_Tone);
	var Tone_signal_Multiply;
	Tone_signal_Multiply = function(t) {
		"use strict";
		return t.Multiply = function(e) {
			t.call(this, 2, 0), this._mult = this.input[0] = this.output = this.context.createGain(), this._param = this.input[1] = this.output.gain, this._param.value = this.defaultArg(e, 0)
		}, t.extend(t.Multiply, t.Signal), t.Multiply.prototype.dispose = function() {
			return t.prototype.dispose.call(this), this._mult.disconnect(), this._mult = null, this._param = null, this
		}, t.Multiply
	}(Tone_core_Tone);
	var Tone_signal_Scale;
	Tone_signal_Scale = function(t) {
		"use strict";
		return t.Scale = function(e, i) {
			this._outputMin = this.defaultArg(e, 0), this._outputMax = this.defaultArg(i, 1), this._scale = this.input = new t.Multiply(1), this._add = this.output = new t.Add(0), this._scale.connect(this._add), this._setRange()
		}, t.extend(t.Scale, t.SignalBase), Object.defineProperty(t.Scale.prototype, "min", {
			get: function() {
				return this._outputMin
			},
			set: function(t) {
				this._outputMin = t, this._setRange()
			}
		}), Object.defineProperty(t.Scale.prototype, "max", {
			get: function() {
				return this._outputMax
			},
			set: function(t) {
				this._outputMax = t, this._setRange()
			}
		}), t.Scale.prototype._setRange = function() {
			this._add.value = this._outputMin, this._scale.value = this._outputMax - this._outputMin
		}, t.Scale.prototype.dispose = function() {
			return t.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this
		}, t.Scale
	}(Tone_core_Tone, Tone_signal_Add, Tone_signal_Multiply);
	var signal;
	signal = function() {
		"use strict";
		var t = Tone_signal_Signal,
			e = Tone_signal_Add,
			i = Tone_signal_Multiply,
			o = Tone_signal_Scale,
			n = Tone_core_Tone,
			r = master;
		n.setContext(r.audiocontext), p5.Signal = function(e) {
			var i = new t(e);
			return i
		}, t.prototype.fade = t.prototype.linearRampToValueAtTime, i.prototype.fade = t.prototype.fade, e.prototype.fade = t.prototype.fade, o.prototype.fade = t.prototype.fade, t.prototype.setInput = function(t) {
			t.connect(this)
		}, i.prototype.setInput = t.prototype.setInput, e.prototype.setInput = t.prototype.setInput, o.prototype.setInput = t.prototype.setInput, t.prototype.add = function(t) {
			var i = new e(t);
			return this.connect(i), i
		}, i.prototype.add = t.prototype.add, e.prototype.add = t.prototype.add, o.prototype.add = t.prototype.add, t.prototype.mult = function(t) {
			var e = new i(t);
			return this.connect(e), e
		}, i.prototype.mult = t.prototype.mult, e.prototype.mult = t.prototype.mult, o.prototype.mult = t.prototype.mult, t.prototype.scale = function(t, e, i, n) {
			var r, s;
			4 === arguments.length ? (r = p5.prototype.map(i, t, e, 0, 1) - .5, s = p5.prototype.map(n, t, e, 0, 1) - .5) : (r = arguments[0], s = arguments[1]);
			var a = new o(r, s);
			return this.connect(a), a
		}, i.prototype.scale = t.prototype.scale, e.prototype.scale = t.prototype.scale, o.prototype.scale = t.prototype.scale
	}(Tone_signal_Signal, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale, Tone_core_Tone, master);
	var oscillator;
	oscillator = function() {
		"use strict";
		var t = master,
			e = Tone_signal_Add,
			i = Tone_signal_Multiply,
			o = Tone_signal_Scale;
		p5.Oscillator = function(e, i) {
			if ("string" == typeof e) {
				var o = i;
				i = e, e = o
			}
			if ("number" == typeof i) {
				var o = i;
				i = e, e = o
			}
			this.started = !1, this.phaseAmount = void 0, this.oscillator = t.audiocontext.createOscillator(), this.f = e || 440, this.oscillator.type = i || "sine", this.oscillator.frequency.setValueAtTime(this.f, t.audiocontext.currentTime);
			this.oscillator;
			this.output = t.audiocontext.createGain(), this._freqMods = [], this.output.gain.value = .5, this.output.gain.setValueAtTime(.5, t.audiocontext.currentTime), this.oscillator.connect(this.output), this.panPosition = 0, this.connection = t.input, this.panner = new p5.Panner(this.output, this.connection, 1), this.mathOps = [this.output], t.soundArray.push(this)
		}, p5.Oscillator.prototype.start = function(e, i) {
			if (this.started) {
				var o = t.audiocontext.currentTime;
				this.stop(o)
			}
			if (!this.started) {
				var n = i || this.f,
					r = this.oscillator.type;
				this.oscillator && (this.oscillator.disconnect(), this.oscillator = void 0), this.oscillator = t.audiocontext.createOscillator(), this.oscillator.frequency.exponentialRampToValueAtTime(Math.abs(n), t.audiocontext.currentTime), this.oscillator.type = r, this.oscillator.connect(this.output), e = e || 0, this.oscillator.start(e + t.audiocontext.currentTime), this.freqNode = this.oscillator.frequency;
				for (var s in this._freqMods) "undefined" != typeof this._freqMods[s].connect && this._freqMods[s].connect(this.oscillator.frequency);
				this.started = !0
			}
		}, p5.Oscillator.prototype.stop = function(e) {
			if (this.started) {
				var i = e || 0,
					o = t.audiocontext.currentTime;
				this.oscillator.stop(i + o), this.started = !1
			}
		}, p5.Oscillator.prototype.amp = function(e, i, o) {
			var n = this;
			if ("number" == typeof e) {
				var i = i || 0,
					o = o || 0,
					r = t.audiocontext.currentTime,
					s = this.output.gain.value;
				this.output.gain.cancelScheduledValues(r), this.output.gain.linearRampToValueAtTime(s, r + o), this.output.gain.linearRampToValueAtTime(e, r + o + i)
			} else {
				if (!e) return this.output.gain;
				e.connect(n.output.gain)
			}
		}, p5.Oscillator.prototype.fade = p5.Oscillator.prototype.amp, p5.Oscillator.prototype.getAmp = function() {
			return this.output.gain.value
		}, p5.Oscillator.prototype.freq = function(e, i, o) {
			if ("number" != typeof e || isNaN(e)) {
				if (!e) return this.oscillator.frequency;
				e.output && (e = e.output), e.connect(this.oscillator.frequency), this._freqMods.push(e)
			} else {
				this.f = e;
				var n = t.audiocontext.currentTime,
					i = i || 0,
					o = o || 0;
				0 == i ? (this.oscillator.frequency.cancelScheduledValues(n), this.oscillator.frequency.setValueAtTime(e, o + n)) : e > 0 ? this.oscillator.frequency.exponentialRampToValueAtTime(e, o + i + n) : this.oscillator.frequency.linearRampToValueAtTime(e, o + i + n), this.phaseAmount && this.phase(this.phaseAmount)
			}
		}, p5.Oscillator.prototype.getFreq = function() {
			return this.oscillator.frequency.value
		}, p5.Oscillator.prototype.setType = function(t) {
			this.oscillator.type = t
		}, p5.Oscillator.prototype.getType = function() {
			return this.oscillator.type
		}, p5.Oscillator.prototype.connect = function(e) {
			e ? e.hasOwnProperty("input") ? (this.panner.connect(e.input), this.connection = e.input) : (this.panner.connect(e), this.connection = e) : this.panner.connect(t.input)
		}, p5.Oscillator.prototype.disconnect = function(t) {
			this.output.disconnect(), this.panner.disconnect(), this.output.connect(this.panner), this.oscMods = []
		}, p5.Oscillator.prototype.pan = function(t, e) {
			this.panPosition = t, this.panner.pan(t, e)
		}, p5.Oscillator.prototype.getPan = function() {
			return this.panPosition
		}, p5.Oscillator.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			if (t.soundArray.splice(e, 1), this.oscillator) {
				var i = t.audiocontext.currentTime;
				this.stop(i), this.disconnect(), this.panner = null, this.oscillator = null
			}
			this.osc2 && this.osc2.dispose()
		}, p5.Oscillator.prototype.phase = function(e) {
			var i = p5.prototype.map(e, 0, 1, 0, 1 / this.f),
				o = t.audiocontext.currentTime;
			this.phaseAmount = e, this.dNode || (this.dNode = t.audiocontext.createDelay(), this.oscillator.disconnect(), this.oscillator.connect(this.dNode), this.dNode.connect(this.output)), this.dNode.delayTime.setValueAtTime(i, o)
		};
		var n = function(t, e, i, o, n) {
			var r = t.oscillator;
			for (var s in t.mathOps) t.mathOps[s] instanceof n && (r.disconnect(), t.mathOps[s].dispose(), i = s, i < t.mathOps.length - 2 && (o = t.mathOps[s + 1]));
			return i == t.mathOps.length - 1 && t.mathOps.push(o), s > 0 && (r = t.mathOps[s - 1]), r.disconnect(), r.connect(e), e.connect(o), t.mathOps[i] = e, t
		};
		p5.Oscillator.prototype.add = function(t) {
			var i = new e(t),
				o = this.mathOps.length - 1,
				r = this.output;
			return n(this, i, o, r, e)
		}, p5.Oscillator.prototype.mult = function(t) {
			var e = new i(t),
				o = this.mathOps.length - 1,
				r = this.output;
			return n(this, e, o, r, i)
		}, p5.Oscillator.prototype.scale = function(t, e, i, r) {
			var s, a;
			4 === arguments.length ? (s = p5.prototype.map(i, t, e, 0, 1) - .5, a = p5.prototype.map(r, t, e, 0, 1) - .5) : (s = arguments[0], a = arguments[1]);
			var u = new o(s, a),
				c = this.mathOps.length - 1,
				p = this.output;
			return n(this, u, c, p, o)
		}, p5.SinOsc = function(t) {
			p5.Oscillator.call(this, t, "sine")
		}, p5.SinOsc.prototype = Object.create(p5.Oscillator.prototype), p5.TriOsc = function(t) {
			p5.Oscillator.call(this, t, "triangle")
		}, p5.TriOsc.prototype = Object.create(p5.Oscillator.prototype), p5.SawOsc = function(t) {
			p5.Oscillator.call(this, t, "sawtooth")
		}, p5.SawOsc.prototype = Object.create(p5.Oscillator.prototype), p5.SqrOsc = function(t) {
			p5.Oscillator.call(this, t, "square")
		}, p5.SqrOsc.prototype = Object.create(p5.Oscillator.prototype)
	}(master, Tone_signal_Signal, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale);
	var Tone_core_Timeline;
	Tone_core_Timeline = function(t) {
		"use strict";
		return t.Timeline = function() {
			var e = this.optionsObject(arguments, ["memory"], t.Timeline.defaults);
			this._timeline = [], this._toRemove = [], this._iterating = !1, this.memory = e.memory
		}, t.extend(t.Timeline), t.Timeline.defaults = {
			memory: 1 / 0
		}, Object.defineProperty(t.Timeline.prototype, "length", {
			get: function() {
				return this._timeline.length
			}
		}), t.Timeline.prototype.addEvent = function(t) {
			if (this.isUndef(t.time)) throw new Error("events must have a time attribute");
			if (t.time = this.toSeconds(t.time), this._timeline.length) {
				var e = this._search(t.time);
				this._timeline.splice(e + 1, 0, t)
			} else this._timeline.push(t);
			if (this.length > this.memory) {
				var i = this.length - this.memory;
				this._timeline.splice(0, i)
			}
			return this
		}, t.Timeline.prototype.removeEvent = function(t) {
			if (this._iterating) this._toRemove.push(t);
			else {
				var e = this._timeline.indexOf(t);
				e !== -1 && this._timeline.splice(e, 1)
			}
			return this
		}, t.Timeline.prototype.getEvent = function(t) {
			t = this.toSeconds(t);
			var e = this._search(t);
			return e !== -1 ? this._timeline[e] : null
		}, t.Timeline.prototype.getEventAfter = function(t) {
			t = this.toSeconds(t);
			var e = this._search(t);
			return e + 1 < this._timeline.length ? this._timeline[e + 1] : null
		}, t.Timeline.prototype.getEventBefore = function(t) {
			t = this.toSeconds(t);
			var e = this._search(t);
			return e - 1 >= 0 ? this._timeline[e - 1] : null
		}, t.Timeline.prototype.cancel = function(t) {
			if (this._timeline.length > 1) {
				t = this.toSeconds(t);
				var e = this._search(t);
				e >= 0 ? this._timeline = this._timeline.slice(0, e) : this._timeline = []
			} else 1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
			return this
		}, t.Timeline.prototype.cancelBefore = function(t) {
			if (this._timeline.length) {
				t = this.toSeconds(t);
				var e = this._search(t);
				e >= 0 && (this._timeline = this._timeline.slice(e + 1))
			}
			return this
		}, t.Timeline.prototype._search = function(t) {
			for (var e = 0, i = this._timeline.length, o = i; e <= o && e < i;) {
				var n = Math.floor(e + (o - e) / 2),
					r = this._timeline[n];
				if (r.time === t) {
					for (var s = n; s < this._timeline.length; s++) {
						var a = this._timeline[s];
						a.time === t && (n = s)
					}
					return n
				}
				r.time > t ? o = n - 1 : r.time < t && (e = n + 1)
			}
			return e - 1
		}, t.Timeline.prototype._iterate = function(t, e, i) {
			this._iterating = !0, e = this.defaultArg(e, 0), i = this.defaultArg(i, this._timeline.length - 1);
			for (var o = e; o <= i; o++) t(this._timeline[o]);
			if (this._iterating = !1, this._toRemove.length > 0) {
				for (var n = 0; n < this._toRemove.length; n++) {
					var r = this._timeline.indexOf(this._toRemove[n]);
					r !== -1 && this._timeline.splice(r, 1)
				}
				this._toRemove = []
			}
		}, t.Timeline.prototype.forEach = function(t) {
			return this._iterate(t), this
		}, t.Timeline.prototype.forEachBefore = function(t, e) {
			t = this.toSeconds(t);
			var i = this._search(t);
			return i !== -1 && this._iterate(e, 0, i), this
		}, t.Timeline.prototype.forEachAfter = function(t, e) {
			t = this.toSeconds(t);
			var i = this._search(t);
			return this._iterate(e, i + 1), this
		}, t.Timeline.prototype.forEachFrom = function(t, e) {
			t = this.toSeconds(t);
			for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t;) i--;
			return this._iterate(e, i + 1), this
		}, t.Timeline.prototype.forEachAtTime = function(t, e) {
			t = this.toSeconds(t);
			var i = this._search(t);
			return i !== -1 && this._iterate(function(i) {
				i.time === t && e(i)
			}, 0, i), this
		}, t.Timeline.prototype.dispose = function() {
			t.prototype.dispose.call(this), this._timeline = null, this._toRemove = null
		}, t.Timeline
	}(Tone_core_Tone);
	var Tone_signal_TimelineSignal;
	Tone_signal_TimelineSignal = function(t) {
		"use strict";
		return t.TimelineSignal = function() {
			var e = this.optionsObject(arguments, ["value", "units"], t.Signal.defaults);
			t.Signal.apply(this, e), e.param = this._param, t.Param.call(this, e), this._events = new t.Timeline(10), this._initial = this._fromUnits(this._param.value)
		}, t.extend(t.TimelineSignal, t.Param), t.TimelineSignal.Type = {
			Linear: "linear",
			Exponential: "exponential",
			Target: "target",
			Set: "set"
		}, Object.defineProperty(t.TimelineSignal.prototype, "value", {
			get: function() {
				return this._toUnits(this._param.value)
			},
			set: function(t) {
				var e = this._fromUnits(t);
				this._initial = e, this._param.value = e
			}
		}), t.TimelineSignal.prototype.setValueAtTime = function(e, i) {
			return e = this._fromUnits(e), i = this.toSeconds(i), this._events.addEvent({
				type: t.TimelineSignal.Type.Set,
				value: e,
				time: i
			}), this._param.setValueAtTime(e, i), this
		}, t.TimelineSignal.prototype.linearRampToValueAtTime = function(e, i) {
			return e = this._fromUnits(e), i = this.toSeconds(i), this._events.addEvent({
				type: t.TimelineSignal.Type.Linear,
				value: e,
				time: i
			}), this._param.linearRampToValueAtTime(e, i), this
		}, t.TimelineSignal.prototype.exponentialRampToValueAtTime = function(e, i) {
			return e = this._fromUnits(e), e = Math.max(this._minOutput, e), i = this.toSeconds(i), this._events.addEvent({
				type: t.TimelineSignal.Type.Exponential,
				value: e,
				time: i
			}), this._param.exponentialRampToValueAtTime(e, i), this
		}, t.TimelineSignal.prototype.setTargetAtTime = function(e, i, o) {
			return e = this._fromUnits(e), e = Math.max(this._minOutput, e), o = Math.max(this._minOutput, o), i = this.toSeconds(i), this._events.addEvent({
				type: t.TimelineSignal.Type.Target,
				value: e,
				time: i,
				constant: o
			}), this._param.setTargetAtTime(e, i, o), this
		}, t.TimelineSignal.prototype.cancelScheduledValues = function(t) {
			return this._events.cancel(t), this._param.cancelScheduledValues(this.toSeconds(t)), this
		}, t.TimelineSignal.prototype.setRampPoint = function(e) {
			e = this.toSeconds(e);
			var i = this.getValueAtTime(e),
				o = this._searchAfter(e);
			return o && (this.cancelScheduledValues(e), o.type === t.TimelineSignal.Type.Linear ? this.linearRampToValueAtTime(i, e) : o.type === t.TimelineSignal.Type.Exponential && this.exponentialRampToValueAtTime(i, e)), this.setValueAtTime(i, e), this
		}, t.TimelineSignal.prototype.linearRampToValueBetween = function(t, e, i) {
			return this.setRampPoint(e), this.linearRampToValueAtTime(t, i), this
		}, t.TimelineSignal.prototype.exponentialRampToValueBetween = function(t, e, i) {
			return this.setRampPoint(e), this.exponentialRampToValueAtTime(t, i), this
		}, t.TimelineSignal.prototype._searchBefore = function(t) {
			return this._events.getEvent(t)
		}, t.TimelineSignal.prototype._searchAfter = function(t) {
			return this._events.getEventAfter(t)
		}, t.TimelineSignal.prototype.getValueAtTime = function(e) {
			var i = this._searchAfter(e),
				o = this._searchBefore(e),
				n = this._initial;
			if (null === o) n = this._initial;
			else if (o.type === t.TimelineSignal.Type.Target) {
				var r, s = this._events.getEventBefore(o.time);
				r = null === s ? this._initial : s.value, n = this._exponentialApproach(o.time, r, o.value, o.constant, e)
			} else n = null === i ? o.value : i.type === t.TimelineSignal.Type.Linear ? this._linearInterpolate(o.time, o.value, i.time, i.value, e) : i.type === t.TimelineSignal.Type.Exponential ? this._exponentialInterpolate(o.time, o.value, i.time, i.value, e) : o.value;
			return n
		}, t.TimelineSignal.prototype.connect = t.SignalBase.prototype.connect, t.TimelineSignal.prototype._exponentialApproach = function(t, e, i, o, n) {
			return i + (e - i) * Math.exp(-(n - t) / o)
		}, t.TimelineSignal.prototype._linearInterpolate = function(t, e, i, o, n) {
			return e + (o - e) * ((n - t) / (i - t))
		}, t.TimelineSignal.prototype._exponentialInterpolate = function(t, e, i, o, n) {
			return e = Math.max(this._minOutput, e), e * Math.pow(o / e, (n - t) / (i - t))
		}, t.TimelineSignal.prototype.dispose = function() {
			t.Signal.prototype.dispose.call(this), t.Param.prototype.dispose.call(this), this._events.dispose(), this._events = null
		}, t.TimelineSignal
	}(Tone_core_Tone, Tone_signal_Signal);
	var env;
	env = function() {
		"use strict";
		var t = master,
			e = Tone_signal_Add,
			i = Tone_signal_Multiply,
			o = Tone_signal_Scale,
			n = Tone_signal_TimelineSignal,
			r = Tone_core_Tone;
		r.setContext(t.audiocontext), p5.Env = function(e, i, o, r, s, a) {
			t.audiocontext.currentTime;
			this.aTime = e || .1, this.aLevel = i || 1, this.dTime = o || .5, this.dLevel = r || 0, this.rTime = s || 0, this.rLevel = a || 0, this._rampHighPercentage = .98, this._rampLowPercentage = .02, this.output = t.audiocontext.createGain(), this.control = new n, this._init(), this.control.connect(this.output), this.connection = null, this.mathOps = [this.control], this.isExponential = !1, this.sourceToClear = null, this.wasTriggered = !1, t.soundArray.push(this)
		}, p5.Env.prototype._init = function() {
			var e = t.audiocontext.currentTime,
				i = e;
			this.control.setTargetAtTime(1e-5, i, .001), this._setRampAD(this.aTime, this.dTime)
		}, p5.Env.prototype.set = function(t, e, i, o, n, r) {
			this.aTime = t, this.aLevel = e, this.dTime = i || 0, this.dLevel = o || 0, this.rTime = n || 0, this.rLevel = r || 0, this._setRampAD(t, i)
		}, p5.Env.prototype.setADSR = function(t, e, i, o) {
			this.aTime = t, this.dTime = e || 0, this.sPercent = i || 0, this.dLevel = "undefined" != typeof i ? i * (this.aLevel - this.rLevel) + this.rLevel : 0, this.rTime = o || 0, this._setRampAD(t, e)
		}, p5.Env.prototype.setRange = function(t, e) {
			this.aLevel = t || 1, this.rLevel = e || 0
		}, p5.Env.prototype._setRampAD = function(t, e) {
			this._rampAttackTime = this.checkExpInput(t), this._rampDecayTime = this.checkExpInput(e);
			var i = 1;
			i = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage)), this._rampAttackTC = t / this.checkExpInput(i), i = Math.log(1 / this._rampLowPercentage), this._rampDecayTC = e / this.checkExpInput(i)
		}, p5.Env.prototype.setRampPercentages = function(t, e) {
			this._rampHighPercentage = this.checkExpInput(t), this._rampLowPercentage = this.checkExpInput(e);
			var i = 1;
			i = Math.log(1 / this.checkExpInput(1 - this._rampHighPercentage)), this._rampAttackTC = this._rampAttackTime / this.checkExpInput(i), i = Math.log(1 / this._rampLowPercentage), this._rampDecayTC = this._rampDecayTime / this.checkExpInput(i)
		}, p5.Env.prototype.setInput = function(t) {
			for (var e = 0; e < arguments.length; e++) this.connect(arguments[e])
		}, p5.Env.prototype.setExp = function(t) {
			this.isExponential = t
		}, p5.Env.prototype.checkExpInput = function(t) {
			return t <= 0 && (t = 1e-8), t
		}, p5.Env.prototype.play = function(e, i, o) {
			var n = (t.audiocontext.currentTime, i || 0),
				o = o || 0;
			e && this.connection !== e && this.connect(e), this.triggerAttack(e, n), this.triggerRelease(e, n + this.aTime + this.dTime + o)
		}, p5.Env.prototype.triggerAttack = function(e, i) {
			var o = t.audiocontext.currentTime,
				n = i || 0,
				r = o + n;
			this.lastAttack = r, this.wasTriggered = !0, e && this.connection !== e && this.connect(e);
			var s = this.control.getValueAtTime(r);
			this.control.cancelScheduledValues(r), 1 == this.isExponential ? this.control.exponentialRampToValueAtTime(this.checkExpInput(s), r) : this.control.linearRampToValueAtTime(s, r), r += this.aTime, 1 == this.isExponential ? (this.control.exponentialRampToValueAtTime(this.checkExpInput(this.aLevel), r), s = this.checkExpInput(this.control.getValueAtTime(r)), this.control.cancelScheduledValues(r), this.control.exponentialRampToValueAtTime(s, r)) : (this.control.linearRampToValueAtTime(this.aLevel, r), s = this.control.getValueAtTime(r), this.control.cancelScheduledValues(r), this.control.linearRampToValueAtTime(s, r)), r += this.dTime, 1 == this.isExponential ? (this.control.exponentialRampToValueAtTime(this.checkExpInput(this.dLevel), r), s = this.checkExpInput(this.control.getValueAtTime(r)), this.control.cancelScheduledValues(r), this.control.exponentialRampToValueAtTime(s, r)) : (this.control.linearRampToValueAtTime(this.dLevel, r), s = this.control.getValueAtTime(r), this.control.cancelScheduledValues(r), this.control.linearRampToValueAtTime(s, r))
		}, p5.Env.prototype.triggerRelease = function(e, i) {
			if (this.wasTriggered) {
				var o = t.audiocontext.currentTime,
					n = i || 0,
					r = o + n;
				e && this.connection !== e && this.connect(e);
				var s = this.control.getValueAtTime(r);
				this.control.cancelScheduledValues(r), 1 == this.isExponential ? this.control.exponentialRampToValueAtTime(this.checkExpInput(s), r) : this.control.linearRampToValueAtTime(s, r), r += this.rTime, 1 == this.isExponential ? (this.control.exponentialRampToValueAtTime(this.checkExpInput(this.rLevel), r), s = this.checkExpInput(this.control.getValueAtTime(r)), this.control.cancelScheduledValues(r), this.control.exponentialRampToValueAtTime(s, r)) : (this.control.linearRampToValueAtTime(this.rLevel, r), s = this.control.getValueAtTime(r), this.control.cancelScheduledValues(r), this.control.linearRampToValueAtTime(s, r)), this.wasTriggered = !1
			}
		}, p5.Env.prototype.ramp = function(e, i, o, n) {
			var r = t.audiocontext.currentTime,
				s = i || 0,
				a = r + s,
				u = this.checkExpInput(o),
				c = "undefined" != typeof n ? this.checkExpInput(n) : void 0;
			e && this.connection !== e && this.connect(e);
			var p = this.checkExpInput(this.control.getValueAtTime(a));
			this.control.cancelScheduledValues(a), u > p ? (this.control.setTargetAtTime(u, a, this._rampAttackTC), a += this._rampAttackTime) : u < p && (this.control.setTargetAtTime(u, a, this._rampDecayTC), a += this._rampDecayTime), void 0 !== c && (c > u ? this.control.setTargetAtTime(c, a, this._rampAttackTC) : c < u && this.control.setTargetAtTime(c, a, this._rampDecayTC))
		}, p5.Env.prototype.connect = function(e) {
			this.connection = e, (e instanceof p5.Oscillator || e instanceof p5.SoundFile || e instanceof p5.AudioIn || e instanceof p5.Reverb || e instanceof p5.Noise || e instanceof p5.Filter || e instanceof p5.Delay) && (e = e.output.gain), e instanceof AudioParam && e.setValueAtTime(0, t.audiocontext.currentTime), e instanceof p5.Signal && e.setValue(0), this.output.connect(e)
		}, p5.Env.prototype.disconnect = function(t) {
			this.output.disconnect()
		}, p5.Env.prototype.add = function(t) {
			var i = new e(t),
				o = this.mathOps.length,
				n = this.output;
			return p5.prototype._mathChain(this, i, o, n, e)
		}, p5.Env.prototype.mult = function(t) {
			var e = new i(t),
				o = this.mathOps.length,
				n = this.output;
			return p5.prototype._mathChain(this, e, o, n, i)
		}, p5.Env.prototype.scale = function(t, e, i, n) {
			var r = new o(t, e, i, n),
				s = this.mathOps.length,
				a = this.output;
			return p5.prototype._mathChain(this, r, s, a, o)
		}, p5.Env.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1);
			t.audiocontext.currentTime;
			this.disconnect();
			try {
				this.control.dispose(), this.control = null
			} catch (t) {}
			for (var i = 1; i < this.mathOps.length; i++) mathOps[i].dispose()
		}
	}(master, Tone_signal_Add, Tone_signal_Multiply, Tone_signal_Scale, Tone_signal_TimelineSignal, Tone_core_Tone);
	var pulse;
	pulse = function() {
		"use strict";

		function t() {
			for (var t = e.audiocontext, i = t.createBuffer(1, 2048, t.sampleRate), o = i.getChannelData(0), n = 0; n < 2048; n++) o[n] = 1;
			var r = t.createBufferSource();
			return r.buffer = i, r.loop = !0, r
		}
		var e = master;
		p5.Pulse = function(i, o) {
			p5.Oscillator.call(this, i, "sawtooth"), this.w = o || 0, this.osc2 = new p5.SawOsc(i), this.dNode = e.audiocontext.createDelay(), this.dcOffset = t(), this.dcGain = e.audiocontext.createGain(), this.dcOffset.connect(this.dcGain), this.dcGain.connect(this.output), this.f = i || 440;
			var n = this.w / this.oscillator.frequency.value;
			this.dNode.delayTime.value = n, this.dcGain.gain.value = 1.7 * (.5 - this.w), this.osc2.disconnect(), this.osc2.panner.disconnect(), this.osc2.amp(-1), this.osc2.output.connect(this.dNode), this.dNode.connect(this.output), this.output.gain.value = 1, this.output.connect(this.panner)
		}, p5.Pulse.prototype = Object.create(p5.Oscillator.prototype), p5.Pulse.prototype.width = function(t) {
			if ("number" == typeof t) {
				if (t <= 1 && t >= 0) {
					this.w = t;
					var e = this.w / this.oscillator.frequency.value;
					this.dNode.delayTime.value = e
				}
				this.dcGain.gain.value = 1.7 * (.5 - this.w)
			} else {
				t.connect(this.dNode.delayTime);
				var i = new p5.SignalAdd(-.5);
				i.setInput(t), i = i.mult(-1), i = i.mult(1.7), i.connect(this.dcGain.gain)
			}
		}, p5.Pulse.prototype.start = function(i, o) {
			var n = e.audiocontext.currentTime,
				r = o || 0;
			if (!this.started) {
				var s = i || this.f,
					a = this.oscillator.type;
				this.oscillator = e.audiocontext.createOscillator(), this.oscillator.frequency.setValueAtTime(s, n), this.oscillator.type = a, this.oscillator.connect(this.output), this.oscillator.start(r + n), this.osc2.oscillator = e.audiocontext.createOscillator(), this.osc2.oscillator.frequency.setValueAtTime(s, r + n), this.osc2.oscillator.type = a, this.osc2.oscillator.connect(this.osc2.output), this.osc2.start(r + n), this.freqNode = [this.oscillator.frequency, this.osc2.oscillator.frequency], this.dcOffset = t(), this.dcOffset.connect(this.dcGain), this.dcOffset.start(r + n), void 0 !== this.mods && void 0 !== this.mods.frequency && (this.mods.frequency.connect(this.freqNode[0]), this.mods.frequency.connect(this.freqNode[1])), this.started = !0, this.osc2.started = !0
			}
		}, p5.Pulse.prototype.stop = function(t) {
			if (this.started) {
				var i = t || 0,
					o = e.audiocontext.currentTime;
				this.oscillator.stop(i + o), this.osc2.oscillator.stop(i + o), this.dcOffset.stop(i + o), this.started = !1, this.osc2.started = !1
			}
		}, p5.Pulse.prototype.freq = function(t, i, o) {
			if ("number" == typeof t) {
				this.f = t;
				var n = e.audiocontext.currentTime,
					i = i || 0,
					o = o || 0,
					r = this.oscillator.frequency.value;
				this.oscillator.frequency.cancelScheduledValues(n), this.oscillator.frequency.setValueAtTime(r, n + o), this.oscillator.frequency.exponentialRampToValueAtTime(t, o + i + n), this.osc2.oscillator.frequency.cancelScheduledValues(n), this.osc2.oscillator.frequency.setValueAtTime(r, n + o), this.osc2.oscillator.frequency.exponentialRampToValueAtTime(t, o + i + n), this.freqMod && (this.freqMod.output.disconnect(), this.freqMod = null)
			} else t.output && (t.output.disconnect(), t.output.connect(this.oscillator.frequency), t.output.connect(this.osc2.oscillator.frequency), this.freqMod = t)
		}
	}(master, oscillator);
	var noise;
	noise = function() {
		"use strict";
		var t = master;
		p5.Noise = function(t) {
			var n;
			p5.Oscillator.call(this), delete this.f, delete this.freq, delete this.oscillator, n = "brown" === t ? o : "pink" === t ? i : e, this.buffer = n
		}, p5.Noise.prototype = Object.create(p5.Oscillator.prototype);
		var e = function() {
				for (var e = 2 * t.audiocontext.sampleRate, i = t.audiocontext.createBuffer(1, e, t.audiocontext.sampleRate), o = i.getChannelData(0), n = 0; n < e; n++) o[n] = 2 * Math.random() - 1;
				return i.type = "white", i
			}(),
			i = function() {
				var e, i, o, n, r, s, a, u = 2 * t.audiocontext.sampleRate,
					c = t.audiocontext.createBuffer(1, u, t.audiocontext.sampleRate),
					p = c.getChannelData(0);
				e = i = o = n = r = s = a = 0;
				for (var h = 0; h < u; h++) {
					var l = 2 * Math.random() - 1;
					e = .99886 * e + .0555179 * l, i = .99332 * i + .0750759 * l, o = .969 * o + .153852 * l, n = .8665 * n + .3104856 * l, r = .55 * r + .5329522 * l, s = -.7616 * s - .016898 * l, p[h] = e + i + o + n + r + s + a + .5362 * l, p[h] *= .11, a = .115926 * l
				}
				return c.type = "pink", c
			}(),
			o = function() {
				for (var e = 2 * t.audiocontext.sampleRate, i = t.audiocontext.createBuffer(1, e, t.audiocontext.sampleRate), o = i.getChannelData(0), n = 0, r = 0; r < e; r++) {
					var s = 2 * Math.random() - 1;
					o[r] = (n + .02 * s) / 1.02, n = o[r], o[r] *= 3.5
				}
				return i.type = "brown", i
			}();
		p5.Noise.prototype.setType = function(n) {
			switch (n) {
				case "white":
					this.buffer = e;
					break;
				case "pink":
					this.buffer = i;
					break;
				case "brown":
					this.buffer = o;
					break;
				default:
					this.buffer = e
			}
			if (this.started) {
				var r = t.audiocontext.currentTime;
				this.stop(r), this.start(r + .01)
			}
		}, p5.Noise.prototype.getType = function() {
			return this.buffer.type
		}, p5.Noise.prototype.start = function() {
			this.started && this.stop(), this.noise = t.audiocontext.createBufferSource(), this.noise.buffer = this.buffer, this.noise.loop = !0, this.noise.connect(this.output);
			var e = t.audiocontext.currentTime;
			this.noise.start(e), this.started = !0
		}, p5.Noise.prototype.stop = function() {
			var e = t.audiocontext.currentTime;
			this.noise && (this.noise.stop(e), this.started = !1)
		}, p5.Noise.prototype.dispose = function() {
			var e = t.audiocontext.currentTime,
				i = t.soundArray.indexOf(this);
			t.soundArray.splice(i, 1), this.noise && (this.noise.disconnect(), this.stop(e)), this.output && this.output.disconnect(), this.panner && this.panner.disconnect(), this.output = null, this.panner = null, this.buffer = null, this.noise = null
		}
	}(master);
	var audioin;
	audioin = function() {
		"use strict";
		var t = master;
		p5.AudioIn = function(e) {
			this.input = t.audiocontext.createGain(), this.output = t.audiocontext.createGain(), this.stream = null, this.mediaStream = null, this.currentSource = 0, this.enabled = !1, this.amplitude = new p5.Amplitude, this.output.connect(this.amplitude.input), "undefined" == typeof window.MediaStreamTrack ? e ? e() : window.alert("This browser does not support AudioIn") : "function" == typeof window.MediaStreamTrack.getSources && window.MediaStreamTrack.getSources(this._gotSources), t.soundArray.push(this)
		}, p5.AudioIn.prototype.start = function(e, i) {
			var o = this;
			if (t.inputSources[o.currentSource]) {
				var n = t.inputSources[o.currentSource].id,
					r = {
						audio: {
							optional: [{
								sourceId: n
							}]
						}
					};
				window.navigator.getUserMedia(r, this._onStream = function(i) {
					o.stream = i, o.enabled = !0, o.mediaStream = t.audiocontext.createMediaStreamSource(i), o.mediaStream.connect(o.output), e && e(), o.amplitude.setInput(o.output)
				}, this._onStreamError = function(t) {
					i ? i(t) : console.error(t)
				})
			} else window.navigator.getUserMedia({
				audio: !0
			}, this._onStream = function(i) {
				o.stream = i, o.enabled = !0, o.mediaStream = t.audiocontext.createMediaStreamSource(i), o.mediaStream.connect(o.output), o.amplitude.setInput(o.output), e && e()
			}, this._onStreamError = function(t) {
				i ? i(t) : console.error(t)
			})
		}, p5.AudioIn.prototype.stop = function() {
			this.stream && this.stream.getTracks()[0].stop()
		}, p5.AudioIn.prototype.connect = function(e) {
			e ? e.hasOwnProperty("input") ? this.output.connect(e.input) : e.hasOwnProperty("analyser") ? this.output.connect(e.analyser) : this.output.connect(e) : this.output.connect(t.input)
		}, p5.AudioIn.prototype.disconnect = function() {
			this.output.disconnect(), this.output.connect(this.amplitude.input)
		}, p5.AudioIn.prototype.getLevel = function(t) {
			return t && (this.amplitude.smoothing = t), this.amplitude.getLevel()
		}, p5.AudioIn.prototype._gotSources = function(t) {
			for (var e = 0; e < t.length; e++) {
				var i = t[e];
				if ("audio" === i.kind) return i
			}
		}, p5.AudioIn.prototype.amp = function(e, i) {
			if (i) {
				var o = i || 0,
					n = this.output.gain.value;
				this.output.gain.cancelScheduledValues(t.audiocontext.currentTime), this.output.gain.setValueAtTime(n, t.audiocontext.currentTime), this.output.gain.linearRampToValueAtTime(e, o + t.audiocontext.currentTime)
			} else this.output.gain.cancelScheduledValues(t.audiocontext.currentTime), this.output.gain.setValueAtTime(e, t.audiocontext.currentTime)
		}, p5.AudioIn.prototype.listSources = function() {
			return console.log("listSources is deprecated - please use AudioIn.getSources"), console.log("input sources: "), t.inputSources.length > 0 ? t.inputSources : "This browser does not support MediaStreamTrack.getSources()"
		}, p5.AudioIn.prototype.getSources = function(e) {
			"function" == typeof window.MediaStreamTrack.getSources ? window.MediaStreamTrack.getSources(function(i) {
				for (var o = 0, n = i.length; o < n; o++) {
					var r = i[o];
					"audio" === r.kind && t.inputSources.push(r)
				}
				e(t.inputSources)
			}) : console.log("This browser does not support MediaStreamTrack.getSources()")
		}, p5.AudioIn.prototype.setSource = function(e) {
			var i = this;
			t.inputSources.length > 0 && e < t.inputSources.length ? (i.currentSource = e, console.log("set source to " + t.inputSources[i.currentSource].id)) : console.log("unable to set input source")
		}, p5.AudioIn.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.stop(), this.output && this.output.disconnect(), this.amplitude && this.amplitude.disconnect(), this.amplitude = null, this.output = null
		}
	}(master, errorHandler);
	var filter;
	filter = function() {
		"use strict";
		var t = master;
		p5.Filter = function(e) {
			this.ac = t.audiocontext, this.input = this.ac.createGain(), this.output = this.ac.createGain(), this.biquad = this.ac.createBiquadFilter(), this.input.connect(this.biquad), this.biquad.connect(this.output), this.connect(), e && this.setType(e), t.soundArray.push(this)
		}, p5.Filter.prototype.process = function(t, e, i) {
			t.connect(this.input), this.set(e, i)
		}, p5.Filter.prototype.set = function(t, e, i) {
			t && this.freq(t, i), e && this.res(e, i)
		}, p5.Filter.prototype.freq = function(t, e) {
			var i = this,
				o = e || 0;
			return t <= 0 && (t = 1), "number" == typeof t ? (i.biquad.frequency.value = t, i.biquad.frequency.cancelScheduledValues(this.ac.currentTime + .01 + o), i.biquad.frequency.exponentialRampToValueAtTime(t, this.ac.currentTime + .02 + o)) : t && t.connect(this.biquad.frequency), i.biquad.frequency.value
		}, p5.Filter.prototype.res = function(t, e) {
			var i = this,
				o = e || 0;
			return "number" == typeof t ? (i.biquad.Q.value = t, i.biquad.Q.cancelScheduledValues(i.ac.currentTime + .01 + o), i.biquad.Q.linearRampToValueAtTime(t, i.ac.currentTime + .02 + o)) : t && freq.connect(this.biquad.Q), i.biquad.Q.value
		}, p5.Filter.prototype.setType = function(t) {
			this.biquad.type = t
		}, p5.Filter.prototype.amp = function(e, i, o) {
			var i = i || 0,
				o = o || 0,
				n = t.audiocontext.currentTime,
				r = this.output.gain.value;
			this.output.gain.cancelScheduledValues(n), this.output.gain.linearRampToValueAtTime(r, n + o + .001), this.output.gain.linearRampToValueAtTime(e, n + o + i + .001)
		}, p5.Filter.prototype.connect = function(t) {
			var e = t || p5.soundOut.input;
			this.output.connect(e)
		}, p5.Filter.prototype.disconnect = function() {
			this.output.disconnect()
		}, p5.Filter.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.input.disconnect(), this.input = void 0, this.output.disconnect(), this.output = void 0, this.biquad.disconnect(), this.biquad = void 0
		}, p5.LowPass = function() {
			p5.Filter.call(this, "lowpass")
		}, p5.LowPass.prototype = Object.create(p5.Filter.prototype), p5.HighPass = function() {
			p5.Filter.call(this, "highpass")
		}, p5.HighPass.prototype = Object.create(p5.Filter.prototype), p5.BandPass = function() {
			p5.Filter.call(this, "bandpass")
		}, p5.BandPass.prototype = Object.create(p5.Filter.prototype)
	}(master);
	var delay;
	delay = function() {
		"use strict";
		var t = master;
		p5.Delay = function() {
			this.ac = t.audiocontext, this.input = this.ac.createGain(), this.output = this.ac.createGain(), this._split = this.ac.createChannelSplitter(2), this._merge = this.ac.createChannelMerger(2), this._leftGain = this.ac.createGain(), this._rightGain = this.ac.createGain(), this.leftDelay = this.ac.createDelay(), this.rightDelay = this.ac.createDelay(), this._leftFilter = new p5.Filter, this._rightFilter = new p5.Filter, this._leftFilter.disconnect(), this._rightFilter.disconnect(), this._leftFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime), this._rightFilter.biquad.frequency.setValueAtTime(1200, this.ac.currentTime), this._leftFilter.biquad.Q.setValueAtTime(.3, this.ac.currentTime), this._rightFilter.biquad.Q.setValueAtTime(.3, this.ac.currentTime), this.input.connect(this._split), this.leftDelay.connect(this._leftGain), this.rightDelay.connect(this._rightGain), this._leftGain.connect(this._leftFilter.input), this._rightGain.connect(this._rightFilter.input), this._merge.connect(this.output), this.output.connect(p5.soundOut.input), this._leftFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime), this._rightFilter.biquad.gain.setValueAtTime(1, this.ac.currentTime), this.setType(0), this._maxDelay = this.leftDelay.delayTime.maxValue, t.soundArray.push(this)
		}, p5.Delay.prototype.process = function(t, e, i, o) {
			var n = i || 0,
				r = e || 0;
			if (n >= 1) throw new Error("Feedback value will force a positive feedback loop.");
			if (r >= this._maxDelay) throw new Error("Delay Time exceeds maximum delay time of " + this._maxDelay + " second.");
			t.connect(this.input), this.leftDelay.delayTime.setValueAtTime(r, this.ac.currentTime), this.rightDelay.delayTime.setValueAtTime(r, this.ac.currentTime), this._leftGain.gain.setValueAtTime(n, this.ac.currentTime), this._rightGain.gain.setValueAtTime(n, this.ac.currentTime), o && (this._leftFilter.freq(o), this._rightFilter.freq(o))
		}, p5.Delay.prototype.delayTime = function(t) {
			"number" != typeof t ? (t.connect(this.leftDelay.delayTime), t.connect(this.rightDelay.delayTime)) : (this.leftDelay.delayTime.cancelScheduledValues(this.ac.currentTime), this.rightDelay.delayTime.cancelScheduledValues(this.ac.currentTime), this.leftDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime), this.rightDelay.delayTime.linearRampToValueAtTime(t, this.ac.currentTime))
		}, p5.Delay.prototype.feedback = function(t) {
			if ("number" != typeof t) t.connect(this._leftGain.gain), t.connect(this._rightGain.gain);
			else {
				if (t >= 1) throw new Error("Feedback value will force a positive feedback loop.");
				this._leftGain.gain.exponentialRampToValueAtTime(t, this.ac.currentTime), this._rightGain.gain.exponentialRampToValueAtTime(t, this.ac.currentTime)
			}
		}, p5.Delay.prototype.filter = function(t, e) {
			this._leftFilter.set(t, e), this._rightFilter.set(t, e)
		}, p5.Delay.prototype.setType = function(t) {
			switch (1 === t && (t = "pingPong"), this._split.disconnect(), this._leftFilter.disconnect(), this._rightFilter.disconnect(), this._split.connect(this.leftDelay, 0), this._split.connect(this.rightDelay, 1), t) {
				case "pingPong":
					this._rightFilter.setType(this._leftFilter.biquad.type), this._leftFilter.output.connect(this._merge, 0, 0), this._rightFilter.output.connect(this._merge, 0, 1), this._leftFilter.output.connect(this.rightDelay), this._rightFilter.output.connect(this.leftDelay);
					break;
				default:
					this._leftFilter.output.connect(this._merge, 0, 0), this._leftFilter.output.connect(this._merge, 0, 1), this._leftFilter.output.connect(this.leftDelay), this._leftFilter.output.connect(this.rightDelay)
			}
		}, p5.Delay.prototype.amp = function(e, i, o) {
			var i = i || 0,
				o = o || 0,
				n = t.audiocontext.currentTime,
				r = this.output.gain.value;
			this.output.gain.cancelScheduledValues(n), this.output.gain.linearRampToValueAtTime(r, n + o + .001), this.output.gain.linearRampToValueAtTime(e, n + o + i + .001)
		}, p5.Delay.prototype.connect = function(t) {
			var e = t || p5.soundOut.input;
			this.output.connect(e)
		}, p5.Delay.prototype.disconnect = function() {
			this.output.disconnect()
		}, p5.Delay.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.input.disconnect(), this.output.disconnect(), this._split.disconnect(), this._leftFilter.disconnect(), this._rightFilter.disconnect(), this._merge.disconnect(), this._leftGain.disconnect(), this._rightGain.disconnect(), this.leftDelay.disconnect(), this.rightDelay.disconnect(), this.input = void 0, this.output = void 0, this._split = void 0, this._leftFilter = void 0, this._rightFilter = void 0, this._merge = void 0, this._leftGain = void 0, this._rightGain = void 0, this.leftDelay = void 0, this.rightDelay = void 0
		}
	}(master, filter);
	var reverb;
	reverb = function() {
		"use strict";
		var t = master,
			e = errorHandler;
		p5.Reverb = function() {
			this.ac = t.audiocontext, this.convolverNode = this.ac.createConvolver(), this.input = this.ac.createGain(), this.output = this.ac.createGain(), this.input.gain.value = .5, this.input.connect(this.convolverNode), this.convolverNode.connect(this.output), this._seconds = 3, this._decay = 2, this._reverse = !1, this._buildImpulse(), this.connect(), t.soundArray.push(this)
		}, p5.Reverb.prototype.process = function(t, e, i, o) {
			t.connect(this.input);
			var n = !1;
			e && (this._seconds = e, n = !0), i && (this._decay = i), o && (this._reverse = o), n && this._buildImpulse()
		}, p5.Reverb.prototype.set = function(t, e, i) {
			var o = !1;
			t && (this._seconds = t, o = !0), e && (this._decay = e), i && (this._reverse = i), o && this._buildImpulse()
		}, p5.Reverb.prototype.amp = function(e, i, o) {
			var i = i || 0,
				o = o || 0,
				n = t.audiocontext.currentTime,
				r = this.output.gain.value;
			this.output.gain.cancelScheduledValues(n), this.output.gain.linearRampToValueAtTime(r, n + o + .001), this.output.gain.linearRampToValueAtTime(e, n + o + i + .001)
		}, p5.Reverb.prototype.connect = function(t) {
			var e = t || p5.soundOut.input;
			this.output.connect(e.input ? e.input : e)
		}, p5.Reverb.prototype.disconnect = function() {
			this.output.disconnect()
		}, p5.Reverb.prototype._buildImpulse = function() {
			var t, e, i = this.ac.sampleRate,
				o = i * this._seconds,
				n = this._decay,
				r = this.ac.createBuffer(2, o, i),
				s = r.getChannelData(0),
				a = r.getChannelData(1);
			for (e = 0; e < o; e++) t = this.reverse ? o - e : e, s[e] = (2 * Math.random() - 1) * Math.pow(1 - t / o, n), a[e] = (2 * Math.random() - 1) * Math.pow(1 - t / o, n);
			this.convolverNode.buffer = r
		}, p5.Reverb.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.convolverNode && (this.convolverNode.buffer = null, this.convolverNode = null), "undefined" != typeof this.output && (this.output.disconnect(), this.output = null), "undefined" != typeof this.panner && (this.panner.disconnect(), this.panner = null)
		}, p5.Convolver = function(e, i, o) {
			this.ac = t.audiocontext, this.convolverNode = this.ac.createConvolver(), this.input = this.ac.createGain(), this.output = this.ac.createGain(), this.input.gain.value = .5, this.input.connect(this.convolverNode), this.convolverNode.connect(this.output), e ? (this.impulses = [], this._loadBuffer(e, i, o)) : (this._seconds = 3, this._decay = 2, this._reverse = !1, this._buildImpulse()), this.connect(), t.soundArray.push(this)
		}, p5.Convolver.prototype = Object.create(p5.Reverb.prototype), p5.prototype.registerPreloadMethod("createConvolver", p5.prototype), p5.prototype.createConvolver = function(t, e, i) {
			window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova && alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS");
			var o = new p5.Convolver(t, e, i);
			return o.impulses = [], o
		}, p5.Convolver.prototype._loadBuffer = function(t, i, o) {
			var t = p5.prototype._checkFileFormats(t),
				n = this,
				r = (new Error).stack,
				s = p5.prototype.getAudioContext(),
				a = new XMLHttpRequest;
			a.open("GET", t, !0), a.responseType = "arraybuffer", a.onload = function() {
				if (200 == a.status) s.decodeAudioData(a.response, function(e) {
					var o = {},
						r = t.split("/");
					o.name = r[r.length - 1], o.audioBuffer = e, n.impulses.push(o), n.convolverNode.buffer = o.audioBuffer, i && i(o)
				}, function(t) {
					var i = new e("decodeAudioData", r, n.url),
						s = "AudioContext error at decodeAudioData for " + n.url;
					o ? (i.msg = s, o(i)) : console.error(s + "\n The error stack trace includes: \n" + i.stack)
				});
				else {
					var u = new e("loadConvolver", r, n.url),
						c = "Unable to load " + n.url + ". The request status was: " + a.status + " (" + a.statusText + ")";
					o ? (u.message = c, o(u)) : console.error(c + "\n The error stack trace includes: \n" + u.stack)
				}
			}, a.onerror = function(t) {
				var i = new e("loadConvolver", r, n.url),
					s = "There was no response from the server at " + n.url + ". Check the url and internet connectivity.";
				o ? (i.message = s, o(i)) : console.error(s + "\n The error stack trace includes: \n" + i.stack)
			}, a.send()
		}, p5.Convolver.prototype.set = null, p5.Convolver.prototype.process = function(t) {
			t.connect(this.input)
		}, p5.Convolver.prototype.impulses = [], p5.Convolver.prototype.addImpulse = function(t, e, i) {
			window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova && alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS"), this._loadBuffer(t, e, i)
		}, p5.Convolver.prototype.resetImpulse = function(t, e, i) {
			window.location.origin.indexOf("file://") > -1 && "undefined" === window.cordova && alert("This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS"), this.impulses = [], this._loadBuffer(t, e, i)
		}, p5.Convolver.prototype.toggleImpulse = function(t) {
			if ("number" == typeof t && t < this.impulses.length && (this.convolverNode.buffer = this.impulses[t].audioBuffer), "string" == typeof t)
				for (var e = 0; e < this.impulses.length; e++)
					if (this.impulses[e].name === t) {
						this.convolverNode.buffer = this.impulses[e].audioBuffer;
						break
					}
		}, p5.Convolver.prototype.dispose = function() {
			for (var t in this.impulses) this.impulses[t] = null;
			this.convolverNode.disconnect(), this.concolverNode = null, "undefined" != typeof this.output && (this.output.disconnect(), this.output = null), "undefined" != typeof this.panner && (this.panner.disconnect(), this.panner = null)
		}
	}(master, errorHandler, sndcore);
	var Tone_core_TimelineState;
	Tone_core_TimelineState = function(t) {
		"use strict";
		return t.TimelineState = function(e) {
			t.Timeline.call(this), this._initial = e
		}, t.extend(t.TimelineState, t.Timeline), t.TimelineState.prototype.getStateAtTime = function(t) {
			var e = this.getEvent(t);
			return null !== e ? e.state : this._initial
		}, t.TimelineState.prototype.setStateAtTime = function(t, e) {
			this.addEvent({
				state: t,
				time: this.toSeconds(e)
			})
		}, t.TimelineState
	}(Tone_core_Tone, Tone_core_Timeline);
	var Tone_core_Clock;
	Tone_core_Clock = function(t) {
		"use strict";
		return t.Clock = function() {
			var e = this.optionsObject(arguments, ["callback", "frequency"], t.Clock.defaults);
			this.callback = e.callback, this._lookAhead = "auto", this._computedLookAhead = 1 / 60, this._threshold = .5, this._nextTick = -1, this._lastUpdate = 0, this._loopID = -1, this.frequency = new t.TimelineSignal(e.frequency, t.Type.Frequency), this.ticks = 0, this._state = new t.TimelineState(t.State.Stopped), this._boundLoop = this._loop.bind(this), this._readOnly("frequency"), this._loop()
		}, t.extend(t.Clock), t.Clock.defaults = {
			callback: t.noOp,
			frequency: 1,
			lookAhead: "auto"
		}, Object.defineProperty(t.Clock.prototype, "state", {
			get: function() {
				return this._state.getStateAtTime(this.now())
			}
		}), Object.defineProperty(t.Clock.prototype, "lookAhead", {
			get: function() {
				return this._lookAhead
			},
			set: function(t) {
				"auto" === t ? this._lookAhead = "auto" : this._lookAhead = this.toSeconds(t)
			}
		}), t.Clock.prototype.start = function(e, i) {
			return e = this.toSeconds(e), this._state.getStateAtTime(e) !== t.State.Started && this._state.addEvent({
				state: t.State.Started,
				time: e,
				offset: i
			}), this
		}, t.Clock.prototype.stop = function(e) {
			return e = this.toSeconds(e), this._state.getStateAtTime(e) !== t.State.Stopped && this._state.setStateAtTime(t.State.Stopped, e), this
		}, t.Clock.prototype.pause = function(e) {
			return e = this.toSeconds(e), this._state.getStateAtTime(e) === t.State.Started && this._state.setStateAtTime(t.State.Paused, e), this
		}, t.Clock.prototype._loop = function(e) {
			if (this._loopID = requestAnimationFrame(this._boundLoop), "auto" === this._lookAhead) {
				if (!this.isUndef(e)) {
					var i = (e - this._lastUpdate) / 1e3;
					this._lastUpdate = e, i < this._threshold && (this._computedLookAhead = (9 * this._computedLookAhead + i) / 10)
				}
			} else this._computedLookAhead = this._lookAhead;
			var o = this.now(),
				n = 2 * this._computedLookAhead,
				r = this._state.getEvent(o + n),
				s = t.State.Stopped;
			if (r && (s = r.state, this._nextTick === -1 && s === t.State.Started && (this._nextTick = r.time, this.isUndef(r.offset) || (this.ticks = r.offset))), s === t.State.Started)
				for (; o + n > this._nextTick;) {
					o > this._nextTick + this._threshold && (this._nextTick = o);
					var a = this._nextTick;
					this._nextTick += 1 / this.frequency.getValueAtTime(this._nextTick), this.callback(a), this.ticks++
				} else s === t.State.Stopped && (this._nextTick = -1, this.ticks = 0)
		}, t.Clock.prototype.getStateAtTime = function(t) {
			return this._state.getStateAtTime(t)
		}, t.Clock.prototype.dispose = function() {
			cancelAnimationFrame(this._loopID), t.TimelineState.prototype.dispose.call(this), this._writable("frequency"), this.frequency.dispose(), this.frequency = null, this._boundLoop = t.noOp, this._nextTick = 1 / 0, this.callback = null, this._state.dispose(), this._state = null
		}, t.Clock
	}(Tone_core_Tone, Tone_signal_TimelineSignal);
	var metro;
	metro = function() {
		"use strict";
		var t = master,
			e = Tone_core_Clock;
		t.audiocontext;
		p5.Metro = function() {
			this.clock = new e({
				callback: this.ontick.bind(this)
			}), this.syncedParts = [], this.bpm = 120, this._init(), this.tickCallback = function() {}
		};
		var i = 0,
			o = 0;
		p5.Metro.prototype.ontick = function(e) {
			var n = e - i,
				r = e - t.audiocontext.currentTime;
			if (!(n - o <= -.02)) {
				i = e;
				for (var s in this.syncedParts) {
					var a = this.syncedParts[s];
					if (!a.isPlaying) return;
					a.incrementStep(r);
					for (var u in a.phrases) {
						var c = a.phrases[u],
							p = c.sequence,
							h = this.metroTicks % p.length;
						0 !== p[h] && (this.metroTicks < p.length || !c.looping) && c.callback(r, p[h])
					}
				}
				this.metroTicks += 1, this.tickCallback(r)
			}
		}, p5.Metro.prototype.setBPM = function(e, i) {
			var n = 60 / (e * this.tatums),
				r = t.audiocontext.currentTime;
			o = n;
			var i = i || 0;
			this.clock.frequency.setValueAtTime(this.clock.frequency.value, r), this.clock.frequency.linearRampToValueAtTime(e, r + i), this.bpm = e
		}, p5.Metro.prototype.getBPM = function(t) {
			return this.clock.getRate() / this.tatums * 60
		}, p5.Metro.prototype._init = function() {
			this.metroTicks = 0
		}, p5.Metro.prototype.resetSync = function(t) {
			this.syncedParts = [t]
		}, p5.Metro.prototype.pushSync = function(t) {
			this.syncedParts.push(t)
		}, p5.Metro.prototype.start = function(e) {
			var i = e || 0,
				o = t.audiocontext.currentTime;
			this.clock.start(o + i), this.setBPM(this.bpm)
		}, p5.Metro.prototype.stop = function(e) {
			var i = e || 0,
				o = t.audiocontext.currentTime;
			this.clock._oscillator && this.clock.stop(o + i)
		}, p5.Metro.prototype.beatLength = function(t) {
			this.tatums = 1 / t / 4
		}
	}(master, Tone_core_Clock);
	var looper;
	looper = function() {
		"use strict";

		function t(t) {
			t.currentPart++, t.currentPart >= t.parts.length ? (t.scoreStep = 0, t.onended()) : (t.scoreStep = 0, t.parts[t.currentPart - 1].stop(), t.parts[t.currentPart].start())
		}
		var e = master,
			i = 120;
		p5.prototype.setBPM = function(t, o) {
			i = t;
			for (var n in e.parts) e.parts[n].setBPM(i, o)
		}, p5.Phrase = function(t, e, i) {
			this.phraseStep = 0, this.name = t, this.callback = e, this.sequence = i
		}, p5.Part = function(t, o) {
			this.length = t || 0, this.partStep = 0, this.phrases = [], this.isPlaying = !1, this.noLoop(), this.tatums = o || .0625, this.metro = new p5.Metro, this.metro._init(), this.metro.beatLength(this.tatums), this.metro.setBPM(i), e.parts.push(this), this.callback = function() {}
		}, p5.Part.prototype.setBPM = function(t, e) {
			this.metro.setBPM(t, e)
		}, p5.Part.prototype.getBPM = function() {
			return this.metro.getBPM()
		}, p5.Part.prototype.start = function(t) {
			if (!this.isPlaying) {
				this.isPlaying = !0, this.metro.resetSync(this);
				var e = t || 0;
				this.metro.start(e)
			}
		}, p5.Part.prototype.loop = function(t) {
			this.looping = !0, this.onended = function() {
				this.partStep = 0
			};
			var e = t || 0;
			this.start(e)
		}, p5.Part.prototype.noLoop = function() {
			this.looping = !1, this.onended = function() {
				this.stop()
			}
		}, p5.Part.prototype.stop = function(t) {
			this.partStep = 0, this.pause(t)
		}, p5.Part.prototype.pause = function(t) {
			this.isPlaying = !1;
			var e = t || 0;
			this.metro.stop(e)
		}, p5.Part.prototype.addPhrase = function(t, e, i) {
			var o;
			if (3 === arguments.length) o = new p5.Phrase(t, e, i);
			else {
				if (!(arguments[0] instanceof p5.Phrase)) throw "invalid input. addPhrase accepts name, callback, array or a p5.Phrase";
				o = arguments[0]
			}
			this.phrases.push(o), o.sequence.length > this.length && (this.length = o.sequence.length)
		}, p5.Part.prototype.removePhrase = function(t) {
			for (var e in this.phrases) this.phrases[e].name === t && this.phrases.splice(e, 1)
		}, p5.Part.prototype.getPhrase = function(t) {
			for (var e in this.phrases)
				if (this.phrases[e].name === t) return this.phrases[e]
		}, p5.Part.prototype.replaceSequence = function(t, e) {
			for (var i in this.phrases) this.phrases[i].name === t && (this.phrases[i].sequence = e)
		}, p5.Part.prototype.incrementStep = function(t) {
			this.partStep < this.length - 1 ? (this.callback(t), this.partStep += 1) : this.looping || this.partStep != this.length - 1 || (console.log("done"), this.onended())
		}, p5.Part.prototype.onStep = function(t) {
			this.callback = t
		}, p5.Score = function() {
			this.parts = [], this.currentPart = 0;
			var e = this;
			for (var i in arguments) this.parts[i] = arguments[i], this.parts[i].nextPart = this.parts[i + 1], this.parts[i].onended = function() {
				e.resetPart(i), t(e)
			};
			this.looping = !1
		}, p5.Score.prototype.onended = function() {
			this.looping ? this.parts[0].start() : this.parts[this.parts.length - 1].onended = function() {
				this.stop(), this.resetParts()
			}, this.currentPart = 0
		}, p5.Score.prototype.start = function() {
			this.parts[this.currentPart].start(), this.scoreStep = 0
		}, p5.Score.prototype.stop = function() {
			this.parts[this.currentPart].stop(), this.currentPart = 0, this.scoreStep = 0
		}, p5.Score.prototype.pause = function() {
			this.parts[this.currentPart].stop()
		}, p5.Score.prototype.loop = function() {
			this.looping = !0, this.start()
		}, p5.Score.prototype.noLoop = function() {
			this.looping = !1
		}, p5.Score.prototype.resetParts = function() {
			for (var t in this.parts) this.resetPart(t)
		}, p5.Score.prototype.resetPart = function(t) {
			this.parts[t].stop(), this.parts[t].partStep = 0;
			for (var e in this.parts[t].phrases) this.parts[t].phrases[e].phraseStep = 0
		}, p5.Score.prototype.setBPM = function(t, e) {
			for (var i in this.parts) this.parts[i].setBPM(t, e)
		}
	}(master);
	var soundRecorder;
	soundRecorder = function() {
		"use strict";

		function t(t, e) {
			for (var i = t.length + e.length, o = new Float32Array(i), n = 0, r = 0; r < i;) o[r++] = t[n], o[r++] = e[n], n++;
			return o
		}

		function e(t, e, i) {
			for (var o = i.length, n = 0; n < o; n++) t.setUint8(e + n, i.charCodeAt(n))
		}
		var i = master,
			o = i.audiocontext;
		p5.SoundRecorder = function() {
			this.input = o.createGain(), this.output = o.createGain(), this.recording = !1, this.bufferSize = 1024, this._channels = 2, this._clear(), this._jsNode = o.createScriptProcessor(this.bufferSize, this._channels, 2), this._jsNode.onaudioprocess = this._audioprocess.bind(this), this._callback = function() {}, this._jsNode.connect(p5.soundOut._silentNode), this.setInput(), i.soundArray.push(this)
		}, p5.SoundRecorder.prototype.setInput = function(t) {
			this.input.disconnect(), this.input = null, this.input = o.createGain(), this.input.connect(this._jsNode), this.input.connect(this.output), t ? t.connect(this.input) : p5.soundOut.output.connect(this.input)
		}, p5.SoundRecorder.prototype.record = function(t, e, i) {
			this.recording = !0, e && (this.sampleLimit = Math.round(e * o.sampleRate)), t && i ? this._callback = function() {
				this.buffer = this._getBuffer(), t.setBuffer(this.buffer), i()
			} : t && (this._callback = function() {
				this.buffer = this._getBuffer(), t.setBuffer(this.buffer)
			})
		}, p5.SoundRecorder.prototype.stop = function() {
			this.recording = !1, this._callback(), this._clear()
		}, p5.SoundRecorder.prototype._clear = function() {
			this._leftBuffers = [], this._rightBuffers = [], this.recordedSamples = 0, this.sampleLimit = null
		}, p5.SoundRecorder.prototype._audioprocess = function(t) {
			if (this.recording !== !1 && this.recording === !0)
				if (this.sampleLimit && this.recordedSamples >= this.sampleLimit) this.stop();
				else {
					var e = t.inputBuffer.getChannelData(0),
						i = t.inputBuffer.getChannelData(1);
					this._leftBuffers.push(new Float32Array(e)), this._rightBuffers.push(new Float32Array(i)), this.recordedSamples += this.bufferSize
				}
		}, p5.SoundRecorder.prototype._getBuffer = function() {
			var t = [];
			return t.push(this._mergeBuffers(this._leftBuffers)), t.push(this._mergeBuffers(this._rightBuffers)), t
		}, p5.SoundRecorder.prototype._mergeBuffers = function(t) {
			for (var e = new Float32Array(this.recordedSamples), i = 0, o = t.length, n = 0; n < o; n++) {
				var r = t[n];
				e.set(r, i), i += r.length
			}
			return e
		}, p5.SoundRecorder.prototype.dispose = function() {
			this._clear();
			var t = i.soundArray.indexOf(this);
			i.soundArray.splice(t, 1), this._callback = function() {}, this.input && this.input.disconnect(), this.input = null, this._jsNode = null
		}, p5.prototype.saveSound = function(i, o) {
			var n, r;
			n = i.buffer.getChannelData(0), r = i.buffer.numberOfChannels > 1 ? i.buffer.getChannelData(1) : n;
			var s = t(n, r),
				a = new ArrayBuffer(44 + 2 * s.length),
				u = new DataView(a);
			e(u, 0, "RIFF"), u.setUint32(4, 36 + 2 * s.length, !0), e(u, 8, "WAVE"), e(u, 12, "fmt "), u.setUint32(16, 16, !0), u.setUint16(20, 1, !0), u.setUint16(22, 2, !0), u.setUint32(24, 44100, !0), u.setUint32(28, 176400, !0), u.setUint16(32, 4, !0), u.setUint16(34, 16, !0), e(u, 36, "data"), u.setUint32(40, 2 * s.length, !0);
			for (var c = s.length, p = 44, h = 1, l = 0; l < c; l++) u.setInt16(p, s[l] * (32767 * h), !0), p += 2;
			p5.prototype.writeFile([u], o, "wav")
		}
	}(sndcore, master);
	var peakdetect;
	peakdetect = function() {
		"use strict";
		p5.PeakDetect = function(t, e, i, o) {
			this.framesPerPeak = o || 20, this.framesSinceLastPeak = 0, this.decayRate = .95, this.threshold = i || .35, this.cutoff = 0, this.cutoffMult = 1.5, this.energy = 0, this.penergy = 0, this.currentValue = 0, this.isDetected = !1, this.f1 = t || 40, this.f2 = e || 2e4, this._onPeak = function() {}
		}, p5.PeakDetect.prototype.update = function(t) {
			var e = this.energy = t.getEnergy(this.f1, this.f2) / 255;
			e > this.cutoff && e > this.threshold && e - this.penergy > 0 ? (this._onPeak(), this.isDetected = !0, this.cutoff = e * this.cutoffMult, this.framesSinceLastPeak = 0) : (this.isDetected = !1, this.framesSinceLastPeak <= this.framesPerPeak ? this.framesSinceLastPeak++ : (this.cutoff *= this.decayRate, this.cutoff = Math.max(this.cutoff, this.threshold))), this.currentValue = e, this.penergy = e
		}, p5.PeakDetect.prototype.onPeak = function(t, e) {
			var i = this;
			i._onPeak = function() {
				t(i.energy, e)
			}
		}
	}(master);
	var gain;
	gain = function() {
		"use strict";
		var t = master;
		p5.Gain = function() {
			this.ac = t.audiocontext, this.input = this.ac.createGain(), this.output = this.ac.createGain(), this.input.gain.value = .5, this.input.connect(this.output), t.soundArray.push(this)
		}, p5.Gain.prototype.setInput = function(t) {
			t.connect(this.input)
		}, p5.Gain.prototype.connect = function(t) {
			var e = t || p5.soundOut.input;
			this.output.connect(e.input ? e.input : e)
		}, p5.Gain.prototype.disconnect = function() {
			this.output.disconnect()
		}, p5.Gain.prototype.amp = function(e, i, o) {
			var i = i || 0,
				o = o || 0,
				n = t.audiocontext.currentTime,
				r = this.output.gain.value;
			this.output.gain.cancelScheduledValues(n), this.output.gain.linearRampToValueAtTime(r, n + o), this.output.gain.linearRampToValueAtTime(e, n + o + i)
		}, p5.Gain.prototype.dispose = function() {
			var e = t.soundArray.indexOf(this);
			t.soundArray.splice(e, 1), this.output.disconnect(), this.input.disconnect(), this.output = void 0, this.input = void 0
		}
	}(master, sndcore);
	var distortion;
	distortion = function() {
		"use strict";

		function t(t) {
			for (var e, i = "number" == typeof t ? t : 50, o = 44100, n = new Float32Array(o), r = Math.PI / 180, s = 0; s < o; ++s) e = 2 * s / o - 1, n[s] = (3 + i) * e * 20 * r / (Math.PI + i * Math.abs(e));
			return n
		}
		var e = master;
		p5.Distortion = function(i, o) {
			if ("undefined" == typeof i && (i = .25), "number" != typeof i) throw new Error("amount must be a number");
			if ("undefined" == typeof o && (o = "2x"), "string" != typeof o) throw new Error("oversample must be a String");
			var n = p5.prototype.map(i, 0, 1, 0, 2e3);
			this.ac = e.audiocontext, this.input = this.ac.createGain(), this.output = this.ac.createGain(), this.waveShaperNode = this.ac.createWaveShaper(), this.amount = n, this.waveShaperNode.curve = t(n), this.waveShaperNode.oversample = o, this.input.connect(this.waveShaperNode), this.waveShaperNode.connect(this.output), this.connect(), e.soundArray.push(this)
		}, p5.Distortion.prototype.process = function(t, e, i) {
			t.connect(this.input), this.set(e, i)
		}, p5.Distortion.prototype.set = function(e, i) {
			if (e) {
				var o = p5.prototype.map(e, 0, 1, 0, 2e3);
				this.amount = o, this.waveShaperNode.curve = t(o)
			}
			i && (this.waveShaperNode.oversample = i)
		}, p5.Distortion.prototype.getAmount = function() {
			return this.amount
		}, p5.Distortion.prototype.getOversample = function() {
			return this.waveShaperNode.oversample
		}, p5.Distortion.prototype.connect = function(t) {
			var e = t || p5.soundOut.input;
			this.output.connect(e)
		}, p5.Distortion.prototype.disconnect = function() {
			this.output.disconnect()
		}, p5.Distortion.prototype.dispose = function() {
			var t = e.soundArray.indexOf(this);
			e.soundArray.splice(t, 1), this.input.disconnect(), this.waveShaperNode.disconnect(), this.input = null, this.waveShaperNode = null, "undefined" != typeof this.output && (this.output.disconnect(), this.output = null)
		}
	}(master);
	var src_app;
	src_app = function() {
		"use strict";
		var t = sndcore;
		return t
	}(sndcore, master, helpers, errorHandler, panner, soundfile, amplitude, fft, signal, oscillator, env, pulse, noise, audioin, filter, delay, reverb, metro, looper, soundRecorder, peakdetect, gain, distortion)
});