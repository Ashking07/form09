const firebaseConfig = {
    apiKey: "AIzaSyA-v2bbKdbrga8xWmH-1vzIe0U0pe_2tMA",
    authDomain: "form09-f8764.firebaseapp.com",
    projectId: "form09-f8764",
    storageBucket: "form09-f8764.appspot.com",
    messagingSenderId: "720672914752",
    appId: "1:720672914752:web:2869049f0f7aaba513cea5",
    measurementId: "G-J9WSHQB8P2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    // Save message
    saveMessage(name, company, email, phone, message);
    
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    // Clear form
    document.getElementById('contactForm').reset();
    }
