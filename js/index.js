// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
 
  const priceDOM = product.querySelector(".price span")
  const quantityDOM = product.querySelector(".quantity input")
  let priceNumber = priceDOM.innerHTML
  let quantity = quantityDOM.value

  let subtotal= priceNumber * quantity 
  // console.log (subtotal)
  let subtotalDOM = product.querySelector(".subtotal")
  subtotalDOM.innerText = subtotal
 
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productsDOM = document.querySelectorAll(".product");

  let total=0;
  
  productsDOM.forEach((eachProduct)=>{
    let productSubtotal = updateSubtotal(eachProduct)
    total += productSubtotal;
    })
 
    // ITERATION 3
    let totalValueDOM= document.querySelector("#total-value span") 
    totalValueDOM.innerText = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
