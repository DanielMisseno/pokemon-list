import Component from '@ember/component';

export default Component.extend({
	tagName: 'ul',
	classNames: ['poke-menu'],

	actions: {
		back() {
			history.back();
		}
	}
});
