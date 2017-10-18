function calculate() {

    var userNum = [];
    var evenCount = 0;
    var oddCount = 0;


    do {
        var getNum = parseInt(window.prompt("Enter positive numbers one at a time , Type '-1' when your are finished "));
        userNum.push(getNum);


    } while ((getNum >= 0));
    if (getNum === -1) {
        userNum.pop();
    }


    var userMax = theMax(userNum);
    var userMin = theMin(userNum);
    var userMean =  mean(userNum);
    var userMedian = median(userNum);
    var userOdd = checkOdd(userNum);
    var userEven = checkEven(userNum);
    var userPrime = isPrime(userNum);
    var userPowers = isPowerofTwo(userNum);


    function theMax(numsArr) {
        for (var index = 0; index < numsArr.length; index++) {
            var max = Math.max(numsArr[index]);
        }
        return max;

    }

    function theMin(numsArr) {
        for (var index = 0; index < 1; index++) {
            numsArr.sort();
            var min = numsArr[0];
        }
        return min;
    }

    function mean(numsArr) {
        var total = 0;
        for (var index = 0; index < numsArr.length; index++) {
            total += numsArr[index];
        }
        return total / numsArr.length;
    }


    function median(numsArr) {
        var median = 0, numsLen = numsArr.length;
        userNum.sort();
        if (
            numsLen % 2 === 0 // is even
        ) {
            median = (numsArr[numsLen / 2 - 1] + numsArr[numsLen / 2]) / 2;
        } else {
            median = numsArr[(numsLen - 1) / 2];
        }
        return median;
    }

    function checkEven(numsArr) {
        for (var index = 0; index < numsArr.length; index++) {
            if (numsArr[index] % 2 === 0) {
                evenCount++;
            }

        }
        return evenCount
    }

    function checkOdd(numsArr) {
        for (var index = 0; index < numsArr.length; index++) {
            if (numsArr[index] % 2 === 0) {
            }
            else {
                oddCount++;
            }

        }
        return oddCount;
    }

    function isPrime(numsArr) {
        var primeCounter = 0;
        for (var index = 2; index <= numsArr.length; index++) {
            if (numsArr[index] % index !== 0) {
                primeCounter++
            }
        }
        return primeCounter;
    }

    function isPowerofTwo(numsArr) {
        var power2 = 0;

        for (var index = 0; index < numsArr.length; index++) {
            if ((numsArr[index] & (numsArr[index]) - 1) === 0) {
                power2++;
            }
        }
        return power2;
    }

    //Display in table
    var userInfo = [userMax,userMin,userMean,userMedian,
        userEven,userOdd,userPrime,userPowers];

    for (var i=0; i<userInfo.length; i++) {
        document.getElementById("theValue"+ i).innerHTML = userInfo[i];
    }
    for (var i=0; i<userNum.length; i++) {
        document.write( userNum[i] +" ");
    }

}