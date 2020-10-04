const p = document.querySelector('p');
let mathSign = '',
    num1 = 0,
    num2 = 0,
    result = 0,
    igulWasPres = false;

const checker = () => { //estan definidos nuno y ndos?
    return (Number(num1) && Number(num2)) != 0;
};

const button_ = document.querySelectorAll('button');

function ON() {
    for (var i = 0; i < button_.length; i++) {
        if (button_[i].classList[0] == 'N') { //Numeros
            button_[i].setAttribute('onclick', `changeN(${i})`);
        } else if (button_[i].id == 'cleanAll') {
            button_[i].addEventListener('click', () => {
                cleanAll();
            });
        } else if (button_[i].id == 'delete') {
            button_[i].addEventListener('click', () => {
                detele();
            });
        } else if (button_[i].id == 'equals') {
            button_[i].addEventListener('click', () => {
                equals();
            });
        } else {
        }
    }
}

function changeMathSign(mS) {
    mathSign = mS;
    display();
    if (checker() && !igulWasPres) {
        operation(mathSign, num1, num2);
        num1 = result;
        num2 = 0;
        display();
    }
}

function display() {
    p.textContent = `${num1}  ${mathSign}`;
    if (mathSign !== '') {
        p.textContent += ` ${num2}`;
    }
    if (p.textContent == '  ') {
        p.textContent = '0'
    }
}

function operation(mS, v1, v2) {

    const addition = (v1, v2) => {
        return Number(v1) + Number(v2)
    },
        subtraction = (v1, v2) => {
            return Number(v1) - Number(v2)
        },
        multiplication = (v1, v2) => {
            return Number(v1) * Number(v2)
        },
        division = (v1, v2) => {
            return Number(v1) / Number(v2)
        };
    switch (mS) {
        case '+':
            result = addition(v1, v2);
            break;
        case '-':
            result = subtraction(v1, v2);
            break;
        case '*':
            result = multiplication(v1, v2);
            break;
        case '/':
            result = division(v1, v2);
            break;
        default:
            break;
    }
    
}

function changeN(i) {
    if (mathSign != '') {
        if (igulWasPres) {
            num2 = 0;
            igulWasPres = false;
        }
        num2 += button_[i].innerHTML;
    } else {
        num1 += button_[i].innerHTML
    }

    //Elimina el 0 a la izquierda
    if (num1[0] == 0) num1 = num1.slice(1);
    if (num2[0] == 0) num2 = num2.slice(1);

    display();
}

function detele() {
    if (mathSign != '') {
        num2 = num2.slice(0, num2.length - 1);
    } else {
        num1 = num1.slice(0, num1.length - 1);
    }
    display();
}

function equals() {
    if (mathSign != '') {
        operation(mathSign, num1, num2);
        num1 = result;
        igulWasPres = true;
        p.textContent = result; //esto hay que cambiarlo de citio
    }
}

function cleanAll() {
    num1 = num2 = result = 0;
    mathSign = '';
    igulWasPres = false;
    p.textContent = 0;
}

ON();