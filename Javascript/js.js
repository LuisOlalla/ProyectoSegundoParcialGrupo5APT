var datos = [];

function registrar() {
    var nombre = document.getElementById('alumno').value;
    var asignatura = document.getElementById('asignatura').value;
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;
    var p3 = document.getElementById('p3').value;
    


    datos.push({
        'alumno': nombre,
        'asignatura': asignatura,
        'parcial1': p1,
        'parcial2': p2,
        'parcial3': p3,
        'puntajefinal': (parseInt(p1) + parseInt(p2) + parseInt(p3))  
    });


    document.getElementById('frmCalif').reset();
    alert('Datos guardados')
    crearTabla();
    cerrarModal();
}
      function crearTabla(){
          var fila='';

          for (let index = 0; index < array.length; index++) {
              const element = array[index];
              
          }
          datos.forEach((item,i) => {
              fila += `<tr>
                          <td>${item.asignatura}</td>
                          <td>${item.parcial1}</td>
                          <td>${item.parcial2}</td>
                          <td>${item.parcial3}</td>
                          <td>${item.puntajefinal}</td>
                          <td>${estado}</td>
                          
              
                    
                       </tr>`
         document.getElementById('filas').innerHTML=fila;
            
        });
      }
         
          
      
       
 







function mostrarModal() {
    document.getElementById('modal-registro').classList.add('active');

}
function cerrarModal() {
    document.getElementById('modal-registro').classList.remove('active');
}