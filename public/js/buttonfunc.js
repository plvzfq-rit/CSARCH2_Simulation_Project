const compute = document.querySelector("#compute");
const field = document.querySelector("#decimal_number");
const dropdown = document.querySelector("#rounding");
const xhttp = new XMLHttpRequest();

compute.addEventListener("click", async (e) => {
    e.preventDefault();
    let num = field.value;
    let rounding = dropdown.value;
    xhttp.onreadystatechange = function() {
        let obj = JSON.parse(xhttp.responseText);
            document.getElementById("num").innerHTML = obj.num;
            document.getElementById("bin").innerHTML = obj.bin;
            document.getElementById("hex").innerHTML = obj.hex;
            field.value = "";
    }
    xhttp.open("GET", "/compute?num="+num+"&rounding="+rounding.charAt(0), true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
});