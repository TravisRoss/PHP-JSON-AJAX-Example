	$('#btnRun').click(function() {

		$.ajax({
			//get the data
			url: "libs/php/getOceanInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {		//object called 'data'
				
				latitude: $('#inputLat').val(),
				longtitude: $('#inputLong').val()
			},
			
			success: function(result) {

				console.log(result);

				//If the status of the data returned is “​ok​” then the data held in 
				//result is written into the HTML of the table data cells using standard jQuery functions.
				if (result.status.name == "ok") {
					$('#txtDistance').html(result['data'][0]['distance']);
					$('#txtName').html(result['data'][0]['name']);
				}
			
			},
			error: function() {
				alert('error loading ocean info');
			}
		}); 
	});