var $input = document.querySelector('#input');
var $divSaida = document.querySelector('#saida');

$input.addEventListener('keyup', function() {
	decimalParaBinario(parseInt($input.value));
});

$input.focus();

function decimalParaBinario(x) {
	if (x || x==0) {
		$divSaida.innerHTML = x.toString(2);
	} else {
		$divSaida.innerHTML = null;
	}
}