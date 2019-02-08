

//Printing issues/add parents


window.onload = function what (){
var count= sessionStorage.getItem("counter");

if(count==0)
{

	document.getElementById("container").style.width = "1000px";

	document.getElementById("child1").style.display = "none";
	document.getElementById("child2").style.display = "none";
	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";


}
else if(count==1)
{


	document.getElementById("child2").style.display = "none";
	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";
}
else if(count==2)
{


	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";
}

else if(count==3)
{

	document.getElementById("child4").style.display = "none";
}


for(var i=0;i<=count;i++)
{

	
	var filler=document.createTextNode(sessionStorage.getItem("child"+i));
	document.getElementById("childname"+i).appendChild(filler);


	console.log(checkiftrue("kidscrn",i));

	if(checkiftrue("kidscrn",i))
	{
		console.log("hello");



	var x = document.createElement("B");
	var filler=document.createTextNode("Screen Free zone(s):");
    x.appendChild(filler);

	document.getElementById("childscrn"+i).appendChild(x);
		for(var j=0;j<13;j++)
		{

			if(j==4)
			{
				var x=document.createElement("li");
				x.innerHTML="Devices will be charged in "+sessionStorage.getItem("kidscrn"+i+j);
				document.getElementById("childscrn"+i).appendChild(x);	
			}


			else if(sessionStorage.getItem("kidscrn"+i+j)!=null)
			{
				console.log(i+j);
				console.log(sessionStorage.getItem("kidscrn"+i+j));
				var x=document.createElement("li");
				x.innerHTML=sessionStorage.getItem("kidscrn"+i+j);
				document.getElementById("childscrn"+i).appendChild(x);
			}

		}
	}
	

	if(checkiftrue("kidscrnft",i))
	{
		if(sessionStorage.getItem("kidscrnft"+i+j)!=null){
			var filler=document.createTextNode("We will not use mobile devices at the following times:");
			var x = document.createElement("B");
    		x.appendChild(filler);
			document.getElementById("childscrnft"+i).appendChild(x);
			

			for(var j=0;j<15;j++)
			{
				if(sessionStorage.getItem("kidscrnft"+i+j)!=null)
				{
					console.log(i+j);
					var x=document.createElement("li");
					x.innerHTML=sessionStorage.getItem("kidscrnft"+i+j);
					document.getElementById("childscrnft"+i).appendChild(x);
				}

			}
		}
	}


	if(checkiftrue("kidDVC",i))
	{
		var filler=document.createTextNode("We will not use electronics during this time");
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childDVC"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(j==0)
			{
				var x=document.createElement("li");
				x.innerHTML="Sunday-Thursday "+sessionStorage.getItem("kidDVC"+i+j);
				document.getElementById("childDVC"+i).appendChild(x);
			}

			if(j==1)
			{
				var x=document.createElement("li");
				x.innerHTML="Friday,Saturday "+sessionStorage.getItem("kidDVC"+i+j);
				document.getElementById("childDVC"+i).appendChild(x);
			}

		}
	}


	if(checkiftrue("kidMC",i))
	{

		var filler=document.createTextNode("When we have recreational device time we will: ");
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childMC"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(sessionStorage.getItem("kidMC"+i+j)!=null)
			{
				var x=document.createElement("li");
				x.innerHTML=sessionStorage.getItem("kidMC"+i+j);
				document.getElementById("childMC"+i).appendChild(x);
			}
		}

	}

	if(checkiftrue("kidB0",i))
	{
		var filler=document.createTextNode("By Decreasing Screentime we will have time for:")
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childBO"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(sessionStorage.getItem("kidBO"+i+j)!=null)
			{
				var x=document.createElement("li");
				x.innerHTML=sessionStorage.getItem("kidBO"+i+j);
				document.getElementById("childBO"+i).appendChild(x);
			}
		}
	}


	if(checkiftrue("kidMM",i))
	{
		var filler=document.createTextNode("We will show good manners by:");
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childMM"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(sessionStorage.getItem("kidMM"+i+j)!=null)
			{
				var x=document.createElement("li");
				x.innerHTML=sessionStorage.getItem("kidMM"+i+j);
				document.getElementById("childMM"+i).appendChild(x);
			}
		}
	}


	if(checkiftrue("kidDig",i))
	{
		var filler=document.createTextNode("We will be a good Digital Citizen by: ");
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childDig"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(sessionStorage.getItem("kidDig"+i+j)!=null)
			{
				var x=document.createElement("li");
				x.innerHTML=sessionStorage.getItem("kidDig"+i+j);
				document.getElementById("childDig"+i).appendChild(x);
			}
		}
	}


	if(checkiftrue("kidSfty",i))
	{
		var filler=document.createTextNode("We will be safe by: ");
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childSfty"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(sessionStorage.getItem("kidSfty"+i+j)!=null)
			{
				var x=document.createElement("li");
				x.innerHTML=sessionStorage.getItem("kidSfty"+i+j);
				document.getElementById("childSfty"+i).appendChild(x);
			}
		}
	}

	if(checkiftrue("kidSE",i))
	{
		var filler=document.createTextNode("We will get enough sleep + exercise by:");
		var x = document.createElement("B");
    	x.appendChild(filler);
		document.getElementById("childSE"+i).appendChild(x);
		for(var j=0;j<15;j++)
		{
			if(j==0)
			{
				var x=document.createElement("li");
				x.innerHTML="Getting "+sessionStorage.getItem("kidSE"+i+j)+ " hours of sleep";
				document.getElementById("childSE"+i).appendChild(x);
			}
			else if(j==1)
			{
				var x=document.createElement("li");
				x.innerHTML="Getting "+sessionStorage.getItem("kidSE"+i+j)+ " hours of exercise per day";
				document.getElementById("childSE"+i).appendChild(x);
			}
		}
	}
}

if(sessionStorage.getItem("parents")!=null&&sessionStorage.getItem("parents")!="")
{
	console.log("condition true");
	document.getElementById("parents").style.visibility="visible";

}



window.print();
}


function checkiftrue(type,num)
{
	var a=false;
	var b=type;
	var c=num

	for(var j=0;j<=15;j++)
	{

		if(sessionStorage.getItem(b+num+j)!=null && sessionStorage.getItem(b+num+j)!="" )
		{
			console.log(sessionStorage.getItem(b+num+j));

			a=true;
		}

	}



	return a;
}



