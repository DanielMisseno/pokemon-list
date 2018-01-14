import Component from '@ember/component';
import { get, computed } from '@ember/object'

export default Component.extend({
	tagName: 'ul',
	classNames: ['poke-list'],
	itemsPerPage: 20,
	pageNumber: 1,
	totalItems: 20,
	listIsEmpty: computed('list', function () {
		let list = get(this, 'list');
		return !(list && list.length);
	}),
	previosButtonDisabled: computed('pageNumber', function () {
		return get(this, 'pageNumber') <= 1;
	}),
	nextButtonDisabled: computed('pageNumber', function () {
		return get(this, 'pageNumber') >= get(this, 'pageCount');
	}),
	pageCount: computed('totalItems', function() {
		let itemsPerPage = get(this, 'itemsPerPage');
		let totalItems = get(this, 'totalItems');
		return Math.ceil(totalItems / itemsPerPage);
	}),

	changePage() {},

	actions: {
		previousPage() {
			if (get(this, 'pageNumber') > 1) {
				this.decrementProperty('pageNumber', 1);
			}
			this.changePage(get(this, 'pageNumber'));
		},
		nextPage() {
			this.incrementProperty('pageNumber', 1);
			this.changePage(get(this, 'pageNumber'));
		}
	}
});
