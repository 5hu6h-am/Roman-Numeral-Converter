const conBtn = document.getElementById("convert-btn");
const num = document.getElementById("number");
const output = document.getElementById("output");
const NumberToRomanCoverter = (num) => {
  const reference = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const result = [];
  reference.forEach((arr) => {
    while (num >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  });
  return result.join("");
};

conBtn.addEventListener("click", () => {
  if (num.value === "" || num.value.match(/[e.]/g)) {
    output.innerHTML = `<p>Please enter a valid number</p>`;
    output.classList.remove("hidden");
  } else if (num.value <= 0) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
    output.classList.remove("hidden");
  } else if (num.value >= 4000) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
    output.classList.remove("hidden");
  } else {
    output.innerHTML = `<p>${NumberToRomanCoverter(parseInt(num.value))}</p>`;
    output.classList.remove("hidden");
  }
});
