myApp.controller("mylogin",function ($scope,$http,$state) {
    $scope.start=function () {
        $http({
            method:"POST",//上传方式
            url:"/carrots-admin-ajax/a/login",//url地址
            //设置表头
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            //params请求参数
            params: {
                name:$scope.name,
                pwd:$scope.user.password
            },//发送的数据

            //设置表头
        })
            .then(function (judge) {
                console.log(judge);
                console.log(judge.data.message);
                $(".user-mode").text(judge.data.message);
                if (judge.data.code === 0) {
                    $state.go("background.welcome");
                }
            });
    };
});
//test