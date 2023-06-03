const reds = ["빨강", "뻘겅", "빨간", "붉은"];
const colors = ["빨강", "뻘겅", "빨간", "붉은", "시뻘건"];
// for (const red in reds) {
//   console.log(red);
// }
// for (const red of reds) {
//   console.log(red);
// }
reds.forEach(function (red) {
  console.log(red);
});
colors.forEach((color) => {
  console.log(color);
});
colors.forEach((color) => console.log(color));
