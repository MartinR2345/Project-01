// Create a variable, give it a name called "add" and grab the div element named "increment" from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
let add = document.getElementById('increment');

// Create a variable, give it a name called "decrease" and grab the div element named "decrement" from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
let decrease = document.getElementById('decrement');

// Create a variable, give it a name called "int" and grab the div element named "number" from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
let int = document.getElementById('number');

// Create a variable, give it a name called "counter" and set it to 0.  This will be used as a default reference.
let counter = 0;

// This event handler (addEventListener) is to target my variable "add" and monitor events such as when someone clicks on let's say the plus sign (+), it will increase the value by 1.
// Also I use the variable (int) and assigned it to the innerHTML property so it can modify the content of my HTML element.  This will also be equal to my default reference (counter) as a link.
add.addEventListener('click', function(){
    counter += 1;
    int.innerHTML = counter;
})


// This event handler (addEventListener) is to target my variable "decrease" and monitor events such as when someone clicks on let's say the minus sign (-), it will decrease the value by 1.
// Also I use the variable (int) and assigned it to the innerHTML property so it can modify the content of my HTML element.  This will also be equal to my default reference (counter) as a link.
decrease.addEventListener('click', function(){
    counter -= 1;
    int.innerHTML = counter;
})