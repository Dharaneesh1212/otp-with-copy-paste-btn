`use strict`;

//otp generation

const generateOtp = () => {
  let otp = Math.floor(100000 + Math.random() * 900000);

  document.getElementById("otpInput").textContent = `${otp}`;
  //instead of using innerText use textContent in paragraph element
};
document.getElementById("otpButton").addEventListener("click", generateOtp);

//otp copying

const copy = () => {
  let value = document.getElementById("otpInput").textContent;
  //if you want to copy the OTP from a paragraph element use textContent

  if (value) {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("OTP copied to clipboard!");
      })
      .catch((error) => {
        console.log("error to copy", error);
        alert("Failed to copy");
      });
  } else {
    alert("Generate OTP first before copying.");
  }
};
document.getElementById("copyButton").addEventListener("click", copy);

//otp pasteing

const paste = async () => {
  // the readText returns a promise, so we use async and await
  try {
    let pasteInput = document.getElementById("pasteInput");

    let copiedText = await navigator.clipboard.readText();

    pasteInput.textContent = copiedText;
    alert("OTP pasted from clipboard!");
  } catch (error) {
    console.error("Error pasting from clipboard: ", error);
    alert("Failed to paste from clipboard");
  }
};
document.getElementById("pasteButton").addEventListener("click", paste);

//* Note *//
// Browsers block clipboard access to prevent 
// potential abuse by malicious websites.
// You can reset clipboard permissions in the browser.
// In Chrome go to the Page Info by clicking the lock icon next to the URL
// and reset permissions, this can be done only by user.