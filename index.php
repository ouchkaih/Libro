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
            $stmt = $conn -> prepare($sql);
            break;
        case 'POST':
            $usernameu = $_POST['username'];
            $email = $_POST['email'];
            $passwordu = $_POST['password'];
            $sql =
                'insert into users( username , email , password ) values (?, ?,?)';
            $stmt = $conn -> prepare($sql);
            $stmt -> bind_param("sis", $username, $email, $passwordu)
            break;
    }

    $stmt -> execute();

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
            $response = ['isConnected' => true];
            echo json_encode($response);
        } else {
            echo mysqli_affected_rows($con);
        }
    } else {
        http_response_code(404);
        die(mysqli_error($con));
    }
    $conn->close();
}

?>