let isValid = true;

function verify(isValid) {
    if (isValid) {
        return true;
    } else{
        return false;
    }
}

// Com ternario
const result = isValid ? true : false;

console.log(verify(isValid))

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;
