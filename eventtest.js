$(document).ready(function(){
	
	var flag=1;
	var cl=0;
	var mt=$("#main").css("marginTop");
	var cw=$(window).width();
	var w=$(".card").width()+parseInt($(".card").css("marginLeft"));
	console.log(w);
	if (cw>600)
	{
		
	$("#right-arrow").click(function(){
		var la=$("#event1").css("margin-left");
		if(cl<6)
		{
			$("#event1").animate({marginLeft:"-=404"});
			cl+=1;
		console.log("right",cl);
		console.log(cl)
		
		}
		else{
			$("#event1").animate({marginLeft:"-=404"});
			$("#right-arrow").hide();
			cl+=1;
		}
		


		});
		
		$("#left-arrow").click(function(){
		var la=$("#event1").css("margin-left");
		console.log(la);
		if (cl>0)
		{

			$("#event1").animate({marginLeft:"+=404"});
			cl-=1;
			console.log("left",cl);
			$("#right-arrow").show();
			
			}

		});
			
	}
	
	else
	{
		$("#right-arrow").click(function(){
			if(cl<8){
		$("#event1").animate({marginLeft:"-=91.25%"});
		cl=cl+1;
		console.log(cl);
			}

		});
		
		$("#left-arrow").click(function(){
		var la=$("#event1").css("margin-left");
		if (cl>0)
		{

			$("#event1").animate({marginLeft:"+=91.25%"});
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
			$("#popevent1").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
	$("#event2").click(function()
		{
			$("#popevent2").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent2").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
	$("#event3").click(function()
		{
			$("#popevent3").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent3").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
	$("#event4").click(function()
		{
			$("#popevent4").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent4").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
		
		$("#event5").click(function()
		{
			$("#popevent5").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent5").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
		$("#event6").click(function()
		{
			$("#popevent6").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent6").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
		$("#event7").click(function()
		{
			$("#popevent7").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent7").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
		
		$("#event8").click(function()
		{
			$("#popevent8").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent8").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
		
		$("#event9").click(function()
		{
			$("#popevent9").show();
			$("#main").animate({marginTop:"-=250"});
			$("#main").hide();
			$("#heading").hide();
			$("#popevent9").animate({marginTop:"0"},400);
			if(cw>600){
			setTimeout("$('.back').show()",400);}
			else
				setTimeout("$('.wrong').show()",400);
			$("body").css({"backgroundImage":"url('bg.jpg')"});
		});
		
	/*$(window).scroll(function(){
		if (flag==0)
		{
			var sc=$(this).scrollTop();
			console.log(sc);
			if (sc>180){
			$("#popevent1").hide();
			$("#popevent1").css({"marginTop":"400px"});
			$("#main").show();
			}
		}
	});*/
	
	$(".back").click(function(){
		$(".back").hide();
		$('#heading').show();
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
		$('#main').animate({marginTop:mt},300);
		$('.popevent').animate({'marginTop':'+=800px'},700);
		setTimeout("$('.popevent').hide();",700);
		
		console.log($("#main").css("marginTop"));
		
	}
	);
	
	$(window).on('popstate', function(event) {
		if(cw<1000)
		{
			$('#heading').show();
		$('#main').show();
		$('#main').animate({marginTop:mt},300);
		$('.popevent').animate({'marginTop':'+=800px'},700);
		setTimeout("$('.popevent').hide();",700);
		
		console.log($("#main").css("marginTop"));
		}
	});
});