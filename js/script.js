// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<4 || num>20 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 4 and 20.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Largest Product is ${largestProductinaSeries(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}