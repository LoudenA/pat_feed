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
  var title = "How Lazy Are You?";
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

  // Form a heading
  var heading;

  if (max == not) {
   heading = "You're not a couch potato...maybe you should try it sometime.";

  }
  else if (max == somewhat) {
  heading = "You're not too lazy";

  }
  else if (max == kinda) {
  heading = "Eh. You could stand to do more.";
  }
  else if (max == very) {
  heading = "Wow...I thought I was lazy.";
  }
  
  
  // Form an image
  var image;

  if (max == not) {
   image= "<img src='img/notimg.jpg'>";

  }
  else if (max == somewhat) {
  image = "<img src='img/somewhatimg.jpg'>";

  }
  else if (max == kinda) {
  image = "<img src='img/kindaimg.jpg'>";
  }
  else if (max == very) {
  image = "<img src='img/veryimg.jpg'>";
  }







  // Display result
  document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-img').innerHTML = image;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;

  


}
