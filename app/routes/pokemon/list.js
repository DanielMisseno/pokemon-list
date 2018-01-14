import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
	queryParams: {
		pageNumber: {
			refreshModel: true
		}
	},
	model() {
		return {};
	},
	setupController(controller) {
		let itemsPerPage = get(controller, 'itemsPerPage');
		let pageNumber = get(controller, 'pageNumber');
		let pokeParams = {
			limit: itemsPerPage,
			offset: (pageNumber - 1) * itemsPerPage
		};
		set(controller, 'loading', true);
		this.store.query('pokemon', pokeParams).then(response => {
			set(controller, 'totalItems', get(response, 'meta.count'));
			set(controller, 'model', { results: response });
			return response;
		}).finally(() => {
			set(controller, 'loading', false);
		});
	}
});
