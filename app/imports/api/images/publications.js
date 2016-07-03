import { Meteor } from 'meteor/meteor';

//publications
Meteor.publish('images', function(){
	return Images.find({});
});
//cover image 
Meteor.publish('cover-image', function(){
	return CoverImage.find({});
});