function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementById("display").value += symbol;
}

function calculateResult() {
    try {
        let display = document.getElementById("display").value;
        document.getElementById("display").value = eval(display);
    } catch {
        document.getElementById("display").value = "Error";
    }
}
