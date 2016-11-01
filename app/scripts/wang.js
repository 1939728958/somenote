angular.module('somenoteApp').controller("tu1",['$scope','$http','servers','$cookieStore','$state','$cookies','$rootScope',function ($scope,$http,servers,$cookieStore,$state,$cookies,$rootScope) {
	if($cookies.get('username',$scope.updata)&&$cookies.get('password',$scope.updata)){
		$state.go('a')
	}
	$scope.updata=[]
     var coa=$cookieStore.get("co")
       if(coa!=null){
       		 $scope.updata.username=coa.name
			 $scope.updata.password=coa.pwd
       }
	$scope.aa=false
	$scope.aac=function(a){
		a ? $scope.aa=true : $scope.aa=false;
	}
	if($cookieStore.get("md")=="md"){
	  	    $scope.aa=true
	  	    $http({
			url:servers+"/users/login",
			method:"POST",
			data:{username:$scope.updata.username,password:$scope.updata.password}
		}).success(function(e){
			
			//$scope.data.push(e)
		})
	  }
	$scope.add=function(){
		if($scope.aa==true){
		   $cookieStore.put("md","md")
		   $cookieStore.put("co",{name:$scope.updata.username,pwd:$scope.updata.password})
		}
		$http({
			url:servers+"/users/login",
			method:"POST",
			data:{username:$scope.updata.username,password:$scope.updata.password}
		}).success(function(e){
			$cookieStore.put("uid",e.uid);
			if($scope.aaa == true) {
				$cookieStore.put("username",$scope.updata);
				$cookieStore.put("password",$scope.updata);
                var time=new Date();
                time.setDate(time.getDate+6)
                $cookies.put('username',$scope.updata.username,{'expires':time});
                $cookies.put('password',$scope.updata.password,{'expires':time});		
	       }
			debugger
			$state.go("a")
		})
		
	}
}]).controller("tu2",['$scope','$http','servers','$state','$cookieStore',function ($scope,$http,servers,$state,$cookieStore) {
	$scope.ad=function(){
		$http({
			url:servers+"/users",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
		 	$cookieStore.put("co",{name:$scope.updata.username,pwd:$scope.updata.password})
			debugger
			$state.go("yi")
			
		})
	}
}])