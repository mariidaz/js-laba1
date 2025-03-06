const ones = ["", "один", "два", "три", "чотири", "п’ять", "шість", "сім", "вісім", "дев’ять"];
const teens = ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п’ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев’ятнадцять"];
const tens = ["", "", "двадцять", "тридцять", "сорок", "п’ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев’яносто"];
const hundreds = ["", "сто", "двісті", "триста", "чотириста", "п’ятсот", "шістсот", "сімсот", "вісімсот", "дев’ятсот"];

function numberToWords(num) {
    if (num === "0") return "нуль";

    let result = "";

    if (num >= 100) {
        result += hundreds[Math.floor(num / 100)] + " ";
        num %= 100;
    }

    if (num >= 10 && num < 20) {
        result += teens[num - 10];
    } else {
        result += tens[Math.floor(num / 10)] + " ";
        result += ones[num % 10];
    }

    return result.trim();
}

function convertNumber() {
    let input = document.getElementById("number").value.trim();
    let resultEl = document.getElementById("result");

    if (!input.match(/^\d+(\.\d{1,2})?$/)) {
        resultElement.textContent = "введіть невід'ємне число ";
        return;
    }

    let parts = input.split(".");
    let integer = parseInt(parts[0]);
    let decimal = parts[1] ? parts[1] : null;

    let text = numberToWords(integer);
    
    if (decimal) {
        text += " цілих " + numberToWords(parseInt(decimal)) + " сотих";
    }

    resultEl.textContent = text;
}
