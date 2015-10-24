var key = {{1,6,8,11,12,14,16,20,21,23,26,27},{1,7,11,16,20,21,22,23,24,25,26},{2,3,6,7,9,10,12,13,14,15,17,18,19,20,22,24,25,27},{3,4,5,10,13,15,17,18,19,20,22,27},{5,6,8,10,12,14,21,23,25,26},{1,3,4,10,11,14,16,23,24}};,
var answers = {};
var scores = {};
var strings = {"Engineering","Art/Design", "Business/Enterprise", "Psychology", "Science", "Writing/Literature"};

//answers input here with the elseif 
function getScore(){
var data = $(":input").serializeArray();
for(var i in data)
{
	if(data.name != undefined)
		answers[parseInt(data.name, 10)] = data.value;
}
for(var i in key)
{
	for(var j in key[i])
		if(answers[j] == "Yes")
			scores[i] == undefined ? scores[i] = 1 : scores[i]++;
	scores[i] = 0;
}
$("p#score".append(strings[findHighest(scores)]));

}

("#submit").click(function(){

$("input[type='radio']".attr("checked", false);

});

function findHighest(scores)
{
	var highest = 0;
	for(var i = 0; i < scores.length; i++)
	{
		if(scores[i] > scores[highest])
			highest = i;
	}
	return highest;
}
