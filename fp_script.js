"use strict";

//Basic Password
// document
//   .getElementById("passwordProtection")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); //prevents default action
//     const password = prompt("Please enter Password");
//     const correctPassword = "mypassword123";
//     if (password === correctPassword) {
//       window.location.href = "https://taog.co.uk/paintProducts.html";
//     } else {
//       alert("Incorrect Password, try again");
//     }
//   });

//**********************************************************************************/
//Update cart with object

const cart = {};

function addToCart(item, price) {
  if (cart[item]) {
    cart[item].quantity += 1;
  } else cart[item] = { price: price, quantity: 1 };
  updateCart();
}

function removeFromCart(item) {
  if (cart[item]) {
    cart[item].quantity -= 1;
    const totalItemsDiv = document.getElementById("totalQuantity");
    totalItemsDiv.className = "cart-item";
    totalItemsDiv.innerHTML = `<span class="badge bg-primary rounded-pill" id="totalQuantity"
    >Total Items: 0</span`;
    if (cart[item].quantity <= 0) {
      delete cart[item];
    }
    updateCart();
  }
}

function clearCart() {
  for (const item in cart) {
    delete cart[item];
    const totalItemsDiv = document.getElementById("totalQuantity");
    totalItemsDiv.className = "cart-item";
    totalItemsDiv.innerHTML = `<span class="badge bg-primary rounded-pill" id="totalQuantity"
    >Total Items: 0</span`;
  }
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("shopping-cart");
  cartDiv.innerHTML = ""; // clear the cart display

  let total = 0;
  let totalItems = 0;

  for (const [item, details] of Object.entries(cart)) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `            <li class="list-group-item d-flex justify-content-between lh-sm mb-1">
    <div>
      <h6 class="my-0">${item}</h6>
      
    </div>
    <span class="text-body-secondary"> £${details.price.toFixed(2)} x ${
      details.quantity
    }</span>
  </li>`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList = "btn btn-warning btn-sm d-inline-flex mt-1 mb-3";
    removeButton.onclick = () => removeFromCart(item);
    itemDiv.appendChild(removeButton);

    cartDiv.appendChild(itemDiv);

    total += details.price * details.quantity;
    totalItems += details.quantity;

    const totalItemsDiv = document.getElementById("totalQuantity");
    totalItemsDiv.className = "cart-item";
    totalItemsDiv.innerHTML = `<span class="badge bg-primary rounded-pill" id="totalQuantity"
    >Total Items: ${totalItems}</span`;
    console.log(cart);
  }

  const totalDiv = document.createElement("div");
  const cartBtn = document.getElementById("cartBtn");
  totalDiv.className = "cart-item";
  totalDiv.innerHTML = `<h4><strong class="badge bg-success rounded-pill mt-3">Total: £${total.toFixed(
    2
  )}</strong></h4>`;
  cartBtn.innerHTML = `<button
  class="btn btn-success d-inline-flex justify-content-center align-items-center p-1"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasRight"
  aria-controls="offcanvasRight"
  id="cartBtn"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-cart3 me-1"
    viewBox="0 0 16 16"
  >
    <path
      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </svg>
  £${total.toFixed(2)}
</button>`;
  cartDiv.appendChild(totalDiv);
}

//***********************************************************************************/

// Paint Product size updater when clicked the price and buttons update
const buyNowBtn = document.getElementById("buyNowBtn");
const addToBasketBtn = document.getElementById("addToBasketBtn");
const price = document.getElementById("productPrice");

let basketDescription = "";
function product60mlUpdate() {
  buyNowBtn.textContent = "Buy 60ml Now";
  addToBasketBtn.textContent = "Add 60ml To Basket";
  basketDescription = "60ml bottle";
  price.textContent = "£9.16";
}
function product120mlUpdate() {
  buyNowBtn.textContent = "Buy 120ml Now";
  addToBasketBtn.textContent = "Add 120ml To Basket";
  basketDescription = "120ml bottle";
  price.textContent = "£14.64";
}
function product240mlUpdate() {
  buyNowBtn.textContent = "Buy 240ml Now";
  addToBasketBtn.textContent = "Add 240ml To Basket";
  basketDescription = "240ml bottle";
  price.textContent = "£29.28";
}
function product480mlUpdate() {
  buyNowBtn.textContent = "Buy 480ml Now";
  addToBasketBtn.textContent = "Add 480ml To Basket";
  basketDescription = "480ml bottle";
  price.textContent = "£58.56";
}

