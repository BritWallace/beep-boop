//Business Logic



function beep(input) {
  let myArray = []; 
  for (let i =  input; i >= 0; i--) {
    myArray.push(i);
  }
  myArray = myArray.toString().replace(/[0-9]3|3[0-9]|3/g, "Won't you be my neighbor?");
  myArray = myArray.toString().replace(/[0-9]2|2[0-9]|2/g, "boop");
  myArray = myArray.toString().replace(/[0-9]1|1[0-9]|1/g, "beep"); 
  return myArray
}
  



// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const input= $("input#input").val();
    $(".input").text(beep(input));
    $(".result").show();
    })
})

















