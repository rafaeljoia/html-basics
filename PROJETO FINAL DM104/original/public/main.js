  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6LInMsAFvCJ0xhJQYjYp5QTL3kxUiEgQ",
    authDomain: "dm104project.firebaseapp.com",
    databaseURL: "https://dm104project.firebaseio.com",
    projectId: "dm104project",
    storageBucket: "dm104project.appspot.com",
    messagingSenderId: "287380550676"
  };
  firebase.initializeApp(config);


var pass = document.getElementById('txtPassword');
  

//Paineis
var signupbox = document.getElementById('signupbox');
var loginbox = document.getElementById('loginbox');

//Formulario Login
var login_username = document.getElementById('login-username');
var login_password = document.getElementById('login-password');
//var btn-login = document.getElementById('btn-login');


//LOGIN - USUARIO JÁ CADASTRADO
document.getElementById("btn-login").addEventListener("click", function(){
	
//Verificar no Firebase se o usuário existe ou não

var ref = firebase.database().ref("users");
ref.orderByChild("cpf").equalTo(login_username.value).on("child_added", function(snapshot) {
   alert("FOi encontrado-----"+"fullname:"+ snapshot.fullName+"\ncpf:"+snapshot.cpf+"\nsenha:"+snapshot.senha);
});

	login_password.value = '';
	login_username.value = '';
});



var signupform = document.getElementById('signupform');
var fullName   = document.getElementById('fullName');
var cpf = document.getElementById('cpf');
var endereco = document.getElementById('endereco');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var senha2 = document.getElementById('senha2');

//var message    = document.getElementById('message');
var hiddenId   = document.getElementById('hiddenId');


//LOGIN - NOVO CADASTRO
signupform.addEventListener('submit', (e) => {
  e.preventDefault();
  
 if((senha.value == ""|| senha2.value == "")|| (senha.value != senha2.value)){
     alert('Por favor, entre com a senha correta');

  }else{

  var uuid = uuidv4();
usersRef = firebase.database().ref("users").child("user_"+uuid);

  usersRef.set({
       fullName: fullName.value,
	     cpf:cpf.value,
	     endereco:endereco.value,
	     email:email.value,
	     senha:senha.value
               });

  fullName.value = '';
  cpf.value = '';
  endereco.value = '';
  email.value = '';
  senha.value = '';
  senha2.value = '';
  
  swal({ 
  title: "Cliente DM104 Cadastrado",
  text: "Clique no botão para continuar as compras!",
  type: "success" 
  },
  function(){
	  
	  document.getElementById('signupbox').style.display = 'none';
    document.getElementById('loginbox').style.display = 'block';
 
});
   
 } });



function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}




function reviewTemplate({fullName, message}) {
  return `
    <div class='fullName'>${fullName}</div>
    <div class='message'>${message}</div>
    <button class='delete'>Delete</button>
    <button class='edit'>Edit</button>
  `
};