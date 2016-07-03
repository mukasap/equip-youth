import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'course.insert': function(doc){
		Courses.insert(doc);
	}, 
	'course.update': function(doc, id){
		Courses.update({_id: id}, doc);
	}
});