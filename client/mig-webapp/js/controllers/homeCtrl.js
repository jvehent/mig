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

    /*-----------------------------------------------------------------------------------------------------------*/


    $scope.open = function () {
        $scope.file = 1;
        $mdSidenav('left').toggle();
    }

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

    /*----------------------------------------------------------------------------*/

    /*
    
    $scope.modules = [
    'File',
    'Memory',
    'NetStat',
    'Package',
    'Scribe',
    'Ping',
    'TimeDrift'
  ];
    var selected = {
        selectModule: 'Donut'
    };

    

        $scope.showMenu = function (ev) {
              var position = $mdPanel.newPanelPosition()
            .relativeTo('.demo-menu-open-button')
            .addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.BELOW);
            var config = {
                attachTo: angular.element(document.body),
                controller: PanelMenuCtrl,
                //            controllerAs: 'ctrl',
                template: '<div class="demo-menu-example" ' +
                    '     aria-label="modules" ' +
                    '     role="listbox">' +
                    '  <div class="demo-menu-item" ' +
                    '       ng-class="{selected : module == selectModule}" ' +
                    '       aria-selected="{{module == selectModule}}" ' +
                    '       tabindex="-1" ' +
                    '       role="option" ' +
                    '       ng-repeat="module in modules" ' +
                    '       ng-click="selectModuleFunc(module)">' +
                    '    {{ module }} ' +
                    '  </div>' +
                    '</div>',
                panelClass: 'demo-menu-example',
                //            position: position,
                locals: {
                    'selected': selected,
                    'modules': $scope.modules
                },
                openFrom: ev,
                clickOutsideToClose: true,
                escapeToClose: true,
                focusOnOpen: false,
                zIndex: 2
            };
            $mdPanel.open(config);
        };


    */


}])


/*function PanelMenuCtrl(mdPanelRef, $timeout) {
     $scope.selectModule = selected.selectModule;
     $timeout(function () {
         var selected = document.querySelector('.demo-menu-item.selected');
         if (selected) {
             angular.element(selected).focus();
         } else {
             angular.element(document.querySelectorAll('.demo-menu-item')[0]).focus();
         }
     });


     $scope.selectModuleFunc = function (module) {
         console.log(module);
         selected.selectModule = module;
         mdPanelRef && mdPanelRef.close().then(function () {
             angular.element(document.querySelector('.demo-menu-open-button')).focus();
         });
     };
 }

*/

/*-----------------------------------------------------------------*/




var CreateOrder = function ($scope, $mdDialog) {
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