function product960mlUpdate() {
  buyNowBtn.textContent = "Buy 960ml Now";
  addToBasketBtn.textContent = "Add 960ml To Basket";
  basketDescription = "960ml bottle";
  price.textContent = "£99.84";
}

//******************************************************************/

const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const shopItems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = shopItems.getElementsByTagName("h5");

  console.log("Search Box", searchBox);
  console.log("shopItems", shopItems);
  console.log("product", product);
  console.log("pname", pname);

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h5")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

//***************************************************************/

//Scroll Trigger
gsap.registerPlugin(ScrollTrigger);
//GSAP animation
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all h3 elements
  const headings = document.querySelectorAll(".content-left");

  // Loop through each heading
  headings.forEach((heading) => {
    // Create a GSAP timeline for each heading
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 75%", // Trigger animation when 80% of the element is in viewport
        // end: "bottom center", // Animation ends when 20% of the element is in viewport
        toggleActions: "play none none reverse", // Animation direction
        markers: false, // Add markers for debugging (optional)
      },
    });

    // Define animation for each heading
    tl.from(heading, { opacity: 0, x: -300 });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Select all img elements
  const images = document.querySelectorAll(".img-left");

  // Loop through each heading
  images.forEach((img) => {
    // Create a GSAP timeline for each heading
    const tlimg = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top 75%", // Trigger animation when 80% of the element is in viewport
        // end: "bottom center", // Animation ends when 20% of the element is in viewport
        toggleActions: "play none none reverse", // Animation direction
        markers: false, // Add markers for debugging (optional)
      },
    });

    // Define animation for each heading
    tlimg.from(img, { opacity: 0, x: -300 });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all h3 elements
  const headings = document.querySelectorAll(".content-right");

  // Loop through each heading
  headings.forEach((heading) => {
    // Create a GSAP timeline for each heading
    const tlright = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 75%", // Trigger animation when 80% of the element is in viewport
        // end: "bottom center", // Animation ends when 20% of the element is in viewport
        toggleActions: "play none none reverse", // Animation direction
        markers: false, // Add markers for debugging (optional)
      },
    });

    // Define animation for each heading
    tlright.from(heading, { opacity: 0, x: 300 });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all img elements
  const images = document.querySelectorAll(".img-right");

  // Loop through each heading
  images.forEach((img) => {
    // Create a GSAP timeline for each heading
    const tlimgright = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top 75%", // Trigger animation when 80% of the element is in viewport
        // end: "bottom center", // Animation ends when 20% of the element is in viewport
        toggleActions: "play none none reverse", // Animation direction
        markers: false, // Add markers for debugging (optional)
      },
    });

    // Define animation for each heading
    tlimgright.from(img, { opacity: 0, x: 300 });
  });
});

let widthInput = document.getElementById("WidthInput");
let heightInput = document.getElementById("HeightInput");

let widthOutput = document.getElementById("WidthTotal");
let heightOutput = document.getElementById("HeightTotal");
let subjectOutput = document.getElementById("SubjectTotal");
let colourOutput = document.getElementById("ColourTotal");
let finishOutput = document.getElementById("FinishTotal");
let quoteTotal = document.getElementById("QuoteTotal");
let oneSubject = document.getElementById("oneSubject");
let twoSubject = document.getElementById("twoSubjects");
let threeSubject = document.getElementById("threeSubjects");
let blackAndWhite = document.getElementById("black_white");
let colourElement = document.getElementById("colour");
let a4Element = document.getElementById("a4Input");
let a3Element = document.getElementById("a3Input");
let a2Element = document.getElementById("a2Input");
let a1Element = document.getElementById("a1Input");
let noFinishElement = document.getElementById("noFinish");
let glossFinishElement = document.getElementById("glossFinish");
let matteFinishElement = document.getElementById("matteFinish");

