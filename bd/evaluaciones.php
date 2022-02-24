<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../Estilos/s1.css">
    <link rel="stylesheet" href="../Estilos/estudiantes.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evaluaciones</title>
</head>

<body>
    <header>
        <nav>
            <a href="../S1.html">Semestre 1</a>
            <a href="../S2.html">Semestre 2</a>
            <a href="../S3.html">Semestre 3</a>
            <a href="../S4.html">Semestre 4</a>
            <a href="../S5.html">Semestre 5</a>
            <a href="../S6.html">Semestre 6</a>
            <a href="../S7.html">Semestre 7</a>
            <a href="../S8.html">Semestre 8</a>
            <a href="../index.html">Inicio</a>
            <a href="../quienessomos.html">Quienes Somos</a>
            <a href="../calificaciones.html">Calificaciones</a>
            <a href="formularios.html">Formularios</a>
            <a href="../Login.html">Login</a>
        </nav>
        <section class="textos-header">
            <h1>ORIGIN | Code Academy</h1>
            <h2>Universidad Tecnologica</h2>
        </section>
        <div class="wave" style="height: 150px; overflow: hidden;">
            </svg></div>
    </header>
    <br>
    <br>
    <center>
        <div style="width: 50%; height: auto; background-color: #E69171; border-radius: 20px; color: white;">
            <h1>Formulario Evaluaciones</h1>
            <center>
                <form method="POST" action="evaluaciones.php">
                    <p>Nombre de la Evaluación</p>
                    <input type="text" name="eva" placeholder="Ejemplo: Evaluacion 1 - U1">
                    <br>
                    <p>Calificacion 1</p>
                    <input type="num" name="nota1" placeholder="Nota 1">
                    <br>
                    <p>Calificacion 2</p>
                    <input type="num" name="nota2" placeholder="Nota 2">
                    <br>
                    <p>Calificacion 3</p>
                    <input type="num" name="nota3" placeholder="Nota 3">
                    <br>
                    <br>
                    <input type="submit" value="Guardar" name="guardar">
                    <input type="submit" value="Mostrar" name="mostrar">
                    <br>
                    <br>
                </form>
            </center>
        </div>
        <br>
        <br>
        <?php

        $servername = "mysql:host=localhost";
        $database = "universidad4";
        $username = "root";
        $password = "hola";

        $mNombre=$_POST['eva'];
        $mNota1=$_POST['nota1'];
        $nNota2=$_POST['nota2'];
        $mNota3=$_POST['nota3'];


        $Guardar=$_POST['guardar'];
        $Mostrar=$_POST['mostrar'];


        if (isset($Guardar)) {

            $db = new PDO("mysql:host=localhost;dbname=$database", $username, $password);

            $db->query("INSERT INTO evaluaciones (nombre_evaluacion,calificacion1,calificacion2,calificacion3) VALUES ('$mNombre',$mNota1,$nNota2, $mNota3) ");
        }
        if(isset($Mostrar)){
           
            echo "<table class='evaluaciones'>";
            echo "<thead>";
            echo "<th> Nombre Evaluacion</th>";
            echo "<th> Nota 1</th>";
            echo "<th> Nota 2</th>";
            echo "<th> Nota 3</th>";
            echo "<th> Total</th>";
            echo "</thead>";
            echo "<tbody>";
            try {
                $db = new PDO("mysql:host=localhost;dbname=$database", $username, $password);
                foreach($db->query("SELECT nombre_evaluacion,calificacion1,calificacion2,calificacion3,((calificacion1+calificacion2+calificacion3)/3) total from evaluaciones") as $filas) {
                    
                    echo "<tr class='fil'>";
                    echo "<td class='col'>"; echo $filas['nombre_evaluacion']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['calificacion1']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['calificacion2']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['calificacion3']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['total']; echo "</td>";
 
                    echo "</tr>";
                }
                
              } catch (PDOException $e) {
                  print "Error!: " . $e->getMessage() . "<br/>";
                  die();
              }
           
            
            echo "</tbody>";
            echo "</table>";
        }
        ?>
        <footer>
            <div class="contenedor-footer">
                <div class="content-foo">
                    <h4>Phone</h4>
                    <p>8282717281</p>
                </div>
                <div class="content-foo">
                    <h4>Email</h4>
                    <p>administracion@gotitas.edu.ec</p>
                </div>
                <div class="content-foo">
                    <h4>Ubicación</h4>
                    <p>Santo Domingo de los Tsáchilas</p>
                </div>
            </div>
            <h2 class="titulo-final">&copy; GRUPO 5 | Tecnologías Web</h2>
        </footer>

</body>
<!-- Script de bootsatrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
<!-- Script de sweet alrt -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="/Javascript/datos8.js"></script>

</html>