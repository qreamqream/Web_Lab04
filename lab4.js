//1
const numberDisplay1 = document.getElementById("numberDisplay1");
const decreaseButton1 = document.getElementById("decreaseButton1");
const increaseButton1 = document.getElementById("increaseButton1");

let currentNumber1 = 0;

decreaseButton1.addEventListener("click", () => {
  if (currentNumber1 > 0) {
    currentNumber1--;
    updateNumberDisplay1();
  }
});

increaseButton1.addEventListener("click", () => {
  currentNumber1++;
  updateNumberDisplay1();
});

function updateNumberDisplay1() {
  numberDisplay1.textContent = currentNumber1;
}


//2
const numberDisplay2 = document.getElementById("numberDisplay2");
const decreaseButton2 = document.getElementById("decreaseButton2");
const increaseButton2 = document.getElementById("increaseButton2");

let currentNumber2 = 0;

decreaseButton2.addEventListener("click", () => {
  if (currentNumber2 > 0) {
    currentNumber2--;
    updateNumberDisplay2();
  }
});

increaseButton2.addEventListener("click", () => {
  currentNumber2++;
  updateNumberDisplay2();
});

function updateNumberDisplay2() {
  numberDisplay2.textContent = currentNumber2;
}


//3
const numberDisplay3 = document.getElementById("numberDisplay3");
const decreaseButton3 = document.getElementById("decreaseButton3");
const increaseButton3 = document.getElementById("increaseButton3");

let currentNumber3 = 0;

decreaseButton3.addEventListener("click", () => {
  if (currentNumber3 > 0) {
    currentNumber3--;
    updateNumberDisplay3();
  }
});

increaseButton3.addEventListener("click", () => {
  currentNumber3++;
  updateNumberDisplay3();
});

function updateNumberDisplay3() {
  numberDisplay3.textContent = currentNumber3;
}


//4
const numberDisplay4 = document.getElementById("numberDisplay4");
const decreaseButton4 = document.getElementById("decreaseButton4");
const increaseButton4 = document.getElementById("increaseButton4");

let currentNumber4 = 0;

decreaseButton4.addEventListener("click", () => {
  if (currentNumber4 > 0) {
    currentNumber4--;
    updateNumberDisplay4();
  }
});

increaseButton4.addEventListener("click", () => {
  currentNumber4++;
  updateNumberDisplay4();
});

function updateNumberDisplay4() {
  numberDisplay4.textContent = currentNumber4;
}





const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];


const openModalButton = document.getElementById("openModalButton"); 
openModalButton.addEventListener("click", () => {
  
  modal.style.display = "block";

  
  updateModalContent();
});


closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});


function updateModalContent() {
    const productNames = [
      "Cat Condominium with Hidden Claw Retreat Design 1",
      "Cat Condominium with Hidden Claw Retreat Design 2",
      "Cat Condominium with Hidden Claw Retreat Design 3",
      "Cat Condominium with built-in scratching posts and adjustable holes"
    ];
  
    const quantities = [
      currentNumber1,
      currentNumber2,
      currentNumber3,
      currentNumber4
    ];
  
    const prices = [599.0, 765.0, 840.0, 1250.0];
  
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; 
  
    let subtotal = 0;
    let discount = 0;
    let cartHasItems = false; 
  
    for (let i = 0; i < productNames.length; i++) {
      const productName = productNames[i];
      const quantity = quantities[i];
      const price = prices[i];
      subtotal += quantity * price;
  
      if (quantity > 0) {
        cartHasItems = true; 
  
        const productItem = document.createElement("div");
        productItem.textContent = `${productName}  Quantity ${quantity} pieces`;
        productList.appendChild(productItem);
      }
    }
  
    if (!cartHasItems) {
      const noItemsMessage = document.createElement("div");
      noItemsMessage.textContent = "No Item in your cart";
      productList.appendChild(noItemsMessage);
    }
  
    const discountAmount = subtotal > 1000 ? subtotal * 0.1 : 0;
    const total = subtotal - discountAmount;
  
    const subtotalElement = document.getElementById("subtotal");
    subtotalElement.textContent = `Subtotal: ${subtotal.toFixed(2)} Baht`;
  
    const discountElement = document.getElementById("discount");
    discountElement.textContent = `Discount(10%): ${discountAmount.toFixed(2)} Baht`;
  
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: ${total.toFixed(2)} Baht`;
  }
  