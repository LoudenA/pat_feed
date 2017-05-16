function checkIt() {
  // Initialize scores
  var kinda = 0;
  var somewhat = 0;
  var very = 0;
  var not = 0;
  var notimg = "<img src='img/not.jpg'>"
  var veryimg = "<img src='img/very.jpg'>"
  var somewhatimg = "<img src='img/somewhat.jpg'>"
  var kindaimg = "<img src='img/kinda.jpg'>"

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'kinda') {
        kinda++;
      }
      else if (e.value == 'somewhat') {
        somewhat++;
      }
      else if (e.value == 'very') {
        very++;
      }
      else if (e.value == 'not') {
        not++;
      }
    }

  }

  // Determine result
  var counts = "Kinda: " + kinda + ", " +
               "Somewhat: " + somewhat  + ", " +
               "Not: " + not  + ", " +
               "Very: " + very;




  // What is the highest value?
  var max = Math.max(kinda, somewhat, not, very);

  // Form a message
  var message;

  if (max == not) {
     message0 = "How Lazy Are You?"
     message1 = "Not Lazy"
     message2 = "You're not a couch potato. Maybe you should try it one day..."
     message3 = notimg

  }
  else if (max == somewhat) {
    message0 = "How Lazy Are You?"
    message1 = "Somewhat lazy"
    message2 = "You aren't too lazy!"
    message3 = somewhatimg

  }
  else if (max == kinda) {
    message0 = "How Lazy Are You?"
    message1 = "Kinda lazy"
    message2 = "Um, you could stand to do more."
    message3 = kindaimg
  }
  else if (max == very) {
    message0 = "How Lazy Are You?"
    message1 = "Very lazy"
    message2 = "Wow, I thought I was lazy..."
    message3 = veryimg
  }







  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-title').innerHTML = message0;
  document.getElementById('result-heading').innerHTML = message1;
  document.getElementById('result-text').innerHTML = message2;
  document.getElementById('result-img').innerHTML = message3;



}
