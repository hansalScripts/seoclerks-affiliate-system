<?php 

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Headers: Content-Type");

$url = '';

$get = $_GET;

foreach($get as $key => $value){
    
    if($key == 'url'){
        $url .= $value;
    }elseif($key == 'type')
    {
        $url .= '?type=' . $value;

    }elseif($key == 'aff')
    {
        $url .= '?aff=721499'; // 721499 replace with your affiliate ID
    }else
    
    $url .= '&' . $key . '=' . $value;
}


$ch  = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$results = curl_exec($ch);

echo $results;
