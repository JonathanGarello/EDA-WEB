var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexTelefono=/^[0-9]{4}\-[0-9]{4}$/
function validar(){
    var error=false;
    var mensajesError="";
    if(document.getElementById("nombreyapellido").value==''){
        error=true;
        mensajesError+="<p>El campo nombre y apellido no puede estar vacío</p>";
    }
    if(!regexTelefono.test(document.getElementById("tel").value)){
        error=true;
        mensajesError+="<p>Tiene que ser un telefono valido</p>"
    }
    if (!regexEmail.test(document.getElementById("mail").value)){
        error=true;
        mensajesError+="<p>Tiene que ser un mail valido</p>"
    }
    if(error){
        document.getElementById("errores").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
}
const CANTIDAD=1000;
function contarCaracteres(){
    var caracteresEscritos=document.getElementById("nombre").value.length;
    var restantes=CANTIDAD-caracteresEscritos;
    if(restantes<=100){
        document.getElementById("caracteres").style.color="red";
    }else{
        document.getElementById("caracteres").style.color="black";
    }
    document.getElementById("caracteres").innerHTML=restantes;
}