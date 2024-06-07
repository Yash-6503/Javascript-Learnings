//String Operations

function handleSubmit(event) {

    confirm("Form submitted succesfully...");

    event.preventDefault();

    //Getting string value from input box
    let string = document.getElementById("str").value;

    //getting the value of radio buttons
    let operations = document.querySelector('input[name="opr"]:checked').value;

    //checking if the value of radio button matches then performing operations
    if (operations == 'length') {
        const str1 = string.length;
        document.getElementById("message").innerText = `The Length of ${string} is ${str1}`;
    }

    if (operations == 'ucase') {
        const str2 = string.toUpperCase();
        document.getElementById("message").innerText = `Uppercase of ${string} is ${str2}`;
    }

    if (operations == 'lcase') {
        const str3 = string.toLowerCase();
        document.getElementById("message").innerText = `Lowercase of ${string} is ${str3}`;
    }

    if (operations == 'rev') {
        const str4 = string.split('').reverse().join('');
        console.log(str4);
        document.getElementById("message").innerText = `Reverse of ${string} is ${str4}`;
    }

    if (operations == 'trim') {
        console.log(string);
        const str5 = string.trim();
        console.log(str5);
        document.getElementById("message").innerText = `After Removing spaces = ${str5}`;
    }

}