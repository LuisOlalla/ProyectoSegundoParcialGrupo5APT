// Copyright 2021 JUSTINO RAMOS STUDENT

/**
 * (TRABAJO PRACTICO)
 *
 * @author juscoder
 */
function agregarNotas() {

    let nom = document.getElementById('nombre').value;
    let not1 = document.getElementById('nota1').value;
    let not2 = document.getElementById('nota2').value;
    let not3 = document.getElementById('nota3').value;

    //Validadr el campo nombre
    if (nom === "") {

        swal("Ingrese el nombre del Estudiante", "El campo de nombre no puede ser vacio", "warning"); return false;
    }
    // Validar las notas si estan vacias
    if (not1 === "" || not2 === "" || not3 === "") {

        swal("Ingese las notas por favor", "La notas no pueden ser vacios", "warning"); return false;

    }
    //Validar las notas, no mayor de 21 puntos, solo asta 20
    if (not1 >= 21 || not2 >= 21 || not3 >= 21) {
        alert("la nota no puede ser mas de 20")
        return false;
    }

    //Promediar la suma de las notas entre 3
    var prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

    //Variable observacion
    var obs = 0;
    //Promedio menor o igual a 14 entonces aprobado, caso ocntrario aprobado
    if (prom >= 14 && prom <= 19) {
        obs = value = "!Aprobado¡ &#x2714";
    } else
        if (prom >= 19 && prom >= 20) {
            obs = value = "!Exonerado¡ &#x2714";
        } else
            if (prom >= 2 && prom <= 10) {
                obs = value = "!Desaprobado¡ &#x274c";
            } else {
                obs = value = "!Suspenso¡ ⚠️";

            }
        

    const tabla = document.getElementById('addtabla');

    const fila = document.createElement('tr');


    fila.innerHTML = `<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3} </td><td> ${prom.toFixed(1)} </td><td> ${obs} </td>`;


    document.querySelector('#algebra').addEventListener('change', CargarDatosAlgebra)

    
        function CargarDatosAlgebra(){
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
            var tabla = "";
        
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
            document.getElementById("addtabla").innerHTML = tabla;
        }

    


    tabla.appendChild(fila);

    if (prom >= 19 && prom >= 20) {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#0af00a";
    }else
    if(prom > 14){
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#b3deba";
    }else
    if(prom < 10){
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#ff4d4d";

    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(5)").style.background = "#FFCABA";
    }
    if (not1 > 14) {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(2)").style.color = "red";
    }
    if (not2 > 14) {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(3)").style.color = "red";
    }
    if (not3 > 14) {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "blue";
    } else {
        document.querySelector("#addtabla tr:last-child td:nth-child(4)").style.color = "red";
    }



    document.getElementById('nombre').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';


}
