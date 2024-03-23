const { Router }= require('express');
const { Decimal } = require('decimal.js');
const {getExponentPrime, getCombiField, fifteenDPB, toHex} = require("../../public/js/helper.js");
const router = Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "\\" + 'index.html');
});

router.post("/compute", (req, res) => {
    let num = req.query.num;
    let rounding = req.query.rounding;

    if (num.match(/^-0+(\.0*)?(e(\+|-)?[0-9]+)?$/)) {
        let s = "0b10000" + "0".repeat(59);
        res.json({
            num: "-0",
            bin: s,
            hex: "0x8000000000000000"
        });
    } else if (num.match(/^(\+)?0+(\.0*)?(e(\+|-)?[0-9]+)?$/)) {
        let s = "0b00000" + "0".repeat(59);
        res.json({
            num: "0",
            bin: s,
            hex: "0x0000000000000000"
        });
    } else if (num.match(/^(\+|-)?[0-9]+(\.[0-9]*)?(e(\+|-)?[0-9]+)?$/)) {
        let d = new Decimal(num);
        let zero = new Decimal(0);
        let isNegative = false;
        if (d.lessThan(0)) {
            isNegative = true;
        }
        let max = new Decimal("9999999999999999e+369");
        let min = new Decimal("-9999999999999999e+369");

        if (d.lessThan(min)) {
            let s = "0b11111" + "0".repeat(59);
            res.json({
                num: "-Infinity",
                bin: s,
                hex: "0xF800000000000000"
            });
        } else if (d.greaterThan(max)) {
            let s = "0b01111" + "0".repeat(59);
            res.json({
                num: "Infinity",
                bin: s,
                hex: "0x7800000000000000"
            });
        } else {
            if (rounding == "G") {
                d = d.toSignificantDigits(16, Decimal.ROUND_HALF_EVEN);
            } else if (rounding == "A") {
                d = d.toSignificantDigits(16, Decimal.ROUND_HALF_UP);
            } else if (rounding == "T") {
                d = d.toSignificantDigits(16, Decimal.ROUND_DOWN);
            } else if (rounding == "C") {
                d = d.toSignificantDigits(16, Decimal.ROUND_CEIL);
            } else if (rounding == "F") {
                d = d.toSignificantDigits(16, Decimal.ROUND_FLOOR);
            }
            let s = d.toExponential();
            if (isNegative) {
                s = s.slice(1);
            }
            let digits = s.charAt(0);
            if (s.indexOf(".") != -1) {
                digits = digits + s.slice(s.indexOf(".") + 1, s.indexOf("e"));
            }
            let digitsCopy = digits;
            digitsCopy = digitsCopy.padStart(16, "0");

            let exponent = parseInt(s.slice(s.indexOf("e") + 1));
            let exponentPrime = getExponentPrime(exponent);

            if (exponentPrime < 0) {
                if (isNegative) {
                    let k = "0b10000" + "0".repeat(59);
                    res.json({
                        num: s,
                        bin: k,
                        hex: "0x8000000000000000"
                    });
                } else {
                    let k = "0b00000" + "0".repeat(59);
                    res.json({
                        num: s,
                        bin: k,
                        hex: "0x0000000000000000"
                    });
                }
            }
            let firstDigit = parseInt(digitsCopy.charAt(0));
            let otherDigits = digitsCopy.slice(1);
            let combiField = getCombiField(firstDigit, exponentPrime);
            let bcdMantissa = fifteenDPB(otherDigits);
            let signBit = "0";
            if (isNegative) {
                signBit = "1";
            }
            let contiField = parseInt(exponentPrime.toString()).toString(2).padStart(10, "0").slice(2);
            let bin = signBit + combiField + contiField + bcdMantissa;
            let hex = toHex(bin);
            bin = "0b" + bin;
            if (isNegative) {
                s = "-" + s;
            }
            res.json({
                num: s,
                bin: bin,
                hex: hex
            });
        }
    } else {
        let s = "0b111111" + "0".repeat(58);
        res.json({
            num: "NaN",
            bin: s,
            hex: "0xFC00000000000000"
        });
    }
});

module.exports = router;