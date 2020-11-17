	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/getStreetInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {		//object called 'data'
				
				lat: $('#inputLat3').val(),
				long: $('#inputLong3').val()
			},
			
			success: function(result) {
				console.log(result);

				if (result.status.name == "ok") {
					$('#txtName2').html(result['data'][0]['name']);
					$('#txtCountryCode').html(result['data'][0]['countryCode']);
				}
			
			},
			error: function() {
				alert('error loading street info');
			}
		}); 
	});