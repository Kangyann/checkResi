<?php
$awb = $_POST['inputResi'];
$courier = $_POST['codeCourier'];
$api = 'USE YOUR API KEY HERE';
$track = 'https://api.binderbyte.com/v1/track?api_key=' . $api . '&courier=' . $courier . '&awb=' . $awb;
$resApi = file_get_contents($track);
header("Content-Type: application/json");
echo $resApi;

