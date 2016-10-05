'use strict';

/**
 * @ngdoc function
 * @name museumApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the museumApp
 */
angular.module('museumApp')
  .controller('MainCtrl', function($scope, $route, $sce, $rootScope) {
    //you need to put the firebase items you use in the controller as above
		
    $scope.initialize = function () {
        alert("Page loading just completed");
    }
$scope.$on("$destroy", function(){
    $rootScope.$broadcast('destroy-mixitup');
});	
// init
$rootScope.$broadcast('init-mixitup');

// sort
$rootScope.$broadcast('resort-mixitup', 'myorder:desc');

	$scope.muteImgSrc = "images/headphone_symbol_muted.png";
	var mute = false;

	$scope.muteImage = function(){
		if(mute==false){
			$scope.muteImgSrc = "images/headphone_symbol.png";
			mute = true;
		}else if(mute==true){
			$scope.muteImgSrc = "images/headphone_symbol_muted.png";
			mute = false;			
		}
	}

	$scope.setVideoVFX = function(){
		$scope.title = "iGun (Visual FX)";	
		$scope.description = "A project that was created for the completion of a module for my university degree, called 'Visual Effects and Compilation'. This short clip involves one of my tutors using green screens as well as background scenes (shot at different times of the day). My role involved rotoscoping, colour correcting and animating parts of the scene to make it into an action sequence."
		$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/RmVWzj4UGiE");
		$scope.videoImageSource = "./images/carousel1.jpg";	
	}
	$scope.setVideoAnimation = function(){
		$scope.title = "Animation Showreel";
		$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/tUZq2osegMU");
		$scope.videoImageSource = "./images/carousel2.jpg";		
	}
	$scope.setVideoSSN = function(){
		$scope.title = "Survival Skills Network";		
		$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/f7SrMpBrjD4");
		$scope.videoImageSource = "./images/carousel3.jpg";		
	}
})
  .directive('mixItUp', function(){
    return{
      restrict: 'AEC',
      templateUrl: 'views/mix-it-up-tpl.html',
      link: function(scope, element){
         $(element).mixItUp(); //or you can create it as function like createMixItUp(element)
      }
    }
  });
  
