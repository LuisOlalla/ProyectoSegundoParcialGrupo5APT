document.querySelector('#iw').addEventListener('click', IW);
document.querySelector('#gbd').addEventListener('click', GBD);
document.querySelector('#aso').addEventListener('click', ASO);
document.querySelector('#rl').addEventListener('click', RN);
document.querySelector('#tw').addEventListener('click', TW);



function IW(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/internetworking.xml', true);
    xhr.send();
}

function GBD(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/algebra.xml', true);
    xhr.send();
}

function ASO(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/2/CD.xml', true);
    xhr.send();
}

function RN(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/fundamentos.xml', true);
    xhr.send();
}

function TW(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/fti.xml', true);
    xhr.send();
}


function traerDatos(xml){

    var docXML = xml.responseXML;
    var tabla = "<tr> <th>Nombre</th> <th>Apellido</th> <th>Parcial1</th><th>Parcial2</th><th>Parcial3</th> <th> Asistencia</th><th> Promedio</th><th> Estado</th> </tr>";

    var est=docXML.getElementsByTagName("estudiante");
    for(var i=0; i<est.length; i++){

        var sum=(parseInt(est[i].getElementsByTagName("Parcial1")[0].textContent)+parseInt(est[i].getElementsByTagName("Parcial2")[0].textContent)+parseInt(est[i].getElementsByTagName("Parcial3")[0].textContent));
        let prom=(sum/3).toFixed(2);

        var asis =(parseInt(est[i].getElementsByTagName("Asistencia")[0].textContent));
        if( sum<30 || asis < 14){
            estado="Reprobado"
        }else if(sum>=30 && sum<42){
            estado="Suspenso"
        } else if(sum>=42 && sum <54 && asis >= 14){
            estado="Aprueba";
        }else if(sum>=55 && sum <=60 && asis >= 14){
            var estado="Exonerado";
        }
        

        tabla+= "<tr><td>"
        tabla += est[i].getElementsByTagName("Nombre")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Apellido")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Parcial1")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Parcial2")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Parcial3")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Asistencia")[0].textContent;
        tabla+= "</td><td>"
        
       
        tabla += prom;
        tabla+= "</td><td>"
        tabla += estado;
        tabla+= "</td></tr>"
        
        
    }
    document.getElementById("info").innerHTML = tabla;
}


document.getElementById('ag').addEventListener('click',guardarFTI    )

function guardarFTI(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "./data/fti.xml", true);
    xhttp.send();
}
