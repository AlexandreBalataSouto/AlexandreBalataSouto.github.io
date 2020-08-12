var language = {
    eng: {
        welcome: "Welcome everyone!",
        title: "Alexandre M. Balata Souto's Portfolio",
        pictureShot: "This is an example web page made with <strong>Grid</strong> and <strong>Flexbox</strong>. The main page is made with Grid, to see the Flexbox page click on the Retratos section.",
        goToPictureShot: "Go to Picture shot",
        vrStation: "I desinged this website with <strong>Wordpress</strong> to help a client with his crowdfunding campaign.",
        goToVrStation: "Go to vrstation4education",
        javascript: "Javascript examples.",
        goToExamples: "Go to examples",
        gevil: "This is a project I made with a classmate, basically it´s an app for the management of invasive vegetal species made by the framework <strong>Laravel.</strong><br><strong>Here you´ll find only my part of the project.</strong><br><br><strong>Login Access:</strong><br>Email: gevil@example.com Password: gevil1234",
        goToGevil: "Go to GEVIL",
        kdb: "Here is my Superior Grade Formative Course final project of web application development. The idea was to help a small karate dojo of Lanzarote with the management of the students data, asistence and events. This project was made with <strong>Laravel</strong>, <strong>Materialize</strong> and it´s <strong>responsive.</strong><br><br><strong>Login Access:</strong><br>Email: kdb@example.com Password: csas1234",
        goToKDB: "Go to KDB"
    },
    es: {
        welcome: "¡Bienvenidos todos!",
        title: "Portfolio de Alexandre M. Balata Souto",
        pictureShot: "Esto es una pagina web de ejemplo hecha con <strong>Grid</strong> y <strong>Flexbox</strong>. La pagina principal esta hecha con Grid, para ver la pagina de Flexbox haga click en la seccion Retratos.",
        goToPictureShot: "Ir a Picture shot",
        vrStation: "Diseñe esta pagina con <strong>Wordpress</strong> para ayudar a un cliente con su campaña de crowdfunding.",
        goToVrStation: "Ir a vrstation4education",
        javascript: "Ejemplos de Javascript.",
        goToExamples: "Ir a ejemplos",
        gevil: "Este es un proyecto que realice con un compañero de clase, basicamente es una app para la gestion de especies vegetales invasoras desarrollado en el framework <strong>Laravel.</strong><br><strong>Aqui encontrara solo mi parte del proyecto.</strong><br><br><strong>Acceso de inicio de sesión</strong><br>Email: gevil@example.com Contraseña: gevil1234",
        goToGevil: "Ir a GEVIL",
        kdb: "Aquí está mi proyecto final del Ciclo Formativo de Grado Superior de desarrollo de aplicaciones web. La idea era ayudar a un pequeño dojo de kárate de Lanzarote con la gestión de los datos, asistencias y eventos de los alumnos. Este proyecto se hizo con <strong>Laravel</strong>, <strong>Materialize</strong> y es <strong>responsive.</strong><br><br><strong>Acceso de inicio de sesión:</strong><br>Email: kdb@example.com Contraseña: csas1234",
        goToKDB: "Ir a KDB"
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
        vrStationId.innerHTML = language.es.vrStation;
        goToVrStation.innerHTML = language.es.goToVrStation;
        javascriptId.innerHTML = language.es.javascript;
        goToExamples.innerHTML = language.es.goToExamples;
        goToExamples.href = "javascript/index.html#es";
        gevilId.innerHTML = language.es.gevil;
        goToGevil.innerHTML = language.es.goToGevil
        kdbId.innerHTML = language.es.kdb;
        goToKDB.innerHTML = language.es.goToKDB;
    } else if (window.location.hash === "#eng") {
        welcomeId.innerHTML = language.eng.welcome;
        titleId.innerHTML = language.eng.title;
        pictureShotId.innerHTML = language.eng.pictureShot;
        goToPictureShot.innerHTML = language.eng.goToPictureShot;
        vrStationId.innerHTML = language.eng.vrStation;
        goToVrStation.innerHTML = language.eng.goToVrStation;
        javascriptId.innerHTML = language.eng.javascript;
        goToExamples.innerHTML = language.eng.goToExamples;
        goToExamples.href = "javascript/index.html#eng";
        gevilId.innerHTML = language.eng.gevil;
        goToGevil.innerHTML = language.eng.goToGevil
        kdbId.innerHTML = language.eng.kdb;
        goToKDB.innerHTML = language.eng.goToKDB;
    }
}