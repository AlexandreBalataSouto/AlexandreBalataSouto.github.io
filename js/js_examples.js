var language = {
    eng: {
        keyboardTitle: "Keyboard",
        keyboardDescription: "This is a virtual keyboard made with <strong>Javascrip</strong> and <strong>Jquery</strong>. Just click on the keys with the mouse or type the keys of your computer.",
        linkToKeyboard: "Try it",
        ticTacToeTitle: "Tic tac toe",
        ticTacToeDescription: "Classic tic tac toe game made by <strong>Javascrip</strong> and <strong>Jquery</strong>",
        linkToTicTacToe: "Play it :)"

    },
    es: {
        keyboardTitle: "Teclado",
        keyboardDescription: "Esto es un teclado virtual hecho con <strong>Javascrip</strong> y <strong>Jquery</strong>. Simplemente haga click en las teclas con el raton o pulse las teclas de su ordenador.",
        linkToKeyboard: "Pruébalo",
        ticTacToeTitle: "Tres en raya",
        ticTacToeDescription: "Clasico juego del tres en raya hecho con <strong>Javascrip</strong> and <strong>Jquery</strong>",
        linkToTicTacToe: "Juégalo :)"
    }
}

if (window.location.hash) {
    if (window.location.hash === "#es") {
        keyboardTitle.innerHTML = language.es.keyboardTitle;
        keyboardDescription.innerHTML = language.es.keyboardDescription;
        linkToKeyboard.innerHTML = language.es.linkToKeyboard;
        ticTacToeTitle.innerHTML = language.es.ticTacToeTitle;
        ticTacToeDescription.innerHTML = language.es.ticTacToeDescription;
        linkToTicTacToe.innerHTML = language.es.linkToTicTacToe;

    } else if (window.location.hash === "#eng") {
        keyboardTitle.innerHTML = language.eng.keyboardTitle;
        keyboardDescription.innerHTML = language.eng.keyboardDescription;
        linkToKeyboard.innerHTML = language.eng.linkToKeyboard;
        ticTacToeTitle.innerHTML = language.eng.ticTacToeTitle;
        ticTacToeDescription.innerHTML = language.eng.ticTacToeDescription;
        linkToTicTacToe.innerHTML = language.eng.linkToTicTacToe;

    }
}