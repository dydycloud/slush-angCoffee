angular.module("app", ["ngMaterial", "ui.router", "mnk.config", "mnk.service.auth", "mnk.controller.auth", "firebase"]).controller("AppCtrl", function($scope, $location, $timeout, $materialSidenav, Auth) {
  var leftNav;
  leftNav = void 0;
  $timeout(function() {
    return leftNav = $materialSidenav("left");
  });
  $scope.toggleLeft = function() {
    return leftNav.toggle();
  };
  return $scope.register = function() {
    return Auth.register($scope.user).then(function(authUser) {
      console.log(authUser);
      return $location.path("/");
    });
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
  $scope.logout = function() {
    Auth.logout();
    return console.log("you're out");
  };
});
