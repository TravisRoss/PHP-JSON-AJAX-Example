	$('#btnRun').click(function() {

		$.ajax({
			//get the data
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			//sets the expected format of whatever returns to ​json​
			dataType: 'json',
			data: {
				//passes the values of the two selects as the parameters ​country​ and ​lang​.
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			// any output from the PHP routine is stored in the object result​.
			success: function(result) {

				console.log(result);

				////If the status of the data returned is “​ok​” then the data held in 
				//result is written into the HTML of the table data cells using standard jQuery functions.
				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				//handleException(jqXHR, mestextStatussage, errorThrown);
			}
		}); 
	});