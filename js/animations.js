function startup() {
   		
  	var img1 = document.getElementById("img-1");
  	var img2 = document.getElementById("img-2");
  	var texture = document.getElementById("img-texture");
    var text1 = document.getElementById("textlayer-1");
    var text2 = document.getElementById("textlayer-2");
    var text3 = document.getElementById("textlayer-3");
    var product = document.getElementById("product-img");
    var cta = document.getElementById("buy-now");
    var replay = document.getElementById("replay");

  	$(img2).hide();
  	$(texture).hide();
  	$(text1).hide();
  	$(text2).hide();
  	$(text3).hide();
  	$(product).hide();
  	$(cta).hide();
  	$(replay).hide();
  	

  	setTimeout(function(){
	  	$(img2).show("slide",{direction:"left"},500);
  	},2000);

  	
  	setTimeout(function(){
  		$(text1).show("slide",{direction:"down"},500);
  		console.log(text1);
  	},3000);  	


  	setTimeout(function(){
  		$(text1).hide();
  		$(texture).show("slide",{direction:"left"},500);
  		console.log(text1);
  	},5000);

  	
  	setTimeout(function(){
  		$(text2).fadeIn(500);
  	},6000);

  	
  	setTimeout(function(){
  	 	$(text2).hide();
  	 },8000);

  	
  	setTimeout(function(){
  	 	// !!MISSING!! add code here to completely slide the texture
  	 	$(text3).show();
  	 	$(product).show("slide",{direction:"up"},500);
  	 	$(cta).show();
  	 },9000);

  	
  	setTimeout(function(){
  	 	$(replay).show();
  	 },10000);

};

	$(document).ready(startup);