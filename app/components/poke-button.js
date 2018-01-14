import Component from '@ember/component';
import { get } from '@ember/object'

export default Component.extend({
	tagName: 'a',
	classNames: ['poke-button'],
	classNameBindings: ['disabled'],
	attributeBindings: ['href'],
	disabled: false,
	href: '#',
	click(event) {
		if(!get(this, 'disabled')) {
			this.onclick();
		}
		event.preventDefault();
	},
	onclick() {},
});
