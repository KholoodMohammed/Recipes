
function chkPasswords(){
     document.getElementById("Passwordverification").onblur=chkPasswords;
document.getElementById("myform").onsubmit=chkPasswords;

var init=document.getElementById("Password");
var sec=document.getElementById("Passwordverification");
if(init.value ==""){
alert("Please enter the password");
return false;
}
if(init.value != sec.value){
alert("The two passwords are not same");
return false;
}
if(init.value == sec.value)
alert("welcome");
return true;
}




