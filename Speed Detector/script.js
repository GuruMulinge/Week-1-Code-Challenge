// Prompt user for input
let speed = parseInt(prompt("Enter car speed: "));

// Check speed and output points
if (speed <= 70) {
  console.log("Points: 0");
  alert("Points: 0");
} else {
  let points = Math.floor((speed - 70) / 5);
  if (points > 12) {
    console.log("License suspended");
    alert("License suspended");
  } else {
    console.log(`Points: ${points}`);
    alert(`Points: ${points}`);
  }
}
