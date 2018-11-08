// ADD NEW ITEM TO END OF LIST
var elem = document.createElement("li");
var textnode = document.createTextNode("cream");
elem.appendChild(textnode);
var position = document.getElementsByTagName("ul")[0];
position.appendChild(elem);

// ADD NEW ITEM START OF LIST

var elem2 = document.createElement("li");
var textnode2 = document.createTextNode("kale");
elem2.appendChild(textnode2);
var position2 = document.getElementsByTagName("ul")[0];
position2.insertBefore(elem2, position2.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var x = document.querySelectorAll("li");
var i;
for(i = 0; i < x.length; i++){
    x[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var hd = document.querySelector("h2");
var textnode3 = hd.firstChild.nodeValue;
var length = x.length;
var newhd = textnode3 + '<span>' + length + '</span>';
hd.innerHTML = newhd;