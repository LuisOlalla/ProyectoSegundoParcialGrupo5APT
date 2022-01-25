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

    //Variable obserbacion
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


    document.getElementById('algebra').addEventListener('select', CargarDatosAlgebra)


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
