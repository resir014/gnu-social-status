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
      name: 'Freezepeach',
      url: 'https://freezepeach.xyz'
    },
    {
      name: 'Sea Lion Club',
      url: 'https://sealion.club'
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

  var getGSVersion = function (i) {
    $http.get($scope.instances[i].url + '/api/statusnet/version.json').success(function (data) {
      $scope.instances[i].version = data;
    });
  };

  var resetState = function (i) {
    // this is what is loaded the first time a page is loaded, so we could kind
    // have like a "loading" state that we can display on the page
    $scope.instances[i].ngClass = 'status-error';
    $scope.instances[i].status = 'N/A';
    $scope.instances[i].isUp = null;
  };

  var getStatus = function (i) {
    // Read more about Angular's `$http` service here:
    // https://docs.angularjs.org/api/ng/service/$http
    $http.get($scope.instances[i].url + '/api/statuses/public_timeline.as').then(
      function (data) {
        // HTTP request succeeded
        $scope.instances[i].ngClass = 'status-up';
        $scope.instances[i].status = 'OK (' + data.status + ')';
        $scope.instances[i].isUp = true;
      },
      function (data) {
        // HTTP request failed
        $scope.instances[i].ngClass = 'status-down';
        $scope.instances[i].status = 'Error (' + data.status + ')';
        $scope.instances[i].isUp = false;
      }
    );
  };

  for (i in $scope.instances) {
    if ($scope.instances[i].url === '' || typeof $scope.instances[i].url === 'undefined') {
      // if we don't have any API URLs set, don't show results
      resetState(i);
    } else {
      getGSVersion(i);
      resetState(i);
      getStatus(i);
    }
  }
});
