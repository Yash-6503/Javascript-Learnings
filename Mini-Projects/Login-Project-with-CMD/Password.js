//Password example taking input from user with cmd.

// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for to set a username
rl.question('\nSet a Username: ', (user) => {

    // Prompt the user for to set a password
    rl.question('Set a Password: ', (pass) => {
        console.log(`\nYou have set password succesfully..`);
        console.log("Login now!!!");


        // Prompt the user for a password to Login
        rl.question('\nEnter password to Login: ', (confirmPass) => {
            if (pass === confirmPass) {
                console.log(`\nWelcome Back ${user}.`);
            } else {
                console.log(`\nInvalid Password ${confirmPass}.`);
            }

            //Close the readLine Interface
            rl.close();
        })
    });

});