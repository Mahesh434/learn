/**
 * Created by Mahesh on 7/3/2016.
 */

/**
 * Created by Mahesh on 7/3/2016.
 */

app.factory('appConfig',function(){
    var leftMenu=[
        {
            id:1,
            name:'Home',
            link:'/home',
            controller:'#',
            icon:'fa fa-home',
        },
        {
            id:2,
            name:'About',
            link:'/aboutus',
            controller:'#',
            icon:'fa fa-info-circle',
        },
        {
            id:3,
            name:'Contact Us',
            link:'/contactus',
            controller:'#',
            icon:'fa fa-envelope',
        },
        {
            id:4,
            name:'Search',
            link:'/search',
            controller:'#',
            icon:'fa fa-search',
        }
    ];

    return{
        getLeftMenu:function(){
            return leftMenu;
        }
    }
});

/**
 * Created by Mahesh on 7/3/2016.
 */
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/home',{
        templateUrl:'views/home.html'
    })
        .when('/aboutus',{
            templateUrl:'views/aboutus.html',
        })
        .when('/search',{
            templateUrl:'views/search.html',
        })
        .when('/contactus',{
            templateUrl:'views/contactus.html',
        })
        .when('/editprofile',{
            templateUrl:'views/editProfile.html'
        })
        .otherwise({redirectTo:'/home'})
}]);
/**
 * Created by Mahesh on 7/3/2016.
 */
app.controller('mainController',['$scope','appConfig','$location',function($scope,appConfig,$location){
    $scope.appConfig=appConfig;
    $scope.isSelected=function(path){
        if($location.path()==path){
            return true;
        }else{
            return false;
        }
    }
}]);