/* @flow */
export class TestService {

    test: number;

    constructor(){
        this.test = 3;
    }

    convert(x : number) : number {
        return x * this.test;
    }
}