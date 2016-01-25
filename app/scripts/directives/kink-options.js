'use strict';

/**
 * @ngdoc directive
 * @name pendesApp.directive:kinkOptions
 * @description
 * # kinkOptions
 */
angular.module('pendesApp')
.directive('kinkOptions', function () {
	return {
		template:'<div class="form-group"> <div class="row"> <div class="col-md-3"> {{kink.name}} </div> <div class="col-md-5"> <div class="btn-group"> <label class="btn btn-primary" uncheckable ng-model="prefEnjoy" uib-btn-radio="\'Y\'">Yes</label> <label class="btn btn-primary" uncheckable ng-model="prefEnjoy" uib-btn-radio="\'N\'">No</label> <label class="btn btn-primary" uncheckable ng-model="prefEnjoy" uib-btn-radio="\'M\'">Maybe</label> <label class="btn btn-primary" uncheckable ng-model="prefEnjoy" uib-btn-radio="\'F\'">Fave</label> </div> </div> <div class="col-md-4"> <div class="btn-group"> <label class="btn btn-primary" uncheckable ng-model="prefSide" uib-btn-radio="\'G\'">Giving</label> <label class="btn btn-primary" uncheckable ng-model="prefSide" uib-btn-radio="\'R\'">Receiving</label> <label class="btn btn-primary" uncheckable ng-model="prefSide" uib-btn-radio="\'B\'">Both</label> </div> </div> </div> <div class="row"> <div class="col-sm-12"> <input type="text" ng-model="comment" class="form-control"> </div> </div> </div>',
		restrict: 'E',
		scope:{
			kink:'='
		},
		controller:function($scope,$localStorage){
			var genText=function(){
				var outString=$scope.kink.id;
				if($scope.prefEnjoy || $scope.prefSide){
					outString+=":";
					if($scope.prefEnjoy){
						outString+=$scope.prefEnjoy;
					}else{
						outString+="M";
					}
					if($scope.prefSide){
						outString+=$scope.prefSide;
					}else{
						outString+="B";
					}
				}
				if($scope.comment){
					outString+="="+$scope.comment;
				}

				return outString;
			}

			$scope.$watchGroup(['prefEnjoy','prefSide','comment'],function(newVals,oldVals,scope){
				if($scope.prefEnjoy || $scope.prefSide || $scope.comment){
					$localStorage.kinkArray[$scope.kink.id]=genText();
				}
			});
		}
	};
});
