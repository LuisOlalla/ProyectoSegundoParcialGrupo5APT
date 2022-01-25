document.getElementById("aceptar").addEventListener("click",validarUsuarios);

function validarUsuarios(){
    var xhr= new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            validar(this);
        }
    };
    xhr.open("GET", "./data/usuarios.xml", true);
    xhr.send();
}


function validar(xml){
    
    var docXML = xml.responseXML;
    var usu = document.getElementById("usuario").value
    var con = document.getElementById("contraseña").value
    var est=docXML.getElementsByTagName("USUARIO");
    
    var b = false;
    
    for(var i=0; i<est.length; i++){
        var id = est[i].getElementsByTagName("ID")[0].textContent;
        var cont = est[i].getElementsByTagName("CONTRA")[0].textContent;
        if(usu == id & con == cont){
            window.location.href = "index.html";
            b = true;
        }

    }
    if(b == false){
        alert("Usuario y/o contraseña incorrecta");
    }
}
 
