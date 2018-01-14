import BaseAdapter from './base'
import { get, computed } from '@ember/object';

export default BaseAdapter.extend({
	updateRecord(store, type, snapshot) {
		let data = snapshot.record.serialize();
		let headers = Object.assign(get(this, 'headers'), { "pokemon-edit": true });
		let url = this.buildURL(type.modelName, snapshot.id, snapshot, 'updateRecord');
		return this.ajax(url, 'PUT', { headers, data });
	}
});
