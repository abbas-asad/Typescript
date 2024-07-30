// Callbacks

// #1
function orderpizza(prepareCB: any) {
    console.log('Placing order');
  
    setTimeout(() => {
      console.log('Order has been placed');
      prepareCB();
    }, 3000);
  }
  
  function preparepizza(delpizzaCB: any) {
    console.log('Preparing pizza');
  
    setTimeout(() => {
      console.log('Pizza has been prepared');
      delpizzaCB();
    }, 3000);
  }
  function deliverpizza() {
    console.log('Delivering pizza');
  
    setTimeout(() => {
      console.log('Pizza has been delivered');
    }, 3000);
  }
  
  orderpizza(() => preparepizza(deliverpizza));
  
  // #2
  function leaveHome(callback: any) {
    console.log('Leaving home');
  
    setTimeout(() => {
      console.log('At the bus stop');
      callback();
    }, 3000);
  }
  
  function boardBus() {
    console.log('Boarded the bus');
  
    setTimeout(() => {
      console.log('Arrived at class');
    }, 3000);
  }
  
  leaveHome(boardBus);
  