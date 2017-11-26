export default ['$location', 'TestService', function($location, TestService) {
    var vm = this;

    vm.message = 'This is a test ' + TestService.convert(1);// + TestService.convert(2);

    $location.hash('test');
}];