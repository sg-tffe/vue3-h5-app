function calcFontSize() {
  var view_width = window.screen.width
  var font_size = (view_width / 15) * 2 * 2 // 375设计图
  var html = document.getElementsByTagName('html')[0]
  html.style.fontSize = font_size + 'px'
}
calcFontSize()
window.onload = function () {
  calcFontSize()
}
window.onresize = function () {
  calcFontSize()
}
