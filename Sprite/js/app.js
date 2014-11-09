window.onload=function(){
	(function(){
    var canvas=document.getElementById("can-s");
    var context=canvas.getContext('2d');
    context.strokeRect(0,466,30,10);
    context.save();
  

	})();
function brickDraw(){
var canvas=document.getElementById("can-s");
for (var i = 0; i <= 9; i++) {

		var brikContext=canvas.getContext('2d');
		
		if (i<9)
		{ 
			brikContext.fillStyle="#61605F";
			brikContext.fillRect(570+i*40,465-i*30,40,35+i*30);
			brikContext.strokeStyle="#61605F";
            brikContext.strokeRect(570+i*40,465-i*30,40,35+i*30);
           
           
		}
		else if (i==9)
		{  
			  brikContext.fillStyle="#A4A4A4";
			  brikContext.fillRect(570+i*40,465-i*30,80,35+i*30);
			  brikContext.strokeStyle="#A4A4A4";
              brikContext.strokeRect(570+i*40,465-i*30,80,35+i*40);
		      brikContext.strokeRect(562+i*40,290-i*11,96,3);
		 
		}


        
};



}
function starBrick()
{  
   var canvas=document.getElementById("can-s");
   for (var i = 0; i < 6; i++) {
   	var stoneContext=canvas.getContext('2d');
   stoneContext.beginPath();
   stoneContext.arc(538+i*72,365-i*50,32,0,2*Math.PI);
   stoneContext.strokeStyle="blue";
   stoneContext.fillStyle="blue";
   stoneContext.fill();
   stoneContext.stroke();
   stoneContext.closePath();

   
   stoneContext.beginPath();
   stoneContext.moveTo(538+i*72,350-i*50);
   stoneContext.lineTo(532+i*72,378-i*50);
   stoneContext.lineTo(550+i*72,362-i*50);
   stoneContext.lineTo(526+i*72,362-i*50);
   stoneContext.lineTo(544+i*72,378-i*50);
   stoneContext.lineTo(538+i*72,350-i*50);
   stoneContext.fillStyle="yellow";
   stoneContext.strokeStyle="yellow";
   stoneContext.fill();
   stoneContext.stroke();
   stoneContext.closePath();


   };
   


}

function cloudBrick()
{  
   var canvas=document.getElementById("can-s");
   for (var i = 0; i < 14; i++) {
   var cloudeContext=canvas.getContext('2d');
   cloudeContext.fillStyle="yellow";
   cloudeContext.strokeRect(10+i*40,55,40,40);  

    cloudeContext.beginPath();
    cloudeContext.arc(18+i*40,70,2,0,2*Math.PI)
    cloudeContext.fill();
    cloudeContext.stroke();
    cloudeContext.closePath();
    cloudeContext.beginPath();
    cloudeContext.arc(38+i*40,70,2,0,2*Math.PI)
    cloudeContext.fill();
    cloudeContext.stroke();
    cloudeContext.closePath();
    cloudeContext.beginPath();
    var startAngle = (Math.PI / 180) * 180;
    var endAngle   = (Math.PI / 180) * 180;
    var anticlockwise = false;
    cloudeContext.arc(28+i*40,85,startAngle, endAngle, anticlockwise);
    
    cloudeContext.stroke();
    cloudeContext.closePath();

   };
   


}


//dragonShape();

cloudBrick();
 


starBrick();

brickDraw();
//drawEx1();


	x = 497;
   
   interval=setInterval(function(){dragonShape();}, 20);


}

function dragonShape()
{

 
  dimage = new Image();
  dimage.src='img/drag.png';
  dimage.addEventListener('load',drawImage);
}
function drawImage() {
 var canvas=document.getElementById("can-s");
  var dragonContext=canvas.getContext('2d');
               x -= 1;
              dragonContext.clearRect( 480,x, 61,61);
             
              dragonContext.globalCompositeOperation ="destination-over";
              dragonContext.drawImage(dimage, 480, x,60,60);
               dragonContext.save();
              if  (x<=448)
              { 
              	//dragonContext.clearRect( 480,x, 60,60);
                 clearInterval(interval);
                fayer();
             
              }

}
y=476;

 function fayer()
 {
 	


  var fayerInterval=setInterval(function(){

    var canvas=document.getElementById("can-s");
    var context=canvas.getContext('2d');
    context.clearRect(y,478,40,3);
    //context.fillStyle="yellow";
    context.fillRect(y,478,20,3);
    context.strokeStyle="yellow";
 	//context.strokeRect(y,478,10,10);
 	context.save();
 	context.fillStyle="yellow";
 	context.clearRect(y-100,478,40,30);
    context.fillRect(y-100,478,20,3);
 	context.save();
 
 	if(y<=-10)
 	{
     y=476
    
 	}

 	
 y-=20;

  },100);
 


 }




