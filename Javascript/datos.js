document.querySelector('#FTI').addEventListener('click', FTI);
document.querySelector('#algebra').addEventListener('click', Algebra);
document.querySelector('#FProgra').addEventListener('click', FProgramacion);
document.querySelector('#Calculo').addEventListener('click', Calculo);
document.querySelector('#Quimica').addEventListener('click', Quimica);



function FTI(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/semestre1.xml', true);
    xhr.send();
}

function Algebra(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/semestre1.xml', true);
    xhr.send();
}

function Calculo(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './Data/S1/Data_Calculo.xml', true);
    xhr.send();
}

function Quimica(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './Data/S1/Data_Quimica.xml', true);
    xhr.send();
}

function FProgramacion(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            traerDatos(this);
        }
    };
    xhr.open("GET", './data/semestre1.xml', true);
    xhr.send();
}


function traerDatos(xml){

    var docXML = xml.responseXML;
    var tabla = "<tr> <th>N_Lista</th> <th>Nombre</th> <th>Apellido</th><th>Semestre</th><th>Nota 1</th> <th> Nota 2 </th> <th> Nota 3 </th><th> Asistencias </th> <th> Promedio </th> <th> Estado </th></tr>";

    var est=docXML.getElementsByTagName("record");
    for(var i=0; i<est.length; i++){

        var sum=(parseInt(est[i].getElementsByTagName("Nota_1")[0].textContent)+parseInt(est[i].getElementsByTagName("Nota_2")[0].textContent)+parseInt(est[i].getElementsByTagName("Nota_3")[0].textContent));
        let prom=(sum/3).toFixed(2);

        var asis =(parseInt(est[i].getElementsByTagName("N_Asistencias")[0].textContent));
        if( sum<30 || asis < 35){
            estado="Reprobado"
        }else if(sum>=30 && sum<42){
            estado="Suspenso"
        } else if(sum>=42 && sum <54 && asis >= 35){
            estado="Aprueba";
        }else if(sum>=55 && sum <=60 && asis >= 35){
            var estado="Exonerado";
        }
        

        tabla+= "<tr><td>"
        tabla += est[i].getElementsByTagName("numero_lista")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("nombre")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("apellido")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("semestre")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Nota_1")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Nota_2")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("Nota_3")[0].textContent;
        tabla+= "</td><td>"
        tabla += est[i].getElementsByTagName("N_Asistencias")[0].textContent;
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
    xhttp.open("GET", "./Data/S1/Data_FTI.xml", true);
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
    nota1 = document.querySelector('#Nota_1').value;
    nota2 = document.querySelector('#Nota_2').value,
    nota3 = document.querySelector('#Nota_3').value;
    asis1 = document.querySelector('#asistencia1').value;

    var yea=document.getElementById("info").rows.length;
    if( numero <= 30 & numero>=yea &  semestre == 1 & nota1 <= 20 & nota1 >= 0 & nota2 <= 20 & nota2 >= 0 & nota3 <= 20 & nota3 >= 0){
        var doc = new XMLWriter("./Data/S1/Data_FTI.xml");
        doc.BeginNode ("record");
        doc.Node ("numero_lista", numero, "nombre",nombre, "apellido", apellido, "semestre", semestre, "Nota_1", nota1, "Nota_2",nota2,"Nota_3", nota3, "N_Asistencias",asis1 );
        doc.EndNode ();
        doc.Close ();
    }else{
        alert('Verifique los datos ingresados');
    }
    
}
function downloadData(contentType,data,filename){
	 
    var link=document.createElement("A");
    link.setAttribute("href",encodeURI("data:"+contentType+","+data));
    link.setAttribute("style","display:none");
    link.setAttribute("download",filename);
    document.body.appendChild(link); 
    console.log(link.outerHTML);
    link.click();
    setTimeout(function(){
        document.body.removeChild(link);
    },1000);
 }
 
 function fromToXml(form){
     var xmldata=['<?xml version="1.0"?>'];
       xmldata.push("<dataset>");
     var inputs=form.elements;
     for(var i=0;i<inputs.length;i++){
         var el=document.createElement("estudiante");
        
       if (inputs[i].name){
           el.setAttribute("name",inputs[i].name);
          el.setAttribute("value",inputs[i].value);
         xmldata.push(el.outerHTML);
       }
       
     }
     xmldata.push("</dataset>");
     return xmldata.join("\n");
 }
 
 
 function download(frm){
 
     var data=fromToXml(frm);
   console.log(data);
   
   downloadData("text/xml",data,"export.xml");
 }