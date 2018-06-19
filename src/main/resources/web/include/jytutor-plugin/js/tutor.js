'use strict';

(function () {
		var TutorController = function($http, $scope) {
					

					$scope.submit = function() {
						var dataObj = {
							"commands" : $scope.commands
						};
						$http.post('/api/extension/jytutor', dataObj).then(
							  function success(response) {
					    			$scope.stdout = response.data.stdout;
									$scope.stderr = response.data.stderr;
									$scope.exception = response.data.exception;
									$scope.response = response.data.entity;
									$scope.status = response.status
							  },
							  function error(response) {
					    			$scope.stdout = response.data.stdout;
									$scope.stderr = response.data.stderr;
									$scope.exception = response.data.exception;
									$scope.response = response.data.entity;
									$scope.status = response.status
							  });							
					};
				};
		TutorController.$inject = ['$http','$scope' ];
		angular.module('extension.Tutor', []);
		angular.module('extension.Tutor').controller('xlrelease.jytutor.TutorController', TutorController);
})();
