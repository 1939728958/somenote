angular.module('somenoteApp').controller("gg",['$scope','$http','servers','$cookieStore','$state','$cookies','$stateParams',function ($scope,$http,servers,$cookieStore,$state,$cookies,$stateParams) {
	$http({
		url:servers+"/item",
		method:"GET",
		params:{"$skip":num,"$limit":10,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
	}).success(function(e){
		$scope.data=e
	});
	
	
	$scope.dj=function(){
		$http({
			url:servers+"/item",
			method:"POST",
			data:{'title':$scope.title,'content':$scope.content,"uid":$cookieStore.get("uid"),"tag":$scope.arr}

		}).success(function(e){
			debugger
			//$scope.data.push($scope.updata)
			$http({
			method:'post',
			url:servers+'/tag',
			data:{"tag":$scope.arr,'tid':[e.id]}
		}).success(function(e){
			//debugger   
			$state.go('a')
		})

		})
	
		
	}
	$scope.w=$stateParams
	
	$scope.save=function(){
		$http({
			url:servers+"/item"+$scope.editData.id,
			method:"PUT",
			data:$scope.editData
		}).success(function(){
			
		})
	}
	
	
	
	$scope.edit=function(e){
		$scope.editData=e
	}
	$scope.del=function(e){
		$http({
			url:servers+"/item/"+e.id,
			method:"DELETE",
		}).success(function(){
            $scope.data.splice($scope.data.indexOf(e),1)
		})
	}
	
	var num=0
$scope.bottom=function(){
	num+=10
	$http({
			method:'get',
			url:servers+'/item',
			params:{"$skip":num,"$limit":10,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
		}).success(function(e){
			
			//debugger
			$scope.data=e
		})
	}
$scope.top=function(){
	num-=10
	$http({
			method:'get',
			url:servers+'/item',
			params:{"$skip":num,"$limit":10,"uid":$cookieStore.get("uid"),"tag":$scope.arr}
		}).success(function(e){
			//debugger
			$scope.data=e
		})
	}

$scope.arr=[];
$scope.sm=function(c){
	if($scope.arr.indexOf(c)==-1){
		$('.sm').attr('class','btn btn-danger sm')
		$scope.arr.push(c)
		
	}else{
		$('.sm').attr('class','btn btn-success sm')
		$scope.arr.splice($scope.arr.indexOf(c),1)
		
	}
	alert($scope.arr)
}
$scope.sx=function(c){
	if($scope.arr.indexOf(c)==-1){
		$scope.arr.push(c)
		$('.sx').attr('class','btn btn-danger sx')
	}else{
		$scope.arr.splice($scope.arr.indexOf(c),1)
		$('.sx').attr('class','btn btn-success sx')
	}
	alert($scope.arr)
}
$scope.gx=function(c){
	if($scope.arr.indexOf(c)==-1){
		$scope.arr.push(c)
		$('.gx').attr('class','btn btn-danger gx')
	}else{
		$scope.arr.splice($scope.arr.indexOf(c),1)
		$('.gx').attr('class','btn btn-success gx')
	}
	alert($scope.arr)
}
$scope.fd=function(c){
	if($scope.arr.indexOf(c)==-1){
		$scope.arr.push(c)
		$('.fd').attr('class','btn btn-danger fd')
	}else{
		$scope.arr.splice($scope.arr.indexOf(c),1)
		$('.fd').attr('class','btn btn-success fd')
	}
	alert($scope.arr)
}

}])