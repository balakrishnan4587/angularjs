describe('loginController', function() {
  beforeEach(module('myApp'));

  var $controller;
  var $location;
  var httpBackend;
  var factory;
  var $rootScope;
  var $scope;

  beforeEach(inject(function(_$controller_, _$location_, _$rootScope_, _$httpBackend_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $location=_$location_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;


  }));

  describe('login', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function(AuthService) {
		var controller = $controller('loginController', { $scope: $scope,  $location: $location, AuthService: AuthService});
		$scope.login();
		$httpBackend.expectGET('/user/login').respond({});
		$httpBackend.flush();
		expect($scope.disabled).toEqual(false);
    });
  });
});