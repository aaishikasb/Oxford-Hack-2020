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
console.log(firebase)

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
let e=document.getElementById("demo");
window.onload=function (){
  return firebase.database().ref('/messages/').once('value').then(function(snapshot) {
    //console.log(snapshot.val());
    let list=snapshot.val();
    console.log(typeof(list));
    snapshot.forEach(function(item) {
      console.log(item.val()["age"]);
      let age=(item.val()['age']);
      let name=(item.val()['name']);
      let complexion=(item.val()['complexion']);
      let gender=(item.val()['gender']);
      let birthmarks=(item.val()['birthmarks']);
      let build=(item.val()['build']);
      let eyes=(item.val()['eyes']);
      let last_seen=(item.val()['last_seen']);
      let hair=(item.val()['hair']);
      let height=(item.val()['height']);
      let outfit=(item.val()['outfit']);
      let phone=(item.val()['phone']);
      //let photo=(item.val()['photo']);
     // let z=(item.val()["complexion"]);
     // e.innerHTML+=(y+'\n'+z+'<br>');
     e.innerHTML+=('<fieldset><legend>Missing</legend>'+'Name: '+name+'  '+'Age: '+age+'  '+'Gender: '+gender+'  '+'Complexion: '+complexion+'  '+'Birthmarks: '+birthmarks+'  '+'Build: '+build+'  '+'Eyes: '+eyes+'  '+'Hair: '+hair+'  '+'Height: '+height+'  '+'Phone: '+phone+'  '+'Outfit: '+outfit+'  '+'Last Seen: '+last_seen+'</fieldset');
     e.innerHTML+=('<br>')
    });
    // ...
  });
  //console.log("Hi");
};

function myFunction(item) {
  console.log(item);
};

function uploadImage(){
  const ref = firebase.storage().ref();

  const file = document.querySelector("#photo").files[0];

  const name = new Date() + '-' + file.name

  const metadata = {
    contentType:file.type
  }

  //Trying to Retrieve Data
  messagesRef.on('value', gotData, errData);

  const task = ref.child(name).put(file,metadata)

  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => {
    console.log(url)
    alert("Image Upload Successful")
    const image = document.querySelector('#image')
    image.src = url
  })

}

function gotData(data) {
  //Data being fetched.
  console.log(data.val());
  //console.log(Object.keys(data.val()));
}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

// Reference messages collection
//var messagesRef = firebase.database().ref('messages');

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