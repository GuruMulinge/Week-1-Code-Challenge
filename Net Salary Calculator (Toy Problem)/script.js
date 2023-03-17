// Prompt user for input
let basicSalary = parseFloat(prompt("Enter basic salary: "));
let benefits = parseFloat(prompt("Enter benefits: "));

let grossPay = (basicSalary + benefits);

// Calculate nhifDeductions and net salary
let payeeTax = 0;
let nhifDeduction = 0;
let nssfDeduction = 0;


if (grossPay <= 24000) {
  payeeTax = grossPay * 0.1;
} else if (grossPay >= 24001  && grossPay <=32333) {
  payeeTax = grossPay * 0.25;
} else if (grossPay >= 32333) {
  payeeTax = grossPay * 0.3;
}

if (grossPay <= 5999) {
  nhifDeduction = 150;
} else if (grossPay >= 6000 && grossPay <= 7999) {
  nhifDeduction = 300;
} else if (grossPay >= 8000 && grossPay <= 11999) {
  nhifDeduction = 400;
} else if (grossPay >= 12000 && grossPay <= 14999) {
  nhifDeduction = 500;
} else if (grossPay >= 15000 && grossPay <= 19999) {
  nhifDeduction = 600;
} else if (grossPay >= 20000 && grossPay <= 24999) {
  nhifDeduction = 750;
} else if (grossPay >= 25000 && grossPay <= 29999) {
  nhifDeduction = 850;
} else if (grossPay >= 30000 && grossPay <= 34999) {
  nhifDeduction = 900;
} else if (grossPay >= 35000 && grossPay <= 39999) {
  nhifDeduction = 950;
} else if (grossPay >= 40000 && grossPay <= 44999) {
  nhifDeduction = 1000;
} else if (grossPay >= 45000 && grossPay <= 49999) {
  nhifDeduction = 1100;
} else if (grossPay >= 50000 && grossPay <= 59999) {
  nhifDeduction = 1200;
} else if (grossPay >= 60000 && grossPay <= 69999) {
  nhifDeduction = 1300;
} else if (grossPay >= 70000 && grossPay <= 79999) {
  nhifDeduction = 1400;
} else if (grossPay >= 80000 && grossPay <= 89999) {
  nhifDeduction = 1500;
} else if (grossPay >= 90000 && grossPay <= 99999) {
  nhifDeduction = 1600;
} else if (grossPay >= 100000) {
  nhifDeduction = 1700;
}



nssfDeduction = 0.06 * 18000;

let netSalary = grossPay - payeeTax - nhifDeduction - nssfDeduction;

// Output results
console.log("Payee Tax: " + payeeTax);
console.log("NHIF nhifDeduction: " + nhifDeduction);
console.log("NSSF nhifDeduction: " + nssfDeduction);
console.log("Net Salary: " + netSalary);

alert("Payee Tax: " + payeeTax);
alert("NHIF nhifDeduction: " + nhifDeduction);
alert("NSSF nhifDeduction: " + nssfDeduction);
alert("Net Salary: " + netSalary);
