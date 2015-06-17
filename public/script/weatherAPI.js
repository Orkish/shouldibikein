var WeatherAPI = (function() {

	var URL_BASE = 'http://api.openweathermap.org/data/'
			, VERSION = '2.5/'
			, weather = 'weather?'
			, country = ',us';

	// generate options for each endpoint
	function getWeatherOpts() {
		return {
			url: URL_BASE + VERSION + weather
			, data: {}
		};
	}

	function getWeatherByZip( input ) {
		var opts = getWeatherOpts();
		
		opts.data.zip = input + country;

		return $.ajax( opts );
	}

	return {
		weatherByZip: getWeatherByZip
	}

})();