import RESTSerializer from 'ember-data/serializers/rest';
import _ from 'lodash';

export default RESTSerializer.extend({
	attrs: {
		sprites: { serialize: false },
		detailLoaded: { serialize: false }
	},
	normalizeResponse(store, primaryModelClass, payload) {
		return {
			meta: {
				count: payload.count,
				previous: payload.previous,
				next: payload.next
			},
			data: payload.results && _.map(payload.results, r => {
				return {
					type: 'pokemon',
					id: (/.+\/([0-9]+)\//.exec(r.url) || [])[1] || 0,
					attributes: r
				}
			}) || {
				type: 'pokemon',
				id: payload.id,
				attributes: Object.assign(payload, { detailLoaded: true })
			}
		};
	}
});
