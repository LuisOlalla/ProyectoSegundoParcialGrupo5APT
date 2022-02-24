<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../Estilos/s1.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docentes</title>
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
            <h1>Formulario Docentes</h1>
            <center>
                <form method="POST" action="docentes.php">
                    <p>Nombre</p>
                    <input type="text" name="nombre" placeholder="Nombre">
                    <br>
                    <p>Apellido</p>
                    <input type="text" name="apellido" placeholder="Apellido">
                    <br>
                    <p>Cedula</p>
                    <input type="text" name="cedula" placeholder="Cedula">
                    <br>
                    <p>Dirección</p>
                    <input type="text" name="dir" placeholder="Dirección">
                    <br>
                    <p>Telefono</p>
                    <input type="text" name="telefono" placeholder="Telefono">
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

         $mNombre=$_POST['nombre'];
         $nApellido=$_POST['apellido'];
         $mCedula=$_POST['cedula'];
         $mDireccion=$_POST['dir'];
         $mTelefono=$_POST['telefono'];

        $Guardar = $_POST['guardar'];
        $Mostrar = $_POST['mostrar'];

        if(isset($Guardar)){
            
            $db = new PDO("mysql:host=localhost;dbname=$database", $username, $password);
    
            $db->query("INSERT INTO docentes (nombre,apellido,cedula,direccion,,telefono) VALUES ('$mNombre','$nApellido','$mCedula','$mDireccion','$mTelefono') ");
            
        }
        if(isset($Mostrar)){
           
            echo "<table class='docentes'>";
            echo "<thead>";
            echo "<th> ID Docente</th>";
            echo "<th> Nombre </th>";
            echo "<th> Apellido </th>";
            echo "<th> Cedula </th>";
            echo "<th> Direccion</th>";
            echo "<th> Telefono </th>";
            echo "</thead>";
            echo "<tbody>";
            try {
                $db = new PDO("mysql:host=localhost;dbname=$database", $username, $password);
                foreach($db->query("SELECT id_docente, nombre,apellido,cedula,direccion,telefono from docentes") as $filas) {
                    
                    echo "<tr class='fil'>";
                    echo "<td class='col'>"; echo $filas['id_docente']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['nombre']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['apellido']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['cedula']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['direccion']; echo "</td>";
                    echo "<td class='col'>"; echo $filas['telefono']; echo "</td>";
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
crossorigin="anonymous"></script>
<!-- Script de sweet alrt -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="/Javascript/datos8.js"></script>
</html>