
const formulario = document.querySelector('#formulario')
function limpiar(){
    document.getElementById('formulario').reset();
}


//formulario.addEventListener("submit", validar)
function enviar(e){
    e.preventDefault();
    const nombres = document.querySelector("#nombre").value
    const apellidos = document.querySelector("#apellidos").value
    const apodo = document.querySelector("#apodo").value
    console.log(nombres,apellidos,apodo)
}

