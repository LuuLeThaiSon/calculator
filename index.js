
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
     debugger
     let result = 1;

     for (let i=1 ; i < resultBox.value; i++) {
          result = result * i;
          return;
     }

     resultBox.value = result;

}