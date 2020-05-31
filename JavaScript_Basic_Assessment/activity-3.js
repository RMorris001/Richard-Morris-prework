/**Start off by creating an array with three student names.
Create a loop that will prompt the user for three more names.
After every user input, store the new name into the array.
Create a new loop that will iterate through the array and console log each element of the array. */

let array = ["Richard","Mike", "Sally"];

for (let i = 0; i < 3; i++) {
    var input = prompt("Enter a name");
    array.push(input);
  }

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }  
