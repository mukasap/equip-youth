import { Meteor } from 'meteor/meteor';

//publications
Meteor.publish('all-courses', function(){
	return Courses.find({});
});

Meteor.publish('single-course', function(id){
	return Courses.find({_id: id});
});