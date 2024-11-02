function copyScript() {
  let text = document.getElementById("result").value;
  if (text === "") {
    alert("Tiada apa nak di salin");
  } else {
    navigator.clipboard.writeText(text);
  }
}
function convertToDecimalAsciiArray() {
  // Ambil input dari textarea
  let input = document.getElementById("textInput").value;
  if (input === "") {
    alert("Tak boleh kosong");
  } else {
    // Tukarkan setiap karakter kepada nilai ASCII
    const asciiArray = Array.from(input).map((char) => char.charCodeAt(0));

    // Paparkan hasil dalam konsol (atau anda boleh memaparkannya di halaman)
    console.log(asciiArray);
    document.getElementById("result").value = "";
    // Anda boleh juga memaparkan di halaman
    document.getElementById(
      "result"
    ).value = `<script>document.documentElement.innerHTML = String.fromCharCode(${asciiArray.join(
      ", "
    )});</script>`;
  }
}

//tabs function
function handleTab(event) {
  // Periksa jika tombol yang ditekan adalah Tab
  if (event.key === "Tab") {
    event.preventDefault(); // Mencegah tindakan lalai Tab

    // Dapatkan elemen textarea
    const textarea = event.target;

    // Dapatkan posisi semasa kursor
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Tambah 4 ruang pada posisi kursor
    const value = textarea.value;
    textarea.value = value.substring(0, start) + "    " + value.substring(end);

    // Kembali ke posisi kursor selepas menambah ruang
    textarea.selectionStart = textarea.selectionEnd = start + 4;
  }
}
