import Ember from 'ember';
import PageContainerMixin from 'static-page-compiler/mixins/page-container';
import { module, test } from 'qunit';

module('Unit | Mixin | page container');

// Replace this with your real tests.
test('it works', function(assert) {
  let PageContainerObject = Ember.Object.extend(PageContainerMixin);
  let subject = PageContainerObject.create();
  assert.ok(subject);
});