let widthValue = localStorage.getItem("width");
let heightValue = localStorage.getItem("height");
let subjectValue = localStorage.getItem("subjects");
let colourValue = localStorage.getItem("colour");
let finishValue = localStorage.getItem("finish");
let totalValue = localStorage.getItem("total");

// Function to open a specific modal and display a specific image
function openModalAndSelectImage2(modalId, imageIndex) {
  $(modalId).modal("show"); // Open the specified modal
  if (modalId === "#guyModal") {
    $(`${modalId} #guyCarousel`).carousel(imageIndex);
  } else if (modalId === "#avengersModal") {
    $(`${modalId} #avengersCarousel`).carousel(imageIndex);
  } else if (modalId === "#koiModal") {
    $(`${modalId} #koiCarousel`).carousel(imageIndex);
  } else if (modalId === "#allImagesModal") {
    $(`${modalId} #allImagesCarousel`).carousel(imageIndex);
  }
  // Select the desired image in the carousel

  console.log("Modal ID" + modalId);
  console.log("Image Index" + imageIndex);
}

//Event listener for gallery item click
$(".gallery-item").on("click", function () {
  const modalTarget = $(this).data("modal-target"); // Get the modal target from data-modal-target attribute
  const imageIndex = $(this).data("modal-index"); // Get the index of the image from data-modal-index attribute
  openModalAndSelectImage2(modalTarget, imageIndex); // Open the corresponding modal and select the specified image
  console.log("Modal Target" + modalTarget);
  console.log("Image Index" + imageIndex);
});

//************************************************************************************************************ */

// Loader screen hide and show.

// window.onload = function () {
//   const loadingScreen = document.querySelector(".loading-screen");
//   loadingScreen.style.display = "none";
// };

// Get the button:
let mybutton = document.getElementById("myBtn");

//************************************************************************************************************ */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user clicks on the button, scroll to the quote

function quoteFunction() {
  const element = document.getElementById("quote");
  element.scrollIntoView({ behavior: "smooth" });
}

//************************************************************************************************************ */

// Below are the JS for the contact form
// const form = document.querySelector("form"),
//   statusTxt = form.querySelector(".button-area span");

// form.onsubmit = (e) => {
//   e.preventDefault(); // preventing form from submitting
//   statusTxt.style.color = "red";
//   statusTxt.style.display = "inline";

//   let xhr = new XMLHttpRequest(); //creating new xml object
//   xhr.open("POST", "message.php", true); // sending post request to message.php file
//   xhr.onload = () => {
//     // once AJAX loaded
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       //if AJAX response status is 200 and ready status is 4 means there is no errors
//       let response = xhr.response; // storing ajax response in a response variable
//       if (
//         response.indexOf("Email and message is required") != -1 ||
//         response.indexOf("Enter a valid email address") ||
//         response.indexOf("Sorry, failed to send your message")
//       ) {
//         statusTxt.style.color = "red";
//       } else {
//         form.reset();
//         setTimeout(() => {}, 3000);
//       }
//       statusTxt.innerText = response;
//     }
//   };
//   let formData = new FormData(form); // creating new formDara object. This object is used to send form data.

//   xhr.send(formData); // sending form data
// };

//******************************************************************************************************************/

// Updating the Quote sections

// console.log("This is working");

function widthUpdater(newValue) {
  widthOutput.value = newValue;
  localStorage.setItem("width", newValue);
}

