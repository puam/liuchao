myApp.controller("mybackground", function ($scope, $http,$state) {
    $scope.list = function () {
        console.log("点击事件运行");
        $state.go("background.examine");
        // $http({
        //     method: "get",
        //     url: "/carrots-admin-ajax/a/article/search",
        //
        // })
        //     .then(function (request) {
        //         console.log(request.data.data.articleList);
        //         console.log(request.data.code);
        //         if (request.data.code === 0) {
        //             $state.go("background.examine");
        //         }
        //
        //     })
    }
});
