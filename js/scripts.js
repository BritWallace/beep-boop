//Business Logic



function beep(input) {
  let myArray = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  for (let i = 0; i <= input; i++) {
  myArray = myArray.toString().replace(/[0-9]3|3[0-9]|3/g, "Won't you be my neighbor?");
  myArray = myArray.toString().replace(/[0-9]2|2[0-9]|2/g, "boop");
  myArray = myArray.toString().replace(/[0-9]1|1[0-9]|1/g, "beep"); 
  return myArray
}
}
console.log(beep(9));  
/[0-9]3 | 3 | 3[0-9]/g
// test(9) means input = 9
// test(45) means input = 45
// for(let i =0; i<=input; i++){
//   

// function changeArray(input) {
//   let counter = input
//   const myArray = []
//   for (let i = 0; i <= input; i++) {
//     console.log("i = " + i)
//     myArray.push(counter)
//     console.log('myArray = ' + myArray)
//     counter -= 1
//   }
//   return myArray
// }


