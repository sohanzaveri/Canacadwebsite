
window.onload= function what(){

	var hiss = document.getElementById("hay"); 
	var addchild = document.getElementById("addchild");
	var counter=0;
	var forms = document.createElement("form");
	var textfield;
	var formz= document.getElementById("h");
	var para;
	var node; 
	var element;
	var childname =[" "," "," "," "];
	var next;
	var	shifter=document.getElementById("shift");
	var familyname= document.getElementById("lastname");
	var fam;



	var check= document.getElementById("addchild");

	if(check){
	addchild.addEventListener("click", ad);
	}

	function ad()
	{
		
		counter++;

		console.log(shifter);


		
			
		textfield = document.createElement("input");
		textfield.type = "text";
		textfield.name = "kids";
		textfield.id = "child"+counter;
		textfield.className = "fixme";

		forms.appendChild(textfield);
		shifter.insertBefore(forms, formz);

		var para = document.createElement("p");
		para.className="fixmeep";
		var node = document.createTextNode("Child name:\n");
		para.appendChild(node);

		var child = document.getElementById("child"+counter);
		forms.insertBefore(para, child);

		
	}

	var cech= document.getElementById("hay");

	if(cech){
	hiss.addEventListener("click", storevalues);
	}



	function storevalues()
	{
		fam= familyname.value;
		console.log(fam)
		sessionStorage.setItem("fam",fam);
		sessionStorage.setItem("counter",counter);


	for(var i=0;i<=counter;i++)
	{
		next="child"+i;
		childname[i]= document.getElementById(next).value;
		sessionStorage.setItem("child"+i,childname[i]);
		console.log(sessionStorage.getItem("child"+i));
	}



	window.location.assign("createfamilyplan.html"); 
	//window.onload = function what (){
	//console.log("function what activated");
	//document.getElementById("cheek").innerHTML="Create the"+ fam +"Family Plan";

	//};
	var fam1=sessionStorage.getItem("fam");
	console.log(fam1);



	}
}



