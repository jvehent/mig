app.controller('investigatorCtrl', ['$scope', '$mdDialog', '$mdSidenav', '$state', '$http', '$timeout', 'dashboardService', function ($scope, $mdDialog, $mdSidenav, $state, $http, $timeout, dashboardService) {

    $scope.investId = 0;
    var noOfInvestigators = 0;
    $scope.toggleSideNav = function () {
        //        console.log("here!");
        $mdSidenav('left').toggle();
    }

    $scope.investigator = [];
    $scope.allInvestigators = [];

    var investigatorDetails = {
        createdat: "",
        id: "",
        lastmodified: "",
        name: "",
        pgpfingerprint: "",
        publickey: "",
        status: ""
    };
    $http.get('../api/v1/search?type=investigator&investigatorname=%25%25').success(function (response) {
            $scope.allInvestigators = response.collection.items;
            //            noOfInvestigators = Object.keys(response.collection.items).length - 1; //-1 because the last object is the 'search parameters'
        })
        .error(function (err) {
            console.log(err);
        });

    //    for (var i = 0; i < noOfInvestigators; i++) {
    //        $scope.investigatorId = i + 1;
    /*TODO: get scope.investigatorId from search response*/
    /* $http.get('../api/v1/investigator?investigatorid=' + allInvestigators[i].data.value).success(function (response) {
          console.log(response);
          //                $scope.investigatorDetail = response.collection.items[0];
          investigatorDetails.createdat = response.collection.items[0].data[0].value.createdat;
          investigatorDetails.id = response.collection.items[0].data[0].value.id;
          investigatorDetails.lastmodified = response.collection.items[0].data[0].value.lastmodified;
          investigatorDetails.name = response.collection.items[0].data[0].value.name;
          investigatorDetails.pgpfingerprint = response.collection.items[0].data[0].value.pgpfingerprint;
          investigatorDetails.publickey = response.collection.items[0].data[0].value.publickey;
          investigatorDetails.status = response.collection.items[0].data[0].value.status;

          $scope.investigator.push(investigatorDetails);
          if (response.collection.items[0].data[0].name != "investigator") {
              console.log("Error: API returned something that is not an action... something's wrong.")
          }
          //                console.log(JSON.stringify(response.collection.items));
          console.log(investigatorDetails);
      })
      .error(function (err) {
          console.log(err);
      });*/

    /*$http.get('../api/v1/investigator?investigatorid=' + 2).success(function (response) {
        //                $scope.investigatorDetail = response.collection.items[0];
        investigatorDetails.createdat = response.collection.items[0].data[0].value.createdat;
        investigatorDetails.id = response.collection.items[0].data[0].value.id;
        investigatorDetails.lastmodified = response.collection.items[0].data[0].value.lastmodified;
        investigatorDetails.name = response.collection.items[0].data[0].value.name;
        investigatorDetails.pgpfingerprint = response.collection.items[0].data[0].value.pgpfingerprint;
        investigatorDetails.publickey = response.collection.items[0].data[0].value.publickey;
        investigatorDetails.status = response.collection.items[0].data[0].value.status;

        $scope.investigator.push(investigatorDetails);
        if (response.collection.items[0].data[0].name != "investigator") {
            console.log("Error: API returned something that is not an action... something's wrong.")
        }
        //                console.log(JSON.stringify(response.collection.items));
        console.log(investigatorDetails);
    })
    .error(function (err) {
        console.log(err);
    });*/
    //    }


    //    console.log($scope.investigator);


    $scope.createInvestigator = function (ev) {
        $mdDialog.show({
                //                controller: CreateOrder,
                controller: createInvestigatorCtrl,
                templateUrl: 'createInvestigator.tmpl.html',
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





    $scope.showInvestigator = function (index) {
        $scope.investigatorSelected = 1;
        $scope.investIndex = index;
        console.log(index);
    }




            }])



var createInvestigatorCtrl = function ($scope, $mdDialog, $http, $mdToast) {


    $scope.Create = function () {


        $mdToast.show(
            $mdToast.simple()
            .textContent('Investigator Created!')
            .position('right')
            .hideDelay(3000)
        );
        $mdDialog.hide();


    }


    $scope.cancel = function () {
        $mdDialog.hide();
    }
}