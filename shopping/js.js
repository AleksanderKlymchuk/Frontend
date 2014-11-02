






window.onload=function(){
   var div=document.getElementById("frame");
   var input=cl("parent",div);
           }
      

    
 var but=document.getElementById("sub-but");
    
 function NewObj(){
     var listItem= new Object();
    var list=document.getElementsByClassName("List");
    if(list.length!=0)
    {


      var item=null;
      var name=null;
      var ilist=null;
      val=0;
      var childValue=null;
      for (var i = 0;i<list.length; i++) {
              item=list[i].childNodes[0].childNodes[0].value;
              listItem[item]=[];
              name=Object.keys(listItem)[i];
              ilist=list[i].lastChild.childNodes;
              addObject();
             
      }
    

     

     function addObject()
        {
           var child=null;

          child="lastChild"

                   if(ilist[a].+child+.hasChildNodes())
                 {

                  console.log(ilist[a]);
                 }



           for (var i = 0; i < val; i++) {
                 
                  


                 }

              for (var a = 3; a < ilist.length; a++) {
              childValue=ilist[a].lastChild.childNodes[0].value;

              var b={a:childValue}
              var lastUL=ilist[a].getAttribute("class");
              if (lastUL=="Item") {
             
                 listItem[name].push(childValue);
               
               
               

              
                 
                   

              }
              
              
              

               
                 }
          
          
        }
console.log(val);

    }
     console.log(listItem);
   }


