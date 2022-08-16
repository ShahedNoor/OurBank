// Login form validation script

document.getElementById('btn-submit').addEventListener('click', function () {
    const useremail = document.getElementById('user');
    const username = useremail.value;
    const userpass = document.getElementById('pass');
    const password = userpass.value;
    if (username == 'shahednoor28@gmail.com' && password === '445414') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Wrong Password!');
    }
})