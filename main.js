var resultField = $("#result");

function insertNumber(number){
    
    var existingNumber = $("#result").val();
    
    $("#result").val(existingNumber + number)
}


function clearResult(){
    $("#result").val('');
}

function calculate(){
    var result = eval($("#result").val());
    
    $("#result").val(result);
}


function deleteNumber(){
    var presentValue = $("#result").val();
    if(presentValue != ''){
        resultField.val(presentValue.slice(0,-1));
    }else{
        alert("Enter Number")
    }
}












