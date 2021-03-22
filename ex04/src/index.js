const milili = [10, 25, 4];

function myArr(mili){
  "use strict";
  //Only change code below this line
  //  milili[0] = 4;
   // milili[1] = 10;
   // milili[2] = 25;
    mili = milili.pop();
    milili.unshift(mili);
  //Only change code above this line
 /// return milili;
 return mili;
}

console.log(myArr());
module.exports = myArr;