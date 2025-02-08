// Task 1: Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let Profit = (sellingPrice - costPrice) * unitsSold;// calculate the profit
    console.log(`Total Profit: $${Profit}`);// print the profit value
    return Profit; // return the profit value
    
};

calculateProfit(20, 30, 100);// Total Profit: $1000
calculateProfit(50, 70, 200);// Total Profit: $4000

