<?php
require_once 'includes/utils.php';


class Usuarios extends Main
{
    private static $instance;

    public static function init($decoded)
    {
        self::$instance = new Main(get_class(), $decoded['function']);
        call_user_func(get_class() . '::' . $decoded['function'], $decoded);
    }

    private function get($data)
    {
        $results = self::$instance->db->rawQuery('select * from usuarios;');
        echo json_encode($results);
    }

    private function post($data)
    {
        print_r($data);
    }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $decoded = json_decode($data);
    Usuarios::init(json_decode(json_encode($decoded), true));
} else {
    Usuarios::init($_GET);
}
