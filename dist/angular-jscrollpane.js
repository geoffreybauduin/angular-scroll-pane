(function() {
  angular.module("ngJScrollPane", []);

  angular.module("ngJScrollPane").directive("scrollPane", [
    '$timeout', function($timeout) {
      return {
        restrict: 'A',
        transclude: true,
        template: '<div class="scroll-pane"><div ng-transclude></div></div>',
        link: function($scope, $elem, $attrs) {
          var config, fn;
          config = {};
          if ($attrs.scrollConfig) {
            config = $scope.$eval($attrs.scrollConfig);
          }
          fn = function() {
            return jQuery("#" + $attrs.id).jScrollPane(config);
          };
          if ($attrs.scrollTimeout) {
            return $timeout(fn, $scope.$eval($attrs.scrollTimeout));
          } else {
            return fn();
          }
        },
        replace: true
      };
    }
  ]);

}).call(this);
