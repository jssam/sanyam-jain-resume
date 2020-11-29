// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDM5i3RhGsYaWMSxoSpGvxk5Ep1no_WO78",
    authDomain: "sanyamjain-1a4f0.firebaseapp.com",
    databaseURL: "https://sanyamjain-1a4f0.firebaseio.com",
    projectId: "sanyamjain-1a4f0",
    storageBucket: "sanyamjain-1a4f0.appspot.com",
    messagingSenderId: "78984468409",
    appId: "1:78984468409:web:51c66eb346bcc3e88f4868",
    measurementId: "G-WZWF948JFV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messages = firebase.database().ref('messages');
  var storageRef = firebase.storage().ref();


document.getElementById("contact").addEventListener('submit',submitForm);
function submitForm(sam){
    sam.preventDefault();
    var name = getin('name');
    var email = getin('email');
    var subject = getin('subject');
    var message = getin('message');
    
savemessages(name,email,subject,message);

alert( `hello ${name} your response is submitted!!,thanks for your time`);
}

function getin(id){
    return document.getElementById(id).value;
}

///save message to firebase
function savemessages(name,email,subject,message){
var userid = (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    firebase.database().ref('users/' + userid).set({
        name: name,
        email:email,
        subject:subject,
        message:message
    });
  
 
}