angular.module("ngJScrollPane", []);
angular.module("ngJScrollPane").directive("scrollPane", function () {
	return {
		restrict: 'A',
		transclude: true,
		template: '<div class="scroll-pane" ng-class="class" ng-id="id"><div ng-transclude></div></div>',
		scope: {
			class: "@",
			id: "@"
		}
		link: function (scope, elem, $attrs) {
			var config = {};
			if ($attrs.scrollConfig) {
				config = scope.$eval($attrs.scrollConfig);
			}
			jQuery(function () {
				jQuery("#" + scope.id).jScrollPane(config);
	      	});
		},
		replace: true
	}

});