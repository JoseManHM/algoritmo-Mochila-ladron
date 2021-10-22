'use strict'
var start = Date.now();//Comienza el contador = de ejecucion
//Copiamos nuestro JSON para modificarlo
var orden2;
function copiarJSON(){//Función que crea un nuevo JSON con los precios ordenados
    var articulosCopia = Object.entries(Object.assign({},data));//Se copia el JSON ingresado
    orden2 = articulosCopia.sort((a,b) => (a.costo < b.costo) ? 1 : (a.costo > b.costo) ? -1:0);
    console.log(orden2);
}

var jsonOrdenado = new Array();
function ordenar(json,propiedad){//Función que ordena los precios
    json.sort((a,b)=>{return b[propiedad] > a[propiedad]});
    for(var i = 0; i < json.length; i++){
        jsonOrdenado.push(json[i].peso);//Se agregan a un arreglo con los precios ordenados
    }
    console.log(jsonOrdenado);
}
function calcularArt(){//Función que calcula los elementos a robar
    //Capacidad de carga del costal
    const CapacidadCargaCostal = costal;
    var contenidoCostal = new Array();
    var suma = 0;
    var costo = 0;
    for(var i = 0; i < jsonOrdenado.length; i++){//Vamos a recorrer todo el arreglo
        var cantidad = orden2[i][1].cantidad;//Se obtienen las cantidades del JSON
        var articles = orden2[i][1].nombre;//Se obtienen los nombres de los articulos
        var pesoArticulo = orden2[i][1].peso;//Se obtiene el peso de cada articulo
        var costoUnitario = orden2[i][1].costo;//Se obtiene el costo de cada articulo
            while(jsonOrdenado[i] <= costal && cantidad !== 0 && suma <= CapacidadCargaCostal){//Si el articulo cabe en la bolsa
                var newRow = document.createElement("tr");
                contenidoCostal.push(jsonOrdenado[i]);//Se agrega cada articulo al arreglo de la bolsa
                cantidad -= 1;
                suma += contenidoCostal[i];
                costal -= jsonOrdenado[i];
                costo += orden2[i][1].costo;
                console.log("Articulo robado: "+articles);//Se muestran los datos de los articulos robados
                console.log("Precio articulo robado: "+costoUnitario);
                console.log("Monto robado: "+costo);
                console.log("Peso articulo robado: "+pesoArticulo);
                console.log("Peso libre costal: "+costal);
                var celdaNom = document.createElement("th");
                newRow.appendChild(celdaNom);
                var nombre = document.createTextNode(articles);
                celdaNom.appendChild(nombre);
                var celdaPes = document.createElement("th");
                newRow.appendChild(celdaPes);
                var peso = document.createTextNode(pesoArticulo);
                celdaPes.appendChild(peso);
                var celdaCos = document.createElement("th");
                newRow.appendChild(celdaCos);
                var costoU = document.createTextNode(costoUnitario);
                celdaCos.appendChild(costoU);
                document.getElementById("CuerpoTabla").appendChild(newRow);
                //break;
            }
            console.log("Articulos restantes: "+cantidad);
    }
    var sumaTotal = 0;//Se hace la suma de los articulos en el costal
    for(var x = 0; x < contenidoCostal.length; x++){
        sumaTotal += contenidoCostal[x];
    }
    var resultados = document.createElement("h4");
    var resultado1 = document.createTextNode("$ "+costo);
    resultados.appendChild(resultado1);
    document.getElementById("resultados").appendChild(resultados);
    var resultados1 = document.createElement("h4");
    var resultado2 = document.createTextNode(sumaTotal+" Kg");
    resultados1.appendChild(resultado2);
    document.getElementById("resultados1").appendChild(resultados1);
    console.log(contenidoCostal);
    console.log("Cantidad robada: "+costo);
    //console.log("Suma total del peso: "+suma);
    console.log("Peso robado: "+sumaTotal);//Se muestra la suma de los articulos robados
}
var costal;//Variable para definir la capacidad del costal
var data = [{}];//Arreglo JSON para guardar los elementos a robar
function InsertarData(){//Fucnión que permite ingresar los datos
    var numeroArticles = prompt("Ingrese el número de articulos: ");//Total de articulos existentes
    for(var i = 0; i < numeroArticles; i++){
        var nombre = prompt("Ingresa el nombre del articulo " + Number(i + 1) +": ");
        var peso = prompt("Ingresa el peso del articulo " + Number(i + 1) +": ");
        var costo = prompt("Ingresa el costo del articulo " + Number(i + 1) +": ");
        var cantidad = prompt("Ingresa la cantidad del articulo " + Number(i + 1) +": ");
        data.push({"cantidad":Number(cantidad),"costo":Number(costo),"nombre":nombre,"peso":Number(peso)});
    }
    data.shift();
    console.log(data);
    var cargaCostal;
    cargaCostal = prompt("Ingrese la capacidad de carga de la mochila: ");//Se ingresa la capacidad del costal
    costal = Number(cargaCostal);
    ordenar(data,"costo");
    copiarJSON();
    calcularArt();
}
InsertarData();
var end = Date.now();//Termina el contador de ejecucion
console.log("Tiempo de ejecucion: "+Number(end-start)+" ms");
var tiempo = document.createTextNode(Number(end-start)+" ms");//Se calcula el tiempo de ejecucion
document.getElementById("timeEj").appendChild(tiempo);//Se muestra el tiempo de ejecucion total