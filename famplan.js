
var fam1=sessionStorage.getItem("fam");



window.onload = function what (){
document.getElementById("cheek").innerHTML="Create the "+ fam1 +" Family Tech Agreement";
var x= document.getElementById("child0").innerHTML;
var count=sessionStorage.getItem("counter");

var counter=parseInt(count);



for(var i=0;i<=counter;i++)
{
document.getElementById("child"+i).innerHTML= x;
document.getElementsByClassName("chill")[i].innerHTML= sessionStorage.getItem("child"+i);
}


if(counter==0)
{
	document.getElementById("child0").id ="child0option1";

	document.getElementById("container").style.width = "1000px";

	document.getElementById("child1").style.display = "none";
	document.getElementById("child2").style.display = "none";
	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";


}
else if(counter==1)
{
	document.getElementById("child0").id ="child0option2";
	document.getElementById("child1").id="child1option2";

	document.getElementById("child2").style.display = "none";
	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";
}
else if(counter==2)
{
	document.getElementById("container").style.width = "1500px";

	document.getElementById("child0").id="child0option3";
	document.getElementById("child1").id="child1option3";
	document.getElementById("child2").id="child2option3";

	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";
}

else if(counter==3)
{
	document.getElementById("container").style.width = "1500px";

	document.getElementById("child0").id="child0option3";
	document.getElementById("child1").id="child1option3";
	document.getElementById("child2").id="child2option3";

	document.getElementById("child3").style.display = "none";
	document.getElementById("child4").style.display = "none";
}
else
{
	//standard

}



//make a function instead

var x=document.getElementsByClassName("kidscreenz");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%5==0)
{
countt++;
document.getElementsByClassName("kidscreenz")[0].className="kidscrn"+countt;
}

else
{
	document.getElementsByClassName("kidscreenz")[0].className="kidscrn"+countt;

}
x=document.getElementsByClassName("kidscreenz").length;

count++;

}

var x=document.getElementsByClassName("kidscreenft");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%7==0)
{
countt++;
document.getElementsByClassName("kidscreenft")[0].className="kidscrnft"+countt;
}

else
{
	document.getElementsByClassName("kidscreenft")[0].className="kidscrnft"+countt;

}
x=document.getElementsByClassName("kidscreenft").length;

count++;

}

var x=document.getElementsByClassName("kidDC");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%2==0)
{
countt++;
document.getElementsByClassName("kidDC")[0].className="kidDVC"+countt;
}

else
{
	document.getElementsByClassName("kidDC")[0].className="kidDVC"+countt;

}
x=document.getElementsByClassName("kidDC").length;

count++;

}


var x=document.getElementsByClassName("kidMC");
var count=0;
var countt=0;
while (x!=0)
{



	if(count!=0&&count%8==0)
	{
	countt++;
	document.getElementsByClassName("kidMC")[0].className="kidMC"+countt;
	}

	else
	{
		document.getElementsByClassName("kidMC")[0].className="kidMC"+countt;

	}
	x=document.getElementsByClassName("kidMC").length;

	count++;

}

var x=document.getElementsByClassName("kidBO");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%7==0)
{
countt++;
document.getElementsByClassName("kidBO")[0].className="kidBO"+countt;
}

else
{
	document.getElementsByClassName("kidBO")[0].className="kidBO"+countt;

}
x=document.getElementsByClassName("kidBO").length;

count++;

}

var x=document.getElementsByClassName("kidMM");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%6==0)
{
countt++;
document.getElementsByClassName("kidMM")[0].className="kidMM"+countt;
}

else
{
document.getElementsByClassName("kidMM")[0].className="kidMM"+countt;

}
x=document.getElementsByClassName("kidMM").length;

count++;

}

var x=document.getElementsByClassName("kidDig");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%8==0)
{
countt++;
document.getElementsByClassName("kidDig")[0].className="kidDig"+countt;
}

else
{
	document.getElementsByClassName("kidDig")[0].className="kidDig"+countt;

}
x=document.getElementsByClassName("kidDig").length;

count++;

}

var x=document.getElementsByClassName("kidSfty");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%5==0)
{
countt++;
document.getElementsByClassName("kidSfty")[0].className="kidSfty"+countt;
}

