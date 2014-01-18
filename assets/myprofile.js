var present="aboutmebutt";
function rightclickfunc()
 {
  if(present=="aboutmebutt")
    present="personalbutt";
  else
   if(present=="personalbutt")
     present="academicbutt";
   else
     if(present=="academicbutt")
      present="interestbutt";
     else
      if(present=="interestbutt")
        present="otheractbutt";
  clickfunction(present);
}
function leftclickfunc()
 {
  if(present=="personalbutt")
    present="aboutmebutt";
  if(present=="academicbutt")
    present="personalbutt";
  if(present=="interestbutt")
    present="academicbutt";
  if(present=="otheractbutt")
    present="interestbutt";
  clickfunction(present);
}
function previousstate()
 {
  var but;
  but=document.getElementById("aboutmebutt");
  but.className="normalbutt";
  but=document.getElementById("personalbutt");
  but.className="normalbutt";
  but=document.getElementById("academicbutt");
  but.className="normalbutt";
  but=document.getElementById("interestbutt");
  but.className="normalbutt";
  but=document.getElementById("otheractbutt");
  but.className="normalbutt";
  but=document.getElementById(present);
  but.className="selectedbutt";
  clearheads();
  var str=present.replace("butt","head");
  var headpointer=document.getElementById(str);
  headpointer.className="show";
 }   
function clickfunction(id)
 {
  present=id;
  previousstate();
  var f1,a1,a2; 
  a1=document.getElementById("leftarrow");
  a1.className="show";
  a2=document.getElementById("rightarrow");
  a2.className="show";
  if(id=="aboutmebutt")
    a1.className="hide";
  if(id=="otheractbutt")
    a2.className="hide";
  f1=document.getElementById("footer");
  f1.className="hide";
  f1=document.getElementById("footer2");
  f1.className="hide";  
  var but;
  but=document.getElementById("aboutmebutt");
  but.className="normalbutt";
  but=document.getElementById("personalbutt");
  but.className="normalbutt";
  but=document.getElementById("academicbutt");
  but.className="normalbutt";
  but=document.getElementById("interestbutt");
  but.className="normalbutt";
  but=document.getElementById("otheractbutt");
  but.className="normalbutt";
  but=document.getElementById(id);
  but.className="selectedbutt";
  sidebox=document.getElementById("favourites");
  if(!(id=="aboutmebutt"))
   { 
    sidebox.className="show";
    f1=document.getElementById("footer2");
    f1.className="show";
  }
  else
  {
    sidebox.className="hide";
    f1=document.getElementById("footer");
    f1.className="show";
  }
  var str=document.getElementById("aboutmecont");
  str.className="hide";
  str=document.getElementById("personalcont");
  str.className="hide";
  str=document.getElementById("academiccont");
  str.className="hide";
  str=document.getElementById("interestcont");
  str.className="hide";
  str=document.getElementById("otheractcont");
  str.className="hide";
  var main=id.replace("butt","cont");
  var str1=document.getElementById(main);
  str1.className="show";  
 }
function clearheads()
 { 
  var str=document.getElementById("aboutmehead");
  str.className="hide";
  var str=document.getElementById("personalhead");
  str.className="hide";
  var str=document.getElementById("academichead");
  str.className="hide";
  var str=document.getElementById("interesthead");
  str.className="hide";
  var str=document.getElementById("otheracthead");
  str.className="hide";
}
function hoverfunction(id)
{
  var but;
  but=document.getElementById("aboutmebutt");
  but.className="normalbutt";
  but=document.getElementById("personalbutt");
  but.className="normalbutt";
  but=document.getElementById("academicbutt");
  but.className="normalbutt";
  but=document.getElementById("interestbutt");
  but.className="normalbutt";
  but=document.getElementById("otheractbutt");
  but.className="normalbutt";
  but=document.getElementById(id);
  but.className="hoverbutt";
  but=document.getElementById(present);
  but.className="selectedbutt";
  var str=id.replace("butt","head");
  var headpointer=document.getElementById(str);
  clearheads();
  headpointer.className="show";
}