function a4papersizeUpdater() {
  widthInput.value = 21.0;
  widthOutput.value = 21.0;
  localStorage.setItem("width", 21.0);
  heightOutput.value = 29.7;
  heightInput.value = 29.7;
  localStorage.setItem("height", 29.7);
  a4Element.style.backgroundColor = "green";
  a3Element.style.backgroundColor = "";
  a2Element.style.backgroundColor = "";
  a1Element.style.backgroundColor = "";
  a4Element.textContent = "A4 Selected";
  a3Element.textContent = "A3 (29.7cm x 42.0cm)";
  a2Element.textContent = "A2 (42.0cm x 59.4cm)";
  a1Element.textContent = "A1 (59.4cm x 84.1cm)";
}

function a3papersizeUpdater() {
  widthInput.value = 29.7;
  widthOutput.value = 29.7;
  localStorage.setItem("width", 29.7);
  heightOutput.value = 42.0;
  heightInput.value = 42.0;
  localStorage.setItem("height", 42.0);
  a4Element.style.backgroundColor = "";
  a3Element.style.backgroundColor = "green";
  a2Element.style.backgroundColor = "";
  a1Element.style.backgroundColor = "";
  a4Element.textContent = "A4 (21.0cm x 29.7cm)";
  a3Element.textContent = "A3 Selected";
  a2Element.textContent = "A2 (42.0cm x 59.4cm)";
  a1Element.textContent = "A1 (59.4cm x 84.1cm)";
}

function a2papersizeUpdater() {
  widthInput.value = 42.0;
  widthOutput.value = 42.0;
  localStorage.setItem("width", 42.0);
  heightOutput.value = 59.4;
  heightInput.value = 59.4;
  localStorage.setItem("height", 59.4);
  a4Element.style.backgroundColor = "";
  a3Element.style.backgroundColor = "";
  a2Element.style.backgroundColor = "green";
  a1Element.style.backgroundColor = "";
  a4Element.textContent = "A4 (21.0cm x 29.7cm)";
  a3Element.textContent = "A3 (29.7cm x 42.0cm)";
  a2Element.textContent = "A2 Selected";
  a1Element.textContent = "A1 (59.4cm x 84.1cm)";
}

function a1papersizeUpdater() {
  widthInput.value = 59.4;
  widthOutput.value = 59.4;
  localStorage.setItem("width", 59.4);
  heightOutput.value = 84.1;
  heightInput.value = 84.1;
  localStorage.setItem("height", 84.1);
  a4Element.style.backgroundColor = "";
  a3Element.style.backgroundColor = "";
  a2Element.style.backgroundColor = "";
  a1Element.style.backgroundColor = "green";
  a4Element.textContent = "A4 (21.0cm x 29.7cm)";
  a3Element.textContent = "A3 (29.7cm x 42.0cm)";
  a2Element.textContent = "A2 (42.0cm x 59.4cm)";
  a1Element.textContent = "A1 Selected";
}

function heightUpdater(newValue) {
  heightOutput.value = newValue;
  localStorage.setItem("height", newValue);
}

function oneSubjects() {
  subjectOutput.value = "One Subject";
  localStorage.setItem("subjects", "One Subject");
  oneSubject.style.backgroundColor = "Green";
  oneSubject.textContent = "Selected";
  twoSubject.style.backgroundColor = "";
  twoSubject.textContent = "Can I have 2 subjects please";
  threeSubject.style.backgroundColor = "";
  threeSubject.textContent = "I have a big Family, 3 for me!";
}

function twoSubjects() {
  subjectOutput.value = "Two Subjects";
  localStorage.setItem("subjects", "Two Subjects");
  twoSubject.style.backgroundColor = "Green";
  twoSubject.textContent = "Selected";
  oneSubject.style.backgroundColor = "";
  oneSubject.textContent = "I want one subject in my painting";
  threeSubject.style.backgroundColor = "";
  threeSubject.textContent = "I have a big Family, 3 for me!";
}

function threeSubjects() {
  subjectOutput.value = "Three Subjects";
  localStorage.setItem("subjects", "Three Subjects");
  threeSubject.style.backgroundColor = "Green";
  threeSubject.textContent = "Selected";
  oneSubject.style.backgroundColor = "";
  oneSubject.textContent = "I want one subject in my painting";
  twoSubject.style.backgroundColor = "";
  twoSubject.textContent = "Can I have 2 subjects please";
}

