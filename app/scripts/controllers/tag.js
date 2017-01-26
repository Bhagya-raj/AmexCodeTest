'use strict';
angular.module('bhagyarajCodingApp')
  .controller('TagCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.generatedTags = [];
    $http.get('JsonData/generated.json').then(function(response) {
      $scope.records = response.data;
      angular.forEach($scope.records, function(eachObject) {
        $scope.generatedTags = [...$scope.generatedTags, ...eachObject.tags]
      });
      $scope.tagsArray = [];
      angular.forEach($scope.generatedTags, function(value) {
        var index = $scope.tagsArray.indexOf(value);
        if (index === -1) {
          $scope.tagsArray.push(value);
        }
      });

      $scope.getUserCount = function(tagVal) {
        var usersCount = 0;
        var totalBalance = 0;
        angular.forEach($scope.records, function(eachObject) {
          var index = eachObject.tags.indexOf(tagVal);
          if (index >= 0) {
            usersCount++;
            totalBalance += parseFloat(eachObject.balance.replace(/[,\$]/g, ''));
          }
        });
        $scope.totalBalance = totalBalance.toFixed(2);
        return usersCount;
      };
    });
  }]);
