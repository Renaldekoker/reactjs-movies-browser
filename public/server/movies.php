<?php
  // Read file
  $json = file_get_contents('movies.json');

  // Decode the JSON file
  $json_data = json_decode($json, true);

  // Return all movies
  echo $json;

?>
