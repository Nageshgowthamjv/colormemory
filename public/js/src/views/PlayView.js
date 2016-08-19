define(['marionette', 'hbs!templates/playArea', 'views/cardView', 'models/CardCollection'],
	function(Marionette, playAreaTpl, CardView, CardCollection) {
		var PlayView = Marionette.CompositeView.extend({
			template: playAreaTpl,
			className: 'playarea',
			childView: CardView,
			childViewContainer: '#grid',
			initialize: function() {
				this.collection = new CardCollection();
				this.setCards();
			},
			onRender: function() {
				var that = this;
				this.$el.find('.container:first').addClass('selected');

				$(document).keydown(function(e) {

					var selectedIndex = that.$el.find('.selected').index();

					if (e.keyCode == 37) {
						that.moveRight(selectedIndex);
						return false;
					}
					if (e.keyCode == 38) {
						that.moveUp(selectedIndex);
						return false;
					}
					if (e.keyCode == 39) {
						that.moveLeft(selectedIndex);
						return false;
					}
					if (e.keyCode == 40) {
						that.moveDown(selectedIndex);
						return false;
					}
					if (e.keyCode == 13) {
						that.flipCard(selectedIndex);
					}
				});

			},

			setCards: function() {
				this.collection.setCards();
			},

			moveUp: function(index) {
				var next = index - 4;
				if (next < 0) return;
				this.moveTo(next);
			},
			moveRight: function(index) {
				var next = index - 1;
				if (next < 0) return;
				this.moveTo(next);
			},
			moveLeft: function(index) {
				var next = index + 1;
				if (next > 15) return;
				this.moveTo(next);
			},
			moveDown: function(index) {
				var next = index + 4;
				if (next > 15) return;
				this.moveTo(next);
			},
			moveTo: function(index) {
				this.$el.find('.selected').removeClass('selected');
				this.children.findByIndex(index).$el.addClass('selected');
			},
			flipCard: function(index) {
				var flipCard = this.children.findByIndex(index);
				flipCard.showCard();

				if (this.lastFlipCard) {
					if (this.lastFlipCard.model.get('color_no') == flipCard.model.get('color_no')) {
						var points = this.model.get('points');
						points++;
						this.model.set('points', points);
					} else {

					}
				} else {
					this.lastFlipCard = flipCard;
				}
			}

		});
		return PlayView;
	});