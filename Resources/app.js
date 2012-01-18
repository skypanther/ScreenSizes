// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var view = Ti.UI.createView({
	bottom:10,
	layout:'vertical',
	height:200,
	width:'auto'
});

// helper function for making some labels
function makeLabel(lbl) {
	return Ti.UI.createLabel({
		color:'#000',
		text: lbl,
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'left',
		width:'auto',
		height:'auto',
		top:20,
		left:10
	});
}
// require in our modules
var tabtest = require('tablet');
// make and add our labels
view.add(makeLabel((tabtest.isTablet()) ? 'This is a tablet' : 'This is a phone'));
view.add(makeLabel('osname = '+tabtest.osname()));
view.add(makeLabel('Diagonal size = '+tabtest.screensize()));
win1.add(view);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
