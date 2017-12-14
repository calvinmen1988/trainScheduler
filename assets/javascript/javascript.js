// Initialize Firebase
  var config = {
      apiKey: "AIzaSyDjJdoUHZolZHJPwoH6_7D0SwzZOLgc3lo",
      authDomain: "trainscheduler-1e5ce.firebaseapp.com",
      databaseURL: "https://trainscheduler-1e5ce.firebaseio.com",
      projectId: "trainscheduler-1e5ce",
      storageBucket: "trainscheduler-1e5ce.appspot.com",
      messagingSenderId: "745186173929"
    };
    
    firebase.initializeApp(config);

// database ref
var database = firebase.database();

//on document after intial firebase
$(document).ready(function() {

//on click adding to inputted "trains"
  $("#submitBtn").on("click", function () {
    event.preventDefault();
    // grab user input from form and add its to variable
      var trainName = $("trainNameInput").val();
      var destination = $("destinationInput").val();
      var frequency = $("frequencyInput").val();
      var nextArrival = $("nextArrivalInput").val();
      var minuteAway = $("minuteAwayInput").val();

//validation of variables above
  console.log(trainName);
  console.log(destination);
  console.log(frequency);
  console.log(nextArrival);
  console.log(minuteAway);

//local object to push to firebase. object: key, value
    var newTrain = {
      name: trainName,
      desitination: destination,
      frequency: frequency,
      nextArrival: nextArrivalInput,
      minuteAway: minuteAwayInput,
    }

//pushing info to Firebase
  database.push(newTrain);

//clear input text box 
  $("trainNameInput").val("");
  $("destinationInput").val("");
  $("frequencyInput").val("");
  $("nextArrivalInput").val("");
  $("minuteAwayInput").val("");

  return false; //stops executing of function
  
  });

  database.on(newFunction(), function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var firebaseName = childSnapshot.val().name;
    var firebaseDestination = childSnapshot.val().destination;
    var firebaseFrequency = childSnapshot.val().frequency;
    var firebaseNextArrival = childSnapshot.val().nextArrival;
    var firebaseMinuteAway = childSnapshot.val().minuteAway;
  
    //add to html
  $("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
    
  });
    
    var provider = new firebase.auth.GoogleAuthProvider();
    

});

//new function from child added
function newFunction() {
    return "child_added";
}
