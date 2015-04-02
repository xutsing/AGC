// JavaScript Document
$(function(){ 
	$('<audio id="chatAudio"><source src="sound/notify.ogg" type="audio/ogg"><source src="sound/notify.mp3" type="audio/mpeg"><source src="sound/notify.wav" type="audio/wav"></audio>').appendTo('body');
	$("a").mouseover(function(){
			$('#chatAudio')[0].play();
	});
});