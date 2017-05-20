//angular-route路由设置
// angular.module('routingDemoApp',['ngRoute'])
// .config(['$routeProvider', function($routeProvider){
//     $routeProvider
//     .when('/',{templateUrl:'view/home.html'})
//     .when('/second',{templateUrl:'view/second.html'})
//     .when('/third',{templateUrl:'view/third.html'})
//     .otherwise({redirectTo:'/'});
// }]);




// 如何为其添加on元素
// $("ul.nav li .slide").click(function(){
//     $('ul.nav li .title').removeClass("on"); 
//     $(this).siblings(".title").addClass("on");
// })
$(".context-mod").click(function(){
    $('ul.nav li').removeClass("on"); 
    $(this).addClass("on"); 
})


//angualr-ui-route 路由设置
angular.module('uirouterdemo', ['ui.router'])
.config(function($stateProvider) {
	var homeState = {
		name: 'home',
		url: '',
		templateUrl: 'view/home.html'
	}

	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: 'view/second.html'
	}

	var serviceState = {
		name: 'service',
		url: '/service',
		templateUrl: 'view/service.html'
	}

	var serviceSystemState = {
		name: 'serviceSystem',
		url: '/serviceSystem',
		templateUrl: 'view/second.html'
	}

	var caseState = {
		name: 'case',
		url: '/case',
		templateUrl: 'view/second.html'
	}

	var contactState = {
		name: 'contact',
		url: '/contact',
		templateUrl: 'view/second.html'
	}

	var brandState = {
		name: 'brand',
		url: '/brand',
		templateUrl: 'view/third.html'
	}


	var logoState = {
		name: 'logo',
		url: '/logo',
		templateUrl: 'view/third.html'
	}

	var brochureState = {
		name: 'brochure',
		url: '/brochure',
		templateUrl: 'view/third.html'
	}

	var packageState = {
		name: 'package',
		url: '/package',
		templateUrl: 'view/third.html'
	}

	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
	$stateProvider.state(serviceState);
	$stateProvider.state(serviceSystemState);
	$stateProvider.state(caseState);
	$stateProvider.state(contactState);
	$stateProvider.state(brandState);
	$stateProvider.state(logoState);
	$stateProvider.state(brochureState);
	$stateProvider.state(packageState);
})






