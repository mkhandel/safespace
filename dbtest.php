<?php
//follow w3school tutorial for opening a connection to mysql
    $servername = "localhost";
    $username = "username";
    $password = "password";
    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";

//run select query from database


//echo the database
?>
