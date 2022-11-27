// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toLocaleUpperCase()
    return customerName;
}

function setBestCustomer(){
    bestCustomer ='not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'mary';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'probably mary';

    function changeLeastFavoriteCustomer(){
        leastFavoriteCustomer = 'not mary'
    }
}