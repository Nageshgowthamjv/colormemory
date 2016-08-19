define(['marionette', 'hbs!templates/cardTemplate'],
	function(Marionette, cardTpl) {
		var CardView = Marionette.ItemView.extend({
			ui: {
				back: '.back img'
			},
			template: cardTpl,
			className: 'container',
			showCard: function() {
				var colorNo = this.model.get('color_no');
				this.ui.back.attr('src', '/images/colour' + colorNo + '.gif');
				this.$el.addClass('flipped');
				this.model.set('isFlipped', true);
			}
		});
		return CardView;
	});