else
{
	document.getElementsByClassName("kidSfty")[0].className="kidSfty"+countt;

}
x=document.getElementsByClassName("kidSfty").length;

count++;

}

var x=document.getElementsByClassName("kidSE");
var count=0;
var countt=0;
while (x!=0)
{



if(count!=0&&count%2==0)
{
countt++;
document.getElementsByClassName("kidSE")[0].className="kidSE"+countt;
}

else
{
	document.getElementsByClassName("kidSE")[0].className="kidSE"+countt;

}
x=document.getElementsByClassName("kidSE").length;

count++;

}
document.getElementById("createfamilyplan").addEventListener("click", function(){ Checkboxelements(countt, true); });
document.getElementById("createfamilyplanParent").addEventListener("click", function(){ Checkboxelements(countt, false); });



};

function Checkboxelements(countt, decider)
{
	
	// create a function that does this
	for(var i=0;i<=countt;i++)
	{	
		//turn into function
		console.log(i);

		
		for(var j=0;j<document.getElementsByClassName("kidscrn"+i).length;j++)
		{
			
			//Puts in an array 
			if(document.getElementsByClassName("kidscrn"+i)[j].checked==true && j!=2)
			{	
				document.getElementsByClassName("kidscrn"+i)[j].value;
				sessionStorage.setItem("kidscrn"+i+j,document.getElementsByClassName("kidscrn"+i)[j].value);
				console.log(sessionStorage.getItem("kidscrn"+i+j));			
			}

			
			if(j!=0&&j%3==0)
			{
				if(document.getElementsByClassName("kidscrn"+i)[j-1].checked==true)
				{
					document.getElementsByClassName("kidscrn"+i)[j].value;
					sessionStorage.setItem("kidscrn"+i+j,document.getElementsByClassName("kidscrn"+i)[j].value);
					console.log("activated"+sessionStorage.getItem("kidscrn"+i+j));
				}
			}
			

			if(j!=0&&j%4==0)
			{

				document.getElementsByClassName("kidscrn"+i)[j].value;
				sessionStorage.setItem("kidscrn"+i+j,document.getElementsByClassName("kidscrn"+i)[j].value);
				console.log(sessionStorage.getItem("kidscrn"+i+j));

			}


			console.log(sessionStorage.getItem("kidscrn"+i+j));
		}

		
		for(var j=0;j<document.getElementsByClassName("kidscrnft"+i).length;j++)
		{
			
		
			if(document.getElementsByClassName("kidscrnft"+i)[j].checked && j!=5)
			{
				
				document.getElementsByClassName("kidscrnft"+i)[j].value;
				sessionStorage.setItem("kidscrnft"+i+j,document.getElementsByClassName("kidscrnft"+i)[j].value);
				console.log(sessionStorage.getItem("kidscrnft"+i+j));
			}

			if(j!=0&&j%6==0)
			{
				if(document.getElementsByClassName("kidscrnft"+i)[j-1].checked==true)
				{
				
					document.getElementsByClassName("kidscrnft"+i)[j].value;
					sessionStorage.setItem("kidscrnft"+i+j,document.getElementsByClassName("kidscrnft"+i)[j].value);
					console.log(sessionStorage.getItem("kidscrnft"+i+j));
			
				}

			}

			

		}

		for(var j=0;j<document.getElementsByClassName("kidDVC"+i).length;j++)
		{	
				document.getElementsByClassName("kidDVC"+i)[j].value;
				sessionStorage.setItem("kidDVC"+i+j,document.getElementsByClassName("kidDVC"+i)[j].value);
				console.log(sessionStorage.getItem("kidDVC"+i+j));
		}

		for(var j=0;j<document.getElementsByClassName("kidMC"+i).length;j++)
		{
		
			
	
			if(document.getElementsByClassName("kidMC"+i)[j].checked && j!=6)
			{
				
				document.getElementsByClassName("kidMC"+i)[j].value;
				sessionStorage.setItem("kidMC"+i+j,document.getElementsByClassName("kidMC"+i)[j].value);
				console.log(sessionStorage.getItem("kidMC"+i+j));
			}

			if(j!=0&&j%7==0)
			{
				
				if(document.getElementsByClassName("kidMC"+i)[j-1].checked==true)
				{
				
					document.getElementsByClassName("kidMC"+i)[j].value;
					sessionStorage.setItem("kidMC"+i+j,document.getElementsByClassName("kidMC"+i)[j].value);
					console.log(sessionStorage.getItem("kidMC"+i+j));
			
				}

			}
		}

		for(var j=0;j<document.getElementsByClassName("kidBO"+i).length;j++)
		{
			

			if(document.getElementsByClassName("kidBO"+i)[j].checked &&j!=5)
			{
				
				document.getElementsByClassName("kidBO"+i)[j].value;
				sessionStorage.setItem("kidBO"+i+j,document.getElementsByClassName("kidBO"+i)[j].value);
				console.log(sessionStorage.getItem("kidBO"+i+j));
			}

			if(j!=0&&j%6==0)
			{
				if(document.getElementsByClassName("kidBO"+i)[j-1].checked==true)
				{
				
					document.getElementsByClassName("kidBO"+i)[j].value;
					sessionStorage.setItem("kidBO"+i+j,document.getElementsByClassName("kidBO"+i)[j].value);
					console.log(sessionStorage.getItem("kidBO"+i+j));
			
				}

			}

		}

		for(var j=0;j<document.getElementsByClassName("kidMM"+i).length;j++)
		{
			
	
			if(document.getElementsByClassName("kidMM"+i)[j].checked && j!=4)
			{
				
				document.getElementsByClassName("kidMM"+i)[j].value;
				sessionStorage.setItem("kidMM"+i+j,document.getElementsByClassName("kidMM"+i)[j].value);
				console.log(sessionStorage.getItem("kidMM"+i+j));
			}

			if(j!=0&&j%5==0)
			{
				if(document.getElementsByClassName("kidMM"+i)[j-1].checked==true)
				{
				
					document.getElementsByClassName("kidMM"+i)[j].value;
					sessionStorage.setItem("kidMM"+i+j,document.getElementsByClassName("kidMM"+i)[j].value);
					console.log(sessionStorage.getItem("kidMM"+i+j));
			
				}

			}
		}

		for(var j=0;j<document.getElementsByClassName("kidDig"+i).length;j++)
		{
			
			if(document.getElementsByClassName("kidDig"+i)[j].checked && j!=6)
			{
				document.getElementsByClassName("kidDig"+i)[j].value;
				sessionStorage.setItem("kidDig"+i+j,document.getElementsByClassName("kidDig"+i)[j].value);
				console.log(sessionStorage.getItem("kidDig"+i+j));
			}

			if(j!=0&&j%7==0)
			{
				if(document.getElementsByClassName("kidDig"+i)[j-1].checked==true)
				{
				
					document.getElementsByClassName("kidDig"+i)[j].value;
					sessionStorage.setItem("kidDig"+i+j,document.getElementsByClassName("kidDig"+i)[j].value);
					console.log(sessionStorage.getItem("kidDig"+i+j));
			
				}
			}
		}

		for(var j=0;j<document.getElementsByClassName("kidSfty"+i).length;j++)
		{

			if(document.getElementsByClassName("kidSfty"+i)[j].checked && j!=3)
			{
				sessionStorage.setItem("kidSfty"+i+j,document.getElementsByClassName("kidSfty"+i)[j].value);
				console.log(sessionStorage.getItem("kidSfty"+i+j));
			}

			if(j!=0&&j%4==0)
			{
				if(document.getElementsByClassName("kidSfty"+i)[j-1].checked==true)
				{
				
					document.getElementsByClassName("kidSfty"+i)[j].value;
					sessionStorage.setItem("kidSfty"+i+j,document.getElementsByClassName("kidSfty"+i)[j].value);
					console.log(sessionStorage.getItem("kidSfty"+i+j));
			
				}
			}
		}

		for(var j=0;j<document.getElementsByClassName("kidSE"+i).length;j++)
		{

			sessionStorage.setItem("kidSE"+i+j, document.getElementsByClassName("kidSE"+i)[j].value);
			console.log(sessionStorage.getItem("kidSE"+i+j));
		}

		if(decider){
		window.location.assign("printpage.html"); 
		}
		else
		{
			window.location.assign("Parentagreement.html");
		}
	}
}

