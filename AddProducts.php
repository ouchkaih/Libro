<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$username = 'root';
$password = '';
$database = 'w3ista';

$con = mysqli_connect('localhost', $username, $password, $database);

if ($con) {
    $img_url = $_POST['img_url'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    if (
        !empty($img_url) and
        !empty($title) and
        !empty($description) and
        !empty($price)
    ) {
        $response = [];
        $sql = "insert into products (img_url, title , description , price ) values ('$img_url', '$title', '$description' , '$price')";
        $result = mysqli_query($con, $sql);
        if ($result > 0) {
            $response = ['reponse' => true, 'Error' => ''];
            echo json_encode($response);
        } else {
            $response = ['reponse' => false, 'Error' => 'SQL error'];
            echo json_encode($response);
        }
    } else {
        $response = [
            'response' => false,
            'Error' => 'Please Fall in all the form ',
        ];
    }
}

?>