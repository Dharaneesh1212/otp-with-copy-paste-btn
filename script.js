`use strict`;

const generateOtp = () => {

    let otp = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("otpInput").innerText = `${otp}`;
};
document.getElementById("otpButton").addEventListener("click", generateOtp);
