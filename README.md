# Angular Meteor Platform
Similar to the meteor-platform starter package but without loading
- blaze
- spacebars
- templating
- jQuery

but includes ```angular```

# WARNING:

meteor 1.2.0.2 has a hidden jQuery dependency in static-html if you use attributes on the body tag i.e. ```<body ng-app="myApp">...</body>```.
Therefore you need explicitly add the jQuery dependencies for now until this is resolved https://github.com/meteor/meteor/issues/5320 or don't use body attributes


## Getting Started
### Create a angular meteor app
#### Let meteor scaffolded an app based on the ```meteor-platform```
```
meteor create my-app
```
#### angular-meteor-platform
Switch to angular-meteor-platform via replacing ```meteor-platform``` with ```planettraining:angular-meteor-platform``` in the _.meteor/packages_:
```
planettraining:angular-meteor-platform
autopublish
insecure
```
#### Define the "root markup"
Since we have static-html since meteor 1.2 you can create a index.html
```
<body ng-app="my-app">
 <div ng-controller="FooController">
   {{something}}
 </div>
</body>
```

#### Do some Angular
Now you can build your web application based on angular. Remember that all your markup code must end with *.ng.html* that it will transformed into angular's template cache and all your js should end with *.ng.js* that it will be processed by [ng-annotate](https://github.com/olov/ng-annotate.git)


### Accounts
The meteor oauth accounts packages currently have a strong blaze/templating dependency. For google and facebook you can use these for now:
```
planettraining:accounts-facebook
planettraining:accounts-google
```
