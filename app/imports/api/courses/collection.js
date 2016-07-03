
Courses = new Mongo.Collection('pages');

Courses.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Course Name',
		max: 200
	},
	summary: {
		type: String,
		label: 'Brief course summary (200 characters)',
		autoform: {
			rows: 2
		}
	},
	content: {
		type: String,
		label: 'Detailed course description',
		autoform: {
			rows: 2
		}
	},
	slug:{
	    type: String,
	    optional: true,
	    autoValue: function() {
	       if (this.field('title').isSet) {
	         return URLify2(this.field('title').value);
	       }
	   }
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	},
}));