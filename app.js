function details(){
//get 
var user_Name=document.getElementById('uName').value;
var user_Role=document.getElementById('uRole').value;
var user_Age=document.getElementById('uAge').value;
var user_Location=document.getElementById('uLocation').value;
var user_Salary=document.getElementById('uSalary').value;

// Name
if(user_Name==""){
    document.getElementById('spanName').innerHTML="Can't Feed"
    document.getElementById('spanName').style.color="red";
}
else{
    document.getElementById('spanName').innerHTML=user_Name;
    document.getElementById('spanName').style.color="white";
}
// Role 
if(user_Role==""){
    document.getElementById('spanRole').innerHTML="Can't Feed"
    document.getElementById('spanRole').style.color="red";
}
else{
    document.getElementById('spanRole').innerHTML=user_Role;
    document.getElementById('spanRole').style.color="white";
}
// Age
if(user_Age==""){
    document.getElementById('spanAge').innerHTML="Can't Feed"
    document.getElementById('spanAge').style.color="red";
}
else{
    document.getElementById('spanAge').innerHTML=user_Age;
    document.getElementById('spanAge').style.color="white";
}
// Location
if(user_Location==""){
    document.getElementById('spanLocation').innerHTML="Can't Feed "
    document.getElementById('spanLocation').style.color="red";
}
else{
    document.getElementById('spanLocation').innerHTML=user_Location;
    document.getElementById('spanLocation').style.color="white";
}
// Salary
 if(user_Salary==""){
    document.getElementById('spanSalary').innerHTML="Can't Feed "
    document.getElementById('spanSalary').style.color="red";
}
else{
    document.getElementById('spanSalary').innerHTML=user_Salary;
    document.getElementById('spanSalary').style.color="white";
}
//experence
    document.getElementById('spanExp').innerHTML="Can't Feed";
    document.getElementById('spanExp').style.color="red";

}
// delete
function delName(){
document.getElementById('spanName').innerHTML=" "
}
function delRole(){
    document.getElementById('spanRole').innerHTML=" ";
}
function delAge(){
    document.getElementById('spanAge').innerHTML=" ";
}
function delLocation(){
document.getElementById('spanLocation').innerHTML=" ";
}
function delSalary(){
    document.getElementById('spanSalary').innerHTML=" ";
}

// undo
function undoName(){
    var user_Name=document.getElementById('uName').value;
    document.getElementById('spanName').innerHTML=user_Name;
}
function undoRole(){
    var user_Role=document.getElementById('uRole').value;
    document.getElementById('spanRole').innerHTML=user_Role;
}
function undoAge(){
    var user_Age=document.getElementById('uAge').value;
    document.getElementById('spanAge').innerHTML=user_Age; 
}
function undoLocation(){
    var user_Location=document.getElementById('uLocation').value;
    document.getElementById('spanLocation').innerHTML=user_Location; 
}
function undoSalary(){
    var user_Salary=document.getElementById('uSalary').value;
    document.getElementById('spanSalary').innerHTML=user_Salary; 
}

// experice
// function experice(){
//     alert("Sorry ! We can't Show it to Everyone , due to security Issues ");
// }

function experice(){
   var exp = prompt("Enter Your Experice's : ");
   if(exp<=1 ){
    document.getElementById('spanExp').innerHTML=exp + " year";
    document.getElementById('spanExp').style.color="white";
   }
   else{
    document.getElementById('spanExp').innerHTML=exp + " years";
    document.getElementById('spanExp').style.color="white";
   }
   
}
//edit 
function editName(){
    var user_Name=document.getElementById('uName').value="";
}
function editRole(){
    var user_Role=document.getElementById('uRole').value="";
}
function editAge(){
    var user_Age=document.getElementById('uAge').value="";
}
function editLocation(){
    var user_Location=document.getElementById('uLocation').value="";
}
function editSalary(){
    var user_Salary=document.getElementById('uSalary').value="";
}

// change
function changeName(){
    var user_Name=document.getElementById('uName').value;
    document.getElementById('spanName').innerHTML=user_Name;

}
function changeRole(){
    var user_Role=document.getElementById('uRole').value;
    document.getElementById('spanRole').innerHTML=user_Role;

}
function changeAge(){
    var user_Age=document.getElementById('uAge').value;
    document.getElementById('spanAge').innerHTML=user_Age;

}
function changeLocation(){
    var user_Location=document.getElementById('uLocation').value;
    document.getElementById('spanLocation').innerHTML=user_Location;

}
function changeSalary(){
    var user_Salary=document.getElementById('uSalary').value;
    document.getElementById('spanSalary').innerHTML=user_Salary;

}