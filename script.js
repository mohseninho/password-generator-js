let passwordLengthTXT = document.querySelector(".password-length");
let passwordWrapper = document.querySelector(".password-wrapper");
let passwordLength = 10;
let isGenerated = false;

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
    isGenerated = true;
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
    if(isGenerated){
        passwordWrapper.select();
        passwordWrapper.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(passwordWrapper.value);
        document.querySelector(".copied").style.animation = "popup-in 1s ease";
        setTimeout(() => {
            document.querySelector(".copied").style.animation = "popup-out 1s ease";
        }, 900);
    }else{
        alert("please generate a password!");
    }
}
