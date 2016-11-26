app.controller('homeCtrl', function($scope, $state, authUser, $http){
    if(authUser.isLoggedIn()){
        
        $state.go('dashboard');
    }
	$scope.dropdownMenu = function(){
        $('.dropdownMenu').fadeToggle();
    }
    $scope.dashboard = function(){
        $state.go('dashboard');
    }
    $scope.logout = function(){
        authUser.logout();
        $state.go('home');
    }
    $scope.profile = function(){
        $state.go('profile');
    }
    
    $scope.settings = function(){
        $state.go('settings');
    }

    $scope.forum = function(){
        $state.go('forum');
    }

    $scope.kcenter = function(){
        $state.go('kcenter');
    }

	$scope.hidden = false;
    
    $scope.togglePopup = function () {
        $scope.hidden = $scope.hidden ? false : true;
        // $('body').toggleClass('blurred');

        if($scope.hidden2 == true){
        	$scope.hidden2 = $scope.hidden2 ? false : true;
        }
    };
    $scope.togglePopup2 = function () {
        $scope.hidden2 = $scope.hidden2 ? false : true;
        // $('body').toggleClass('blurred');

        if($scope.hidden == true){
        	$scope.hidden = $scope.hidden ? false : true;
        }
    };

	$scope.login = function(){
		loginData = {
			username : $scope.username,
			password : $scope.password
		};

		$http.post('/api/login', loginData).success(function(response){
			if(response == "success"){
				authUser.setUsername($scope.username);
				$state.go('dashboard');
			}
			else {
				alert("Incorrect Username or Password");
				$state.go('login');
			}
		});
	};
	$scope.signup = function(){
		signupData = {
			fname : $scope.fname,
			lname : $scope.lname,
			username : $scope.username,
			email : $scope.email,
			password : $scope.password,
			verifed : false
		}

		$http.post('/api/signup', signupData).success(function(response){
			if(response == "success"){
				$state.go('dashboard');
			}
		});
	}

    $('.slide2').hide();
    $('.slide3').hide();
    $('.slide4').hide();

    
    var time = 0;

    for(var i=0;i<5;i++){
        time+= 3000;
        setInterval(function(){
        $('.slide1').slideUp();
        $('.slide2').slideDown();
        $('.slide3').slideUp();
        $('.slide4').slideUp();
        }, time)
        time+=3000;
        setInterval(function(){
            $('.slide1').slideUp();
            $('.slide2').slideUp();
            $('.slide3').slideDown();
            $('.slide4').slideUp();
        }, time)
        time+=3000;
        setInterval(function(){
            $('.slide1').slideUp();
            $('.slide2').slideUp();
            $('.slide3').slideUp();
            $('.slide4').slideDown();
        }, time)
    }

});