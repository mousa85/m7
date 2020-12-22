function required()
{
    var Subject =document.getElementById("Subject").value;
  var email = document.getElementById("email").value;
   var ID = document.getElementById("ID").value;
   var URL = document.getElementById("URL").value;
   var massage = document.getElementById("massage").value;
   if(Subject == "" && email == "" && ID == "" && URL == "" && massage == ""){
    alert("enter data , dont keep textbox empty");
   }
  else if(Subject == ""){
    alert("Subject is empty");
  }
  else if(email == ""){
    alert("email is empty");
  }
  else if(ID == ""){
    alert("ID is empty");
  }
  else if(URL == ""){
    alert("URL is empty");
  }
  else if(massage == ""){
    alert("massage is empty");
  }
  if(email != ""){
  var x = email;
 var start = email.indexOf("@");
 var y = "";
 for(var i = start + 1; i < x.length;i++){
     y+=x[i];
 }
 alert(y);
  }
  if(URL != ""){
 var z = URL;
 var end = URL.indexOf(".");
 var a = "";
 for(var i = 0; i < end;i++){
     a+=z[i];
 }
 alert(a);
}
if(Subject != ""){
 for(var i = 0;i<Subject.length;i++){
   if(!(Subject[i]>='a'&&Subject[i]<='z'||Subject[i]>='A'&&Subject[i]<='Z')){
   alert("Subject error");
   break;
   }
   }
 }
 if(massage != ""){
 for(var i = 0;i<massage.length;i++){
  if(!(massage[i]>='a'&&massage[i]<='z'||massage[i]>='A'&&massage[i]<='Z')){
  alert("massage error");
  break;
  }
  }
}
for(var i = 0;i<ID.length;i++){
  if((ID[i]>='a'&&ID[i]<='z'||ID[i]>='A'&&ID[i]<='Z')){
  alert("ID error");
  break;
  }
}
}