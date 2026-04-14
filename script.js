// function makeid(l) {
//   // write your code here
// }

// // Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));

function makeid(l) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
	

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));