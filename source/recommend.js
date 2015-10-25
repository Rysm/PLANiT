//Algorithm for recommendation for planit
//Pseudo-Code~!
//1. Receive the person's schedule
//2. Run a loop per class and suggest a hire ranking course

//array to pass the schedule through an intensive check
var dissect = ["class1","class2","class3","class4","class5","class6","class7"];

for (int i = 0; i<7; i++){}
	var rank = 0; //count for catalog
	//while their is no course match keep searching
	while (dissect[i]!=catalog[rank]){
		rank++;
	}
	//if the case is satisfied and said course is found
	//assign next highest course, supposedly
	//has FLAWS
	dissect[i] = catalog[rank++];	
}