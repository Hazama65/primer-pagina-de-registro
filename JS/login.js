const boton =document.getElementById("btnLogin");
const inputUsuario =document.getElementById("usuario");
const inputPassword =document.getElementById("password");

const validations=(event)=>{
    let mensaje="";
    if(inputUsuario.value && inputUsuario.value.length >0){
        if(inputPassword.value && inputPassword.value.length >0){
            mensaje='Campos correctos';
        }else{
            mensaje='Faltan datos';
        }
    }else{
        mensaje='Campos incorrecto';
    }
    alert(mensaje);
}


boton.addEventListener("click", validations);
