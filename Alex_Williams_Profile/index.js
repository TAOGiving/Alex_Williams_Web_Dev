//*******************************************/
//Main image updater for gallery and home page
//*******************************************/
function updateMainImage(imageSrc) {
  const displayedImage = document.getElementById("displayed-image");

  // Add the hidden class to fade out the image
  displayedImage.classList.add("hiddenfade");

  // Use a timeout to wait for the fade-out transition to finish
  setTimeout(() => {
    displayedImage.src = imageSrc; // Change the image source
    displayedImage.classList.remove("hiddenfade"); // Fade it in again
  }, 500); // This should match the transition duration in CSS
}

function updateMainImage2(imageSrc) {
  document.getElementById("displayed-image-2").src = imageSrc;
}

//********************************/
//Update the specialists in Nav Bar
//********************************/

const texts = ["Father", "Frontend Developer", "Artist"];
let currentIndex = 0;

function changeText() {
  const currentSpecialistEl = document.getElementById("changespecialist");

  // Fade out
  currentSpecialistEl.style.opacity = 0;

  // After the fade-out is complete, change the text
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    currentSpecialistEl.innerText = texts[currentIndex];

    // Fade in
    currentSpecialistEl.style.opacity = 1;
  }, 2000); // Match this time with the transition duration for smoothness
}

setInterval(changeText, 4000); // Change text every 2 seconds (1s fade out + 1s display)

//Animation for Nav Links

document.querySelectorAll(".nav-link").forEach((item) => {
  const fullText = item.getAttribute("data-full");
  const shortText = document.getElementsByClassName("short_text");

  //Remove Short text
  //   shortText.classList.add("hidden");

  // Create a span element with the full text
  const span = document.createElement("span");
  span.classList.add("mt-5");
  span.classList.add("d-inline-block");

  span.textContent = `${fullText}`;

  //Add the span element after short text

  item.appendChild(span);
});
