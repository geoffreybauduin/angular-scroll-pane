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
					config = $scope.$eval($attrs.scrollConfig)
				selector = "##{$attrs.id}"
				if $attrs.scrollName
					selector = "[scroll-name='#{$attrs.scrollName}']"
				fn = ->
					jQuery(selector).jScrollPane(config)
					$scope.pane = jQuery(selector).data("jsp")
				if $attrs.scrollTimeout
					$timeout(fn, $scope.$eval($attrs.scrollTimeout))
				else
					$timeout(fn, 0)
				$scope.$watch (->
					$attrs.scrollAlwaysTop
				), (newVal, oldVal) ->
					if newVal and $scope.pane
						$scope.pane.scrollToY 0
					return
				$scope.$on("reinit-pane", (event, id) ->
					if id is $attrs.id and $scope.pane
						console.log("Reinit pane #{id}")
						$scope.$apply ->
							$scope.pane.destroy()
							fn()
				)
			replace: true
	]
