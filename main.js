// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    /*apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx" */
      apiKey: "AIzaSyABEmaxV5UvgPOkLmXdTymFUUi_79hk0Aw",
      authDomain: "sendcodes-8dd6a.firebaseapp.com",
      databaseURL: "https://sendcodes-8dd6a.firebaseio.com",
      projectId: "sendcodes-8dd6a",
      storageBucket: "sendcodes-8dd6a.appspot.com",
      messagingSenderId: "601989680069",
      appId: "1:601989680069:web:47623f05ca505a2ce699ac"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var age = getInputVal('age');
    var height = getInputVal('height');
    var phone = getInputVal('phone');
    var complexion = getInputVal('complexion');
    var hair = getInputVal('hair');
    var eyes = getInputVal('eyes');
    var birthmarks = getInputVal('birthmarks');
    var gender = getInputVal('gender');
    var last_seen = getInputVal('last_seen');
    var build = getInputVal('build');
    var outfit = getInputVal('outfit');
  
    // Save message
    saveMessage(name, age, height, phone, complexion, hair, eyes, birthmarks, gender, last_seen, build, outfit);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, age, height, phone, complexion, hair, eyes, birthmarks, gender, last_seen, build, outfit){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      age:age,
      height:height,
      phone:phone,
      complexion:complexion,
      hair:hair,
      eyes:eyes,
      birthmarks:birthmarks,
      gender:gender,
      last_seen:last_seen,
      build:build,
      outfit:outfit
    });
  }