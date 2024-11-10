"use strict";
// const arr:number[] = [1,2,3,4,5,6]
// const array:Array<number> = [1,2,3,4,5,6]
// enum StatusCodes {
//     SERVERERROR = 'Internal server error',
//     NOTFOUND = 'Page not found'
// }
// StatusCodes.NOTFOUND
// let a:unknown
// a=12;
// a='wdw'
// unknown  ================>
// if(typeof a === 'string')
//     a.toUpperCase()
// else if( typeof a === 'number')
//     a.toString()
// // void
// function greet():void{
//     let a:number = 12
// }
// interface  ================>
// interface User {
//     name:string,
//     age:number,
//     address?:string
// }
// function user(user:User){
//     console.log(
//         user.address,
//         user.age,
//         user.name
//     )
// }
// user({
//     name:"tanmay",
//     age:11,
//     address:'meerut'
// })
// extended interface  ================>
// interface Admin extends User{
//     role:boolean
// }
// function admin(obj:Admin){
//     console.log(obj.role)
// }
// admin({
//     name:"tanmay",
//     age:11,
//     role:false,
//     address:"meerut"
// })
// type alias   ================>
// type value  = boolean | number 
// let values:value;
// values = true
// class and objects  ================>
// class users {
//    private region:string = 'India';
//    private name;
//    public age;
//    constructor( name:string, age:number ){
//      this.name=name;
//      this.age =age;
//      this.region=this.region 
//    }
// }
// const userOne  =  new users("werw",121)
// userOne.age =143
// console.log(userOne)
// methods in class ================>
// class User {
//     private age:number = 0;
//     public name;   // can be accessable directly to change the content 
//     private region;   // not accessable directly to change the content 
//     constructor(name:string,region:string){
//         this.name = name;
//         this.region = region
//         this.age = this.age // private varibale and can not be passed through constructure .
//     }
//     changeUsername(name:string){  // class methods to change the content from the class if the variable private or public 
//         this.name = name
//     }
//     changeregion(region:string){   // class methods to change the content from the class if the variable private or public 
//         this.region  = region
//     }
// }
// const tanmay = new User('Tanmay','India')
// tanmay.changeregion("UK")
// tanmay.changeUsername("Amit")
// console.log(tanmay)
// ==========================>
class user {
    constructor(name, age) {
        this.role = 'user';
        this.name = name;
        this.age = age;
        this.role = this.role;
    }
}
class Admin extends user {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.role);
    }
}
const tanmay = new Admin('tanmay');
tanmay.getValue();
// static ==============>
// class shery {
//     static version = 1.1
//     static getRandomNumber(){  // we can use the methods of the class without use the instance of the class when using static . 
//         return Math.random()
//     }
// }
// abstract class ================>
// class Payment{
//     protected amount;
//     constructor(amount:number){
//         this.amount= amount
//     }
//     getValidateAmount(amount:number){
//         return this.amount > 121
//     }
// }
// class paytm extends Payment{
// }
// const one = new Payment(242)
// const newAmount = one.getValidateAmount(333)
// console.log(newAmount)
// console.log(one)
// functions rest parameters ==========>
// function array(...args:string[]){
//     console.log(args)
// }
// array("jbsbf",'fsfe','sefef','efewf')
// const array1:Array<number> = [1,2,3,4,5,6,7]
// console.log(array1)
// generics =================>
// generics in function -
function array(a) {
    // console.log(a)
    // return 12 as T;
    return 12;
}
function log(a, b, c) {
    console.log(a, b, c);
}
array(12);
log("Tanmay", "Tanmay", 13);
// generics in interface ----
// interface User<T>{
//     name:string,
//     age:number,
//     key:T
// }
// function newFunction(args:User<number>){
//     console.log(args)
// }
// newFunction({
//     name:"tanmay",
//     age:31,
//     key:131
// })
// generics in class --
// class Users<T> {
//     public key;
//     constructor(args:T){
//        this.key = args
//     }
// }
// const u1 = new Users<number>(21)
// const u2 = new Users<string>('21')
// console.log(u1)
// console.log(u2)
// type assertion ============>
// let a:any = 'Tanmay mern stack developer';
// (<number>a).toFixed()
// (<string>a).toString()
// (a as number).toFixed()
// type guard =======================>
// class Remote{
//     shitchOffRemote(){
//         console.log("Rmeote switched off")
//     }
// }
// class Car{
//     switchOffCar(){
//         console.log("Car switched off")
//     }
// }
// const v1 = new Remote()
// const v2 = new Car()
// function valueGet(value:Remote | Car){
//     if(valueGet instanceof Remote){
//         v1.shitchOffRemote()
//     }else if(valueGet instanceof Car){
//         v2.switchOffCar()
//     }
// }
// valueGet(v2)
