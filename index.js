
var resultBox = document.
getElementById("resultBox");

function inputValue(value) {
     resultBox.value += value;
}

function result() {
     let result = eval(resultBox.value);

     resultBox.value = result;
}

function del() {
     resultBox.value = ""
}

function rad() {
     
     let result = resultBox.value * Math.PI / 180;

     resultBox.value = result
}

function factorial() {
     
     let result = 1;

     for (let i=1; i<=resultBox.value;i++) {
          result *= i;
     }
     
     resultBox.value = result;

}

function percent() {
     let result = resultBox.value / 100;

     resultBox.value = result;
}

function tan() {
     let result = Math.tan(resultBox.value);

     resultBox.value = result;
}

function sin() {
     let result = Math.sin(resultBox.value);

     resultBox.value = result;
}

function log() {
     let result = Math.log(resultBox.value);

     resultBox.value = result;
}

function cos() {
     let result = Math.cos(resultBox.value);

     resultBox.value = result;
}