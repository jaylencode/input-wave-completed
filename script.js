// --getting the Labels from the DOM and putting it in the a variable.--
// querySelector return a Node list.
const labels = document.querySelectorAll(".form-control label");

// Doing a forEach on labels variable.
labels.forEach((label) => {
  label.innerHTML = label.innerText
    // spit splits the letters into a an Array.
    .split("")
    // map turns it into a diffent array
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    // join turn it back into a string
    .join("");
});
