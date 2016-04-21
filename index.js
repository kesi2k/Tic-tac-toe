var count = 0;
var positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

$(document).ready(function() {

  $("#my_modal").modal();

});

$("#x-btn").click(function() {

  $("#my_modal").modal("hide");
  count = 0;

});

$("#o-btn").click(function() {

  $("#my_modal").modal("hide");
  count = 1;
});

var tiles = document.querySelectorAll("#grid span");

$("#grid span").on("click", function() {
 
 var location = this.id; // ID number of grid location  
  
if (document.getElementById(location).innerHTML == "") {



  //Array that keeps track of positions played. Repopulating of array is done with clearing of HTML

  function positions_pl_filt(value) {
    return value !== location;
    
  }

  //Fliters element location that was clicked from the array
  positions_pl = positions_pl.filter(positions_pl_filt);
  postions_pl_length = positions_pl.length

    
   //Picks a random number from array for the computer to play
  var random = Math.floor(Math.random() * postions_pl_length);
  var random_pl = positions_pl[random];
   //Fliters element location that was played by comp by filtering against random number selected 
   function comp_pl_filt(value) {
    return value != random_pl;

  }
  
  positions_pl = positions_pl.filter(comp_pl_filt);  

  if (document.getElementById("winner").innerHTML == "") {
      count = count + 2;

      // Switches between X and O  
      function val(count) {
        if (count % 2 === 0) {
          return "X"
        } else {
          return "O"
        }
      }

      // Result of val(count). Either X or O.
      var move = (val(count));
 // Takes in move, X or O, along with random location to play. a is X or O and b is random number

      function comp_play(a, b) {

        if (a == "X") {
          a = "O";
         document.getElementById(b).innerHTML = a;
       checkres(a);
       comp_pl_filt(b);
        } 
        else {
          a = "X";
        document.getElementById(b).innerHTML = a;
        checkres(a);
        comp_pl_filt(b);
       // console.log(positions_pl);
        }
      }
      
   // Takes in move and location. Move is X or O and location is ID of grid. these are 'a' and 'b' respectively.

      function play(a, b) {
        document.getElementById(b).innerHTML = a;
    positions_pl_filt(b);
     if (checkres(a) == false){
    comp_play(move, random_pl);    
     }
    
      };  
    
    play(move, location);
    
      

// Takes in X or O to check for winner. a is move X or O 
      function checkres(a) {

        if (document.getElementById("1").innerHTML == a &&
          document.getElementById("2").innerHTML == a &&
          document.getElementById("3").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
         // console.log( positions_pl);
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";       
          }
          return true
        } else if (document.getElementById("4").innerHTML == a &&
          document.getElementById("5").innerHTML == a &&
          document.getElementById("6").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
          }
        return true
        } else if (document.getElementById("7").innerHTML == a &&
          document.getElementById("8").innerHTML == a &&
          document.getElementById("9").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
          }
           return true
        } else
        if (document.getElementById("1").innerHTML == a &&
          document.getElementById("4").innerHTML == a &&
          document.getElementById("7").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
          }
        return true
        } else if (document.getElementById("2").innerHTML == a &&
          document.getElementById("5").innerHTML == a &&
          document.getElementById("8").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
          }
           return true
        } else if (document.getElementById("3").innerHTML == a &&
          document.getElementById("6").innerHTML == a &&
          document.getElementById("9").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
          }
           return true
        } else if (document.getElementById("1").innerHTML == a &&
          document.getElementById("5").innerHTML == a &&
          document.getElementById("9").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";
          }
           return true
        } else if (document.getElementById("3").innerHTML == a &&
          document.getElementById("5").innerHTML == a &&
          document.getElementById("7").innerHTML == a
        ) {
          alert(a + " is the winner");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";      
            
          }
           return true
        }
        else  if (postions_pl_length == 0)
        
          {alert("It is a draw");
          positions_pl = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          for (var i = 0; i < tiles.length; i++) {
            tiles[i].innerHTML = "";      
          }  
      }
        
   return false     
        
        
      }
    
  }
  
}
});