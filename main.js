console.log("Hello world!"); //this is show on console.log my function. I fix by miss the ; , now works.

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  }
  else if (Time > 12 ==Time < 18) {
    Reply = "It is the afternoon.";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML= Reply;
}


var x = 10;  // It is a Global Variable  
function add() {  
    var y = 20; //local variable  
    var some = 0;//Local variable  
    for (var i = x; i < y; i++) {  
        some = some + i;  
        document.write(some + "<br> ");  
    }   
}  