function copyMe(e) {
  console.log(e.value);
  navigator.clipboard.writeText(e.value);
}
