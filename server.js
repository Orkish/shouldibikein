var express = require( 'express' )
		, app = express()
		, path = require( 'path' );

// public folder to set up public assets
app.use( express.static( __dirname + '/public' ) );

// set up route to index.html file path
app.get( '*', function( req, res ) {
	res.sendFile( path.join( __dirname + '/public/index.html' ) );
});

app.listen( '1337' );
console.log('stuff happening on 1337');