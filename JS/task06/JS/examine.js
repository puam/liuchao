myApp.controller("examine",function ($scope, $http,$state,$stateParams) {
    // $scope.console.log($scope.calendar);
    //使用get请求数据。
    // console.log($stateParams);
    var z=$stateParams.page;
    // console.log($stateParams)
    $http({
        method: "get",
        url: "/carrots-admin-ajax/a/article/search",
        params: {
            page:z,
        }
    })

    //每次跳转的页数
        //then，判断对错。
        .then(function (request) {
            if (request.data.code === 0) {
                $scope.listDate=request.data.data.articleList;
                $scope.total=request.data.data.total;
                console.log( $scope.total,request.data.data);
                // $scope.total=$stateParams.total;
                console.log(request.data.data.total);



            }else {
                console.log(request.data.code);

            }

            // console.log($scope.listDate.status);
            // myApp.filter("filtration",function () {
            //     return function (listData) {
            //         switch (listData.status) {
            //             case 1:
            //                 listData.status="上线";
            //                 break;
            //             case 2:
            //                 listData.status="下线";
            //                 break;
            //                 return listData.status
            //         }
            //     }
            // });




            // // //定义的过滤器
            // myApp.filter('reverse', function() { //可以注入依赖
            //     switch ($scope.listDate.status)
            //     {
            //         case 1:
            //             $scope.listDate.status=="上线";
            //             break
            //         case 2:
            //             $scope.listDate.status=="下线";
            //             break
            //
            //     }
                // console.log(listDate.status);
            // });
        });
    // $scope.records=["刘超","刘超","刘超","刘超","刘超"]

    //请求分页
    //
    // $http({
    //     url:"/carrots-admin-ajax/a/article/search?page",
    //     method: "get",
    //
    // })
    //     .then(function (pagination) {
    //         console.log(pagination);
    //         console.log("成功");
    //     });

    // 日历选择器定义的data对象。
    //     // $scope.dateOptions1={
    //     //     maxDate:$scope.calendar,
    //     // };
    // $scope.dateOptions2={minDate: $scope.dt,};

    //点击input出现日历的js文件。
    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    //日历选择器，可能不需要js文件。
    // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];//1
    // // $scope.format = $scope.formats[0];//2
    // $scope.format = $scope.formats[1];//2
    // $scope.altInputFormats = ['M!/d!/yyyy'];//手动输入支持的格式 6


    $scope.popup1 = {
        opened: false
    };
    $scope.popup2 = {
        opened: false
    };

    //两个状态input框的数组。
    // $scope.
    // $scope.options.minDate = $scope.calendar;
    $scope.hstep = "全部";
    $scope.menu = "全部";
    $scope.options = {
        hstep: ["全部", "上线", "草稿"],
        menu: ["全部", "首页Banner", "找职位Banner","找精英Banner","行业大图"]
    };
    //清除input框的值。
    $scope.eliminate=function () {
        $scope.dt=null;
        $scope.calendar=null;
        $scope.hstep="全部";
        $scope.menu="全部";
    };

});
//myapp需要放外面。,这是状态过滤器。
myApp.filter("filtration",function () {
    return function (status) {
        switch (status) {
            case 1:
                status="草稿";
                break;
            case 2:
                status="上线";
                break;
        }
        return status
    }
});
//这是类型过滤器，type。
myApp.filter("typeFilter",function () {
    return function (type) {
        switch (type) {
            case 1:
                type="首页Banner";
                break;
            case 2:
                type="行业大图";
                break;
            case 0:
                type="找职位Banner";
                break;
            case 3:
                type="找精英Banner"
        }
        return type
    }
});
