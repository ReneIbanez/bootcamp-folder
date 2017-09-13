var total = 0;

document.getElementById('plus').onclick = plus;
document.getElementById('minus').onclick = minus;
document.getElementById('divide').onclick = divide;
document.getElementById('multiply').onclick = multiply;

function plus() {
 var a = document.getElementById('a').value;
   a = parseFloat(a);
 var b = document.getElementById('b').value;
   b = parseFloat(b);
 total = a + b;
 document.getElementById('result').innerHTML = total;
 document.getElementById('a').value = "";
 document.getElementById('b').value = "";
}
function minus() {
 var a = document.getElementById('a').value;
   a = parseFloat(a);
 var b = document.getElementById('b').value;
   b = parseFloat(b);
 total = a - b;
 document.getElementById('result').innerHTML = total;
 document.getElementById('a').value = "";
 document.getElementById('b').value = "";
}
function divide() {
 var a = document.getElementById('a').value;
   a = parseFloat(a);
 var b = document.getElementById('b').value;
   b = parseFloat(b);
 total = a / b;
 document.getElementById('result').innerHTML = total;
 document.getElementById('a').value = "";
 document.getElementById('b').value = "";
}
function multiply() {
 var a = document.getElementById('a').value;
   a = parseFloat(a);
 var b = document.getElementById('b').value;
   b = parseFloat(b);
 total = a * b;
 document.getElementById('result').innerHTML = total;
 document.getElementById('a').value = "";
 document.getElementById('b').value = "";
}
