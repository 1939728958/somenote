'use strict';

/**
 * @ngdoc overview
 * @name somenoteApp
 * @description
 * # somenoteApp
 *
 * Main module of the application.
 */

angular
 .module('somenoteApp',["ui.router","ngCookies"]).constant('servers','http://www.somenote.cn:1510').controller("w",["$scope","$http",function ($scope,$http) {
      //$scope.data2=[{yy:1}]
     
  }]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
  	$stateProvider.state("yi",{
  		url:"/yi",
  		templateUrl:"views/yi.html",
  		controller:"tu1"
  	}).state("tu",{
  		url:"/tu",
  		templateUrl:"views/tu.html",
  		controller:"tu2"
  	})
  	.state("a",{
  		url:"/a",
  		templateUrl:"views/aa.html",
  		controller:"gg"
  	})
  	.state("b",{
  		url:"/b:id?title&content",
  		templateUrl:"views/bb.html",
  		controller:"gg"
  	})
  	.state("c",{
  		url:"/c",
  		templateUrl:"views/cc.html",
  		controller:"gg"
  	})
  	$urlRouterProvider.when('','/yi');
  }])
//uid==5bd65be45b6cb8ec