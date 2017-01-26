'use strict';

angular.module('bhagyarajCodingApp')
  .controller('retentionCtrl', ['$scope', '$http', function ($scope, $http){
  		$scope.generatedRecords = [];
    	$http.get('JsonData/generated.json').then(function(response) {
            $scope.records = response.data;
            $scope.generatedRecords = response.data.filter(function(eachObj){
                return eachObj.isActive === false;
            });
      	});

        $scope.setDataToModal = function(userId){
            $scope.userData = $scope.records.filter(function(eachObj){
                return eachObj._id === userId;
            })[0];
        };

        $scope.sortVal = function(generatedRecord) {
            return new Date(generatedRecord.registered.replace(/T/g, ' '));
        };
  }]);
