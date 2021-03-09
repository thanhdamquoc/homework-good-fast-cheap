let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn-3");
button1.addEventListener("click",switchButton);
button2.addEventListener("click",switchButton);
button3.addEventListener("click",switchButton);
function switchButton() {
    let button1IsChecked = button1.checked;
    let button2IsChecked = button2.checked;
    let button3IsChecked = button3.checked;
    let buttonClicked = this.id;
    switch (buttonClicked) {
        case "btn-1":
            if (button1IsChecked) {
                if ((button2IsChecked) && (button3IsChecked)) {
                    button3.checked = false;
                }
            }
            break;
        case "btn-2":
            if (button2IsChecked) {
                if ((button3IsChecked) && (button1IsChecked)) {
                    button1.checked = false;
                }
            }
            break;
        case "btn-3":
            if (button3IsChecked) {
                if ((button1IsChecked) && (button2IsChecked)) {
                    button2.checked = false;
                }
            }
            break;
    }
}
