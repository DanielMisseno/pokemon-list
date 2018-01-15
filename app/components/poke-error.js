import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
	classNameBindings: ['isInvalid'],
	errorMessages: computed('field', 'errors', function () {
		let errors = get(this, 'errors');
		let field = get(this, 'field');
		return errors && field && get(errors, field) || null;
	}),
	isInvalid: computed('errorMessages', function () {
		return !!get(this, 'errorMessages');
	})
});
