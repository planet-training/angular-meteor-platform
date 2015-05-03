#Angular Meteor Platform
Similar to the meteor-platform starter package but without loading
- blaze
- spacebars
- templating
- jQuery

but includes ```urigo:angular```
##Getting Started
###Create a angular meteor app
####Let meteor scaffolded an app based on the ```meteor-platform```
```
meteor create my-app
```
####angular-meteor-platform
Switch to angular-meteor-platform via replacing ```meteor-platform``` with ```planettraining:angular-meteor-platform``` in the _.meteor/packages_:
```
planettraining:angular-meteor-platform
autopublish
insecure
```
####Define the "root markup"
Since we do **not have templating** anymore you do not have any 'html' like an index.html where you could something like that:
```
<html>
  <body ng-app="my-app">
    <div ng-controller="FooController">
    {{something}}
    </div>
  </body>
</html>
```
Therefore for now you have to create the DOM part via JS, so create a e.g. _app.ng.js_ in the client part:
```
Template = {}; // currently required

Meteor.startup(function() { //meteor ready
    
    angular.element(document).ready(function() {
        //create a HTMlElement to include your root *.ng.html file
        var includeElement = angular.element('<div>')
          .attr({'ng-include': "'path/to/index.ng.html'"})
          
        //append the includeElement to the body
        angular.element(document.body)
          .append(includeElement);
        //start the application
        angular.bootstrap(document.body, ['myApp'], {
          strictDi : true //very helpful if you forget to .ng.js your angular javascript files
        });
    });
});

//let's angular
angular.module('myApp', ['angular-meteor']).controller(...).config(...) 
```
####Do some Angular
Now you can build your web application based on angular. Remember that all your markup code must end with *.ng.html* that it will transformed into angular's template cache and all your js should end with *.ng.js* that it will be processed by [ng-annotate](https://github.com/olov/ng-annotate.git)


###Accounts
The meteor oauth accounts packages currently have a strong blaze/templating dependency. For google and facebook you can use these for now:
```
planettraining:accounts-facebook
planettraining:accounts-google
```

