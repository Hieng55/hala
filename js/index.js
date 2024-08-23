const bgBlack = document.querySelector(".bg_black");
const bgContent = document.querySelector(".bg_content");

function handleOpenBanner() {
  bgBlack.classList.add("active");
}

function handleCloseBanner(event) {
  event.stopPropagation();
  bgBlack.classList.remove("active");
}

function handleClickOutsideContent(event) {
  if (!bgContent.contains(event.target)) {
    bgBlack.classList.remove("active");
  }
}
function validateForm() {
  let isValid = true;

  // Xóa các thông báo lỗi trước đó
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";

  // Kiểm tra tên
  let name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("nameError").textContent = "Họ và tên không được bỏ trống";
    isValid = false;
  }

  // Kiểm tra email
  let email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email không được bỏ trống";
    isValid = false;
  }

  // Kiểm tra số điện thoại
  let phone = document.getElementById("phone").value;
  if (phone === "") {
    document.getElementById("phoneError").textContent = "Số điện thoại không được bỏ trống";
    isValid = false;
  }

  // Nếu tất cả các trường đều hợp lệ, tiến hành gửi email
  if (isValid) {
    sendEmail();
  }
}

function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let subject = `Liên hệ từ khách hàng ${name} `;
  let body = "Họ và tên: " + name + " - " + "Email: " + email + " - " + "Số điện thoại: " + phone + " - " + "Lời nhắn: " + message;

  let mailtoLink = "mailto:info@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;
}

function translateLanguage(language) {
  localStorage.setItem("language", language);
  if (language === "vi") {
    window.location.href = "https://halamedia.netlify.app";
  }
  if (language === "en") {
    console.log(language);

    getLanguage();
    window.location.href = `https://translate.google.com/translate?tl=en&u=https://halamedia.netlify.app`;
  }
}

function translateLanguage(language) {
  localStorage.setItem("language", language);
  if (language === "vi") {
    document.querySelector(".vi").classList.add("active");
    document.querySelector(".en").classList.remove("active");
    window.location.href = "https://halamedia.netlify.app";
  }
  if (language === "en") {
    document.querySelector(".en").classList.add("active");
    document.querySelector(".en").classList.remove("active");
    // getLanguage();
    window.location.href = `https://translate.google.com/translate?tl=en&u=https://halamedia.netlify.app`;
  }
}

function getLanguage() {
  let language = localStorage.getItem("language");
  console.log(language);

  if (language === "en") {
    translateLanguage("en")
  }
  if (language === "vi") {
    document.querySelector(".vi").classList.add("active");
  }
}
getLanguage();
