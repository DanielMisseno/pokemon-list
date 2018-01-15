import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import pokeValidation from '../../mixins/poke-validation';

export default Controller.extend(pokeValidation, {
	init() {
		this._super(...arguments);
		set(this, 'menuSettings', {
			canGoBack: true
		});

		set(this, 'messages', {
			save: "Deseja realmente salvar?"
		});

		set(this, 'modal', {
			save: {
				confirmation: {
					message: 'Deseja realmente salvar?',
					buttons: {
						yes: {
							text: 'Sim',
							value: 'yes',
						},
						no: {
							text: 'Não',
							value: 'no'
						}
					}
				}
			}
		});

		set(this, 'validations', {
			'model.name': [{
				type: 'required',
				message: 'Favor preencher o nome.'
			}],
			'model.height': [{
				type: 'required',
				message: 'Favor preencher a altura.'
			}],
			'model.weight': [{
				type: 'required',
				message: 'Favor preencher o peso.'
			}]
		});
	},

	actions: {
		save(yesNo) {
			let yes = get(this, 'modal.save.confirmation.buttons.yes.value');
			if (!yesNo) {
				this.validate().then((function () {
					set(this, 'showModal', true);
				}).bind(this));
			}
			else if (yesNo === yes) {
				let model = get(this, 'model');
				model.save();
			}
		}
	}
});
