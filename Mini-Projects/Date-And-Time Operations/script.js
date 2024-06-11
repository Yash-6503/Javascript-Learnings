//To print the current date and time in the web page

let date = new Date();
let day = date.getDate();

window.onload = function () {

    document.getElementById("date").innerHTML = `Today is ${date.toLocaleDateString('default', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'

    })}`;

    //print the currrnt time every second only time not its IST time zone information
    setInterval(() => {
        let date = new Date();
        document.getElementById("time").innerHTML = `Time is ${date.toLocaleTimeString('default', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            type: 'time',

        })}`;
    }, 1000);
}