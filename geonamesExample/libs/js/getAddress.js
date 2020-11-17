	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getAddressInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {		//object called 'data'
				
				lat: $('#inputLat2').val(),
				long: $('#inputLong2').val()
			},
			
			success: function(result) {
				console.log(result);

				if (result.status.name == "ok") {
					$('#txtDistance2').html(result['data']['distance']);
					$('#txtStreet').html(result['data']['street']);
				}
			
			},
			error: function() {
				alert('error loading address info');
			}
		}); 
	});