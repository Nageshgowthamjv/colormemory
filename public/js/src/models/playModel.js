define(['backbone'],
	function(Backbone) {
		var Model = Backbone.Model.extend({
			defaults: {
				points: 0,
				isGameDone: false
			}
		});
		return Model;
	});