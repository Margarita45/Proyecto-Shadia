let empleados= parseInt(prompt("Ingrese el numero de empleados"));
var i=0;
var suma = 0
var menos=0;
var mas=0;
const resultado = document.querySelector("#p");
const resultado1 = document.querySelector("#p-1");
const resultado2 = document.querySelector("#p-2");
while(i<empleados){
    i++;
    var sueldo = parseFloat(prompt("Ingrese el sueldo de los empleados"));
    suma= suma+ Number(sueldo);
    if((sueldo>=100) && (sueldo<=300)){
        var menos = menos+1

    }else{
        if(sueldo>300){
            var mas= mas+1;
        }
    }


    
}

resultado.textContent="El numero de empleados que ganan entren 100 y 300 es:" +menos;
resultado1.textContent="Los que ganan mas de 300 son:" +mas;
resultado2.textContent="El importe de la empresa en sueldos es:" +suma;

console.log(typeof empleados);
console.log(typeof sueldo);
console.log(typeof i);



