app.controller('homeCtrl', ['$scope', '$mdDialog', '$mdSidenav', '$state', '$http', '$timeout', function ($scope, $mdDialog, $mdSidenav, $state, $http, $timeout) {

    $scope.getHeartbeat = function () {
        console.log("here");
        $http.get('http://localhost:12345/api/v1/heartbeat').success(function (response) {
            $scope.heartbeat = response;
            console.log(response)
        });
    }

    /*-------------------------------side nav module menu--------------------------------------------------------*/


    $scope.toggleSideNav = function () {
        $mdSidenav('left').toggle();
    }

    /*-----------------------------------------------------------------------------------------------------------*/

    $scope.showDashboard = 0;

    $scope.open = function () {
        $scope.file = 1;
    }

    $scope.createOrder = function (ev) {
        $mdDialog.show({
                //                controller: CreateOrder,
                controller: CreateOrder,
                templateUrl: 'createOrder.tmpl.html',
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

    // get dashboard
    $http.get('/api/v1/dashboard').success(function(response){
        $scope.dashboard = response.collection.items;        
    });

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