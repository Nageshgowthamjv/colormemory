define(['marionette', 'views/PlayView', 'models/playModel', 'application'],
  function(Marionette, PlayView, PlayModel, app) {

    var MyRouter = Marionette.AppRouter.extend({

      /*appRoutes: {
        "some/route": "someMethod"
      },*/

      /* standard routes can be mixed with appRoutes/Controllers above */
      routes: {
        // "some/otherRoute": "someOtherMethod"
        '': 'home',
        'test': 'test'
      },
      someOtherMethod: function() {
        // do something here.
      },
      home: function() {
        //testing home page with dummy test view
        var playView = new PlayView({
          model: new PlayModel()
        });
        app.content.show(playView);
      }

    });

    return new MyRouter();
  });