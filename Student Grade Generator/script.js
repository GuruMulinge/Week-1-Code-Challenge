// Prompt user for input
let mark = parseInt(prompt("Enter student mark: "));

// Check mark range and output grade
if (mark >= 80) {
    alert("Grade: A");
    console.log("Grade: A");
} else if (mark >= 60) {
    alert("Grade: B");
    console.log("Grade: B");
} else if (mark >= 50) {
    alert("Grade: C");
    console.log("Grade: C");
} else if (mark >= 40) {
    alert("Grade: D");
    console.log("Grade: D");
} else {
    alert("Grade: E");
    console.log("Grade: E");
}
