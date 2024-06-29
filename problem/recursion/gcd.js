

function gcd(num1, num2) {
    if (num1 === num2) {
        return num1;
    }

    if (num2 > num1) {
        return gcd(num2 - num1, num1);
    } else {
        return gcd(num1 - num2, num2);
    }
}
