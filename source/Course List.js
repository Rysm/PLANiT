//Source code for scoring individual catalog courses

//Written by Andy Wang and Ivy input some values

/*
Variable declarations
*/

var ap = 3, hnrs = 2, cp = 1;

//Define the course catalog
// 2D array

var catalog = [

//Physical Ed
"P.E." = 1 ,

//Math

"Pre-Algebra" = 1,
"Algebra 2/Trig" = 1,
"Honors Algebra/Trig " = 2,
"Trigonometry" = 1,
"Geometry" = 1,
"Honors Geometry" = 2,
"Pre-Calculus" = 1 ,
"Honors Pre-Calculus" = 2,
"Calculus" = 1,
"AP Calculus AB" = 3,
"AP Calculus BC" = 3,
"Statistics" = 1,
"AP Statistics" = 3,

//Science

"Biology" = 1,
"Honors Biology" = 2,
"AP Biology" = 3,
"Integrated Sciences" = 1,
"Chemistry" = 1,
"Honors Chemistry" =2,
"Ap Chemistry" = 3,
"Physics" = 1,
"Honors Physics" = 2,
"AP Physics" = 3,
"AP Environmental Science" = 3,

//Computers

"AP Computer Science" = 3,
"Rebotics" = 1,

//English

"English" = 1,
"Honors English" = 2,
"AP English" = 3,
"AP Literature" = 3,

//History

"World History" = 1,
"U.S. History" = 1,
"AP U.S. History" = 3,
"European History" = 1,
"AP European History" =3,
"AP Government" = 3,
"AP Macroeconomics" = 3,
"AP Microeconomics" = 3,

//Elective languages

"Spanish 1" = 1,
"Spanish 2" = 1,
"Spanish 3" = 2,
"Spanish 4" = 3,
"AP Spanish" = 3,
"Japanese 1" = 1,
"Japanese 2" = 1,
"Japanese 3" = 2,
"Japanese 4" = 3,
"AP Japanese" = 3,
"French 1" = 1,
"French 2" = 1,
"French 3" = 2,
"French 4" = 3,
"AP French" = 3,
"Chinese 1" = 1,
"Chinese 2" = 1,
"Chinese 3" = 2,
"Chinese 4" = 3,
"AP Chinese" = 3,
"Vietnamese 1" = 1,
"Vietnamese 2" = 1,
"Vietnamese 3" = 2,
"Vietnamese 4" = 3,
"AP Vietnamese" = 3,



// Other electives 
"Culinary Arts" = 1,
"Culinary Arts 2 = 2",
"Digital Photography" = 1,
"Multimedia" = 1,
"Animation" = 1,
"Art 1" = 1,
"Art 2" = 1,
"Art 3" = 2,
"Art 4" = 3,
"AP Studio Art" = 3,
"Drama 1" = 1,
"Drama 2" = 1,
"Drama 3" = 2,
"Drama 4" = 3,
"Geography" = 1,
"Computers" = 1,
];
//end catalog array


// value for courses with elseif


if("Honors" || "3"){
		value = 2;
}
	else if ("AP" || "4"){
		value = 3;
} else { 
		value = 1;
}  


//courses individual array
var classes = 1; 

var course = [classes,3]; //Seven classes max per schedule

var name = 0, difficulty = 0;

//meteor template handler
/*
if (Meteor.isClient){
//only run client-sided
Template.body.helpers({
});
}
*/