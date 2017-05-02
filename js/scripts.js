output_num = [];





$(document).ready(function(){
  $("form#count_number").submit(function(event){
    // debugger;
    var num_1 = $("input#number_1").val();
    var num_2 = $("input#number_2").val();
    
    //alert users if they don't enter numbers
    if ( !isNaN(num_1) === false || !isNaN(num_2) === false) {
      alert ("please enter numbers.")
    }

    //check if number 1 and number 2 are numbers
    else if (!isNaN(num_1) === true || !isNaN(num_2) === true) {
      // if number 1 and number 2 are empty strings then alert users
      if (num_1 === "" || num_2 === "") {
        alert("please enter numbers in the form")
      }
      else if (!isNaN(num_1) === true && !isNaN(num_2) === true){
        num_1 = parseFloat(num_1);
        num_2 = parseFloat(num_2);
        if (num_2 > num_1) {
          alert("Number 1 has to be greater than number 2.")
        }
        //if everything checks out, number 1 > number 2
        else{
          for(i = 1; i <= (num_1/num_2); i++){
            output_num.push(num_2*i);
          }
        }
      }
    }
    //Count number if number 1 is greater than number 2

    $("#output").text(output_num);
    event.preventDefault();
  });
});
