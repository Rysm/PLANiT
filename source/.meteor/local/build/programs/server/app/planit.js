(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// planit.js                                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
//Source code for scoring individual catalog courses                   //
                                                                       //
//Written by Andy Wang                                                 //
                                                                       //
/*                                                                     //
Variable declarations                                                  //
*/                                                                     //
                                                                       //
var ap = 3,                                                            // 9
    hnrs = 2,                                                          //
    cp = 1;                                                            //
                                                                       //
//Define the course catalog                                            //
// 2D array                                                            //
                                                                       //
var catalog = [                                                        // 14
                                                                       //
//Physical Ed                                                          //
"P.E.",                                                                // 17
                                                                       //
//Math                                                                 //
                                                                       //
"Pre-Algebra", "Algebra 2/Trig", "Honors Algebra/Trig 2", "Trigonometry", "Geometry", "Honors Geometry", "Pre-Calculus", "Honors Pre-Calculus", "Calculus", "AP Calculus AB", "AP Calculus BC", "Statistics", "AP Statistics",
                                                                       //
//Science                                                              //
                                                                       //
"Biology", "Honors Biology", "AP Biology", "Integrated Sciences", "Chemistry", "Honors Chemistry", "Ap Chemistry", "Physics", "Honors Physics", "AP Physics", "AP Environmental Science",
                                                                       //
//Computers                                                            //
                                                                       //
"AP Computer Science",                                                 // 51
                                                                       //
//English                                                              //
                                                                       //
"English", "Honors English", "AP English", "AP Literature",            // 55
                                                                       //
//History                                                              //
                                                                       //
"World History", "U.S. History", "AP U.S. History", "European History", "AP European History", "AP Government", "AP Macroeconomics", "AP Microeconomics",
                                                                       //
//Elective languages                                                   //
                                                                       //
"Spanish 1", "Spanish 2", "Spanish 3", "Spanish 4", "AP Spanish", "Japanese 1", "Japanese 2", "Japanese 3", "Japanese 4", "AP Japanese", "French 1", "French 2", "French 3", "French 4", "AP French", "Chinese 1", "Chinese 2", "Chinese 3", "Chinese 4", "AP Chinese", "Vietnamese 1", "Vietnamese 2", "Vietnamese 3", "Vietnamese 4", "AP Vietnamese",
                                                                       //
//Other electives                                                      //
"Culinary Arts", "Culinary Arts 2", "Digital Photography", "Multimedia", "Animation", "Art", "Geography", "Computers"];
                                                                       //
//array of courseweights                                               //
var courseWeight = [1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 3, 3, 1, 3, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 2, 3, 3, 3, 1, 1, 2, 3, 3, 1, 1, 3, 1, 3, 3, 3, 3, 1, 1, 2, 3, 3, 1, 1, 2, 3, 3, 1, 1, 2, 3, 3, 1, 1, 2, 3, 3, 1, 1, 2, 3, 3, 1, 2, 1, 1, 1, 1, 1, 2, 3, 3, 1, 1, 2, 3, 1, 1];
                                                                       //
//Meteor for days                                                      //
if (Meteor.isClient) {                                                 // 114
                                                                       //
  Meteor.startup(function () {                                         // 116
    //generate the dropdown box                                        //
    var sel = document.getElementById('ClassList');                    // 118
    for (var i = 0; i < catalog.length; i++) {                         // 119
      var opt = document.createElement('option');                      // 120
      opt.innerHTML = catalog[i];                                      // 121
      opt.value = catalog[i];                                          // 122
      sel.appendChild(opt);                                            // 123
    }                                                                  //
  });                                                                  //
}                                                                      //
//end catalog array                                                    //
                                                                       //
//Receiver of Class                                                    //
function courseChoose(choose) {                                        // 132
  var value = choose.value;                                            // 133
}                                                                      //
                                                                       //
//Schedule Using Schema                                                //
Schemas = {};                                                          // 137
                                                                       //
Template.registerHelper("Schemas", Schemas);                           // 139
                                                                       //
//Schedule Schema Declaration                                          //
Schemas.Schedule = new SimpleSchema({                                  // 142
  CourseName: {                                                        // 143
    type: String,                                                      // 144
    index: 1,                                                          // 145
    unique: true                                                       // 146
  }                                                                    //
});                                                                    //
                                                                       //
var Collections = {};                                                  // 150
                                                                       //
Template.registerHelper("Collections", Collections);                   // 152
                                                                       //
Schedule = Collections.Schedule = new Mongo.Collection("Schedule");    // 154
Schedule.attachSchema(Schemas.Schedule);                               // 155
                                                                       //
Meteor.publish(null, function () {                                     // 157
  return Schedule.find();                                              // 158
});                                                                    //
                                                                       //
Schedule.allow({                                                       // 161
  insert: function () {                                                // 162
    return true;                                                       // 163
  },                                                                   //
  remove: function () {                                                // 165
    return true;                                                       // 166
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=planit.js.map
