# **WEEK 1 CODE CHALLENGE**
## **1. PROJECT DESCRIPTION**
The project is comprised of three challenges.
- Student Grade Generator
- Speed Detector 
- Net Salary Calculator

The first challenge prompts the user to input a student's marks.

The student marks should be between 0 and 100. The program then outputs the correct grade as follows: 

`` A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40. ``

The second challenge takes as input the speed of a car e.g 80. 

If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

*For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.*

The third challenge takes in the basic salary and benefits of an employee. Using the KRA, NHIF, and NSSF rates it calculates the Payee Tax, NHIF, NSSF Deductions and net salary.

The various rates are defined in this <a href="https://www.aren.co.ke/payroll/taxrates.htm" target="_blank"> Link</a>

After the program calculates the payee Tax, NHIF and NSSF deductions one can compare the output with the KRA online computation provided in this <a href="https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye" target="_blank">Links</a>



## 2. Project Requirements
- Visual Studio Code
- A modern Web Browser e.g. Brave, Mozilla Firefox, Google Chrome, Microsoft Edge, Vivaldi or Opera Mini.
- Javascript enabled on the browser.


### Project Setup
Clone the repository
````bash
git clone git@github.com:GuruMulinge/Week-1-Code-Challenge.git
````

### Opening the challenges in VSCode
````bash
cd Week-1-Code-Challenge
code .
````

#### **Challenge 1: Student Grade Generator** 
cd into the ``Student Grade Generator`` directory.
````bash
cd Student\ Grade\ Generator
````

Run the index.html in your prefered browser. 
````bash
xdg-open index.html 
````
xdg-open will use your default set browser to launch index.html

For Windows and Mac, navigate  to the directory where you cloned the project. 

Open the Student Grade Generator challenge directory. Double click index.html to run the program in the browser. 

Enter the students marks in the prompt that appears. 

The program will calculate the grade and give and alert containing the student grade. 

### **Challenge 2 : Speed Detector**
cd into the direcotry `` Speed Detector  ``
````bash
cd Speed\ Detector
````

Run the index.html in your prefered browser. 
````bash
xdg-open index.html 
````
xdg-open will use your default set browser to launch index.html

For Windows and Mac, navigate  to the directory where you cloned the project. 

Open the Speed detector challenge directory. Double click index.html to run the program in the browser. 

The program will prompt the user to key in the speed if the vehecle. If ther speed of the vehicel is below 70, it will output ``OK``, If the driver more than 12 demerit points, the program will output ``License Suspended``


#### **Challenge 3 : Net Salary Calculator**
cd into the direcotry `` Net Salary Calculator  ``
````bash
cd Net\ Salary\ Calculator/
````

Run the index.html in your prefered browser. 
````bash
xdg-open index.html 
````
xdg-open will use your default set browser to launch index.html

For Windows and Mac, navigate  to the directory where you cloned the project. 

Open the Net Salary Calculator challenge direcory. Double click index.html file to run the program. 

The program will prompt the user to key in the Basic salary and benefits of an employee. 

The program will then proceed to calculate Payee Tax, NHIF and NSSF deductions and finally calculated the Net salary of the employee. 

The Payee rates are as outlined in the table below.  

<table border="0" cellpadding="5" cellspacing="0" class="data">
        <tbody>
        <tr>
          <th width="125">Monthly Taxable Pay (Ksh)</th>
          <th width="125">Annual Taxable Pay (Ksh)</th>
          <th width="80">Rate of Tax (%)</th>
        </tr>
        <tr>
          <td>Up to 24,000 </td>
          <td>Up to 288,000 </td>
          <td align="right">10</td>
        </tr>
        <tr>
          <td>24,001 - 32,333</td>
          <td>288,001 - 388,000 </td>
          <td align="right">25</td>
        </tr>
        <tr>
          <td>Above 32,333</td>
          <td>Above 388,000 </td>
          <td align="right">30</td>
        </tr>
      </tbody>
      </table>

The NHIF deductions are as tabled below.
<table cellpadding="5" cellspacing="0" class="data">
         <colgroup><col width="125">
         <col width="75">
         <col width="10">
         <col width="125">
         <col width="75">
         </colgroup><tbody><tr>
            <th>Gross Pay (Ksh)</th>
            <th>Deduction (Ksh)</th>
            <td>&nbsp;</td>
            <th>Gross Pay (Ksh)</th>
            <th>Deduction (Ksh)</th>
         </tr>
         <tr>
            <td>Up to  5,999</td>
            <td align="right">150</td>
            <td>&nbsp;</td>
            <td>40,000 - 44,999 </td>
            <td align="right">1,000</td>
         </tr>
         <tr>
            <td>6,000 - 7,999</td>
            <td align="right">300</td>
            <td>&nbsp;</td>
            <td>45,000 - 49,999 </td>
            <td align="right">1,100</td>
         </tr>
         <tr>
            <td>8,000 - 11,999</td>
            <td align="right">400</td>
            <td>&nbsp;</td>
            <td>50,000 - 59,999 </td>
            <td align="right">1,200</td>
         </tr>
         <tr>
            <td>12,000 - 14,999</td>
            <td align="right">500</td>
            <td>&nbsp;</td>
            <td>60,000 - 69,999 </td>
            <td align="right">1,300</td>
         </tr>
         <tr>
            <td>15,000 - 19,999</td>
            <td align="right">600</td>
            <td>&nbsp;</td>
            <td>70,000 - 79,999 </td>
            <td align="right">1,400</td>
         </tr>
         <tr>
            <td>20,000 - 24,999</td>
            <td align="right">750</td>
            <td>&nbsp;</td>
            <td>80,000 - 89,999 </td>
            <td align="right">1,500</td>
         </tr>
         <tr>
            <td>25,000 - 29,999</td>
            <td align="right">850</td>
            <td>&nbsp;</td>
            <td>90,000 - 99,999 </td>
            <td align="right">1,600</td>
         </tr>
         <tr>
            <td>30,000 - 34,999</td>
            <td align="right">900</td>
            <td>&nbsp;</td>
            <td> 100,000 and above </td>
            <td align="right">1,700</td>
         </tr>
         <tr>
            <td>35,000 - 39,999 </td>
            <td align="right">950</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
         </tr>
      </tbody></table>

The NSSF deductions are as tabled below.
<table cellpadding="5" cellspacing="0" class="data">
         <tbody><tr>
            <th>Tier</th>
            <th>Pensionable Pay </th>
         </tr>
         <tr>
            <td>I </td>
            <td>Up to  6,000 </td>
         </tr>
         <tr>
            <td> II </td>
            <td>6,001 - 18,000 </td>
         </tr>
      </tbody>
      
</table>


## 3. Author
The project is authored by <a href="https://github.com/GuruMulinge/" target="_blank">Anthony Mulinge</a>

Anthony is a Software Engineering Student at <a href="https://moringaschool.com/" target="_blank">The Moringa School</a>. He is currently studying Full Stack Engineering Course.

## 4. License
The project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>.






