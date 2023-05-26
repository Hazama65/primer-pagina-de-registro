const boton =document.getElementById("btnLogin");
const inputUsuario =document.getElementById("usuario");
const inputPassword =document.getElementById("password");
const inputCorreo =document.getElementById("correo");


const validations=(event)=>{
    let mensaje="";
    if(inputUsuario.value && inputUsuario.value.length >0 && inputPassword.value && inputPassword.value.length >0 && inputCorreo.value && inputCorreo.value.length >0){
        mensaje='Campos correctos';}
        else{
        mensaje='Campos incorrecto';
    }
    alert(mensaje);
}


boton.addEventListener("click", validations);
