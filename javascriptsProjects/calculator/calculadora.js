var buttons = document.getElementsByTagName("button");
var screen = document.getElementById("display");
var box = [];
var a = 0;
var b = 0;
var action = "";
var isFloat = false;

DisplayScreen(0);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (buttons[i].value == "C") {
            ResetCalculator();

        } else if (buttons[i].value == "+" || buttons[i].value == "-" || buttons[i].value == "x" || buttons[i].value == "/") {
            DisplayScreen("");
            box = [];
            action = buttons[i].value;

        } else if (buttons[i].value == "=") {
            a = Operation(a, action, b);
            action = "";
            isFloat = false;
            box = [];

        } else if (buttons[i].value == "plus_minus") {

            if (action == "") {
                if (box.length > 0) {
                    a = box.join('');
                    a = parseFloat(a);
                }
                a *= -1;
                box.pop();
                box.push(a);
                if (a.toString().length <= 14) {
                    DisplayScreen(a);
                }
            } else {
                if (box.length > 0) {
                    b = box.join('');
                    b = parseFloat(b);
                }
                b *= -1;
                box.pop();
                box.push(b);
                if (b.toString().length <= 14) {
                    DisplayScreen(b);
                }
            }
        } else if (buttons[i].value == "square_root") {
            if (action == "") {
                if (box.length > 0) {
                    a = box.join('');
                    a = parseFloat(a);
                }
                if (Math.sign(a) == -1) {
                    ResetCalculator()
                    DisplayScreen("Invalid");
                } else {
                    a = Math.sqrt(a);
                    if (a.toString().length <= 14) {
                        box.pop();
                        box.push(a);
                        DisplayScreen(a);
                    } else {
                        a = a.toFixed(12);
                        box.pop();
                        box.push(a);
                        DisplayScreen(a);
                    }
                }
            } else {
                if (box.length > 0) {
                    b = box.join('');
                    b = parseFloat(b);
                }
                if (Math.sign(b) == -1) {
                    ResetCalculator()
                    DisplayScreen("Invalid");
                } else {
                    b = Math.sqrt(b);
                    if (b.toString().length <= 14) {
                        box.pop();
                        box.push(b);
                        DisplayScreen(b);
                    } else {
                        b = b.toFixed(12);
                        box.pop();
                        box.push(b);
                        DisplayScreen(b);
                    }
                }
            }
        } else if (buttons[i].value == "." && isFloat == false) {
            box.push(buttons[i].value);
            isFloat = true;
        } else {
            box.push(buttons[i].value);

            if (action == "") {
                a = box.join('');
                a = parseFloat(a);

                if (a.toString().length <= 14) {
                    DisplayScreen(a);
                } else {
                    box.pop();
                }
            } else {
                b = box.join('');
                b = parseFloat(b);
                if (b.toString().length <= 14) {
                    DisplayScreen(b);
                } else {
                    box.pop();
                }
            }
        }
    });
}

function DisplayScreen(result) {
    screen.innerHTML = "";
    let node = document.createElement("label");
    let textnode = document.createTextNode(result);
    node.appendChild(textnode);
    document.getElementById("display").appendChild(node);
}

function ResetCalculator() {
    box = [];
    a = 0;
    b = 0;
    action = "";
    isFloat = false;
    DisplayScreen(0);
}

function Operation(a, action, b) {

    switch (action) {
        case "+":
            a = a + b;
            break;
        case "-":
            a = a - b;
            break;
        case "x":
            a = a * b;
            break;
        case "/":
            a = a / b;
            break;
    }

    if (isFloat) {
        a = a.toFixed(2);
    }

    if (a.toString().length >= 15 && action != "/") {
        a = "MAX DIGIT";
    }else if(action == "/" && a.toString().length >= 15){
        a = a.toFixed(11);
    }

    DisplayScreen(a);

    return a;
}