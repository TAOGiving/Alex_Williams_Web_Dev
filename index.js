//***********************************************/
//**************** GSAP Animations  *************/
//***********************************************/

gsap.registerPlugin(ScrollTrigger, SplitText); // Register the SplitText plugin

let split, animation;

// Initialize SplitText
split = new SplitText(".text_animation", { type: "words, chars" });

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);
  animation && animation.revert(); // Revert any existing animation
  animation = gsap.from(split.chars, {
    delay: 3.5,
    x: 150,
    opacity: 0,
    duration: 0.4,
    ease: "power4",
    stagger: 0.02,
  });
  console.log("GSAP Animation Initialized");
});

document.addEventListener("DOMContentLoaded", () => {
  // Timeline for smooth sequencing
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Navbar: logo/profile + links
  tl.from(".navbar .logo", {
    y: -30,
    opacity: 0,
    duration: 0.4,
  }).from(
    ".navbar a",
    {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.75,
    },
    "-=0.3"
  );

  // Hero: heading + subheading
  tl.from(".hero h5", {
    y: 40,
    opacity: 0,
    duration: 0.5,
  })
    .from(".hero h1", {
      y: 40,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      ".hero h2",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.4"
    );

  // Hero intro paragraph
  // tl.from(
  //   ".hero p",
  //   {
  //     y: 20,
  //     opacity: 0,
  //     duration: 0.6,
  //   },
  //   "-=0.3"
  // );

  // CTA buttons (bounce in a bit)
  tl.from(
    ".hero .cta-btn",
    {
      // scale: 0.8,
      delay: 7.5,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
    },
    "-=0.2"
  );
});
// Entrance effect (on load)
// gsap.from("#alexProfileImage", {
//   // filter: "grayscale(100%) contrast(200%)",
//   scale: 0.8,
//   opacity: 0,
//   duration: 1.5,
//   ease: "power3.out",
// });

// // Subtle hover effect (give it attitude)
document
  .querySelector("#alexProfileImage")
  .addEventListener("mouseenter", () => {
    gsap.to("#alexProfileImage", {
      rotation: -5,
      scale: 1.05,
      duration: 0.4,
      ease: "back.out(2)",
    });
  });
document
  .querySelector("#alexProfileImage")
  .addEventListener("mouseleave", () => {
    gsap.to("#alexProfileImage", {
      rotation: 0,
      scale: 1,
      duration: 0.4,
      ease: "back.in(2)",
    });
  });

// gsap.to("#alexProfileImage", {
//   y: -15,
//   rotation: -2,
//   duration: 3,
//   ease: "sine.inOut",
//   yoyo: true,
//   repeat: -1,
// });

// Start: hidden behind a circular "paintbrush" mask
gsap.set("#alexProfileImage", {
  clipPath: "circle(0% at 50% 50%)", // fully masked
  filter: "saturate(0) brightness(1.2)", // washed-out, unpainted
  scale: 0.95,
});

// Timeline for the artistic paint-in
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.to("#alexProfileImage", {
  clipPath: "circle(140% at 50% 50%)", // mask expands outward like brush spreading
  duration: 3,
})
  .to(
    "#alexProfileImage",
    {
      filter: "saturate(1) brightness(1)", // colors bloom in
      duration: 1,
    },
    "-=1.0"
  )
  .to("#alexProfileImage", {
    scale: 1, // subtle final settle
    duration: 0.6,
    ease: "elastic.out(1, 0.5)",
  });

// For each SVG icon, animate the stroke

// Select all paragraphs in the "Me, myself and I" section
document.querySelectorAll(".about-text p").forEach((p, i) => {
  gsap.from(p, {
    x: i % 2 === 0 ? -50 : 50, // alternate sides
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: p,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from(".about-heading", {
  opacity: 0,
  y: 30,
  scale: 0.95,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-heading",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Bootstrap Icons (mask reveal instead of stroke-draw)
gsap.utils.toArray(".about-icon").forEach((icon) => {
  gsap.from(icon, {
    clipPath: "inset(0 100% 0 0)", // wipe from right to left
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: icon,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from(".about-video", {
  scale: 1.2,
  opacity: 0,
  filter: "blur(20px)",
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-video",
    start: "top 85%",
  },
});

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

//*******************************************/
//***** Update main image on index page *****/
//*******************************************/

// Check if the device width is less than 992px (mobile devices)
function updateImageSource() {
  const image = document.getElementById("alexProfileImage");
  if (window.innerWidth < 992) {
    image.src = "images/cropped_profile.png"; // Set to the smaller image
  } else {
    image.src = "images/Profile_looking_Left.png"; // Set back to the larger image
  }
}

// Initial check
updateImageSource();

// Add event listener to handle resizing
window.addEventListener("resize", updateImageSource);

//Form and reCAPTCHA handling//
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
    formData.append("g-recaptcha-response", recaptchaResponse);

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
        sendCaptcha(); // Call the function to send the reCAPTCHA token
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });

function sendCaptcha() {
  grecaptcha.enterprise
    .execute("6LfHWaQrAAAAAPPWiiE4IYyQFK2VwhW0DVufD8oC", {
      action: "submit",
    })
    .then(function (token) {
      // Send token to your backend for verification
      fetch("/verify-captcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token, action: "submit" }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Score:", data.score);
        });
    });
}

const {
  RecaptchaEnterpriseServiceClient,
} = require("@google-cloud/recaptcha-enterprise");

/**
 * Create an assessment to analyze the risk of a UI action.
 *
 * projectID: Your Google Cloud Project ID.
 * recaptchaSiteKey: The reCAPTCHA key associated with the site/app
 * token: The generated token obtained from the client.
 * recaptchaAction: Action name corresponding to the token.
 */
async function createAssessment({
  // TODO: Replace the token and reCAPTCHA action variables before running the sample.
  projectID = "alexwilliamsdev-1755030894052",
  recaptchaKey = "6LfHWaQrAAAAAPPWiiE4IYyQFK2VwhW0DVufD8oC",
  token = "action-token",
  recaptchaAction = "Send-Message",
}) {
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // Build the assessment request.
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };

  const [response] = await client.createAssessment(request);

  // Check if the token is valid.
  if (!response.tokenProperties.valid) {
    console.log(
      `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`
    );
    return null;
  }

  // Check if the expected action was executed.
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // Get the risk score and the reason(s).
    // For more information on interpreting the assessment, see:
    // https://developers.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    response.riskAnalysis.reasons.forEach((reason) => {
      console.log(reason);
    });

    return response.riskAnalysis.score;
  } else {
    console.log(
      "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score"
    );
    return null;
  }
}
