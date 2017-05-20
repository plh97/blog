angular.module('uirouter', ['ui.router'])
.config ($stateProvider) -> 
	blogScecondState = 
		name: 'blogScecond',
		url: '',
		templateUrl: 'view/blog1.html'

	blogFirstState = 
		name: 'blogFirst',
		url: '/blog2',
		templateUrl: 'view/blog2.html'

	vcStateState = 
		name: 'vc',
		url: '/vc',
		templateUrl: 'view/vc.html'

	InterviewState = 
		name: 'Interview',
		url: '/Interview',
		templateUrl: 'view/cv.html'
	$stateProvider.state(blogScecondState)
	.state(blogFirstState)
	.state(vcStateState)
	.state(InterviewState);


