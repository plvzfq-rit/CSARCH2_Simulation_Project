const BigNumber = require('bignumber.js');
const packedBCD = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001"];



$(document).ready(function() {
    $("#compute").click(function(e) {
        
        // prevent page refresh
        e.preventDefault();
        
        // get value from input
        let input = document.getElementById("decimal_number").value;
        let bn = new BigNumber(input);
        console.log(bn);


        // checks if is in proper numerical format (trust)
        if (input.match(/^(\+|-)?[0-9]+(\.[0-9]*)?(e[0-9]+)?$/gm)) {
            
            // insert code here

        }

        // handles NaN
        else {
            document.getElementById("num").innerHTML = "NaN";
            document.getElementById("bin").innerHTML = "0b11111" + "0".repeat(59);
            document.getElementById("hex").innerHTML = "0xF800000000000000";
        }

    })

    // calculates exponent prime; exponent should be int
    function getExponentPrime (exponent) {
        return exponent + 398;
    }

    // creates combi field; firstNumber in [0,9], Z, and exponentPrime should be number
    function getCombiField (firstNumber, exponentPrime) {
        if (firstNumber < 8) {
            return parseInt(exponentPrime.toString()).toString(2).padStart(10, "0").slice(0, 2) + packedBCD[firstNumber].slice(1);
        } else {
            return "11" + parseInt(exponentPrime.toString()).toString(2).padStart(10, "0").slice(0, 2) + packedBCD[firstNumber].charAt(3);
        }
    }

    // fifteenNum is a numerical STRING
    function fifteenDPB (fifteenNum) {
        let returnString = "";
        returnString = returnString + threeDPB(fifteenNum.slice(0, 3));
        returnString = returnString + threeDPB(fifteenNum.slice(3, 6));
        returnString = returnString + threeDPB(fifteenNum.slice(6, 9));
        returnString = returnString + threeDPB(fifteenNum.slice(9, 12));
        returnString = returnString + threeDPB(fifteenNum.slice(12, 15));
        return returnString;
    }

    // threeNum is a numerical String
    function threeDPB (threeNum) {
        let numString = threeNum;
        let firstDigit = parseInt(numString.charAt(0));
        let secondDigit = parseInt(numString.charAt(1));
        let thirdDigit = parseInt(numString.charAt(2));
        
        let a = packedBCD[firstDigit].charAt(0);
        let b = packedBCD[firstDigit].charAt(1);
        let c = packedBCD[firstDigit].charAt(2);
        let d = packedBCD[firstDigit].charAt(3);
        let e = packedBCD[secondDigit].charAt(0);
        let f = packedBCD[secondDigit].charAt(1);
        let g = packedBCD[secondDigit].charAt(2);
        let h = packedBCD[secondDigit].charAt(3);
        let i = packedBCD[thirdDigit].charAt(0);
        let j = packedBCD[thirdDigit].charAt(1);
        let k = packedBCD[thirdDigit].charAt(2);
        let m = packedBCD[thirdDigit].charAt(3);

        let aei = a + e + i;

        if (aei === "000") {
            return b+c+d+f+g+h+"0"+j+k+m;
        } else if (aei === "001") {
            return b+c+d+f+g+h+"100"+m;
        } else if (aei === "010") {
            return b+c+d+j+k+h+"101"+m;
        } else if (aei === "011") {
            return b+c+d+"10"+h+"111"+m;
        } else if (aei === "100") {
            return j+k+d+f+g+h+"110"+m;
        } else if (aei === "101") {
            return f+g+d+"01"+h+"111"+m;
        } else if (aei === "110") {
            return j+k+d+"00"+h+"111"+m;
        } else if (aei === "111") {
            return "00"+d+"11"+h+"111"+m;
        }
    }
});