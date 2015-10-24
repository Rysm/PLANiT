(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw('<!-- Image File to Replace Text Title -->\n  <h1>Welcome to PLANiT</h1>\n  <img src="logo.jpg">\n  \n  <!-- Dropdown to select classes -->\n  '), Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("selectForm"),
      schema: Spacebars.call(Spacebars.dot(view.lookup("Schemas"), "Select"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {
      return [ "\n  ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("AddClass"),
          options: Spacebars.call(view.lookup("options"))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afFormGroup"));
      }), "\n  ", HTML.BUTTON({
        type: "submit",
        "class": "btn btn-primary"
      }, "Add Class"), "\n  " ];
    });
  }) ];
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);
