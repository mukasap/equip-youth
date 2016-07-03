import './table.html';

Template.widgetTable.helpers({
	columns: function(){
		return this.cols.split(',');
	}
});