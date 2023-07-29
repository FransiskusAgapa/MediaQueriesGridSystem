let btn = document.querySelector(".btn");

function addShadow(element) {
  element.classList.add("shadow");
}

function removeShadow(element) {
  element.classList.remove("shadow");
}

function demo(element) {
  alert(`( ${element.innerText} ) is a Demo - No Functionality Attached Yet!`);
}
