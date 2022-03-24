const toggleEye = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");


toggleEye.addEventListener(`click`, function (e){
    const type = password.getAttribute("type") === "password" ? "text": "password"; 
password.setAttribute (`type`, type);
    this.classList.toggle("fa-eye-slash");
console.log(toggleEye)
});