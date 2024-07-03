function handleContact(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);
}