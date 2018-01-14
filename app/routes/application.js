import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
	afterModel(posts, transition) {
		let targetName = get(transition, 'targetName');
		if (targetName === 'index' || targetName === 'pokemon.index') {
			this.replaceWith('pokemon.list');
		}
	}
});
