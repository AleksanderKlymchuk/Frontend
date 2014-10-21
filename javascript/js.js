
window.onload=function(){
/*

var input1=document.createElement("input");
input1.setAttribute("id","input")
var button=document.createElement("button");
button.setAttribute("id","button");
button.setAttribute("value","submit");
input1.setAttribute("type","number");

var content=document.getElementById("content");
document.ad

content.appendChild(input1);
content.appendChild(button);
console.log(content)
 */




}
function myFunction()
{
  data= document.getElementById("input").value;
  var reusltat=1;
  var fac;
  var nummer=parseInt(data);

 for (var i=1; i<=nummer; i ++)
  {
     reusltat=i*reusltat;
     
  }

alert(reusltat);

}
function bmv()
{
  height= document.getElementById("height").value;
  wheight= document.getElementById("weight").value;
  var num1=parseFloat(height);
  var num2=parseFloat(wheight);

  var bmv=num2/(num1*num1);
  alert(bmv);
 

}

function book(title, author)
{
   var Title, Author;
   
   this.Title=title;
   this.Author=author;

   this.ToString=function()
    {

    	return this.Title+" "+ this.Author;
    };
}

var bookArray= Array();
var book1=new book("Kendo UI","Talerik");

var book2=new book("MVC5","Framework");

bookArray.push(book1);
bookArray.push(book2);

function output()
{
for(var i=0;i<bookArray.length; i++)
 {

  document.write(bookArray[i].ToString());
  document.write("<br>");

 }
}
output();

function addbook()
 {
  title1= document.getElementById("Title").value;
  author2= document.getElementById("Author").value;
  bookN=new book(title1,author2);
  bookArray.push(bookN);
  
 output();


 }


