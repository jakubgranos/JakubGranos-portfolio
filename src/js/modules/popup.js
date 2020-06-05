const popup = document.querySelector("[data-attribute='popup']");
setTimeout(() => {
  if(popup != null) {
    popup.classList.add('popup-disable');
  }
}, 5000);
