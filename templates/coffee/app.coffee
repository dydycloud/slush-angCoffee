angular.module("app", [
  "ngMaterial"
  "ui.router"
  "myApp.config"
])
.controller("AppCtrl", ($scope, $location, $timeout, $materialSidenav) ->
  leftNav = undefined
  $timeout ->
    leftNav = $materialSidenav("left")

  $scope.toggleLeft = ->
    leftNav.toggle()

  $scope.register = ->
    console.log 'yo'
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

  return
)
