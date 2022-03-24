document.getElementById("valueinput").addEventListener("input",(e)=>{
    let meterValue = e.target.value;

document.getElementById("inches").innerHTML = meterValue * 39.3701; 

document.getElementById("feet").innerHTML = meterValue * 3.2808;

document.getElementById("cm").innerHTML = meterValue * 100.000;

document.getElementById("yard").innerHTML = meterValue * 1.0936;
    
});



