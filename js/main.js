var language = {
    eng: {
        welcome: "Welcome everyone!",
        title: "Alexandre M. Balata Souto's Portfolio",
        pictureShot: "This is an example web page made with <strong>Grid</strong> and <strong>Flexbox</strong>. The main page is made with Grid, to see the Flexbox page click on the Retratos section.",
        goToPictureShot: "Go to Picture shot",
        projectDate01: "Project date: January 2019",
        vrStation: "I desinged this website with <strong>Wordpress</strong> to help a client with his crowdfunding campaign.",
        goToVrStation: "Go to vrstation4education",
        projectDate02: "Project date: April 2019",
        javascript: "Javascript examples.",
        goToExamples: "Go to examples",
        gevil: "This is a project I made with a classmate, basically it´s an app for the management of invasive vegetal species made by the framework <strong>Laravel.</strong><br><strong>Here you´ll find only my part of the project.</strong><br><br><strong>Login Access:</strong><br>Email: gevil@example.com Password: gevil1234",
        goToGevil: "Go to GEVIL",
        projectDate03: "Project date: January 2020",
        kdb: "Here is my Superior Grade Formative Course final project of web application development. The idea was to help a small karate dojo of Lanzarote with the management of the students data, asistence and events. This project was made with <strong>Laravel</strong>, <strong>Materialize</strong> and it´s <strong>responsive.</strong><br><br><strong>Login Access:</strong><br>Email: kdb@example.com Password: csas1234",
        goToKDB: "Go to KDB",
        projectDate04: "Project date: June 2020",
        vueLaravel: "A SPA (single page application) made with the javascript framework <strong>Vue.js</strong> and the php framework <strong>Laravel</strong>",
        goToVueLaravel: "Go to Vue-Laravel",
        projectDate08: "Project date: August 2020",
        vueQuiz: "This is a quiz about cinema made with the javascript framework <strong>Vue.js</strong>",
        goToVueQuiz: "Go to Vue-Quiz",
        projectDate09: "Project date: September 2020",
        
    },
    es: {
        welcome: "¡Bienvenidos todos!",
        title: "Portfolio de Alexandre M. Balata Souto",
        pictureShot: "Esto es una pagina web de ejemplo hecha con <strong>Grid</strong> y <strong>Flexbox</strong>. La pagina principal esta hecha con Grid, para ver la pagina de Flexbox haga click en la seccion Retratos.",
        goToPictureShot: "Ir a Picture shot",
        projectDate01: "Fecha del proyecto: Enero 2019",
        vrStation: "Diseñe esta pagina con <strong>Wordpress</strong> para ayudar a un cliente con su campaña de crowdfunding.",
        goToVrStation: "Ir a vrstation4education",
        projectDate02: "Fecha del proyecto: Abril 2019",
        javascript: "Ejemplos de Javascript.",
        goToExamples: "Ir a ejemplos",
        gevil: "Este es un proyecto que realice con un compañero de clase, basicamente es una app para la gestion de especies vegetales invasoras desarrollado en el framework <strong>Laravel.</strong><br><strong>Aqui encontrara solo mi parte del proyecto.</strong><br><br><strong>Acceso de inicio de sesión</strong><br>Email: gevil@example.com Contraseña: gevil1234",
        goToGevil: "Ir a GEVIL",
        projectDate03: "Fecha del proyecto: Enero 2020",
        kdb: "Aquí está mi proyecto final del Ciclo Formativo de Grado Superior de desarrollo de aplicaciones web. La idea era ayudar a un pequeño dojo de kárate de Lanzarote con la gestión de los datos, asistencias y eventos de los alumnos. Este proyecto se hizo con <strong>Laravel</strong>, <strong>Materialize</strong> y es <strong>responsive.</strong><br><br><strong>Acceso de inicio de sesión:</strong><br>Email: kdb@example.com Contraseña: csas1234",
        goToKDB: "Ir a KDB",
        projectDate04: "Fecha del proyecto: Junio 2020",
        vueLaravel: "Una SPA (single page application) hecha con el framework de javascript <strong>Vue.js</strong> y el framework de php <strong>Laravel</strong>",
        goToVueLaravel: "Ir a Vue-Laravel",
        projectDate08: "Fecha del proyecto: Agosto 2020",
        vueQuiz: "Esto es un test sobre cine hecho con el framework de javascript <strong>Vue.js</strong>",
        goToVueQuiz: "Ir a Vue-Quiz",
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
        pictureShotId.innerHTML = language.es.pictureShot;
        goToPictureShot.innerHTML = language.es.goToPictureShot;
        projectDate01.innerHTML = language.es.projectDate01;
        vrStationId.innerHTML = language.es.vrStation;
        goToVrStation.innerHTML = language.es.goToVrStation;
        projectDate02.innerHTML = language.es.projectDate02;
        javascriptId.innerHTML = language.es.javascript;
        goToExamples.innerHTML = language.es.goToExamples;
        goToExamples.href = "javascript/index.html#es";
        gevilId.innerHTML = language.es.gevil;
        goToGevil.innerHTML = language.es.goToGevil
        projectDate03.innerHTML = language.es.projectDate03;
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
        pictureShotId.innerHTML = language.eng.pictureShot;
        goToPictureShot.innerHTML = language.eng.goToPictureShot;
        projectDate01.innerHTML = language.eng.projectDate01;
        vrStationId.innerHTML = language.eng.vrStation;
        goToVrStation.innerHTML = language.eng.goToVrStation;
        projectDate02.innerHTML = language.eng.projectDate02;
        javascriptId.innerHTML = language.eng.javascript;
        goToExamples.innerHTML = language.eng.goToExamples;
        goToExamples.href = "javascript/index.html#eng";
        gevilId.innerHTML = language.eng.gevil;
        goToGevil.innerHTML = language.eng.goToGevil
        projectDate03.innerHTML = language.eng.projectDate03;
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