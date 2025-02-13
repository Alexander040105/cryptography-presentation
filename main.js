//reverse encryption
const pythonSnippet1 = `
user_password = input("Enter the password: ")
def reverse_cipher(password):
    pass_reversed = ""
    increment = len(password) - 1
    while increment >= 0:
        pass_reversed = pass_reversed + password[increment]
        increment = increment - 1
    return pass_reversed

encrypted_password = reverse_cipher(user_password)  
print(f"The encrypted password is {encrypted_password}")

decrypted_password = reverse_cipher(encrypted_password)
print(f"The decrypted password is {decrypted_password}")
    
`;

//ceasar encryption
const pythonSnippet2 = `
user_password2 = input("Enter the password to encrypt: ")
shift = 1
def ceasar_cipher(password, shift):
    result = ""
    for characters in password:
        if characters.isupper():
            result += chr((ord(characters) + shift - 65)% 26 + 65)
        elif characters.islower():
            result += chr((ord(characters) + shift - 97)% 26 + 97)
        else:
            result += characters
    return result
    
encrypted_password = ceasar_cipher(user_password2, shift)  
print(f"The encrypted password is {encrypted_password}")
`;

//rot13 encryption
const pythonSnippet3 = `
rot13 = {
    "A" : "N", "B" : "O", "C" : "P", "D" : "Q", "E" : "R",
    "F" : "S", "G" : "T", "H" : "U", "I" : "V", "J" : "W",
    "K" : "X", "L" : "Y", "M" : "Z", "N" : "A", "O" : "B",
    "P" : "C", "Q" : "D", "R" : "E", "S" : "F", "T" : "G",
    "U" : "H", "V" : "I", "W" : "J", "X" : "K", "Y" : "L",
    "Z" : "M", "a" : "n", "b" : "o", "c" : "p", "d" : "q",
    "e" : "r", "f" : "s", "g" : "t", "h" : "u", "i" : "v",
    "j" : "w", "k" : "x", "l" : "y", "m" : "z", "n" : "a",
    "o" : "b", "p" : "c", "q" : "d", "r" : "e", "s" : "f",
    "t" : "g", "u" : "h", "v" : "i", "w" : "j", "x" : "k",
    "y" : "l", "z" : "m"
}


def rot13_encryption(password):
    encrypted_string = ""
    for characters in password:
        if characters in rot13.keys():
            encrypted_string += rot13[characters]
        else:
            encrypted_string += characters
    return encrypted_string
    
user_password3 = input("Enter the password to encrypt: ")
encrypted_password = rot13_encryption(user_password3)
print(f"The encrypted password is {encrypted_password}")
`;

const codeEditor1 = document.getElementById('editor1');
const codeEditor2 = document.getElementById('editor2');
const codeEditor3 = document.getElementById('editor3');

const cipher1Copy = document.getElementById('c1-button'); 
const cipher2Copy = document.getElementById('c2-button');
const cipher3Copy = document.getElementById('c3-button');

const plainDescrip = document.getElementById('plain-descrip');
const cipherDescrip = document.getElementById('cipher-descrip');
const encryptionDescrip = document.getElementById('encryption-descrip');
const decryptionDescrip = document.getElementById('decryption-descrip');

const plainText = document.getElementById('plain-text');
const cipherText = document.getElementById('cipher-text');
const encryptionText = document.getElementById('encryption-text');
const decryptionText = document.getElementById('decryption-text');

const plainHeader = document.getElementById('plain-header');
const cipherHeader = document.getElementById('cipher-header');
const encryptionHeader = document.getElementById('encryption-header');
const decryptionHeader = document.getElementById('decryption-header');


codeEditor1.value = pythonSnippet1;
codeEditor1.editor.updateOptions({readOnly: true});

codeEditor2.value = pythonSnippet2;
codeEditor2.editor.updateOptions({readOnly: true});

codeEditor3.value = pythonSnippet3;
codeEditor3.editor.updateOptions({readOnly: true});

const showDescription = (event) => {
    const clickedDiv = event.currentTarget.id;
    if (clickedDiv === 'plain-text'){
        plainDescrip.style.display = 'flex';
        plainHeader.style.fontSize = '1.25rem';
        plainText.style.backgroundColor = '#0DF205';
        hideAfter5Seconds(plainDescrip, plainHeader, plainText);
    } else if(clickedDiv === 'cipher-text'){
        cipherDescrip.style.display = 'flex';
        cipherHeader.style.fontSize = '1.25rem';
        cipherText.style.backgroundColor = '#0DF205'
        hideAfter5Seconds(cipherDescrip, cipherHeader, cipherText);
    } else if(clickedDiv === 'encryption-text'){
        encryptionDescrip.style.display = 'flex';
        encryptionHeader.style.fontSize = '1.25rem';
        encryptionText.style.backgroundColor = '#0DF205';
        hideAfter5Seconds(encryptionDescrip, encryptionHeader, encryptionText);
    } else if(clickedDiv === 'decryption-text'){
        decryptionDescrip.style.display = 'flex';
        decryptionHeader.style.fontSize = '1.25rem';
        decryptionText.style.backgroundColor = '#0DF205';
        hideAfter5Seconds(decryptionDescrip, deecryptionHeader, decryptionText);
    }
}

const backToDefaultButton = (defaultButton) => {
    setTimeout(() => {
        defaultButton.style.backgroundColor = '#f2f2f2';
    }, 2000);
}

const copyToClipboard = (event) => {
    const clickedButton = event.currentTarget.id;
    if(clickedButton === 'c1-button'){
        navigator.clipboard.writeText(pythonSnippet1);
        cipher1Copy.style.backgroundColor = '#0DF205';
        backToDefaultButton(cipher1Copy)
        alert("Copied the code for Reverse Encryption");
    }else if(clickedButton === 'c2-button'){
        navigator.clipboard.writeText(pythonSnippet2);
        cipher2Copy.style.backgroundColor = '#0DF205';
        backToDefaultButton(cipher2Copy)
        alert("Copied the code for Ceasar Cipher");
    }else if(clickedButton === 'c3-button'){
        navigator.clipboard.writeText(pythonSnippet3);
        cipher3Copy.style.backgroundColor = '#0DF205';
        backToDefaultButton(cipher3Copy)
        alert("Copied the code for ROT13");
    }
}


plainText.addEventListener('click', showDescription);
cipherText.addEventListener('click', showDescription);
encryptionText.addEventListener('click', showDescription);
decryptionText.addEventListener('click', showDescription);

cipher1Copy.addEventListener('click', copyToClipboard);
cipher2Copy.addEventListener('click', copyToClipboard);
cipher3Copy.addEventListener('click', copyToClipboard);

const hideAfter5Seconds = (currentDescrip, currentHeader, currentText) => {
    setTimeout(() => {
        currentDescrip.style.display = 'none';
        currentHeader.style.fontSize = '1.25rem';
        currentText.style.backgroundColor = '#f2f2f2';
    }, 5000);
};


