var language = {
    eng: {
        keyboardTitle: "Keyboard",
        keyboardDescription: "This is a virtual keyboard made with <strong>Javascrip</strong> and <strong>Jquery</strong>. Just click on the keys with the mouse or type the keys of your computer.",
        linkToKeyboard: "Try it",
        projectDate05:"Project date: December 2018",
        ticTacToeTitle: "Tic tac toe",
        ticTacToeDescription: "Classic tic tac toe game made with <strong>Javascrip</strong> and <strong>Jquery</strong>",
        linkToTicTacToe: "Play it :)",
        projectDate06:"Project date: December 2018",
        calculatorTitle: "Calculator",
        calculatorDescription: "A calculator made with <strong>Javascrip</strong>",
        linkToCalculator: "Calculate",
        projectDate07: "Project date: August 2020"

    },
    es: {
        keyboardTitle: "Teclado",
        keyboardDescription: "Esto es un teclado virtual hecho con <strong>Javascrip</strong> y <strong>Jquery</strong>. Simplemente haga click en las teclas con el raton o pulse las teclas de su ordenador.",
        linkToKeyboard: "Pruébalo",
        projectDate05:"Fecha del proyecto: Diciembre 2018",
        ticTacToeTitle: "Tres en raya",
        ticTacToeDescription: "Clasico juego del tres en raya hecho con <strong>Javascrip</strong> and <strong>Jquery</strong>",
        linkToTicTacToe: "Juégalo :)",
        projectDate06:"Fecha del proyecto: Diciembre 2018",
        calculatorTitle: "Calculadora",
        calculatorDescription: "Una calculadora hecha con <strong>Javascrip</strong>",
        linkToCalculator: "Calcular",
        projectDate07: "Fecha del proyecto: August 2020"
    }
}

if (window.location.hash) {
    if (window.location.hash === "#es") {
        keyboardTitle.innerHTML = language.es.keyboardTitle;
        keyboardDescription.innerHTML = language.es.keyboardDescription;
        linkToKeyboard.innerHTML = language.es.linkToKeyboard;
        projectDate05.innerHTML = language.es.projectDate05;
        ticTacToeTitle.innerHTML = language.es.ticTacToeTitle;
        ticTacToeDescription.innerHTML = language.es.ticTacToeDescription;
        linkToTicTacToe.innerHTML = language.es.linkToTicTacToe;
        projectDate06.innerHTML = language.es.projectDate06;
        calculatorTitle.innerHTML = language.es.calculatorTitle;
        calculatorDescription.innerHTML = language.es.calculatorDescription;
        linkToCalculator.innerHTML = language.es.linkToCalculator;
        projectDate07.innerHTML = language.es.projectDate07;

    } else if (window.location.hash === "#eng") {
        keyboardTitle.innerHTML = language.eng.keyboardTitle;
        keyboardDescription.innerHTML = language.eng.keyboardDescription;
        linkToKeyboard.innerHTML = language.eng.linkToKeyboard;
        projectDate05.innerHTML = language.eng.projectDate05;
        ticTacToeTitle.innerHTML = language.eng.ticTacToeTitle;
        ticTacToeDescription.innerHTML = language.eng.ticTacToeDescription;
        linkToTicTacToe.innerHTML = language.eng.linkToTicTacToe;
        projectDate06.innerHTML = language.eng.projectDate06;
        calculatorTitle.innerHTML = language.eng.calculatorTitle;
        calculatorDescription.innerHTML = language.eng.calculatorDescription;
        linkToCalculator.innerHTML = language.eng.linkToCalculator;
        projectDate07.innerHTML = language.eng.projectDate07;

    }
}