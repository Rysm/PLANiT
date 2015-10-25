var url = "https://blog-posts.firebaseio.com/";

var firebaseRef = new Firebase(url);

function funct1(evt)
{
  var title = $('#ClassTitle').text();

  firebaseRef.push({Course: title});
  evt.preventDefault();
}

var submit = document.getElementsByTagName('button')[0];

submit.onclick = funct1;