function copy() {
  var copyText = document.getElementById("description");
  copyText.select();
  document.execCommand("Copy");
  alert(copyText.value+" copied");
}
