function tambah() {
  const a =
parseFloat(document.getElementById("angka1").value);
  const b =
parseFloat(document.getElementById("angka2").value);
  
  document.getElementById("hasil")
  .innerText = `Hasil: ${a + b}`;
}

function kurang() {
  const a =
parseFloat(document.getElementById("angka1").value);
  const b =
parseFloat(document.getElementById("angka2").value);
  
  document.getElementById("hasil")
  .innerText = `Hasil: ${a - b}`;
}

function kali() {
  const a =
parseFloat(document.getElementById("angka1").value);
  const b =
    parseFloat(document.getElementById("angka2").value);
  
  document.getElementById("hasil")
  .innerText = `Hasil: ${a * b}`;
}

function bagi() {
  const a = parseFloat(document.getElementById("angka1").value);
parseFloat(document.getElementById("angka2").value);
  if (b === 0) {
    
    document.getElementById("hasil")
    .innerText = "Tidak bisa dibagi 0!";
  } else {
    
    document.getElementById("hasil")
    .innerText = `Hasil: ${a / b}`;
  }
}