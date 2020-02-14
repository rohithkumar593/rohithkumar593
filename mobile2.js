$(document).ready(function(){
	
	var flag=1;
	var cl=0;
	var mt=$("#main").css("marginTop");
	var cw=$(window).width();
	
	
	
	if (cw>600)
	{
		
	$("#right-arrow").click(function(){
		var la=$("#event1").css("margin-left");
		
		if(cl<7)
		{
			$("#event1").animate({marginLeft:"-=33%"});
			cl+=1;
		console.log($("#event1").css("margin-left"));
		
		}
		else{
			$("#event1").animate({marginLeft:"-=33%"});
			$("#right-arrow").hide();
			cl+=1;
		}
		


		});
		
		$("#left-arrow").click(function(){
		
		
		
		if (cl>0)
		{

			$("#event1").animate({marginLeft:"+=33%"});
			cl-=1;
			console.log("left",cl);
			$("#right-arrow").show();
			
			}

		});
			
	}
	
	else
	{
		
		screen.orientation.addEventListener("change", () => {
			if (screen.orientation.angle==90)
			{
				$("#lands").show();
				$("#main").hide();
			}
});
		
		$("#right-arrow").click(function(){
			if(cl<9){

		$("#event1").animate({marginLeft:"-=90%"});
		cl=cl+1;
		console.log(cl);
		
			}

		});
		
		$("#left-arrow").click(function(){
		
		if (cl>0)
		{
			console.log(cl>0);
			$("#event1").animate({marginLeft:"+=90%"});
			cl=cl-1;
			}
		});
			
	}
		
	
				
	$("#event1").click(function()
		{
			$("#popevent1").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent1").animate({marginTop:"0"},400);
			
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
	$("#event2").click(function()
		{
			$("#popevent2").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent2").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
	$("#event3").click(function()
		{
			$("#popevent3").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent3").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
	$("#event4").click(function()
		{
			$("#popevent4").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent4").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
		
		$("#event5").click(function()
		{
			$("#popevent5").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent5").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
		$("#event6").click(function()
		{
			$("#popevent6").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent6").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
		$("#event7").click(function()
		{
			$("#popevent7").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent7").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
		
		$("#event8").click(function()
		{
			$("#popevent8").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent8").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
		
		$("#event9").click(function()
		{
			$("#popevent9").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent9").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
		
		$("#event10").click(function()
		{
			$("#popevent10").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#eventsback").hide();
			$("#popevent10").animate({marginTop:"0"},400);
			if(cw>1200){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('images/background.jpeg')"});
		});
	
	
	$(".back").click(function(){
		$(".back").hide();
		$('#heading').show();
		$('#eventsback').show();
		$('#main').show();
		$('#main').animate({marginTop:mt},300);
		$('.popevent').animate({'marginTop':'+=800px'},700);
		setTimeout("$('.popevent').hide();",700);
		
		console.log($("#main").css("marginTop"));
		
	}
	);
	
	$(".wrong").click(function(){
		$('#heading').show();
		$('#main').show();
		$('#eventsback').show();
		$('#main').animate({marginTop:mt},300);
		$('.popevent').animate({'marginTop':'+=800px'},700);
		setTimeout("$('.popevent').hide();",700);
		
		console.log($("#main").css("marginTop"));
		
	}
	);
	
	/*$(window).on('popstate', function(event) {
		if(cw<1000)
		{
			$('#heading').show();
		$('#main').show();
		$('#main').animate({marginTop:mt},300);
		$('.popevent').animate({'marginTop':'+=800px'},700);
		setTimeout("$('.popevent').hide();",700);
		
		console.log($("#main").css("marginTop"));
		}
	});*/
});