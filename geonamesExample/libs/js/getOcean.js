	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getOceanInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {		//object called 'data'
				
				lat: $('#inputLat').val(),
				long: $('#inputLong').val()
			},
			
			success: function(result) {
				console.log(result);

				if (result.status.name == "ok") {
					$('#txtDistance').html(result['data']['distance']);
					$('#txtName').html(result['data']['name']);
				}
			
			},
			error: function() {
				alert('error loading ocean info');
			}
		}); 
	});
