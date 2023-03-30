let date = 2050;
let status = "parent";       //remove the const variable then add the let variable, then add the semicolons
let count = 0;

if (date = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4

	if (status == "student") {
	  console.log('June', 'Youth Day') //add another equal to sign
	count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')  //remove let variables for the 5 console categories.
	count = count + 3

	if (status  == "parent") {
	  console.log(date, 'Christmas Day')
	count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)