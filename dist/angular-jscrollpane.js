(function() {
  angular.module("ngJScrollPane", []);

  angular.module("ngJScrollPane").directive("scrollPane", [
    '$timeout', function($timeout) {
      return {
        restrict: 'A',
        transclude: true,
        template: '<div class="scroll-pane"><div ng-transclude></div></div>',
        link: function($scope, $elem, $attrs) {
          var config, fn, selector;
          config = {};
          if ($attrs.scrollConfig) {
            config = $scope.$eval($attrs.scrollConfig);
          }
          selector = "#" + $attrs.id;
          if ($attrs.scrollName) {
            selector = "[scroll-name='" + $attrs.scrollName + "']";
          }
          fn = function() {
            jQuery(selector).jScrollPane(config);
            return $scope.pane = jQuery(selector).data("jsp");
          };
          if ($attrs.scrollTimeout) {
            $timeout(fn, $scope.$eval($attrs.scrollTimeout));
          } else {
            $timeout(fn, 0);
          }
          $scope.$watch((function() {
            return $attrs.scrollAlwaysTop;
          }), function(newVal, oldVal) {
            if (newVal && $scope.pane) {
              $scope.pane.scrollToY(0);
            }
          });
          return $scope.$on("reinit-pane", function(event, id) {
            if (id === $attrs.id && $scope.pane) {
              console.log("Reinit pane " + id);
              return $scope.$apply(function() {
                $scope.pane.destroy();
                return fn();
              });
            }
          });
        },
        replace: true
      };
    }
  ]);

}).call(this);
