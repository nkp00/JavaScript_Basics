// function FullName (fisrtName, LastName){

// const { default: axios } = require("axios");

//     //  console.log(this.fisrtName)
//     this.fisrtName=fisrtName;
//     this.LastName=LastName;
//     this.getName=function (){
//         console.log(this.fisrtName);
//     }

// }

// FullName.prototype.getName=function (){
//         console.log(this.fisrtName);
//     }

// var name1= new FullName ("a","b");
// console.log(name1);
// name1.getName();

// var a=[];
// var a=new Array();

// FullName.getName= function (){
//         console.log(this.fisrtName);
// }

// class HalfName {
//     constructor (fisrtName){
//         this.fisrtName=fisrtName;
//     }

//     getname(){
//         console.log(this.fisrtName)
//     }
// }

// var name2=new HalfName('a');
// name2.getname();

// console.log(new HalfName("Rita"));

// function CarDetail (carName, carPrice){
//     let temp={};

//     temp.carName=carName;
//     temp.carPrice=carPrice;

//     return temp;
// }
// function CarDetail (carName, carPrice, CarEngine){
//     let temp={};

//     temp.carName=carName;
//     temp.carPrice=carPrice;
//     temp.CarEngine=CarEngine;

//     return temp;
// }

// console.log( CarDetail("Audi","7Cr"));

// var x;
// var z;

// function abc () {
//     z=10;
//     x="name";

//    console.log(z)
//    console.log(x)
// }
// abc();
// console.log(z,x)

// engine (v8);

// compiler

// Interpreter

// how to define a variable
// data types
// how to print it
// how to define a fucntion
// how to call a function
// how to define a conditional statement
// how to define a loop

// var lastname= "patidar"

// console.log(78)

// before 2015

// var fisrtname="rita"
// var x=10;
// var isPossible=true;
// var kuchNahi=null;
// var kucVNahi=undefined;

// console.log(typeof fisrtname)
// console.log(typeof x)
// console.log(typeof isPossible)
// console.log(typeof kucVNahi)
// console.log(typeof kuchNahi)

// function nam() {
//     var x = 10;
//     if (x < 10) {
//         console.log("Simran")
//         console.log("Simran Singh")
//     }
//     else
//         console.log("Rita Jain")
// }

// var n = 0
// for (n = 0; n < 10; n++) {
//     console.log("Ham sab")
// }
// (5,3,5,5)
// while (n < 20) {
//     console.log("sikh rahe h javaScript");
//     n += 2;
//     n = n + 2
// }
// var nam="nkp"

// function abc (...num){
// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }
// }

// abc("hello", true)

// console.log(1,2,3,44,5,6,77,8,986,54,7,65432,true,nam )

// var ar1=['Rita',"Taru", 'Simran','Meetali'];
// var ar2= ar1;
// ar2.pop();

// console.log("ar 1",ar1);
// console.log("ar 2",ar2);

// var a="10";
// var b=a;
// b="50";

// var taru ={ city:"mumbai",food:'biryani'}
// var rita= {city:"mumbai",food:'Pav bhaji'};

// rita.food="Pizza"

// console.log(taru)
// console.log(rita)

// console.log(a);
// console.log(b);

// var a= "nkp";
// var b=a;
// b="not nkp"

// console.log(b)
// console.log(a)

// var obj1={firstName:"Neha", lastName:'Das'};
// var obj2=obj1;

// obj2.lastName="Ambani";
// console.log(obj1)
// console.log(obj2)

// *********************
// Prototype

// var obj1={};

// obj1.firstName='Neha';
// obj1.lastName="Das";
// obj1.age='30';

// var obj2={};

// obj2.firstName="Meetali";
// obj2.lastName="Patidar";
// obj2.age='35'

// function Obj (fisrtName,lastName,age){
//  var this={};

//  this.firstName=fisrtName;
//  this.lastName=lastName;
//  this.age=age;

//  return this;
// }

// var meetali= Obj('meetali', 'patidar','35')
// console.log(meetali);

// function car (carName,company,price){
//  var temp={};

//  temp.carName=carName;
//  temp.company=company;
//  temp.price=price;

//  return temp;
// }

// var BMW= car('A1','BMW',3);

// console.log(BMW)

// function abc(){
// var this={};

// return this

// }

// abc.prototype.nam="Simran"
// abc.prototype.kam="Engineer"

// console.log(abc.prototype)
// var temp=new abc();
// console.log(temp)
// console.log(temp.nam)
// console.log(temp.kam)

// abc.prototype.dam="dam"

// console.log(temp.dam)
// temp.nam="Rita"

// console.log(temp.__proto__.constructor)
// console.log(temp.__proto__.nam)

// var ar1=[];
// var ar2=new Array();
// Array.prototype.meetali= function (){
//     console.log("yes")
// }

// console.log(ar2.meetali());

var ishwari = {
  firstName: "soemthing",
  gender: "something",
  age: 26,
  DOB: "",
  address: "",
};
var rita = {
  firstName: "soemthing",
  gender: "something",
  age: 26,
  DOB: "",
  address: "",
};

var simran = {
  firstName: "soemthing",
  gender: "something",
  age: 26,
  address: "",
};

function employee(fisrtName, age, contact) {
  var temp = {};

  temp.fisrtName = fisrtName;
  temp.age = age;
  temp.contact = contact;

  return temp;
}

// var ar= [];
// var ar=new Array();
// console.log(ar);

// var temp={};
// var temp=new Object();
// console.log(temp)

function Employee(fisrtName, age, contact) {
  //  var temp={};
  // var this={};

  this.fisrtName = fisrtName;
  this.age = age;
  this.contact = contact;

  //  return temp;
  // return this;
}

// var Simran = new Employee("simran", 24, 123456);

