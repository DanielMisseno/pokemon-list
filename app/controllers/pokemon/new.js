import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import pokeValidation from '../../mixins/poke-validation';

export default Controller.extend(pokeValidation, {
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

		set(this, 'validations', {
			name: [{
				type: 'required',
				message: 'Favor preencher o nome.'
			}],
			height: [{
				type: 'required',
				message: 'Favor preencher a altura.'
			}],
			weight: [{
				type: 'required',
				message: 'Favor preencher o peso.'
			}]
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
			this.validate().then((function () {
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
			}).bind(this));
		},
		showList() {
			this.transitionToRoute('pokemon.list');
		}
	}
});
