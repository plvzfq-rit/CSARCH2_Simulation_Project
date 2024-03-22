let packedBCD = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001"];

$(document).ready(function() {
    $("#compute").click(function(e) {
        
        // prevent page refresh
        e.preventDefault();
        
        // get value from input
        let input = document.getElementById("decimal_number").value;

        //testing input:
        //let input = "-9876543210123456e200";
        
        // checks if is in proper numerical format (trust)
        if (input.match(/^(\+|-)?[0-9]+(\.[0-9]*)?(e[-+]?[0-9]+)?$/gm)) {
            
            // insert code here

            let convertedValue = "";        //holds the converted value
            
            // First: Check if positive or negative for sign bit
                // Return: 0 or 1   
            let signBit = getSignBit(input);

            // Second: Apply rounding + Handling more than 16 digits & Decimals
                // Return: + or - then 16 digits plus exponent adjusted

                // Rounding Function here. Return the value to "input", or create a new var for it.

            // Third: get the exponent from input.
                // Return: the exponent
            let exponent = getExponent(input);

            // Third: use "getExponentPrime" with the exponent as the parameter
                // Return: the value of the exponent after adding 398
            let exponentPrime = getExponentPrime(exponent);

            // Fourth: Use "getCombiField" with the first digit of the padded out input and exponentPrime
                // Return: Five digits, binary       
            let firstDigit = getFirstDigit(input);
            let combiField = getCombiField(firstDigit, exponentPrime);

            // Fifth: Convert exponent to binary, pad to 10 digits, and get the last 8
                // Return: 8 digits   
            let expoCont = getExpoCont(exponentPrime);

            // Sixth: Use "fifteenDPB" and pass the rest of the digits of the padded parameter. This should be 15 digits
                // Return: 50 digits, binary
            let inputFifteen = (noMoreE(input)).slice(-15);
            let coeffField = fifteenDPB(inputFifteen);

            // Seventh: combine everything
            convertedValue = signBit + " " + combiField + " " + expoCont + " " + coeffField; // contains converted value

            // Eigth: hex it
            let uneditedConvertedValue = signBit + combiField + expoCont + coeffField;
            let decimalConvertedValue = parseInt(uneditedConvertedValue, 2);
            let hexConvertedValue = (decimalConvertedValue.toString(16)).toUpperCase(); // contains hexadecimal-converted value
            
            // Testing

            //console.log("Input:             ", input);
            //console.log("convertedValue:    ", convertedValue);

            //let checkerOutput = convertedValue.slice(-20);
            //let midpoint = 10;
            //let result = checkerOutput.slice(0, midpoint) + " " + checkerOutput.slice(midpoint);

            //console.log("Last 20 bits:      ", result);
            //console.log("Hex converted:     ", hexConvertedValue);

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

    // get the exponent; all values after 'e'
    function getExponent(input) {
        // Match the part after "e" using a regular expression
        let checker = input.match(/e([-+]?\d+)/i); 
        if (checker) {
            let exponent = parseInt(checker[1]);
            return exponent;
        } else {
            // Return 0 if no exponent is found, i.e. 10e0
            return 0;
        }
    }

    // get the sign bit based on first char of input
    function getSignBit(input){
        signBit = input.charAt(0);
            if (signBit=="-"){
                signBit = "1";
            } else {
                signBit = "0";
            }
        return signBit;
    }

    // get the first digit, taking + and - into account
    function getFirstDigit(input) {
        // Remove leading + or -
        let trimmedInput = input.replace(/^(\+|-)/, '');
        let firstDigit = trimmedInput[0];
        return parseInt(firstDigit);
    }

    // get the last 8 digits of exponentPrime in binary
    function getExpoCont(exponentPrime){
        let ePrimeBinary = parseInt(exponentPrime.toString()).toString(2).padStart(10, "0");
        let expoCont = ePrimeBinary.slice(-8);
        return expoCont;
    }

    // gets input without the exponent to get the 15 digits
    function noMoreE(input){
        let trimmedString = input.split("e");
        let noE = trimmedString[0]; // Get the part before "e"
        return noE;
    }
});
