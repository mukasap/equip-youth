import '../../api/images/collection.js';
import './uploader.html';

Template.widgetUploader.events({
	'change #files': function(event, temp) {
      // console.log('files changed');   
      FS.Utility.eachFile(event, function(file) {
        var fileObj = new FS.File(file);
        fileObj.name(temp.data.id);
        if(temp.data.collection && temp.data.id){
        	var metadata = {}
        	switch(temp.data.collection){
        		case 'course': metadata = { 'course': temp.data.id };
        	}
        	fileObj.metadata = metadata;
        }       
        //process type
	    switch(temp.data.type){
	      	case "cover-image": CoverImage.insert(fileObj);
	    }       
      });
    }
})