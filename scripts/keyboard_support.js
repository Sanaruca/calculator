window.addEventListener('keydown', (e) => {
    const key_ = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key_) return; // stop the function
    console.log(key_);
    console.log(e.keyCode);

    for (let i = 0; i < button_.length; i++) {
        const button = button_[i];

        if (button.dataset.key == e.keyCode) {

            if (e.keyCode >= 48 && e.keyCode <= 57)//Estas son las teclas numericas
                changeN(i);

            switch (key_.id) { //funtions
                case 'delete':
                    detele();
                    break;
                case 'equals':
                    equals();
                    break;
                case 'cleanAll':
                    cleanAll();
                    break;
            }

            switch (key_.classList[1]) { //MathSigns
                case 'add':
                    changeMathSign('+');
                    break;
                case 'subs':
                    changeMathSign('-');
                    break;
                case 'by':
                    changeMathSign('*');
                    break;
                case 'between':
                    changeMathSign('/');
                    break;
                default:
                    break;
            }

        }

    }

})
