
// 自变量、函数声明提升
// var a = 1;
// function foo (){
//     a = 2;
//     return ;
//     function a(){
//         return 3;
//     }
// }
// foo();
// console.log(a)

// var a = 1;
// function foo (){
//     function a(){ //函数声明被提升了
//         return 3;
//     }
//     a = 2; //此时的a为局部变量
//     return ;
// }
// foo();
// console.log(a) // 1
// function Person(name,age) {
//   this.a = 'aaa'
//   this.name = name;
//   this.age = age;
// }
// Person.height = 'asd'
// Person.prototype.height = 'hahaha'
// const foo = new Person('Kertor',66)
// // console.log(foo.a)
// // console.log(Person.__proto__.a);

// // console.log(Person.prototype);
// console.log(foo.name);
// 同时创建四个变量，用逗号分隔
// var myObj = new Object(),
//     str = "myString",
//     rand = Math.random(),
//     obj = new Object();

// myObj.type              = "Dot syntax";
// myObj["date created"]   = "String with space";
// myObj[str]              = "String value";
// myObj[rand]             = "Random Number";
// myObj[obj]              = "Object";
// myObj[""]               = "Even an empty string";

// console.log(myObj[""]);
// for (var i in myObj){
//   console.log(i);
// }
// const a = '12.01'
// console.log(parseInt(a));
// // console.log(typeof parseFloat(a));
// num = 10
// console.log(num++ + ++num);
// console.log(num);


// Promise
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Hello Word!');
//     }, 1000);
// })


// ES6新特性

// 1. const、let 和ES5 var
// function getNote(isChose) {
//     if (isChose) {
//         var noted = 'this is a note'
//     } else {
//         var ignored = 'there is no note'
//         console.log(noted);
//     }
// }
// getNote(false)

// function getNote(isChose) {
//     if (isChose) {
//         let noted = 'this is a note'
//     } else {
//         let ignored = 'there is no note'
//         console.log(noted);
//     }
// }
// getNote(false)

// 2. 字符串连接
// const student = {
//     name: 'Black Yang',
//     class: 'Room 2-1'
// }
// const teacher = {
//     name: 'Tim King',
//     sex: 'male'
// }
// const message = `${student.name} studies in ${student.class} and his
//                  teacher ${teacher.name} is ${teacher.sex}.`
// console.log(message);

// 3. 数组、对象解构
// const arr = [20, 7 , 21]
// const [a, b, c] = arr
// console.log(a,b,c);
// const obj = {
//     name: 'Black Y',
//     age: 24,
//     height: 168
// }
// const {name, height, age} = obj
// console.log(name, age, height);

// 4. 对象字面量增强写法
// let name= 'Black Y',
//     age= 24,
//     height= 168
// const obj = {
//     name,
//     age,
//     height
// }
// console.log(obj);

// 5. for...of
// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// for (let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for (const index in arr){
//     console.log(arr[index]);
// }
// for (const item of arr){
//     console.log(item);
// }

// 6. 展开运算符
// const books = ["Althrough", "Halun", "Tutal Love", "The last night"];
// console.log(...books);
// const fruits = ["apple", "bananas", "watermelon"];
// const food = ["hamburg", "chicken", "peanut"];
// const con = [...fruits, ...food];
// const old_con = fruits.concat(food);
// console.log(con);
// console.log(old_con);
// const [a, b, c , ...item] = con // 变量赋值
// console.log(a, b, c, item);
// function old_sum() {
//     let total = 0;
//     for (const argument of arguments) {
//         total += argument
//     }
//     return total
// }
// console.log(old_sum(3, 4, 13));
// function sum(...nums) {
//     let total = 0;
//     for (const num of nums) {
//         total += num
//     }
//     return total
// }
// console.log(sum(3, 4, 13));

// 7. 箭头函数
// const old_upperName = ["Black", "Bortal", "Kalon"].map(function(name){
//     return name.toUpperCase();
// })
// console.log(old_upperName);
// const upperName = ["Black", "Bortal", "Kalon"].map(name => name.toUpperCase())
// console.log(upperName);
// this指向
// function IceCream(){
//     this.num = 0;
// }
// IceCream.prototype.addNum = function(){
//     setTimeout(function() {
//         this.num++;
//         console.log('num added!');
//         console.log(this.num);
//         console.log(dessert.num);
//     }, 1000);
// }
// const dessert = new IceCream();
// dessert.addNum();
// 闭包解决this指向问题
// IceCream.prototype.addNum = function(){
//     const that = this
//     setTimeout(function() {
//         that.num++;
//         console.log('num added!');
//         console.log(that.num);
//         console.log(dessert.num);
//     }, 1000);
// }
// const dessert = new IceCream();
// dessert.addNum();
// IceCream.prototype.addNum = function(){
//     setTimeout(() => {
//         this.num++;
//         console.log('num added!');
//         console.log(this.num);
//         console.log(dessert.num);
//     }, 1000);
// }
// const dessert = new IceCream();
// dessert.addNum();

// 8. 默认参数
// function greet(name, greeting){
//     name = (typeof name !== 'undefined')? name : 'student';
//     greeting = (typeof greeting !== 'undefined')? greeting : 'Hello';

//     return `${greeting},${name}!`;
// }
// console.log(greet());
// console.log(greet('King'));
// console.log(greet("King",'Welcome'));
// function greet(name = 'student', greeting = 'Hello'){
//     return `${greeting},${name}!`;
// }
// console.log(greet());
// console.log(greet('King'));
// console.log(greet("King",'Welcome'));

