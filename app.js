const textInput = document.querySelector("#text-input");
const startCount = document.querySelector(".count-btn");
const result = document.querySelector(".result-table");

function countStart() {
  result.innerHTML = "";
  const text = textInput.value.toLowerCase();
  const charCount = {};

  for (let char of text) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  resultShow(charCount);
  textInput.value = "";
}

function resultShow(charCount) {
  for (const num in charCount) {
    const row = document.createElement("tr");
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    row.appendChild(col1);
    row.appendChild(col2);
    col1.innerHTML = num;
    col2.innerHTML = charCount[num];
    result.appendChild(row);
  }
}

startCount.addEventListener("click", countStart);
