import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
	show: false,

	init() {
		this._super(...arguments);
		set(this, 'buttons', []);
	},

	buttonPressed() {
	},

	close() {
		set(this, 'show', false);
	},

	actions: {
		buttonPressed(value) {
			this.buttonPressed(value);
			this.close();
		}
	}
});
