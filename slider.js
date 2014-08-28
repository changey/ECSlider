$(document).ready(function() {

  $("#slider-background").slider({
    min: 0,
    max: 100,
    value: 0,
		range: "min",
		animate: true,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
  });

  var myMedia = document.createElement('audio');
  $('#slider-container').append(myMedia);
  myMedia.id = "myMedia";

});


function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
}