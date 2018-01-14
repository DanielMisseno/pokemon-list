import RESTAdapter from 'ember-data/adapters/rest'
import { computed } from '@ember/object';

export default RESTAdapter.extend({
	host: 'https://pokeapi.co',
	namespace: 'api/v2',
	headers: computed(function () {
		return {
			'accept': 'application/json'
		};
	}),

	pathForType(type) {
		return type;
	}
});
