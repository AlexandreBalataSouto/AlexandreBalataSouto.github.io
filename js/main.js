var language = {
    eng: {
        welcome: "Welcome everyone!",
        title: "Alexandre M. Balata Souto's Portfolio",
        javascript: "Javascript examples.",
        goToExamples: "Go to examples",
        kdb: "Here is my Superior Grade Formative Course final project of web application development. The idea was to help a small karate dojo of Lanzarote with the management of the students data, asistence and events. This project was made with <strong>Laravel</strong>, <strong>Materialize</strong> and it´s <strong>responsive.</strong><br><br><strong>Login Access:</strong><br>Email: kdb@example.com Password: csas1234",
        goToKDB: "Go to KDB",
        projectDate04: "Project date: June 2020",
        vueLaravel: "A SPA (single page application) made with the javascript framework <strong>Vue.js</strong> and the php framework <strong>Laravel</strong>",
        goToVueLaravel: "Go to Vue-Laravel",
        projectDate08: "Project date: August 2020",
        vueQuiz: "This is a quiz about cinema made with the javascript framework <strong>Vue.js</strong>. All test questions are from here: <a href='https://opentdb.com/'>Open Trivia Database</a>",
        goToVueQuiz: "Go to Vue Quiz",
        projectDate09: "Project date: September 2020",
        
    },
    es: {
        welcome: "¡Bienvenidos todos!",
        title: "Portfolio de Alexandre M. Balata Souto",
        javascript: "Ejemplos de Javascript.",
        goToExamples: "Ir a ejemplos",
        kdb: "Aquí está mi proyecto final del Ciclo Formativo de Grado Superior de desarrollo de aplicaciones web. La idea era ayudar a un pequeño dojo de kárate de Lanzarote con la gestión de los datos, asistencias y eventos de los alumnos. Este proyecto se hizo con <strong>Laravel</strong>, <strong>Materialize</strong> y es <strong>responsive.</strong><br><br><strong>Acceso de inicio de sesión:</strong><br>Email: kdb@example.com Contraseña: csas1234",
        goToKDB: "Ir a KDB",
        projectDate04: "Fecha del proyecto: Junio 2020",
        vueLaravel: "Una SPA (single page application) hecha con el framework de javascript <strong>Vue.js</strong> y el framework de php <strong>Laravel</strong>",
        goToVueLaravel: "Ir a Vue-Laravel",
        projectDate08: "Fecha del proyecto: Agosto 2020",
        vueQuiz: "Esto es un test sobre cine hecho con el framework de javascript <strong>Vue.js</strong>. Todas las preguntas del test son de aqui: <a href='https://opentdb.com/'>Open Trivia Database</a>",
        goToVueQuiz: "Ir a Vue Quiz",
        projectDate09: "Fecha del proyecto: Septiembre 2020",
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    if (!window.location.hash) {
        window.location.href = '#eng';
        location.reload();
    }
});

if (window.location.hash) {
    if (window.location.hash === "#es") {
        welcomeId.innerHTML = language.es.welcome;
        titleId.innerHTML = language.es.title;
        javascriptId.innerHTML = language.es.javascript;
        goToExamples.innerHTML = language.es.goToExamples;
        goToExamples.href = "javascript/index.html#es";
        kdbId.innerHTML = language.es.kdb;
        goToKDB.innerHTML = language.es.goToKDB;
        projectDate04.innerHTML = language.es.projectDate04;
        vueLaravelId.innerHTML = language.es.vueLaravel;
        goToVueLaravel.innerHTML = language.es.goToVueLaravel;
        projectDate08.innerHTML = language.es.projectDate08;
        vueQuizId.innerHTML = language.es.vueQuiz;
        goToVueQuiz.innerHTML = language.es.goToVueQuiz;
        projectDate09.innerHTML = language.es.projectDate09;

    } else if (window.location.hash === "#eng") {
        welcomeId.innerHTML = language.eng.welcome;
        titleId.innerHTML = language.eng.title;
        javascriptId.innerHTML = language.eng.javascript;
        goToExamples.innerHTML = language.eng.goToExamples;
        goToExamples.href = "javascript/index.html#eng";
        kdbId.innerHTML = language.eng.kdb;
        goToKDB.innerHTML = language.eng.goToKDB;
        projectDate04.innerHTML = language.eng.projectDate04;
        vueLaravelId.innerHTML = language.eng.vueLaravel;
        goToVueLaravel.innerHTML = language.eng.goToVueLaravel;
        projectDate08.innerHTML = language.eng.projectDate08;
        vueQuizId.innerHTML = language.eng.vueQuiz;
        goToVueQuiz.innerHTML = language.eng.goToVueQuiz;
        projectDate09.innerHTML = language.eng.projectDate09;
    }
}