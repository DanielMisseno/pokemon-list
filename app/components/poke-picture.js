import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
	tagName: 'img',
	classNames: ['poke-picture'],
	classNameBindings: ['pokePictureLoaded'],
	attributeBindings: ['src', 'alt'],
	pokePictureLoaded: false,
	alt: '',
	didInsertElement() {
		this.$().on('load', (function () {
			set(this, 'pokePictureLoaded', true);
			this.onload();
		}).bind(this));
	},
	onload() {}
});
