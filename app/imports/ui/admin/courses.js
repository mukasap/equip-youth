import '../helpers.js';
import '../components/card.js';
import '../components/table.js';
import '../components/textarea.js';
import '../components/image.js';
import './courses.html';

Template.courses.onRendered(function(){
	this.$('.modal-trigger').leanModal();
});

Template.courses.events({
	'click .js-delete': function(){
		Courses.remove(this._id);
	}
});

Template.coursesAdd.onRendered(function(){
	$.trumbowyg.svgPath = textareaIconsPath;
	$('[name=content]').trumbowyg(textareaOptions);
});

Template.coursesEdit.onRendered(function(){
	$.trumbowyg.svgPath = textareaIconsPath;
	$('[name=content]').trumbowyg(textareaOptions);
});

//forms
AutoForm.hooks({
insertCourse: {
    onSuccess: function () {
      Router.go('courses');
      // FlashMessages.sendSuccess('Course Added');
      return false;
    }
  },
  updateCourse: {
    onSuccess: function () {
      Router.go('courses');
      // FlashMessages.sendSuccess('Course Updated');
      return false;
    }
  },
});