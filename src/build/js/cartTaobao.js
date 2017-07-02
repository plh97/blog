(function() {
  angular.module('uirouter', ['ui.router']).config(function($stateProvider) {
    var blogFirstState, blogSecondState, cvStateState, homeState;
    blogFirstState = {
      name: 'blog1',
      url: '/blog1',
      templateUrl: '/blog1.html'
    };
    blogSecondState = {
      name: 'blog2',
      url: '/blog2',
      templateUrl: '/blog2.html'
    };
    homeState = {
      name: 'home',
      url: '',
      templateUrl: '/blog2.html'
    };
    cvStateState = {
      name: 'cv',
      url: '/cv',
      templateUrl: '/cv.html'
    };
    return $stateProvider.state(blogFirstState).state(blogSecondState).state(homeState).state(cvStateState);
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydFRhb2Jhby5qcyIsInNvdXJjZXMiOlsiY2FydFRhb2Jhby5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFVBQWYsRUFBMkIsQ0FBQyxXQUFELENBQTNCLENBQ0EsQ0FBQyxNQURELENBQ1EsU0FBQyxjQUFEO0FBQ1AsUUFBQTtJQUFBLGNBQUEsR0FDQztNQUFBLElBQUEsRUFBTSxPQUFOO01BQ0EsR0FBQSxFQUFLLFFBREw7TUFFQSxXQUFBLEVBQWEsYUFGYjs7SUFJRCxlQUFBLEdBQ0M7TUFBQSxJQUFBLEVBQU0sT0FBTjtNQUNBLEdBQUEsRUFBSyxRQURMO01BRUEsV0FBQSxFQUFhLGFBRmI7O0lBSUQsU0FBQSxHQUNDO01BQUEsSUFBQSxFQUFNLE1BQU47TUFDQSxHQUFBLEVBQUssRUFETDtNQUVBLFdBQUEsRUFBYSxhQUZiOztJQUlELFlBQUEsR0FDQztNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsR0FBQSxFQUFLLEtBREw7TUFFQSxXQUFBLEVBQWEsVUFGYjs7V0FJRCxjQUFjLENBQUMsS0FBZixDQUFxQixjQUFyQixDQUNBLENBQUMsS0FERCxDQUNPLGVBRFAsQ0FFQSxDQUFDLEtBRkQsQ0FFTyxTQUZQLENBR0EsQ0FBQyxLQUhELENBR08sWUFIUDtFQXJCTyxDQURSO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgndWlyb3V0ZXInLCBbJ3VpLnJvdXRlciddKVxyXG4uY29uZmlnICgkc3RhdGVQcm92aWRlcikgLT4gXHJcblx0YmxvZ0ZpcnN0U3RhdGUgPSBcclxuXHRcdG5hbWU6ICdibG9nMScsXHJcblx0XHR1cmw6ICcvYmxvZzEnLFxyXG5cdFx0dGVtcGxhdGVVcmw6ICcvYmxvZzEuaHRtbCdcclxuXHJcblx0YmxvZ1NlY29uZFN0YXRlID0gXHJcblx0XHRuYW1lOiAnYmxvZzInLFxyXG5cdFx0dXJsOiAnL2Jsb2cyJyxcclxuXHRcdHRlbXBsYXRlVXJsOiAnL2Jsb2cyLmh0bWwnXHJcblxyXG5cdGhvbWVTdGF0ZSA9IFxyXG5cdFx0bmFtZTogJ2hvbWUnLFxyXG5cdFx0dXJsOiAnJyxcclxuXHRcdHRlbXBsYXRlVXJsOiAnL2Jsb2cyLmh0bWwnXHJcblxyXG5cdGN2U3RhdGVTdGF0ZSA9IFxyXG5cdFx0bmFtZTogJ2N2JyxcclxuXHRcdHVybDogJy9jdicsXHJcblx0XHR0ZW1wbGF0ZVVybDogJy9jdi5odG1sJ1xyXG5cclxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShibG9nRmlyc3RTdGF0ZSlcclxuXHQuc3RhdGUoYmxvZ1NlY29uZFN0YXRlKVxyXG5cdC5zdGF0ZShob21lU3RhdGUpXHJcblx0LnN0YXRlKGN2U3RhdGVTdGF0ZSk7Il19
