function handleSubmit(e){

    e.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const user = {
        name,
        email
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(user);

    localStorage.setItem('users',JSON.stringify(users));

    window.location.href = 'userList.html'

}


const form = document.getElementById('form');

form.addEventListener('submit',handleSubmit)