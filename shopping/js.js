window.onload=function(){
   var div=document.getElementById("frame");
   var input=cl("parent",div);
   console.log(localStorage.getItem("jList"));
           }

window.onunload=function()
{

  //localStorage.clear();
}
 function NewObj(){
    var listItem= new Object();
    var list=document.getElementsByClassName("List");
    if(list.length!=0)
    {
      for (var i = 0;i<list.length; i++) {
        var  item=list[i].childNodes[0].childNodes[0].value;
            if(list[i].childNodes[0].lastChild.hasChildNodes())
            {
                listItem[item]={};
                traverse(list,0,listItem);
            }
            else
            {
                listItem[item+"List"]=item;
            }
            var   name=Object.keys(listItem)[i];
            var  ilist=list[i].lastChild.childNodes;
      }
   function traverse(node,first,oblist){
           for (var a = first; a < node.length; a++) {
            var d;
            if (first==3)
            {
              d=Object.keys(oblist)[a-3];
            }
            else
            {
               d=Object.keys(oblist)[a];

            }
               if(node[a].childNodes[0].lastChild.hasChildNodes())
                   {
                     var chil=node[a].childNodes[0].childNodes.length;
                     var childrens=node[a].childNodes[0].childNodes;
                     var o=oblist[d];
                      for (var i = 3; i < chil; i++) {
                         var val=childrens[i].childNodes[0].firstChild.value;
                         if (childrens[i].childNodes[0].lastChild.hasChildNodes())
                         {
                          
                           oblist[d][val]={};
                         }
                          else
                          {
                             oblist[d][val+"Item"]=val;
                          }
                      };
                        traverse(childrens,3,o);
                   }
           };
          } 
              localStorage.setItem("jList",listItem);   
              console.log(listItem);
    }
   }


