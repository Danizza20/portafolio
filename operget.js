function suma(){
    var result;
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    result=parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML=result;
}
function resta(){
    var result;
    var rest1=document.getElementById("numero1").value;
    var rest2=document.getElementById("numero2").value;
    result=parseInt(rest1)-parseInt(rest2);
    document.getElementById("result").innerHTML=result;
}
function multiplicacion(){
    var result;
    var multi1=document.getElementById("numero1").value;
    var multi2=document.getElementById("numero2").value;
    result=parseInt(multi1)*parseInt(multi2);
    document.getElementById("result").innerHTML=result;
}
function division(){
    var result;
    var div1=document.getElementById("numero1").value;
    var div2=document.getElementById("numero2").value;
    result=parseInt(div1)/parseInt(div2);
    document.getElementById("result").innerHTML=result;
}


