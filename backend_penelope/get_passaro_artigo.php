<?php
include "sql_config.php";
/* require "sql_config.php"; */

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $passaro_id = $_GET["passaro_id"];
    send_artigo_data($passaro_id);
}

function send_artigo_data($passaro_id){
    global $mysqli;

    $img_dir = "files_penelope/img_passaro/";

    class JsonClass{}
    $jsonObject = new JsonClass();

    $passaro_query = mysqli_query($mysqli, "SELECT 
        nome_popular,
        nome_binomial,
        estado_conservacao,
        passaro_descricao,
        envergadura_cm
        FROM passaro WHERE passaro_id = $passaro_id"
    );
    $passaro_query = $passaro_query->fetch_assoc();
    $nome_popular = $passaro_query["nome_popular"];
    $nome_binomial = $passaro_query["nome_binomial"];
    $estado_conservacao = $passaro_query["estado_conservacao"];
    $passaro_descricao = $passaro_query["passaro_descricao"];
    $envergadura_cm = $passaro_query["envergadura_cm"];

    $img_passaro_query = mysqli_query($mysqli, "SELECT
        img_passaro_filepath,
        img_passaro_order
        FROM img_passaro WHERE passaro_id = $passaro_id"
    );
    while($img_passaro_row  = $img_passaro_query ->fetch_assoc()){
        $img_passaro_filepath = $img_dir . $img_passaro_row["img_passaro_filepath"];
        $img_passaro_order = $img_passaro_row["img_passaro_order"];
        $img_passaro[$img_passaro_order] = $img_passaro_filepath;
    }

    $passaro_artigo = array(
        "nome_popular" => $nome_popular,
        "nome_binomial" => $nome_binomial,
        "estado_conservacao" => $estado_conservacao,
        "passaro_descricao" => $passaro_descricao,
        "envergadura_cm" => $envergadura_cm,
        "img_passaro" => $img_passaro
    );

    if(!empty($passaro_artigo)){
        $jsonObject->artigo = $passaro_artigo;
        $jsonObject = json_encode($jsonObject);
    }
    echo $jsonObject;
}

?>
