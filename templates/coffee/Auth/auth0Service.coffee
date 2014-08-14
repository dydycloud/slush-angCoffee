# Declare app level module which depends on filters, and services
angular.module "mnk.service.auth", []
.factory "Auth", ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) ->
  ref = new Firebase(FIREBASE_URL)
  auth = $firebaseSimpleLogin(ref)
  Auth =
    register: (user) ->
      auth.$createUser user.email, user.password

    signedIn: ->
      auth.user isnt null

    logout: ->
      auth.$logout()
      return

  $rootScope.signedIn = ->
    Auth.signedIn()

  Auth