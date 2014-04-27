$("#button-on").live('click', function(){
	window.plugins.flashlight.available(function(isAvailable) {
	  if (isAvailable) {

		window.plugins.flashlight.switchOn();

	  } else {
		alert("Flashlight is not available on this device");
	  }
	});
});

$("#button-off").live('click', function(){
	window.plugins.flashlight.available(function(isAvailable) {
	  if (isAvailable) {

		window.plugins.flashlight.switchOff();

	  } else {
		alert("Flashlight is not available on this device");
	  }
	});
});