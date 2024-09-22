var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var total = document.querySelector("#total");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  total.textContent = Number(inp1.value) + ((Number(inp2.value)/100)*Number(inp1.value));
});
