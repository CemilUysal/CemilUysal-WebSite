<?php
header('Content-Type: multipart/form-data');
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
echo file_get_contents('https://cemiluysal.herokuapp.com/sprint3/timeline_page/timeline.json'); // 49 MB file