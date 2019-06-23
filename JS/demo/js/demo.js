//
// //AJAX同步。
// //构造函数实例化一个对象
// var xhr=new XMLHttpRequest();
// //启动请求，三个参数，get获取参数的方式，指定文件在这个服务器的位置，第三个false，就是同步，默认是ture。。
// xhr.open("get","xxx.jsp",false);
// //send方法，要发出去的参数。
// xhr.send(null);
//
// //status,相应http在状态码
// if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 ){
//    alert(xhr.responseText);
//    //responseText,响应所返回的文本。
// }else {
//    alert("Requst was unsuccessful:"+xhr.status);
// }
//
//

//异步。
//实例化对象
// var xhr=new XMLHttpRequest();
//open方法来启动请求，true表示异步，get获取的方法，xxx指定文件在这个服务器的位置。
// xhr.open("get","xxx.jsp",true);
//接受一个参数，null没有。去请求服务器。
// xhr.send(null);
//onreadystatechange 查看请求状态变化的调用事件。
// xhr.onreadystatechange=function () {
//readyState 获取请求的状态，如果==4，就代表完成了。3的话接收中，2 调用send，还没有响应。1的话。open正在启动。0，初始化。
// if (xhr.readyState == 4){
//    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
//       alert(xhr.responseText);
//    }else {
//       alert("Request was unsuccessful:" + xhr.status);
//如果，readyState不能4，返回 http状态码
// }
// }
// };

// //jquery常用参数。
//
// $.ajax({
//    url:"xxx.jsp",//表示要请求的url地址
//    type:"get",//表示他要是使用的http方法，type是字符串。get不区分大小写。
//    data:{t:"sd"},//data是需要传递的查询参数。{t:“sd}，可能是别的什么数据类型。具体看接口怎么定的，我们怎么去传。
//    datatype:"json",//标识出被响应的所返回的数据类型，常见xml，html，json，text。
//    success:function (data) {
//       //success 响应的状态码，如果是成功的时候就调用这个函数。
//       $("#content").text(data);
//    }
// });
//
//
// //更简化版的ajax请求,相当于$.ajax({});//这里我们只需要知道，url，data，和success
// $.get("// xxx:jsp",{t: "sd" },function (data) {alert(data)});
// $.post("// xxx:jsp",{t:"sd"},function (data) {alert(data)});


//json格式
// var data={
//    a:"one",
//    b:"1",
//    c:[1,2,3,4],
//    d:{name:"崔浩然"},
//    e:true,
//    f:null,
//    g:undefined,
// };
// Json数据转化。
// 把对象转化为JSON格式的序列字符串。
// JSON.stringify(data);
// JSON.parse('{"a":"one","b":"1","c":[1,2,3,4],"d":{"name":"崔浩然"},"e":true,"f":null}');
//
// 怎么去跨域。
//点击事件
// $('#btn').click(function () {
//     $.getJSON("http://api.qingyunke.com/api.php", {
//         key: "free",
//         appid: 0,
//         msg: $('#question').val()
//         }, function (data) {
//         $('#answer').text(data.content);
//    })
// });
// var susu = document.getElementById("question");
// function btns() {
//     console.log(susu.value);
// }
//
//return
// function test() {
//     for (var i=0; i<10; i++){
//        if (i == 5){
//            continue
//        }
//        console.log(i);
//     }
// }
// test();
//过滤掉小于 10 的数组元素：

//代码：
//代码：
// var arr =[1,2,3,4,5];
// arr.forEach(function (item,index) {
//     console.log(item,index);
// });

// var a=1;//1是栈
// var b=a;
// console.log(a,b);//b并不影响a的值，那就是深拷贝。1，1
// var b=2;
// console.log(a,b);//1，2

//浅拷贝，


//深拷贝
// var arr=[1,2,3,4,5,6];
// var test=arr.concat(12);
// console.log(test);//1,2,3,4,5,6,12
// console.log(arr);//1,2,3,4,5,6
// var json =
//     {"password":123456,
//         "name":"myname",
//         "Booleans":true,
//         "Array":[1,2,3],
//         "object":{}
//     };
//
// $("div").delegate("button,p", "click", function f() {
//     $("p").text("这是什么");
//     // $("span").text("1")
// });
// //
// var test={
//     name:"崔浩然",
//     age:"18",//name就算key，value，崔浩然
// };
// console.log(test.name);
// var arr=[];
// for (var i=0;i<10; i++){
//     arr.push(test);
// }


