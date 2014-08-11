angular.module("app", ["ngMaterial", "ui.router", "myApp.config"]).controller("AppCtrl", function($scope, $location, $timeout, $materialSidenav) {
  var leftNav;
  leftNav = void 0;
  $timeout(function() {
    return leftNav = $materialSidenav("left");
  });
  $scope.toggleLeft = function() {
    return leftNav.toggle();
  };
  return $scope.register = function() {
    console.log('yo');
    return $location.path("/");
  };
}).controller("LeftCtrl", function($scope, $timeout, $materialSidenav) {
  var nav;
  nav = void 0;
  $timeout(function() {
    nav = $materialSidenav("left");
  });
  $scope.close = function() {
    nav.close();
  };
});
