import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
	queryParams: ['itemsPerPage', 'pageNumber'],
	itemsPerPage: 20,
	pageNumber: 1,
	loading: false,
	init() {
		this._super(...arguments);
		set(this, 'menuSettings', {
			canAdd: true
		});
	},
	actions: {
		changePage(pageNumber) {
			set(this, 'pageNumber', pageNumber);
		}
	}
});
