<?php
/**
 * Returns the data.
 */
require '../database.php';


function get_core_data($con, $query){
$result = mysqli_query($con, $query);
    while ($row = mysqli_fetch_array($result)) {
      $data = array(
        'title' => $row['title'],
        'subtitle' => $row['subtitle']
      );
    }
     return $data;
}

function get_nav_data($con, $query){
  $result = mysqli_query($con, $query);
  $data = array();
  while ($row = mysqli_fetch_array($result)) {
    $data[] = $row['nav_item'];
  }
  return $data;
}

function get_content_data($con, $query){
  $result = mysqli_query($con, $query);
  $data = array();
  while ($row = mysqli_fetch_array($result)) {
    $data[] = array(
      'type' => $row['type'],
      'content' => $row['content'],
      'link' => $row['link']
    );
  }
  return $data;
}



// GET CORE DATA
$query_core = "SELECT * FROM core_me";
$core_data = get_core_data($con, $query_core);

// GET NAV
$query_nav = "SELECT * FROM nav_me";
$nav_data = get_nav_data($con, $query_nav);
$core_data['nav']=$nav_data;

// CONTENT
foreach ($nav_data as $item){
  if('news'== $item){
    /// do news and news content
    continue;
  }

  $query = $query_core = "SELECT * FROM $item";
  $con_data = get_content_data($con, $query);
  $core_data[$item]= $con_data;
}



echo json_encode($core_data);
