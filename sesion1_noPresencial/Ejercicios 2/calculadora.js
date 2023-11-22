function sumar() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    if (num1.value == "" || num2.value == "") {
        alert("Debe ingresar los dos numeros");
    } else {
        var resultadoSuma = parseInt(num1.value) + parseInt(num2.value)
        if(isNaN(resultadoSuma)){
            alert("Error al realizar la multiplicación")
            return
        }
        resultado.innerHTML = "Resultado: " + resultadoSuma
        num1.value = ""
        num2.value = ""
    }
}

function restar() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    if (num1.value == "" || num2.value == "") {
        alert("Debe ingresar los dos numeros");
    } else {
        var resultadoRestar = parseInt(num1.value) - parseInt(num2.value)
        if(isNaN(resultadoRestar)){
            alert("Error al realizar la multiplicación")
            return
        }
        resultado.innerHTML = "Resultado: " + resultadoRestar
        num1.value = ""
        num2.value = ""
    }
}

function multiplicar() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    if (num1.value == "" || num2.value == "") {
        alert("Debe ingresar los dos numeros");
    } else {
        var resultadoMultiplicar = parseInt(num1.value) * parseInt(num2.value)
        if(isNaN(resultadoMultiplicar)){
            alert("Error al realizar la multiplicación")
            return
        }
        resultado.innerHTML = "Resultado: " + resultadoMultiplicar
        num1.value = ""
        num2.value = ""
    }
}

function dividir() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    if (num1.value == "" || num2.value == "") {
        alert("Debe ingresar los dos numeros");
    } else {
        var resultadoDivision = parseInt(num1.value) / parseInt(num2.value)
        if(isNaN(resultadoDivision) || !isFinite(resultadoDivision)){
            alert("Error al realizar la división")
            return
        }
        resultado.innerHTML = "Resultado: " + resultadoDivision
        num1.value = ""
        num2.value = ""
    }
}