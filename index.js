let result = "";

function appendValue(value) {
    result += value;
    document.getElementById('inp').value = result;
}

function calculate() {
    try {
        result = eval(result); 
        document.getElementById('inp').value = result;
        result = ""; 
    } catch (e) {
        document.getElementById('inp').value = "Error";
        result = "";
    }
}
