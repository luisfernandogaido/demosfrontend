<?php
echo json_encode(array_fill(0, 1000, $_GET['search']), JSON_PRETTY_PRINT);