angular.module "ngJScrollPane", []
angular
	.module("ngJScrollPane")
	.directive "scrollPane", ['$timeout',
		($timeout) ->
			restrict: 'A'
			transclude: true
			template: '<div class="scroll-pane"><div ng-transclude></div></div>'
			link: ($scope, $elem, $attrs) ->
				config = {}
				if $attrs.scrollConfig
					config = $scope.$eval $attrs.scrollConfig
				fn = () ->
					jQuery("##{$attrs.id}").jScrollPane config
				if $attrs.scrollTimeout
					$timeout fn, $scope.$eval $attrs.scrollTimeout
				else
					do fn
			replace: true
	]
