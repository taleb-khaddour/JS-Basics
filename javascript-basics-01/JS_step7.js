function meta() {
    let shoeSize = document.getElementById("shoe_size").value;
    let year = document.getElementById("year").value;
    let res = (shoeSize * 2 + 5)*50 - year + 1766;
    alert(res);
};