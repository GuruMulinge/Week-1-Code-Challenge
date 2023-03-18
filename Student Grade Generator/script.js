// Prompt user for input
let mark = parseInt(prompt("Enter student mark: "));

// Check mark range and output grade
//If the marks are above or equal to 80, output A
if (mark >= 80) {
    alert("Grade: A");
    console.log("Grade: A");
}
//If the marks are above or equal to 0, output B    
else if (mark >= 60) {
    alert("Grade: B");
    console.log("Grade: B");
}
//If the marks are above or equal to 50, output C    
else if (mark >= 50) {
    alert("Grade: C");
    console.log("Grade: C");
}
//If the marks are above or equal to 40, output D 
else if (mark >= 40) {
    alert("Grade: D");
    console.log("Grade: D");
}
//If the marks are below 40 output E
 else {
    alert("Grade: E");
    console.log("Grade: E");
}
