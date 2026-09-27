function getElementByAttribute(attr, value) {
  return document.querySelector(`[${attr}="${value}"]`);
}

function getTasks() {
  const todoElement = getElementByAttribute("data-status", "todo");
  const doingElement = getElementByAttribute("data-status", "doing");

  if (!todoElement || !doingElement) {
    console.error("Elements with the specified data-status attributes were not found.");
    return;
  }

  todoElement.style.display = "none";
  doingElement.style.display = "none";

  setTimeout(() => {
    return (todoElement.style.display = "block");
  }, 5000);

  Promise.resolve().then(() => {
    return (doingElement.style.display = "block");
  });
  console.log("Inicio");
}

getTasks();