// Employee.prototype.isVaccinated = function () {
//   console.log("Ha mai vaccinated hu.");
// };

// Simran.isVaccinated();

// console.log(Simran);

// function printSOmething(nam){
//     console.log(nam+ " is getting bored");
//     console.log(nam+ " is getting bored");
//     console.log(nam+ " is getting bored");
// }

// printSOmething("Ishwari");
// var kuch_v=new printSOmething("Ishwari")

// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
//   this.walk = function () {
//     console.log("Hi I am " + this.name + " and I like walking.");
//   };
// }

// var simran= new Employee('Simran', 23)
// var Rita= new Employee('Rita', 22)
// var ishwari= new Employee('Ishwari', 22)

// Rita.walk();

// var a;
// var nkp;

// v = 200;
// var z;

// function walk() {
//   nkp = "mera nam";
//   a = 10;
//   b = 100;
//   z = 500;
//   console.log("I am from walk");
//   // console.log(nkp)
// }
// walk();

// console.log(a);
// console.log(z);
// console.log(nkp)

// function run (){
//     console.log("I am from run ")
// }
// var run = 10;
// walk(run);

// var a =10;

// var ar1 = [23, 12, 78, 34, 5, 45, 43, 89, 8, 61, 98, 38, 56, 23];

// var ar2 = [12, 34, 5];

// function JaSimranJa(ar1, ar2) {
//   var j = 0;
//   for (var i = 0; i < ar1.length; i++) {
//     if (ar1[i] == ar2[j]) {
//       j++;
//     }
//     if (ar2.length == j) {
//       console.log("Yes it is a part of it");
//       return;
//     }
//   }
//   console.log("No.");
// }

// JaSimranJa(ar1, ar2);
// [2, 3, 4, 1, 3, 5, 8]

// function taru() {
//   var rita = [2, 3, 4, 1, 5, 8];
//   for (let i = 0; i < rita.length; i++) {
//     for (let j = i + 1; j < rita.length; j++) {
//       if (rita[i] == rita[j]) {
//         console.log("Yes");
//         return;
//       }
//     }
//   }
// }

// taru();

// function meetali() {
//   var obj = {
//     2: 2,
//   };
//   var rita = [2, 3, 4, 1, 5, 5, 8];
//   for (let i = 0; i < rita.length; i++) {
//     if (obj[rita[i]]) {
//       console.log("Yes");
//       return;
//     } else {
//       obj[rita[i]] = rita[i];
//     }
//   }
//   console.log("No");
// }

// meetali();

// var temp = {
//   firstName: "Ishwari",
//   lastName: "Sawant",
//   age: 24,
//   contact: 3435454564,
// };

// console.log(temp["2"]);

// function Human(fisrtName) {
//   this.fisrtName = fisrtName;
//   this.lastName = "";
// }

// Object.prototype.run = "Hi xxx";
// // Human.prototype.run = "I am running";
// Human.prototype.greet = function () {
//   console.log("Hello ");
// };
// Human.prototype.talk = function () {
//   console.log("talking");
// };

// Array.prototype.bolo = function () {
//   console.log("mai bol rha hu");
// };

// var ar = new Array(5);

// console.log(ar);
// ar.push();
// ar.bolo();

// rita={
//   fisrtName:"Rita"
//  run:'I am not running'
// }

// var rita = new Human("Rita");

// var simran = new Human("Simran");

// console.log(rita.run);

// var ar2 = new Array();

// var ar2 = [1, 2, 3, 4, 5, 6];

// console.log(rita.fisrtName);
// console.log(rita.run);
// console.log(Human.prototype);
// console.log(rita.__proto__);
// console.log(simran.__proto__);

// let temp = {};
// let ar = [];
// console.log(temp.__proto__);
// console.log(ar.__proto__);

// var obj = new Object();
// var obj = {};

// console.log(Object.prototype);

// var str = "hi";
// console.log(ar);

// **************************************************
// Asynchronus JavaScript

// console.log("before");

// setTimeout(function () {
//   console.log("In settime out");
// }, 10);

// console.log("in Between");
// console.log("in Between");

// setTimeout(function () {
//   console.log("Second output");
// }, 0);

// console.log("after");

// console.log("after");

// it's non blocking

// function dusraFucntion() {
//   console.log("Meetali ne bola");
// }

// dusraFucntion();

// console.log("Meetali ne bola");

// for (let i = 0; i < 5; i++) {
// setTimeout(function () {
//   console.log(i);
// }, i * 1000);
// console.log(i);
// }

// console.log(i);
// 0, 1, 2, 3, 4;
// 0,1,2,3,4

// Date : 21/08/2021
// What should we discuss about today?

// function abc() {
//   a = 10;
//   console.log(10);
// }

// var a = "";
// a.indexOf();

// var b = null;
// b.indexOf();

// var a = 10;
// var b = "Neha";
// var c = function () {
//   console.log("Yaad h tumko ishwari?");
// };

// var a = "10";
// var b = 10;

// console.log(a + b);
// console.log("10" + "10");

// console.log("hello" + "world");

// var c = "10";
// var d = "100";

// console.log(c - d);

// IIFE
// Immediately Invoked Function Expression

// (function abc() {
//   console.log("Hi I am learning IIFE");
// })();

// var z = 10;

function abc() {
  var z = 20;
  console.log(z);
  return 10;
}
console.log(abc());

// console.log(z);

// abc();

// console.log(b);

// abc();

// RoadMap for 2021

// callback/ Promises/ async await
//2015 +
// let/ const/ arrow function / spread operator/ this
// oops

fetch("https://jsonplaceholder.typicode.com/posts").then((value) => {
  console.log(value);
});

axios.get("https://jsonplaceholder.typicode.com/posts").then((value) => {
  console.log(value);
});
