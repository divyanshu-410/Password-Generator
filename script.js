document.getElementById('generate-button').addEventListener('click', function() {
    const length = parseInt(document.getElementById('password-length').value);
    const useUppercase = document.getElementById('use-uppercase').checked;
    const useLowercase = document.getElementById('use-lowercase').checked;
    const useDigits = document.getElementById('use-digits').checked;
    const useSpecial = document.getElementById('use-special').checked;

    if (length < 1) {
        alert("Password length should be at least 1");
        return;
    }

    let characters = '';
    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useDigits) characters += '0123456789';
    if (useSpecial) characters += '!@#$%^&*';

    if (characters.length === 0) {
        alert("Select at least one character type");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password-output').value = password;
});

document.getElementById('exit-button').addEventListener('click', function() {
    window.close(); // This will only work if the page was opened by a script
});