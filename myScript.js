let date = new Date();
let hh = date.getDate();
if (hh < 10) {
    hh = (`0${hh}`);
}

let mm = date.getMonth();
if (mm < 10) {
    mm = (`0${mm}`);
}
let ss = date.getFullYear();
let dateElement = document.getElementById("date");
dateElement.innerHTML += hh +":"+mm+":"+ss;








let q1 = document.getElementById("qt1");
let q2 = document.getElementById("qt2");
let q3 = document.getElementById("qt3");
let q4 = document.getElementById("qt4");
let q5 = document.getElementById("qt5");
let q6 = document.getElementById("qt6");
let q7 = document.getElementById("qt7");
let q8 = document.getElementById("qt8");
let q9 = document.getElementById("qt9");
let q10 = document.getElementById("qt10");

let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");
let r5 = document.getElementById("r5");
let r6 = document.getElementById("r6");
let r7 = document.getElementById("r7");
let r8 = document.getElementById("r8");
let r9 = document.getElementById("r9");
let r10 = document.getElementById("r10");
    
let am1 = document.getElementById("amt1");
let am2 = document.getElementById("amt2");
let am3 = document.getElementById("amt3");
let am4 = document.getElementById("amt4");
let am5 = document.getElementById("amt5");
let am6 = document.getElementById("amt6");
let am7 = document.getElementById("amt7");
let am8 = document.getElementById("amt8");
let am9 = document.getElementById("amt9");
let am10 = document.getElementById("amt10");

let gt = document.getElementById("gt2");




function clear() {
    document.getElementById("cName").value = '';
    document.getElementById("address").value = '';
    
    q1.value = '';
    q2.value = '';
    q3.value = '';
    q4.value = '';
    q5.value = '';
    q6.value = '';
    q7.value = '';
    q8.value = '';
    q9.value = '';
    q10.value = '';
    
    r1.value = '';
    r2.value = '';
    r3.value = '';
    r4.value = '';
    r5.value = '';
    r6.value = '';
    r7.value = '';
    r8.value = '';
    r9.value = '';
    r10.value = '';

    gt.value = '';

    am1.value = ''
    am2.value = ''
    am3.value = ''
    am4.value = ''
    am5.value = ''
    am6.value = ''
    am7.value = ''
    am8.value = ''
    am9.value = ''
    am10.value = ''
}

function sum() {
    let qt1 = Number(q1.value)
    let qt2 = Number(q2.value)
    let qt3 = Number(q3.value)
    let qt4 = Number(q4.value)
    let qt5 = Number(q5.value)
    let qt6 = Number(q6.value)
    let qt7 = Number(q7.value)
    let qt8 = Number(q8.value)
    let qt9 = Number(q9.value)
    let qt10 = Number(q10.value)

    let rt1 = Number(r1.value)
    let rt2 = Number(r2.value)
    let rt3 = Number(r3.value)
    let rt4 = Number(r4.value)
    let rt5 = Number(r5.value)
    let rt6 = Number(r6.value)
    let rt7 = Number(r7.value)
    let rt8 = Number(r8.value)
    let rt9 = Number(r9.value)
    let rt10 = Number(r10.value)



    am1.value = qt1*rt1; 
    am2.value = qt2*rt2;
    am3.value = qt3*rt3;
    am4.value = qt4*rt4;
    am5.value = qt5*rt5;
    am6.value = qt6*rt6;
    am7.value = qt7*rt7;
    am8.value = qt8*rt8;
    am9.value = qt9*rt9;
    am10.value = qt10*rt10;

    gt.value = +am1.value+ +am2.value+ +am3.value+ +am4.value+ +am5.value+ +am6.value+ +am8.value+ +am9.value+ +am10.value;
}

let n = document.getElementById("cName");
function calc() {
    alert(`Hello! dear Sir/Ma'm ${n.value} Your Grand Total is ${gt.value}`);
    clear();
}