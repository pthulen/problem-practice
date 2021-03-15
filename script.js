console.log("connected");
var addDigits = function(num) {
    let currentStr = num.toString().split('');
    console.log(currentStr);
    while(currentStr.length > 1) {
        let total;
        for(let i=0; i < currentStr.length; i++) {
            console.log(Number(currentStr[i]));
            //total = total + Number(currentStr[i]);
        }
        console.log(` total after loop: ${total}`);
        total = total.toString().split('');
        currentStr = total;
    }
    return currentStr;
};

console.log(addDigits(38));
