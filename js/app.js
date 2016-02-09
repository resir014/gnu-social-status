/* global angular */

var app = angular.module('gsStatusApp', []);

app.controller('InstanceStatusController', function ($scope, $http) {
  var i;

  $scope.instances = [
    {
      name: 'quitter.se',
      url: 'https://quitter.se'
    },
    {
      name: 'quitter.is',
      url: 'https://quitter.is'
    },
    {
      name: 'quitter.no',
      url: 'https://quitter.no'
    },
    {
      name: 'quitter.nu',
      url: 'https://quitter.nu'
    },
    {
      name: 'quitter.es',
      url: 'https://quitter.es'
    },
    {
      name: 'gnusocial.de',
      url: 'https://gnusocial.de'
    },
    {
      name: 'gnusocial.ch',
      url: 'https://gnusocial.ch'
    },
    {
      name: 'gnusocial.net',
      url: 'https://gnusocial.net/'
    },
    {
      name: 'GNU-tan',
      url: 'https://gnutan.xyz/'
    },
    {
      name: 'Shitposter Club',
      url: 'https://shitposter.club'
    }
  ];

  var resetState = function (key) {
    $scope.instances[key].isUp = null;
  };

  for (i in $scope.instances) {
    resetState(i);
  }

  var getStatus = function (key) {
    $http.get($scope.instances[key].url).then(
      function () {
        $scope.instances[key].isUp = true;
      },
      function () {
        $scope.instances[key].isUp = false;
      }
    );
  };

  for (i in $scope.instances) {
    getStatus(i);
  }
});
