var a1 = document.getElementById('input1');
var a2 = document.getElementById('input2');
var precision = document.getElementById('dec-places');
var final = document.getElementById('final-result');

var form = document.getElementById('input-form');

form.addEventListener('submit', function (event) {
    /*alert('We clicked calculate!');*/
    if (!a1.value || !a2.value) {
        alert('Please enter the values');
    }
    else {
        var x = parseFloat(a1.value);
        var y = parseFloat(a2.value);
        var z = x + y;
        var p = parseFloat(precision.value);

        var A = x / y;
        var B = z / x;

        var phi = 1.6180339887498;

        if (phi.toPrecision(p) == A.toPrecision(p) && phi.toPrecision(p) == B.toPrecision(p)) {
            final.innerText = " Result \n"+ "\n A / B = (A + B) / A = 1.6180339887498.........\n" + "\n A / B  = "+ A.toPrecision(p)+"\n"+"\n(A + B) / A = "+ B.toPrecision(p)+"\n"+"\nHurray! It forms Golden Ratio..." 
            event.preventDefault();

        } else {
            final.innerText = " Result \n"+ "\n A / B = (A + B) / A = 1.6180339887498.........\n" + "\n A / B  = "+ A.toPrecision(p)+"\n"+"\n(A + B) / A = "+ B.toPrecision(p)+"\n"+"\nSorry! It doesn't form Golden Ratio..." 
            event.preventDefault();
            
        }
            
        
    }
});
