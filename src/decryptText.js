export function decrypt(textarea, startAnimation) {
    let textValue = textarea.value;
    textValue = textValue.replaceAll("enter", "e");
    textValue = textValue.replaceAll("imes", "i");
    textValue = textValue.replaceAll("ai", "a");
    textValue = textValue.replaceAll("ober", "o");
    textValue = textValue.replaceAll("ufat", "u")
    textarea.value = textValue;
}