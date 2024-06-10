//Menu-driven program to perform mathematical alert-box operations
alert("Menu-driven program to perform mathematical alert-box operations.");
do {
    let choice = parseInt(prompt("\nAlert-Box Operations\n1.Addition\n2.Substract\n3.Multiply\n4.Divide\n5.Exit\nEnter your choice: "));

    switch (choice) {
        case 1:
            addition();     //addition function call
            break;

        case 2:
            substract();     //substraction function call
            break;

        case 3:
            multiply();         //multiplication function call
            break;

        case 4:
            divide();           //division function call
            break;

        case 5:
            exit(0);
            break;

        default:
            alert("Invalid Choice...");
            break;
    }

} while (choice != 5);

//addition function defination
function addition() {
    let num1 = parseInt(prompt("Enter First Number: "));
    let num2 = parseInt(prompt("Enter Second Number: "));

    let sum = num1 + num2;
    alert(`Addition of ${num1} and ${num2} is ${sum}`);
}

//substraction function defination
function substract() {
    let num1 = parseInt(prompt("Enter First Number: "));
    let num2 = parseInt(prompt("Enter Second Number: "));

    let sum = num1 - num2;
    alert(`Substraction of ${num1} and ${num2} is ${sum}`);
}

//multiplication function defination
function multiply() {
    let num1 = parseInt(prompt("Enter First Number: "));
    let num2 = parseInt(prompt("Enter Second Number: "));

    let sum = num1 * num2;
    alert(`Multiplication of ${num1} and ${num2} is ${sum}`);
}

//division function defination
function divide() {
    let num1 = parseInt(prompt("Enter First Number: "));
    let num2 = parseInt(prompt("Enter Second Number: "));

    let sum = num1 / num2;
    alert(`Division of ${num1} and ${num2} is ${sum}`);
}

