App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.RESTAdapter',
    // adapter: DS.FixtureAdapter.extend({
    //     queryFixtures: function(fixtures, query, type) {
    //         return fixtures.filter(function(item) {
    //             for(prop in query) {
    //                 if( item[prop] != query[prop]) {
    //                     return false;
    //                 }
    //             }
    //             return true;
    //         });
    //     }
    // })
});

/**************************
* Routes
**************************/
App.Router.map(function() {
  this.resource('fixtures', function() {
    // this.resource('match', { path: ':match_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
   this.transitionTo('fixtures');
  },
});




/**************************
* Views
**************************/



/**************************
* Controllers
/*************************/
// App.TeamsController = Ember.Controller.extend ({
  
// });

App.FixturesController = Ember.Controller.extend({

  all: function() {

    var url = 'https://www.google.com/calendar/feeds/webmaster%40chelseafc.com/public/basic';
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'xml',
      success: function(xml) {
        $(xml).find('entry').each(function () {
          // var m = App.Match.create({
          //   id: $(this).children('id').text,
          //   // published: $(this).children('published').text,
          //   // updated: $(this).children('updated').text,
          //   // title: $(this).children('title').text,
          //   // summary: $(this).children('summary').text,
          //   // content: $(this).children('content').text;
          // });
        });
        // console.log(m);
      }
    });
   } 
});

/**************************
* Models
**************************/

App.Match = Em.Object.extend({
  published: null,
  updated: null,
  category: null,
  title: null,
  summary: null,
  content: null,
  link: null,
});






