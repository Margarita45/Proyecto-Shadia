let personas= parseInt(prompt("Ingrese el numero de personas"));
i=0;
const resultado = document.querySelector("#p");
const resultado1 = document.querySelector("#p-1");
while(i<personas){
i++;
var altura = parseInt(prompt("Ingrese la altura de las personas"));
}
let sa= i+altura
resultado.textContent="La suma de las alturas es de:" +sa;
let promedio= (sa/personas)
resultado1.textContent="El promedio de las personas es:" +promedio;

console.log(typeof personas);
console.log(typeof altura);
