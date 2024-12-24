import { capitalize, reverseString } from './src/string-utils';
import { Finance } from './src/finance';
import { UserManagement } from './src/user-management';
import { generateFibonacci, generatePrimeNumbers } from './src/sequence-utils';


// Task 1
const exampleString = "hello world";
console.log("Original String:", exampleString);
console.log("Capitalized:", capitalize(exampleString));
console.log("Reversed:", reverseString(exampleString));


// Task 2
const loanPrincipal = 100000;
const interestRate = 5;
const loanTerm = 15;

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(loanPrincipal, interestRate, loanTerm);
console.log("Monthly Loan Payment:", monthlyPayment.toFixed(2));

const annualIncome = 60000;
const taxRate = 20;
const taxAmount = Finance.TaxCalculator.calculateTax(annualIncome, taxRate);
console.log("Tax Amount:", taxAmount.toFixed(2));


// Task 3
const admin = new UserManagement.Admin.AdminUser("John Doe", "john.doe@example.com", true);
admin.displayInfo();
admin.changeAdminRights(false);
console.log("After changing rights:");
admin.displayInfo();


// Task 4
const fibNumbers = generateFibonacci(10);
console.log("Fibonacci Sequence:", fibNumbers);

const primeNumbers = generatePrimeNumbers(30);
console.log("Prime Numbers:", primeNumbers);