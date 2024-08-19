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
