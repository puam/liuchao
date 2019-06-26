//声明式渲染，vue的核心式一个允许采用简洁的模板语法来声明式的将数据渲染到dom的系统。
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello 尤玉溪!',//vue的所有东西都是响应式的。
        name:"尤玉溪",
    }
});
var test =new Vue({
    el:"#test",
    data: {
        arr:[1,2,3,4,5],
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString(),
        value:2,
    }
});
var app3 = new Vue({
    el:'#app3',
    data:{
        see:'true',
    }
});
var app4 = new Vue({
    el:'#app4',
    data:{
        test:[1,2,3,4,5,6]
    },
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
});
var app6 = new Vue({
    el: '#app6',
    data: {
        message: 1,
    },
});
var app7 =new Vue({
    el:"#app7",
    data:{
        yes:true,
        no:false,
    }
});