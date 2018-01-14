import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
	init() {
		this._super(...arguments);
		set(this, 'menuSettings', {
			canGoBack: true,
			canEdit: true
		});
	}
});
