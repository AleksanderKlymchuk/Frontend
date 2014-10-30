window.onload=function(){
   var div=document.getElementById("frame");
   var input=cl("parent",div);

   var but=document.getElementById("sub-but");
   but.onclick=function(){
          
    var listItem={ };
    	
   	  var list=document.getElementsByClassName("List");
   	  var node=list[0];
   	  if ( list.length!=0)
   	  {


   	  }
   	if(list.length!=0)
   	{
   	  //var item=document.getElementsByClassName("Item");
   	  for (var i = 0;i <=list.length; i++) {
             var item;  
               
                if (list.length!=0)
                {

                	
                 	item=list[i].childNodes[0].value;
                 	listItem[item]=[];
                    //listItem.list.push({listItetem:item});
               
                    
                }
                
   	           
               
               var ilist=document.getElementsByClassName("Item");
               for (var a =0;  a<=ilist.length;  a++) {
               	
                     //listItem.[0].push({item:"2"});

                     var name=Object.keys(listItem);
                    listItem[name].push({item:"2"});
                     
                     	
                     	console.log(listItem[name][a])
                     
                    

               }

              	
 
   	  }

   


   	}
alert("Hello");
      



   }







           }
		  

		
  
    
