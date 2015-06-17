(function() {

	var btn = $('.search')
			, zipInput = $('.zip-input');

	btn.on( 'click', startSearch );
	zipInput.on( 'keyup', startSearch );

	function startSearch( e ) {
		if( e.type === 'click' || ( e.type === 'keyup' && e.keyCode === 13 ) ) {

			// get val of input 
			var searchInput = zipInput.val();

			WeatherAPI.weatherByZip( searchInput ).then( onData );
		}
	}

	function onData( data ) {
		console.log( 'this is data:', data );

		// returned data values
		var cityName = data.name
				, desc = data.weather[0].description
				, tempF = ( data.main.temp - 273.15 ) * 1.8 + 32
				, tempFinal = Math.floor( tempF * 100 ) / 100
				, wind = data.wind.speed
				, humidity = data.main.humidity;

		// dom elements
		var cityEl = $( '.city-val' )
				, descEl = $( '.desc-val' )
				, tempEl = $( '.temp-val' )
				, windEl = $( '.wind-val' )
				, humidityEl = $( '.humidity-val' )
				, bikeMsg = $( '.bike-msg' );

		cityEl.html( cityName );
		descEl.html( desc );
		tempEl.html( tempFinal );
		windEl.html( wind );
		humidityEl.html( humidity );

		if( tempFinal > 55 && tempFinal < 85 ) {
			bikeMsg.html( 'Perfect Biking Weather, Bruhh' );
		}
	}

})();