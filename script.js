document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("textarea");
  const encryptButton = document.getElementById("encrypt");
  const decryptButton = document.getElementById("decrypt");
  const copyButton = document.getElementById("copy");
  const roboImage = document.getElementById("roboImage");
  const spans = document.querySelectorAll('h1 span');

  spans.forEach((span, index) => {
    span.style.animationDelay = (index * 0.1) + 's';
  });

  function changeImg(image) {
    roboImage.style.backgroundImage = image;
    roboImage.style.marginBottom = '25px';
  }

  function textareaChangeImage() {
    changeImg("url('./img/robo-typing.png')");
    roboImage.style.backgroundPosition = 'center';
  }

  function encryptedText() {
    changeImg("url('./img/encryptedText.png')");
    roboImage.style.backgroundSize = 'cover';
    roboImage.style.backgroundPosition = 'start center';
  }

  textarea.addEventListener("input", function () {
    textareaChangeImage();
    copyButton.classList.remove('none');
  })

  encryptButton.addEventListener("click", function () {
    encryptedText();

    let textValue = textarea.value;
    textValue = textValue.replaceAll("e", "enter");
    textValue = textValue.replaceAll("i", "imes");
    textValue = textValue.replaceAll("a", "ai");
    textValue = textValue.replaceAll("o", "ober");
    textValue = textValue.replaceAll("u", "ufat")
    textarea.value = textValue;
  })

  decryptButton.addEventListener("click", function () {
    let textValue = textarea.value;
    textValue = textValue.replaceAll("enter", "e");
    textValue = textValue.replaceAll("imes", "i");
    textValue = textValue.replaceAll("ai", "a");
    textValue = textValue.replaceAll("ober", "o");
    textValue = textValue.replaceAll("ufat", "u")
    textarea.value = textValue;
  })

  copyButton.addEventListener("click", function () {
    textarea.select();
    document.execCommand("copy");
    alert("O documento foi copiado para a área de transferência.");
  })
});