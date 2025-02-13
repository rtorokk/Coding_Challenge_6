// Task 1: Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let Profit = (sellingPrice - costPrice) * unitsSold;// calculate the profit
    console.log(`Total Profit: $${Profit}`);// print the profit value
    return Profit; // return the profit value
    
};

calculateProfit(20, 30, 100);// Total Profit: $1000
calculateProfit(50, 70, 200);// Total Profit: $4000


// Task 2: Sales Tax Computation

const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;// calculate the tax
    console.log(`Sales Tax: $${tax}`);// print the tax value
    return tax;// return the tax value
};
calculateSalesTax(100,0.07);// Sales Tax: $7
calculateSalesTax(500,0.1);// Sales Tax: $50

// Task 3: Employee Bonus Calculation

const calculateBonus = (salary, performanceRating) => {
    let bonusRates = {"Excellent": 0.2, "Good": 0.1, "Average": 0.05,};// define the bonus rates
    let bonus = salary * bonusRates[performanceRating] || 0;// calculate the bonus
    console.log(`Bonus: $${bonus}`);// print the bonus value 
    return bonus;// return the bonus value
};
calculateBonus(5000,"Excellent");// Bonus: $1000
calculateBonus(7000,"Good");// Bonus: $700

// Task 4: Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0) {
    let prices = {"Basic": 10, "Premium": 20, "Enterprise": 50};// define the prices
    let totalCost = (prices[plan] || 0) * months - discount;// calculate the total cost
    console.log(`Total Cost: $${totalCost}`);// print the total cost value
    return totalCost;// return the total cost value
}

calculateSubscriptionCost("Basic", 6, 10);// Total Cost: $50
calculateSubscriptionCost("Premium", 12, 0);// Total Cost: $240

// Task 5: Currency Conversion

function convertCurrency(amount, exchangeRate) {
    let converted = amount * exchangeRate;// convert the currency
    console.log(`Converted Amount: $${converted}`);// print the converted value
    return converted;// return the converted value
}
convertCurrency(100, 1.1)// Converted Amount: $110
convertCurrency(250, 0.85)// Converted Amount: $212.5


// Task 6: Discount Strategy for Bulk Orders

let orders = [200, 600, 1200, 450, 800];// define the orders
function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);// apply the discount function to each order
    console.log(discountedOrders);// print the discounted orders
    return discountedOrders;// return the discounted orders
}
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);// [200, 540, 1080, 450, 720]


// Task 7: Business Expense Tracker

function createExpenseTracker() {
    let totalExpenses = 0;// define the expenses array
    return function(amount) {
        totalExpenses += amount;// add the amount to the total expenses
        console.log(`Total Expenses: $${totalExpenses}`);// print the total expenses
        return totalExpenses;// return the total expenses
    };
}
let tracker = createExpenseTracker();
console.log(tracker(200));// Total Expenses: $200
console.log(tracker(150));// Total Expenses: $350