function blackWhite() {
  colourOutput.value = "Black and White";
  localStorage.setItem("colour", "Black and White");
  blackAndWhite.style.backgroundColor = "green";
  blackAndWhite.textContent = "Selected";
  colourElement.style.backgroundColor = "";
  colourElement.textContent = "Colour, colour, colour!";
}

function colour() {
  colourOutput.value = "Full Colour";
  localStorage.setItem("colour", "Full Colour");
  blackAndWhite.style.backgroundColor = "";
  blackAndWhite.textContent = "Monochrome please";
  colourElement.style.backgroundColor = "green";
  colourElement.textContent = "Selected";
}

function noFinish() {
  finishOutput.value = "No Finish";
  localStorage.setItem("finish", "No Finish");
  noFinishElement.style.backgroundColor = "blue";
  noFinishElement.textContent = "Selected";
  noFinishElement.style.color = "white";
  glossFinishElement.style.backgroundColor = "";
  glossFinishElement.textContent = "Glass Like Finish";
  matteFinishElement.style.backgroundColor = "";
  matteFinishElement.textContent = "Premium Finish";
}

function glossFinish() {
  finishOutput.value = "Gloss Finish";
  localStorage.setItem("finish", "Gloss Finish");
  noFinishElement.style.backgroundColor = "";
  noFinishElement.textContent = "No Finish";
  glossFinishElement.style.backgroundColor = "blue";
  glossFinishElement.textContent = "Selected";
  matteFinishElement.style.backgroundColor = "";
  matteFinishElement.textContent = "Premium Finish";
}

function matteFinish() {
  finishOutput.value = "Matte Finish";
  localStorage.setItem("finish", "Matte Finish");
  noFinishElement.style.backgroundColor = "";
  noFinishElement.textContent = "No Finish";
  glossFinishElement.style.backgroundColor = "";
  glossFinishElement.textContent = "Glass Like Finish";
  matteFinishElement.style.backgroundColor = "blue";
  matteFinishElement.textContent = "Selected";
}

function updater() {
  if (localStorage.getItem("width") !== widthOutput) {
    widthOutput.value = localStorage.getItem("width");
  }
  if (localStorage.getItem("height") !== heightOutput) {
    heightOutput.value = localStorage.getItem("height");
  }
  if (localStorage.getItem("subjects") !== subjectOutput) {
    subjectOutput.value = localStorage.getItem("subjects");
  }
  if (localStorage.getItem("colour") !== colourOutput) {
    colourOutput.value = localStorage.getItem("colour");
  }
  if (localStorage.getItem("finish") !== finishOutput) {
    finishOutput.value = localStorage.getItem("finish");
  }
  if (localStorage.getItem("total") !== quoteTotal) {
    quoteTotal.value = localStorage.getItem("total");
  }
}

updater();

// *********************************************************************************************************
// Calculate Area of artwork

let prices = [
  300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1900, 2400, 2900, 3750,
];

let subject1 = 1;
let subjects2 = 1.25;
let subjects3 = 1.4;
let finishGloss = 1.1;
let finishMatte = 1.25;
let monochrome = 0.5;

let total = 0;

