<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$username = 'root';
$password = '';
$database = 'w3ista';

$con = mysqli_connect('localhost', $username, $password, $database);

if ($con) {
    $idd = $_POST['idp'];
    $image_url = $_POST['image_url'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $reponseVersReact = [];
    header('Content-Type: products/JSON , charset=utf-8');

    if (
        isset($image_url) and
        isset($title) and
        isset($description) and
        isset($price)
    ) {
        $sql = "UPDATE products SET img_url='$image_url', title='$title', description='$description', price='$price' where id= $idd";
        $result = mysqli_query($con, $sql);
        header('Content-Type: products/JSON , charset=utf-8');
        if (isset($result)) {
            $reponseVersReact['statut'] = 'item was Updated ';
        } else {
            $reponseVersReact['statut'] = 'probelm was detected';
        }
    }
    echo json_encode($reponseVersReact, JSON_PRETTY_PRINT);
}

?>