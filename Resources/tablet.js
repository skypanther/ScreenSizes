/*
	tablet.js  -- JS module for detecting whether your code
					is running on a phone or tablet (ipad, android)

	*Arbitrary* cutoff between "tablets" and "phones" is set at 8 inches.
	The smaller 7" android tablets tend to display layouts in the same way as phones
	Larger tablets, like the 10" tablets sometimes mess with layouts


*/

var osname = Ti.Platform.osname;
	dpi = Ti.Platform.displayCaps.dpi,
	w = Ti.Platform.displayCaps.platformWidth / dpi,
	h = Ti.Platform.displayCaps.platformHeight / dpi,
	diagonalSize = Math.sqrt(w*w+h*h);

exports.isTablet = function(diagonalInches) {
	/*
		Returns Boolean, true = device is a tablet
	*/
	var diag = (diagonalInches) ? parseFloat(diagonalInches) : 8;
	switch(osname) {
		case 'ipad':
			return true;
		break;
		default:
			return (diagonalSize >= diag) ? true : false;
	}
};

exports.osname = function(diagonalInches) {
	/*
		Custom osname function, returns string that includes 'androidtablet'
		descriptor that you could use for branching on an Android device
	*/
	var diag = (diagonalInches) ? parseFloat(diagonalInches) : 8;
	var osname = Ti.Platform.osname;
	switch(osname) {
		case 'android':
			return (diagonalSize >= diag) ? 'androidtablet' : 'android';
		break;
		default:
			return osname;
	}	
};

exports.screensize = function() {
	/*
		Returns the DIAGONAL screen size in inches
	*/
	return diagonalSize;
};





