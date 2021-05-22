function calculation(){
    let bill = document.getElementById("bill").value;
    let peopleValue = document.getElementById("number").value;
    let amount = bill/peopleValue;
    let user = document.getElementById("user");
    let display = document.getElementById("amount-view");
    let fifteen = document.getElementById("fifteen");
    let twenty = document.getElementById("twenty");
    let twentyFive = document.getElementById("twentyFive");


    user.style.display="none";
                    
    document.getElementById("display").style.display="block";
    
    display.innerHTML = "$" + ((amount*100)/100).toFixed(2);

    fifteen.innerHTML = ("15%: $"+(amount*.15).toFixed(2));
    twenty.innerHTML = ("20%: $"+(amount*.20).toFixed(2));
    twentyFive.innerHTML = ("25%: $"+(amount*.25).toFixed(2));
    twentyFive.innerHTML = ("25%: $"+(amount*.25).toFixed(2));
}

window.onload = function(){
    let people_Input = document.getElementById("number");
    
        people_Input.addEventListener("keyup",function(e){
            if(e.keyCode===13){
                e.preventDefault();
                calculation();
            }
        });
}


