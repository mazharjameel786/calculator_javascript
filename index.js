//global variables
var arr = new Array();
var element = " ";
var element2 = " ";

//value displyed on input field before calculation
function disVal(value) {
   
    let result = document.getElementById('btn'+value).value;
   
     document.getElementById('input').value = result;
   
    arr.push(result);
    console.log(arr);
   
}

function calculate() {
    let plus = false;
    let minus = false;
    let multiply = false;
    let divide = false;
    let modulus = false;

    function checkOperator(arr) {
        if (arr == '+') {
            plus = true;
            return arr == '+';

        } else if (arr == '-') {
            minus = true;
            return arr == '-';

        } else if (arr == '*') {
            multiply = true;
            return arr == '*';
        }
        else if (arr == '/') {
            divide = true;
            return arr == '/';

        } else if (arr == '%') {

            modulus = true;
            return arr == '%';
           
        } else {
            return undefined;
        }
    }
   
    index = arr.findIndex(checkOperator);
   
    for (let i = 0; i < index; i++) {
        console.log("loop increement:",i);
        console.log("this is index:", index);
        element += arr[i]
        console.log(element);
       
    }
    console.log("element", document.getElementById('input').value = element);

    for (let j = index + 1; j < arr.length; j++) {
        console.log("ele2:",element2 += arr[j]);
    }
    if (plus == true) {
        document.getElementById("input").value = parseFloat(element) + parseFloat(element2);
    } else if (minus == true) {
        document.getElementById("input").value = parseInt(element) - parseInt(element2);

    } else if (multiply == true) {
        document.getElementById("input").value = parseInt(element) * parseInt(element2);

    } else if (divide == true) {
        document.getElementById("input").value = parseInt(element) / parseInt(element2);

    } else if (modulus == true) {
        document.getElementById("input").value = parseFloat(element) % parseFloat(element2);
    }



}


function on() {

    document.getElementById("input").disabled = false;
    document.getElementById("input").value = 0;
    arr = [];
    element = " ";
    element2 = " ";
}
function off() {

    document.getElementById("input").disabled = true;
    document.getElementById("input").value = "";
}

function clearit(){
    document.getElementById("input").disabled = false;
    document.getElementById("input").value = 0;
    arr = [];
    element = " ";
    element2 = " ";
}
