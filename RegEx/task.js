const cardValidity = function (cardNum) {
  cardNum = cardNum.toString();

  const getRange = cardNum[0] == 5 ? "1-5" : "2-7";
  const MAST = `^[2|5][${getRange}][0-9]{14}$`;
  const VISA = "^4[0-9]{12}([0-9]{3})?$";


  if (cardNum.match(VISA)) console.log("Visa");
  else console.log("Not visa");

  if (cardNum.match(MAST)) console.log("Master Card");
  else console.log("Not mast");
};

cardValidity(2299267676898657);


/*
The mastercard must start with the range of values 51 - 55 or 22 - 27 (eg. 51..., 52... or 25..., 27...).

While for Visa it must start with 4  

The maximum number of digits in both cards is 16 but could be 13 in visa.

----------------------------------------------------------------------------------------------------------

1. The "^" indicates the beginning of the string and regExp.

2. The card must start with 2 or 5 in mastercard and 4 in visa card, hence the "[2|5]" and "4" after the caret.

3. In mastercard the next digit after the first is of any value between 1 - 5 if the number starts with 5 or 2 - 7 if the number starts with 2. Hence the ternary operator which checks for the starting value and returns the range of numbers valid for the next digit in the sequence.

4. In mastercard the numbers after the first TWO digits can be of any value while in visa it's after the FIRST digit "4". Hence,"[0 - 9]"

5. The maximum number of digits is 16 in both cards but it could also be 13 in visa. The curly brackets are used to match exactly n instances of the preceding character or pattern and since the first two characters has already been accounted for in mastercard, the remaining characters (range [0 - 9]) need to be exactly 14. Hence the {14} after "[0-9]".

For Visa the concept is the same but its syntax is a bit more complex because it could also be 13 or 16. The "or" operator (|) can't be used in te curly braces. We therefore make the length of the charaters after the first digit "4" to be exactly 12 making it 13 possible characters in total. Since it could also be 16 digits an additional 3 digits are added after the first 13 but are made optional by the optional quantifier sign "?".


6. The "$" marks the end of the string and regExp.
*/

