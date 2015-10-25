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
"AP Spanish",
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
"Geography",
"Computers",
];

//array of courseweights
var courseWeight=[1,1,1,2,1,1,2,1,2,1,3,3,1,3,1,2,3,1,1,2,3,1,1,2,3,1,2,3,3,3,1,1,2,3,3,1,1,3,1,3,3,3,3,1,1,2,3,3,1,1,2,3,3,1,1,2,3,3,1,1,2,3,3,1,1,2,3,3,1,2,1,1,1,1,1,2,3,3,1,1,2,3,1,1];

//Meteor for days
if (Meteor.isClient){

	Meteor.startup(function(){
	//generate the dropdown box
	var sel = document.getElementById('ClassList');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	
	var sel = document.getElementById('ClassList2');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	
	var sel = document.getElementById('ClassList3');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	
	var sel = document.getElementById('ClassList4');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	
	var sel = document.getElementById('ClassList5');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	
	var sel = document.getElementById('ClassList6');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	
	var sel = document.getElementById('ClassList7');
	for(var i = 0; i < catalog.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = catalog[i];
		opt.value = catalog[i];
		sel.appendChild(opt);
	}
	});


} 
//end catalog array

//