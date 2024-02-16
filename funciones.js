function getVarsUrl(){
    var url= location.search.replace("?", "");
    var arrUrl = url.split("&");
    var urlObj={};
    var variable = ""; 
    var valor = ""; 
    for(var i=0; i<arrUrl.length; i++){
    var x= arrUrl[i].split("=");
    variable = x[0]; 
    valor = x[1]; 
	urlObj[variable] = valor; 
    //urlObj[x[0]]=x[1]
    }
    return urlObj;
}
function Escribir(){
    var misVariablesGet = getVarsUrl(); 
    document.getElementById("nombreja1").innerHTML=misVariablesGet["nombre1"];
    document.getElementById("apellidoja1").innerHTML=misVariablesGet["apellido1"];
    document.getElementById("nombreja2").innerHTML=misVariablesGet["nombre2"];
    document.getElementById("apellidoja2").innerHTML=misVariablesGet["apellido2"];
    document.getElementById("nombreja3").innerHTML=misVariablesGet["nombre3"];
    document.getElementById("apellidoja3").innerHTML=misVariablesGet["apellido3"];
}
