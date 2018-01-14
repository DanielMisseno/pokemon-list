import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
	init() {
		this._super(...arguments);
		set(this, 'menuSettings', {
			canGoBack: true
		});

		set(this, 'modal', {
			save: {
				success: {
					message: 'Novo pokemon adicionado ;-)',
					buttons: [{
						text: 'Voltar para listagem'
					}]
				}
			}
		});

		this.clearPokemon();
	},

	clearPokemon() {
		set(this, 'name', '');
		set(this, 'height', '');
		set(this, 'weight', '');
	},

	actions: {
		save() {
			let newPokemon = this.store.createRecord('pokemon', {
				name: get(this, 'name'),
				height: get(this, 'height'),
				weight: get(this, 'weight')
			});
			this.clearPokemon();
			set(this, 'saving', true);
			newPokemon.save().finally((function () {
				set(this, 'saving', false);
				set(this, 'showModal', true);
			}).bind(this));
		},
		showList() {
			this.transitionToRoute('pokemon.list');
		}
	}
});
