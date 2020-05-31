/**Grab a user input using a prompt() and store it in a variable.
Add a conditional statement where if the variable's length is greater than 4, we alert the user that their name is greater than four characters.
Otherwise, alert that their name is less than four characters. */

var input = prompt("Enter something useful");

if(input.length > 4){
    alert("input is greater than four.");
}
else{
    alert("input is less than four");
}