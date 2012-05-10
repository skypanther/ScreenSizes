var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    layout: 'vertical'
});

// helper function for making some labels
function makeLabel(lbl) {
	return Ti.UI.createLabel({
		color:'#000',
		text: lbl,
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'left',
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
		top:20,
		left:10
	});
}
// require in our modules
var tabtest = require('tablet');
// make and add our labels
win.add(makeLabel((tabtest.isTablet()) ? 'This is a tablet' : 'This is a phone'));
win.add(makeLabel('osname = '+tabtest.osname()));
win.add(makeLabel('Diagonal size = '+tabtest.screensize()));
// passing a custom diagonal size
win.add(makeLabel((tabtest.isTablet(6.9)) ? 'Hey! This is a tablet' : 'Really, it\'s a phone'));

win.open();
