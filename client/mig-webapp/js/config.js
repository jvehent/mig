app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './templates/home.html',
            controller: 'homeCtrl'
        })
        .state('getAction', {
            url: '/action/:actionId',
            templateUrl: '/templates/getAction.html',
            controller: 'actionCtrl'
        });
    /*.state('actionId', {
        parent: 'home',
        templateUrl: './templates/getAction.html',
        //            controller: 'homeCtrl'
        controller: 'actionCtrl'
    });*/

});