import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
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
	},

	actions: {
		save(yesNo) {
			let yes = get(this, 'modal.save.confirmation.buttons.yes.value');
			if (!yesNo) {
				set(this, 'showModal', true);
			}
			else if (yesNo === yes) {
				let model = get(this, 'model');
				model.save();
			}
		}
	}
});
