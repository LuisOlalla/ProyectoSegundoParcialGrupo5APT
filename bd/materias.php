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
    <title>Materias</title>
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
    <div style="width: 50%; height: auto; background-color: #5271FF; border-radius: 20px; color: white;">
            <h1>Formulario Materias</h1>
            <center>
                <form method="POST" action="materias.php">
                    <p>NRC</p>
                    <input type="text" name="nrc" placeholder="Ejemplo: 9618">
                    <br>
                    <p>Nombre de Materia</p>
                    <input type="text" name="n_materia" placeholder="Ejemplo: Aplicación de Tecnologías Web" style="width: 55%;">
                    <br>
                    <p>Docente</p>
                    <input type="text" name="docente" placeholder="Docente">
                    <br>
                    <p>Creditos</p>
                    <input type="text" name="creditos" placeholder="Creditos">
                    <br>
                    <p>Departamento</p>
                    <input type="text" name="departamento" placeholder="Departamento">
                    <br>
                    <br>
                    <input type="submit" value="Guardar" name="guardar">
                    <input type="submit" value="Mostrar" name="mostrar">
                    <br>
                    <br>
                </form>
            </center>
        </div>

        <?php

        $servername = "mysql:host=localhost";
        $database = "universidad4";
        $username = "root";
        $password = "hola";

        $mNRC=$_POST['nrc'];
         $nNombre=$_POST['n_materia'];
         $mDocente=$_POST['docente'];
         $mCreditos=$_POST['creditos'];
         $mDepartamento=$_POST['departamento'];
        

        $Guardar = $_POST['guardar'];
        $Mostrar = $_POST['mostrar'];


        if(isset($Guardar)){
            
            $db = new PDO("mysql:host=localhost;dbname=$database", $username, $password);
    
            $db->query("INSERT INTO materias (nrc,nombre_mat, docente,creditos,departamento) VALUES ('$mNRC','$nNombre','$mDocente,'$mCreditos','$mDepartamento') ");
            
        }
        if(isset($Mostrar)){
           
            echo "<table class='estudiantes'>";
            echo "<thead>";
            echo "<th> Numero NRC</th>";
            echo "<th> Nombre de la Materia </th>";
            echo "<th> Docente </th>";
            echo "<th> Creditos </th>";
            echo "<th> Departamento </th>";
  
            echo "</thead>";
            echo "<tbody>";
            try {
                $db = new PDO("mysql:host=localhost;dbname=$database", $username, $password);
                foreach($db->query("SELECT nrc, nombre_mat,docente,creditos,departamento from materias") as $filas) {
                    
                    echo "<tr class='fil'>";
                    echo "<td class='col'>"; echo $filas['nrc']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['nombre_mat']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['docente']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['creditos']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['departamento']; echo "</td>";
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



    </center>
    <br>
    <br>
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