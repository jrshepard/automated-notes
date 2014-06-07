(function(){
	var app = angular.module('schooldistrictnotes',[]);

	app.controller('NotesController',function(){
		this.engagement = school;
	});

	var school = {
		name: 'School District Name',
		contact: 'Peach Lady',
		note1: false,
        blended1: true,
	}

})();



