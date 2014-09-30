$(document).ready(function(){
	 $(".li-p").hide();

  $("li ").mouseover(function()
  {
     
      $(".li-p").show();

  }) 
   $("li ").mouseleave(function()
  {
     
      $(".li-p").hide();

  }) 



 setInterval(function(){
   
   $( ".toggle" ).animate({
    opacity: 1,
    
    height: "toggle",
    height:"9em",
    width:"9em"
  }, 1000, function() {
    // Animation complete.
  }); 
   

  $( ".toggle" ).animate({
    opacity: 1,
    left: "+=50",
    height: "toggle",
    height:"10em",
    width:"10em"
  }, 1000, function() {
    // Animation complete.
  });




 /* $( "#toggle" ).toggle({ effect: "scale", direction: "vertical" });
*/


 },1000);

})











