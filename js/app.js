/* global angular */

var app = angular.module('gsStatusApp', []);

app.controller('InstanceStatusController', function ($scope, $http) {
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
    },
    {
      name: 'LoadAverage',
      url: 'https://loadaverage.org/'
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
