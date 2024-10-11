import { renderOrderSummary } from "../Scripts/checkout/orderSummary";
import { renderPaymentSummary } from "../Scripts/checkout/paymentSummary";

//What this promise do is when we create it then it will run its inner function immediately, and resolve is that it waits for an code to first run and complete then only it will move forward(usually used for asynchronus codes). 

//What then is that after the completion of resolve only then will this then block of code will run.

new Promise((resolve)=>{
  loadProducts(() => {
    resolve();
  })
}).then(() => {
  return new Promise((resolve) =>{
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

/*
  loadProducts(() =>{
    loadCart(() =>{
      renderOrderSummary();
    renderPaymentSummary();
    });
});
*/