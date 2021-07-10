function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    	{
    		alert("enter a positive number");
    		document.getElementById("principal").focus();
    		return;
    	}


    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);


    document.getElementById("result").innerHTML = "if you deposite " + "<span class='highlight'> " + principal + "</span>" + ", <br> at an interest rate of " + "<span class='highlight'>" + rate +" </span>%" + ",<br> you will recive the amount of " + "<span class='highlight'>" + interest + "</span>" + ",<br> in the year " + "<span class='highlight'>" + yearNow + "</span>";



    
}
        
function updateRate(){
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value; 

    rateval.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
              
            
        