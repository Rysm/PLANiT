//Source code for scoring individual catalog courses

//Written by Andy Wang

/*
Variable declarations
*/

var ap = 3, hnrs = 2, cp = 1;

//Define the course catalog
// 2D array

var catalog = [

//Physical Ed
<<<<<<< HEAD
["P.E."],[1],

//Math

["Pre-Algebra",1],
["Algebra 2/Trig",1],
["Honors Algebra/Trig 2",2],
["Trigonometry",1],
["Geometry",1],
["Honors Geometry",2],
["Pre-Calculus",1],
["Honors Pre-Calculus",2],
["Calculus",1],
["AP Calculus AB",3],
["AP Calculus BC",3],
["Statistics", 1],
["AP Statistics", 3],

//Science

["Biology",1],
["Honors Biology",2],
["AP Biology",3],
["Integrated Sciences",1],
["Chemistry",1],
["Honors Chemistry",2],
["Ap Chemistry",3],
["Physics",1],
["Honors Physics",2],
["AP Physics",3],
["AP Environmental Science",3],

//Computers

["AP Computer Science",3],

//English

["English",1],
["Honors English",2],
["AP English",3],
["AP Literature",3],

//History

["World History",1],
["U.S. History",1],
["AP U.S. History",3],
["European History",1],
["AP European History",3],
["AP Government",3],
["AP Macroeconomics",3],
["AP Microeconomics",3],

//Elective languages

["Spanish 1",1],
["Spanish 2",1],
["Spanish 3",2],
["Spanish 4",2],
["AP Spanish",3],
["Japanese 1",1],
["Japanese 2",1],
["Japanese 3",2],
["Japanese 4",2],
["AP Japanese",3],
["French 1",1],
["French 2",1],
["French 3",2],
["French 4",2],
["AP French",3],
["Chinese 1",1],
["Chinese 2",1],
["Chinese 3",1],
["Chinese 4",1],
["AP Chinese",3],
["Vietnamese 1",1],
["Vietnamese 2",1],
["Vietnamese 3",2],
["Vietnamese 4",2],
["AP Vietnamese",3],

//Other electives
["Culinary Arts",1],
["Culinary Arts 2",1],
["Digital Photography",1],
["Multimedia",1],
["Animation",1],
["Art",1],
["Art 2",1],
["Geography",1],
["Computers",1],
=======
"P.E.",

//Math

"Pre-Algebra",
"Algebra 2/Trig",
"Honors Algebra/Trig 2",
"Trigonometry",
"Geometry",
"Honors Geometry",
"Pre-Calculus",
"Honors Pre-Calculus",
"Calculus",
"AP Calculus AB",
"AP Calculus BC",
"Statistics",
"AP Statistics",

//Science

"Biology",
"Honors Biology",
"AP Biology",
"Integrated Sciences",
"Chemistry",
"Honors Chemistry",
"Ap Chemistry",
"Physics",
"Honors Physics",
"AP Physics",
"AP Environmental Science",

//Computers

"AP Computer Science",

//English

"English",
"Honors English",
"AP English",
"AP Literature",

//History

"World History",
"U.S. History",
"AP U.S. History",
"European History",
"AP European History",
"AP Government",
"AP Macroeconomics",
"AP Microeconomics",

//Elective languages

"Spanish 1",
"Spanish 2",
"Spanish 3",
"Spanish 4",
"AP Spanish",,
"Japanese 1",
"Japanese 2",
"Japanese 3",
"Japanese 4",
"AP Japanese",
"French 1",
"French 2",
"French 3",
"French 4",
"AP French",
"Chinese 1",
"Chinese 2",
"Chinese 3",
"Chinese 4",
"AP Chinese",
"Vietnamese 1",
"Vietnamese 2",
"Vietnamese 3",
"Vietnamese 4",
"AP Vietnamese",

//Other electives
"Culinary Arts",
"Culinary Arts 2",
"Digital Photography",
"Multimedia",
"Animation",
"Art",
/* "Art 2",1, */
"Geography",
"Computers",
>>>>>>> refs/remotes/origin/master
];

//end catalog array

<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/master
//courses individual array
var classes = 1; 

var course = [classes,3]; //Seven classes max per schedule

var name = 0, difficulty = 0;

<<<<<<< HEAD
/*
Templates for Forms
*/

//Dropdown form for classes
SelectSchema = new SimpleSchema({
  AddClass: {
    type: String
  }
});

if (Meteor.isClient){
Template.select.helpers({
  options: function () {
    return [
      {
        optgroup: "AP Classes",
        options: [
          {label: "P.E.", value: "P.E."},
          {label: "P.E.", value: "P.E."},
          {label: "P.E.", value: "P.E."}
        ]
      },
    ];
  }
});
}
=======
//meteor template handler
/*
if (Meteor.isClient){
//only run client-sided
Template.body.helpers({


});
}
*/
>>>>>>> refs/remotes/origin/master
