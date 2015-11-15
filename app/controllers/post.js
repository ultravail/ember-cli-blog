import Ember from "ember";

export default Ember.Controller.extend({
  posts: Ember.inject.controller(),
  authors: function () {
    // we can access authors on the posts controller thanks to the needs declaration above
    return this.get('posts.authors');
  }.property("posts.authors.@each.name")
});
