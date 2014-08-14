angular.module("mnk.controller.auth", []).controller("AuthCtrl", function($scope, $location, Auth) {
  if (Auth.signedIn()) {
    $location.path("/");
  }
  return $scope.register = function() {
    return Auth.register($scope.user).then(function(authUser) {
      console.log(authUser);
      return $location.path("/");
    });
  };
});
