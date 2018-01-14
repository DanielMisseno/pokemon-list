import DS from 'ember-data';
import attr from 'ember-data/attr';
import { get, computed } from '@ember/object';

export default DS.Model.extend({
	name: attr('string'),
	height: attr('number'),
	sprites: attr(),
	weight: attr('number'),
	detailLoaded: attr('boolean', { defaultValue: false }),

	picture: computed('sprites', {
		get() {
			return get(this, 'sprites.front_default');
		}
	})
});
