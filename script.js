let colorSelect = document.getElementById("colorSelect");

colorSelect.addEventListener("change", () => {
  let color = colorSelect.value;

  document.body.style.backgroundColor = color;
});
