let count = 0;

function increment() {
  count++;
  document.getElementById("count-el").textContent = count;
}

function save() {
  let dash = count + "-";
  document.getElementById("save-el").textContent += dash;
  count = 0;
  document.getElementById("count-el").textContent = count;
}
