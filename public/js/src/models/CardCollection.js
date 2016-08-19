define(['backbone', 'models/cardModel'],
	function(Backbone, CardModel) {
		var CardCollection = Backbone.Collection.extend({

			Model: CardModel,
			setCards: function() {
				//reset collection
				this.reset();

				//generate new colors
				for (var i = 0; i < 4; i++) {
					for (var j = 0; j < 4; j++) {
						this.add(new CardModel({
							position: {
								x: i,
								y: j
							}
						}));
					}
				}
			}

		});
		return CardCollection;
	});