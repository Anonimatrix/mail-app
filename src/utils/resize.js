export function resize(element) {
  element.style.height = "auto";
  element.style.height = `${element.scrollHeight}px`;
}
