var images=["dad.jpg","mom.jpg","me.jpg"];
var names=["Dad","Mom","Me"]

var i=0;

function next2()
{
document.getElementById("img").src=images[i];
document.getElementById("main").innerHTML=names[i];
i++;
if(i==3)
{
i=0;
}
}
