app.controller('homeCtrl', ['$scope', '$mdDialog', '$mdSidenav', '$state', '$http', '$timeout', 'dashboardService', function ($scope, $mdDialog, $mdSidenav, $state, $http, $timeout, dashboardService) {

    $scope.showDashboard = 0;
    $scope.file = 0;



    /*$scope.dashboard = dashboardService.query();
//console.log($scope.dashboard);*/ //FIXME: get using ngresource

    $http.get('../api/v1/dashboard').success(function (response) {
        $scope.dashboard = response.collection.items;
        console.log(response.collection);
        console.log($scope.dashboard);
    });

    $scope.getActionInfo = function (id) {
        console.log(id);
        $state.go('getAction', {
                actionId: id
            })
            //        actionService.actionId(id);
    }

    /*-------------------------------side nav module menu--------------------------------------------------------*/


    $scope.toggleSideNav = function () {
        $mdSidenav('left').toggle();
    }

    $scope.open = function () {
            $scope.file = 1;
            $mdSidenav('left').toggle();
        }
        /*-----------------------------------------------------------------------------------------------------------*/



    $scope.createOrder = function (ev) {
        $mdDialog.show({
                //                controller: CreateOrder,
                controller: CreateOrder,
                templateUrl: 'action.tmpl.html',
                //                templateUrl: '.view/createOrder.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (answer) {
                //                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                //                $scope.status = 'You cancelled the dialog.';
            });
    }





    $scope.action = function (ev) {
            $mdDialog.show({
                    //                controller: CreateOrder,
                    controller: actionTemplCtrl,
                    templateUrl: 'action.tmpl.html',
                    //                templateUrl: '.view/createOrder.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                .then(function (answer) {
                    //                $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    //                $scope.status = 'You cancelled the dialog.';
                });
        }
        /*--------------------------------------------create loader entry-------------------------------------------------------*/



    $scope.loader = function (ev) {
        $mdDialog.show({
                //                controller: CreateOrder,
                controller: createLoader,
                templateUrl: 'loader.tmpl.html',
                //                templateUrl: '.view/createOrder.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (answer) {
                //                $scope.status = 'You said the information was "' + answer + '".';                 
            }, function () {
                //                $scope.status = 'You cancelled the dialog.';
            });
    }






    /*----------------------------------------------------------------------------*/





}])


/*-----------------------------------------------------------------*/




var createLoader = function ($scope, $mdDialog) {

    const LoaderPrefixLength = 8 // Prefix length
    const LoaderKeyLength = 32 // Length excluding prefix
        //var $scope.prefix;
        //var $scope.key;

    var randomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    $scope.prefix = Math.random().toString(36).substring(2, LoaderPrefixLength + 2);
    $scope.key = randomString(LoaderKeyLength);
    $scope.generateLoader = function () {
        console.log($scope.loaderName);
        console.log($scope.prefix);
        console.log($scope.key);
        /*TODO: structure the loader fields and then use post API here*/
        $mdDialog.hide("blah");
    }



    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}

var actionTemplCtrl = function ($scope, $mdDialog) {


    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

}