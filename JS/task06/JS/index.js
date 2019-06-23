//声明angular模块
var myApp = angular.module("myApp", ['ui.router','ngMessages','ui.bootstrap']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    //路由引擎作为函数参数传入，这样我们可以为这个页面去配置路由了。

    $urlRouterProvider.when("", "/login");
    //如果没用路由引擎匹配当前的页面，那就默认匹配这个页面。
    $stateProvider
        // 页面被加载好，第一个显示出来的页面。。//在这里定义，所有子页面的状态。
        .state("login", {
            url: "/login",
            templateUrl: "html/login.html",
        })
        //background是我们定义的一个父级路由，而子路由是welcome。我们定义了一个ui，view的视图。
        .state("background", {
            url: "/background",
            templateUrl: "html/background.html",
        })
        .state("background.welcome", {
            url: "/welcome",
            templateUrl: "html/welcome.html",
        })
        .state("background.examine", {
            url: "/examine?page",
            templateUrl: "html/examine.html",
        })

});
