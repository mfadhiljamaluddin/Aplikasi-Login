/** @module Logi-Script */
/**
* Membuat variabel loginFormElement untuk tampilan Form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel inputEmailElement untuk tampilan input Email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');
 
 
/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {String}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {String}
*/
const expectedPassword = 'superpassword';
 
 
/* Comment :  Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button di tekan.
  * @constant {String}
  */
  const email = inputEmailElement.value;

  /**
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button di tekan.
  * @constant {String}
  */
  const password = inputPasswordElement.value;
  
  
   /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka prograng akan berpindah ke halaman home. */
    goToHome();
    
  } else {
    
    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
    
  }
});
