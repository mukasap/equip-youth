//api
import '../../api/courses/collection.js';
import '../../api/images/collection.js';
//views
//admin
import '../../ui/admin/index.js';
import '../../ui/admin/courses.js';
//pages
import '../../ui/pages/home.js';
import '../../ui/layouts/app.js';

//some varibles to prevent spelling mistakes
const abbr = 'EYA';
const siteName = 'Equip Youth Africa Skills Center';

Router.plugin('seo', {
  // only: ['someRoute'],
  // except: ['someOtherRoute'],

  defaults: { 
  	title : 'Home',
  	suffix: siteName,
  	separator: '|',
  	meta: {
	   keywords: ['Vocational Training', 'Kampala', 'Uganda'],
	   author: siteName
	},
  }
});
//client side routes
Router.configure({
	layoutTemplate: 'App'
});

//default routes
Router.route('/', {
	name: 'home',
	waitOn: function(){
		return this.subscribe('cover-image');
	},
	data: {
		images: CoverImage.find({})
	},
	seo: {
		title: function(){
			return 'Home';
		}
	}
});

Router.route('/admin', {
	name: 'admin'
});

Router.route('/admin/courses', {
	name: 'courses',
	waitOn: function(){
		return this.subscribe('all-courses');
	}, 
	data: {
		courses :Courses.find({})
	},
	seo: {
		title: 'Courses'
	}
});

Router.route('/admin/courses/add',{
	name: 'courses.add',
	seo: {
		title: 'Courses :: Add',
	}
});

Router.route('/admin/courses/:_id/edit',{
	name: 'courses.edit',
	waitOn: function(){
		return this.subscribe('single-course', this.params._id);
	}, 
	data: function (){
		return Courses.findOne({_id: this.params._id});
	},
	seo: {
		title: 'Courses :: Edit',
	}
});
