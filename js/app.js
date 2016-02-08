/* global angular */

var app = angular.module('gsStatusApp', []);

app.controller('InstanceStatusController', function ($scope, $http) {
  $scope.instances = [
    {
      name: 'quitter.se',
      url: 'https://quitter.se',
      isUp: false
    },
    {
      name: 'quitter.is',
      url: 'https://quitter.is',
      isUp: false
    },
    {
      name: 'quitter.no',
      url: 'https://quitter.no',
      isUp: false
    },
    {
      name: 'quitter.nu',
      url: 'https://quitter.nu',
      isUp: false
    }
  ];

  var getStatus = function (i) {
    $http.get($scope.instances[i].url).then(
      function () {
        $scope.instances[i].isUp = true;
      },
      function () {
        $scope.instances[i].isUp = false;
      }
    );
  };

  for (var i in $scope.instances) {
    getStatus(i);
  }
});
