function copy() {
  console.log("!!!!!!!!!!!!");
  let copyText = document.getElementById("description");
  copyText.select();
  document.execCommand("Copy");
  alert(copyText.value+" copied");
}
