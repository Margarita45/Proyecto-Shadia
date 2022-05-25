const formulario = document.querySelector("#formulario");
console.log(formulario)

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").Value;
    const apellido = document.querySelector("#apellido").Value;
    const edad = document.querySelector("#edad").Value;
})