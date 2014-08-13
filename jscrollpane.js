angular
	.module('app')
	.directive('scrollPane', function () {

		return {
			restrict: 'A',
			transclude: true,
			template: '<div class="scroll-pane"><div ng-transclude></div></div>',
			link: function (scope, elem, $attrs) {
				var config = {};
				if ($attrs.scrollConfig) {
					config = scope.$eval($attrs.scrollConfig);
				}
				jQuery(function () {
					jQuery(".scroll-pane").jScrollPane(config);
		      	});
			},
			replace: true
		}

	});