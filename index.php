<?php

$data = '{"name":"Reza","lastName":"Heidari","birthdate":"1370/09/10","isActive":true,"post":300, "newKey": 10}';

$parse_data = json_decode($data);

print_r($parse_data);