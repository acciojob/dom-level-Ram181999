//your JS code here. If required.
let element = document.getElementById("level");

let count = 0;
while (element.parentNode) {
  element = element.parentNode;
  count++;
}
console.log(count);

alert("The level of the element is:"+count);