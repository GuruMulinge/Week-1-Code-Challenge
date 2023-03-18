// Prompt user for input
let speed = parseInt(prompt("Enter car speed: "));

// Check speed and output points

// Check if the speed is less than 70. If the speed is less than 70, output 0 points
if (speed <= 70) {
  console.log("Points: 0");
  alert("Points: 0");
} 

else {
  // We use the Math.floor function to round down and returns the largest integer less than or equal 70
  //We assign the results to a variable called points
  let points = Math.floor((speed - 70) / 5);

  // If the points are more than 12, we output License suspended
  if (points > 12) {
    console.log("License suspended");
    alert("License suspended");
  } 
  // If the points are not more than 12, we output the demerits points.
  else {
    console.log(`Points: ${points}`);
    alert(`Points: ${points}`);
  }
}