// 9. 默认值与解构(数组、函数)

// 数组
// function createGrid([width = 5, height = 5]) {
//     return `Generates a ${width} x ${height} grid`;
// }
// console.log(createGrid([]));
// console.log(createGrid([2]));
// console.log(createGrid([3, 4]));
// console.log(createGrid([undefined, 4]));
// console.log(createGrid()); // 报错
// function createGrid([width = 5, height = 5] = []) {
//     return `Generates a ${width} x ${height} grid`;
// }
// console.log(createGrid());// 解决上述问题
// 函数
// function createModule({ nums = 1, names = ["Black Yang"] } = {}) {
//     const numText = nums === 1 ? 'num' : 'nums';
//     return `there is ${nums} ${numText} with ${names.join(' and ')} names.`
// }
// console.log(createModule({}));
// console.log(createModule({ nums: 3 }));
// console.log(createModule({ nums: 3, names: ["Poor King"] }));
// console.log(createModule({ names: ["Poor King"] }));
// console.log(createModule());

// // 10. 类的创建
// // ES5
// function Plane(numEngines) {
//     this.numEngines = numEngines;
//     this.enginesActive = false;
// }

// // 由所有实例 "继承" 的方法
// Plane.prototype.startEngines = function () {
//     console.log('starting engines...');
//     this.enginesActive = true;
// };
// // ES6
// class Plane {
//     //constructor方法虽然在类中,但不是原型上的方法,只是用来生成实例的.
//     constructor(numEngines) {
//         this.numEngines = numEngines;
//         this.enginesActive = false;
//     }
//     //原型上的方法, 由所有实例对象共享.
//     startEngines() {
//         console.log('starting engines…');
//         this.enginesActive = true;
//     }
// }

// console.log(typeof Plane); //function
// // 静态方法
// class Plane {
//     constructor(numEngines) {
//         this.numEngines = numEngines;
//         this.enginesActive = false;
//     }
//     static badWeather(planes) {
//         for (plane of planes) {
//             plane.enginesActive = false;
//         }
//     }
//     startEngines() {
//         console.log('starting engines…');
//         this.enginesActive = true;
//     }
// }

// // 11. super、extencs
// class Tree {
//     constructor(size = '10', leaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null }) {
//         this.size = size;
//         this.leaves = leaves;
//         this.leafColor = null;
//     }

//     changeSeason(season) {
//         this.leafColor = this.leaves[season];
//         if (season === 'spring') {
//             this.size += 1;
//         }
//     }
// }

// class Maple extends Tree {
//     constructor(syrupQty = 15, size, leaves) {
//         super(size, leaves); //super用作函数
//         this.syrupQty = syrupQty;
//     }

//     changeSeason(season) {
//         super.changeSeason(season);//super用作对象
//         if (season === 'spring') {
//             this.syrupQty += 1;
//         }
//     }

//     gatherSyrup() {
//         this.syrupQty -= 3;
//     }
// }
// //ES5
// function Tree(size, leaves) {
//     this.size = size || 10;
//     this.leaves = leaves || { spring: 'green', summer: 'green', fall: 'orange', winter: null };
//     this.leafColor;
// }

// Tree.prototype.changeSeason = function (season) {
//     this.leafColor = this.leaves[season];
//     if (season === 'spring') {
//         this.size += 1;
//     }
// }

// function Maple(syrupQty, size, leaves) {
//     Tree.call(this, size, leaves);
//     this.syrupQty = syrupQty || 15;
// }

// Maple.prototype = Object.create(Tree.prototype);
// Maple.prototype.constructor = Maple;

// Maple.prototype.changeSeason = function (season) {
//     Tree.prototype.changeSeason.call(this, season);
//     if (season === 'spring') {
//         this.syrupQty += 1;
//     }
// }

// Maple.prototype.gatherSyrup = function () {
//     this.syrupQty -= 3;
// }
// // 子类super必须在使用this前调用
// class Apple { }
// class GrannySmith extends Apple {
//     constructor(tartnessLevel, energy) {
//         this.tartnessLevel = tartnessLevel; // 在 'super' 之前会抛出一个错误！
//         super(energy);
//     }
// }


// JS call\apply
// function cat() {

// }
// cat.prototype = {
//     food: 'fish',
//     say: function() {console.log('Hello man!, I want to eat ' + this.food)}
// }
// cat.prototype = { // 执行显示undefined
//     food: 'fish',
//     say: () => console.log('Hello man!, I want to eat ' + this.food)
// }
// whiteCat = {
//     food: 'cabbage'
// }
// let balcjCat = new cat;
// balcjCat.say();
// balcjCat.say.call(whiteCat)
// balcjCat.say.apply(whiteCat)

// JS this 指向
// function foo() {
//     var a = 2;
//     this.bar();
// }
// function bar() {
//     console.log(this.a);
// }
// foo();
// bar();
// function foo() {
// 	console.log( this.a );
// }

// function doFoo(fn) {
// 	// `fn` 只不过 `foo` 的另一个引用

// 	fn(); // <-- 调用点!
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "oops, global"; // `a` 也是一个全局对象的属性

// doFoo( obj.foo ); // "oops, global"
// obj.foo()

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // 函数引用！

var a = "oops, global"; // `a` 也是一个全局对象的属性

bar(); // "oops, global"
foo();


