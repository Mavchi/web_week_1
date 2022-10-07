
import "./styles.css";

const printButton = document.querySelector("#my-button");
  const addButton = document.querySelector("#add-data")

  printButton.addEventListener("click", function () {
    console.log("hello world");

    document.querySelector("h1").innerText = "My notebook"
  });

  addButton.addEventListener("click", function () {
    const ul = document.querySelector("ul")
    const textarea = document.querySelector("textarea")

    let newLi = document.createElement("li")
    newLi.innerText = textarea.value
    //textarea.value = ""

    ul.appendChild(newLi)
  })

/*
if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const printButton = document.querySelector("#my-button");
  const addButton = document.querySelector("#add-data")

  printButton.addEventListener("click", function () {
    console.log("hello world");

    document.querySelector("h1").innerText = "My notebook"
  });

  addButton.addEventListener("click", function () {
    const ul = document.querySelector("ul")
    const textarea = document.querySelector("textarea")

    let newLi = document.createElement("li")
    newLi.innerText = textarea.value
    textarea.value = ""

    ul.appendChild(newLi)
  })
}
*/