// let f = function () {
//     this.a = 1;
// this.b = 2;
// };
// let o = new f();
// console.log(o.a);
// //定义一个函数。
// function Person() {
//
// }
//
// //创建一个构造函数。
// var test =new Person();
// //使用构造函数创建一个对象。
// test.name="崔浩然";
// console.log(test.name);//打印的是对象。
// console.log(Person);//是一个空函数。
// console.log(new Person());//我们使用构造函数变成了对象。
function test() {

}
var demo=new test();
//test就是一个构造函数。我们使用new，创建了一个实例对象，demo。
demo.name="水民";
console.log(demo);
function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
//构造函数的prototype，指向了，person1的原型。
var person1 = new Person();//每个构造函数都会有一个，prototype。
var person2 = new Person();
//每个JavaScript对象除了null之外在创建的时候，就会创建与之关联另一个对象。
// 每个对象都可以从原型上继承属性
console.log(person1.name); // Kevin
console.log(person2.name); // Kevin
console.log(new Person());
console.log(person1);

//proto是JavaScript对象，除了null都具备的属性。这个属性会指向对象的原型。
function obj() {

}
obj.prototype.name="水民";
var Obj=new obj();
console.log(Obj.__proto__ === obj.prototype);// true
//每个构造函数都会有一个prototype属性，每个对象，除了null都有一个叫proto的属性，这个属性会指向对象原型。

//constructor，每个原型都会有一个constructor的属性指向相关的构造函数。

//所以就是每个构造函数都会有一个叫prototype的属性，，会指向实例原型。
//JavaScript对象除了null，都会有一个叫，proto的属性，指向该对象的原型。
//每个原型的实例都会有一个叫做，constructor的属性指向关联的构造函数。

// function z() {
//
// }
// // 虽然写在注释里，但是你要注意：
// // prototype是函数才会有的属性
// z.prototype.name = 'Kevin';
// var z1 = new z();
// var z2 = new z();
// console.log(z1.name) // Kevin
// console.log(z2.name) // Kevin
//


//从这开始
function z() {

}
z.prototype.name= "刘超";
var z1 = new z();
var z2 = new z();
console.log(z1.name);
console.log(z2);
console.log(z.prototype);
// //每个原型都会有一个constructor属性向关联的构造函数。


// function c1() {
//
// }
// c1.prototype.name="刘谋";
// var c2= new c1();
// console.log(c2.name);
// c2.name="PPD";
// console.log(c2.name);
// delete c2.name;
// console.log(c2.name);
//
//
// var obj= new Object();
// obj.name="王诚";
// console.log(obj.name);
// console.log(obj);
// // 我们创建一个构造函数，对象，很明显的看出来。obj。指向了我们的构造函数。




//创建一个函数

// function test() {
//
// }
// //给test原型的name添加一个属性。
// test.prototype.name="刘谋";
// console.log(test);
// var demo = new test();
// var person = new test();
//
// constructor
// console.log(test === test.prototype.constructor);//true


// function test() {
//
// }//每个函数都会有prototype。每个对象都会有proto。
// var demo= new test();
// console.log(demo.__proto__ === test.prototype);//true。
//
// function test() {
//
// }
// var demo = new test;
// console.log(demo.__proto__=== test.prototype);//true
// console.log(test.prototype.constructor === test);//true


// 实例域原型
// function test() {
//
// }
// test.prototype.name="哈喽";
// var demo = new test();
// console.log(demo.name);//哈喽
// demo.name="拜拜";
// console.log(demo.name);//拜拜
// delete demo.name;
// console.log(demo.name);//哈喽

//
// function test() {
//
// }
// test.prototype.name="水民";
// var demo1 =new test();
// var demo2 =new test();
// console.log(demo1);
// console.log(demo2.name);
// // console.log(demo1.prototype.__proto__ === null);
// console.log(demo1.__proto__.prototype === null) // true

// function x() {
//
// }
// x.prototype.name="刘超";
// var v=new x();
// console.log(v.name);
// console.log(x.prototype === v.__proto__);
// console.log(x.prototype.constructor === x);
// console.log(v.__proto__);
// console.log(x.prototype);

function testone() {

}
testone.prototype.name="张飞";
var z=new testone();
console.log(z.name);
console.log(z.__proto__);
console.log(testone.prototype);


 j=11;//这是全局环境，与全局作用域。
function vue() {
    //局部作用域。
    let tet =function () {//如果使用let创建函数，那么tet就是块级作用域。
        for (var i=0; i<9; i++){
            console.log(i)
        }
        return i;
        console.log(j);//return终止了，全局变量j。
    };
    console.log(tet());

    //let声明了块级作用域。
    for (let c=0; c<5; c++) {
        console.log(c);
    }
    console.log(c)//报错。无法访问
}
vue();