<?php

	//makes use of cURL, a method that emulates typing the address into a browserbar and then stores the results to a variable
	
	//turns on error reporting
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	$executionStartTime = microtime(true) / 1000;

	//concatenates the url for the API call with the parameters.
	$url='http://api.geonames.org/countryInfoJSON?formatted=true&lang=' . $_REQUEST['lang'] . '&country=' . $_REQUEST['country'] . '&username=flightltd&style=full';

	//initiates the cURL object and sets some parameters
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	//executes the cURL object and stores the results to $result.
	$result=curl_exec($ch);

	curl_close($ch);

	//This particular API returns data as JSON and so we decode it as an associative array so that we can append it to $output. 
	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";

	//the “geonames” property from the serialised JSON is stored into the “data”element of $output, the correct header information for JSON is set and the $output is converted to JSON before sending it
	$output['data'] = $decode['geonames']; //just take the geonames object
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
