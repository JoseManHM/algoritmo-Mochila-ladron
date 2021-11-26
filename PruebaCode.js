function digitsSum(inputInt){
    var digitos = new String(inputInt);
    var suma = 0;
    for(var i = 0; i < digitos.length; i++){
        suma += Number(digitos[i]);
    }
    return suma;
}
digitsSum(111111111111);

function isPalindrome(inputStr){
    var cadenaInversa = inputStr.split("").reverse().join("");
    var resultado;
    if(inputStr === cadenaInversa){
        resultado = true
    }else{
        resultado = false;
    }
    return resultado;
}
isPalindrome("salas");

function maxAdjacentProd(inputArray){
    var arreglo = inputArray.split(",");
    var sumas = new Array();
    for(var i = 0; i < arreglo.length; i++){
        if(i+1 < arreglo.length){
            sumas.push(Number(arreglo[i])*Number(arreglo[i+1]));
        }
    }
    return(Math.max(...sumas));
}

maxAdjacentProd("3,6,-2,-5,7,3");