# Declare app level module which depends on filters, and services
angular.module "mnk.controller.auth", []
.controller "AuthCtrl", ($scope, $location, Auth) ->
  $location.path "/"  if Auth.signedIn()
  $scope.register = ->
    Auth.register($scope.user).then (authUser) ->
      console.log authUser
      $location.path "/"