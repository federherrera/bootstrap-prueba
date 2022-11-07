function realizarCalculo() {
  let cantidad = document.getElementById('inputCantidad').value;
  let categoria = document.getElementById('inputCategoria').value;

  let $resultado = document.getElementById('resultado');

  $resultado.value = Math.round(200 * cantidad * (1 - categoria));
}