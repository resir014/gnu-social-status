/* global angular */

var app = angular.module('gsStatusApp', []);

app.controller('InstanceStatusController', function ($scope, $http) {
  var i;

  $scope.instances = [
    {
      name: 'quitter.se',
      url: 'https://quitter.se/',
      apiUrl: 'https://quitter.se/api/statuses/public_timeline.as'
    },
    {
      name: 'quitter.is',
      url: 'https://quitter.is/',
      apiUrl: 'https://quitter.is/'
    },
    {
      name: 'quitter.no',
      url: 'https://quitter.no/',
      apiUrl: 'https://quitter.no/api/statuses/public_timeline.as'
    },
    {
      name: 'quitter.nu',
      url: 'https://quitter.nu/',
      apiUrl: 'https://quitter.nu/api/statuses/public_timeline.as'
    },
    {
      name: 'quitter.es',
      url: 'https://quitter.es/',
      apiUrl: 'https://quitter.es/api/statuses/public_timeline.as'
    },
    {
      name: 'quitter.im',
      url: 'https://quitter.im/',
      apiUrl: 'https://quitter.im/api/statuses/public_timeline.as'
    },
    {
      name: 'gnusocial.de',
      url: 'https://gnusocial.de/',
      apiUrl: 'https://gnusocial.de/api/statuses/public_timeline.as'
    },
    {
      name: 'gnusocial.ch',
      url: 'https://gnusocial.ch/',
      apiUrl: 'https://gnusocial.ch/api/statuses/public_timeline.as'
    },
    {
      name: 'gnusocial.net',
      url: 'https://gnusocial.net/',
      apiUrl: 'https://gnusocial.net/api/statuses/public_timeline.as'
    },
    {
      name: 'GNU-tan',
      url: 'https://gnutan.xyz/',
      apiUrl: 'https://gnutan.xyz/api/statuses/public_timeline.as'
    },
    {
      name: 'Shitposter Club',
      url: 'https://shitposter.club/',
      apiUrl: 'https://shitposter.club/api/statuses/public_timeline.as'
    },
    {
      name: 'LoadAverage',
      url: 'https://loadaverage.org/',
      apiUrl: 'https://loadaverage.org/api/statuses/public_timeline.as'
    }
  ];

  var getGSVersion = function (key) {
    $http.get($scope.instances[key].url + 'api/statusnet/version.json').success(function (data) {
      $scope.instances[key].version = data;
    });
  };

  var resetState = function (key) {
    $scope.instances[key].isUp = null;
  };

  var getStatus = function (key) {
    $http.get($scope.instances[key].apiUrl).then(
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
