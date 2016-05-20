var app = angular.module("ForcastWeather", []);
app.controller("DisplayData", function($scope, $http) {
  $scope.txtZip = '35244';
  $scope.drpDays = "4";
  $scope.basicDetails={};
  $scope.Getdata = function() {

     var URL = 'http://localhost:3333/Frocast/' + $scope.txtZip + '/' + $scope.drpDays;

    $http.get(URL).
    then(function(response) {

       console.log(response);
       Maindata=response;
        console.log(response.location);
        $scope.basicDetails=JSON.parse(Maindata.data); 

    }, function(response) {
      alert('erreor');
      alert(response);
      console.log(response);
    });
  }
});
