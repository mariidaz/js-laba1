function findmaxSum() {
    const input = document.getElementById("numbersinput").value;
    const numbers = input.split(" ").map(num => parseInt(num.trim())); 
    
    if (!numbers.length) {
        document.getElementById("output").textContent = "Введіть натуральні числа";
        return;
    }
    
    let maxNum = numbers[0];
    let maxSum = getDigitSum(maxNum);
    
    for (let num of numbers) {
        let sum = getDigitSum(num);
        if (sum > maxSum) {
            maxSum = sum;
            maxNum = num;
        }
    }
    
    document.getElementById("output").textContent = `Число з найбільшою сумою цифр: ${maxNum}, сума цифр: ${maxSum}`;
}

function getDigitSum(num) {
    return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
