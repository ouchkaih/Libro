<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$username = 'root';
$password = '';
$database = 'w3ista';

$con = mysqli_connect('localhost', $username, $password, $database);

$method = $_SERVER['REQUEST_METHOD'];
if ($con) {
    switch ($method) {
        case 'GET':
            $sql = 'select * from users';
            break;
        case 'POST':
            $usernameu = $_POST['username'];
            $email = $_POST['email'];
            $passwordu = $_POST['password'];
            $sql = "insert into users( username , email , password ) values ('$usernameu', '$email', '$passwordu')";
            $sql2 = "Select id from users where email='$userEmail'";
            break;
    }

    $result = mysqli_query($con, $sql);
    $response = [];
    if ($result) {
        if ($method == 'GET') {
            header('Content-Type: users/JSON , charset=utf-8');
            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['id'] = $row['id'];
                $response[$i]['username'] = $row['username'];
                $response[$i]['password'] = $row['password'];
                $response[$i]['email'] = $row['email'];
                $i++;
            }

            echo json_encode($response, JSON_PRETTY_PRINT);
        } elseif ($method == 'POST') {
            $row = mysqli_fetch_assoc($result2);
            $nom = $row['username'];
            $id = $row['id'];
            $reponseVersReact = [
                'userName' => $nom,
                'userId' => $id,
                'isConnected' => true,
            ];
            echo json_encode($result);
        } else {
            echo mysqli_affected_rows($con);
        }
    } else {
        http_response_code(404);
        die(mysqli_error($con));
    }
}

?>