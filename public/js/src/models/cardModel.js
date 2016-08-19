define(['backbone'],
	function(Backbone) {
		var CardModel = Backbone.Model.extend({

			defalts:{
				isFlipped: false
			},

			initialize: function() {
				this.set('color_no', _.random(0,7) + 1);
			}

		});
		return CardModel;
	});