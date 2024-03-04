function selectOption(element) {
  var selectedOption = document.querySelector(".content2-2-lower .selected");
  if (selectedOption) {
    selectedOption.classList.remove("selected");
  }
  element.classList.add("selected");
}
