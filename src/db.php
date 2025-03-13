<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tienda"; // Asegúrate de crear esta base de datos en MySQL

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
