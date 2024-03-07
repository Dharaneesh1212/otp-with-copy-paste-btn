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
