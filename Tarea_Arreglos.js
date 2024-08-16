/*
    Challenge: Funciones con arreglos
    Autor: Jean Paul Ordoñez Ibarguen
    Materia: Estructura de Datos 2
    
*/
let resultado = ""
let numero = parseInt(prompt("Ingrese el número: "))


function funcionRegularAntigua(numero){
    
    if (numero % 2 === 0){
        resultado = numero + " es par"
    }else{
        resultado = "El " + numero + " es impar"
    }
    console.log(resultado)
    return resultado
}
funcionRegularAntigua(numero)


const funcionRegularNueva = function(numero){

    if (numero % 2 === 0){
        resultado = numero + " es par"
    }else{
        resultado = "El " + numero + " es impar"
    }
    console.log(resultado)
    return resultado

}
funcionRegularNueva(numero)


const funcionFlecha = (numero) =>{

    if (numero % 2 === 0){
        resultado = numero + " es par"
    }else{
        resultado = "El " + numero + " es impar"
    }
    console.log(resultado)
    return resultado
}
funcionFlecha(numero)