var enter=document.getElementById("enter");

var ul=document.getElementById("ul");


var input=document.querySelector(".input");



enter.addEventListener("click",
function(){

	var a=input.value.length;
	

	if(a>0)
	{
	var li=
	document.createElement("li");
	li.appendChild
	(document.createTextNode
		(input.value));
	ul.appendChild(li);
	input.value="";
	}

})		

input.addEventListener("keypress",
function(){

	
if(input.value.length>0 && event.which===13)
	
{
	var li=
	document.createElement("li");
	li.appendChild
	(document.createTextNode
		(input.value));
	ul.appendChild(li);
	console.log(input.value);
	input.value="";
}
})	


var remove=document.getElementById("remove");

remove.addEventListener("click",function(){
	
	var list=document.querySelectorAll("li");
	var l=list.length;
	var a=input.value;
	
	console.log(l);

	for(var i=0;i<l;i++)
	{	
		console.log(list[i].innerHTML);
		console.log(a);
		if(list[i].innerHTML === a )
			{
				console.log("same");
				list[i].setAttribute("class","underline"); 
					}

	}
	input.value="";
	
})





