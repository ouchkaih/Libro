<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$username = 'root';
$password = '';
$database = 'w3ista';

$con = mysqli_connect('localhost', $username, $password, $database);
$reponseVersReact = [];

if ($con) {
    $userEmail = $_POST['userEmail'];
    $userPassword = $_POST['userPassword'];
    $sql = "Select username, id from users where email='$userEmail' and password='$userPassword' ";
    $result = mysqli_query($con, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $nom = $row['username'];
        $id = $row['id'];
        $reponseVersReact = [
            'userName' => $nom,
            'userId' => $id,
            'isConnected' => true,
        ];
    } else {
        $reponseVersReact = [
            'isConnected' => false,
            'Error' => 'Email and password doesn\'t matche',
        ];
    }
    echo json_encode($reponseVersReact);
}

?>