const display = document.getElementById("display");

function appendInput(input){
    console.log("inputted "+input);
    display.value += input;
}

function clearEntry(){
    display.value = display.value.slice(0,-1);
}

function allClear(){
    console.log("clear");
    display.value="";
}
function calculate(){
    if (display.value === "Err" || display.value ==="") {
        allClear();
    } else {
        try {
            display.value = display.value.replace("×","*").replace("÷","/").replace("%","/100");
            console.log(display.value);
            console.log("Evaluated");
            display.value = eval(display.value);
        } catch (error) {
            console.log("Error");
            display.value = "Err";
        }
    }
}