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