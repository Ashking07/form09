// don't forget to add database URL next time in your firebaseConfig !
const firebaseConfig = {
    apiKey: "AIzaSyA-v2bbKdbrga8xWmH-1vzIe0U0pe_2tMA",
    authDomain: "form09-f8764.firebaseapp.com",
    databaseURL: "https://form09-f8764-default-rtdb.firebaseio.com",
    projectId: "form09-f8764",
    storageBucket: "form09-f8764.appspot.com",
    messagingSenderId: "720672914752",
    appId: "1:720672914752:web:2869049f0f7aaba513cea5",
    measurementId: "G-J9WSHQB8P2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
let formMessage = firebase.database().ref("formMessage");

// listen for submit event //
document.getElementById("contactForm").addEventListener("submit", formSubmit);

// submit form
function formSubmit(e) {
  e.preventDefault();

  // get values
  const Firstname = getInputVal("fname");
  const LastName = getInputVal("sname");
  const Email = getInputVal("email");

  // save contact form data to firebase in database
  saveContactForm(Firstname, LastName, Email);

  // reset form after submission
  document.getElementById("contactForm").reset();

  // show alert message
  document.querySelector(".alert").style.display = "block";

  // hide alert message after seven seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 7000);
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save contact form data to firebase in database
function saveContactForm(Firstname, LastName, Email) {
   let newFormMessage = formMessage.push();
   newFormMessage.set({
    firstname: Firstname,
    lastname: LastName,
    email: Email,
  });
}
