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
"Spanish 1", "Spanish 2", "Spanish 3", "Spanish 4", "AP Spanish",, "Japanese 1", "Japanese 2", "Japanese 3", "Japanese 4", "AP Japanese", "French 1", "French 2", "French 3", "French 4", "AP French", "Chinese 1", "Chinese 2", "Chinese 3", "Chinese 4", "AP Chinese", "Vietnamese 1", "Vietnamese 2", "Vietnamese 3", "Vietnamese 4", "AP Vietnamese",
                                                                       //
//Other electives                                                      //
"Culinary Arts", "Culinary Arts 2", "Digital Photography", "Multimedia", "Animation", "Art",
/* "Art 2",1, */                                                       //
"Geography", "Computers"];                                             // 107
                                                                       //
if (Meteor.isClient) {                                                 // 111
	Meteor.startup(function () {                                          // 112
		//generate the dropdown box                                          //
		var sel = document.getElementById('ClassList');                      // 114
		for (var i = 0; i < catalog.length; i++) {                           // 115
			var opt = document.createElement('option');                         // 116
			opt.innerHTML = catalog[i];                                         // 117
			opt.value = catalog[i];                                             // 118
			sel.appendChild(opt);                                               // 119
		}                                                                    //
	});                                                                   //
}                                                                      //
                                                                       //
//end catalog array                                                    //
                                                                       //
//courses individual array                                             //
var classes = 1;                                                       // 127
                                                                       //
var course = [classes, 3]; //Seven classes max per schedule            // 129
                                                                       //
var name = 0,                                                          // 131
    difficulty = 0;                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
