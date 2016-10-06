if (window.jQuery === undefined) {
    var script    = document.createElement( 'script' );
    script.src    = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = function() { fillForm; }
    document.body.appendChild(script);
}
else {
    fillForm();
}
function fillForm() {
	var inputs, index;

	inputs = document.getElementsByTagName('input');
	console.log(inputs);
	inputs[0].value = 'Tobias';
	inputs[1].value = 'Gustafsson';
	inputs[2].value = '870704';
	inputs[3].value = 'tobias.gustafsson@gmail.com';
}