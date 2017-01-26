'use strict';

angular.module('bhagyarajCodingApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.generatedRecords = [];
    $scope.tagsStore = [];
    $http.get('JsonData/generated.json').then(function(response) {
      $scope.generatedRecords = response.data.filter(function(eachObj) {
        return eachObj.isActive === true;
      });
    });

    $scope.sortVal = function(generatedRecord) {
      return new Date(generatedRecord.registered.replace(/T/g, ' '));
    };

    $scope.addTag = function(generatedRecord, index) {
      var currentRecordIndex = $scope.generatedRecords.indexOf(generatedRecord);
      if (!$scope.tagsStore[index]) {
          alert('Please enter a text to add to the tag list');
          return;
      }
      if (generatedRecord.tags.indexOf($scope.tagsStore[index]) >= 0) {
        alert($scope.tagsStore[index] + ' tag already exists please add another tag');
        return;
      }
      $scope.generatedRecords[currentRecordIndex].tags.push($scope.tagsStore[index]);
    };
  }]);
