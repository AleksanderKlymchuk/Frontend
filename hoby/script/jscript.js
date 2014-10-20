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
$("#bgvid").prop('muted', true); 


$("#contentbar").on('mouseover',function(){
$("#bgvid").prop('muted', false); 

})
$("#contentbar").on('mouseleave',function(){
$("#bgvid").prop('muted', true); 
})
$("#ul-be").hide()
$("#bench").on('mouseover',function(){

 $("#ul-be").show()

})

 $("#ul-be").on('mouseleave',function(){

$("#ul-be").hide()
  })


 /*setInterval(function(){
   
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


*/

 /* $( "#toggle" ).toggle({ effect: "scale", direction: "vertical" });



 },1000);
*/

})











