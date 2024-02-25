import { app } from './variables.js';
import { startAnimation } from './zoomTitle.js';
import { changeImg } from './changeImg.js';
import { encrypt } from './encryptText.js';
import { decrypt } from './decryptText.js';
import { copyText } from './copyText.js';

const selectors = {
  textarea: document.getElementById(app.textarea),
  encryptButton: document.getElementById(app.buttons.encryptButton),
  decryptButton: document.getElementById(app.buttons.decryptButton),
  copyButton: document.getElementById(app.buttons.copyButton),
  clearButton: document.getElementById(app.buttons.clearButton),
  roboImage: document.getElementById(app.roboImage),
  titleElements: document.querySelectorAll(app.title)
};

document.addEventListener("DOMContentLoaded", function () {
  startAnimation(selectors.titleElements);

  selectors.textarea.addEventListener("input", function () {
    changeImg(selectors.roboImage, "url('./img/robo-typing.png')", () => {
      startAnimation(selectors.titleElements);
    });
    selectors.roboImage.style.backgroundPosition = 'center';
    selectors.copyButton.classList.remove('none');
  });

  selectors.encryptButton.addEventListener("click", function () {
    changeImg(selectors.roboImage, "url('./img/encryptedText.png')", () => {
      startAnimation(selectors.titleElements);
    });
    selectors.roboImage.style.backgroundSize = 'cover';
    selectors.roboImage.style.backgroundPosition = 'start center';
    encrypt(selectors.textarea)
  });

  selectors.decryptButton.addEventListener("click", function () {
    decrypt(selectors.textarea);
    startAnimation(selectors.titleElements);
  });

  selectors.copyButton.addEventListener("click", function () {
    copyText(selectors.textarea);
  });

  selectors.clearButton.addEventListener("click", function () {
    textarea.value = '';
    changeImg(selectors.roboImage, "url('./img/roboPrincipal.png')", () => {
      startAnimation(selectors.titleElements);
    });
    selectors.roboImage.style.backgroundSize = 'contain';
    selectors.roboImage.style.backgroundPosition = 'bottom';
    selectors.roboImage.style.marginBottom = '0';
    selectors.copyButton.classList.add('none');
    
  });
});