
const formulario = document.querySelector('#formulario')
/*function limpiar(){
    document.getElementById('formulario').reset();//<button onclick="limpiar();">Limpiar</button>
function enviar()
{
    console.log(nombre1,nombre2,nombre3)
}*/
formulario.addEventListener("submit", validar)
function validar(e){
    e.preventDefault();
    const nombres = document.querySelector("#nombre").value
    const apellidos = document.querySelector("#apellidos").value
    const apodo = document.querySelector("#apodo").value
    console.log(nombres,apellidos,apodo)
}

