/* @flow */
export default ['$location', 'TestService', function($location : any, TestService :any) : any {
    var vm = this;

    function sum (x: number, y : number) : number {
        return x + y;
    }

    vm.message = 'This is a test OTRO ' + TestService.convert('test') + sum(3, 2);// + TestService.convert(2);

    $location.hash('test');
}];