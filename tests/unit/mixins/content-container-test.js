import Ember from 'ember';
import ContentContainerMixin from 'static-page-compiler/mixins/content-container';
import { module, test } from 'qunit';

module('Unit | Mixin | content container');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContentContainerObject = Ember.Object.extend(ContentContainerMixin);
  let subject = ContentContainerObject.create();
  assert.ok(subject);
});
