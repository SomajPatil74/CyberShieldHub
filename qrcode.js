function generateQRCode() {
    const inputData = document.getElementById('inputData').value;
    const qrCodeContainer = document.getElementById('qrCode');
    
    // Clear previous QR code
    qrCodeContainer.innerHTML = '';
    
    // Generate new QR code
    const qrcode = new QRCode(qrCodeContainer, {
      text: inputData,
      width: 200,
      height: 200
    });
  }
  