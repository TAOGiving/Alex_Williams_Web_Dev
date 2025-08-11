//*******************************************/
//Main image updater for gallery and home page
//*******************************************/
function updateMainImage(imageSrc, imageLink) {
  const displayedImage = document.getElementById("displayed-image");
  const mainImageLink = document.getElementById("main-image-link");

  // Add the hidden class to fade out the image
  displayedImage.classList.add("hiddenfade");

  // Use a timeout to wait for the fade-out transition to finish
  setTimeout(() => {
    displayedImage.src = imageSrc; // Change the image source
    mainImageLink.href = imageLink; // Update the link to the new image
    displayedImage.classList.remove("hiddenfade"); // Fade it in again
  }, 500); // This should match the transition duration in CSS
}

function updateMainImage2(imageSrc) {
  document.getElementById("displayed-image-2").src = imageSrc;
}

//********************************/
//Update the specialists in Nav Bar
//********************************/

const texts = ["Father", "Frontend Dev", "Artist"];
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

//Contact and recapture set up
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;

    // Honeypot check
    if (form.querySelector('[name="website"]').value) {
      console.log("Bot detected!");
      return;
    }

    // reCAPTCHA validation
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaResponse); // include it

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        grecaptcha.reset(); // reset reCAPTCHA
        document.getElementById("formResponse").classList.remove("hidden");
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
