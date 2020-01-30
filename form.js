 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBNOWrfwfB_ECOqF-aKX0n9YJk6x3jokOA",
    authDomain: "formex-d03a8.firebaseapp.com",
    databaseURL: "https://formex-d03a8.firebaseio.com",
    projectId: "formex-d03a8",
    storageBucket: "formex-d03a8.appspot.com",
    messagingSenderId: "425368806810",
    appId: "1:425368806810:web:b49e4170f14b6375170623",
    measurementId: "G-D0Y5CHL9P2"
  };

  firebase.initializeApp(firebaseConfig);
  
var db=firebase.firestore();

//to verify no textfield shouldn't be empty
function checkNull(x)
{
	if (x=="")
	{
		return false;
	}
	else
	{
		return true;
	}
}

//to register the details into firebase
function register()
{
	var gm=document.getElementById("email").value;
	var user=document.getElementById("name").value;
	var gmb=checkNull(gm);
	var nc=document.getElementById("clg").value;
	var phone=document.getElementById("mobile").value;
	var phoneb=checkNull(phone);
	var qc=document.getElementById("QueryCrackers").checked;
	var q=document.getElementById("Quizzotica").checked;
	var pp=document.getElementById("PraxisPlacement").checked;
	var ppr=document.getElementById("PaperPresentation").checked;
	var ww=document.getElementById("WebWreathe").checked;
	var dc=document.getElementById("DazzleCoding").checked;
	var tt=document.getElementById("TechTambola").checked;
	var cwc=document.getElementById("CaperWithCipher").checked;
	var cw=document.getElementById("CodeWarriors").checked;
	if (gmb&&phoneb)
	{
	db.collection("users").doc(gm).set({
		name:user,
		phone_number:phone,
		name_of_the_college:nc,
		Query_Crackers:qc,
		Quizzotica:q,
		Praxis_Placement:pp,
		Paper_Presentation:ppr,
		Web_Wreathe:ww,
		Dazzle_Coding:dc,
		Tech_Tambola:tt,
		Caper_With_Cipher:cwc,
		CodeWarriors:cw
	
	})
	.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
    console.error("Error adding document: ", error);
	});

	console.log("hi this is executing");
	}
	else{
		if (!gmb)
		{
			alert("missing gmail");
		}
		if (!phoneb)
		{
			alert("missing phone");
		}
	}
}