import Mixin from '@ember/object/mixin';
import { get, set } from '@ember/object';
import RSVP from 'rsvp';
import _ from 'lodash';

export default Mixin.create({
	init() {
		this._super(...arguments);
		this.clearValidationErrors()
	},

	validate(fieldName) {
		return new RSVP.Promise((function(resolve, reject) {
			let validations = get(this, 'validations');
			let isValid = true;
			this.clearValidationErrors(fieldName);
			if (validations) {
				for(let field in validations) {
					if(fieldName && field !== fieldName) {
						continue;
					}
					for(let i = 0; i < validations[field].length; ++i) {
						let validationFunc = get(this, 'validate_' + validations[field][i].type);
						if (typeof validationFunc === 'function') {
							if (!validationFunc.call(this, validations[field][i], field, get(this, field))) {
								isValid = false;
							}
						}
					}
				}
			}

			if(isValid) {
				resolve();
			}
			else {
				reject();
			}
		}).bind(this));
	},

	clearValidationErrors(fieldName) {
		if (fieldName) {
			let errors = Object.assign({}, get(this, 'errors'));
			let fieldStruc = fieldName.split('.');

			if (fieldStruc.length > 1) {
				fieldName = fieldStruc.pop();
				let obj = get(errors, fieldStruc.join('.'));
				if (obj) {
					delete obj[fieldName];
				}
			}
			else {
				delete errors[fieldName];
			}

			set(this, 'errors', errors);
		}
		else {
			set(this, 'errors', {});
		}
	},

	buildObjectStructure(obj, field) {
		let fieldStruc = field.split('.');
		for(let i = 1; i < fieldStruc.length; ++i) {
			if(!get(obj, fieldStruc[i - 1])) {
				set(obj, fieldStruc[i - 1], {});
			}
		}
	},

	addValidationError(fieldName, message) {
		let errors = get(this, 'errors');
		let fieldError = get(errors, fieldName);
		if (!fieldError) {
			this.buildObjectStructure(errors, fieldName);
			fieldError = set(errors, fieldName, []);
		}
		fieldError.addObject(message);
	},

	validate_required(options, fieldName, fieldValue) {
		if (_.isEmpty(fieldValue)) {
			this.addValidationError(fieldName, options.message);
			return false;
		}
		return true;
	},

	actions: {
		validate() {
			this.validate(...arguments);
		}
	}
});
