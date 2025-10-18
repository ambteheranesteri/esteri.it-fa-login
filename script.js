// script.js
document.addEventListener("DOMContentLoaded", function() {
  const dobField = document.getElementById("date_of_birth");
  const barcodeField = document.getElementById("barcode_number");
  const captchaField = document.querySelector(".captcha-input");
  const confirmBtn = document.querySelector(".confirm-btn");

  confirmBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const dob = dobField.value.trim();
    const barcode = barcodeField.value.trim();
    const captcha = captchaField.value.trim();

    if (!dob || !barcode || !captcha) {
      alert("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    const match = usersData.find(
      user =>
        user.dob === dob &&
        user.barcode === barcode &&
        user.captcha === captcha
    );

    if (match) {
      window.location.href = match.redirect; // هدایت به لینک مخصوص
    } else {
      alert("اطلاعات وارد شده صحیح نیست. لطفاً دوباره تلاش کنید.");
    }
  });
});
