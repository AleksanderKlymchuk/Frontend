function cl(clname,element)
{
  var inp=document.createElement("input");
  inp.type="number";
  inp.setAttribute("id","num");
  inp.setAttribute("class","parent");
  inp.setAttribute("min","0");
  element.appendChild(inp);
  var d=element;
  inp.onclick=function()
  {
      NewInputs(d,"List");
  }


  inp.value=0;
  return(inp);
}
 var val=0;


function NewInputs(el,nm)
{
         var amount=document.getElementsByClassName("parent")[0].value;
         if(amount>val)
         {
        val=amount;
        var ul=document.createElement("ul");
        var li=document.createElement("li");
		    var inputText=document.createElement("input");
		    var addItem=document.createElement("a");
		    var remItem=document.createElement("a");
		    var textAdd=document.createTextNode("+");
		    var textRem=document.createTextNode("-");
		    inputText.setAttribute("type","text");

		    addItem.appendChild(textAdd);
		    addItem.setAttribute("href","#");
		    remItem.appendChild(textRem);
		    remItem.setAttribute("href","#");
		    
		    ul.setAttribute("class",nm);
		    addItem.onclick=function()
		    {
		      val=0;
              	 childVal=this.value;
                 NewInputs(li,"Item");
		    }
		     remItem.onclick=function()
		     {
              var last=this.parentNode.parentNode;
             var rem=this.parentNode.getElementsByTagName("ul")
             if (rem.length!=0)
             {
             var last=parseInt(rem.length-1);
             rem[last].parentNode.removeChild(rem[last]);
             }
            
              
		     }
            inputText.type="text";
		    inputText.setAttribute("Placeholder","Enter "+nm+" Name");
            li.appendChild(inputText);
           // ul.appendChild(inputText);
            li.appendChild(addItem);
            li.appendChild(remItem);
            ul.appendChild(li);
           
            el.appendChild(ul);
        }
        if (amount<val)
          {
            val=amount;
            var ChildLast=el.lastChild;
            el.removeChild(ChildLast);
            
           
          }
}
