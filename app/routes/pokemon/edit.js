import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
	model(params) {
		return { params };
	},
	setupController(controller, model) {
		set(controller, 'loading', true);
		this.store.findRecord('pokemon', model.params.id).then(response => {
			set(controller, 'model', response);
			return response;
		}).finally(() => {
			set(controller, 'loading', false);
		});
	}
});
