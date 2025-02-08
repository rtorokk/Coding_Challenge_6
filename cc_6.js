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
