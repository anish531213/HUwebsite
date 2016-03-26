var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	$scope.student = [{ name : 'Susan Bhattarai', classification : 'Freshman', phone :  '202-751-0762', dorm : 'Cook Hall'},
                          {name : 'Anish Adhikari', classification: 'Sophomore', phone :  '202-938-2828', dorm : 'Towers Hall'},
                          { name : 'Saugat Tripathi', classification : 'Sophomore', phone :'202-172-3837', dorm : 'College Hall South'},
                          { name : 'Sumit Dhungel', classification : 'Freshman', phone : '273-262-2882', dorm : 'Towers East'},
                          {name : 'Pratyush Thapa', classification : 'Freshman', phone : '763-937-2715', dorm : 'College Hall North'}
                      ];

});