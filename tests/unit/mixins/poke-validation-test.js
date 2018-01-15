import EmberObject from '@ember/object';
import PokeValidationMixin from 'pokemon-list/mixins/poke-validation';
import { module, test } from 'qunit';

module('Unit | Mixin | poke validation');

// Replace this with your real tests.
test('it works', function(assert) {
  let PokeValidationObject = EmberObject.extend(PokeValidationMixin);
  let subject = PokeValidationObject.create();
  assert.ok(subject);
});