//take the area calculation and compare this with the areas pricing band.
// if area lands within a set value it brings back a price.
function totalPrice() {
  let calcArea = widthOutput.value * heightOutput.value;
  if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[0] * subject1).toFixed(2));
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[1] * subject1).toFixed(2));
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[2] * subject1).toFixed(2));
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[3] * subject1).toFixed(2));
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[4] * subject1).toFixed(2));
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[5] * subject1).toFixed(2));
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[6] * subject1).toFixed(2));
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[7] * subject1).toFixed(2));
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[8] * subject1).toFixed(2));
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[9] * subject1).toFixed(2));
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[10] * subject1).toFixed(2));
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[11] * subject1).toFixed(2));
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[12] * subject1).toFixed(2));
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[13] * subject1).toFixed(2));
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[14] * subject1).toFixed(2));
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[15] * subject1).toFixed(2));
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[16] * subject1).toFixed(2));
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[17] * subject1).toFixed(2));
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[18] * subject1).toFixed(2));
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[19] * subject1).toFixed(2));
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[20] * subject1).toFixed(2));
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
    console.log(heightOutput.value);
    console.log(widthOutput.value);
    console.log(subjectOutput.value);
    console.log(colourOutput.value);
    console.log(finishOutput.value);
    console.log(calcArea);
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[2] * subjects2).toFixed(2));
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[3] * subjects2).toFixed(2));
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[4] * subjects2).toFixed(2));
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[5] * subjects2).toFixed(2));
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[6] * subjects2).toFixed(2));
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[7] * subjects2).toFixed(2));
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[8] * subjects2).toFixed(2));
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[9] * subjects2).toFixed(2));
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[10] * subjects2).toFixed(2));
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[11] * subjects2).toFixed(2));
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[12] * subjects2).toFixed(2));
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[13] * subjects2).toFixed(2));
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[14] * subjects2).toFixed(2));
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[15] * subjects2).toFixed(2));
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[16] * subjects2).toFixed(2));
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[17] * subjects2).toFixed(2));
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[18] * subjects2).toFixed(2));
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[19] * subjects2).toFixed(2));
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[20] * subjects2).toFixed(2));
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[4] * subjects3).toFixed(2));
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[5] * subjects3).toFixed(2));
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[6] * subjects3).toFixed(2));
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[7] * subjects3).toFixed(2));
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[8] * subjects3).toFixed(2));
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[9] * subjects3).toFixed(2));
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[10] * subjects3).toFixed(2));
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[11] * subjects3).toFixed(2));
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[12] * subjects3).toFixed(2));
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[13] * subjects3).toFixed(2));
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[14] * subjects3).toFixed(2));
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[15] * subjects3).toFixed(2));
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[16] * subjects3).toFixed(2));
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[17] * subjects3).toFixed(2));
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[18] * subjects3).toFixed(2));
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[19] * subjects3).toFixed(2));
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[20] * subjects3).toFixed(2));
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * monochrom).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * monochrom).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * monochrom).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * monochrom).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * monochrom).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * monochrom).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (
        prices[0] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = prices[0] * subject1 * monochrome * finishMatte;
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else {
    quoteTotal.value = "Please contact for quote";
  }
  console.log(heightOutput.value);
  console.log(widthOutput.value);
  console.log(subjectOutput.value);
  console.log(colourOutput.value);
  console.log(finishOutput.value);
  console.log(calcArea);
}

totalPrice();

//*********************************************************************************************************/
//Update body of email with the parameters customer has chosen

function setEmailLink(email, template) {
  let emailLink = document.getElementById("emailLink");
  emailLink.href =
    "mailto:" +
    email +
    "?subject=Contact from the Art of Giving Website" +
    "&body=" +
    encodeURIComponent(template);
}

// call the function with the desired email address and body content

function bodyContent() {
  emailWidth = document.getElementById("widthTotal").value;
  emailHeight = document.getElementById("heightTotal").value;
  emailSubject = document.getElementById("subjectTotal").value;
  emailColour = document.getElementById("colourTotal").value;
  emailFinish = document.getElementById("finishTotal").value;
  emailQuote = document.getElementById("quoteTotal").value;
  return `Thank you very much for getting in contact,

  I have included the specification from your quote here:
  Width = ${emailWidth}cm
  Height = ${emailHeight}cm
  Subjects = ${emailSubject}
  Colour = ${emailColour}
  Finish = ${emailFinish}
  Quote Total = £${emailQuote}

  Please write your questions here:

  Thank you I will be in touch soon!`;
}

updater();
//*************************************************************************************************/

function demoAlert() {
  alert(
    "Thank you for your interest in the Art of Giving. This is a demo site"
  );
}
