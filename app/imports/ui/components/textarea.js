import trumbowyg from 'trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.min.css';

textareaIconsPath = '/icons.svg';

textareaOptions = {
		btns: [
	        ['viewHTML'],
	        ['formatting'],
	        'btnGrp-semantic',
	        // ['superscript', 'subscript'],
	        ['link'],
	        // ['insertImage'],
	        'btnGrp-justify',
	        'btnGrp-lists',
	        // ['horizontalRule'],
	        // ['removeformat'],
	        // ['fullscreen']
	    ],
		removeformatPasted: true,
		autogrow: true
	};