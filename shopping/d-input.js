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
            var span=document.createElement("span");
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
		    var lineBreake=document.createElement("br");
		    span.setAttribute("class",nm);
		    addItem.onclick=function()
		    {
		      val=0;
              	 childVal=this.value;
                 NewInputs(span,"Item");
		    }
		     remItem.onclick=function()
		     {
               var last=this.parentNode;
              var rem=this.parentNode.getElementsByTagName("span")
             if (rem.length!=0)
             {
             var last=parseInt(rem.length-1);
             rem[last].parentNode.removeChild(rem[last]);
             }
              var br=this.parentNode.getElementsByTagName("br")
             if (br.length!=0)
             {
             var last=parseInt(br.length-1);
             br[last].parentNode.removeChild(br[last]);
             }
		     }
            inputText.type="text";
		    inputText.setAttribute("Placeholder","Enter "+nm+" Name");
            span.appendChild(inputText);
            span.appendChild(addItem);
            span.appendChild(remItem);
            el.appendChild(lineBreake);
            el.appendChild(span);
        }
        if (amount<val && amount!="-1")
          {
            var ChildLast=el.lastChild;
            el.removeChild(ChildLast);
            val=amount;
          }
}
