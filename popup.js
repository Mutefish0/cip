console.log("Hello, world!");

function startCip() {
  console.log("Starting Cip...");
  const elView = document.getElementById("colorView");
  const elText = document.getElementById("colorText");
  const eyeDropper = new window.EyeDropper();

  eyeDropper.open().then((res) => {
    elText.value = res.sRGBHex;
    elView.style.backgroundColor = res.sRGBHex;
  });
}

document.getElementById("btn").addEventListener("click", startCip);
