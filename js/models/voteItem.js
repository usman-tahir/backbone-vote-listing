(function () {
  'use strict';

  var VoteItem = Backbone.model.extend({
    defaults: {
      title: '',
      votes: 0,
      lead: false,
      trail: false
    }
  });
})
