'use strict';

/**
 * @ngdoc function
 * @name pendesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pendesApp
 */
angular.module('pendesApp')
.controller('MainCtrl', function ($scope,kinkList,$localStorage) {
	$scope.kinkList=kinkList;
	$scope.$watch(
		function(){
			return angular.toJson($localStorage.kinkArray);
		},
		function(newKinksList){
			var newKinksList=angular.fromJson(newKinksList);
			$scope.bigassListOfKinks="";
			angular.forEach(newKinksList,function(value,key){
				$scope.bigassListOfKinks+=value+" | ";
			});
		}
	);
});
