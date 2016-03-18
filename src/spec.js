describe('loginController', function() {
  beforeEach(module('myApp'));

  var $controller;
  var $location;
  var httpBackend;
  var factory;
  var $rootScope;
  var $scope;
  var AuthService;
  var $templateCache;

  beforeEach(inject(function(_$templateCache_, _$controller_, _$location_, $rootScope, _$httpBackend_, _AuthService_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $location=_$location_;
    $rootScope = $rootScope;
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    AuthService = _AuthService_;
    $templateCache = _$templateCache_;
    $templateCache.put("partials/login.html","");
  }));

  describe('login Module', function() {
    it('login Controller', function() {
      var controller = $controller('loginController', { $scope: $scope,  $location: $location, AuthService: AuthService});
      $scope.loginForm = {
        username: 'ABC',
        password: 'XXX'
      };
      $scope.login();
      $httpBackend.expectPOST('/user/login', $scope.loginForm).respond({});
      $httpBackend.flush();
      expect($scope.disabled).toEqual(false);
    });

    it('logout Controller', function() {
      var controller = $controller('logoutController', { $scope: $scope,  $location: $location, AuthService: AuthService});
      $scope.logout();
      $httpBackend.expectGET('/user/logout').respond({});
      $httpBackend.flush();
    });

    it('register Controller', function() {
      var controller = $controller('registerController', { $scope: $scope,  $location: $location, AuthService: AuthService});
      $scope.registerForm = {
        username: 'ABC',
        password: 'XXX'
      };
      $scope.register();
      $httpBackend.expectPOST('/user/register', $scope.registerForm).respond({status: 'success'});
      $httpBackend.flush();
      expect($scope.message).toEqual('success');
    });
  });
});