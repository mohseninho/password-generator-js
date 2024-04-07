let passwordLengthTXT = document.querySelector(".password-length");
let passwordWrapper = document.querySelector(".password-wrapper");
let passwordLength = 10;

function setPassLength(value) {
    passwordLength = value;
    passwordLengthTXT.textContent = value;
}

function generate() {
    const upper = document.querySelector("#upper").checked;
    const lower = document.querySelector("#lower").checked;
    const num = document.querySelector("#num").checked;
    const sign = document.querySelector("#sign").checked;
    const password = generatePassword(passwordLength, upper, lower, num, sign);
    passwordWrapper.value = password;
}

function generatePassword(length, upper, lower, num, signs) {
    let chars = "";
    let password = [];
    if (upper) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lower) {
        chars += "abcdefghijklmnopqrstubwxyz";
    }

    if (num) {
        chars += "0123456789";
    }

    if (signs) {
        chars += "!@#$%^&*";
    }

    while (password.length < length) {
        const character = chars[Math.floor(Math.random() * chars.length)];
        password.push(character);
    }

    return password.join("");
}

function copyOnClick() {
    passwordWrapper.select();
    passwordWrapper.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordWrapper.value);
    alert("password copied");
}
