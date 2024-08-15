/*
    Challenge: Funciones con arreglos
    Autor: Jean Paul Ordoñez Ibarguen
    Materia: Estructura de Datos 2
    
*/
let resultado = ""
let numero = parseInt(prompt("Ingrese el número: "))


function oldRegularFunction(numero){
    
    if (numero%2 === 0){
        resultado = numero + " es par"
    }else{
        resultado = "El numero es impar"
    }
    console.log(resultado)
    return resultado
}
oldRegularFunction(numero)


const newRegularFunction = function(numero){

    if (numero%2 === 0){
        resultado = "El numero es par"
    }else{
        resultado = "El numero es impar"
    }
    console.log(resultado)
    return resultado

}
newRegularFunction(numero)


const arrowFunction = (numero) =>{

    if (a%2 === 0){
        resultado = "El numero es par"
    }else{
        resultado = "El numero es impar"
    }
    console.log(resultado)
    return resultado
}
arrowFunction(numero)