angular.module("app", ["ngMaterial", "ui.router", "mnk.config", "mnk.service.auth", "mnk.controller.auth", "firebase"]).controller("AppCtrl", function($scope, $location, $timeout, $materialSidenav, Auth) {
  var leftNav;
  leftNav = void 0;
  $timeout(function() {
    return leftNav = $materialSidenav("left");
  });
  $scope.toggleLeft = function() {
    return leftNav.toggle();
  };
  $scope.register = function() {
    return Auth.register($scope.user).then(function(authUser) {
      console.log(authUser);
      return $location.path("/");
    });
  };
  return $scope.logout = function() {
    Auth.logout();
    return console.log("you're out");
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

angular.module("mnk.config", []).config([
  "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    return $stateProvider.state('home', {
      url: "/",
      templateUrl: "views/home.html",
      controller: 'AppCtrl'
    }).state('signup', {
      url: "/signup",
      templateUrl: "views/signup.html",
      controller: 'AppCtrl'
    });
  }
]).constant("FIREBASE_URL", "https://mnkgeneral.firebaseio.com/");

angular.module("mnk.service.auth", []).factory("Auth", function($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
  var Auth, auth, ref;
  ref = new Firebase(FIREBASE_URL);
  auth = $firebaseSimpleLogin(ref);
  Auth = {
    register: function(user) {
      return auth.$createUser(user.email, user.password);
    },
    signedIn: function() {
      return auth.user !== null;
    },
    logout: function() {
      auth.$logout();
    }
  };
  $rootScope.signedIn = function() {
    return Auth.signedIn();
  };
  return Auth;
});

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
