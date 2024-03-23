const packedBCD = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001"];
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

function toHex (bin) {
    let l = bin.match(/.{1,4}/g);
    let ret = "0x"
    l.forEach(s => {
        if (s == "0000") {
            ret = ret + "0";
        } else if (s == "0001") {
            ret = ret + "1";
        } else if (s == "0010") {
            ret = ret + "2";
        }else if (s == "0011") {
            ret = ret + "3";
        } else if (s == "0100") {
            ret = ret + "4";
        } else if (s == "0101") {
            ret = ret + "5";
        } else if (s == "0110") {
            ret = ret + "6";
        }else if (s == "0111") {
            ret = ret + "7";
        } else if (s == "1000") {
            ret = ret + "8";
        } else if (s == "1001") {
            ret = ret + "9";
        } else if (s == "1010") {
            ret = ret + "A";
        }else if (s == "1011") {
            ret = ret + "B";
        } else if (s == "1100") {
            ret = ret + "C";
        } else if (s == "1101") {
            ret = ret + "D";
        } else if (s == "1110") {
            ret = ret + "E";
        }else if (s == "1111") {
            ret = ret + "F";
        } 
    });
    return ret;
}


module.exports = {getCombiField, getExponentPrime, fifteenDPB, toHex}