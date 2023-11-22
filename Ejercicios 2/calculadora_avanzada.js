function setValue(value) {
  var display = document.getElementById('display')
  if(display.value == "ERROR"){
    display.value = value
  }else{
    display.value += value
  }
}

function limpiar() {
  document.getElementById('display').value = '';
}

function calcular() {
  var resultado = eval(document.getElementById('display').value)
  if (isNaN(resultado) || !isFinite(resultado) || resultado == undefined) {
    document.getElementById('display').value = 'ERROR';
    return
  }
  try {
    document.getElementById('display').value = resultado;
  } catch (error) {
    document.getElementById('display').value = 'ERROR';
  }
}