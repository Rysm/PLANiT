(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw("<h1>Welcome to PLANiT</h1>");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("add a class");
Template["add a class"] = new Template("Template.add a class", (function() {
  var view = this;
  return [ HTML.Raw("<button>Add a Class</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));
  }), " times.") ];
}));

}).call(this);
