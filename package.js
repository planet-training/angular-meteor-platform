Package.describe({
  name: 'planettraining:angular-meteor-platform',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/planet-training/angular-meteor-platform.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  summary : "Similar to the meteor-platform package but without blaze, templating, spacebars and jQuery"
});


Package.onUse(function(api) {
  // The "imply" here means that if your app uses "meteor-platform", it is
  // treated as if it also directly included all of these packages (and it gets
  // their exports, plugins, etc).
  //
  // If you want, you can "meteor remove meteor-platform" and add some of
  // these back in individually. We haven't tested every subset, though :)
  api.imply([
    // The normal "every package uses 'meteor'" rule only applies to packages
    // built from a package source directory, so we make sure apps get it too.
    // Meteor.isServer! The CSS extension handler! And so much more!
    'meteor@1.1.9',
    // A standard Meteor app is a web app. (Without this, there will be no
    // 'main' function unless you define one yourself.)
    'webapp@1.2.2',
    // It's Log! It's better than bad, it's good!
    'logging@1.0.8',
    // Tracker.autorun and friends. What's Meteor without reactivity?
    'tracker@1.0.9',
    'deps@1.0.9', // XXX COMPAT WITH PACKAGES BUILT FOR 0.9.0.
    // The easiest way to get a little reactivity into your app.
    'session@1.1.1',
    // DDP: Meteor's client/server protocol.
    'ddp@1.2.2',
    'livedata@1.0.15', // XXX COMPAT WITH PACKAGES BUILT FOR 0.9.0.
    // You want to keep your data somewhere? How about MongoDB?
    'mongo@1.1.2',
    // Easy type assertions? check.
    'check@1.0.6',
    // _.isUseful(true)
    'underscore@1.0.4',
    // Life isn't always predictable.
    'random@1.0.4',
    // People like being able to clone objects.
    'ejson@1.0.7',
    // I really don't know anything funny I could write about static files
    'static-html@1.0.2',
    // rock'n'roll
    'angular@1.0.1'
  ]);

  // These are useful too!  But you don't have to see their exports
  // unless you want to.
  api.use([
    // We can reload the client without messing up methods in flight.
    'reload@1.1.4',
    // And update automatically when new client code is available!
    'autoupdate@1.2.3'
  ], ['client', 'server']);

  // More mobile specific implies
  api.imply([
    // Remove the 300ms click delay on mobile
    'fastclick@1.0.7',
    // Good defaults for the mobile status bar
    'mobile-status-bar@1.0.6'
  ], 'web.cordova');

  api.imply([
    // Launch screen configuration. Currently only on mobile but we include the
    // no-op browser version anyway.
    'launch-screen@1.0.4'
  ], 'web');
});
