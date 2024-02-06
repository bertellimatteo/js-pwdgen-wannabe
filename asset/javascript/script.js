function generaPassword() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let favoriteColor = document.getElementById('favoriteColor').value;
    let password = firstName + lastName + favoriteColor + '23';
    document.getElementById('password').textContent = password;
}
