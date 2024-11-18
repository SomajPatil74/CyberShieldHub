function generateOTP() {
    const otpLength = document.getElementById('otpLength').value;
    const otpResult = document.getElementById('otpResult');

    if (otpLength < 1 && otpLength > 8) {
        alert('Please enter a valid OTP length.');
        return;
    }

    const generatedOTP = generateRandomOTP(otpLength);
    otpResult.textContent = `Generated OTP: ${generatedOTP}`;
}

function generateRandomOTP(length) {
    const characters = '0123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    return otp;
}
