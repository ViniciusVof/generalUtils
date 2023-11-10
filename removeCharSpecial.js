function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const pattern = "[a-zA-Z0-9]";

  if (char.match(pattern)) {
    return true;
  }
}

export default function removeCharSpecial(id) {
  const input = document.querySelector(id);
  input.addEventListener("keypress", (e) => {
    if (!checkChar(e)) {
      e.preventDefault();
    }
  });
}
