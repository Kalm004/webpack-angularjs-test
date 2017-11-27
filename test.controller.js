/* @flow */
import { TestService } from "./test.service";

export default function TestController($location: any, testService: TestService) {
    let vm = this;

    function sum (x: number, y : number) : number {
        return x + y;
    }

    vm.message = 'This is a test OTRO ' + (testService.convert(2) + sum(3, 2));

    $location.hash('test');
}
TestController.$inject = ['$location', 'TestService'];