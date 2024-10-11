import { renderOrderSummary } from "../Scripts/checkout/orderSummary";
import { renderPaymentSummary } from "../Scripts/checkout/paymentSummary";

//What async does is it makes a function returns a promise
//So await is nothing just a keyword we use before function to wait until its completion and then move forward

async function loadPage() {
  
  console.log('load page');

  await loadProducts();

  return 'value';
}



loadProducts(() =>{
  loadCart(() =>{
    renderOrderSummary();
  renderPaymentSummary();
  });
});