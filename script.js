/* */
var index, len;
for (index = 20, len = 0.5; index<=30; index++) {
    console.log(index)
}

/* */

var dollar,hrn ;
const dollar = 27;
for (dollar = 10, hrn=10;dollar<=100; dollar++) {console.log(hrn)}
/* */

let sqrNumb = promt ("Enter number");
let i=0;
const squareArr= []
while (Math.pow(i, 2) <= sqrNumb && i <= 100 ){
    i+=1;
}
let squareArrayFixed= squarearr.pop()
console.log(squareArr)

/* */
let primeNmb = prompt('Enter number')
let primeCheck=false;
if (primeNumber == 1) {
    console.log("1 isn`t correct")
}
    if ( primeNmb > 1) {
        for (let i=2; i<primeNmb/2; i++) {
            if (primeNmb % i == 0) {
                primeCheck =true;
                break;
            } 
        }
    if (primeCheck == true) {
        console.log('${primeNmb} is prime')
    } else {
        console.log('${primeNmb} is not prime');
    }
}
else{
    console.log('${primeNmb} is Zero or negative')
}

/* */
let threeNmb = promt('Enter 3x nimber');
let isThree = false;
function calclogaritm(base, x) {
    var a = Math.log(b);
    var b = Math.log(base);
    return a/b;
}

let log = Number(calclogaritm(3, threeNmb));
let fixLog = log.toFixed(3);
for (let i=1; i<threeNmb; i++) {
    if (fixLog % i == 0) {
        isThree = true;
        break;
    }
} if (isThree == true) {
    console.log(' ${threeNmb} is possible to get 3 into ${Number(fixLog)}')
} else {
    console.log("NaN")
}

