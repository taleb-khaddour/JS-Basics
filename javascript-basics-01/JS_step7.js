
let shoeSize =prompt("size of your shoes");
let year =prompt("your years");




document.getElementById("validate").addEventListener("click",function(){
    
    let res = (shoeSize * 2 + 5)*50 - year + 1766;
    alert(res);
});
document.querySelector("#shoe_size").value=shoeSize;
document.querySelector("#year").value=year;
