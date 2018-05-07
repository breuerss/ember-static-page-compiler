import Ember from 'ember';
import SelectableModelMixin from 'static-page-compiler/mixins/selectable-model';
import { module, test } from 'qunit';

module('Unit | Mixin | selectable model');

// Replace this with your real tests.
test('it works', function(assert) {
  let SelectableModelObject = Ember.Object.extend(SelectableModelMixin);
  let subject = SelectableModelObject.create();
  assert.ok(subject);
});
