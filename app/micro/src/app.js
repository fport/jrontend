// Renkleri saklamak için bir obje oluşturuyoruz.
let colors = {
  header: "",
  content: "",
  footer: "",
};

// Navbar'daki kutulara drag-drop özelliği ekliyoruz.
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("dragstart", () => {
    console.log("dragging");
    box.classList.add("dragging");
  });
  box.addEventListener("dragend", () => {
    box.classList.remove("dragging");
  });
});

// Uygulama bölümündeki kutulara drop özelliği ekliyoruz.
let colorBoxes = document.querySelectorAll(".color-box");
colorBoxes.forEach((colorBox) => {
  colorBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  colorBox.addEventListener("drop", (e) => {
    e.preventDefault();
    let draggingBox = document.querySelector(".dragging");
    colorBox.classList.remove("red", "blue", "yellow", "green");
    colorBox.classList.add(draggingBox.classList[1]);
    colors[colorBox.classList[1]] = draggingBox.classList[1];
  });
});

// Publish butonuna tıklanınca veriyi indiriyoruz.
let publishButton = document.querySelector(".publish-button");
publishButton.addEventListener("click", () => {
  downloadJson(colors);
});

// JSON verisini indirmek için bir fonksiyon oluşturuyoruz.
function downloadJson(data) {
  let json = JSON.stringify(data);
  let blob = new Blob([json], { type: "application/json" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = "colors.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

