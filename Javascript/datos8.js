document.querySelector('#GS').addEventListener('click', GS);
document.querySelector('#AS').addEventListener('click', AS);
document.querySelector('#GE').addEventListener('click', GE);
document.querySelector('#TE').addEventListener('click', TE);



function GS(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/fti.xml', true);
    xhr.send();
}

function AS(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/algebra.xml', true);
    xhr.send();
}

function GE(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/calculo.xml', true);
    xhr.send();
}

function TE(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/fundamentos.xml', true);
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


document.getElementById('ag').addEventListener('click',guardarGS    )

function guardarGS(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "./data/fti.xml", true);
    xhttp.send();
}

function myFunction(xml) {
    var numero = document.querySelector('#N_lista').value,
    nombre = document.querySelector('#Nombre').value,
    apellido = document.querySelector('#Apellido').value;
    semestre = document.querySelector('#semestre').value,
    nota1 = document.querySelector('#Nota_1').value;
    nota2 = document.querySelector('#Nota_2').value,
    nota3 = document.querySelector('#Nota_3').value;
    asis1 = document.querySelector('#asistencia1').value;

    var yea=document.getElementById("info").rows.length;
    if( numero <= 30 & numero>=yea &  semestre == 1 & nota1 <= 20 & nota1 >= 0 & nota2 <= 20 & nota2 >= 0 & nota3 <= 20 & nota3 >= 0){
        xmlDoc = xml.responseXML;
        newElement = xmlDoc.createElement("record");
        x = xmlDoc.getElementsByTagName("numero_lista")[0] = numero
        x.appendChild(newElement);
    }else{
        alert('Verifique los datos ingresados');
    }
    
}

function xmledit() {
    var numero = document.querySelector('#N_lista').value,
    nombre = document.querySelector('#Nombre').value,
    apellido = document.querySelector('#Apellido').value;
    semestre = document.querySelector('#semestre').value,
    Parcial1 = document.querySelector('#Nota_1').value;
    nota2 = document.querySelector('#Nota_2').value,
    nota3 = document.querySelector('#Nota_3').value;
    asis1 = document.querySelector('#asistencia1').value;

    var yea=document.getElementById("info").rows.length;
    if( numero <= 30 & numero>=yea &  semestre == 1 & nota1 <= 20 & nota1 >= 0 & nota2 <= 20 & nota2 >= 0 & nota3 <= 20 & nota3 >= 0){
        var doc = new XMLWriter("./Data/S1/Data_FTI.xml");
        doc.BeginNode ("estudiante");
        doc.Node ( "nombre",nombre, "apellido", apellido, "Parcial1", Parcial1, "Nota_2",nota2,"Nota_3", nota3, "N_Asistencias",asis1 );
        doc.EndNode ();
        doc.Close ();
    }else{
        alert('Verifique los datos ingresados');
    }
    
}