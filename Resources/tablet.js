/*
	tablet.js  -- JS module for detecting whether your code
					is running on a phone or tablet (ipad, android)

	*Arbitrary* cutoff between "tablets" and "phones" is set at 8 inches.
	The smaller 7" android tablets tend to display layouts in the same way as phones
	Larger tablets, like the 10" tablets sometimes mess with layouts


*/
exports.isTablet = function(diagonalInches) {
	/*
		Returns Boolean, true = device is a tablet
	*/
	var diag = diagonalInches|8;
	var osname = Ti.Platform.osname;
	switch(osname) {
		case 'ipad':
			return true;
		case 'android':
			var dpi = Ti.Platform.displayCaps.dpi;
			var w = Ti.Platform.displayCaps.platformWidth / dpi;
			var h = Ti.Platform.displayCaps.platformHeight / dpi;
			return (Math.sqrt(w*w+h*h) >= diag) ? true : false;
		default:
			return false;
	}
};

exports.osname = function(diagonalInches) {
	/*
		Custom osname function, returns string that includes 'androidtablet'
		descriptor that you could use for branching on an Android device
	*/
	var diag = diagonalInches|8;
	var osname = Ti.Platform.osname;
	switch(osname) {
		case 'ipad':
		case 'iphone':
		case 'ipod':
			return osname;
		case 'android':
			var dpi = Ti.Platform.displayCaps.dpi;
			var w = Ti.Platform.displayCaps.platformWidth / dpi;
			var h = Ti.Platform.displayCaps.platformHeight / dpi;
			return (Math.sqrt(w*w+h*h) >= diag) ? 'androidtablet' : 'android';
		default:
			return osname;
	}	
};

exports.screensize = function() {
	/*
		Returns the DIAGONAL screen size in inches
	*/
	var dpi = Ti.Platform.displayCaps.dpi;
	var w = Ti.Platform.displayCaps.platformWidth / dpi;
	var h = Ti.Platform.displayCaps.platformHeight / dpi;
	return Math.sqrt(w*w+h*h);
};





