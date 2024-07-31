// Callbacks
// #1
function orderpizza(prepareCB) {
    console.log('Placing order');
    setTimeout(function () {
        console.log('Order has been placed');
        prepareCB();
    }, 3000);
}
function preparepizza(delpizzaCB) {
    console.log('Preparing pizza');
    setTimeout(function () {
        console.log('Pizza has been prepared');
        delpizzaCB();
    }, 3000);
}
function deliverpizza() {
    console.log('Delivering pizza');
    setTimeout(function () {
        console.log('Pizza has been delivered');
    }, 3000);
}
orderpizza(function () { return preparepizza(deliverpizza); });
// #2
function leaveHome(callback) {
    console.log('Leaving home');
    setTimeout(function () {
        console.log('At the bus stop');
        callback();
    }, 3000);
}
function boardBus() {
    console.log('Boarded the bus');
    setTimeout(function () {
        console.log('Arrived at class');
    }, 3000);
}
leaveHome(boardBus);
