//Capturar datos
var capturar = function() {     
    var resultado = document.getElementById("alert").value
    console.log(resultado)
}


//  Sumar
function sumar() {
    var num1 = Number(document.getElementById("numero1").value)
    var num2 = Number(document.getElementById("numero2").value)
    alert(num1 + num2)
}

//  Restar
var restar = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    alert(num1 - num2)   
}

//  Multiplicar
var multiplicar = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    alert(num1 * num2)   
}

//  Dividir
var dividir = function() {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    alert(num1 / num2)   
}


