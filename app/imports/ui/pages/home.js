//api
import '../../ui/components/image.js';
import '../../ui/components/uploader.js';
import './home.html';

Template.home.events({
	'click .btnRemove': function(event, temp) {
      this.remove();
    }
});