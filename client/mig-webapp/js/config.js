app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url : '/',
			templateUrl : '/templates/home.html',
			controller : 'homeCtrl'
		})
/*		.state('kcenter_card6',{
            url : '/knowledgeCenter/Business_Basics',
            templateUrl : '/templates/knowledge_center/Business_Basics.html',
            controller : 'kcenterinfo'
        })*/
    ;
});