app.controller('homeCtrl', function($scope, $state, $http){

    $scope.getHeartbeat = function(){
        console.log("here");
		$http.get('http://localhost:12345/api/v1/heartbeat').success(function(response){
			$scope.heartbeat = response;
            console.log(response)
		});
    }
});