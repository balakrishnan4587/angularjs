angular.module('myApp').factory('AuthService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    // create user variable
    var user = null;

    // return available functions for use in controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });

    function isLoggedIn() {
        if(user) {
          return true;
        } else {
          return false;
        }
    }

    function getUserStatus() {
      return user;
    }

    function login(username, password) {
      // send a post request to the server
      return $http.post('/user/login', {username: username, password: password});
    }

    function logout() {
      // send a get request to the server
      return $http.get('/user/logout');
    }

    function register(username, password) {
      // create a new instance of deferred
      var request = {
        username: username,
        password: password
      };
      return $http.post('/user/register', request);
    }

}]);