import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('poke-picture', 'Integration | Component | poke picture', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{poke-picture}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#poke-picture}}
      template block text
    {{/poke-picture}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
