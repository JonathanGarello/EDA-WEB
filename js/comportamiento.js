var regexTelefono=/^[0-9]{4}\-[0-9]{4}$/
var regexDNI=/^[0-9]+$/
var totalSintomas=0;
function contadorSintomas(){
    var opciones=document.getElementsByName("1");

    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            totalSintomas++;
        }
    } 
}
function contadorSintomas2(){
    var opciones=document.getElementsByName("4");
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            totalSintomas++;
        }
    } 
}
function contadorSintomas3(){
    var opciones=document.getElementsByName("6");
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            totalSintomas++;
        }
    } 
}
function contadorSintomas4(){
    var opciones=document.getElementsByName("8");
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            totalSintomas++;
        }
    } 
}
function contadorSintomas5(){
    var opciones=document.getElementsByName("dificultad");
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            totalSintomas++;
        }
    } 
}
function prueba(){
    var error=false;
    var mensajesError="";
    var opciones=document.getElementsByName("1");
    var opciones2=document.getElementsByName("4");
    var opciones3=document.getElementsByName("6");
    var opciones4=document.getElementsByName("8");
    var opciones5=document.getElementsByName("dificultad");
    if(document.getElementById("nombre").value==''){
        error=true;
        mensajesError+="<p>El campo nombre y apellido no puede estar vacío</p>";
    }
    if(!regexTelefono.test(document.getElementById("tele").value)){
        error=true;
        mensajesError+="<p>Tiene que ser un telefono valido</p>"
    }
    if(!regexDNI.test(document.getElementById("DNI").value)){
        error=true;
        mensajesError+="<p>Tiene que ser un DNI valido</p>"
    }
    if(!opciones[0].checked &&!opciones[1].checked ){
        error=true;
        mensajesError+="<p>debe chekear las casillas de fiebre</p>"
    }

    if(!opciones2[0].checked &&!opciones2[1].checked ){
        error=true;
        mensajesError+="<p>debe chekear las casillas de dolor de cabeza</p>"
    }

    if(!opciones3[0].checked &&!opciones3[1].checked ){
        error=true;
        mensajesError+="<p>debe chekear las casillas de tos</p>"
    }

    if(!opciones4[0].checked &&!opciones4[1].checked ){
        error=true;
        mensajesError+="<p>debe chekear las casillas dolor de garganta</p>"
    }

    if(!opciones5[0].checked &&!opciones5[1].checked ){
        error=true;
        mensajesError+="<p>debe chekear las casillas dificultad respiratoria</p>"
    }

    if(error){
        document.getElementById("error").innerHTML=mensajesError;
        return false;
    }else{
        contadorSintomas()
        contadorSintomas2()
        contadorSintomas3()
        contadorSintomas4()
        contadorSintomas5()
        document.getElementById("sintomas").innerHTML =  "El formulario fue completado correctamente. " + totalSintomas + " síntomas de COVID-19 fueron registrados" 
        return false;
    }
}

function cambiar(){
    var opciones=document.getElementsByName("tipo_si");
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById("desplegable").style.display="flex";
        }
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById("desplegable").style.display="none";
        }
    }
}
function cambiar2(){
    var opciones=document.getElementsByName("dificultad");
    for (i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById("magia").style.display="flex";
        }
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById("magia").style.display="none";
        }
    }
}

