window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

if (window.SpeechRecognition === null) {
    alert('Recurso não suportado');
} else {
    const recognizer =  new SpeechRecognition();
    const recresult = document.getElementById('recresult');

    recognizer.continuous = true;

    recognizer.onresult = function (e) {
        recresult.innerText = '';

        for (let i = e.resultIndex; i < e.results.length; i++) {
            recresult.innerText += e.results[i][0].transcript;
            if (e.results[i].isFinal) {
                recresult.innerText += " (Convicção " + e.results[i][0].confidence + ")"
            }
        }
    }

    document.getElementById('startrec').addEventListener('click', function () {
        recognizer.start();
    })

    document.getElementById('stoprec').addEventListener('click', function () {
        recognizer.stop();
    })
}
