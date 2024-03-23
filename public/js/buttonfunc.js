const compute = document.querySelector("#compute");
const output = document.querySelector("#output");
const field = document.querySelector("#decimal_number");
const num = document.getElementById("num");
const bin = document.getElementById("bin");
const hex = document.getElementById("hex");
const dropdown = document.querySelector("#rounding");
const xhttp = new XMLHttpRequest();

compute.addEventListener("click", async (e) => {
    e.preventDefault();
    let num = field.value;
    let rounding = dropdown.value;
    output.disabled = false;
    xhttp.onreadystatechange = function() {
        // console.log(xhttp.responseText);
        let obj = JSON.parse(xhttp.responseText);
        // console.log(obj);
        document.getElementById("num").innerHTML = obj.num;
        document.getElementById("bin").innerHTML = obj.bin;
        document.getElementById("hex").innerHTML = obj.hex;
        field.value = "";
    }
    xhttp.open("POST", "/compute?num="+num+"&rounding="+rounding.charAt(0), true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
});

output.addEventListener("click", async (e) => {
    e.preventDefault();
    let numv = encodeURIComponent(num.innerHTML);
    let binv = encodeURIComponent(bin.innerHTML);
    let hexv = hex.innerHTML;
    xhttp.onreadystatechange = function() {
        alert("INFO: Content sent to output.txt in project folder.")
    }
    xhttp.open("POST", "/output?num="+numv+"&bin="+binv+"&hex="+hexv, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
});