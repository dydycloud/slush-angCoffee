angular.module("app", [
  "ngMaterial"
  "ui.router"
  "mnk.config"
  "mnk.service.auth"
  "mnk.controller.auth"
  "firebase"
])
.controller("AppCtrl", ($scope, $location, $timeout, $materialSidenav, Auth) ->
  leftNav = undefined
  $timeout ->
    leftNav = $materialSidenav("left")

  $scope.toggleLeft = ->
    leftNav.toggle()

  $scope.register = ->
    Auth.register($scope.user).then (authUser) ->
      console.log authUser
      $location.path "/"
)
.controller("LeftCtrl", ($scope, $timeout, $materialSidenav) ->
  nav = undefined
  $timeout ->
    nav = $materialSidenav("left")
    return

  $scope.close = ->
    nav.close()
    return

  $scope.logout = ()->
    Auth.logout()
    console.log "you're out"

  return
)