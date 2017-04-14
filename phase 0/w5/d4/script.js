var h1Text = ['Judul Post', 'Judul Post 2'];
var spanText = ['12 May 2016', '13 May 2016'];

var body = document.body;
var div1 = document.getElementById('main');

//make <div id="content"> </div>
var div10 = document.createElement('div');
div10.setAttribute('id','content');
div1.appendChild(div10);

for (i=0;i<2;i++) {
  // make child div, id = content-post
  var div100 = document.createElement('div');
  div100.setAttribute('class','content-post');
  div10.appendChild(div100);

  // make h1
  var h11000 = document.createElement('h1');
  var h11000Text = document.createTextNode(h1Text[i]);
  h11000.appendChild(h11000Text);
  div100.appendChild(h11000);

  // make span
  var span1000 = document.createElement('span');
  var span1000Text = document.createTextNode('Published on ' + spanText[i]);
  span1000.appendChild(span1000Text);
  div100.appendChild(span1000);

  // make p
  var p1000 = document.createElement('p');
  var p1000Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
  p1000.appendChild(p1000Text);
  div100.appendChild(p1000);

  //make btn
  var btn1000 = document.createElement('button');
  btn1000.setAttribute('class','share-post-btn');
  var btn1000Text = document.createTextNode('Share This Post');
  btn1000.appendChild(btn1000Text);
  div100.appendChild(btn1000);
}

// OTHER WAYS TO DO THAT - LA LA LA LA LA //

/* Using for to add element to certain divs
div100 = document.getElementsByClassName('content-post');

for (j=0;j<div100.length;j++) {
  var h11000 = document.createElement('h1');
  var h11000Text = document.createTextNode(h1Text[j]);
  h11000.appendChild(h11000Text);
  div100[j].appendChild(h11000);
}
*/

/* The long long road to add element
//make <div id="content-post"> </div>
var div100 = document.createElement('div');
div100.setAttribute('id','content-post');
div10.appendChild(div100);

//make h1
var h1100 = document.createElement('h1');
var h1100Text = document.createTextNode('Judul Post')
h1100.appendChild(h1100Text);
div100.appendChild(h1100);

//make  span
var span100 = document.createElement('span');
var span100Text = document.createTextNode(' Published on 12 May 2016');
span100.appendChild(span100Text);
div100.appendChild(span100);

//make p
var p100 = document.createElement('p');
var p100Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
p100.appendChild(p100Text);
div100.appendChild(p100);

//make button
var btn100 = document.createElement('button');
btn100.setAttribute('class','share-post-btn');
var btn100Text = document.createTextNode('Share This Post');
btn100.appendChild(btn100Text);
div100.appendChild(btn100);
*/
