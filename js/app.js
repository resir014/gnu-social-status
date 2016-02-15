/* global angular */

var app = angular.module('gsStatusApp', []);

app.controller('InstanceStatusController', function ($scope, $http) {
  var i;

  // current list of instances
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
      name: 'gnusocial.no',
      url: 'https://gnusocial.no'
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
    // this is what is loaded the first time a page is loaded, so we could kind
    // have like a "loading" state that we can display on the page
    $scope.instances[key].isUp = null;
  };

  var getStatus = function (key) {
    // Read more about Angular's `$http` service here:
    // https://docs.angularjs.org/api/ng/service/$http
    $http.get($scope.instances[key].url + '/api/statuses/public_timeline.as').then(
      function (data, status) {
        // HTTP request succeeded
        $scope.instances[key].status = data.status;
        $scope.instances[key].isUp = true;
      },
      function (data, status) {
        // HTTP request failed
        $scope.instances[key].status = data.status;
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
      // this probably doesn't work for now
      $scope.instances[i].isUp = null;
    }
  }
});
