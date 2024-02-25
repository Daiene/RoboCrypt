export function encrypt(textarea) {
    let textValue = textarea.value;
    textValue = textValue.replaceAll("e", "enter");
    textValue = textValue.replaceAll("i", "imes");
    textValue = textValue.replaceAll("a", "ai");
    textValue = textValue.replaceAll("o", "ober");
    textValue = textValue.replaceAll("u", "ufat")
    textarea.value = textValue;
}