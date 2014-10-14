angular-scroll-pane
===================

AngularJS directive to use jScrollPane https://github.com/vitch/jScrollPane

## How to install

 - With bower
	 - `bower install --save angular-scroll-pane`
 - Manually
	 - `dist/angular-jscrollpane.min.js`

## What to include

Make sure you are including `jQuery`, `Angular` and `jScrollPane` along with `angular-scroll-pane`.

## How to use this module

```
angular.module("app", ['ngJScrollPane']);
angular.module("app").controller("MyCtrl", function () {
	$scope.paneConfig = {
		verticalDragMinHeight: 40
	}
});

<html>
	<body ng-app="app">
		<div ng-controller="MyCtrl">
			<div scroll-pane scroll-config="paneConfig" id="myScrollPane">
				My content needing a scroll pane
			</div>
		</div>
	</body>
</html>
```

**Don't forget to specify an id for your scroll pane, otherwise it won't be working**

## Contributing

If you wish to contribute, fork this repository.

`grunt build` builds the module.

## License

The MIT License (MIT)

Copyright (c) 2014 Geoffrey Bauduin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



