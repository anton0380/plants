<?php
include "headers.inc.php";
$output = [];
session_start();
if ((isset($_SESSION["role"])) && ($_SESSION["role"]) == "a") {
    $conn = new mysqli("localhost", "plants", "plants", "plants");
    if (!($conn->connect_errno)) {
        if (isset($_GET["id"])) {
            $id = $conn->real_escape_string($_GET["id"]);
            $q = $conn->query("select * from users where id = " . $id);
            if ($row = $q->fetch_assoc()) {
                $output = ["id" => $row["id"], "name" => $row["name"],
                "password" => $row["password"], "role" => $row["role"]];
            }
        } else {
            $q = $conn->query("select * from users order by name");
            
        }
    }
}