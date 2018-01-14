import TextField from '@ember/component/text-field';

export default TextField.extend({
	keyDown(event) {
		return event.key.length > 1 || (/^$|[0-9]+/g).test(event.key);
	}
});
