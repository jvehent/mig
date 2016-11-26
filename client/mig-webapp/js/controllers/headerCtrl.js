app.controller('headerCtrl', function($scope, $state, authUser){
	if(authUser.isLoggedIn() == false){
		$state.go('login');
	}

	alert("ad");

    $scope.profile = function(){
        $state.go('profile');
    }
    $scope.logout = function(){
        authUser.logout();
        $state.go('home');
    }
	$scope.settings = function(){
        $state.go('settings');
    }
    $scope.changedp = function(){
        $state.go('photoUpload');
    }
    $scope.imgurl = 'uploads/user/'+authUser.getUsername()+".jpg";
});