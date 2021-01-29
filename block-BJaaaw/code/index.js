// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Enter a number"));
if (num % 2 == 0) {
  alert("Number is Even");
} else {
  alert("Number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
if (firstNumber > secondNumber) {
  alert("First Number is greater");
}
else {
  alert("Second Number is greater");
}
// 3. Convert the above code using`?` terniary operator
let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let greaterNumber = (firstNumber > secondNumber) ? firstNumber : secondNumber;
alert(`The greater number is ${greaterNumber}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Enter your house name");
if (houseName === "Stark") {
  alert("Winter is coming");
} else if (houseName === "lannister") {
  alert("A lannister always pays his debts");
}
else {
  alert("All men must die");
}

// 5. Convert the above code using`?` ternary operator
let houseName = prompt("Enter your house name");
(houseName === "Stark") ? alert("Winter is coming") : ((houseName === "lannister") ? alert("A lannister always pays his debts") : alert("All men must die"));

// Switch
let houseName = prompt("Enter your house name");
switch (houseName) {
  case "Stark":
    alert("Winter is coming"); break;
  case "lannister":
    alert("A lannister always pays his debts"); break;
  default:
    alert("All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = prompt("Enter the digit value of month");
switch (monthNumber) {
  case "1":
    alert(`The number of days in this month is 31`); break;
  case "2":
    alert(`The number of days in this month is 28`); break;
  case "3":
    alert(`The number of days in this month is 31`); break;
  case "4":
    alert(`The number of days in this month is 30`); break;
  case "5":
    alert(`The number of days in this month is 31`); break;
  case "6":
    alert(`The number of days in this month is 30`); break;
  case "7":
    alert(`The number of days in this month is 31`); break;
  case "8":
    alert(`The number of days in this month is 31`); break;
  case "9":
    alert(`The number of days in this month is 30`); break;
  case "10":
    alert(`The number of days in this month is 31`); break;
  case "11":
    alert(`The number of days in this month is 30`); break;
  default:
    alert(`The number of days in this month is 31`);

}

/* 7.
- Write a program that take the salary of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 40000` tax is 30 %

*/
let salary = Number(prompt("Enter your Salary"));
if (salary <= 20000) {
  alert(`Your in hand amount is ${(salary) - (salary) * 0.1}`);
}
else if (salary <= 40000) {
  alert(`Your in hand amount is ${(salary) - (salary) * 0.2}`);
} else {
  alert(`Your in hand amount is ${(salary) - (salary) * 0.3}`);
}

//  if..else vs switch
let salary = Number(prompt("Enter your Salary"));

switch (true) {
  case (salary <= 20000): alert(`Your in hand amount is ${(salary) - (salary) * 0.1}`); break;
  case (salary <= 40000): alert(`Your in hand amount is ${(salary) - (salary) * 0.2}`); break;
  default: alert(`Your in hand amount is ${(salary) - (salary) * 0.3}`);
}
/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter marks"));

if (marks >= 0 && marks <= 30) {
  alert("Grade D");
}
else if (marks > 30 && marks <= 50) {
  alert("Grade C");
} else if (marks > 50 && marks <= 80) {
  alert("Grade B");
} else if (marks > 80 && marks <= 100) {
  alert("Grade A");
} else {
  alert("Marks cannot be greater than 100");
}

switch (true) {
  case (marks >= 0 && marks <= 30): alert("Grade D"); break;
  case (marks > 30 && marks <= 50): alert("Grade C"); break;
  case (marks > 50 && marks <= 80): alert("Grade B"); break;
  case (marks > 80 && marks <= 100): alert("Grade A"); break;
  default: alert("Marks cannot be greater than 100");
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weatherOutside = prompt("`What is the weather like outside?");

if (weatherOutside == "sunny") {
  alert("Wear a T-shirt");
} else if (weatherOutside == "rainy") { alert("Don't forget to take your raincoat"); }
else if (weatherOutside == "hot") { alert("Get a hanky"); }
else if (weatherOutside == "freezing") { alert("Get your sweater on"); }
else { alert("Not a valid input"); }