document.getElementById('contact-form').addEventListener('submit', function(event)
{
    event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

if (name && email && message) {
    alert(`Thank ypu, ${name}! Your messafe has been sent.`)
    document.getElementById('contact-form').reset();
}
else{
    alert('Please fill in all fields.');
}
});