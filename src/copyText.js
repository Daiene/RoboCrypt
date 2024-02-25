export function copyText(textarea) {
    textarea.select();
    document.execCommand("copy");
    alert("O documento foi copiado para a área de transferência.");
}