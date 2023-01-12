<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$username = 'root';
$password = '';
$database = 'w3ista';

$con = mysqli_connect('localhost', $username, $password, $database);
$reponseVersReact = [];
$method = $_SERVER['REQUEST_METHOD'];

if ($con) {
    $Idd = $_POST['productId'];
    if (isset($Idd)) {
        header('Content-Type: products/JSON , charset=utf-8');
        $sql = "delete from products where id='$Idd'";
        $result = mysqli_query($con, $sql);
        if (isset($result)) {
            $reponseVersReact['productId'] = 'item was deleted ';
        } else {
            $reponseVersReact['productId'] = 'error was detected ';
        }

        echo json_encode($reponseVersReact, JSON_PRETTY_PRINT);
    }
}

?>