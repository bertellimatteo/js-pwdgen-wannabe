function generaPassword() {
    let nome = document.getElementById('firstName').value;
    let cognome = document.getElementById('lastName').value;
    let colore = document.getElementById('favoriteColor').value;
    let password = nome + cognome + colore + '23';
    document.getElementById('password').textContent = password;
}
