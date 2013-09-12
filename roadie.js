var Roadie = function(w, d) {

	var map;
	var audio = new Audio();


	var init = function(m) {
		map = m;
	}
	
	/*Soundmanager.prototype = {
	
		constructor: Soundmanager

		, testFormat : function() {
			this.canPlay = true;
			if (this.audio.canPlayType('audio/mpeg') != "") {
				this.fileExt = "mp3";
			} else if (this.audio.canPlayType('audio/wav') != "") {
				this.fileExt = "wav";
			} else {
				this.canPlay = false;
			}
		}

		, setup : function() {
			var that = this;
			that.testFormat();
			that.testUseFile(function () {
				that.play = that.useFile ? that.playFile : that.playSpriteEntry;
				if(that.map && !that.useFile) {
					that.firstTime = true;
				}
			});
		}

		, testUseFile : function( callback ) {
			var that = this;
			try {
				if(that.canPlay) {
					that.audio.src = "/touchgames/luckyjoker/varRes/sound/1ssilence." + that.fileExt;
					try {
						that.audio.play();
						that.audio.addEventListener('timeupdate', function() {
							that.audio.pause();
							that.useFile = true;
							callback();
	      				});

	      				LJ.setTimeout(function() {
	      					if(!that.useFile) {
	      						that.useFile = false;
								callback();
	      					}
	      				}, 500);
					} catch (e) {
						that.useFile = false;
						callback();
					}
				} else {
					that.useFile = false;
					callback();
				}
			} catch(ex) {}
		}

		, playFile : function( entry , callback ) {
			var that = this;
			try {
				if(that.canPlay && that.map && LJ.settings.sound) {
					var aud = new Audio();
					aud.src = that.map[entry].file + that.fileExt;
					aud.play();
					aud.addEventListener('ended', function() {
						if(callback) {
							callback();
						}
					});
				}
			} catch(ex) {}
		}

		, playSpriteEntry : function ( entry , callback ) {
			var that = this;
			try {
				if(that.firstTime) {
					that.audio = document.getElementById(that.map.soundSprite);
					that.firstTime = false;
				} else {
					that.audio.currentTime = that.map[entry].start;
				}

				if(that.canPlay && that.map && LJ.settings.sound) {
					that.audio.play();
					var x = setInterval(function() {
						if(that.audio.currentTime > that.map[entry].end) {
							that.audio.pause();
							if(callback) {
								callback();
							}
							clearInterval(x);
						}
					}, 20);
				}
			} catch(ex) {
				console.log("Me cannot play no more: "+ex.message);
			}
		}
		
	}*/

	return {
		init: init
	}
	
}(window, window.document);