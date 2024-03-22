// takes the 15 digit fractional part and makes it bcd
function decimalToBCD(num) {
   let strNum = num.toString(); 

   let bcdstring = "";
   for (let i = 0; i < 15; i += 3) {
      bcdstring += denselyPacked(strNum.substring(i, i+3));
   }
   console.log(bcdstring);
   return bcdstring;
}

// num is a string that is the number in decimal
function decimalToPackedBCD(num) {
   let pBCD = "";
   for (let i = 0; i < num.length; i++) {
      let d = num[i];
      if (d === "0")
         pBCD += "0000";
      else if (d === "1")
         pBCD += "0001";
      else if (d === "2")
         pBCD += "0010";
      else if (d === "3")
         pBCD += "0011";
      else if (d === "4")
         pBCD += "0100";
      else if (d === "5")
         pBCD += "0101";
      else if (d === "6")
         pBCD += "0110";
      else if (d === "7")
         pBCD += "0111";
      else if (d === "8")
         pBCD += "1000";
      else if (d === "9")
         pBCD += "1001";
   }
   return pBCD;
}


// p is a string that represents packed bcd
function packedToDense(p) {
   // let dBCD = "";
   aei = p[0] + p[4] + p[8];
   bc = p.substring(1,3);
   fg = p.substring(5,7);
   jk = p.substring(9,11);
   d = p[3];
   h = p[7];
   m = p[11];
   p = "1"; // parity

   if (aei === "000") {
      p = "0";
      return bc + d + fg + h + p + jk + m;
   }
   else if (aei === "001") 
      return bc + d + fg + h + p + "00" + m;
   else if (aei === "010") 
      return bc + d + jk + h + p + "01" + m;
   else if (aei === "011") 
      return bc + d + "10" + h + p + "10" + m;
   else if (aei === "100") 
      return jk + d + fg + h + p + "11" + m;
   else if (aei === "101") 
      return fg + d + "01" + h + p + "11" + m;
   else if (aei === "110") 
      return jk + d + "10" + h + p + "11" + m;
   else if (aei === "111") 
      return "00" + d + "11" + h + p + "11" + m;
   
   return "";
}

// num is a 3 digit integer
function denselyPacked(num) {
   packedNum = decimalToPackedBCD(num);
   // console.log(packedNum);
   denseNum = packedToDense(packedNum);
   // console.log(denseNum);
   return denseNum;
}

// sample: the 15 fractional digits go here (not string)
decimalToBCD(888999888999888);