var Roadie = function(w, d) {

	var map;
	var audio = new Audio();
	var fileExt;
	var canPlay;
	var useFile;
	var assetDir = 'assets';
	var firstTime;

	var playFunc = noop;

	function init(m, ad) {
		map = m;
		if(!!ad) {
			assetDir = ad
		}
	}

	function noop() {}

	function setup() {
		testFormat();
		testUseFile(function() {
			playFunc = useFile ? playFile : playSpriteEntry;

			if(map && !useFile) {
				firstTime = true;
			}
		});
	}

	function testFormat() {
		canPlay = true;
		if (audio.canPlayType('audio/mpeg') != "") {
			fileExt = "mp3";
		} else if (audio.canPlayType('audio/wav') != "") {
			fileExt = "wav";
		} else {
			canPlay = false;
		}
	}

	function testUseFile(cb) {
		try {
			if(canPlay) {
				
				audio.src = assetDir + "/1ssilence." + that.fileExt;
				
				try {
					audio.play();
					audio.addEventListener('timeupdate', function() {
						audio.pause();
						useFile = true;
						cb();
      				});

      				setTimeout(function() {
      					if(!useFile) {
      						useFile = false;
							cb();
      					}
      				}, 1000);
				} catch (e) {
					useFile = false;
					cb();
				}
			} else {
				useFile = false;
				cb();
			}
		} catch(ex) {
			canPlay = false;
			useFile = false;
			cb();
		}
	}


	function playFile(entry, callback) {
		try {
			if(canPlay && map) {
				var aud = new Audio();
				aud.src = map[entry].file + '.' + fileExt;
				aud.play();
				aud.addEventListener('ended', function() {
					if(!!callback) {
						callback();
					}
				});
			}
		} catch(ex) {}
	}

	function playSpriteEntry(entry, callback) {
		var that = this;
		try {
			if(firstTime) {
				audio = document.getElementById(map.soundSprite);
				firstTime = false;
			} else {
				audio.currentTime = map[entry].start;
			}

			if(canPlay && map && !!audio) {
				audio.play();
				var x = setInterval(function() {
					if(audio.currentTime > map[entry].end) {
						audio.pause();
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

	return {
		init: init,
		play: playFunc
	}
	
}(window, window.document);