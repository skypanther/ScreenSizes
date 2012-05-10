h1. Screen Size Module

Titanium module for determining if your app is running on a tablet or handset

Note: the module makes an arbitrary cutoff between tablets and phones at 8 inches diagonal. You can override this. In my testing, layouts designed for a handset tend to work on devices with up to 7-inch (diagonal) screens and need tweaking for larger screens. Your mileage may vary.

See app.js for sample usage.

```
// require in the module
var tabtest = require('tablet');
```

Then call one of its three functions:

tabtest.isTablet() - returns TRUE on tablet, FALSE on handset
tabtest.osname() - returns a string of ipod, iphone, ipad, android, or androidtablet
tabtest.screensize() - returns diagonal screen dimension in inches

You can pass a float value to any of those three functions to specify a diagonal measurement above which the device will be considered a tablet. E.g.

tabtest.isTablet(5.5) - returns TRUE on a device with a real diagonal dimension larger than 5.5 inches

All I'm doing is dividing the number of pixels by the pixels per inch to calculate the size. Not all devices return 100% reliable values.
