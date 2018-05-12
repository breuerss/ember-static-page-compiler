import Ember from 'ember';
import HideableMixin from 'static-page-compiler/mixins/hideable';
import { module, test } from 'qunit';

module('Unit | Mixin | hideable');

// Replace this with your real tests.
test('it works', function(assert) {
  let HideableObject = Ember.Object.extend(HideableMixin);
  let subject = HideableObject.create();
  assert.ok(subject);
});
