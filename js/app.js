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
      name: 'quitter.im',
      url: 'https://quitter.im'
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
      url: 'https://gnusocial.net'
    },
    {
      name: 'GNU-tan',
      url: 'https://gnutan.xyz'
    },
    {
      name: 'Shitposter Club',
      url: 'https://shitposter.club'
    },
    {
      name: 'LoadAverage',
      url: 'https://loadaverage.org'
    }
  ];

  var getGSVersion = function (key) {
    $http.get($scope.instances[key].url + '/api/statusnet/version.json').success(function (data) {
      $scope.instances[key].version = data;
    });
  };

  var resetState = function (key) {
    $scope.instances[key].isUp = null;
  };

  var getStatus = function (key) {
    $http.get($scope.instances[key].url + '/api/statuses/public_timeline.as').then(
      function () {
        $scope.instances[key].isUp = true;
      },
      function () {
        $scope.instances[key].isUp = false;
      }
    );
  };

  for (i in $scope.instances) {
    if ($scope.instances[i].apiUrl !== '' || $scope.instances[i].apiUrl !== null) {
      getGSVersion(i);
      resetState(i);
      getStatus(i);
    } else {
      $scope.instances[i].isUp = null;
    }
  }
});
