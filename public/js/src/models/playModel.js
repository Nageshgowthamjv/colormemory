define(['backbone'],
	function(Backbone) {
		var Model = Backbone.Model.extend({
			defaults: {
				points: 0
			}
		});
		return Model;
	});