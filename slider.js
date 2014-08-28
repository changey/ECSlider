$(document).ready(function() {

  $("#slider-background").slider({
    min: 0,
    max: 100,
    value: 0,
		range: "min",
		animate: true,
    slide: function(event, ui) {
      setValue((ui.value) / 100);
    }
  });

  var mySlider = document.createElement('value');
  $('#slider-container').append(mySlider);
  mySlider.id = "mySlider";

});


function setValue(myValue) {
    var mySlider = document.getElementById('mySlider');
    mySlider.value = myValue;
}