import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poke-numeric-input', 'Integration | Component | poke numeric input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poke-numeric-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#poke-numeric-input}}
      template block text
    {{/poke-numeric-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
