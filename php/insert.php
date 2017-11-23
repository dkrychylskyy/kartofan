<?php
//insert.php

$connect = mysql_connect("localhost:8889", "root", "root", "kartofan");
$data = file_get_contents('php://input');

if(count($data) > 0){
    $first_name = mysql_real_escape_string($connect, $data->firstname);
    $last_name = mysql_real_escape_string($connect, $data->lastname);
    $query = "INSERT INTO tbl_user(first_name, last_name) VALUES ('$first_name', '$last_name')";

    if(mysql_query($connect, $query)){
        echo "Data Inserted...";
    }
    else {
        echo "Error...";
    }
}

?>