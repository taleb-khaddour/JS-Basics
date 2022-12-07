let name =prompt( "what is your name");
let surname = prompt("what is your last name")
let city =prompt("your city ?")


document.getElementById("validate").addEventListener("click",function(){
alert("name :  "+ name + "\n" +"surname :"+surname +"\n"+"city : "+ city)});
document.querySelector("#name").value=name
document.querySelector("#surname").value=surname
document.querySelector("#city").value=city

