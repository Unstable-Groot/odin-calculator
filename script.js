const buttons = document.querySelectorAll(".btn-container button");
const formula = document.querySelector("#formula");
const solution = document.querySelector("#solution");

buttons.forEach((element) => {
    element.addEventListener("click", () => buttonClick(element));
});

function buttonClick(element) {

    switch (element.textContent) {
        case "Enter":
            enter();
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            //Add to running count
            solution.textContent = solution.textContent + element.textContent;
            break;
        case ".":
            if (!solution.textContent.includes("."))
                solution.textContent = solution.textContent + element.textContent;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            operators(element.textContent);
            break;
        case "Cc":
            clear();
            break;
        default:
            console.error("buttonClick() switch got to default case");
            break;

    }

    return;
}

function operators(symbol) {
    if (solution.textContent == "") {
        const num = parseFloat(formula.textContent);
        formula.textContent = num + "" + symbol;
        return;
    }

    if (formula.textContent == "") {
        formula.textContent = solution.textContent + "" + symbol;
    }
    else {
        const result = calculate(symbol);
        formula.textContent = result + "" + symbol;
    }
    
    solution.textContent = "";
}

function enter() {
    const text = formula.textContent;
    const symbol = text.substring(text.length - 1);

    console.log(text);
    if (text == "") return;
    const result = calculate(symbol);

    formula.textContent = "";
    solution.textContent = result;

}

function calculate(symbol) {
    const num1 = parseFloat(formula.textContent);
    const num2 = parseFloat(solution.textContent)

    switch (symbol){
        case "+":
            console.log(num1+num2)
            return (num1 + num2) + "";
        case "-":
            return (num1 - num2) + "";
        case "*":
            return (num1 * num2) + "";
        case "/":
            return (num1/ num2) + "";
        default:
            console.error("calculate() switch got to default case");
            break;
    }
}

function clear() {
    solution.textContent = "";
    formula.textContent = "";
    return;
}



