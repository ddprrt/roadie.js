roadie.js
=========

Roadies help you bringing your sound on tour. Roadie.js helps you getting your sound on mobile devices

## The feature test

Most mobile browsers handle audio different than their desktop counterparts. Most Webkit browsers
don't allow audio playing by mere JavaScript calls and require user interactions, whereas IE on
Windows Phone systems don't have write access for the `currentTime` property.

A solution is to use [sound sprites](http://www.fettblog.eu/blog/2012/04/08/html5-audio-on-mobile-devices/)
on Webkit browsers and traditional file playing on other systems.

roadie.js will check which method to use with a feature test. It tries to play one second of silence using a
JavaScript event, and if it fails switches to sound sprite play mode. Make sure to start playing your first
sound file directly after a user interaction.

## Usage

Include roadie.js and its assets in your file. To set it up, provide a map with all its necessary contents:

```
&lt;audio id="mysprite"&gt;
  &lt;source src="asset/myaudio.mp3"&gt;
  &lt;source src="asset/myaudio.wav"&gt;
&lt;/audio&gt;
```

```
Roadie.init({
    soundSprite: 'mysprite', //ID of your audio element
    'soundOne': {
        start: 0,
        end: 1000,
        file: 'soundOne'
    },
    'soundTwo': {
        start: 1000,
        end: 2000,
        file: 'soundTwo'
    }
});
```

Provide your files as MP3 and WAV. roadie.js will check which one to use.

Play your files by addressing the sprite entry (make sure the first playback is directly after a click or touch event):

```
Roadie.play('soundOne');
```

## Options

### Provide a different assets directory:

Standard is the `assets` directory found in this project

```
Roadie.init(map, 'path/to/assets');
```

### Use callbacks

Once a file is played you can call a function:

```
Roadie.play('soundOne', function() {
    Roadie.play('soundTwo');
});
```
