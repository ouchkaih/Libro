<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$username = 'root';
$password = '';
$database = 'w3ista';

$con = mysqli_connect('localhost', $username, $password, $database);

if ($con) {
    $sql = 'select * from products';
    $result = mysqli_query($con, $sql);
    $reponseVersReact = [];
    if ($result) {
        header('Content-Type: products/JSON , charset=utf-8');
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $reponseVersReact[$i]['id'] = $row['id'];
            $reponseVersReact[$i]['img_url'] = $row['img_url'];
            $reponseVersReact[$i]['title'] = $row['title'];
            $reponseVersReact[$i]['description'] = $row['description'];
            $reponseVersReact[$i]['price'] = $row['price'];
            $i++;
        }
        echo json_encode($reponseVersReact, JSON_PRETTY_PRINT);
    }
}